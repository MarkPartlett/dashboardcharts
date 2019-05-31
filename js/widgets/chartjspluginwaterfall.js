'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }


var merge = _interopDefault(require('lodash.merge'));
var groupBy = _interopDefault(require('lodash.groupby'));



var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

















































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var DEBUG = false;

var drawOnCanvas = function drawOnCanvas(context, options, currentDatapointValues, nextDatapointValues) {
  var currentStackBase = currentDatapointValues.stackBase;
  var nextStackBase = nextDatapointValues.stackBase;
  var currentStackTopYPos = currentDatapointValues.stackTopYPos;
  var nextStackTopYPos = nextDatapointValues.stackTopYPos;

  /* If the heights match top to bottom or bottom to top then
  flip the top coordinates to be at the bottom so that a horizontal step line is drawn */
  if (currentStackTopYPos === nextStackBase) {
    nextStackTopYPos = nextStackBase;
    nextStackBase = nextDatapointValues.dummyStackBase;
  } else if (currentStackBase === nextStackTopYPos) {
    currentStackTopYPos = currentStackBase;
    currentStackBase = currentDatapointValues.dummyStackBase;
  }

  // We need to flip the y co-ords if one of the datasets is negative and the other isn't
  if (!currentDatapointValues.isPositive && nextDatapointValues.isPositive) {
    nextStackTopYPos = nextStackBase;
    nextStackBase = nextDatapointValues.stackTopYPos;
  }

  if (currentDatapointValues.isPositive && !nextDatapointValues.isPositive) {
    currentStackTopYPos = currentStackBase;
    currentStackBase = currentDatapointValues.stackTopYPos;
  }

  // Draws co-ords on the canvas to allow easier debugging
  if (DEBUG) {
    context.font = '9px Arial';
    context.fillStyle = '#000';
    context.fillText('TR: ' + currentDatapointValues.stackRightXPos.toFixed(0), currentDatapointValues.stackRightXPos, currentStackTopYPos);
    context.fillText('TL: ' + nextDatapointValues.stackLeftXPos.toFixed(0), nextDatapointValues.stackLeftXPos, nextStackTopYPos);
    context.fillText('BL: ' + nextStackBase.toFixed(0), nextDatapointValues.stackLeftXPos, nextStackBase);
    context.fillText('BR: ' + currentStackBase.toFixed(0), currentDatapointValues.stackRightXPos, currentStackBase);
  }

  // Makes sure that each step line is consistent
  var yStart = currentStackTopYPos > nextStackTopYPos ? currentStackTopYPos : nextStackTopYPos;
  var yEnd = currentStackBase > nextStackBase ? currentStackBase : nextStackBase;

  // Gradient from top of second box to bottom of both boxes
  var gradient = context.createLinearGradient(0, yStart, 0, yEnd);

  // Dataset options take priority if they are specified
  var startColor = currentDatapointValues.options.startColor || options.startColor;
  var endColor = currentDatapointValues.options.endColor || options.endColor;
  var startColorStop = currentDatapointValues.options.startColorStop || options.startColorStop;
  var endColorStop = currentDatapointValues.options.endColorStop || options.endColorStop;

  gradient.addColorStop(startColorStop, startColor);
  gradient.addColorStop(endColorStop, endColor);

  context.fillStyle = gradient;

  context.beginPath();

  // top right of first box
  context.lineTo(currentDatapointValues.stackRightXPos, currentStackTopYPos);
  // top left of second box
  context.lineTo(nextDatapointValues.stackLeftXPos, nextStackTopYPos);
  // bottom left of second box
  context.lineTo(nextDatapointValues.stackLeftXPos, nextStackBase);
  // bottom right of first box
  context.lineTo(currentDatapointValues.stackRightXPos, currentStackBase);

  context.fill();
};

var drawStepLines = (function (chart) {
  var context = chart.ctx;
  var datasets = chart.data.datasets;
  var options = chart.options.plugins.waterFallPlugin.stepLines;
  var stackedDatasets = groupBy(datasets, 'stack');
  var newDatasets = [];

  var getModel = function getModel(dataset) {
    var firstKey = Object.keys(dataset._meta)[0];

    return dataset._meta[firstKey].data[0]._model;
  };

  Object.keys(stackedDatasets).forEach(function (key) {
    var currentStackedDataset = stackedDatasets[key].filter(function (x) {
      return x.data[0] !== 0;
    });

    if (!currentStackedDataset.every(function (x) {
      return x.waterfall.dummyStack;
    })) {
      var nonDummyStacks = currentStackedDataset.filter(function (dataset) {
        return !dataset.waterfall.dummyStack;
      });
      var bases = nonDummyStacks.map(function (dataset) {
        return getModel(dataset).base;
      });
      var lowestBase = Math.max.apply(Math, toConsumableArray(bases));

      var dummStackBases = currentStackedDataset.map(function (dataset) {
        return getModel(dataset).base;
      });
      var lowestDummyStackBase = Math.max.apply(Math, toConsumableArray(dummStackBases));

      // Loop through each sub stack
      var properties = currentStackedDataset.map(function (dataset) {
        var model = getModel(dataset);

        return {
          stackRightXPos: model.x + model.width / 2,
          stackLeftXPos: model.x - model.width / 2,
          stackTopYPos: model.y,
          stackBase: lowestBase,
          dummyStackBase: lowestDummyStackBase,
          isPositive: dataset.data[0] > 0,
          options: dataset.waterfall.stepLines
        };
      });

      newDatasets.push(properties);
    }
  });

  // Gets the values for the steplines at the top of the stack
  var getDatapointsValues = function getDatapointsValues(dataset) {
    var index = dataset.length - 1;

    return {
      stackRightXPos: dataset[index].stackRightXPos,
      stackLeftXPos: dataset[index].stackLeftXPos,
      stackTopYPos: dataset[index].stackTopYPos,
      stackBase: dataset[index].stackBase,
      dummyStackBase: dataset[index].dummyStackBase,
      isPositive: dataset[index].isPositive,
      options: dataset[index].options
    };
  };

  for (var i = 0; i < newDatasets.length; i += 1) {
    var currentDataSet = newDatasets[i];

    if (i !== newDatasets.length - 1) {
      var nextDataSet = newDatasets[i + 1];
      var currentDatapointValues = getDatapointsValues(currentDataSet);
      var nextDatapointValues = getDatapointsValues(nextDataSet);

      if (currentDatapointValues.stackTopYPos === nextDatapointValues.stackTopYPos || currentDatapointValues.stackBase === nextDatapointValues.stackTopYPos || currentDatapointValues.stackTopYPos === nextDatapointValues.stackBase) {
        drawOnCanvas(context, options, currentDatapointValues, nextDatapointValues);
      }
    }
  }
});

var defaultOptions = {
  waterFallPlugin: {
    stepLines: {
      enabled: true,
      startColorStop: 0,
      endColorStop: 0.6,
      startColor: 'rgba(0, 0, 0, 0.55)', // opaque
      endColor: 'rgba(0, 0, 0, 0)' // transparent
    }
  }
};

var status = {};

var filterDummyStacks = function filterDummyStacks(legendItem, chartData) {
  var currentDataset = chartData.datasets[legendItem.datasetIndex];

  return !currentDataset.waterfall.dummyStack;
};

var initializeDatasets = function initializeDatasets(chart) {
  chart.data.datasets.forEach(function (dataset) {
    dataset.waterfall = merge({}, {
      stepLines: {}
    }, dataset.waterfall);

    if (dataset.waterfall.dummyStack) {
      dataset.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
  });
};

var waterFallPlugin = {
  beforeInit: function beforeInit(chart) {
    status[chart.id] = {
      readyToDrawStepLines: false
    };
  },
  afterInit: function afterInit(chart) {
    initializeDatasets(chart);

    chart.options.plugins = merge({}, defaultOptions, chart.options.plugins);
    chart.options.tooltips.filter = filterDummyStacks;
    chart.options.legend.labels.filter = filterDummyStacks;

    // Can't override onComplete function because it gets overwridden if user using React
    setTimeout(function () {
      status[chart.id].readyToDrawStepLines = true;
      if (chart.ctx !== null) {
        chart.draw();
      }
    }, chart.options.animation.duration);
  },
  afterDraw: function afterDraw(chart) {
    var options = chart.options.plugins.waterFallPlugin;

    initializeDatasets(chart);

    if (options.stepLines.enabled && status[chart.id].readyToDrawStepLines) {
      drawStepLines(chart);
    }
  }
};

module.exports = chartjspluginwaterfall;
//# sourceMappingURL=chartjs-plugin-waterfall.js.map

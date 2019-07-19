/*
  Highcharts JS v7.1.2 (2019-06-03)

 Highcharts variwide module

 (c) 2010-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/variwide",["highcharts"],function(c){a(c);a.Highcharts=c;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function c(f,a,c,g){f.hasOwnProperty(a)||(f[a]=g.apply(null,c))}a=a?a._modules:{};c(a,"modules/variwide.src.js",[a["parts/Globals.js"]],function(a){var c=a.addEvent,f=a.seriesType,g=a.seriesTypes,m=a.pick;f("variwide",
"column",{pointPadding:0,groupPadding:0},{pointArrayMap:["y","z"],parallelArrays:["x","y","z"],processData:function(a){this.totalZ=0;this.relZ=[];g.column.prototype.processData.call(this,a);(this.xAxis.reversed?this.zData.slice().reverse():this.zData).forEach(function(a,b){this.relZ[b]=this.totalZ;this.totalZ+=a},this);this.xAxis.categories&&(this.xAxis.variwide=!0,this.xAxis.zData=this.zData)},postTranslate:function(a,h,k){var b=this.xAxis,d=this.relZ;a=b.reversed?d.length-a:a;var p=b.reversed?-1:
1,l=b.len,c=this.totalZ,b=a/d.length*l,q=(a+p)/d.length*l,e=m(d[a],c)/c*l,d=m(d[a+p],c)/c*l;k&&(k.crosshairWidth=d-e);return e+(h-b)*(d-e)/(q-b)},translate:function(){var a=this.options.crisp,h=this.xAxis;this.options.crisp=!1;g.column.prototype.translate.call(this);this.options.crisp=a;var c=this.chart.inverted,n=this.borderWidth%2/2;this.points.forEach(function(a,b){var d;h.variwide?(d=this.postTranslate(b,a.shapeArgs.x,a),b=this.postTranslate(b,a.shapeArgs.x+a.shapeArgs.width)):(d=a.plotX,b=h.translate(a.x+
a.z,0,0,0,1));this.options.crisp&&(d=Math.round(d)-n,b=Math.round(b)-n);a.shapeArgs.x=d;a.shapeArgs.width=b-d;a.plotX=(d+b)/2;c?a.tooltipPos[1]=h.len-a.shapeArgs.x-a.shapeArgs.width/2:a.tooltipPos[0]=a.shapeArgs.x+a.shapeArgs.width/2},this)}},{isValid:function(){return a.isNumber(this.y,!0)&&a.isNumber(this.z,!0)}});a.Tick.prototype.postTranslate=function(a,c,k){var b=this.axis,d=a[c]-b.pos;b.horiz||(d=b.len-d);d=b.series[0].postTranslate(k,d);b.horiz||(d=b.len-d);a[c]=b.pos+d};c(a.Axis,"afterDrawCrosshair",
function(a){this.variwide&&this.cross&&this.cross.attr("stroke-width",a.point&&a.point.crosshairWidth)});c(a.Axis,"afterRender",function(){var a=this;!this.horiz&&this.variwide&&this.chart.labelCollectors.push(function(){return a.tickPositions.map(function(b,c){b=a.ticks[b].label;b.labelrank=a.zData[c];return b})})});c(a.Tick,"afterGetPosition",function(a){var b=this.axis,c=b.horiz?"x":"y";b.variwide&&(this[c+"Orig"]=a.pos[c],this.postTranslate(a.pos,c,this.pos))});a.wrap(a.Tick.prototype,"getLabelPosition",
function(a,c,k,f,d,g,l,m){var b=Array.prototype.slice.call(arguments,1),e=d?"x":"y";this.axis.variwide&&"number"===typeof this[e+"Orig"]&&(b[d?0:1]=this[e+"Orig"]);b=a.apply(this,b);this.axis.variwide&&this.axis.categories&&this.postTranslate(b,e,m);return b})});c(a,"masters/modules/variwide.src.js",[],function(){})});
//# sourceMappingURL=variwide.js.map

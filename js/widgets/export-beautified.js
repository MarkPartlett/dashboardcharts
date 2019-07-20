/*

Highcharts Editor v0.3.0

Copyright (c) 2016-2017, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
highed.plugins.export.install("beautify-js",{title:"Beautified JavaScript",description:"Exports well-formatted JavaScript",dependencies:["https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.18.2/codemirror.min.js","https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.18.2/codemirror.min.css","https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.18.2/theme/neo.min.css","https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.18.2/mode/javascript/javascript.min.js"],downloadOutput:!0,exportTitle:"Download",options:{node:{label:"Node to append chart to",type:"string",default:"document.body"}},create:function(t,e){this.textarea=highed.dom.cr("textarea"),highed.dom.ap(e,this.textarea),this.cm=CodeMirror.fromTextArea(this.textarea,{lineNumbers:!0,mode:"javascript",readOnly:!0,theme:"neo"}),this.update=function(t){var e=t.export.json(!0),o=t.getCustomCode();e.chart&&e.chart.renderTo&&delete e.chart.renderTo,this.cm.setValue(["var options = ",JSON.stringify(e,!1,"    "),";\n",o?o+"\n":"","var chart = new Highcharts."+t.getConstructor()+"(",this.options.node,", options",");"].join("")),this.cm.refresh(),this.cm.focus()},this.update.call(this,t)},show:function(t){this.update.call(this,t)},export:function(t,e,o){o(!1,this.cm.getValue(),"chart.js")}});
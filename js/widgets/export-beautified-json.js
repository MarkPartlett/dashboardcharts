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
highed.plugins.export.install("beautify-json",{title:"Beautified JSON",description:"Exports well-formatted JSON",dependencies:["https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.18.2/codemirror.min.js","https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.18.2/codemirror.min.css","https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.18.2/theme/neo.min.css","https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.18.2/mode/javascript/javascript.min.js"],downloadOutput:!0,exportTitle:"Download",create:function(e,t){this.textarea=highed.dom.cr("textarea"),highed.dom.ap(t,this.textarea),this.cm=CodeMirror.fromTextArea(this.textarea,{lineNumbers:!0,mode:"javascript",readOnly:!0,theme:"neo"}),this.update=function(e){var t=e.export.json();t.chart&&t.chart.renderTo&&delete t.chart.renderTo,this.cm.setValue(JSON.stringify(t,void 0,"    ")),this.cm.refresh(),this.cm.focus()},this.update.call(this,e)},show:function(e){this.update.call(this,e)},export:function(e,t,r){r(!1,this.cm.getValue(),"chart.json")}});
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
highed.plugins.import.install("Socrata",{description:'Socrata is an open data format commonly used for various government sources. <a href="http://www.opendatanetwork.com/" target="_blank">http://www.opendatanetwork.com/</a>',treatAs:"csv",fetchAs:"json",defaultURL:"https://finances.worldbank.org/resource/czdd-amke.json?$order=fiscal_year ASC&$where=vpu_group_code='REG'",options:{includeFields:{type:"string",label:"Fields to include, separate by whitespace",default:"fiscal_year amount_us_millions_"}},filter:function(e,n,a){var o=[],t=[];n.includeFields=highed.arrToObj(n.includeFields.split(" ")),highed.isArr(e)&&(e=e.map(function(e){var a={};return Object.keys(n.includeFields).forEach(function(n){a[n]=e[n]}),a}),e.forEach(function(e,a){var i=[];Object.keys(e).forEach(function(o){var r=e[o];n.includeFields[o]&&(0==a&&t.push(o),i.push(parseInt(r)||r))}),o.push(i.join(","))})),a(!1,[t.join(",")].concat(o).join("\n"))}});
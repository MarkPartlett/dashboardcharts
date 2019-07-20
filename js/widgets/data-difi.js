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
highed.plugins.import.install("Difi",{description:'Imports data from the Norwegian Agency for Public Management and eGovernment. <a href="http://difi.no" target="_blank">www.difi.no</a>',treatAs:"csv",fetchAs:!1,defaultURL:"http://hotell.difi.no/api/json/fad/lonn/a-tabell",options:{includeFields:{type:"string",label:"Fields to include, separate by whitespace",default:"trinn brutto-mnd"}},filter:function(e,i,n){var t=[],a=[];try{e=JSON.parse(e)}catch(e){n(e)}i.includeFields=highed.arrToObj(i.includeFields.split(" ")),highed.isArr(e.entries)&&(e.entries=e.entries.map(function(e){var n={};return Object.keys(i.includeFields).forEach(function(i){n[i]=e[i]}),n}),e.entries.forEach(function(e,n){var r=[];Object.keys(e).forEach(function(t){var o=e[t];i.includeFields[t]&&(0==n&&a.push(t),o=o.replace(",","."),r.push(o))}),t.push(r.join(","))})),n(!1,[a.join(",")].concat(t).join("\n"))}});
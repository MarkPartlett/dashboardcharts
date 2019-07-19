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
highed.plugins.import.install("Google Spreadsheets",{description:"Import from Google Spreadsheets. The worksheet option may be left blank to load the first sheet.",surpressURL:!0,options:{key:{type:"string",label:"Spreadsheet key",default:"0AoIaUO7wH1HwdENPcGVEVkxfUDJkMmFBcXMzOVVPdHc"},sheet:{type:"string",label:"Worksheet",default:""}},dependencies:["https://code.jquery.com/jquery-2.2.4.min.js"],request:function(e,t,s){s(!1,{data:{googleSpreadsheetKey:t.key,googleSpreadsheetWorksheet:t.sheet||!1}})}});
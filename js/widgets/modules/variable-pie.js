/*
  Highcharts JS v7.1.2 (2019-06-03)

 Variable Pie module for Highcharts

 (c) 2010-2019 Grzegorz Blachliski

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/variable-pie",["highcharts"],function(g){a(g);a.Highcharts=g;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function g(a,r,g,p){a.hasOwnProperty(r)||(a[r]=p.apply(null,g))}a=a?a._modules:{};g(a,"modules/variable-pie.src.js",[a["parts/Globals.js"]],function(a){var g=a.pick,u=a.arrayMin,p=a.arrayMax,v=a.seriesType,w=
a.seriesTypes.pie.prototype;v("variablepie","pie",{minPointSize:"10%",maxPointSize:"100%",zMin:void 0,zMax:void 0,sizeBy:"area",tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}\x3cbr/\x3eValue: {point.y}\x3cbr/\x3eSize: {point.z}\x3cbr/\x3e'}},{pointArrayMap:["y","z"],parallelArrays:["x","y","z"],redraw:function(){this.center=null;w.redraw.call(this,arguments)},zValEval:function(b){return"number"!==typeof b||isNaN(b)?null:!0},calculateExtremes:function(){var b=
this.chart,a=this.options,d;d=this.zData;var t=Math.min(b.plotWidth,b.plotHeight)-2*(a.slicedOffset||0),h={},b=this.center||this.getCenter();["minPointSize","maxPointSize"].forEach(function(b){var c=a[b],d=/%$/.test(c),c=parseInt(c,10);h[b]=d?t*c/100:2*c});this.minPxSize=b[3]+h.minPointSize;this.maxPxSize=Math.max(Math.min(b[2],h.maxPointSize),b[3]+h.minPointSize);d.length&&(b=g(a.zMin,u(d.filter(this.zValEval))),d=g(a.zMax,p(d.filter(this.zValEval))),this.getRadii(b,d,this.minPxSize,this.maxPxSize))},
getRadii:function(b,a,d,g){var h=0,e,c=this.zData,l=c.length,m=[],q="radius"!==this.options.sizeBy,k=a-b;for(h;h<l;h++)e=this.zValEval(c[h])?c[h]:b,e<=b?e=d/2:e>=a?e=g/2:(e=0<k?(e-b)/k:.5,q&&(e=Math.sqrt(e)),e=Math.ceil(d+e*(g-d))/2),m.push(e);this.radii=m},translate:function(b){this.generatePoints();var a=0,d=this.options,t=d.slicedOffset,h=t+(d.borderWidth||0),e,c,l,m=d.startAngle||0,q=Math.PI/180*(m-90),k=Math.PI/180*(g(d.endAngle,m+360)-90),m=k-q,p=this.points,r,u=d.dataLabels.distance,d=d.ignoreHiddenPoint,
v=p.length,f,n;this.startAngleRad=q;this.endAngleRad=k;this.calculateExtremes();b||(this.center=b=this.getCenter());for(k=0;k<v;k++){f=p[k];n=this.radii[k];f.labelDistance=g(f.options.dataLabels&&f.options.dataLabels.distance,u);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,f.labelDistance);c=q+a*m;if(!d||f.visible)a+=f.percentage/100;l=q+a*m;f.shapeType="arc";f.shapeArgs={x:b[0],y:b[1],r:n,innerR:b[3]/2,start:Math.round(1E3*c)/1E3,end:Math.round(1E3*l)/1E3};c=(l+c)/2;c>1.5*Math.PI?c-=2*
Math.PI:c<-Math.PI/2&&(c+=2*Math.PI);f.slicedTranslation={translateX:Math.round(Math.cos(c)*t),translateY:Math.round(Math.sin(c)*t)};e=Math.cos(c)*b[2]/2;r=Math.sin(c)*b[2]/2;l=Math.cos(c)*n;n*=Math.sin(c);f.tooltipPos=[b[0]+.7*e,b[1]+.7*r];f.half=c<-Math.PI/2||c>Math.PI/2?1:0;f.angle=c;e=Math.min(h,f.labelDistance/5);f.labelPosition={natural:{x:b[0]+l+Math.cos(c)*f.labelDistance,y:b[1]+n+Math.sin(c)*f.labelDistance},"final":{},alignment:f.half?"right":"left",connectorPosition:{breakAt:{x:b[0]+l+
Math.cos(c)*e,y:b[1]+n+Math.sin(c)*e},touchingSliceAt:{x:b[0]+l,y:b[1]+n}}}}}})});g(a,"masters/modules/variable-pie.src.js",[],function(){})});
//# sourceMappingURL=variable-pie.js.map

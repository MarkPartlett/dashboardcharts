/*
 Highcharts JS v7.1.2 (2019-06-03)

 Highcharts cylinder module

 (c) 2010-2019 Kacper Madej

 License: www.highcharts.com/license
*/
(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define("highcharts/modules/cylinder",["highcharts","highcharts/highcharts-3d"],function(e){c(e);c.Highcharts=e;return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){function e(c,e,h,l){c.hasOwnProperty(e)||(c[e]=l.apply(null,h))}c=c?c._modules:{};e(c,"modules/cylinder.src.js",[c["parts/Globals.js"]],function(c){var e=c.charts,h=c.color,l=c.deg2rad,
t=c.perspective,u=c.pick,m=c.seriesType,g=c.Renderer.prototype,v=g.cuboidPath;m("cylinder","column",{},{},{shapeType:"cylinder"});c=c.merge(g.elements3d.cuboid,{parts:["top","bottom","front","back"],pathType:"cylinder",fillSetter:function(a){this.singleSetterForParts("fill",null,{front:a,back:a,top:h(a).brighten(.1).get(),bottom:h(a).brighten(-.1).get()});this.color=this.fill=a;return this}});g.elements3d.cylinder=c;g.cylinder=function(a){return this.element3d("cylinder",a)};g.cylinderPath=function(a){var b=
e[this.chartIndex],d=v.call(this,a),c=!d.isTop,f=!d.isFront,g=this.getCylinderEnd(b,a);a=this.getCylinderEnd(b,a,!0);return{front:this.getCylinderFront(g,a),back:this.getCylinderBack(g,a),top:g,bottom:a,zIndexes:{top:c?3:0,bottom:c?0:3,front:f?2:1,back:f?1:2,group:d.zIndexes.group}}};g.getCylinderFront=function(a,b){a=a.slice(0,a.simplified?9:17);a.push("L");b.simplified?(a=a.concat(b.slice(7,9)).concat(b.slice(3,6)).concat(b.slice(0,3)),a[a.length-3]="L"):a.push(b[15],b[16],"C",b[13],b[14],b[11],
b[12],b[8],b[9],"C",b[6],b[7],b[4],b[5],b[1],b[2]);a.push("Z");return a};g.getCylinderBack=function(a,b){var d=["M"];a.simplified?(d=d.concat(a.slice(7,12)),d.push("L",a[1],a[2])):d=d.concat(a.slice(15));d.push("L");b.simplified?d=d.concat(b.slice(1,3)).concat(b.slice(9,12)).concat(b.slice(6,9)):d.push(b[29],b[30],"C",b[27],b[28],b[25],b[26],b[22],b[23],"C",b[20],b[21],b[18],b[19],b[15],b[16]);d.push("Z");return d};g.getCylinderEnd=function(a,b,d){var c=u(b.depth,b.width),f=Math.min(b.width,c)/2,
g=l*(a.options.chart.options3d.beta-90+(b.alphaCorrection||0));d=b.y+(d?b.height:0);var e=.5519*f,h=b.width/2+b.x,m=c/2+b.z,k=[{x:0,y:d,z:f},{x:e,y:d,z:f},{x:f,y:d,z:e},{x:f,y:d,z:0},{x:f,y:d,z:-e},{x:e,y:d,z:-f},{x:0,y:d,z:-f},{x:-e,y:d,z:-f},{x:-f,y:d,z:-e},{x:-f,y:d,z:0},{x:-f,y:d,z:e},{x:-e,y:d,z:f},{x:0,y:d,z:f}],q=Math.cos(g),r=Math.sin(g),n,p;k.forEach(function(a,b){n=a.x;p=a.z;k[b].x=n*q-p*r+h;k[b].z=p*q+n*r+m});a=t(k,a,!0);2.5>Math.abs(a[3].y-a[9].y)&&2.5>Math.abs(a[0].y-a[6].y)?(a=this.toLinePath([a[0],
a[3],a[6],a[9]],!0),a.simplified=!0):a=this.getCurvedPath(a);return a};g.getCurvedPath=function(a){var b=["M",a[0].x,a[0].y],c=a.length-2,e;for(e=1;e<c;e+=3)b.push("C",a[e].x,a[e].y,a[e+1].x,a[e+1].y,a[e+2].x,a[e+2].y);return b}});e(c,"masters/modules/cylinder.src.js",[],function(){})});
//# sourceMappingURL=cylinder.js.map

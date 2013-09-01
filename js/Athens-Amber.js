smalltalk.addPackage('Athens-Amber');
smalltalk.addClass('CanvasContext2D', smalltalk.Object, [], 'Athens-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "beginPath",
category: 'paths',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.beginPath(); ;
return self}, function($ctx1) {$ctx1.fill(self,"beginPath",{},smalltalk.CanvasContext2D)})},
args: [],
source: "beginPath\x0a\x09< self.beginPath(); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "bezierCurveVia:and:to:",
category: 'paths',
fn: function (pt1,pt2,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.bezierCurveTo(pt1._x(), pt1._y(), pt2._x(), pt2._y(), aPoint._x(), aPoint._y()); ;
return self}, function($ctx1) {$ctx1.fill(self,"bezierCurveVia:and:to:",{pt1:pt1,pt2:pt2,aPoint:aPoint},smalltalk.CanvasContext2D)})},
args: ["pt1", "pt2", "aPoint"],
source: "bezierCurveVia: pt1 and: pt2 to: aPoint\x0a\x09< self.bezierCurveTo(pt1._x(), pt1._y(), pt2._x(), pt2._y(), aPoint._x(), aPoint._y()); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "clearRect:",
category: 'rectangles',
fn: function (rect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._clearRect_a_a_a_(_st(rect)._left(),_st(rect)._top(),_st(rect)._right(),_st(rect)._bottom());
return self}, function($ctx1) {$ctx1.fill(self,"clearRect:",{rect:rect},smalltalk.CanvasContext2D)})},
args: ["rect"],
source: "clearRect: rect\x0a\x09self clearRect: rect left a: rect top a: rect right a: rect bottom.",
messageSends: ["clearRect:a:a:a:", "left", "top", "right", "bottom"],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "clearRect:a:a:a:",
category: 'private',
fn: function (left,top,right,bottom){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.clearRect(left, top, right, bottom); ;
return self}, function($ctx1) {$ctx1.fill(self,"clearRect:a:a:a:",{left:left,top:top,right:right,bottom:bottom},smalltalk.CanvasContext2D)})},
args: ["left", "top", "right", "bottom"],
source: "clearRect: left a: top a: right a: bottom\x0a\x09< self.clearRect(left, top, right, bottom); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "clip",
category: 'paths',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.clip(); ;
return self}, function($ctx1) {$ctx1.fill(self,"clip",{},smalltalk.CanvasContext2D)})},
args: [],
source: "clip\x0a\x09< self.clip(); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "closePath",
category: 'paths',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.closePath(); ;
return self}, function($ctx1) {$ctx1.fill(self,"closePath",{},smalltalk.CanvasContext2D)})},
args: [],
source: "closePath\x0a\x09< self.closePath(); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "createLinearGradient:a:a:a:",
category: 'private',
fn: function (x1,y1,x2,y2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.createLinearGradient(x1, y1, x2, y2); ;
return self}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:a:a:a:",{x1:x1,y1:y1,x2:x2,y2:y2},smalltalk.CanvasContext2D)})},
args: ["x1", "y1", "x2", "y2"],
source: "createLinearGradient: x1 a: y1 a: x2 a: y2\x0a\x09< return self.createLinearGradient(x1, y1, x2, y2); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "createLinearGradientFrom:to:",
category: 'styles',
fn: function (start,stop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._createLinearGradient_a_a_a_(_st(start)._x(),_st(start)._y(),_st(stop)._x(),_st(stop)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"createLinearGradientFrom:to:",{start:start,stop:stop},smalltalk.CanvasContext2D)})},
args: ["start", "stop"],
source: "createLinearGradientFrom: start to: stop\x0a\x09^ self createLinearGradient: start x a: start y a: stop x a: stop y",
messageSends: ["createLinearGradient:a:a:a:", "x", "y"],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "createPattern:repeat:",
category: 'styles',
fn: function (source,repeatMode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.createPattern(source, repeatMode); ;
return self}, function($ctx1) {$ctx1.fill(self,"createPattern:repeat:",{source:source,repeatMode:repeatMode},smalltalk.CanvasContext2D)})},
args: ["source", "repeatMode"],
source: "createPattern: source repeat: repeatMode\x0a\x09< self.createPattern(source, repeatMode); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "createRadialGradient:a:a:a:a:a:",
category: 'private',
fn: function (x1,y1,innerRadius,x2,y2,outerRadius){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.createRadialGradient(x1, y1, innerRadius, x2, y2, outerRadius); ;
return self}, function($ctx1) {$ctx1.fill(self,"createRadialGradient:a:a:a:a:a:",{x1:x1,y1:y1,innerRadius:innerRadius,x2:x2,y2:y2,outerRadius:outerRadius},smalltalk.CanvasContext2D)})},
args: ["x1", "y1", "innerRadius", "x2", "y2", "outerRadius"],
source: "createRadialGradient: x1 a: y1 a: innerRadius a: x2 a: y2 a: outerRadius\x0a\x09< return self.createRadialGradient(x1, y1, innerRadius, x2, y2, outerRadius); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "createRadialGradientFrom:with:to:with:",
category: 'styles',
fn: function (start,innerRadius,stop,outerRadius){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._createRadialGradient_a_a_a_a_a_(_st(start)._x(),_st(start)._y(),innerRadius,_st(stop)._x(),_st(stop)._y(),outerRadius);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createRadialGradientFrom:with:to:with:",{start:start,innerRadius:innerRadius,stop:stop,outerRadius:outerRadius},smalltalk.CanvasContext2D)})},
args: ["start", "innerRadius", "stop", "outerRadius"],
source: "createRadialGradientFrom: start with: innerRadius to: stop with: outerRadius\x0a\x09^ self createRadialGradient: start x a: start y a: innerRadius a: stop x a: stop y a: outerRadius",
messageSends: ["createRadialGradient:a:a:a:a:a:", "x", "y"],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "fill",
category: 'paths',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.fill(); ;
return self}, function($ctx1) {$ctx1.fill(self,"fill",{},smalltalk.CanvasContext2D)})},
args: [],
source: "fill\x0a\x09< self.fill(); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRect:",
category: 'rectangles',
fn: function (rect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._fillRect_a_a_a_(_st(rect)._left(),_st(rect)._top(),_st(rect)._right(),_st(rect)._bottom());
return self}, function($ctx1) {$ctx1.fill(self,"fillRect:",{rect:rect},smalltalk.CanvasContext2D)})},
args: ["rect"],
source: "fillRect: rect\x0a\x09self fillRect: rect left a: rect top a: rect right a: rect bottom.",
messageSends: ["fillRect:a:a:a:", "left", "top", "right", "bottom"],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRect:a:a:a:",
category: 'private',
fn: function (left,top,right,bottom){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.fillRect(left, top, right, bottom); ;
return self}, function($ctx1) {$ctx1.fill(self,"fillRect:a:a:a:",{left:left,top:top,right:right,bottom:bottom},smalltalk.CanvasContext2D)})},
args: ["left", "top", "right", "bottom"],
source: "fillRect: left a: top a: right a: bottom\x0a\x09< self.fillRect(left, top, right, bottom); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "fillStyle:",
category: 'styles',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.fillStyle = anObject; ;
return self}, function($ctx1) {$ctx1.fill(self,"fillStyle:",{anObject:anObject},smalltalk.CanvasContext2D)})},
args: ["anObject"],
source: "fillStyle: anObject\x0a\x09< self.fillStyle = anObject; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "fillText:X:Y:",
category: 'text',
fn: function (aString,x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.fillText(aString, x, y); ;
return self}, function($ctx1) {$ctx1.fill(self,"fillText:X:Y:",{aString:aString,x:x,y:y},smalltalk.CanvasContext2D)})},
args: ["aString", "x", "y"],
source: "fillText: aString X: x Y: y\x0a\x09< self.fillText(aString, x, y); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "font:",
category: 'text',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.font = aString; ;
return self}, function($ctx1) {$ctx1.fill(self,"font:",{aString:aString},smalltalk.CanvasContext2D)})},
args: ["aString"],
source: "font: aString\x0a\x09< self.font = aString; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "globalCompositeOperation",
category: 'compositing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.globalCompositeOperation; ;
return self}, function($ctx1) {$ctx1.fill(self,"globalCompositeOperation",{},smalltalk.CanvasContext2D)})},
args: [],
source: "globalCompositeOperation\x0a\x09< return self.globalCompositeOperation; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "globalCompositeOperation:",
category: 'compositing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.globalCompositeOperation = aString; ;
return self}, function($ctx1) {$ctx1.fill(self,"globalCompositeOperation:",{aString:aString},smalltalk.CanvasContext2D)})},
args: ["aString"],
source: "globalCompositeOperation: aString\x0a\x09< self.globalCompositeOperation = aString; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "lineCap:",
category: 'line styles',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.lineCap = aNumber; ;
return self}, function($ctx1) {$ctx1.fill(self,"lineCap:",{aNumber:aNumber},smalltalk.CanvasContext2D)})},
args: ["aNumber"],
source: "lineCap: aNumber\x0a\x09< self.lineCap = aNumber; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "lineDash:",
category: 'line styles',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 if (self.setLineDash !== undefined) {
		self.setLineDash(anArray);
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"lineDash:",{anArray:anArray},smalltalk.CanvasContext2D)})},
args: ["anArray"],
source: "lineDash: anArray\x0a\x09< if (self.setLineDash !== undefined) {\x0a\x09\x09self.setLineDash(anArray);\x0a\x09} >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "lineDashOffset:",
category: 'line styles',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 if (self.setLineDash !== undefined) {
		self.lineDashOffset = aNumber;
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"lineDashOffset:",{aNumber:aNumber},smalltalk.CanvasContext2D)})},
args: ["aNumber"],
source: "lineDashOffset: aNumber\x0a\x09< if (self.setLineDash !== undefined) {\x0a\x09\x09self.lineDashOffset = aNumber;\x0a\x09} >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "lineJoin:",
category: 'line styles',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.lineJoin = aNumber; ;
return self}, function($ctx1) {$ctx1.fill(self,"lineJoin:",{aNumber:aNumber},smalltalk.CanvasContext2D)})},
args: ["aNumber"],
source: "lineJoin: aNumber\x0a\x09< self.lineJoin = aNumber; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
category: 'paths',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.lineTo(aPoint._x(), aPoint._y()); ;
return self}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.CanvasContext2D)})},
args: ["aPoint"],
source: "lineTo: aPoint\x0a\x09< self.lineTo(aPoint._x(), aPoint._y()); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "lineWidth:",
category: 'line styles',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.lineWidth = aNumber; ;
return self}, function($ctx1) {$ctx1.fill(self,"lineWidth:",{aNumber:aNumber},smalltalk.CanvasContext2D)})},
args: ["aNumber"],
source: "lineWidth: aNumber\x0a\x09< self.lineWidth = aNumber; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "measureStringWidth:",
category: 'text',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.measureText(aString).width; ;
return self}, function($ctx1) {$ctx1.fill(self,"measureStringWidth:",{aString:aString},smalltalk.CanvasContext2D)})},
args: ["aString"],
source: "measureStringWidth: aString\x0a\x09< return self.measureText(aString).width; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "miterLimit:",
category: 'line styles',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.miterLimit = aNumber; ;
return self}, function($ctx1) {$ctx1.fill(self,"miterLimit:",{aNumber:aNumber},smalltalk.CanvasContext2D)})},
args: ["aNumber"],
source: "miterLimit: aNumber\x0a\x09< self.miterLimit = aNumber; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
category: 'paths',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.moveTo(aPoint._x(), aPoint._y()); ;
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.CanvasContext2D)})},
args: ["aPoint"],
source: "moveTo: aPoint\x0a\x09< self.moveTo(aPoint._x(), aPoint._y()); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "pop",
category: 'save/restore context',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.restore(); ;
return self}, function($ctx1) {$ctx1.fill(self,"pop",{},smalltalk.CanvasContext2D)})},
args: [],
source: "pop\x0a\x09< self.restore(); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "push",
category: 'save/restore context',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.save(); ;
return self}, function($ctx1) {$ctx1.fill(self,"push",{},smalltalk.CanvasContext2D)})},
args: [],
source: "push\x0a\x09< self.save(); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "quadraticCurveVia:to:",
category: 'paths',
fn: function (pt1,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.quadraticCurveTo(pt1._x(), pt1._y(), aPoint._x(), aPoint._y()); ;
return self}, function($ctx1) {$ctx1.fill(self,"quadraticCurveVia:to:",{pt1:pt1,aPoint:aPoint},smalltalk.CanvasContext2D)})},
args: ["pt1", "aPoint"],
source: "quadraticCurveVia: pt1 to: aPoint\x0a\x09< self.quadraticCurveTo(pt1._x(), pt1._y(), aPoint._x(), aPoint._y()); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "rect:",
category: 'rectangles',
fn: function (rect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._rect_a_a_a_(_st(rect)._left(),_st(rect)._top(),_st(rect)._right(),_st(rect)._bottom());
return self}, function($ctx1) {$ctx1.fill(self,"rect:",{rect:rect},smalltalk.CanvasContext2D)})},
args: ["rect"],
source: "rect: rect\x0a\x09self rect: rect left a: rect top a: rect right a: rect bottom.",
messageSends: ["rect:a:a:a:", "left", "top", "right", "bottom"],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "rect:a:a:a:",
category: 'private',
fn: function (left,top,right,bottom){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.rect(left, top, right, bottom); ;
return self}, function($ctx1) {$ctx1.fill(self,"rect:a:a:a:",{left:left,top:top,right:right,bottom:bottom},smalltalk.CanvasContext2D)})},
args: ["left", "top", "right", "bottom"],
source: "rect: left a: top a: right a: bottom\x0a\x09< self.rect(left, top, right, bottom); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByRadians:",
category: 'transformations',
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.rotate(angle); ;
return self}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{angle:angle},smalltalk.CanvasContext2D)})},
args: ["angle"],
source: "rotateByRadians: angle\x0a\x09< self.rotate(angle); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleByX:Y:",
category: 'transformations',
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.scale(x, y); ;
return self}, function($ctx1) {$ctx1.fill(self,"scaleByX:Y:",{x:x,y:y},smalltalk.CanvasContext2D)})},
args: ["x", "y"],
source: "scaleByX: x Y: y\x0a\x09< self.scale(x, y); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "stroke",
category: 'paths',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.stroke(); ;
return self}, function($ctx1) {$ctx1.fill(self,"stroke",{},smalltalk.CanvasContext2D)})},
args: [],
source: "stroke\x0a\x09< self.stroke(); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "strokeRect:",
category: 'rectangles',
fn: function (rect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._strokeRect_a_a_a_(_st(rect)._left(),_st(rect)._top(),_st(rect)._right(),_st(rect)._bottom());
return self}, function($ctx1) {$ctx1.fill(self,"strokeRect:",{rect:rect},smalltalk.CanvasContext2D)})},
args: ["rect"],
source: "strokeRect: rect\x0a\x09self strokeRect: rect left a: rect top a: rect right a: rect bottom.",
messageSends: ["strokeRect:a:a:a:", "left", "top", "right", "bottom"],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "strokeRect:a:a:a:",
category: 'private',
fn: function (left,top,right,bottom){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.strokeRect(left, top, right, bottom); ;
return self}, function($ctx1) {$ctx1.fill(self,"strokeRect:a:a:a:",{left:left,top:top,right:right,bottom:bottom},smalltalk.CanvasContext2D)})},
args: ["left", "top", "right", "bottom"],
source: "strokeRect: left a: top a: right a: bottom\x0a\x09< self.strokeRect(left, top, right, bottom); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "strokeStyle:",
category: 'styles',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.strokeStyle = anObject; ;
return self}, function($ctx1) {$ctx1.fill(self,"strokeStyle:",{anObject:anObject},smalltalk.CanvasContext2D)})},
args: ["anObject"],
source: "strokeStyle: anObject\x0a\x09< self.strokeStyle = anObject; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "transform:a:a:a:a:a:",
category: 'transformations',
fn: function (sx,shy,shx,sy,x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.setTransform(sx, shy, shx, sy, x, y); ;
return self}, function($ctx1) {$ctx1.fill(self,"transform:a:a:a:a:a:",{sx:sx,shy:shy,shx:shx,sy:sy,x:x,y:y},smalltalk.CanvasContext2D)})},
args: ["sx", "shy", "shx", "sy", "x", "y"],
source: "transform: sx a: shy a: shx a: sy a: x a: y\x0a\x09< self.setTransform(sx, shy, shx, sy, x, y); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "transformBy:a:a:a:a:a:",
category: 'transformations',
fn: function (sx,shy,shx,sy,x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.transform(sx, shy, shx, sy, x, y); ;
return self}, function($ctx1) {$ctx1.fill(self,"transformBy:a:a:a:a:a:",{sx:sx,shy:shy,shx:shx,sy:sy,x:x,y:y},smalltalk.CanvasContext2D)})},
args: ["sx", "shy", "shx", "sy", "x", "y"],
source: "transformBy: sx a: shy a: shx a: sy a: x a: y\x0a\x09< self.transform(sx, shy, shx, sy, x, y); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "translateByX:Y:",
category: 'transformations',
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.translate(x, y); ;
return self}, function($ctx1) {$ctx1.fill(self,"translateByX:Y:",{x:x,y:y},smalltalk.CanvasContext2D)})},
args: ["x", "y"],
source: "translateByX: x Y: y\x0a\x09< self.translate(x, y); > ",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasContext2D);



smalltalk.addClass('CanvasGradient', smalltalk.Object, [], 'Athens-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "addColorStopAt:color:",
category: 'styles',
fn: function (pos,color){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.addColorStop(pos, color); ;
return self}, function($ctx1) {$ctx1.fill(self,"addColorStopAt:color:",{pos:pos,color:color},smalltalk.CanvasGradient)})},
args: ["pos", "color"],
source: "addColorStopAt: pos color: color\x0a\x09< self.addColorStop(pos, color); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.CanvasGradient);



smalltalk.addClass('Color', smalltalk.Object, ['rgbaString', 'alpha', 'r', 'g', 'b'], 'Athens-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "alpha",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@alpha"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@alpha"]=(1);
self["@alpha"];
} else {
$1;
};
$2=self["@alpha"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"alpha",{},smalltalk.Color)})},
args: [],
source: "alpha\x0a\x09alpha ifNil: [alpha := 1].\x0a\x09^ alpha",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "alpha:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alpha"]=aNumber;
self["@rgbaString"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"alpha:",{aNumber:aNumber},smalltalk.Color)})},
args: ["aNumber"],
source: "alpha: aNumber\x0a\x09alpha := aNumber.\x0a\x09rgbaString := nil.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "b:",
category: 'accessing',
fn: function (blue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@b"]=blue;
self["@rgbaString"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"b:",{blue:blue},smalltalk.Color)})},
args: ["blue"],
source: "b: blue\x0a\x09b := blue.\x0a\x09rgbaString := nil.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "blue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@b"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"blue",{},smalltalk.Color)})},
args: [],
source: "blue\x0a\x09^ b",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "g:",
category: 'accessing',
fn: function (green){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@g"]=green;
self["@rgbaString"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"g:",{green:green},smalltalk.Color)})},
args: ["green"],
source: "g: green\x0a\x09g := green.\x0a\x09rgbaString := nil.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "green",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@g"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.Color)})},
args: [],
source: "green\x0a\x09^ g",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "r:",
category: 'accessing',
fn: function (red){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@r"]=red;
self["@rgbaString"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"r:",{red:red},smalltalk.Color)})},
args: ["red"],
source: "r: red\x0a\x09r := red.\x0a\x09rgbaString := nil.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "red",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@r"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.Color)})},
args: [],
source: "red\x0a\x09^ r",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "rgbaString",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 if (self['@rgbaString'] !== undefined && !self['@rgbaString']._isNil()) {
		return self['@rgbaString'];
	}
	else {
		if (self['@alpha'] === undefined) { 
			return self['@rgbaString'] = 'rgba(' + Math.round(self['@r']*255) + ',' + Math.round(self['@g']*255) + ',' + Math.round(self['@b']*255) + ',1)';
		}
		else {
			return self['@rgbaString'] = 'rgba(' + Math.round(self['@r']*255) + ',' + Math.round(self['@g']*255) + ',' + Math.round(self['@b']*255) + ',' + self['@alpha'] + ')';
		}
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"rgbaString",{},smalltalk.Color)})},
args: [],
source: "rgbaString\x0a\x09< if (self['@rgbaString'] !== undefined && !self['@rgbaString']._isNil()) {\x0a\x09\x09return self['@rgbaString'];\x0a\x09}\x0a\x09else {\x0a\x09\x09if (self['@alpha'] === undefined) { \x0a\x09\x09\x09return self['@rgbaString'] = 'rgba(' + Math.round(self['@r']*255) + ',' + Math.round(self['@g']*255) + ',' + Math.round(self['@b']*255) + ',1)';\x0a\x09\x09}\x0a\x09\x09else {\x0a\x09\x09\x09return self['@rgbaString'] = 'rgba(' + Math.round(self['@r']*255) + ',' + Math.round(self['@g']*255) + ',' + Math.round(self['@b']*255) + ',' + self['@alpha'] + ')';\x0a\x09\x09}\x0a\x09} >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);


smalltalk.addMethod(
smalltalk.method({
selector: "black",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0, 0, 0, 'rgba(0,0,0,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"black",{},smalltalk.Color.klass)})},
args: [],
source: "black\x0a\x09< return self._r_g_b_rgba_(0, 0, 0, 'rgba(0,0,0,1)'); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "blue",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0, 0, 1, 'rgba(0,0,255,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"blue",{},smalltalk.Color.klass)})},
args: [],
source: "blue\x0a\x09< return self._r_g_b_rgba_(0, 0, 1, 'rgba(0,0,255,1)'); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoBlue",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.06, 0.51, 0.96, 'rgba(15,130,245,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoBlue",{},smalltalk.Color.klass)})},
args: [],
source: "cosmoBlue\x0a\x09< return self._r_g_b_rgba_(0.06, 0.51, 0.96, 'rgba(15,130,245,1)'); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoDarkBlue",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0, 0.3, 0.6, 'rgba(0,76,153,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoDarkBlue",{},smalltalk.Color.klass)})},
args: [],
source: "cosmoDarkBlue\x0a\x09< return self._r_g_b_rgba_(0, 0.3, 0.6, 'rgba(0,76,153,1)'); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoDarkGray",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.33, 0.33, 0.33, 'rgba(85,85,85,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoDarkGray",{},smalltalk.Color.klass)})},
args: [],
source: "cosmoDarkGray\x0a\x09< return self._r_g_b_rgba_(0.33, 0.33, 0.33, 'rgba(85,85,85,1)'); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoDarkPurple",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.38, 0.19, 0.48, 'rgba(97,48,121,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoDarkPurple",{},smalltalk.Color.klass)})},
args: [],
source: "cosmoDarkPurple\x0a\x09< return self._r_g_b_rgba_(0.38, 0.19, 0.48, 'rgba(97,48,121,1)'); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoGray",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.6, 0.6, 0.6, 'rgba(153,153,153,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoGray",{},smalltalk.Color.klass)})},
args: [],
source: "cosmoGray\x0a\x09< return self._r_g_b_rgba_(0.6, 0.6, 0.6, 'rgba(153,153,153,1)'); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoLightGray",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.87, 0.87, 0.87, 'rgba(223,223,223,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoLightGray",{},smalltalk.Color.klass)})},
args: [],
source: "cosmoLightGray\x0a\x09< return self._r_g_b_rgba_(0.87, 0.87, 0.87, 'rgba(223,223,223,1)'); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoLightPurple",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.69, 0.48, 0.8, 'rgba(177,123,203,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoLightPurple",{},smalltalk.Color.klass)})},
args: [],
source: "cosmoLightPurple\x0a\x09< return self._r_g_b_rgba_(0.69, 0.48, 0.8, 'rgba(177,123,203,1)'); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoMiddleBlue",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0, 0.45, 0.9, 'rgba(0,114,230,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoMiddleBlue",{},smalltalk.Color.klass)})},
args: [],
source: "cosmoMiddleBlue\x0a\x09< return self._r_g_b_rgba_(0, 0.45, 0.9, 'rgba(0,114,230,1)'); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoMiddlePurple",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.55, 0.28, 0.69, 'rgba(141,70,176,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoMiddlePurple",{},smalltalk.Color.klass)})},
args: [],
source: "cosmoMiddlePurple\x0a\x09< return self._r_g_b_rgba_(0.55, 0.28, 0.69, 'rgba(141,70,176,1)'); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoPurple",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.61, 0.35, 0.73, 'rgba(155,89,187,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoPurple",{},smalltalk.Color.klass)})},
args: [],
source: "cosmoPurple\x0a\x09< return self._r_g_b_rgba_(0.61, 0.35, 0.73, 'rgba(155,89,187,1)'); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "gray",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.5, 0.5, 0.5, 'rgba(128, 128, 128, 1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"gray",{},smalltalk.Color.klass)})},
args: [],
source: "gray\x0a\x09< return self._r_g_b_rgba_(0.5, 0.5, 0.5, 'rgba(128, 128, 128, 1)'); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "green",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0, 1, 0, 'rgba(0,255,0,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.Color.klass)})},
args: [],
source: "green\x0a\x09< return self._r_g_b_rgba_(0, 1, 0, 'rgba(0,255,0,1)'); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "r:g:b:",
category: 'instance creation',
fn: function (red,green,blue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var instance = self._new();
	instance['@r'] = red;
	instance['@g'] = green;
	instance['@b'] = blue;
	return instance; ;
return self}, function($ctx1) {$ctx1.fill(self,"r:g:b:",{red:red,green:green,blue:blue},smalltalk.Color.klass)})},
args: ["red", "green", "blue"],
source: "r: red g: green b: blue\x0a\x09< var instance = self._new();\x0a\x09instance['@r'] = red;\x0a\x09instance['@g'] = green;\x0a\x09instance['@b'] = blue;\x0a\x09return instance; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "r:g:b:a:",
category: 'instance creation',
fn: function (red,green,blue,alpha){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var instance = self._new();
	instance['@r'] = red;
	instance['@g'] = green;
	instance['@b'] = blue;
	instance['@alpha'] = alpha;
	return instance; ;
return self}, function($ctx1) {$ctx1.fill(self,"r:g:b:a:",{red:red,green:green,blue:blue,alpha:alpha},smalltalk.Color.klass)})},
args: ["red", "green", "blue", "alpha"],
source: "r: red g: green b: blue a: alpha\x0a\x09< var instance = self._new();\x0a\x09instance['@r'] = red;\x0a\x09instance['@g'] = green;\x0a\x09instance['@b'] = blue;\x0a\x09instance['@alpha'] = alpha;\x0a\x09return instance; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "r:g:b:rgba:",
category: 'instance creation',
fn: function (red,green,blue,rgbaString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var instance = self._new();
	instance['@r'] = red;
	instance['@g'] = green;
	instance['@b'] = blue;
	instance['@rgbaString'] = rgbaString;
	return instance; ;
return self}, function($ctx1) {$ctx1.fill(self,"r:g:b:rgba:",{red:red,green:green,blue:blue,rgbaString:rgbaString},smalltalk.Color.klass)})},
args: ["red", "green", "blue", "rgbaString"],
source: "r: red g: green b: blue rgba: rgbaString\x0a\x09< var instance = self._new();\x0a\x09instance['@r'] = red;\x0a\x09instance['@g'] = green;\x0a\x09instance['@b'] = blue;\x0a\x09instance['@rgbaString'] = rgbaString;\x0a\x09return instance; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "red",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(1, 0, 0, 'rgba(255,0,0,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.Color.klass)})},
args: [],
source: "red\x0a\x09< return self._r_g_b_rgba_(1, 0, 0, 'rgba(255,0,0,1)'); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "transparent",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._r_((0));
_st($2)._g_((0));
_st($2)._b_((0));
_st($2)._alpha_((0));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"transparent",{},smalltalk.Color.klass)})},
args: [],
source: "transparent\x0a\x09^ self new r: 0; g: 0; b: 0; alpha: 0; yourself",
messageSends: ["r:", "new", "g:", "b:", "alpha:", "yourself"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "white",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(1, 1, 1, 'rgba(255,255,255,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"white",{},smalltalk.Color.klass)})},
args: [],
source: "white\x0a\x09< return self._r_g_b_rgba_(1, 1, 1, 'rgba(255,255,255,1)'); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "yellow",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(1, 1, 0, 'rgba(255,255,0,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"yellow",{},smalltalk.Color.klass)})},
args: [],
source: "yellow\x0a\x09< return self._r_g_b_rgba_(1, 1, 0, 'rgba(255,255,0,1)'); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color.klass);


smalltalk.addClass('Image', smalltalk.Object, [], 'Athens-Amber');
smalltalk.Image.comment="I represent a DOM image element. I am loaded asynchronously from a URL.\x0a\x0a\x0a## API\x0a\x0aThe `#onLoad:` method is used to bind a event that is triggered when the image was loaded by the browser. I provide a method `#complete` to determine the loading status at any time.\x0a";
smalltalk.addMethod(
smalltalk.method({
selector: "complete",
category: 'state',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.complete; ;
return self}, function($ctx1) {$ctx1.fill(self,"complete",{},smalltalk.Image)})},
args: [],
source: "complete\x0a\x09< return self.complete; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Image);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.height; ;
return self}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.Image)})},
args: [],
source: "height\x0a\x09< return self.height; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Image);

smalltalk.addMethod(
smalltalk.method({
selector: "onLoad:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.onload = aBlock; ;
return self}, function($ctx1) {$ctx1.fill(self,"onLoad:",{aBlock:aBlock},smalltalk.Image)})},
args: ["aBlock"],
source: "onLoad: aBlock\x0a \x09< self.onload = aBlock; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Image);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (anUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.src = anUrl; ;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{anUrl:anUrl},smalltalk.Image)})},
args: ["anUrl"],
source: "source: anUrl\x0a\x09< self.src = anUrl; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Image);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.width; ;
return self}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.Image)})},
args: [],
source: "width\x0a\x09< return self.width; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Image);

smalltalk.addMethod(
smalltalk.method({
selector: "yourself",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self; ;
return self}, function($ctx1) {$ctx1.fill(self,"yourself",{},smalltalk.Image)})},
args: [],
source: "yourself\x0a\x09< return self; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Image);


smalltalk.addMethod(
smalltalk.method({
selector: "fromUrl:",
category: 'instance creation',
fn: function (anUrl){
var self=this;
function $Image(){return smalltalk.Image||(typeof Image=="undefined"?nil:Image)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Image())._new();
_st($2)._source_(anUrl);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromUrl:",{anUrl:anUrl},smalltalk.Image.klass)})},
args: ["anUrl"],
source: "fromUrl: anUrl\x0a\x09^ Image new\x0a\x09\x09source: anUrl;\x0a\x09\x09yourself",
messageSends: ["source:", "new", "yourself"],
referencedClasses: ["Image"]
}),
smalltalk.Image.klass);


smalltalk.addClass('LogicalFont', smalltalk.Object, ['familyName', 'pointSize'], 'Athens-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "asHTMLString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self['@pointSize'].toString() + 'px ' + self['@familyName']; ;
return self}, function($ctx1) {$ctx1.fill(self,"asHTMLString",{},smalltalk.LogicalFont)})},
args: [],
source: "asHTMLString\x0a\x09< return self['@pointSize'].toString() + 'px ' + self['@familyName']; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.LogicalFont);

smalltalk.addMethod(
smalltalk.method({
selector: "familyName:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@familyName"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"familyName:",{aString:aString},smalltalk.LogicalFont)})},
args: ["aString"],
source: "familyName: aString\x0a\x09familyName := aString.",
messageSends: [],
referencedClasses: []
}),
smalltalk.LogicalFont);

smalltalk.addMethod(
smalltalk.method({
selector: "pointSize",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@pointSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pointSize",{},smalltalk.LogicalFont)})},
args: [],
source: "pointSize\x0a\x09^ pointSize",
messageSends: [],
referencedClasses: []
}),
smalltalk.LogicalFont);

smalltalk.addMethod(
smalltalk.method({
selector: "pointSize:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@pointSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"pointSize:",{anInteger:anInteger},smalltalk.LogicalFont)})},
args: ["anInteger"],
source: "pointSize: anInteger\x0a\x09pointSize := anInteger.",
messageSends: [],
referencedClasses: []
}),
smalltalk.LogicalFont);


smalltalk.addMethod(
smalltalk.method({
selector: "familyName:pointSize:",
category: 'instance creation',
fn: function (aString,anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._familyName_(aString);
_st($2)._pointSize_(anInteger);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"familyName:pointSize:",{aString:aString,anInteger:anInteger},smalltalk.LogicalFont.klass)})},
args: ["aString", "anInteger"],
source: "familyName: aString pointSize: anInteger\x0a\x09^ self new\x0a\x09\x09familyName: aString;\x0a\x09\x09pointSize: anInteger;\x0a\x09\x09yourself",
messageSends: ["familyName:", "new", "pointSize:", "yourself"],
referencedClasses: []
}),
smalltalk.LogicalFont.klass);


smalltalk.addClass('Rectangle', smalltalk.Object, ['origin', 'corner'], 'Athens-Amber');
smalltalk.Rectangle.comment="I am a rectangle. I have a point of origin and a corner point.\x0a\x0a\x0a## API\x0a\x0aThe `#insectsWith:` method is used to determine whether I intersect with another rectangle.\x0a\x0aThe `#boundsAfterMultiplicationWith:` method is used to calculate my bounding box after transforming myself with the argument matrix.";
smalltalk.addMethod(
smalltalk.method({
selector: "asPolygon",
category: 'converting',
fn: function (){
var self=this;
function $AthensPolygon(){return smalltalk.AthensPolygon||(typeof AthensPolygon=="undefined"?nil:AthensPolygon)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($AthensPolygon())._new();
_st($2)._moveTo_(self["@origin"]);
_st($2)._lineTo_(_st(_st(self["@corner"])._x()).__at(_st(self["@origin"])._y()));
_st($2)._lineTo_(self["@corner"]);
_st($2)._lineTo_(_st(_st(self["@origin"])._x()).__at(_st(self["@corner"])._y()));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asPolygon",{},smalltalk.Rectangle)})},
args: [],
source: "asPolygon\x0a\x09^ AthensPolygon new\x0a\x09\x09moveTo: origin;\x0a\x09\x09lineTo: corner x @ origin y;\x0a\x09\x09lineTo: corner;\x0a\x09\x09lineTo: origin x @ corner y;\x0a\x09\x09yourself\x0a\x09\x09",
messageSends: ["moveTo:", "new", "lineTo:", "@", "y", "x", "yourself"],
referencedClasses: ["AthensPolygon"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "bottom",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@corner"])._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottom",{},smalltalk.Rectangle)})},
args: [],
source: "bottom\x0a\x09^ corner y",
messageSends: ["y"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "boundingBox",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"boundingBox",{},smalltalk.Rectangle)})},
args: [],
source: "boundingBox\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "boundsAfterMultiplicationWith:",
category: 'converting',
fn: function (matrix){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
	var x1 = matrix['@sx']*self['@origin']['@x'] + matrix['@shx']*self['@origin']['@y'] + matrix['@x'];
	var x2 = matrix['@sx']*self['@corner']['@x'] + matrix['@shx']*self['@corner']['@y'] + matrix['@x'];
	var y1 = matrix['@shy']*self['@origin']['@x'] + matrix['@sy']*self['@origin']['@y'] + matrix['@y'];
	var y2 = matrix['@shy']*self['@corner']['@x'] + matrix['@sy']*self['@corner']['@y'] + matrix['@y'];
	
	var points = [[x1, y1], [x1, y2], [x2, y1], [x2, y2]];
	
	for (var i = 0; i < 4; i++) {
		minX = Math.min(minX, points[i][0]);
		maxX = Math.max(maxX, points[i][0]);
		minY = Math.min(minY, points[i][1]);
		maxY = Math.max(maxY, points[i][1]);
	}
	
	return minX.__at(minY)._corner_(maxX.__at(maxY)); ;
return self}, function($ctx1) {$ctx1.fill(self,"boundsAfterMultiplicationWith:",{matrix:matrix},smalltalk.Rectangle)})},
args: ["matrix"],
source: "boundsAfterMultiplicationWith: matrix\x0a\x09< var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;\x0a\x09var x1 = matrix['@sx']*self['@origin']['@x'] + matrix['@shx']*self['@origin']['@y'] + matrix['@x'];\x0a\x09var x2 = matrix['@sx']*self['@corner']['@x'] + matrix['@shx']*self['@corner']['@y'] + matrix['@x'];\x0a\x09var y1 = matrix['@shy']*self['@origin']['@x'] + matrix['@sy']*self['@origin']['@y'] + matrix['@y'];\x0a\x09var y2 = matrix['@shy']*self['@corner']['@x'] + matrix['@sy']*self['@corner']['@y'] + matrix['@y'];\x0a\x09\x0a\x09var points = [[x1, y1], [x1, y2], [x2, y1], [x2, y2]];\x0a\x09\x0a\x09for (var i = 0; i < 4; i++) {\x0a\x09\x09minX = Math.min(minX, points[i][0]);\x0a\x09\x09maxX = Math.max(maxX, points[i][0]);\x0a\x09\x09minY = Math.min(minY, points[i][1]);\x0a\x09\x09maxY = Math.max(maxY, points[i][1]);\x0a\x09}\x0a\x09\x0a\x09return minX.__at(minY)._corner_(maxX.__at(maxY)); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "corner",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@corner"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"corner",{},smalltalk.Rectangle)})},
args: [],
source: "corner\x0a\x09^ corner",
messageSends: [],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "corner:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@corner"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"corner:",{aPoint:aPoint},smalltalk.Rectangle)})},
args: ["aPoint"],
source: "corner: aPoint\x0a\x09corner := aPoint.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(canvas)._context2D())._rect_(self);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.Rectangle)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09canvas context2D rect: self.",
messageSends: ["rect:", "context2D"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@corner"])._y()).__minus(_st(self["@origin"])._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.Rectangle)})},
args: [],
source: "height\x0a\x09^ corner y - origin y",
messageSends: ["-", "y"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "intersectsWith:",
category: 'testing',
fn: function (aRect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st(self["@origin"])._x()).__lt_eq(_st(_st(aRect)._corner())._x())).__and(_st(_st(_st(aRect)._origin())._x()).__lt_eq(_st(self["@corner"])._x()))).__and(_st(_st(self["@origin"])._y()).__lt(_st(_st(aRect)._corner())._y()))).__and(_st(_st(_st(aRect)._origin())._y()).__lt_eq(_st(self["@corner"])._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"intersectsWith:",{aRect:aRect},smalltalk.Rectangle)})},
args: ["aRect"],
source: "intersectsWith: aRect\x0a\x09^ (origin x <= aRect corner x) & (aRect origin x <= corner x) & (origin y < aRect corner y) & (aRect origin y <= corner y)",
messageSends: ["&", "<=", "y", "origin", "<", "corner", "x"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "left",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"left",{},smalltalk.Rectangle)})},
args: [],
source: "left\x0a\x09^ origin x",
messageSends: ["x"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "origin",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@origin"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"origin",{},smalltalk.Rectangle)})},
args: [],
source: "origin\x0a\x09^ origin",
messageSends: [],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "origin:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@origin"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"origin:",{aPoint:aPoint},smalltalk.Rectangle)})},
args: ["aPoint"],
source: "origin: aPoint\x0a\x09origin := aPoint.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "right",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@corner"])._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"right",{},smalltalk.Rectangle)})},
args: [],
source: "right\x0a\x09^ corner x",
messageSends: ["x"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "top",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"top",{},smalltalk.Rectangle)})},
args: [],
source: "top\x0a\x09^ origin y",
messageSends: ["y"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@corner"])._x()).__minus(_st(self["@origin"])._x());
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.Rectangle)})},
args: [],
source: "width\x0a\x09^ corner x - origin x",
messageSends: ["-", "x"],
referencedClasses: []
}),
smalltalk.Rectangle);


smalltalk.addMethod(
smalltalk.method({
selector: "origin:corner:",
category: 'instance creation',
fn: function (originPoint,cornerPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._origin_(originPoint);
_st($2)._corner_(cornerPoint);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"origin:corner:",{originPoint:originPoint,cornerPoint:cornerPoint},smalltalk.Rectangle.klass)})},
args: ["originPoint", "cornerPoint"],
source: "origin: originPoint corner: cornerPoint\x0a\x09^ self basicNew\x0a\x09\x09origin: originPoint;\x0a\x09\x09corner: cornerPoint;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["origin:", "basicNew", "corner:", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.Rectangle.klass);


smalltalk.addMethod(
smalltalk.method({
selector: "reverseDo:",
category: '*Athens-Amber',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=self.length-1;-1<i;i--){aBlock._value_(self[i]);};
return self}, function($ctx1) {$ctx1.fill(self,"reverseDo:",{aBlock:aBlock},smalltalk.SequenceableCollection)})},
args: ["aBlock"],
source: "reverseDo: aBlock\x0a\x09<for(var i=self.length-1;-1<i;i--){aBlock._value_(self[i]);}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "millisecondClockValue",
category: '*Athens-Amber',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return new Date().getTime(); ;
return self}, function($ctx1) {$ctx1.fill(self,"millisecondClockValue",{},smalltalk.Date.klass)})},
args: [],
source: "millisecondClockValue\x0a\x09< return new Date().getTime(); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date.klass);


smalltalk.addPackage('Athens-HTML-Paths');
smalltalk.addClass('AthensHTMLPath', smalltalk.Object, ['segment', 'context2D', 'startPoint', 'endPoint'], 'Athens-HTML-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "arcTo:angle:cw:",
category: 'path commands',
fn: function (newEndPoint,angle,aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var start = self['@endPoint'];
	var end = self['@endPoint'] = newEndPoint;
	var cwAngle = aBool ? angle : -angle;
	var center = self._calcCenter_end_angle_(start, end, cwAngle);
	var vX = start._x() - center._x();
	var vY = start._y() - center._y();
	var radius = Math.sqrt(vX * vX + vY * vY);
	
	var vXAcos = Math.acos(vX / Math.sqrt(vX * vX + vY * vY));
	var startAngle = vY < 0 ? Math.PI * 2 - vXAcos : vXAcos;
	
	var eX = end._x() - center._x();
	var eY = end._y() - center._y();
	var eXAcos = Math.acos(eX / Math.sqrt(eX * eX + eY * eY));
	var endAngle = eY < 0 ? Math.PI * 2 - eXAcos : eXAcos;
	
	self['@context2D'].arc(center._x(), center._y(), radius, startAngle, endAngle, !aBool); ;
return self}, function($ctx1) {$ctx1.fill(self,"arcTo:angle:cw:",{newEndPoint:newEndPoint,angle:angle,aBool:aBool},smalltalk.AthensHTMLPath)})},
args: ["newEndPoint", "angle", "aBool"],
source: "arcTo: newEndPoint angle: angle cw: aBool\x0a\x09< var start = self['@endPoint'];\x0a\x09var end = self['@endPoint'] = newEndPoint;\x0a\x09var cwAngle = aBool ? angle : -angle;\x0a\x09var center = self._calcCenter_end_angle_(start, end, cwAngle);\x0a\x09var vX = start._x() - center._x();\x0a\x09var vY = start._y() - center._y();\x0a\x09var radius = Math.sqrt(vX * vX + vY * vY);\x0a\x09\x0a\x09var vXAcos = Math.acos(vX / Math.sqrt(vX * vX + vY * vY));\x0a\x09var startAngle = vY < 0 ? Math.PI * 2 - vXAcos : vXAcos;\x0a\x09\x0a\x09var eX = end._x() - center._x();\x0a\x09var eY = end._y() - center._y();\x0a\x09var eXAcos = Math.acos(eX / Math.sqrt(eX * eX + eY * eY));\x0a\x09var endAngle = eY < 0 ? Math.PI * 2 - eXAcos : eXAcos;\x0a\x09\x0a\x09self['@context2D'].arc(center._x(), center._y(), radius, startAngle, endAngle, !aBool); >\x0a\x09\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "asAthensShapeOn:",
category: 'converting',
fn: function (anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAthensShapeOn:",{anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPath)})},
args: ["anAthensCanvas"],
source: "asAthensShapeOn: anAthensCanvas\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "calcCenter:end:angle:",
category: 'path commands',
fn: function (start,end,angle){
var self=this;
var v,rot,center,radius,len,sina,cosa,m;
function $Number(){return smalltalk.Number||(typeof Number=="undefined"?nil:Number)}
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
var $1;
v=_st(end).__minus(start);
m=_st(_st($AthensAffineTransform())._new())._rotateByRadians_(_st(_st(_st($Number())._pi()).__minus(angle)).__slash((2)));
v=_st(m)._transform_(v);
len=_st(v)._r();
radius=_st(_st(len).__slash((2))).__slash(_st(_st(angle).__slash((2)))._sin());
center=_st(_st(v).__star(_st(radius).__slash(len))).__plus(start);
$1=center;
return $1;
}, function($ctx1) {$ctx1.fill(self,"calcCenter:end:angle:",{start:start,end:end,angle:angle,v:v,rot:rot,center:center,radius:radius,len:len,sina:sina,cosa:cosa,m:m},smalltalk.AthensHTMLPath)})},
args: ["start", "end", "angle"],
source: "calcCenter: start end: end angle: angle\x0a\x0a\x09| v  rot  center radius len sina cosa m |\x09\x0a\x09\x0a\x09v := end - start.\x0a\x09\x0a\x09m := AthensAffineTransform new rotateByRadians: (Number pi - angle   /2).\x0a\x0a\x09v := m transform: v.\x09\x09\x0a\x09len := v r.\x0a\x09radius := len / 2 / (angle /2) sin.\x0a\x09\x0a\x09center := v * (radius/len) + start.\x0a\x0a\x09^ center",
messageSends: ["-", "rotateByRadians:", "/", "pi", "new", "transform:", "r", "sin", "+", "*"],
referencedClasses: ["Number", "AthensAffineTransform"]
}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "ccwArcTo:angle:",
category: 'path commands',
fn: function (newEndPoint,angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arcTo_angle_cw_(newEndPoint,angle,false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ccwArcTo:angle:",{newEndPoint:newEndPoint,angle:angle},smalltalk.AthensHTMLPath)})},
args: ["newEndPoint", "angle"],
source: "ccwArcTo: newEndPoint angle: angle\x0a\x09\x22 Add a counter-clockwise arc segment, starting from current path endpoint and\x0a\x09ending at andPt. Angle should be specified in radians \x0a\x09\x22\x0a\x09^ self arcTo: newEndPoint angle: angle cw: false",
messageSends: ["arcTo:angle:cw:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'path commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@endPoint'] = self['@startPoint'];
	self['@context2D'].closePath(); ;
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.AthensHTMLPath)})},
args: [],
source: "close\x0a\x09< self['@endPoint'] = self['@startPoint'];\x0a\x09self['@context2D'].closePath(); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:and:to:",
category: 'path commands',
fn: function (pt1,pt2,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@endPoint'] = aPoint;
	self['@context2D'].bezierCurveTo(pt1._x(), pt1._y(), pt2._x(), pt2._y(), aPoint._x(), aPoint._y()); ;
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:and:to:",{pt1:pt1,pt2:pt2,aPoint:aPoint},smalltalk.AthensHTMLPath)})},
args: ["pt1", "pt2", "aPoint"],
source: "curveVia: pt1 and: pt2 to: aPoint\x0a\x09< self['@endPoint'] = aPoint;\x0a\x09self['@context2D'].bezierCurveTo(pt1._x(), pt1._y(), pt2._x(), pt2._y(), aPoint._x(), aPoint._y()); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:to:",
category: 'path commands',
fn: function (pt1,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@endPoint'] = aPoint;
	self['@context2D'].quadraticCurveTo(pt1._x(), pt1._y(), aPoint._x(), aPoint._y()); ;
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{pt1:pt1,aPoint:aPoint},smalltalk.AthensHTMLPath)})},
args: ["pt1", "aPoint"],
source: "curveVia: pt1 to: aPoint\x0a\x09< self['@endPoint'] = aPoint;\x0a\x09self['@context2D'].quadraticCurveTo(pt1._x(), pt1._y(), aPoint._x(), aPoint._y()); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "curveViaX:Y:toX:Y:",
category: 'path commands',
fn: function (x1,y1,x2,y2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@context2D'].quadraticCurveTo(x1, y1, x2, y2); ;
return self}, function($ctx1) {$ctx1.fill(self,"curveViaX:Y:toX:Y:",{x1:x1,y1:y1,x2:x2,y2:y2},smalltalk.AthensHTMLPath)})},
args: ["x1", "y1", "x2", "y2"],
source: "curveViaX: x1 Y: y1 toX: x2 Y: y2\x0a\x09< self['@context2D'].quadraticCurveTo(x1, y1, x2, y2); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "curveViaX:Y:viaX:Y:toX:Y:",
category: 'path commands',
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@context2D'].bezierCurveTo(x1, y1, x2, y2, x3, y3); ;
return self}, function($ctx1) {$ctx1.fill(self,"curveViaX:Y:viaX:Y:toX:Y:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3},smalltalk.AthensHTMLPath)})},
args: ["x1", "y1", "x2", "y2", "x3", "y3"],
source: "curveViaX: x1 Y: y1 viaX: x2 Y: y2 toX: x3 Y: y3\x0a\x09< self['@context2D'].bezierCurveTo(x1, y1, x2, y2, x3, y3); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "cwArcTo:angle:",
category: 'path commands',
fn: function (newEndPoint,angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arcTo_angle_cw_(newEndPoint,angle,true);
return $1;
}, function($ctx1) {$ctx1.fill(self,"cwArcTo:angle:",{newEndPoint:newEndPoint,angle:angle},smalltalk.AthensHTMLPath)})},
args: ["newEndPoint", "angle"],
source: "cwArcTo: newEndPoint angle: angle\x0a\x09\x22 Add a clockwise arc segment, starting from current path endpoint and\x0a\x09ending at andPt. Angle should be specified in radians \x0a\x09\x22\x0a\x09^ self arcTo: newEndPoint angle: angle cw: true",
messageSends: ["arcTo:angle:cw:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 // Replay saved pat
	(function() {
		self['@context2D'] = anAthensCanvas['@surface']['@context2D'];
		self._newPath();
		self['@segment']._sendCommandsTo_(self);
	})._ensure_(function() {
		self['@context2D'] = undefined;}); ;
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPath)})},
args: ["anAthensCanvas"],
source: "drawOn: anAthensCanvas\x0a\x09< // Replay saved pat\x0a\x09(function() {\x0a\x09\x09self['@context2D'] = anAthensCanvas['@surface']['@context2D'];\x0a\x09\x09self._newPath();\x0a\x09\x09self['@segment']._sendCommandsTo_(self);\x0a\x09})._ensure_(function() {\x0a\x09\x09self['@context2D'] = undefined;}); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
category: 'path commands',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@endPoint'] = aPoint;
	self['@context2D'].lineTo(aPoint._x(), aPoint._y()); ;
return self}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.AthensHTMLPath)})},
args: ["aPoint"],
source: "lineTo: aPoint\x0a\x09< self['@endPoint'] = aPoint;\x0a\x09self['@context2D'].lineTo(aPoint._x(), aPoint._y()); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "lineToX:Y:",
category: 'path commands',
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@context2D'].lineTo(x, y); ;
return self}, function($ctx1) {$ctx1.fill(self,"lineToX:Y:",{x:x,y:y},smalltalk.AthensHTMLPath)})},
args: ["x", "y"],
source: "lineToX: x Y: y\x0a\x09< self['@context2D'].lineTo(x, y); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
category: 'path commands',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@endPoint'] = aPoint;
	self['@context2D'].moveTo(aPoint._x(), aPoint._y()); ;
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.AthensHTMLPath)})},
args: ["aPoint"],
source: "moveTo: aPoint\x0a\x09< self['@endPoint'] = aPoint;\x0a\x09self['@context2D'].moveTo(aPoint._x(), aPoint._y()); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "moveToX:Y:",
category: 'path commands',
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@context2D'].moveTo(x, y); ;
return self}, function($ctx1) {$ctx1.fill(self,"moveToX:Y:",{x:x,y:y},smalltalk.AthensHTMLPath)})},
args: ["x", "y"],
source: "moveToX: x Y: y\x0a\x09< self['@context2D'].moveTo(x, y); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "newPath",
category: 'path commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@endPoint'] = self['@startPoint'] = self._class()['@zeroPoint'];
	self['@context2D'].beginPath();
	self._moveToX_Y_(0, 0); ;
return self}, function($ctx1) {$ctx1.fill(self,"newPath",{},smalltalk.AthensHTMLPath)})},
args: [],
source: "newPath\x0a\x09< self['@endPoint'] = self['@startPoint'] = self._class()['@zeroPoint'];\x0a\x09self['@context2D'].beginPath();\x0a\x09self._moveToX_Y_(0, 0); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "paintFillsUsing:on:",
category: 'drawing',
fn: function (aPaint,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 aPaint._fillPath_on_(self, anAthensCanvas); ;
return self}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPath)})},
args: ["aPaint", "anAthensCanvas"],
source: "paintFillsUsing: aPaint on: anAthensCanvas \x0a\x09< aPaint._fillPath_on_(self, anAthensCanvas); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "segment:",
category: 'accessing',
fn: function (startSegment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@segment"]=startSegment;
return self}, function($ctx1) {$ctx1.fill(self,"segment:",{startSegment:startSegment},smalltalk.AthensHTMLPath)})},
args: ["startSegment"],
source: "segment: startSegment\x0a\x09segment := startSegment.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPath);


smalltalk.AthensHTMLPath.klass.iVarNames = ['zeroPoint'];
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@zeroPoint"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLPath.klass)})},
args: [],
source: "initialize\x0a\x09zeroPoint := 0@0.",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.AthensHTMLPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "segment:",
category: 'instance creation',
fn: function (startSegment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._segment_(startSegment);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"segment:",{startSegment:startSegment},smalltalk.AthensHTMLPath.klass)})},
args: ["startSegment"],
source: "segment: startSegment\x0a\x09^ self new\x0a\x09\x09segment: startSegment;\x0a\x09\x09yourself",
messageSends: ["segment:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLPath.klass);



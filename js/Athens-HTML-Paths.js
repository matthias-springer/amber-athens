smalltalk.addPackage('Athens-HTML-Paths');
smalltalk.addClass('AthensHTMLPathBuilder', smalltalk.AthensPathBuilder, ['surface', 'absolute', 'endPoint', 'pathCreatingBlock'], 'Athens-HTML-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "absolute",
category: 'path commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@absolute"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"absolute",{},smalltalk.AthensHTMLPathBuilder)})},
args: [],
source: "absolute\x0a\x09absolute := true.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "angleOfVector:",
category: 'private',
fn: function (v){
var self=this;
var n,acos;
function $Number(){return smalltalk.Number||(typeof Number=="undefined"?nil:Number)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
n=_st(v)._normalized();
acos=_st(_st(n)._x())._arcCos();
$2=_st(_st(v)._y()).__lt((0));
if(smalltalk.assert($2)){
$1=_st(_st(_st($Number())._pi()).__star((2))).__minus(acos);
} else {
$1=acos;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"angleOfVector:",{v:v,n:n,acos:acos},smalltalk.AthensHTMLPathBuilder)})},
args: ["v"],
source: "angleOfVector: v\x0a\x0a\x09| n acos |\x0a\x09\x0a\x09n := v normalized.\x0a\x09acos := n x arcCos.\x0a\x09\x0a\x09^ v y < 0 ifTrue: [ Number pi * 2 - acos ] ifFalse: [ acos ]",
messageSends: ["normalized", "arcCos", "x", "ifTrue:ifFalse:", "-", "*", "pi", "<", "y"],
referencedClasses: ["Number"]
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "arcCenterX:centerY:radius:startAngle:endAngle:ccw:",
category: 'private',
fn: function (xc,yc,radius,angle1,angle2,aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._arc_a_a_a_a_a_(xc,yc,radius,angle1,angle2,aBool);
return self}, function($ctx1) {$ctx1.fill(self,"arcCenterX:centerY:radius:startAngle:endAngle:ccw:",{xc:xc,yc:yc,radius:radius,angle1:angle1,angle2:angle2,aBool:aBool},smalltalk.AthensHTMLPathBuilder)})},
args: ["xc", "yc", "radius", "angle1", "angle2", "aBool"],
source: "arcCenterX: xc centerY: yc radius: radius startAngle: angle1 endAngle: angle2 ccw: aBool\x0a\x09surface context2D arc: xc a: yc a: radius a: angle1 a: angle2 a: aBool.",
messageSends: ["arc:a:a:a:a:a:", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "arcTo:angle:cw:",
category: 'private',
fn: function (newEndPoint,angle,aBool){
var self=this;
var start,end,center,v,radius,startAngle,endAngle,cwAngle;
return smalltalk.withContext(function($ctx1) { 
var $1;
start=self["@endPoint"];
end=self._toAbsolute_(newEndPoint);
self["@endPoint"]=end;
$1=aBool;
if(smalltalk.assert($1)){
cwAngle=angle;
cwAngle;
} else {
cwAngle=_st(angle)._negated();
cwAngle;
};
center=self._calcCenter_end_angle_(start,end,cwAngle);
v=_st(start).__minus(center);
radius=_st(v)._r();
startAngle=self._angleOfVector_(v);
endAngle=self._angleOfVector_(_st(end).__minus(center));
self._arcCenterX_centerY_radius_startAngle_endAngle_ccw_(_st(center)._x(),_st(center)._y(),radius,startAngle,endAngle,_st(aBool)._not());
return self}, function($ctx1) {$ctx1.fill(self,"arcTo:angle:cw:",{newEndPoint:newEndPoint,angle:angle,aBool:aBool,start:start,end:end,center:center,v:v,radius:radius,startAngle:startAngle,endAngle:endAngle,cwAngle:cwAngle},smalltalk.AthensHTMLPathBuilder)})},
args: ["newEndPoint", "angle", "aBool"],
source: "arcTo: newEndPoint angle: angle cw: aBool\x0a\x0a\x09\x22 Add a clockwise arc segment, starting from current path endpoint and\x0a\x09ending at andPt. Angle should be specified in radians \x0a\x09\x22\x0a\x0a\x09| start end center v radius startAngle endAngle cwAngle |\x09\x0a\x09start := endPoint.\x0a\x09endPoint := end := self toAbsolute: newEndPoint.\x0a\x0a\x09\x22we have to transform the input. because Cario expects \x0a\x09the center , radius, starting and ending angle,\x0a\x09and we have the starting point, the ending point , and the angle.\x0a\x09\x22\x0a\x09aBool ifTrue: [cwAngle := angle] ifFalse: [cwAngle := angle negated].\x0a\x09center := self calcCenter: start end: end  angle: cwAngle.\x0a\x09v := (start - center).\x0a\x09radius := v r.\x0a\x09startAngle := self angleOfVector: v.\x0a\x09endAngle := self angleOfVector: (end-center).\x0a\x09\x0a\x09self arcCenterX: center x centerY: center y  radius: radius  startAngle: startAngle endAngle: endAngle ccw: aBool not.\x0a\x09\x09",
messageSends: ["toAbsolute:", "ifTrue:ifFalse:", "negated", "calcCenter:end:angle:", "-", "r", "angleOfVector:", "arcCenterX:centerY:radius:startAngle:endAngle:ccw:", "x", "y", "not"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "calcCenter:end:angle:",
category: 'private',
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
}, function($ctx1) {$ctx1.fill(self,"calcCenter:end:angle:",{start:start,end:end,angle:angle,v:v,rot:rot,center:center,radius:radius,len:len,sina:sina,cosa:cosa,m:m},smalltalk.AthensHTMLPathBuilder)})},
args: ["start", "end", "angle"],
source: "calcCenter: start end: end angle: angle\x0a\x0a\x09| v  rot  center radius len sina cosa m |\x09\x0a\x0a\x09v := end - start.\x0a\x09\x0a\x09m := AthensAffineTransform new rotateByRadians: (Number pi - angle   /2).\x0a\x0a\x09v := m transform: v.\x09\x09\x0a\x09len := v r.\x0a\x09radius := len / 2 / (angle /2) sin.\x0a\x09\x0a\x09center := v * (radius/len) + start.\x0a\x0a\x09^ center",
messageSends: ["-", "rotateByRadians:", "/", "pi", "new", "transform:", "r", "sin", "+", "*"],
referencedClasses: ["Number", "AthensAffineTransform"]
}),
smalltalk.AthensHTMLPathBuilder);

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
}, function($ctx1) {$ctx1.fill(self,"ccwArcTo:angle:",{newEndPoint:newEndPoint,angle:angle},smalltalk.AthensHTMLPathBuilder)})},
args: ["newEndPoint", "angle"],
source: "ccwArcTo: newEndPoint angle: angle\x0a\x09\x22 Add a counter-clockwise arc segment, starting from current path endpoint and\x0a\x09ending at andPt. Angle should be specified in radians \x0a\x09\x22\x0a\x09^ self arcTo: newEndPoint angle: angle cw: false",
messageSends: ["arcTo:angle:cw:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'path commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._closePath();
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.AthensHTMLPathBuilder)})},
args: [],
source: "close\x0a\x09self closePath.",
messageSends: ["closePath"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "closePath",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._closePath();
return self}, function($ctx1) {$ctx1.fill(self,"closePath",{},smalltalk.AthensHTMLPathBuilder)})},
args: [],
source: "closePath\x0a\x09surface context2D closePath.",
messageSends: ["closePath", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
category: 'drawing',
fn: function (aPathCreatingBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@pathCreatingBlock"]=aPathCreatingBlock;
self["@absolute"]=false;
self["@endPoint"]=_st(self._class())._zeroPoint();
return self}, function($ctx1) {$ctx1.fill(self,"createPath:",{aPathCreatingBlock:aPathCreatingBlock},smalltalk.AthensHTMLPathBuilder)})},
args: ["aPathCreatingBlock"],
source: "createPath: aPathCreatingBlock\x0a\x09pathCreatingBlock := aPathCreatingBlock.\x0a\x09absolute := false.\x0a\x09endPoint := self class zeroPoint.",
messageSends: ["zeroPoint", "class"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:and:to:",
category: 'path commands',
fn: function (p1,p2,aPoint){
var self=this;
var pt1,pt2;
return smalltalk.withContext(function($ctx1) { 
pt1=self._toAbsolute_(p1);
pt2=self._toAbsolute_(p2);
self["@endPoint"]=self._toAbsolute_(aPoint);
self._curveViaX_Y_viaX_Y_toX_Y_(_st(pt1)._x(),_st(pt1)._y(),_st(pt2)._x(),_st(pt2)._y(),_st(self["@endPoint"])._x(),_st(self["@endPoint"])._y());
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:and:to:",{p1:p1,p2:p2,aPoint:aPoint,pt1:pt1,pt2:pt2},smalltalk.AthensHTMLPathBuilder)})},
args: ["p1", "p2", "aPoint"],
source: "curveVia: p1 and: p2 to: aPoint\x0a\x09|pt1 pt2|\x0a\x09pt1 := self toAbsolute: p1.\x0a\x09pt2 := self toAbsolute: p2.\x0a\x09endPoint := self toAbsolute: aPoint.\x0a\x09self curveViaX: pt1 x Y: pt1 y viaX: pt2 x Y: pt2 y toX: endPoint x Y: endPoint y.",
messageSends: ["toAbsolute:", "curveViaX:Y:viaX:Y:toX:Y:", "x", "y"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:to:",
category: 'path commands',
fn: function (p1,aPoint){
var self=this;
var pt1;
return smalltalk.withContext(function($ctx1) { 
pt1=self._toAbsolute_(p1);
self["@endPoint"]=self._toAbsolute_(aPoint);
self._curveViaX_Y_toX_Y_(_st(pt1)._x(),_st(pt1)._y(),_st(self["@endPoint"])._x(),_st(self["@endPoint"])._y());
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{p1:p1,aPoint:aPoint,pt1:pt1},smalltalk.AthensHTMLPathBuilder)})},
args: ["p1", "aPoint"],
source: "curveVia: p1 to: aPoint\x0a\x09|pt1|\x0a\x09pt1 := self toAbsolute: p1.\x0a\x09endPoint := self toAbsolute: aPoint.\x0a\x09self curveViaX: pt1 x Y: pt1 y toX: endPoint x Y: endPoint y.",
messageSends: ["toAbsolute:", "curveViaX:Y:toX:Y:", "x", "y"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "curveViaX:Y:toX:Y:",
category: 'private',
fn: function (x1,y1,x2,y2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._quadraticCurveTo_a_a_a_(x1,y1,x2,y2);
return self}, function($ctx1) {$ctx1.fill(self,"curveViaX:Y:toX:Y:",{x1:x1,y1:y1,x2:x2,y2:y2},smalltalk.AthensHTMLPathBuilder)})},
args: ["x1", "y1", "x2", "y2"],
source: "curveViaX: x1 Y: y1 toX: x2 Y: y2\x0a\x09surface context2D quadraticCurveTo: x1 a: y1 a: x2 a: y2.",
messageSends: ["quadraticCurveTo:a:a:a:", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "curveViaX:Y:viaX:Y:toX:Y:",
category: 'private',
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._bezierCurveTo_a_a_a_a_a_(x1,y1,x2,y2,x3,y3);
return self}, function($ctx1) {$ctx1.fill(self,"curveViaX:Y:viaX:Y:toX:Y:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3},smalltalk.AthensHTMLPathBuilder)})},
args: ["x1", "y1", "x2", "y2", "x3", "y3"],
source: "curveViaX: x1 Y: y1 viaX: x2 Y: y2 toX: x3 Y: y3\x0a\x09surface context2D bezierCurveTo: x1 a: y1 a: x2 a: y2 a: x3 a: y3.",
messageSends: ["bezierCurveTo:a:a:a:a:a:", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

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
}, function($ctx1) {$ctx1.fill(self,"cwArcTo:angle:",{newEndPoint:newEndPoint,angle:angle},smalltalk.AthensHTMLPathBuilder)})},
args: ["newEndPoint", "angle"],
source: "cwArcTo: newEndPoint angle: angle\x0a\x09\x22 Add a clockwise arc segment, starting from current path endpoint and\x0a\x09ending at andPt. Angle should be specified in radians \x0a\x09\x22\x0a\x09^ self arcTo: newEndPoint angle: angle cw: true",
messageSends: ["arcTo:angle:cw:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
category: 'path commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._newPath();
self._moveToX_Y_((0),(0));
_st(self["@pathCreatingBlock"])._value_(self);
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.AthensHTMLPathBuilder)})},
args: [],
source: "draw\x0a\x09self newPath.\x0a\x09self moveToX: 0 Y: 0.\x0a\x09\x0a\x09pathCreatingBlock value: self.",
messageSends: ["newPath", "moveToX:Y:", "value:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
category: 'path commands',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@endPoint"]=self._toAbsolute_(aPoint);
$1=self._lineToX_Y_(_st(self["@endPoint"])._x(),_st(self["@endPoint"])._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.AthensHTMLPathBuilder)})},
args: ["aPoint"],
source: "lineTo: aPoint\x0a\x09endPoint := self toAbsolute: aPoint.\x0a\x09^ self lineToX: endPoint x Y: endPoint y",
messageSends: ["toAbsolute:", "lineToX:Y:", "x", "y"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "lineToX:Y:",
category: 'private',
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._lineTo_a_(x,y);
return self}, function($ctx1) {$ctx1.fill(self,"lineToX:Y:",{x:x,y:y},smalltalk.AthensHTMLPathBuilder)})},
args: ["x", "y"],
source: "lineToX: x Y: y\x0a\x09surface context2D lineTo: x a: y.",
messageSends: ["lineTo:a:", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
category: 'path commands',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@endPoint"]=self._toAbsolute_(aPoint);
$1=self._moveToX_Y_(_st(self["@endPoint"])._x(),_st(self["@endPoint"])._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.AthensHTMLPathBuilder)})},
args: ["aPoint"],
source: "moveTo: aPoint\x0a\x09\x0a\x09endPoint := self toAbsolute: aPoint.\x0a\x09\x0a\x09^ self moveToX: endPoint x Y: endPoint y ",
messageSends: ["toAbsolute:", "moveToX:Y:", "x", "y"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "moveToX:Y:",
category: 'private',
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._moveTo_a_(x,y);
return self}, function($ctx1) {$ctx1.fill(self,"moveToX:Y:",{x:x,y:y},smalltalk.AthensHTMLPathBuilder)})},
args: ["x", "y"],
source: "moveToX: x Y: y\x0a\x09surface context2D moveTo: x a: y.",
messageSends: ["moveTo:a:", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "newPath",
category: 'path commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._beginPath();
return self}, function($ctx1) {$ctx1.fill(self,"newPath",{},smalltalk.AthensHTMLPathBuilder)})},
args: [],
source: "newPath\x0a\x09surface context2D beginPath.",
messageSends: ["beginPath", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "paintFillsUsing:on:",
category: 'path commands',
fn: function (aPaint,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aPaint)._fillPath_on_(self,anAthensCanvas);
return $1;
}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPathBuilder)})},
args: ["aPaint", "anAthensCanvas"],
source: "paintFillsUsing: aPaint on: anAthensCanvas \x0a\x09^ aPaint fillPath: self on: anAthensCanvas",
messageSends: ["fillPath:on:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "relative",
category: 'path commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@absolute"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"relative",{},smalltalk.AthensHTMLPathBuilder)})},
args: [],
source: "relative\x0a\x09absolute := false.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "surface",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@surface"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"surface",{},smalltalk.AthensHTMLPathBuilder)})},
args: [],
source: "surface\x0a\x09^ surface",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{anObject:anObject},smalltalk.AthensHTMLPathBuilder)})},
args: ["anObject"],
source: "surface: anObject\x0a\x09surface := anObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "toAbsolute:",
category: 'path commands',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@absolute"];
if(smalltalk.assert($2)){
$1=aPoint;
} else {
$1=_st(self["@endPoint"]).__plus(aPoint);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"toAbsolute:",{aPoint:aPoint},smalltalk.AthensHTMLPathBuilder)})},
args: ["aPoint"],
source: "toAbsolute: aPoint\x0a\x09^ absolute \x0a\x09\x09\x09ifTrue: [aPoint] \x0a\x09\x09\x09ifFalse: [endPoint + aPoint]",
messageSends: ["ifTrue:ifFalse:", "+"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);


smalltalk.addMethod(
smalltalk.method({
selector: "on:with:",
category: 'instance creation',
fn: function (anHTMLSurface,aPathCreatingBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._surface_(anHTMLSurface);
_st($2)._initialize();
_st($2)._createPath_(aPathCreatingBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:with:",{anHTMLSurface:anHTMLSurface,aPathCreatingBlock:aPathCreatingBlock},smalltalk.AthensHTMLPathBuilder.klass)})},
args: ["anHTMLSurface", "aPathCreatingBlock"],
source: "on: anHTMLSurface with: aPathCreatingBlock\x0a\x09^ self basicNew\x0a\x09\x09surface: anHTMLSurface;\x0a\x09\x09initialize;\x0a\x09\x09createPath: aPathCreatingBlock;\x0a\x09\x09yourself",
messageSends: ["surface:", "basicNew", "initialize", "createPath:", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder.klass);



smalltalk.addPackage('Athens-HTML-Paths');
smalltalk.addClass('AthensHTMLPath', smalltalk.Object, ['segment', 'context2D', 'startPoint', 'endPoint'], 'Athens-HTML-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "angleOfVector:",
fn: function (v){
var self=this;
var acos;
function $Number(){return smalltalk.Number||(typeof Number=="undefined"?nil:Number)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
acos=_st(_st(_st(v)._normalized())._x())._arcCos();
$2=_st(_st(v)._y()).__lt((0));
if(smalltalk.assert($2)){
$1=_st(_st(_st($Number())._pi()).__star((2))).__minus(acos);
} else {
$1=acos;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"angleOfVector:",{v:v,acos:acos},smalltalk.AthensHTMLPath)})},
messageSends: ["arcCos", "x", "normalized", "ifTrue:ifFalse:", "-", "*", "pi", "<", "y"]}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "arcCenterX:centerY:radius:startAngle:endAngle:ccw:",
fn: function (xc,yc,radius,angle1,angle2,aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@context2D'].arc(xc, yc, radius, angle1, angle2, aBool); ;
return self}, function($ctx1) {$ctx1.fill(self,"arcCenterX:centerY:radius:startAngle:endAngle:ccw:",{xc:xc,yc:yc,radius:radius,angle1:angle1,angle2:angle2,aBool:aBool},smalltalk.AthensHTMLPath)})},
messageSends: []}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "arcTo:angle:cw:",
fn: function (newEndPoint,angle,aBool){
var self=this;
var start,end,center,v,radius,startAngle,endAngle,cwAngle;
return smalltalk.withContext(function($ctx1) { 
var $1;
start=self["@endPoint"];
end=newEndPoint;
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
return self}, function($ctx1) {$ctx1.fill(self,"arcTo:angle:cw:",{newEndPoint:newEndPoint,angle:angle,aBool:aBool,start:start,end:end,center:center,v:v,radius:radius,startAngle:startAngle,endAngle:endAngle,cwAngle:cwAngle},smalltalk.AthensHTMLPath)})},
messageSends: ["ifTrue:ifFalse:", "negated", "calcCenter:end:angle:", "-", "r", "angleOfVector:", "arcCenterX:centerY:radius:startAngle:endAngle:ccw:", "x", "y", "not"]}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "asAthensShapeOn:",
fn: function (anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAthensShapeOn:",{anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPath)})},
messageSends: []}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "calcCenter:end:angle:",
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
messageSends: ["-", "rotateByRadians:", "/", "pi", "new", "transform:", "r", "sin", "+", "*"]}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "ccwArcTo:angle:",
fn: function (newEndPoint,angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arcTo_angle_cw_(newEndPoint,angle,false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ccwArcTo:angle:",{newEndPoint:newEndPoint,angle:angle},smalltalk.AthensHTMLPath)})},
messageSends: ["arcTo:angle:cw:"]}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._closePath();
self["@endPoint"]=self["@startPoint"];
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.AthensHTMLPath)})},
messageSends: ["closePath"]}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:and:to:",
fn: function (pt1,pt2,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@endPoint"]=aPoint;
self._curveViaX_Y_viaX_Y_toX_Y_(_st(pt1)._x(),_st(pt1)._y(),_st(pt2)._x(),_st(pt2)._y(),_st(aPoint)._x(),_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:and:to:",{pt1:pt1,pt2:pt2,aPoint:aPoint},smalltalk.AthensHTMLPath)})},
messageSends: ["curveViaX:Y:viaX:Y:toX:Y:", "x", "y"]}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:to:",
fn: function (pt1,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@endPoint"]=aPoint;
self._curveViaX_Y_toX_Y_(_st(pt1)._x(),_st(pt1)._y(),_st(self["@endPoint"])._x(),_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{pt1:pt1,aPoint:aPoint},smalltalk.AthensHTMLPath)})},
messageSends: ["curveViaX:Y:toX:Y:", "x", "y"]}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "curveViaX:Y:toX:Y:",
fn: function (x1,y1,x2,y2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._quadraticCurveTo_a_a_a_(x1,y1,x2,y2);
return self}, function($ctx1) {$ctx1.fill(self,"curveViaX:Y:toX:Y:",{x1:x1,y1:y1,x2:x2,y2:y2},smalltalk.AthensHTMLPath)})},
messageSends: ["quadraticCurveTo:a:a:a:"]}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "curveViaX:Y:viaX:Y:toX:Y:",
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._bezierCurveTo_a_a_a_a_a_(x1,y1,x2,y2,x3,y3);
return self}, function($ctx1) {$ctx1.fill(self,"curveViaX:Y:viaX:Y:toX:Y:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3},smalltalk.AthensHTMLPath)})},
messageSends: ["bezierCurveTo:a:a:a:a:a:"]}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "cwArcTo:angle:",
fn: function (newEndPoint,angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arcTo_angle_cw_(newEndPoint,angle,true);
return $1;
}, function($ctx1) {$ctx1.fill(self,"cwArcTo:angle:",{newEndPoint:newEndPoint,angle:angle},smalltalk.AthensHTMLPath)})},
messageSends: ["arcTo:angle:cw:"]}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
self["@context2D"]=_st(anAthensCanvas)._context2D();
self["@context2D"];
self._newPath();
return _st(self["@segment"])._sendCommandsTo_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
self["@context2D"]=nil;
return self["@context2D"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPath)})},
messageSends: ["ensure:", "context2D", "newPath", "sendCommandsTo:"]}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@endPoint"]=aPoint;
$1=self._lineToX_Y_(_st(self["@endPoint"])._x(),_st(self["@endPoint"])._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.AthensHTMLPath)})},
messageSends: ["lineToX:Y:", "x", "y"]}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "lineToX:Y:",
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._lineTo_a_(x,y);
return self}, function($ctx1) {$ctx1.fill(self,"lineToX:Y:",{x:x,y:y},smalltalk.AthensHTMLPath)})},
messageSends: ["lineTo:a:"]}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@endPoint"]=aPoint;
$1=self._moveToX_Y_(_st(aPoint)._x(),_st(aPoint)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.AthensHTMLPath)})},
messageSends: ["moveToX:Y:", "x", "y"]}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "moveToX:Y:",
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._moveTo_a_(x,y);
return self}, function($ctx1) {$ctx1.fill(self,"moveToX:Y:",{x:x,y:y},smalltalk.AthensHTMLPath)})},
messageSends: ["moveTo:a:"]}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "newPath",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@endPoint"]=(0).__at((0));
self["@startPoint"]=(0).__at((0));
_st(self["@context2D"])._beginPath();
self._moveToX_Y_((0),(0));
return self}, function($ctx1) {$ctx1.fill(self,"newPath",{},smalltalk.AthensHTMLPath)})},
messageSends: ["@", "beginPath", "moveToX:Y:"]}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "paintFillsUsing:on:",
fn: function (aPaint,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aPaint)._fillPath_on_(self,anAthensCanvas);
return $1;
}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPath)})},
messageSends: ["fillPath:on:"]}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "segment:",
fn: function (startSegment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@segment"]=startSegment;
return self}, function($ctx1) {$ctx1.fill(self,"segment:",{startSegment:startSegment},smalltalk.AthensHTMLPath)})},
messageSends: []}),
smalltalk.AthensHTMLPath);


smalltalk.addMethod(
smalltalk.method({
selector: "segment:",
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
messageSends: ["segment:", "new", "yourself"]}),
smalltalk.AthensHTMLPath.klass);


smalltalk.addClass('AthensHTMLPathBuilder', smalltalk.AthensPathBuilder, ['surface', 'absolute', 'endPoint', 'startPoint', 'pathCreatingBlock'], 'Athens-HTML-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "absolute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@absolute"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"absolute",{},smalltalk.AthensHTMLPathBuilder)})},
messageSends: []}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "angleOfVector:",
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
messageSends: ["normalized", "arcCos", "x", "ifTrue:ifFalse:", "-", "*", "pi", "<", "y"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "arcCenterX:centerY:radius:startAngle:endAngle:ccw:",
fn: function (xc,yc,radius,angle1,angle2,aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._arc_a_a_a_a_a_(xc,yc,radius,angle1,angle2,aBool);
return self}, function($ctx1) {$ctx1.fill(self,"arcCenterX:centerY:radius:startAngle:endAngle:ccw:",{xc:xc,yc:yc,radius:radius,angle1:angle1,angle2:angle2,aBool:aBool},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["arc:a:a:a:a:a:", "context2D"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "arcTo:angle:cw:",
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
messageSends: ["toAbsolute:", "ifTrue:ifFalse:", "negated", "calcCenter:end:angle:", "-", "r", "angleOfVector:", "arcCenterX:centerY:radius:startAngle:endAngle:ccw:", "x", "y", "not"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "calcCenter:end:angle:",
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
messageSends: ["-", "rotateByRadians:", "/", "pi", "new", "transform:", "r", "sin", "+", "*"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "ccwArcTo:angle:",
fn: function (newEndPoint,angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arcTo_angle_cw_(newEndPoint,angle,false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ccwArcTo:angle:",{newEndPoint:newEndPoint,angle:angle},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["arcTo:angle:cw:"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._closePath();
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["closePath"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "closePath",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._closePath();
return self}, function($ctx1) {$ctx1.fill(self,"closePath",{},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["closePath", "context2D"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
fn: function (aPathCreatingBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@pathCreatingBlock"]=aPathCreatingBlock;
self["@absolute"]=false;
self["@endPoint"]=_st(self._class())._zeroPoint();
return self}, function($ctx1) {$ctx1.fill(self,"createPath:",{aPathCreatingBlock:aPathCreatingBlock},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["zeroPoint", "class"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:and:to:",
fn: function (p1,p2,aPoint){
var self=this;
var pt1,pt2;
return smalltalk.withContext(function($ctx1) { 
pt1=self._toAbsolute_(p1);
pt2=self._toAbsolute_(p2);
self["@endPoint"]=self._toAbsolute_(aPoint);
self._curveViaX_Y_viaX_Y_toX_Y_(_st(pt1)._x(),_st(pt1)._y(),_st(pt2)._x(),_st(pt2)._y(),_st(self["@endPoint"])._x(),_st(self["@endPoint"])._y());
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:and:to:",{p1:p1,p2:p2,aPoint:aPoint,pt1:pt1,pt2:pt2},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["toAbsolute:", "curveViaX:Y:viaX:Y:toX:Y:", "x", "y"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:to:",
fn: function (p1,aPoint){
var self=this;
var pt1;
return smalltalk.withContext(function($ctx1) { 
pt1=self._toAbsolute_(p1);
self["@endPoint"]=self._toAbsolute_(aPoint);
self._curveViaX_Y_toX_Y_(_st(pt1)._x(),_st(pt1)._y(),_st(self["@endPoint"])._x(),_st(self["@endPoint"])._y());
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{p1:p1,aPoint:aPoint,pt1:pt1},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["toAbsolute:", "curveViaX:Y:toX:Y:", "x", "y"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "curveViaX:Y:toX:Y:",
fn: function (x1,y1,x2,y2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._quadraticCurveTo_a_a_a_(x1,y1,x2,y2);
return self}, function($ctx1) {$ctx1.fill(self,"curveViaX:Y:toX:Y:",{x1:x1,y1:y1,x2:x2,y2:y2},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["quadraticCurveTo:a:a:a:", "context2D"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "curveViaX:Y:viaX:Y:toX:Y:",
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._bezierCurveTo_a_a_a_a_a_(x1,y1,x2,y2,x3,y3);
return self}, function($ctx1) {$ctx1.fill(self,"curveViaX:Y:viaX:Y:toX:Y:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["bezierCurveTo:a:a:a:a:a:", "context2D"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "cwArcTo:angle:",
fn: function (newEndPoint,angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arcTo_angle_cw_(newEndPoint,angle,true);
return $1;
}, function($ctx1) {$ctx1.fill(self,"cwArcTo:angle:",{newEndPoint:newEndPoint,angle:angle},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["arcTo:angle:cw:"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._newPath();
self._moveToX_Y_((0),(0));
_st(self["@pathCreatingBlock"])._value_(self);
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["newPath", "moveToX:Y:", "value:"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@endPoint"]=self._toAbsolute_(aPoint);
$1=self._lineToX_Y_(_st(self["@endPoint"])._x(),_st(self["@endPoint"])._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["toAbsolute:", "lineToX:Y:", "x", "y"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "lineToX:Y:",
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._lineTo_a_(x,y);
return self}, function($ctx1) {$ctx1.fill(self,"lineToX:Y:",{x:x,y:y},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["lineTo:a:", "context2D"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@endPoint"]=self._toAbsolute_(aPoint);
$1=self._moveToX_Y_(_st(self["@endPoint"])._x(),_st(self["@endPoint"])._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["toAbsolute:", "moveToX:Y:", "x", "y"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "moveToX:Y:",
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._moveTo_a_(x,y);
return self}, function($ctx1) {$ctx1.fill(self,"moveToX:Y:",{x:x,y:y},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["moveTo:a:", "context2D"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "newPath",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@absolute"]=false;
self["@endPoint"]=_st(self._class())._zeroPoint();
_st(_st(self["@surface"])._context2D())._beginPath();
self["@startPoint"]=self["@endPoint"];
self._moveToX_Y_((0),(0));
return self}, function($ctx1) {$ctx1.fill(self,"newPath",{},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["zeroPoint", "class", "beginPath", "context2D", "moveToX:Y:"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "paintFillsUsing:on:",
fn: function (aPaint,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aPaint)._fillPath_on_(self,anAthensCanvas);
return $1;
}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["fillPath:on:"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "relative",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@absolute"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"relative",{},smalltalk.AthensHTMLPathBuilder)})},
messageSends: []}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "surface",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@surface"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"surface",{},smalltalk.AthensHTMLPathBuilder)})},
messageSends: []}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{anObject:anObject},smalltalk.AthensHTMLPathBuilder)})},
messageSends: []}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "toAbsolute:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
if(smalltalk.assert(true)){
$1=aPoint;
} else {
$1=_st(self["@endPoint"]).__plus(aPoint);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"toAbsolute:",{aPoint:aPoint},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["ifTrue:ifFalse:", "+"]}),
smalltalk.AthensHTMLPathBuilder);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (anHTMLSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._surface_(anHTMLSurface);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensHTMLPathBuilder.klass)})},
messageSends: ["surface:", "basicNew", "initialize", "yourself"]}),
smalltalk.AthensHTMLPathBuilder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:with:",
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
messageSends: ["surface:", "basicNew", "initialize", "createPath:", "yourself"]}),
smalltalk.AthensHTMLPathBuilder.klass);



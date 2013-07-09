smalltalk.addPackage('Athens-HTML-Paths');
smalltalk.addClass('AthensHTMLPath', smalltalk.Object, ['segment', 'context2D', 'startPoint', 'endPoint'], 'Athens-HTML-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "arcTo:angle:cw:",
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
messageSends: []}),
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
 self['@endPoint'] = self['@startPoint'];
	self['@context2D'].closePath(); ;
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.AthensHTMLPath)})},
messageSends: []}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:and:to:",
fn: function (pt1,pt2,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@endPoint'] = aPoint;
	self['@context2D'].bezierCurveTo(pt1._x(), pt1._y(), pt2._x(), pt2._y(), aPoint._x(), aPoint._y()); ;
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:and:to:",{pt1:pt1,pt2:pt2,aPoint:aPoint},smalltalk.AthensHTMLPath)})},
messageSends: []}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:to:",
fn: function (pt1,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@endPoint'] = aPoint;
	self['@context2D'].quadraticCurveTo(pt1._x(), pt1._y(), aPoint._x(), aPoint._y()); ;
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{pt1:pt1,aPoint:aPoint},smalltalk.AthensHTMLPath)})},
messageSends: []}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "curveViaX:Y:toX:Y:",
fn: function (x1,y1,x2,y2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@context2D'].quadraticCurveTo(x1, y1, x2, y2); ;
return self}, function($ctx1) {$ctx1.fill(self,"curveViaX:Y:toX:Y:",{x1:x1,y1:y1,x2:x2,y2:y2},smalltalk.AthensHTMLPath)})},
messageSends: []}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "curveViaX:Y:viaX:Y:toX:Y:",
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@context2D'].bezierCurveTo(x1, y1, x2, y2, x3, y3); ;
return self}, function($ctx1) {$ctx1.fill(self,"curveViaX:Y:viaX:Y:toX:Y:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3},smalltalk.AthensHTMLPath)})},
messageSends: []}),
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
 self['@endPoint'] = aPoint;
	self['@context2D'].lineTo(aPoint._x(), aPoint._y()); ;
return self}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.AthensHTMLPath)})},
messageSends: []}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "lineToX:Y:",
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@context2D'].lineTo(x, y); ;
return self}, function($ctx1) {$ctx1.fill(self,"lineToX:Y:",{x:x,y:y},smalltalk.AthensHTMLPath)})},
messageSends: []}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@endPoint'] = aPoint;
	self['@context2D'].moveTo(aPoint._x(), aPoint._y()); ;
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.AthensHTMLPath)})},
messageSends: []}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "moveToX:Y:",
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@context2D'].moveTo(x, y); ;
return self}, function($ctx1) {$ctx1.fill(self,"moveToX:Y:",{x:x,y:y},smalltalk.AthensHTMLPath)})},
messageSends: []}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "newPath",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@endPoint'] = self._class()['@zeroPoint'];
	self['@startPoint'] = self._class()['@zeroPoint'];
	self['@context2D'].beginPath();
	self._moveToX_Y_(0, 0); ;
return self}, function($ctx1) {$ctx1.fill(self,"newPath",{},smalltalk.AthensHTMLPath)})},
messageSends: []}),
smalltalk.AthensHTMLPath);

smalltalk.addMethod(
smalltalk.method({
selector: "paintFillsUsing:on:",
fn: function (aPaint,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 aPaint._fillPath_on_(self, anAthensCanvas); ;
return self}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPath)})},
messageSends: []}),
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


smalltalk.AthensHTMLPath.klass.iVarNames = ['zeroPoint'];
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@zeroPoint"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLPath.klass)})},
messageSends: ["@"]}),
smalltalk.AthensHTMLPath.klass);

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



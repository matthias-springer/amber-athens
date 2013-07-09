smalltalk.addPackage('Athens-Core-Paths');
smalltalk.addClass('AthensPathBuilder', smalltalk.Object, [], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "absolute",
category: 'path commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"absolute",{},smalltalk.AthensPathBuilder)})},
args: [],
source: "absolute\x0a\x09\x22next commands will use absolute coordinates for all segment points\x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "ccwArcTo:angle:",
category: 'path commands',
fn: function (endPt,rot){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"ccwArcTo:angle:",{endPt:endPt,rot:rot},smalltalk.AthensPathBuilder)})},
args: ["endPt", "rot"],
source: "ccwArcTo: endPt angle: rot\x0a\x09\x22 Add a counter-clockwise arc segment, starting from current path endpoint and\x0a\x09ending at andPt. Angle should be specified in radians \x22\x0a\x09\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'path commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.AthensPathBuilder)})},
args: [],
source: "close\x0a\x09\x22close the current path controur\x22\x0a\x09self subclassResponsibility ",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
category: 'creating path',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"createPath:",{aBlock:aBlock},smalltalk.AthensPathBuilder)})},
args: ["aBlock"],
source: "createPath:\x09aBlock\x0a\x0a\x09\x09\x22aBlock value: self ....\x22\x09\x0a\x09self subclassResponsibility ",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:and:to:",
category: 'path commands',
fn: function (cp1,cp2,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:and:to:",{cp1:cp1,cp2:cp2,aPoint:aPoint},smalltalk.AthensPathBuilder)})},
args: ["cp1", "cp2", "aPoint"],
source: "curveVia: cp1 and: cp2 to: aPoint\x0a\x09\x22Add a cubic bezier curve,\x0a\x09starting from current path endpoint, using control points cp1, cp2\x0a\x09and ending at aPoint \x22\x0a\x09\x0a\x09self subclassResponsibility \x09",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:to:",
category: 'path commands',
fn: function (cp1,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{cp1:cp1,aPoint:aPoint},smalltalk.AthensPathBuilder)})},
args: ["cp1", "aPoint"],
source: "curveVia: cp1 to: aPoint\x0a\x0a\x09\x22Add a quadric bezier curve,\x0a\x09starting from current path endpoint, using control point cp1, \x0a\x09and ending at aPoint \x22\x0a\x09\x0a\x09self subclassResponsibility ",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "cwArcTo:angle:",
category: 'path commands',
fn: function (endPt,rot){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"cwArcTo:angle:",{endPt:endPt,rot:rot},smalltalk.AthensPathBuilder)})},
args: ["endPt", "rot"],
source: "cwArcTo: endPt angle: rot\x0a\x09\x22 Add a clockwise arc segment, starting from current path endpoint and\x0a\x09ending at andPt. Angle should be specified in radians \x22\x0a\x09\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
category: 'path commands',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.AthensPathBuilder)})},
args: ["aPoint"],
source: "lineTo: aPoint\x0a\x09\x22add a line segment, starting from current path endpoint to aPoint\x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
category: 'path commands',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.AthensPathBuilder)})},
args: ["aPoint"],
source: "moveTo: aPoint\x0a\x09\x22 move command always starts a new contour \x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "relative",
category: 'path commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"relative",{},smalltalk.AthensPathBuilder)})},
args: [],
source: "relative\x0a\x0a\x09\x22next commands will use relative coordinates for all segment points\x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensPathBuilder);


smalltalk.AthensPathBuilder.klass.iVarNames = ['zeroPoint'];
smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
category: 'instance creation',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._createPath_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aBlock:aBlock},smalltalk.AthensPathBuilder.klass)})},
args: ["aBlock"],
source: "createPath: aBlock\x0a\x0a\x09^ self new createPath: aBlock",
messageSends: ["createPath:", "new"],
referencedClasses: []
}),
smalltalk.AthensPathBuilder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@zeroPoint"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensPathBuilder.klass)})},
args: [],
source: "initialize\x0a\x09zeroPoint := 0@0",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.AthensPathBuilder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "zeroPoint",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__at((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"zeroPoint",{},smalltalk.AthensPathBuilder.klass)})},
args: [],
source: "zeroPoint\x0a\x09^ 0@0",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.AthensPathBuilder.klass);


smalltalk.addClass('AthensSimplePathBuilder', smalltalk.AthensPathBuilder, ['absolute', 'open', 'contourStartPt', 'xMin', 'yMin', 'xMax', 'yMax', 'pathStart', 'lastSegment'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "absolute",
category: 'path commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@absolute"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"absolute",{},smalltalk.AthensSimplePathBuilder)})},
args: [],
source: "absolute\x0a\x09absolute := true.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "addSegment:",
category: 'private',
fn: function (aSegment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@lastSegment"])._next_(aSegment);
self["@lastSegment"]=aSegment;
return self}, function($ctx1) {$ctx1.fill(self,"addSegment:",{aSegment:aSegment},smalltalk.AthensSimplePathBuilder)})},
args: ["aSegment"],
source: "addSegment: aSegment\x0a\x09lastSegment next: aSegment.\x0a\x09lastSegment := aSegment.\x0a ",
messageSends: ["next:"],
referencedClasses: []
}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "ccwArcTo:angle:",
category: 'path commands',
fn: function (endPt,rot){
var self=this;
function $AthensCCWArcSegment(){return smalltalk.AthensCCWArcSegment||(typeof AthensCCWArcSegment=="undefined"?nil:AthensCCWArcSegment)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._addSegment_(_st(_st($AthensCCWArcSegment())._new())._endPoint_angle_(self._toAbsolute_(endPt),rot));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ccwArcTo:angle:",{endPt:endPt,rot:rot},smalltalk.AthensSimplePathBuilder)})},
args: ["endPt", "rot"],
source: "ccwArcTo: endPt angle: rot\x0a\x09\x22 angle should be specified in radians \x22\x0a\x09^ self addSegment: (AthensCCWArcSegment new endPoint: (self toAbsolute: endPt) angle: rot).",
messageSends: ["addSegment:", "endPoint:angle:", "toAbsolute:", "new"],
referencedClasses: ["AthensCCWArcSegment"]
}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'path commands',
fn: function (){
var self=this;
function $AthensCloseSegment(){return smalltalk.AthensCloseSegment||(typeof AthensCloseSegment=="undefined"?nil:AthensCloseSegment)}
return smalltalk.withContext(function($ctx1) { 
self._addSegment_(_st(_st($AthensCloseSegment())._new())._point_(self["@contourStartPt"]));
self["@contourStartPt"]=nil;
self["@open"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.AthensSimplePathBuilder)})},
args: [],
source: "close\x0a\x09\x22close the current contour\x22\x0a\x09self addSegment: (AthensCloseSegment new point: contourStartPt).\x0a\x0a\x09contourStartPt := nil.\x0a\x09open := false",
messageSends: ["addSegment:", "point:", "new"],
referencedClasses: ["AthensCloseSegment"]
}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
category: 'creating path',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aBlock)._value_(self);
$1=self["@pathStart"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aBlock:aBlock},smalltalk.AthensSimplePathBuilder)})},
args: ["aBlock"],
source: "createPath:\x09aBlock\x0a\x0a\x09\x09\x22aBlock value: self ....\x22\x09\x0a\x0a\x09aBlock value: self.\x0a\x09\x0a\x09^ pathStart",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:and:to:",
category: 'path commands',
fn: function (cp1,cp2,aPoint){
var self=this;
var pt1,pt2,pt3;
function $AthensCubicSegment(){return smalltalk.AthensCubicSegment||(typeof AthensCubicSegment=="undefined"?nil:AthensCubicSegment)}
return smalltalk.withContext(function($ctx1) { 
var $1;
pt1=self._toAbsolute_(cp1);
pt2=self._toAbsolute_(cp2);
pt3=self._toAbsolute_(aPoint);
$1=self._addSegment_(_st(_st($AthensCubicSegment())._new())._from_via_and_to_(_st(self["@lastSegment"])._endPoint(),pt1,pt2,pt3));
return $1;
}, function($ctx1) {$ctx1.fill(self,"curveVia:and:to:",{cp1:cp1,cp2:cp2,aPoint:aPoint,pt1:pt1,pt2:pt2,pt3:pt3},smalltalk.AthensSimplePathBuilder)})},
args: ["cp1", "cp2", "aPoint"],
source: "curveVia: cp1 and: cp2 to: aPoint\x0a\x09\x22Cubic bezier curve\x22\x0a\x09\x0a\x09| pt1 pt2 pt3 |\x0a\x09\x22Quad bezier curve\x22\x0a\x0a\x09pt1 := self toAbsolute: cp1.\x0a\x09pt2 := self toAbsolute: cp2.\x0a\x09pt3 := self toAbsolute: aPoint.\x0a\x09^ self addSegment: (\x0a\x09\x09AthensCubicSegment new \x0a\x09\x09\x09from: lastSegment endPoint \x0a\x09\x09\x09via: pt1\x0a\x09\x09\x09and: pt2\x0a\x09\x09\x09to: pt3)",
messageSends: ["toAbsolute:", "addSegment:", "from:via:and:to:", "endPoint", "new"],
referencedClasses: ["AthensCubicSegment"]
}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:to:",
category: 'path commands',
fn: function (cp1,aPoint){
var self=this;
var pt1,pt2;
function $AthensQuadSegment(){return smalltalk.AthensQuadSegment||(typeof AthensQuadSegment=="undefined"?nil:AthensQuadSegment)}
return smalltalk.withContext(function($ctx1) { 
var $1;
pt1=self._toAbsolute_(cp1);
pt2=self._toAbsolute_(aPoint);
$1=self._addSegment_(_st(_st($AthensQuadSegment())._new())._from_via_to_(_st(self["@lastSegment"])._endPoint(),pt1,pt2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{cp1:cp1,aPoint:aPoint,pt1:pt1,pt2:pt2},smalltalk.AthensSimplePathBuilder)})},
args: ["cp1", "aPoint"],
source: "curveVia: cp1 to: aPoint\x0a\x09| pt1 pt2 |\x0a\x09\x22Quad bezier curve\x22\x0a\x0a\x09pt1 := self toAbsolute: cp1.\x0a\x09pt2 := self toAbsolute: aPoint.\x0a\x09^ self addSegment: (\x0a\x09\x09AthensQuadSegment new \x0a\x09\x09\x09from: lastSegment endPoint \x0a\x09\x09\x09via: pt1 \x0a\x09\x09\x09to: pt2)",
messageSends: ["toAbsolute:", "addSegment:", "from:via:to:", "endPoint", "new"],
referencedClasses: ["AthensQuadSegment"]
}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "cwArcTo:angle:",
category: 'path commands',
fn: function (endPt,rot){
var self=this;
function $AthensCWArcSegment(){return smalltalk.AthensCWArcSegment||(typeof AthensCWArcSegment=="undefined"?nil:AthensCWArcSegment)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._addSegment_(_st(_st($AthensCWArcSegment())._new())._endPoint_angle_(self._toAbsolute_(endPt),rot));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cwArcTo:angle:",{endPt:endPt,rot:rot},smalltalk.AthensSimplePathBuilder)})},
args: ["endPt", "rot"],
source: "cwArcTo: endPt angle: rot\x0a\x09\x22 angle should be specified in radians \x22\x0a\x09^ self addSegment: (AthensCWArcSegment new endPoint: (self toAbsolute: endPt) angle: rot).",
messageSends: ["addSegment:", "endPoint:angle:", "toAbsolute:", "new"],
referencedClasses: ["AthensCWArcSegment"]
}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $AthensMoveSegment(){return smalltalk.AthensMoveSegment||(typeof AthensMoveSegment=="undefined"?nil:AthensMoveSegment)}
return smalltalk.withContext(function($ctx1) { 
self["@absolute"]=false;
self["@contourStartPt"]=_st(self._class())._zeroPoint();
self["@lastSegment"]=_st(_st($AthensMoveSegment())._new())._point_(_st(self._class())._zeroPoint());
self["@pathStart"]=self["@lastSegment"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensSimplePathBuilder)})},
args: [],
source: "initialize\x0a\x09\x22A new path always starts from implicit (moveTo:0@0) segment.\x0a\x09If next segment is moveTo: , the point of already existing move segment will be changed,\x0a\x09avoiding creating extra move segments.\x0a\x09\x0a\x09\x22\x0a\x09absolute := false.\x0a\x09contourStartPt := self class zeroPoint.\x0a\x09pathStart := lastSegment := (AthensMoveSegment new  point: self class zeroPoint).",
messageSends: ["zeroPoint", "class", "point:", "new"],
referencedClasses: ["AthensMoveSegment"]
}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
category: 'path commands',
fn: function (aPoint){
var self=this;
function $AthensLineSegment(){return smalltalk.AthensLineSegment||(typeof AthensLineSegment=="undefined"?nil:AthensLineSegment)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._addSegment_(_st(_st($AthensLineSegment())._new())._point_(self._toAbsolute_(aPoint)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.AthensSimplePathBuilder)})},
args: ["aPoint"],
source: "lineTo: aPoint\x0a\x0a\x09^ self addSegment: (AthensLineSegment new point: (self toAbsolute: aPoint)).",
messageSends: ["addSegment:", "point:", "toAbsolute:", "new"],
referencedClasses: ["AthensLineSegment"]
}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
category: 'path commands',
fn: function (aPoint){
var self=this;
function $AthensMoveSegment(){return smalltalk.AthensMoveSegment||(typeof AthensMoveSegment=="undefined"?nil:AthensMoveSegment)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
self["@contourStartPt"]=self._toAbsolute_(aPoint);
$1=_st(self["@lastSegment"])._isMove();
if(smalltalk.assert($1)){
_st(self["@lastSegment"])._point_(self["@contourStartPt"]);
$2=self;
return $2;
};
$3=_st($AthensMoveSegment())._new();
_st($3)._point_(self["@contourStartPt"]);
$4=_st($3)._reopen_(self["@open"]);
self._addSegment_($4);
self["@open"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.AthensSimplePathBuilder)})},
args: ["aPoint"],
source: "moveTo: aPoint\x0a\x09\x22 move command always starts a new contour \x22\x0a\x09contourStartPt := self toAbsolute: aPoint.\x0a\x09\x0a\x09\x22collapse multiple moves to a single one\x22\x0a\x09lastSegment isMove ifTrue: [\x0a\x09\x09lastSegment point: contourStartPt.\x0a\x09\x09^ self\x0a\x09].\x0a\x0a\x09self addSegment: (AthensMoveSegment new point: contourStartPt; reopen: open).\x0a\x09open := true.",
messageSends: ["toAbsolute:", "ifTrue:", "point:", "isMove", "addSegment:", "new", "reopen:"],
referencedClasses: ["AthensMoveSegment"]
}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "pathBounds",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@xMin"]).__at(self["@yMin"]))._corner_(_st(self["@xMax"]).__at(self["@yMax"]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"pathBounds",{},smalltalk.AthensSimplePathBuilder)})},
args: [],
source: "pathBounds\x0a\x09^ xMin@yMin corner: xMax@yMax",
messageSends: ["corner:", "@"],
referencedClasses: []
}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "pathStart",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@pathStart"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pathStart",{},smalltalk.AthensSimplePathBuilder)})},
args: [],
source: "pathStart\x0a\x09^ pathStart",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "relative",
category: 'path commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@absolute"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"relative",{},smalltalk.AthensSimplePathBuilder)})},
args: [],
source: "relative\x0a\x09absolute := false.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "toAbsolute:",
category: 'private',
fn: function (aPoint){
var self=this;
var pt;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@absolute"];
if(smalltalk.assert($1)){
pt=aPoint;
} else {
pt=_st(_st(self["@lastSegment"])._endPoint()).__plus(aPoint);
};
$2=self["@xMin"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@xMax"]=_st(pt)._x();
self["@xMin"]=self["@xMax"];
self["@xMin"];
self["@yMax"]=_st(pt)._y();
self["@yMin"]=self["@yMax"];
self["@yMin"];
} else {
self["@xMin"]=_st(_st(pt)._x())._min_(self["@xMin"]);
self["@xMin"];
self["@yMin"]=_st(_st(pt)._y())._min_(self["@yMin"]);
self["@yMin"];
self["@xMax"]=_st(_st(pt)._x())._max_(self["@xMax"]);
self["@xMax"];
self["@yMax"]=_st(_st(pt)._y())._max_(self["@yMax"]);
self["@yMax"];
};
$3=pt;
return $3;
}, function($ctx1) {$ctx1.fill(self,"toAbsolute:",{aPoint:aPoint,pt:pt},smalltalk.AthensSimplePathBuilder)})},
args: ["aPoint"],
source: "toAbsolute: aPoint\x0a\x09| pt |\x0a\x09pt := absolute \x0a\x09\x09ifTrue: [ aPoint ]\x0a\x09\x09ifFalse: [ lastSegment endPoint + aPoint ].\x0a\x0a\x09\x22note the coordinate to calculate the path's bounding box\x22\x0a\x09xMin ifNil: [\x0a\x09\x09xMin := xMax := pt x.\x0a\x09\x09yMin := yMax := pt y.\x09\x0a\x09\x09] \x0a\x09ifNotNil: [\x0a\x09\x09xMin := pt x min: xMin.\x0a\x09\x09yMin := pt y min: yMin.\x0a\x09\x09xMax := pt x max: xMax.\x0a\x09\x09yMax := pt y max: yMax.\x09\x0a\x09].\x0a\x09^ pt",
messageSends: ["ifTrue:ifFalse:", "+", "endPoint", "ifNil:ifNotNil:", "x", "y", "min:", "max:"],
referencedClasses: []
}),
smalltalk.AthensSimplePathBuilder);



smalltalk.addClass('AthensPathConverter', smalltalk.Object, ['sourcePath', 'dest', 'endPoint'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "close:",
category: 'converting path commands',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@dest"])._close_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"close:",{aPoint:aPoint},smalltalk.AthensPathConverter)})},
args: ["aPoint"],
source: "close: aPoint \x0a\x09^ dest close: aPoint",
messageSends: ["close:"],
referencedClasses: []
}),
smalltalk.AthensPathConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "convert:",
category: 'actions',
fn: function (aSourcePath){
var self=this;
var segment;
return smalltalk.withContext(function($ctx1) { 
var $1;
segment=aSourcePath;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(segment)._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(segment)._convertWith_(self);
self["@endPoint"]=_st(segment)._endPoint();
self["@endPoint"];
segment=_st(segment)._next();
return segment;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(self["@dest"])._finish();
return $1;
}, function($ctx1) {$ctx1.fill(self,"convert:",{aSourcePath:aSourcePath,segment:segment},smalltalk.AthensPathConverter)})},
args: ["aSourcePath"],
source: "convert: aSourcePath\x0a\x09\x0a\x09\x22 iterate over segments and do conversion \x22\x0a\x09\x0a\x09| segment |\x0a\x09\x0a\x09segment := aSourcePath.\x0a\x09\x0a\x09[ segment notNil ] whileTrue: [\x0a\x09\x09segment convertWith: self.\x0a\x09\x09endPoint := segment endPoint.\x0a\x09\x09segment := segment next.\x0a\x09].\x0a\x0a\x09^ dest finish",
messageSends: ["whileTrue:", "convertWith:", "endPoint", "next", "notNil", "finish"],
referencedClasses: []
}),
smalltalk.AthensPathConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:to:",
category: 'converting path commands',
fn: function (pt1,pt2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@dest"])._curveVia_to_(pt1,pt2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{pt1:pt1,pt2:pt2},smalltalk.AthensPathConverter)})},
args: ["pt1", "pt2"],
source: "curveVia: pt1 to: pt2\x0a\x0a\x09^ dest curveVia: pt1 to: pt2",
messageSends: ["curveVia:to:"],
referencedClasses: []
}),
smalltalk.AthensPathConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "dest:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dest"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"dest:",{anObject:anObject},smalltalk.AthensPathConverter)})},
args: ["anObject"],
source: "dest: anObject\x0a\x09dest := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensPathConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "finish",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@dest"])._finish();
return $1;
}, function($ctx1) {$ctx1.fill(self,"finish",{},smalltalk.AthensPathConverter)})},
args: [],
source: "finish\x0a\x09^ dest finish",
messageSends: ["finish"],
referencedClasses: []
}),
smalltalk.AthensPathConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
category: 'converting path commands',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@dest"])._lineTo_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.AthensPathConverter)})},
args: ["aPoint"],
source: "lineTo: aPoint \x0a\x09^ dest lineTo: aPoint",
messageSends: ["lineTo:"],
referencedClasses: []
}),
smalltalk.AthensPathConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
category: 'converting path commands',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@dest"])._moveTo_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.AthensPathConverter)})},
args: ["aPoint"],
source: "moveTo: aPoint \x0a\x09^ dest moveTo: aPoint",
messageSends: ["moveTo:"],
referencedClasses: []
}),
smalltalk.AthensPathConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "source:dest:",
category: 'accessing',
fn: function (aSource,aDest){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sourcePath"]=aSource;
self["@dest"]=aDest;
return self}, function($ctx1) {$ctx1.fill(self,"source:dest:",{aSource:aSource,aDest:aDest},smalltalk.AthensPathConverter)})},
args: ["aSource", "aDest"],
source: "source: aSource dest: aDest\x0a\x0a\x09sourcePath := aSource.\x0a\x09dest := aDest",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensPathConverter);


smalltalk.addMethod(
smalltalk.method({
selector: "dest:",
category: 'instance creation',
fn: function (aDest){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._dest_(aDest);
return $1;
}, function($ctx1) {$ctx1.fill(self,"dest:",{aDest:aDest},smalltalk.AthensPathConverter.klass)})},
args: ["aDest"],
source: "dest: aDest\x0a\x0a\x09^ self new dest: aDest",
messageSends: ["dest:", "new"],
referencedClasses: []
}),
smalltalk.AthensPathConverter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "source:dest:",
category: 'instance creation',
fn: function (aSource,aDest){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._source_dest_(aSource,aDest);
return $1;
}, function($ctx1) {$ctx1.fill(self,"source:dest:",{aSource:aSource,aDest:aDest},smalltalk.AthensPathConverter.klass)})},
args: ["aSource", "aDest"],
source: "source: aSource dest: aDest\x0a\x09\x22 answer a converted path from source to dest, using my instance as a converter\x22\x0a\x09\x0a\x09^ self new source: aSource dest: aDest",
messageSends: ["source:dest:", "new"],
referencedClasses: []
}),
smalltalk.AthensPathConverter.klass);


smalltalk.addClass('AthensBezierConverter', smalltalk.AthensPathConverter, ['distanceTolerance', 'angleTolerance'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "angleBetween:and:ifDegenerate:",
category: 'helpers',
fn: function (p1,p2,aBlock){
var self=this;
var x1,y1,x2,y2,dot2,n2;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
x1=_st(p1)._x();
y1=_st(p1)._y();
x2=_st(p2)._x();
y2=_st(p2)._y();
dot2=_st(_st(x1).__star(x2)).__plus(_st(y1).__star(y2));
dot2=_st(dot2).__star(dot2);
n2=_st(_st(_st(x1).__star(x1)).__plus(_st(y1).__star(y1))).__star(_st(_st(x2).__star(x2)).__plus(_st(y2).__star(y2)));
$1=_st(n2).__eq((0));
if(smalltalk.assert($1)){
$2=_st(aBlock)._value();
return $2;
};
$3=_st(_st(dot2).__slash(n2))._arcCos();
return $3;
}, function($ctx1) {$ctx1.fill(self,"angleBetween:and:ifDegenerate:",{p1:p1,p2:p2,aBlock:aBlock,x1:x1,y1:y1,x2:x2,y2:y2,dot2:dot2,n2:n2},smalltalk.AthensBezierConverter)})},
args: ["p1", "p2", "aBlock"],
source: "angleBetween: p1 and: p2 ifDegenerate: aBlock\x0a\x0a\x22 Calculate an angle (in radians) between two vectors. \x0aEvaluate a block, in case if calculation not possible because one of the vectors has zero length \x22\x0a\x0a\x09| x1 y1 x2 y2 dot2 n2 |\x0a\x09x1 := p1 x.\x0a\x09y1 := p1 y.\x0a\x09x2 := p2 x.\x0a\x09y2 := p2 y.\x0a\x09\x0a\x09dot2 := x1 * x2 + (y1 * y2).\x0a\x09dot2 := dot2 * dot2.\x0a\x09\x0a\x09n2 := (x1*x1 + (y1*y1)) * (x2*x2 + (y2*y2)).\x0a\x09\x0a\x09n2 = 0 ifTrue: [ ^ aBlock value ].\x0a\x09\x0a\x09^ (dot2 / n2) arcCos",
messageSends: ["x", "y", "+", "*", "ifTrue:", "value", "=", "arcCos", "/"],
referencedClasses: []
}),
smalltalk.AthensBezierConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:to:",
category: 'converting path commands',
fn: function (pt1,pt2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._recursiveBezier2X1_y1_x2_y2_x3_y3_(_st(self["@endPoint"])._x(),_st(self["@endPoint"])._y(),_st(pt1)._x(),_st(pt1)._y(),_st(pt2)._x(),_st(pt2)._y());
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{pt1:pt1,pt2:pt2},smalltalk.AthensBezierConverter)})},
args: ["pt1", "pt2"],
source: "curveVia: pt1 to: pt2\x0a\x0a\x0a\x09self\x09 recursiveBezier2X1: endPoint x y1: endPoint y\x0a\x09\x09x2: pt1 x y2: pt1 y\x0a\x09\x09x3: pt2 x y3: pt2 y",
messageSends: ["recursiveBezier2X1:y1:x2:y2:x3:y3:", "x", "y"],
referencedClasses: []
}),
smalltalk.AthensBezierConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@distanceTolerance"]=(0.5);
self["@angleTolerance"]=(0.1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensBezierConverter)})},
args: [],
source: "initialize\x0a\x0a\x09distanceTolerance := 0.5.\x0a\x09angleTolerance := 0.1 . ",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensBezierConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "isFlatBezier2X1:y1:x2:y2:x3:y3:",
category: 'testing',
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
var dx,dy,d,da,angle;
function $CurveAngleTolerance(){return smalltalk.CurveAngleTolerance||(typeof CurveAngleTolerance=="undefined"?nil:CurveAngleTolerance)}
function $CollinearityEps(){return smalltalk.CollinearityEps||(typeof CollinearityEps=="undefined"?nil:CollinearityEps)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
dx=_st(x3).__minus(x1);
dy=_st(y3).__minus(y1);
d=_st(_st(_st(_st(x2).__minus(x3)).__star(dy)).__minus(_st(_st(y2).__minus(y3)).__star(dx)))._abs();
$1=_st(d).__gt($CollinearityEps());
if(smalltalk.assert($1)){
$2=_st(_st(d).__star(d)).__lt_eq(_st(self["@distanceTolerance"]).__star(_st(_st(dx).__star(dx)).__plus(_st(dy).__star(dy))));
if(smalltalk.assert($2)){
$3=_st(self["@angleTolerance"]).__lt($CurveAngleTolerance());
if(smalltalk.assert($3)){
return true;
};
angle=self._angleBetween_and_ifDegenerate_(_st(_st(x2).__minus(x1)).__at(_st(y2).__minus(y1)),_st(_st(x3).__minus(x2)).__at(_st(y3).__minus(y2)),(function(){
return smalltalk.withContext(function($ctx2) {
return (0);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
angle;
$4=_st(angle).__lt_eq(self["@angleTolerance"]);
if(smalltalk.assert($4)){
return true;
};
};
} else {
da=_st(_st(dx).__star(dx)).__plus(_st(dy).__star(dy));
da;
$5=_st(da).__eq((0));
if(smalltalk.assert($5)){
d=_st(_st(_st(x1).__minus(x2))._squared()).__plus(_st(_st(y1).__minus(y2))._squared());
d;
} else {
_st(_st(d).__eq(_st(_st(_st(x2).__minus(x1)).__star(dx)).__plus(_st(_st(y2).__minus(y1)).__star(dy)))).__slash(da);
$6=_st(_st(d).__gt((0)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(d).__lt((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($6)){
return true;
};
$7=_st(d).__lt_eq((0));
if(smalltalk.assert($7)){
d=_st(_st(_st(x1).__minus(x2))._squared()).__plus(_st(_st(y1).__minus(y2))._squared());
d;
} else {
$8=_st(d).__gt_eq((1));
if(smalltalk.assert($8)){
d=_st(_st(_st(x2).__minus(x3))._squared()).__plus(_st(_st(y2).__minus(y3))._squared());
d;
} else {
d=_st(_st(_st(_st(x2).__minus(x1)).__minus(_st(d).__star(dx)))._squared()).__plus(_st(_st(_st(y2).__minus(y1)).__minus(_st(d).__star(dy)))._squared());
d;
};
};
};
$9=_st(d).__lt(self._distanceToleranceSquared());
if(smalltalk.assert($9)){
return true;
};
};
return false;
}, function($ctx1) {$ctx1.fill(self,"isFlatBezier2X1:y1:x2:y2:x3:y3:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3,dx:dx,dy:dy,d:d,da:da,angle:angle},smalltalk.AthensBezierConverter)})},
args: ["x1", "y1", "x2", "y2", "x3", "y3"],
source: "isFlatBezier2X1: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3\x0a\x0a\x09| dx dy d da angle |\x0a\x09\x0a\x09dx := x3-x1.\x0a\x09dy := y3-y1.\x0a\x09\x0a \x09d := (((x2 - x3) * dy) - ((y2 - y3) * dx)) abs.\x0a\x0a\x09d > CollinearityEps ifTrue: [\x0a\x09\x09\x0a\x09\x09\x22regular case\x22\x0a\x0a\x09\x09d*d <= (distanceTolerance * ( dx*dx + (dy*dy))) ifTrue: [\x0a\x09\x09\x09\x0a\x09\x09\x09angleTolerance < CurveAngleTolerance ifTrue: [ ^ true ].\x0a\x09\x09\x09\x0a\x09\x09\x09angle := self angleBetween: x2-x1 @ (y2-y1) and: x3-x2 @ (y3-y2)\x0a\x09\x09\x09\x09ifDegenerate: [ 0.0 ].\x0a\x09\x09\x09\x0a\x09\x09\x09\x22parallel. no need to proceed further\x22\x0a\x09\x09\x09angle <= angleTolerance ifTrue: [ ^ true ]\x09\x09\x09\x09\x09\x0a\x09\x09]\x0a\x09]\x0a\x09ifFalse: [ \x0a\x09\x09\x22collinear\x22\x0a\x09\x09da := dx*dx + (dy*dy).\x0a\x09\x09\x0a\x09\x09da = 0 \x0a\x09\x09\x09ifTrue: [ d := (x1-x2) squared + (y1-y2) squared ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09d = ((x2 - x1)*dx + ((y2 - y1)*dy)) / da.\x0a\x0a\x09\x09\x09\x09(d > 0.0 and: [ d < 1.0 ] ) ifTrue: [ \x0a\x09\x09\x09\x09\x09\x22Simple collinear case, 1---2---3\x22 \x0a\x09\x09\x09\x09\x09^ true\x0a     \x09\x09\x09\x09].\x0a\x09\x09\x09\x09d <= 0.0 \x0a\x09\x09\x09\x09\x09ifTrue: [ d := (x1-x2) squared + (y1-y2) squared ]\x0a\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09\x09d >= 1.0 \x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [ d:= (x2-x3) squared + (y2-y3) squared ]\x0a\x09\x09\x09\x09\x09\x09\x09ifFalse: [ d:= (x2 - x1 - (d*dx)) squared + (y2 - y1 - (d*dy)) squared ]\x0a\x09\x09\x09\x09\x09].\x0a\x09\x09\x09].\x0a\x0a\x09\x09\x09d < self distanceToleranceSquared ifTrue: [ ^ true ]\x09\x09\x0a\x09].\x0a\x0a\x09^ false",
messageSends: ["-", "abs", "*", "ifTrue:ifFalse:", "ifTrue:", "<", "angleBetween:and:ifDegenerate:", "@", "<=", "+", "squared", "/", "=", "and:", ">", ">=", "distanceToleranceSquared"],
referencedClasses: ["CurveAngleTolerance", "CollinearityEps"]
}),
smalltalk.AthensBezierConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "recursiveBezier2X1:y1:x2:y2:x3:y3:",
category: 'helpers',
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._isFlatBezier2X1_y1_x2_y2_x3_y3_(x1,y1,x2,y2,x3,y3);
if(smalltalk.assert($1)){
$2=self["@dest"];
_st($2)._lineTo_(_st(x2).__at(y2));
$3=_st($2)._lineTo_(_st(x3).__at(y3));
$3;
} else {
var x12,y12,x23,y23,x123,y123;
x12=_st(_st(x1).__plus(x2)).__star((0.5));
x12;
y12=_st(_st(y1).__plus(y2)).__star((0.5));
y12;
x23=_st(_st(x2).__plus(x3)).__star((0.5));
x23;
y23=_st(_st(y2).__plus(y3)).__star((0.5));
y23;
x123=_st(_st(x12).__plus(x23)).__star((0.5));
x123;
y123=_st(_st(y12).__plus(y23)).__star((0.5));
y123;
self._recursiveBezier2X1_y1_x2_y2_x3_y3_(x1,y1,x12,y12,x123,y123);
self._recursiveBezier2X1_y1_x2_y2_x3_y3_(x123,y123,x23,y23,x3,y3);
};
return self}, function($ctx1) {$ctx1.fill(self,"recursiveBezier2X1:y1:x2:y2:x3:y3:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3},smalltalk.AthensBezierConverter)})},
args: ["x1", "y1", "x2", "y2", "x3", "y3"],
source: "recursiveBezier2X1: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3\x0a\x0a\x09\x22recursively subdive bezier curve as long as #isFlatBezier2.. answers false \x22\x0a\x0a\x09(self isFlatBezier2X1: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3) ifTrue: [\x0a\x09\x09\x0a\x09\x09dest \x0a\x09\x09\x09lineTo: x2 @ y2;\x0a\x09\x09\x09lineTo: x3 @ y3\x0a\x09] ifFalse: [\x0a\x09\x09| x12 y12 x23 y23 x123 y123 |\x09\x0a\x09\x22calculate midpoints of line segments \x22\x0a\x09\x09x12 := (x1 + x2) * 0.5.\x0a\x09\x09y12 := (y1 + y2) * 0.5 .\x0a\x0a\x09\x09x23 := (x2 + x3) * 0.5 .\x0a\x09\x09y23 := (y2 + y3) * 0.5 .\x0a\x0a\x09\x09x123 := (x12 + x23) * 0.5.\x0a\x09\x09y123 := (y12 + y23) * 0.5.\x0a\x09\x09\x0a\x09\x09self recursiveBezier2X1: x1 y1: y1 \x0a\x09\x09\x09x2: x12 \x0a\x09\x09\x09y2: y12 \x0a\x09\x09\x09x3: x123 \x0a\x09\x09\x09y3: y123.\x0a\x09\x09\x09\x0a\x09\x09self recursiveBezier2X1: x123 \x0a\x09\x09\x09y1: y123\x0a\x09\x09\x09x2: x23\x0a\x09\x09\x09y2: y23 \x0a\x09\x09\x09x3: x3 \x0a\x09\x09\x09y3: y3.\x0a\x09]",
messageSends: ["ifTrue:ifFalse:", "lineTo:", "@", "*", "+", "recursiveBezier2X1:y1:x2:y2:x3:y3:", "isFlatBezier2X1:y1:x2:y2:x3:y3:"],
referencedClasses: []
}),
smalltalk.AthensBezierConverter);


smalltalk.AthensBezierConverter.klass.iVarNames = ['collinearityEps','curveAngleTolerance','distanceEps'];
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@curveAngleTolerance'] = 0.01;
	self['@collinearityEps'] = 1e-30;
	self['@distanceEps'] = 1e-30; ;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensBezierConverter.klass)})},
args: [],
source: "initialize\x0a\x0a\x09\x22collinearityEps := 1e-30.\x22\x0a\x09\x22distanceEps := 1e-30.\x22\x0a\x09\x22curveAngleTolerance := 0.01.\x22\x0a\x09\x0a\x09< self['@curveAngleTolerance'] = 0.01;\x0a\x09self['@collinearityEps'] = 1e-30;\x0a\x09self['@distanceEps'] = 1e-30; >\x0a\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensBezierConverter.klass);


smalltalk.addClass('AthensPathSegment', smalltalk.Object, ['next'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visitor',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensPathSegment)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility ",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensPathSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "convertWith:",
category: 'visitor',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"convertWith:",{anObject:anObject},smalltalk.AthensPathSegment)})},
args: ["anObject"],
source: "convertWith: anObject\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensPathSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'iterating',
fn: function (aBlock){
var self=this;
var segment;
return smalltalk.withContext(function($ctx1) { 
segment=self;
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value_(segment);
segment=_st(segment)._next();
segment;
return _st(segment)._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue();
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock,segment:segment},smalltalk.AthensPathSegment)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09| segment |\x0a\x09\x0a\x09segment := self.\x0a\x09\x0a\x09[  aBlock value: segment. segment := segment next. segment notNil ] whileTrue.",
messageSends: ["whileTrue", "value:", "next", "notNil"],
referencedClasses: []
}),
smalltalk.AthensPathSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "isMove",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isMove",{},smalltalk.AthensPathSegment)})},
args: [],
source: "isMove\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensPathSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@next"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.AthensPathSegment)})},
args: [],
source: "next\x0a\x0a\x09^ next",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensPathSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@next"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"next:",{anObject:anObject},smalltalk.AthensPathSegment)})},
args: ["anObject"],
source: "next: anObject\x0a\x0a\x09next := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensPathSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "sendCommandsTo:",
category: 'iterating',
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_((function(segment){
return smalltalk.withContext(function($ctx2) {
return _st(segment)._sendCommandTo_(aBuilder);
}, function($ctx2) {$ctx2.fillBlock({segment:segment},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"sendCommandsTo:",{aBuilder:aBuilder},smalltalk.AthensPathSegment)})},
args: ["aBuilder"],
source: "sendCommandsTo: aBuilder\x0a\x0a\x09self do: [ :segment |\x0a\x09\x09segment sendCommandTo: aBuilder\x0a\x09]",
messageSends: ["do:", "sendCommandTo:"],
referencedClasses: []
}),
smalltalk.AthensPathSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
var segment,count;
return smalltalk.withContext(function($ctx1) { 
var $1;
segment=self;
count=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(segment)._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
count=_st(count).__plus((1));
count;
segment=_st(segment)._next();
return segment;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=count;
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{segment:segment,count:count},smalltalk.AthensPathSegment)})},
args: [],
source: "size\x0a\x09\x22answer 1 + the number of segments next to receiver\x22\x0a\x09\x0a\x09| segment count |\x0a\x09segment := self.\x0a\x09count := 0.\x0a\x09[ segment notNil ] whileTrue: [  count := count + 1. segment := segment next ].\x0a\x0a\x09^ count.",
messageSends: ["whileTrue:", "+", "next", "notNil"],
referencedClasses: []
}),
smalltalk.AthensPathSegment);



smalltalk.addClass('AthensArcSegment', smalltalk.AthensPathSegment, ['endPoint', 'angle'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "angle",
category: 'accessors',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@angle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"angle",{},smalltalk.AthensArcSegment)})},
args: [],
source: "angle\x0a\x09^ angle",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensArcSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "endPoint",
category: 'accessors',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@endPoint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"endPoint",{},smalltalk.AthensArcSegment)})},
args: [],
source: "endPoint\x0a\x09^ endPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensArcSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "endPoint:angle:",
category: 'accessors',
fn: function (pt,a){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@endPoint"]=pt;
self["@angle"]=a;
return self}, function($ctx1) {$ctx1.fill(self,"endPoint:angle:",{pt:pt,a:a},smalltalk.AthensArcSegment)})},
args: ["pt", "a"],
source: "endPoint: pt angle: a\x0a\x0a\x09endPoint := pt.\x0a\x09angle := a",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensArcSegment);



smalltalk.addClass('AthensCCWArcSegment', smalltalk.AthensArcSegment, [], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visitor',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._ccwArcSegment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensCCWArcSegment)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor ccwArcSegment: self",
messageSends: ["ccwArcSegment:"],
referencedClasses: []
}),
smalltalk.AthensCCWArcSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "sendCommandTo:",
category: 'visitor',
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBuilder)._ccwArcTo_angle_(self["@endPoint"],self["@angle"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},smalltalk.AthensCCWArcSegment)})},
args: ["aBuilder"],
source: "sendCommandTo: aBuilder\x0a\x09^ aBuilder ccwArcTo: endPoint angle: angle",
messageSends: ["ccwArcTo:angle:"],
referencedClasses: []
}),
smalltalk.AthensCCWArcSegment);



smalltalk.addClass('AthensCWArcSegment', smalltalk.AthensArcSegment, [], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visitor',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._cwArcSegment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensCWArcSegment)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor cwArcSegment: self",
messageSends: ["cwArcSegment:"],
referencedClasses: []
}),
smalltalk.AthensCWArcSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "sendCommandTo:",
category: 'visitor',
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBuilder)._cwArcTo_angle_(self["@endPoint"],self["@angle"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},smalltalk.AthensCWArcSegment)})},
args: ["aBuilder"],
source: "sendCommandTo: aBuilder\x0a\x09^ aBuilder cwArcTo: endPoint angle: angle",
messageSends: ["cwArcTo:angle:"],
referencedClasses: []
}),
smalltalk.AthensCWArcSegment);



smalltalk.addClass('AthensCubicSegment', smalltalk.AthensPathSegment, ['via1', 'via2', 'to'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visitor',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._cubicBezierSegment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensCubicSegment)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor cubicBezierSegment: self",
messageSends: ["cubicBezierSegment:"],
referencedClasses: []
}),
smalltalk.AthensCubicSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "endPoint",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@to"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"endPoint",{},smalltalk.AthensCubicSegment)})},
args: [],
source: "endPoint\x0a\x09^ to",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensCubicSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "from:via:and:to:",
category: 'accessing',
fn: function (origin,controlPoint,secondControlPoint,destination){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@via1"]=controlPoint;
self["@via2"]=secondControlPoint;
self["@to"]=destination;
return self}, function($ctx1) {$ctx1.fill(self,"from:via:and:to:",{origin:origin,controlPoint:controlPoint,secondControlPoint:secondControlPoint,destination:destination},smalltalk.AthensCubicSegment)})},
args: ["origin", "controlPoint", "secondControlPoint", "destination"],
source: "from: origin\x0a\x09via: controlPoint\x0a\x09and: secondControlPoint\x0a\x09to: destination\x0a\x09\x0a\x09\x0a\x09via1:= controlPoint.\x0a\x09via2 := secondControlPoint.\x0a\x09to := destination.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensCubicSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "sendCommandTo:",
category: 'visitor',
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBuilder)._curveVia_and_to_(self["@via1"],self["@via2"],self["@to"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},smalltalk.AthensCubicSegment)})},
args: ["aBuilder"],
source: "sendCommandTo: aBuilder\x0a\x09^ aBuilder curveVia: via1 and: via2  to: to \x0a\x09",
messageSends: ["curveVia:and:to:"],
referencedClasses: []
}),
smalltalk.AthensCubicSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "to",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@to"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"to",{},smalltalk.AthensCubicSegment)})},
args: [],
source: "to\x0a\x0a\x09^ to",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensCubicSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "via1",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@via1"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"via1",{},smalltalk.AthensCubicSegment)})},
args: [],
source: "via1\x0a\x09^ via1",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensCubicSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "via2",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@via2"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"via2",{},smalltalk.AthensCubicSegment)})},
args: [],
source: "via2\x0a\x09^ via2",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensCubicSegment);



smalltalk.addClass('AthensEllipticalArcSegment', smalltalk.AthensPathSegment, ['radii', 'phi', 'large', 'sweep', 'endPoint'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visitor',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._ellipticalArcSegment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensEllipticalArcSegment)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor ellipticalArcSegment: self",
messageSends: ["ellipticalArcSegment:"],
referencedClasses: []
}),
smalltalk.AthensEllipticalArcSegment);



smalltalk.addClass('AthensLineSegment', smalltalk.AthensPathSegment, ['point'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visitor',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._lineSegment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensLineSegment)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor lineSegment: self",
messageSends: ["lineSegment:"],
referencedClasses: []
}),
smalltalk.AthensLineSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "endPoint",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@point"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"endPoint",{},smalltalk.AthensLineSegment)})},
args: [],
source: "endPoint\x0a\x09^ point",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensLineSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "point",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@point"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"point",{},smalltalk.AthensLineSegment)})},
args: [],
source: "point\x0a\x0a\x09^ point",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensLineSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "point:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@point"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"point:",{anObject:anObject},smalltalk.AthensLineSegment)})},
args: ["anObject"],
source: "point: anObject\x0a\x0a\x09point := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensLineSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "sendCommandTo:",
category: 'visitor',
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBuilder)._lineTo_(self["@point"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},smalltalk.AthensLineSegment)})},
args: ["aBuilder"],
source: "sendCommandTo: aBuilder\x0a\x09^ aBuilder lineTo: point\x0a\x09",
messageSends: ["lineTo:"],
referencedClasses: []
}),
smalltalk.AthensLineSegment);



smalltalk.addClass('AthensCloseSegment', smalltalk.AthensLineSegment, [], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visitor',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._closeSegment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensCloseSegment)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor closeSegment: self",
messageSends: ["closeSegment:"],
referencedClasses: []
}),
smalltalk.AthensCloseSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "sendCommandTo:",
category: 'visitor',
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBuilder)._close();
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},smalltalk.AthensCloseSegment)})},
args: ["aBuilder"],
source: "sendCommandTo: aBuilder\x0a\x09^ aBuilder close\x0a\x09",
messageSends: ["close"],
referencedClasses: []
}),
smalltalk.AthensCloseSegment);



smalltalk.addClass('AthensMoveSegment', smalltalk.AthensLineSegment, ['closed'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visitor',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._moveSegment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensMoveSegment)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor moveSegment: self",
messageSends: ["moveSegment:"],
referencedClasses: []
}),
smalltalk.AthensMoveSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "closed:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@closed"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"closed:",{aBoolean:aBoolean},smalltalk.AthensMoveSegment)})},
args: ["aBoolean"],
source: "closed: aBoolean\x0a\x09closed := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensMoveSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "isClosed",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@closed"]).__eq_eq(true);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isClosed",{},smalltalk.AthensMoveSegment)})},
args: [],
source: "isClosed\x0a\x09^ closed == true",
messageSends: ["=="],
referencedClasses: []
}),
smalltalk.AthensMoveSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "isMove",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isMove",{},smalltalk.AthensMoveSegment)})},
args: [],
source: "isMove\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensMoveSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "reopen:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@closed"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"reopen:",{aBoolean:aBoolean},smalltalk.AthensMoveSegment)})},
args: ["aBoolean"],
source: "reopen: aBoolean\x0a\x09closed := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensMoveSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "sendCommandTo:",
category: 'visitor',
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBuilder)._moveTo_(self["@point"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},smalltalk.AthensMoveSegment)})},
args: ["aBuilder"],
source: "sendCommandTo: aBuilder\x0a\x09^ aBuilder moveTo: point\x0a\x09",
messageSends: ["moveTo:"],
referencedClasses: []
}),
smalltalk.AthensMoveSegment);



smalltalk.addClass('AthensQuadSegment', smalltalk.AthensPathSegment, ['via', 'to'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visitor',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._quadricBezierSegment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensQuadSegment)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor quadricBezierSegment: self",
messageSends: ["quadricBezierSegment:"],
referencedClasses: []
}),
smalltalk.AthensQuadSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "endPoint",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@to"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"endPoint",{},smalltalk.AthensQuadSegment)})},
args: [],
source: "endPoint\x0a\x09^ to",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensQuadSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "from:via:to:",
category: 'initialize-release',
fn: function (pt0,pt1,p){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@via"]=pt1;
self["@to"]=p;
return self}, function($ctx1) {$ctx1.fill(self,"from:via:to:",{pt0:pt0,pt1:pt1,p:p},smalltalk.AthensQuadSegment)})},
args: ["pt0", "pt1", "p"],
source: "from: pt0 via: pt1 to: p\x0a\x0a\x09via := pt1.\x0a\x09to := p.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensQuadSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "sendCommandTo:",
category: 'visitor',
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBuilder)._curveVia_to_(self["@via"],self["@to"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},smalltalk.AthensQuadSegment)})},
args: ["aBuilder"],
source: "sendCommandTo: aBuilder\x0a\x09^ aBuilder curveVia: via to: to \x0a\x09",
messageSends: ["curveVia:to:"],
referencedClasses: []
}),
smalltalk.AthensQuadSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "to",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@to"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"to",{},smalltalk.AthensQuadSegment)})},
args: [],
source: "to\x0a\x0a\x09^ to",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensQuadSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "via",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@via"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"via",{},smalltalk.AthensQuadSegment)})},
args: [],
source: "via\x0a\x0a\x09^ via",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensQuadSegment);



smalltalk.addClass('AthensPathSegmentConverter', smalltalk.Object, ['dest', 'endPoint', 'contourStartPt'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "convert:",
category: 'converting',
fn: function (aPath){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@endPoint"]=(0).__at((0));
self["@contourStartPt"]=self["@endPoint"];
_st(aPath)._sendCommandsTo_(self);
return self}, function($ctx1) {$ctx1.fill(self,"convert:",{aPath:aPath},smalltalk.AthensPathSegmentConverter)})},
args: ["aPath"],
source: "convert: aPath\x0a\x09\x22pipe the path segments to destination, converting\x0a\x09segments on the way\x22\x0a\x09\x0a\x09contourStartPt := endPoint := 0@0.\x0a\x09\x0a\x09aPath sendCommandsTo: self.\x0a\x09\x0a\x09\x0a\x09",
messageSends: ["@", "sendCommandsTo:"],
referencedClasses: []
}),
smalltalk.AthensPathSegmentConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "dest:",
category: 'accessing',
fn: function (aDest){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dest"]=aDest;
return self}, function($ctx1) {$ctx1.fill(self,"dest:",{aDest:aDest},smalltalk.AthensPathSegmentConverter)})},
args: ["aDest"],
source: "dest: aDest\x0a\x09dest := aDest",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensPathSegmentConverter);



smalltalk.addClass('AthensPolygon', smalltalk.Object, ['contours', 'currentContour'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "finish",
category: 'conversion',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@contours"]=_st(self["@contours"])._collect_((function(ea){
return smalltalk.withContext(function($ctx2) {
return _st(ea)._asArray();
}, function($ctx2) {$ctx2.fillBlock({ea:ea},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"finish",{},smalltalk.AthensPolygon)})},
args: [],
source: "finish\x0a\x09\x22Finally convert contours to arrays\x22\x0a\x09\x0a\x09contours := contours collect: [:ea | ea asArray ]",
messageSends: ["collect:", "asArray"],
referencedClasses: []
}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
category: 'conversion',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@currentContour"])._add_(aPoint);
return self}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.AthensPolygon)})},
args: ["aPoint"],
source: "lineTo: aPoint \x0a\x09currentContour add: aPoint",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
category: 'conversion',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._newContour();
_st(self["@currentContour"])._add_(aPoint);
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.AthensPolygon)})},
args: ["aPoint"],
source: "moveTo: aPoint \x0a\x09\x22 create a new contour \x22\x0a\x09\x0a\x09self newContour.\x0a\x09currentContour add: aPoint.",
messageSends: ["newContour", "add:"],
referencedClasses: []
}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "newContour",
category: 'conversion',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@contours"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@contours"]=_st($OrderedCollection())._new();
self["@contours"];
} else {
$1;
};
self["@currentContour"]=_st(self["@contours"])._add_(_st($OrderedCollection())._new());
return self}, function($ctx1) {$ctx1.fill(self,"newContour",{},smalltalk.AthensPolygon)})},
args: [],
source: "newContour\x0a\x09contours ifNil: [ contours := OrderedCollection new ].\x0a\x09\x0a\x09currentContour := contours add: OrderedCollection new.",
messageSends: ["ifNil:", "new", "add:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "paintFillsUsing:on:",
category: 'drawing',
fn: function (aPaint,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aPaint)._fillPolygon_on_(self,anAthensCanvas);
return $1;
}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},smalltalk.AthensPolygon)})},
args: ["aPaint", "anAthensCanvas"],
source: "paintFillsUsing: aPaint on: anAthensCanvas \x0a\x09\x0a\x09\x22This method is a part of rendering dispatch  Canvas->receiver->paint\x22\x0a\x09\x0a\x09^ aPaint fillPolygon: self on: anAthensCanvas",
messageSends: ["fillPolygon:on:"],
referencedClasses: []
}),
smalltalk.AthensPolygon);



smalltalk.addClass('AthensPolygonTester', smalltalk.Object, ['polygon'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
category: 'testing',
fn: function (aPoint){
var self=this;
var inside,testX,testY,i,j,size;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
inside=false;
i=(1);
size=_st(self["@polygon"])._size();
j=size;
testX=_st(aPoint)._x();
testY=_st(aPoint)._y();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(i).__lt_eq(size);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
var pi,pj;
return smalltalk.withContext(function($ctx2) {
pi=_st(self["@polygon"])._at_(i);
pi;
pj=_st(self["@polygon"])._at_(j);
pj;
$1=_st(_st(_st(_st(pi)._y()).__gt(testY)).__tild_eq(_st(_st(pj)._y()).__gt(testY)))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(testX).__lt(_st(_st(_st(_st(_st(pj)._x()).__minus(_st(pi)._x())).__star(_st(testY).__minus(_st(pi)._y()))).__slash(_st(_st(pj)._y()).__minus(_st(pi)._y()))).__plus(_st(pi)._x()));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
if(smalltalk.assert($1)){
inside=_st(inside)._not();
inside;
};
j=i;
j;
i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({pi:pi,pj:pj},$ctx1)})}));
$2=inside;
return $2;
}, function($ctx1) {$ctx1.fill(self,"includesPoint:",{aPoint:aPoint,inside:inside,testX:testX,testY:testY,i:i,j:j,size:size},smalltalk.AthensPolygonTester)})},
args: ["aPoint"],
source: "includesPoint: aPoint\x0a\x22\x0aThanks to Google and Randolph Franklin i don't have to reinvent this very simple algorithm.\x0aSee [ 1 ] for details, copyrights etc.\x0a\x0a[1] http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html\x0a\x0a\x22\x0a\x09| inside testX testY i j size |\x0a\x09\x0a\x09inside := false.\x0a\x09\x0a\x09i := 1.\x0a\x09size := polygon size.\x0a\x09j := size.\x0a\x09testX := aPoint x.\x0a\x09testY := aPoint y.\x0a\x09\x0a\x09[ i <= size ] whileTrue: [  | pi pj |\x0a\x09\x09pi := polygon at: i.\x0a\x09\x09pj := polygon at: j. \x0a\x09\x0a\x09\x09(((pi y > testY) ~= (pj y > testY)) and: [ \x0a\x09\x09\x09testX < \x0a\x09\x09\x09(\x0a\x09\x09\x09\x09pj x - pi x\x0a\x09\x09\x09\x09* (testY - pi y) \x0a\x09\x09\x09\x09/ ( pj y - pi y )\x0a\x09\x09\x09\x09+ pi x \x0a\x09\x09\x09)\x0a\x09\x09\x09 ]) ifTrue: [ inside := inside not ].\x0a\x09\x0a\x09\x09j := i.\x0a\x09\x09i := i + 1.\x0a\x09 ].\x0a\x09^ inside\x0a\x09",
messageSends: ["size", "x", "y", "whileTrue:", "at:", "ifTrue:", "not", "and:", "<", "+", "/", "-", "*", "~=", ">", "<="],
referencedClasses: []
}),
smalltalk.AthensPolygonTester);

smalltalk.addMethod(
smalltalk.method({
selector: "polygon:",
category: 'accessing',
fn: function (poly){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@polygon"]=poly;
return self}, function($ctx1) {$ctx1.fill(self,"polygon:",{poly:poly},smalltalk.AthensPolygonTester)})},
args: ["poly"],
source: "polygon: poly\x0a\x0a\x09polygon := poly",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensPolygonTester);




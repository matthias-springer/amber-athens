smalltalk.addPackage('Athens-Core-PathsGeometry');
smalltalk.addClass('AthensCubicBezier', smalltalk.Object, ['x1', 'y1', 'x2', 'y2', 'x3', 'y3', 'x4', 'y4'], 'Athens-Core-PathsGeometry');


smalltalk.addClass('AthensCurveFlattener', smalltalk.AthensPathSegmentConverter, ['transform', 'inverseTransform', 'lengthTolerance', 'lengthToleranceSquared'], 'Athens-Core-PathsGeometry');
smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:to:",
category: 'path commands',
fn: function (via,end){
var self=this;
var pt1,pt2,pt3;
return smalltalk.withContext(function($ctx1) { 
pt1=_st(self["@transform"])._transform_(self["@endPoint"]);
pt2=_st(self["@transform"])._transform_(via);
pt3=_st(self["@transform"])._transform_(end);
self["@endPoint"]=end;
self._flattenQuadBezier_y1_x2_y2_x3_y3_(_st(pt1)._x(),_st(pt1)._y(),_st(pt2)._x(),_st(pt2)._y(),_st(pt3)._x(),_st(pt3)._y());
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{via:via,end:end,pt1:pt1,pt2:pt2,pt3:pt3},smalltalk.AthensCurveFlattener)})},
args: ["via", "end"],
source: "curveVia: via to: end \x0a\x09| pt1 pt2 pt3 |\x0a\x09\x0a\x09pt1 := transform transform: endPoint.\x0a\x09pt2 := transform transform: via.\x0a\x09pt3 := transform transform: end.\x0a\x09\x0a\x09endPoint := end.\x0a\x0a\x09self flattenQuadBezier: pt1 x y1: pt1 y x2: pt2 x y2: pt2 y x3: pt3 x y3: pt3 y.",
messageSends: ["transform:", "flattenQuadBezier:y1:x2:y2:x3:y3:", "x", "y"],
referencedClasses: []
}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:via:to:",
category: 'path commands',
fn: function (via1,via2,end){
var self=this;
var pt1,pt2,pt3,pt4;
return smalltalk.withContext(function($ctx1) { 
pt1=_st(self["@transform"])._transform_(self["@endPoint"]);
pt2=_st(self["@transform"])._transform_(via1);
pt3=_st(self["@transform"])._transform_(end);
pt4=_st(self["@transform"])._transform_(end);
self["@endPoint"]=end;
self._flattenCubicBezier_y1_x2_y2_x3_y3_x4_y4_(_st(pt1)._x(),_st(pt1)._y(),_st(pt2)._x(),_st(pt2)._y(),_st(pt3)._x(),_st(pt3)._y(),_st(pt4)._x(),_st(pt4)._y());
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:via:to:",{via1:via1,via2:via2,end:end,pt1:pt1,pt2:pt2,pt3:pt3,pt4:pt4},smalltalk.AthensCurveFlattener)})},
args: ["via1", "via2", "end"],
source: "curveVia: via1 via: via2 to: end \x0a\x09| pt1 pt2 pt3 pt4 |\x0a\x09\x0a\x09pt1 := transform transform: endPoint.\x0a\x09pt2 := transform transform: via1.\x0a\x09pt3 := transform transform: end.\x0a\x09pt4 := transform transform: end.\x0a\x09\x0a\x09endPoint := end.\x0a\x0a\x09self flattenCubicBezier: pt1 x y1: pt1 y x2: pt2 x y2: pt2 y x3: pt3 x y3: pt3 y x4: pt4 x y4: pt4 y.",
messageSends: ["transform:", "flattenCubicBezier:y1:x2:y2:x3:y3:x4:y4:", "x", "y"],
referencedClasses: []
}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultTolerance",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (1);
}, function($ctx1) {$ctx1.fill(self,"defaultTolerance",{},smalltalk.AthensCurveFlattener)})},
args: [],
source: "defaultTolerance\x0a\x09^ 1",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "flattenCubicBezier:y1:x2:y2:x3:y3:x4:y4:",
category: 'helpers',
fn: function (x1,y1,x2,y2,x3,y3,x4,y4){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"flattenCubicBezier:y1:x2:y2:x3:y3:x4:y4:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3,x4:x4,y4:y4},smalltalk.AthensCurveFlattener)})},
args: ["x1", "y1", "x2", "y2", "x3", "y3", "x4", "y4"],
source: "flattenCubicBezier: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3 x4: x4 y4: y4",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "flattenPath:transform:",
category: 'public API',
fn: function (aPath,aTransform){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._flattenPath_transform_toleranceMultiplier_(aPath,aTransform,(1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"flattenPath:transform:",{aPath:aPath,aTransform:aTransform},smalltalk.AthensCurveFlattener)})},
args: ["aPath", "aTransform"],
source: "flattenPath: aPath transform: aTransform\x0a\x0a\x09\x22This is an entry point for flattening path.\x0a\x09An additional argument, transform is an Affine matrix, used to map path geometry to screen,\x0a\x09and therefore used to calculate the error tolerance for path subdivisions\x22\x0a\x09\x0a\x09^ self flattenPath: aPath transform: aTransform toleranceMultiplier: 1",
messageSends: ["flattenPath:transform:toleranceMultiplier:"],
referencedClasses: []
}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "flattenPath:transform:toleranceMultiplier:",
category: 'public API',
fn: function (aPath,aTransform,aToleranceMultiplier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@transform"]=aTransform;
self["@lengthTolerance"]=aToleranceMultiplier;
self["@lengthToleranceSquared"]=_st(self["@lengthTolerance"])._squared();
return self}, function($ctx1) {$ctx1.fill(self,"flattenPath:transform:toleranceMultiplier:",{aPath:aPath,aTransform:aTransform,aToleranceMultiplier:aToleranceMultiplier},smalltalk.AthensCurveFlattener)})},
args: ["aPath", "aTransform", "aToleranceMultiplier"],
source: "flattenPath: aPath transform: aTransform toleranceMultiplier: aToleranceMultiplier\x0a\x0a\x09\x22This is an entry point for flattening path (converting all curves into line segments by approximating them).\x0a\x09\x0a\x09- transform is an Affine matrix, used to map path geometry to screen,\x0a\x09and therefore used to calculate the error tolerance for path subdivisions\x0a\x09\x0a\x09\x0a\x09- a tolerance multiplier is a number .. which\x0a\x09\x09if = 1 , the default error tolerance is used,\x0a\x09\x09if > 1 you will get more coarse approximation\x0a\x09\x09if < 1 you will get more finer approximation\x0a\x09\x0a\x09\x22\x0a\x09\x0a\x09transform := aTransform.\x0a\x09lengthTolerance := aToleranceMultiplier.\x0a\x09lengthToleranceSquared := lengthTolerance squared.\x0a\x09",
messageSends: ["squared"],
referencedClasses: []
}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "flattenQuadBezier:y1:x2:y2:x3:y3:",
category: 'helpers',
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._isFlatQuadBezier_y1_x2_y2_x3_y3_(x1,y1,x2,y2,x3,y3);
if(smalltalk.assert($1)){
var midx,midy;
midx=_st(_st(_st(_st(x2).__plus(x1)).__plus(x2)).__plus(x3)).__star((0.25));
midx;
midy=_st(_st(_st(_st(y2).__plus(y1)).__plus(y2)).__plus(y3)).__star((0.25));
midy;
$2=self["@dest"];
_st($2)._lineTo_(self._inverseTransform_(_st(midx).__at(midy)));
$3=_st($2)._lineTo_(self._inverseTransform_(_st(x3).__at(y3)));
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
self._flattenQuadBezier_y1_x2_y2_x3_y3_(x1,y1,x12,y12,x123,y123);
self._flattenQuadBezier_y1_x2_y2_x3_y3_(x123,y123,x23,y23,x3,y3);
};
return self}, function($ctx1) {$ctx1.fill(self,"flattenQuadBezier:y1:x2:y2:x3:y3:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3},smalltalk.AthensCurveFlattener)})},
args: ["x1", "y1", "x2", "y2", "x3", "y3"],
source: "flattenQuadBezier: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3\x0a\x0a\x09\x22Recursively subdive quadric bezier curve as long as #isFlatBezier.. answers false \x22\x0a\x0a\x09\x22The points here is unboxed intentionally to avoid generating extra garbage\x0a\x09(which contributes to performance loss)\x22\x0a\x0a\x09(self isFlatQuadBezier: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3) ifTrue: [\x0a\x09\x09| midx midy |\x0a\x09\x09midx := (x2 + x1 + x2+x3) * 0.25 .  \x22mid ( mid(pt1,pt2), mid(pt2,pt3)) \x22\x0a\x09\x09midy := (y2 + y1 + y2+y3) * 0.25 . \x0a\x0a\x09\x09dest \x0a\x09\x09\x09lineTo: (self inverseTransform: midx @ midy);\x0a\x09\x09\x09lineTo: (self inverseTransform: x3 @ y3)\x0a\x09\x09\x09\x0a\x09\x22\x09dest \x0a\x09\x09\x09lineTo: (self inverseTransform: x2 @ y2);\x0a\x09\x09\x09lineTo: (self inverseTransform: x3 @ y3)\x0a\x09\x22\x0a\x09\x0a\x09] ifFalse: [\x0a\x09\x09| x12 y12 x23 y23 x123 y123 |\x09\x0a\x09\x22calculate midpoints of line segments \x22\x0a\x09\x09x12 := (x1 + x2) * 0.5.\x0a\x09\x09y12 := (y1 + y2) * 0.5 .\x0a\x0a\x09\x09x23 := (x2 + x3) * 0.5 .\x0a\x09\x09y23 := (y2 + y3) * 0.5 .\x0a\x0a\x09\x09x123 := (x12 + x23) * 0.5.\x0a\x09\x09y123 := (y12 + y23) * 0.5.\x0a\x09\x09\x0a\x09\x09self flattenQuadBezier: x1 y1: y1 \x0a\x09\x09\x09x2: x12 \x0a\x09\x09\x09y2: y12 \x0a\x09\x09\x09x3: x123 \x0a\x09\x09\x09y3: y123.\x0a\x09\x09\x09\x0a\x09\x09self flattenQuadBezier: x123 \x0a\x09\x09\x09y1: y123\x0a\x09\x09\x09x2: x23\x0a\x09\x09\x09y2: y23 \x0a\x09\x09\x09x3: x3 \x0a\x09\x09\x09y3: y3.\x0a\x09]",
messageSends: ["ifTrue:ifFalse:", "*", "+", "lineTo:", "inverseTransform:", "@", "flattenQuadBezier:y1:x2:y2:x3:y3:", "isFlatQuadBezier:y1:x2:y2:x3:y3:"],
referencedClasses: []
}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensPathSegmentConverter.fn.prototype._initialize.apply(_st(self), []);
self["@transform"]=_st($AthensAffineTransform())._new();
self._toleranceMultiplier_(self._defaultTolerance());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensCurveFlattener)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09transform := AthensAffineTransform new. \x22identity\x22\x0a\x09self toleranceMultiplier: self defaultTolerance",
messageSends: ["initialize", "new", "toleranceMultiplier:", "defaultTolerance"],
referencedClasses: ["AthensAffineTransform"]
}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "inverseTransform:",
category: 'helpers',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@transform"])._inverseTransform_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"inverseTransform:",{aPoint:aPoint},smalltalk.AthensCurveFlattener)})},
args: ["aPoint"],
source: "inverseTransform: aPoint \x0a\x09^ transform inverseTransform: aPoint",
messageSends: ["inverseTransform:"],
referencedClasses: []
}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "isFlatQuadBezier:y1:x2:y2:x3:y3:",
category: 'helpers',
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
var dx,dy,d,da;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
dx=_st(x3).__minus(x1);
dy=_st(y3).__minus(y1);
d=_st(_st(_st(_st(x2).__minus(x3)).__star(dy)).__minus(_st(_st(y2).__minus(y3)).__star(dx)))._abs();
$1=_st(d).__gt(self._lengthToleranceSquared());
if(smalltalk.assert($1)){
var dot;
dot=_st(_st(_st(_st(x2).__minus(x1)).__star(_st(x2).__minus(x3))).__plus(_st(_st(y1).__minus(y2)).__star(_st(y2).__minus(y3))))._abs();
dot;
$2=_st(dot).__lt(_st(self._lengthToleranceSquared()).__star((0.5)));
if(smalltalk.assert($2)){
return true;
};
} else {
da=_st(_st(dx).__star(dx)).__plus(_st(dy).__star(dy));
da;
$3=_st(da).__eq((0));
if(smalltalk.assert($3)){
d=_st(_st(_st(x1).__minus(x2))._squared()).__plus(_st(_st(y1).__minus(y2))._squared());
d;
} else {
d=_st(_st(_st(_st(x2).__minus(x1)).__star(dx)).__plus(_st(_st(y2).__minus(y1)).__star(dy))).__slash(da);
d;
$4=_st(_st(d).__gt((0)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(d).__lt((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($4)){
return true;
};
$5=_st(d).__lt_eq((0));
if(smalltalk.assert($5)){
d=_st(_st(_st(x1).__minus(x2))._squared()).__plus(_st(_st(y1).__minus(y2))._squared());
d;
} else {
$6=_st(d).__gt_eq((1));
if(smalltalk.assert($6)){
d=_st(_st(_st(x2).__minus(x3))._squared()).__plus(_st(_st(y2).__minus(y3))._squared());
d;
} else {
d=_st(_st(_st(_st(x2).__minus(x1)).__minus(_st(d).__star(dx)))._squared()).__plus(_st(_st(_st(y2).__minus(y1)).__minus(_st(d).__star(dy)))._squared());
d;
};
};
};
$7=_st(d).__lt(self._lengthToleranceSquared());
if(smalltalk.assert($7)){
return true;
};
};
return false;
}, function($ctx1) {$ctx1.fill(self,"isFlatQuadBezier:y1:x2:y2:x3:y3:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3,dx:dx,dy:dy,d:d,da:da},smalltalk.AthensCurveFlattener)})},
args: ["x1", "y1", "x2", "y2", "x3", "y3"],
source: "isFlatQuadBezier: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3\x0a\x0a\x09| dx dy d da |\x0a\x09\x0a\x09dx := x3-x1.\x0a\x09dy := y3-y1.\x0a\x09\x0a\x09\x22This is the area of triangle enclosing curve * 2\x22\x0a \x09d := (((x2 - x3) * dy) - ((y2 - y3) * dx)) abs.\x0a\x0a\x09d > (self lengthToleranceSquared ) ifTrue: [\x0a\x09\x09\x0a\x09\x09\x22Non-collinear case (regular one)\x22\x0a\x09\x09| dot |\x0a\x0a\x09\x09\x22if dot product is close to zero, that means we having flat curve\x22\x09\x09\x09\x0a\x09\x09dot := ( (x2-x1)*(x2-x3) + ((y1-y2)*(y2-y3)) ) abs.\x0a\x09\x09dot < (self lengthToleranceSquared * 0.5 ) ifTrue: [  ^ true ].\x0a\x09]\x0a\x09ifFalse: [ \x0a\x09\x09\x22collinear\x22\x0a\x09\x09da := dx*dx + (dy*dy).\x0a\x09\x09\x0a\x09\x09da = 0 \x22end points coincide\x22\x0a\x09\x09\x09ifTrue: [ d := (x1-x2) squared + (y1-y2) squared  \x22pointy case\x22 ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x22the control point lies on line between endpoints?\x22\x0a\x09\x09\x09\x09d := ((x2 - x1)*dx + ((y2 - y1)*dy)) / da.\x0a\x0a\x09\x09\x09\x09(d > 0.0 and: [ d < 1.0 ] ) ifTrue: [ \x0a\x09\x09\x09\x09\x09\x22Simple collinear case, 1---2---3\x22 \x0a\x09\x09\x09\x09\x09^ true\x0a     \x09\x09\x09\x09].\x0a\x09\x09\x09\x09d <= 0.0 \x0a\x09\x09\x09\x09\x09ifTrue: [ d := (x1-x2) squared + (y1-y2) squared ]\x0a\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09\x09d >= 1.0 \x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [ d:= (x2-x3) squared + (y2-y3) squared ]\x0a\x09\x09\x09\x09\x09\x09\x09ifFalse: [ d:= (x2 - x1 - (d*dx)) squared + (y2 - y1 - (d*dy)) squared ]\x0a\x09\x09\x09\x09\x09].\x0a\x09\x09\x09].\x0a\x0a\x09\x09\x09d < (self lengthToleranceSquared) ifTrue: [ ^ true ]\x09\x09\x0a\x09].\x0a\x0a\x09^ false",
messageSends: ["-", "abs", "*", "ifTrue:ifFalse:", "+", "ifTrue:", "<", "lengthToleranceSquared", "squared", "/", "and:", ">", ">=", "<=", "="],
referencedClasses: []
}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "lengthTolerance",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lengthTolerance"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lengthTolerance",{},smalltalk.AthensCurveFlattener)})},
args: [],
source: "lengthTolerance\x0a\x0a\x09^ lengthTolerance",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "lengthToleranceSquared",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lengthToleranceSquared"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lengthToleranceSquared",{},smalltalk.AthensCurveFlattener)})},
args: [],
source: "lengthToleranceSquared\x0a\x0a\x09^ lengthToleranceSquared",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
category: 'path commands',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@endPoint"]=aPoint;
$1=_st(self["@dest"])._lineTo_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.AthensCurveFlattener)})},
args: ["aPoint"],
source: "lineTo: aPoint \x0a\x0a\x09endPoint := aPoint.\x0a\x09\x0a\x09^ dest lineTo: aPoint",
messageSends: ["lineTo:"],
referencedClasses: []
}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
category: 'path commands',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@endPoint"]=aPoint;
self["@contourStartPt"]=self["@endPoint"];
$1=_st(self["@dest"])._moveTo_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.AthensCurveFlattener)})},
args: ["aPoint"],
source: "moveTo: aPoint \x0a\x0a\x09contourStartPt := endPoint := aPoint.\x0a\x09\x0a\x09^ dest moveTo: aPoint",
messageSends: ["moveTo:"],
referencedClasses: []
}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "quadricBezierSegment:",
category: 'visiting',
fn: function (segment){
var self=this;
var pt1,pt2,pt3;
return smalltalk.withContext(function($ctx1) { 
pt1=_st(self["@transform"])._transform_(self["@endPoint"]);
pt2=_st(self["@transform"])._transform_(_st(segment)._via());
pt3=_st(self["@transform"])._transform_(_st(segment)._endPoint());
self["@endPoint"]=_st(segment)._endPoint();
self._flattenQuadBezier_y1_x2_y2_x3_y3_(_st(pt1)._x(),_st(pt1)._y(),_st(pt2)._x(),_st(pt2)._y(),_st(pt3)._x(),_st(pt3)._y());
return self}, function($ctx1) {$ctx1.fill(self,"quadricBezierSegment:",{segment:segment,pt1:pt1,pt2:pt2,pt3:pt3},smalltalk.AthensCurveFlattener)})},
args: ["segment"],
source: "quadricBezierSegment: segment\x0a\x09| pt1 pt2 pt3 |\x0a\x09\x0a\x09pt1 := transform transform: endPoint.\x0a\x09pt2 := transform transform: segment via.\x0a\x09pt3 := transform transform: segment endPoint.\x0a\x09\x0a\x09endPoint := segment endPoint.\x0a\x0a\x09self flattenQuadBezier: pt1 x y1: pt1 y x2: pt2 x y2: pt2 y x3: pt3 x y3: pt3 y.",
messageSends: ["transform:", "via", "endPoint", "flattenQuadBezier:y1:x2:y2:x3:y3:", "x", "y"],
referencedClasses: []
}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "toleranceMultiplier:",
category: 'accessing',
fn: function (aToleranceMultiplier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lengthTolerance"]=aToleranceMultiplier;
self["@lengthToleranceSquared"]=_st(self["@lengthTolerance"])._squared();
return self}, function($ctx1) {$ctx1.fill(self,"toleranceMultiplier:",{aToleranceMultiplier:aToleranceMultiplier},smalltalk.AthensCurveFlattener)})},
args: ["aToleranceMultiplier"],
source: "toleranceMultiplier: aToleranceMultiplier\x0a\x0a\x09\x22\x09\x0a\x09A tolerance multiplier is a number .. which\x0a\x09\x09if = 1 , the default error tolerance is used,\x0a\x09\x09if > 1 you will get more coarse approximation\x0a\x09\x09if < 1 you will get more finer approximation\x0a\x09\x0a\x09\x22\x0a\x09\x0a\x09lengthTolerance := aToleranceMultiplier.\x0a\x09lengthToleranceSquared := lengthTolerance squared.\x0a\x09",
messageSends: ["squared"],
referencedClasses: []
}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "transform:",
category: 'accessing',
fn: function (aTransform){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@transform"]=aTransform;
return self}, function($ctx1) {$ctx1.fill(self,"transform:",{aTransform:aTransform},smalltalk.AthensCurveFlattener)})},
args: ["aTransform"],
source: "transform: aTransform \x0a\x09\x22\x0a\x09- transform is an Affine matrix, used to map path geometry to screen,\x0a\x09and therefore used to calculate the error tolerance for path subdivisions\x0a\x09\x0a\x09\x0a\x09- a tolerance multiplier is a number .. which\x0a\x09\x09if = 1 , the default error tolerance is used,\x0a\x09\x09if > 1 you will get more coarse approximation\x0a\x09\x09if < 1 you will get more finer approximation\x0a\x09\x0a\x09\x22\x0a\x09\x0a\x09transform := aTransform.\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensCurveFlattener);


smalltalk.AthensCurveFlattener.klass.iVarNames = ['collinearityEps'];


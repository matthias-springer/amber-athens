smalltalk.addPackage('Athens-Core-PathsGeometry');
smalltalk.addClass('AthensCubicBezier', smalltalk.Object, ['x1', 'y1', 'x2', 'y2', 'x3', 'y3', 'x4', 'y4'], 'Athens-Core-PathsGeometry');


smalltalk.addClass('AthensCurveFlattener', smalltalk.AthensPathSegmentConverter, ['transform', 'inverseTransform', 'lengthTolerance', 'lengthToleranceSquared'], 'Athens-Core-PathsGeometry');
smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:to:",
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
messageSends: ["transform:", "flattenQuadBezier:y1:x2:y2:x3:y3:", "x", "y"]}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:via:to:",
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
messageSends: ["transform:", "flattenCubicBezier:y1:x2:y2:x3:y3:x4:y4:", "x", "y"]}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultTolerance",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (1);
}, function($ctx1) {$ctx1.fill(self,"defaultTolerance",{},smalltalk.AthensCurveFlattener)})},
messageSends: []}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "flattenCubicBezier:y1:x2:y2:x3:y3:x4:y4:",
fn: function (x1,y1,x2,y2,x3,y3,x4,y4){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"flattenCubicBezier:y1:x2:y2:x3:y3:x4:y4:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3,x4:x4,y4:y4},smalltalk.AthensCurveFlattener)})},
messageSends: []}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "flattenPath:transform:",
fn: function (aPath,aTransform){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._flattenPath_transform_toleranceMultiplier_(aPath,aTransform,(1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"flattenPath:transform:",{aPath:aPath,aTransform:aTransform},smalltalk.AthensCurveFlattener)})},
messageSends: ["flattenPath:transform:toleranceMultiplier:"]}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "flattenPath:transform:toleranceMultiplier:",
fn: function (aPath,aTransform,aToleranceMultiplier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@transform"]=aTransform;
self["@lengthTolerance"]=aToleranceMultiplier;
self["@lengthToleranceSquared"]=_st(self["@lengthTolerance"])._squared();
return self}, function($ctx1) {$ctx1.fill(self,"flattenPath:transform:toleranceMultiplier:",{aPath:aPath,aTransform:aTransform,aToleranceMultiplier:aToleranceMultiplier},smalltalk.AthensCurveFlattener)})},
messageSends: ["squared"]}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "flattenQuadBezier:y1:x2:y2:x3:y3:",
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
messageSends: ["ifTrue:ifFalse:", "*", "+", "lineTo:", "inverseTransform:", "@", "flattenQuadBezier:y1:x2:y2:x3:y3:", "isFlatQuadBezier:y1:x2:y2:x3:y3:"]}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensPathSegmentConverter.fn.prototype._initialize.apply(_st(self), []);
self["@transform"]=_st($AthensAffineTransform())._new();
self._toleranceMultiplier_(self._defaultTolerance());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensCurveFlattener)})},
messageSends: ["initialize", "new", "toleranceMultiplier:", "defaultTolerance"]}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "inverseTransform:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@transform"])._inverseTransform_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"inverseTransform:",{aPoint:aPoint},smalltalk.AthensCurveFlattener)})},
messageSends: ["inverseTransform:"]}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "isFlatQuadBezier:y1:x2:y2:x3:y3:",
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
messageSends: ["-", "abs", "*", "ifTrue:ifFalse:", "+", "ifTrue:", "<", "lengthToleranceSquared", "squared", "/", "and:", ">", ">=", "<=", "="]}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "lengthTolerance",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lengthTolerance"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lengthTolerance",{},smalltalk.AthensCurveFlattener)})},
messageSends: []}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "lengthToleranceSquared",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lengthToleranceSquared"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lengthToleranceSquared",{},smalltalk.AthensCurveFlattener)})},
messageSends: []}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@endPoint"]=aPoint;
$1=_st(self["@dest"])._lineTo_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.AthensCurveFlattener)})},
messageSends: ["lineTo:"]}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@endPoint"]=aPoint;
self["@contourStartPt"]=self["@endPoint"];
$1=_st(self["@dest"])._moveTo_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.AthensCurveFlattener)})},
messageSends: ["moveTo:"]}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "quadricBezierSegment:",
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
messageSends: ["transform:", "via", "endPoint", "flattenQuadBezier:y1:x2:y2:x3:y3:", "x", "y"]}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "toleranceMultiplier:",
fn: function (aToleranceMultiplier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lengthTolerance"]=aToleranceMultiplier;
self["@lengthToleranceSquared"]=_st(self["@lengthTolerance"])._squared();
return self}, function($ctx1) {$ctx1.fill(self,"toleranceMultiplier:",{aToleranceMultiplier:aToleranceMultiplier},smalltalk.AthensCurveFlattener)})},
messageSends: ["squared"]}),
smalltalk.AthensCurveFlattener);

smalltalk.addMethod(
smalltalk.method({
selector: "transform:",
fn: function (aTransform){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@transform"]=aTransform;
return self}, function($ctx1) {$ctx1.fill(self,"transform:",{aTransform:aTransform},smalltalk.AthensCurveFlattener)})},
messageSends: []}),
smalltalk.AthensCurveFlattener);


smalltalk.AthensCurveFlattener.klass.iVarNames = ['collinearityEps'];


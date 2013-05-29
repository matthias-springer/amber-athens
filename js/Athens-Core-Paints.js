smalltalk.addPackage('Athens-Core-Paints');
smalltalk.addClass('AthensAbstractPaint', smalltalk.Object, [], 'Athens-Core-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "asAthensPaintOn:",
category: 'converting',
fn: function (anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{anAthensCanvas:anAthensCanvas},smalltalk.AthensAbstractPaint)})},
args: ["anAthensCanvas"],
source: "asAthensPaintOn: anAthensCanvas\x09\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensAbstractPaint);



smalltalk.addClass('AthensPaint', smalltalk.AthensAbstractPaint, [], 'Athens-Core-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "asStrokePaintOn:",
category: 'converting',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aCanvas)._surface())._createStrokePaintFor_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asStrokePaintOn:",{aCanvas:aCanvas},smalltalk.AthensPaint)})},
args: ["aCanvas"],
source: "asStrokePaintOn: aCanvas\x0a\x09\x22default implementation\x22\x0a\x09^ aCanvas surface createStrokePaintFor: self\x0a\x09",
messageSends: ["createStrokePaintFor:", "surface"],
referencedClasses: []
}),
smalltalk.AthensPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
category: 'rendering',
fn: function (athensBalloonPath,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{athensBalloonPath:athensBalloonPath,anAthensCanvas:anAthensCanvas},smalltalk.AthensPaint)})},
args: ["athensBalloonPath", "anAthensCanvas"],
source: "fillPath: athensBalloonPath on: anAthensCanvas \x0a\x0a\x09\x22This is a terminal method in rendering dispatch scheme\x0a\x09canvas->shape->paint. See AthensCanvas>>fillShape: \x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
category: 'rendering',
fn: function (aRect,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensPaint)})},
args: ["aRect", "anAthensCanvas"],
source: "fillRectangle: aRect on: anAthensCanvas\x0a\x09\x22This is a terminal method in rendering dispatch scheme\x0a\x09canvas->shape->paint. See AthensCanvas>>fillShape: \x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensPaint);



smalltalk.addClass('AthensStrokePaint', smalltalk.AthensPaint, ['fillPaint', 'width', 'capStyle', 'joinStyle', 'innerJoinStyle', 'miterLimit'], 'Athens-Core-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "asStrokePaintOn:",
category: 'converting',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asStrokePaintOn:",{aCanvas:aCanvas},smalltalk.AthensStrokePaint)})},
args: ["aCanvas"],
source: "asStrokePaintOn: aCanvas\x0a\x09\x22receiver is stroke paint already\x22\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "capStyle",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@capStyle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"capStyle",{},smalltalk.AthensStrokePaint)})},
args: [],
source: "capStyle\x0a\x0a\x09^ capStyle",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "capStyle:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@capStyle"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"capStyle:",{anObject:anObject},smalltalk.AthensStrokePaint)})},
args: ["anObject"],
source: "capStyle: anObject\x0a\x0a\x09capStyle := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPaint",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fillPaint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fillPaint",{},smalltalk.AthensStrokePaint)})},
args: [],
source: "fillPaint\x0a\x0a\x09^ fillPaint",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPaint:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fillPaint"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"fillPaint:",{anObject:anObject},smalltalk.AthensStrokePaint)})},
args: ["anObject"],
source: "fillPaint: anObject\x0a\x0a\x09fillPaint := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensPaint.fn.prototype._initialize.apply(_st(self), []);
self["@width"]=(1);
self["@capStyle"]="butt";
self["@joinStyle"]="bevel";
self["@innerJoinStyle"]="bevel";
self["@miterLimit"]=(4);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensStrokePaint)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09width := 1.\x0a\x09capStyle := #butt.\x0a\x09joinStyle := #bevel.\x0a\x09innerJoinStyle := #bevel.\x0a\x09miterLimit := 4.0.\x0a\x09",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "innerJoinStyle",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@innerJoinStyle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"innerJoinStyle",{},smalltalk.AthensStrokePaint)})},
args: [],
source: "innerJoinStyle\x0a\x0a\x09^ innerJoinStyle",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "innerJoinStyle:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@innerJoinStyle"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"innerJoinStyle:",{anObject:anObject},smalltalk.AthensStrokePaint)})},
args: ["anObject"],
source: "innerJoinStyle: anObject\x0a\x0a\x09innerJoinStyle := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "joinStyle",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@joinStyle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"joinStyle",{},smalltalk.AthensStrokePaint)})},
args: [],
source: "joinStyle\x0a\x0a\x09^ joinStyle",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "joinStyle:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@joinStyle"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"joinStyle:",{anObject:anObject},smalltalk.AthensStrokePaint)})},
args: ["anObject"],
source: "joinStyle: anObject\x0a\x0a\x09joinStyle := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "miterLimit",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@miterLimit"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"miterLimit",{},smalltalk.AthensStrokePaint)})},
args: [],
source: "miterLimit\x0a\x0a\x09^ miterLimit",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "miterLimit:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@miterLimit"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"miterLimit:",{anObject:anObject},smalltalk.AthensStrokePaint)})},
args: ["anObject"],
source: "miterLimit: anObject\x0a\x0a\x09miterLimit := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.AthensStrokePaint)})},
args: [],
source: "width\x0a\x0a\x09^ width",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{anObject:anObject},smalltalk.AthensStrokePaint)})},
args: ["anObject"],
source: "width: anObject\x0a\x0a\x09width := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensStrokePaint);



smalltalk.addClass('GradientPaint', smalltalk.AthensAbstractPaint, ['stops', 'colorRamp'], 'Athens-Core-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "atStop:put:",
category: 'accessing',
fn: function (anOffset,aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@colorRamp"])._add_(_st(anOffset).__minus_gt(aColor));
return self}, function($ctx1) {$ctx1.fill(self,"atStop:put:",{anOffset:anOffset,aColor:aColor},smalltalk.GradientPaint)})},
args: ["anOffset", "aColor"],
source: "atStop: anOffset put: aColor\x0a\x0a\x09colorRamp add: (anOffset -> aColor).",
messageSends: ["add:", "->"],
referencedClasses: []
}),
smalltalk.GradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "colorRamp",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@colorRamp"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorRamp",{},smalltalk.GradientPaint)})},
args: [],
source: "colorRamp\x0a\x09^ colorRamp",
messageSends: [],
referencedClasses: []
}),
smalltalk.GradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "colorRamp:",
category: 'accessing',
fn: function (aRamp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@colorRamp"]=_st(aRamp)._copy();
return self}, function($ctx1) {$ctx1.fill(self,"colorRamp:",{aRamp:aRamp},smalltalk.GradientPaint)})},
args: ["aRamp"],
source: "colorRamp: aRamp\x0a\x22The color ramp is a collection of associations with keys - floating point values between 0 and 1\x0aand values with Colors, for example:\x0a\x0a{  0 -> Color white. 1 -> Color black }.\x0a\x22\x0a\x09colorRamp := aRamp copy.",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.GradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensAbstractPaint.fn.prototype._initialize.apply(_st(self), []);
self["@colorRamp"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GradientPaint)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09colorRamp := OrderedCollection new.",
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.GradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "is:",
category: 'testing',
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aSymbol).__eq("pattern"))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.AthensAbstractPaint.fn.prototype._is_.apply(_st(self), [aSymbol]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"is:",{aSymbol:aSymbol},smalltalk.GradientPaint)})},
args: ["aSymbol"],
source: "is: aSymbol\x0a\x09^ aSymbol = #pattern or:[ super is: aSymbol]\x0a\x09",
messageSends: ["or:", "is:", "="],
referencedClasses: []
}),
smalltalk.GradientPaint);



smalltalk.addClass('LinearGradientPaint', smalltalk.GradientPaint, ['start', 'stop'], 'Athens-Core-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "asAthensPaintOn:",
category: 'converting',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aCanvas)._surface())._createLinearGradient_start_stop_(self._colorRamp(),self._start(),self._stop());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{aCanvas:aCanvas},smalltalk.LinearGradientPaint)})},
args: ["aCanvas"],
source: "asAthensPaintOn: aCanvas\x0a\x09^ aCanvas surface\x0a\x09\x09\x09createLinearGradient: self colorRamp\x0a\x09\x09\x09\x09start: self start \x0a\x09\x09\x09\x09stop: self stop",
messageSends: ["createLinearGradient:start:stop:", "colorRamp", "start", "stop", "surface"],
referencedClasses: []
}),
smalltalk.LinearGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@start"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.LinearGradientPaint)})},
args: [],
source: "start\x0a\x0a\x09^ start",
messageSends: [],
referencedClasses: []
}),
smalltalk.LinearGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "start:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@start"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"start:",{anObject:anObject},smalltalk.LinearGradientPaint)})},
args: ["anObject"],
source: "start: anObject\x0a\x09\x0a\x09start := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.LinearGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "stop",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@stop"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"stop",{},smalltalk.LinearGradientPaint)})},
args: [],
source: "stop\x0a\x0a\x09^ stop",
messageSends: [],
referencedClasses: []
}),
smalltalk.LinearGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "stop:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stop"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"stop:",{anObject:anObject},smalltalk.LinearGradientPaint)})},
args: ["anObject"],
source: "stop: anObject\x0a\x09\x0a\x09stop := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.LinearGradientPaint);


smalltalk.addMethod(
smalltalk.method({
selector: "from:to:",
category: 'instance creation',
fn: function (aStartPoint,aStopPoint){
var self=this;
var p;
return smalltalk.withContext(function($ctx1) { 
var $1;
p=self._new();
_st(p)._initializeFrom_to_(aStartPoint,aStopPoint);
$1=p;
return $1;
}, function($ctx1) {$ctx1.fill(self,"from:to:",{aStartPoint:aStartPoint,aStopPoint:aStopPoint,p:p},smalltalk.LinearGradientPaint.klass)})},
args: ["aStartPoint", "aStopPoint"],
source: "from: aStartPoint  to: aStopPoint\x0a\x09| p |\x0a\x09p := self new.\x0a\x09p initializeFrom: aStartPoint  to: aStopPoint.\x0a\x09^ p",
messageSends: ["new", "initializeFrom:to:"],
referencedClasses: []
}),
smalltalk.LinearGradientPaint.klass);


smalltalk.addClass('RadialGradientPaint', smalltalk.GradientPaint, ['center', 'radius', 'focalPoint'], 'Athens-Core-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "asAthensPaintOn:",
category: 'converting',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aCanvas)._surface())._createRadialGradient_center_radius_focalPoint_(self["@colorRamp"],self["@center"],self["@radius"],self["@focalPoint"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{aCanvas:aCanvas},smalltalk.RadialGradientPaint)})},
args: ["aCanvas"],
source: "asAthensPaintOn: aCanvas\x0a\x09^ aCanvas surface\x0a\x09\x09createRadialGradient:  colorRamp\x0a\x09\x09center: center\x0a\x09\x09radius: radius\x0a\x09\x09focalPoint: focalPoint ",
messageSends: ["createRadialGradient:center:radius:focalPoint:", "surface"],
referencedClasses: []
}),
smalltalk.RadialGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "center",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@center"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.RadialGradientPaint)})},
args: [],
source: "center\x0a\x09\x0a\x09^ center",
messageSends: [],
referencedClasses: []
}),
smalltalk.RadialGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "center:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@center"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"center:",{aPoint:aPoint},smalltalk.RadialGradientPaint)})},
args: ["aPoint"],
source: "center: aPoint\x0a\x0a\x09center := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.RadialGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "focalPoint",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@focalPoint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"focalPoint",{},smalltalk.RadialGradientPaint)})},
args: [],
source: "focalPoint\x0a\x09\x0a\x09^ focalPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.RadialGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "focalPoint:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@focalPoint"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"focalPoint:",{aPoint:aPoint},smalltalk.RadialGradientPaint)})},
args: ["aPoint"],
source: "focalPoint: aPoint\x0a\x0a\x09focalPoint := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.RadialGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "radius",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@radius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"radius",{},smalltalk.RadialGradientPaint)})},
args: [],
source: "radius\x0a\x09\x0a\x09^ radius",
messageSends: [],
referencedClasses: []
}),
smalltalk.RadialGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "radius:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@radius"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"radius:",{aNumber:aNumber},smalltalk.RadialGradientPaint)})},
args: ["aNumber"],
source: "radius: aNumber\x0a\x0a\x09radius := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.RadialGradientPaint);




smalltalk.addPackage('Athens-Core-Paints');
smalltalk.addClass('AthensAbstractPaint', smalltalk.Object, [], 'Athens-Core-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "asAthensPaintOn:",
fn: function (anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{anAthensCanvas:anAthensCanvas},smalltalk.AthensAbstractPaint)})},
messageSends: []}),
smalltalk.AthensAbstractPaint);



smalltalk.addClass('AthensPaint', smalltalk.AthensAbstractPaint, [], 'Athens-Core-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "asStrokePaintOn:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aCanvas)._surface())._createStrokePaintFor_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asStrokePaintOn:",{aCanvas:aCanvas},smalltalk.AthensPaint)})},
messageSends: ["createStrokePaintFor:", "surface"]}),
smalltalk.AthensPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
fn: function (athensBalloonPath,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{athensBalloonPath:athensBalloonPath,anAthensCanvas:anAthensCanvas},smalltalk.AthensPaint)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
fn: function (aRect,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensPaint)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensPaint);



smalltalk.addClass('AthensStrokePaint', smalltalk.AthensPaint, ['fillPaint', 'width', 'capStyle', 'joinStyle', 'innerJoinStyle', 'miterLimit'], 'Athens-Core-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "asStrokePaintOn:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asStrokePaintOn:",{aCanvas:aCanvas},smalltalk.AthensStrokePaint)})},
messageSends: []}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "capStyle",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@capStyle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"capStyle",{},smalltalk.AthensStrokePaint)})},
messageSends: []}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "capStyle:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@capStyle"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"capStyle:",{anObject:anObject},smalltalk.AthensStrokePaint)})},
messageSends: []}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPaint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fillPaint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fillPaint",{},smalltalk.AthensStrokePaint)})},
messageSends: []}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPaint:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fillPaint"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"fillPaint:",{anObject:anObject},smalltalk.AthensStrokePaint)})},
messageSends: []}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize"]}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "innerJoinStyle",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@innerJoinStyle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"innerJoinStyle",{},smalltalk.AthensStrokePaint)})},
messageSends: []}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "innerJoinStyle:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@innerJoinStyle"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"innerJoinStyle:",{anObject:anObject},smalltalk.AthensStrokePaint)})},
messageSends: []}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "joinStyle",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@joinStyle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"joinStyle",{},smalltalk.AthensStrokePaint)})},
messageSends: []}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "joinStyle:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@joinStyle"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"joinStyle:",{anObject:anObject},smalltalk.AthensStrokePaint)})},
messageSends: []}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "miterLimit",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@miterLimit"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"miterLimit",{},smalltalk.AthensStrokePaint)})},
messageSends: []}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "miterLimit:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@miterLimit"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"miterLimit:",{anObject:anObject},smalltalk.AthensStrokePaint)})},
messageSends: []}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.AthensStrokePaint)})},
messageSends: []}),
smalltalk.AthensStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{anObject:anObject},smalltalk.AthensStrokePaint)})},
messageSends: []}),
smalltalk.AthensStrokePaint);



smalltalk.addClass('GradientPaint', smalltalk.AthensAbstractPaint, ['stops', 'colorRamp'], 'Athens-Core-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "atStop:put:",
fn: function (anOffset,aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@colorRamp"])._add_(_st(anOffset).__minus_gt(aColor));
return self}, function($ctx1) {$ctx1.fill(self,"atStop:put:",{anOffset:anOffset,aColor:aColor},smalltalk.GradientPaint)})},
messageSends: ["add:", "->"]}),
smalltalk.GradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "colorRamp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@colorRamp"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorRamp",{},smalltalk.GradientPaint)})},
messageSends: []}),
smalltalk.GradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "colorRamp:",
fn: function (aRamp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@colorRamp"]=_st(aRamp)._copy();
return self}, function($ctx1) {$ctx1.fill(self,"colorRamp:",{aRamp:aRamp},smalltalk.GradientPaint)})},
messageSends: ["copy"]}),
smalltalk.GradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensAbstractPaint.fn.prototype._initialize.apply(_st(self), []);
self["@colorRamp"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GradientPaint)})},
messageSends: ["initialize", "new"]}),
smalltalk.GradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "is:",
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
messageSends: ["or:", "is:", "="]}),
smalltalk.GradientPaint);



smalltalk.addClass('LinearGradientPaint', smalltalk.GradientPaint, ['start', 'stop'], 'Athens-Core-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "asAthensPaintOn:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aCanvas)._surface())._createLinearGradient_start_stop_(self._colorRamp(),self._start(),self._stop());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{aCanvas:aCanvas},smalltalk.LinearGradientPaint)})},
messageSends: ["createLinearGradient:start:stop:", "colorRamp", "start", "stop", "surface"]}),
smalltalk.LinearGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@start"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.LinearGradientPaint)})},
messageSends: []}),
smalltalk.LinearGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "start:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@start"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"start:",{anObject:anObject},smalltalk.LinearGradientPaint)})},
messageSends: []}),
smalltalk.LinearGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "stop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@stop"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"stop",{},smalltalk.LinearGradientPaint)})},
messageSends: []}),
smalltalk.LinearGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "stop:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stop"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"stop:",{anObject:anObject},smalltalk.LinearGradientPaint)})},
messageSends: []}),
smalltalk.LinearGradientPaint);


smalltalk.addMethod(
smalltalk.method({
selector: "from:to:",
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
messageSends: ["new", "initializeFrom:to:"]}),
smalltalk.LinearGradientPaint.klass);


smalltalk.addClass('RadialGradientPaint', smalltalk.GradientPaint, ['center', 'radius', 'focalPoint'], 'Athens-Core-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "asAthensPaintOn:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aCanvas)._surface())._createRadialGradient_center_radius_focalPoint_(self["@colorRamp"],self["@center"],self["@radius"],self["@focalPoint"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{aCanvas:aCanvas},smalltalk.RadialGradientPaint)})},
messageSends: ["createRadialGradient:center:radius:focalPoint:", "surface"]}),
smalltalk.RadialGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "center",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@center"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.RadialGradientPaint)})},
messageSends: []}),
smalltalk.RadialGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "center:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@center"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"center:",{aPoint:aPoint},smalltalk.RadialGradientPaint)})},
messageSends: []}),
smalltalk.RadialGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "focalPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@focalPoint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"focalPoint",{},smalltalk.RadialGradientPaint)})},
messageSends: []}),
smalltalk.RadialGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "focalPoint:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@focalPoint"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"focalPoint:",{aPoint:aPoint},smalltalk.RadialGradientPaint)})},
messageSends: []}),
smalltalk.RadialGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "radius",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@radius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"radius",{},smalltalk.RadialGradientPaint)})},
messageSends: []}),
smalltalk.RadialGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "radius:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@radius"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"radius:",{aNumber:aNumber},smalltalk.RadialGradientPaint)})},
messageSends: []}),
smalltalk.RadialGradientPaint);




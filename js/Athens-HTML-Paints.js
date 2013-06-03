smalltalk.addPackage('Athens-HTML-Paints');
smalltalk.addClass('AthensHTMLPatternPaint', smalltalk.Object, [], 'Athens-HTML-Paints');
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
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPatternPaint)})},
args: ["anAthensCanvas"],
source: "asAthensPaintOn: anAthensCanvas\x09\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPatternPaint);



smalltalk.addClass('AthensHTMLGradientPaint', smalltalk.AthensHTMLPatternPaint, ['start', 'stop', 'gradient', 'context2D'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "context:",
category: 'accessing',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context2D"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.AthensHTMLGradientPaint)})},
args: ["aContext"],
source: "context: aContext\x0a\x09context2D := aContext.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
category: 'initialize-release',
fn: function (aRect,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._beginPath();
_st(_st(anAthensCanvas)._pathTransform())._applyToContext();
_st(self["@context2D"])._rect_a_a_a_(_st(aRect)._left(),_st(aRect)._top(),_st(aRect)._width(),_st(aRect)._height());
_st(_st(anAthensCanvas)._paintTransform())._applyToContext();
_st(self["@context2D"])._fillStyle_(self["@gradient"]);
_st(self["@context2D"])._fill();
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLGradientPaint)})},
args: ["aRect", "anAthensCanvas"],
source: "fillRectangle: aRect on: anAthensCanvas\x0a\x09context2D beginPath.\x0a\x09anAthensCanvas pathTransform applyToContext.\x0a\x09context2D rect: aRect left a: aRect top a: aRect width a: aRect height.\x0a\x09anAthensCanvas paintTransform applyToContext.\x0a\x09context2D fillStyle: gradient.\x0a\x09context2D fill.",
messageSends: ["beginPath", "applyToContext", "pathTransform", "rect:a:a:a:", "left", "top", "width", "height", "paintTransform", "fillStyle:", "fill"],
referencedClasses: []
}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "gradient",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gradient"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gradient",{},smalltalk.AthensHTMLGradientPaint)})},
args: [],
source: "gradient\x0a\x09^ gradient",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gradient"]=_st(self["@context2D"])._createLinearGradient_a_a_a_(_st(self["@start"])._x(),_st(self["@start"])._y(),_st(self["@stop"])._x(),_st(self["@stop"])._y());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLGradientPaint)})},
args: [],
source: "initialize\x0a\x09gradient := context2D createLinearGradient: start x a: start y a: stop x a: stop y.",
messageSends: ["createLinearGradient:a:a:a:", "x", "y"],
referencedClasses: []
}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "populateRamp:",
category: 'initialize-release',
fn: function (aRamp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aRamp)._do_((function(assoc){
return smalltalk.withContext(function($ctx2) {
return _st(self["@gradient"])._addColorStop_a_(_st(assoc)._key(),_st(_st(assoc)._value())._hexString());
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"populateRamp:",{aRamp:aRamp},smalltalk.AthensHTMLGradientPaint)})},
args: ["aRamp"],
source: "populateRamp: aRamp\x0a\x09aRamp do: [:assoc |\x0a\x09\x09gradient addColorStop: assoc key a: assoc value hexString].",
messageSends: ["do:", "addColorStop:a:", "key", "hexString", "value"],
referencedClasses: []
}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "start:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@start"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"start:",{aPoint:aPoint},smalltalk.AthensHTMLGradientPaint)})},
args: ["aPoint"],
source: "start: aPoint\x0a\x09start := aPoint.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "stop:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stop"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"stop:",{aPoint:aPoint},smalltalk.AthensHTMLGradientPaint)})},
args: ["aPoint"],
source: "stop: aPoint\x0a\x09stop := aPoint.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLGradientPaint);


smalltalk.addMethod(
smalltalk.method({
selector: "createLinearGradient:start:stop:on:",
category: 'instance creation',
fn: function (aColorRamp,aStartPoint,aStopPoint,aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._start_(aStartPoint);
_st($2)._stop_(aStopPoint);
_st($2)._context_(aContext);
_st($2)._initialize();
_st($2)._populateRamp_(aColorRamp);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:start:stop:on:",{aColorRamp:aColorRamp,aStartPoint:aStartPoint,aStopPoint:aStopPoint,aContext:aContext},smalltalk.AthensHTMLGradientPaint.klass)})},
args: ["aColorRamp", "aStartPoint", "aStopPoint", "aContext"],
source: "createLinearGradient: aColorRamp start: aStartPoint stop: aStopPoint on: aContext\x0a\x09^ self basicNew\x0a\x09\x09start: aStartPoint;\x0a\x09\x09stop: aStopPoint;\x0a\x09\x09context: aContext;\x0a\x09\x09initialize;\x0a\x09\x09populateRamp: aColorRamp;\x0a\x09\x09yourself",
messageSends: ["start:", "basicNew", "stop:", "context:", "initialize", "populateRamp:", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLGradientPaint.klass);


smalltalk.addClass('AthensHTMLSolidPaint', smalltalk.AthensPaint, ['r', 'g', 'b', 'a', 'context2D'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "alpha",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@a"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"alpha",{},smalltalk.AthensHTMLSolidPaint)})},
args: [],
source: "alpha\x0a\x09^ a",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

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
}, function($ctx1) {$ctx1.fill(self,"blue",{},smalltalk.AthensHTMLSolidPaint)})},
args: [],
source: "blue\x0a\x09^ b",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@r"]=_st(_st(aColor)._red()).__star((255));
self["@g"]=_st(_st(aColor)._green()).__star((255));
self["@b"]=_st(_st(aColor)._blue()).__star((255));
self["@a"]=_st(aColor)._alpha();
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.AthensHTMLSolidPaint)})},
args: ["aColor"],
source: "color: aColor\x0a\x09r := aColor red * 255.\x0a\x09g := aColor green * 255.\x0a\x09b := aColor blue * 255.\x0a\x09a := aColor alpha.",
messageSends: ["*", "red", "green", "blue", "alpha"],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
category: 'accessing',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context2D"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.AthensHTMLSolidPaint)})},
args: ["aContext"],
source: "context: aContext\x0a\x09context2D := aContext.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
category: 'drawing',
fn: function (aPath,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(anAthensCanvas)._pathTransform())._applyToContext();
_st(self["@context2D"])._fillStyle_(_st(_st(_st(_st(_st(_st(_st("rgba(".__comma(self["@r"])).__comma(", ")).__comma(self["@g"])).__comma(", ")).__comma(self["@b"])).__comma(", ")).__comma(self["@a"])).__comma(")"));
_st(aPath)._draw();
_st(self["@context2D"])._fill();
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
args: ["aPath", "anAthensCanvas"],
source: "fillPath: aPath on: anAthensCanvas\x0a\x09anAthensCanvas pathTransform applyToContext.\x0a\x09context2D fillStyle: 'rgba(', r, ', ', g, ', ', b, ', ', a, ')'.\x0a\x09aPath draw.\x0a\x09context2D fill.",
messageSends: ["applyToContext", "pathTransform", "fillStyle:", ",", "draw", "fill"],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
category: 'drawing',
fn: function (aRect,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(anAthensCanvas)._pathTransform())._applyToContext();
_st(self["@context2D"])._fillStyle_(_st(_st(_st(_st(_st(_st(_st("rgba(".__comma(_st(self["@r"])._asString())).__comma(", ")).__comma(_st(self["@g"])._asString())).__comma(", ")).__comma(_st(self["@b"])._asString())).__comma(", ")).__comma(_st(self["@a"])._asString())).__comma(")"));
_st(self["@context2D"])._fillRect_a_a_a_(_st(aRect)._left(),_st(aRect)._top(),_st(aRect)._width(),_st(aRect)._height());
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
args: ["aRect", "anAthensCanvas"],
source: "fillRectangle: aRect on: anAthensCanvas\x0a\x09anAthensCanvas pathTransform applyToContext.\x0a\x09context2D fillStyle: 'rgba(', r asString, ', ', g asString, ', ', b asString, ', ', a asString, ')'.\x0a\x09context2D fillRect: aRect left a: aRect top a: aRect width a: aRect height.",
messageSends: ["applyToContext", "pathTransform", "fillStyle:", ",", "asString", "fillRect:a:a:a:", "left", "top", "width", "height"],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

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
}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.AthensHTMLSolidPaint)})},
args: [],
source: "green\x0a\x09^ g",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

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
}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.AthensHTMLSolidPaint)})},
args: [],
source: "red\x0a\x09^ r",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);



smalltalk.addClass('AthensHTMLStrokePaint', smalltalk.AthensStrokePaint, ['dashLenghts', 'dashOffset', 'context2D'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "context:",
category: 'initialize-release',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context2D"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.AthensHTMLStrokePaint)})},
args: ["aContext"],
source: "context: aContext\x0a\x09context2D := aContext.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
category: 'drawing',
fn: function (aPath,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(anAthensCanvas)._pathTransform())._applyToContext();
_st(self["@context2D"])._strokeStyle_(_st(_st(_st(_st(_st(_st(_st("rgba(".__comma(_st(self["@fillPaint"])._red())).__comma(", ")).__comma(_st(self["@fillPaint"])._green())).__comma(", ")).__comma(_st(self["@fillPaint"])._blue())).__comma(", ")).__comma(_st(self["@fillPaint"])._alpha())).__comma(")"));
_st(self["@context2D"])._lineWidth_(self["@width"]);
_st(aPath)._draw();
_st(self["@context2D"])._stroke();
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLStrokePaint)})},
args: ["aPath", "anAthensCanvas"],
source: "fillPath: aPath on: anAthensCanvas\x0a\x09anAthensCanvas pathTransform applyToContext.\x0a\x09context2D strokeStyle: 'rgba(', fillPaint red, ', ', fillPaint green, ', ', fillPaint blue, ', ', fillPaint alpha, ')'.\x0a\x09context2D lineWidth: width.\x0a\x09aPath draw.\x0a\x09context2D stroke.",
messageSends: ["applyToContext", "pathTransform", "strokeStyle:", ",", "alpha", "blue", "green", "red", "lineWidth:", "draw", "stroke"],
referencedClasses: []
}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensStrokePaint.fn.prototype._initialize.apply(_st(self), []);
self["@width"]=(1);
self["@joinStyle"]=nil;
self["@capStyle"]=self["@joinStyle"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09width := 1.\x0a\x09capStyle := joinStyle := nil.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "loadOn:",
category: 'drawing',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._fillPaint())._loadOn_(aCanvas);
return self}, function($ctx1) {$ctx1.fill(self,"loadOn:",{aCanvas:aCanvas},smalltalk.AthensHTMLStrokePaint)})},
args: ["aCanvas"],
source: "loadOn: aCanvas\x0a\x09self fillPaint loadOn: aCanvas.",
messageSends: ["loadOn:", "fillPaint"],
referencedClasses: []
}),
smalltalk.AthensHTMLStrokePaint);




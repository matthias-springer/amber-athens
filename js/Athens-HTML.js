smalltalk.addPackage('Athens-HTML');
smalltalk.addClass('AthensHTMLCanvas', smalltalk.AthensCanvas, ['pathTransform', 'paintTransform', 'currentClipRect'], 'Athens-HTML');
smalltalk.addMethod(
smalltalk.method({
selector: "newPath",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._beginPath();
return self}, function($ctx1) {$ctx1.fill(self,"newPath",{},smalltalk.AthensHTMLCanvas)})},
args: [],
source: "newPath\x0a\x09surface context2D beginPath.",
messageSends: ["beginPath", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paintTransform",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@paintTransform"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"paintTransform",{},smalltalk.AthensHTMLCanvas)})},
args: [],
source: "paintTransform\x0a\x09^ paintTransform",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "pathTransform",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@pathTransform"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pathTransform",{},smalltalk.AthensHTMLCanvas)})},
args: [],
source: "pathTransform\x0a\x09^ pathTransform",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
category: 'accessing',
fn: function (anHTMLSurface){
var self=this;
function $AthensHTMLMatrix(){return smalltalk.AthensHTMLMatrix||(typeof AthensHTMLMatrix=="undefined"?nil:AthensHTMLMatrix)}
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=anHTMLSurface;
self["@pathTransform"]=_st($AthensHTMLMatrix())._on_(self["@surface"]);
self["@paintTransform"]=_st($AthensHTMLMatrix())._on_(self["@surface"]);
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensHTMLCanvas)})},
args: ["anHTMLSurface"],
source: "surface: anHTMLSurface\x0a\x09surface := anHTMLSurface.\x0a\x09pathTransform := AthensHTMLMatrix on: surface.\x0a\x09paintTransform := AthensHTMLMatrix on: surface.",
messageSends: ["on:"],
referencedClasses: ["AthensHTMLMatrix"]
}),
smalltalk.AthensHTMLCanvas);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
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
}, function($ctx1) {$ctx1.fill(self,"on:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensHTMLCanvas.klass)})},
args: ["anHTMLSurface"],
source: "on: anHTMLSurface\x0a\x09^ self basicNew\x0a\x09\x09surface: anHTMLSurface;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["surface:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLCanvas.klass);


smalltalk.addClass('AthensHTMLSurface', smalltalk.AthensSurface, ['extent', 'canvasTag', 'context2D', 'athensCanvas'], 'Athens-HTML');
smalltalk.addMethod(
smalltalk.method({
selector: "appendToBrush:",
category: 'adding',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._appendToJQuery_(_st(aTagBrush)._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},smalltalk.AthensHTMLSurface)})},
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09self appendToJQuery: aTagBrush asJQuery",
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToJQuery:",
category: 'adding',
fn: function (aJQuery){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self._renderOn_(_st($HTMLCanvas())._onJQuery_(aJQuery));
return self}, function($ctx1) {$ctx1.fill(self,"appendToJQuery:",{aJQuery:aJQuery},smalltalk.AthensHTMLSurface)})},
args: ["aJQuery"],
source: "appendToJQuery: aJQuery\x0a\x09self renderOn: (HTMLCanvas onJQuery: aJQuery)",
messageSends: ["renderOn:", "onJQuery:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasTag",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvasTag"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvasTag",{},smalltalk.AthensHTMLSurface)})},
args: [],
source: "canvasTag\x0a\x09^ canvasTag",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasTag:",
category: 'accessing',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvasTag"]=aTagBrush;
return self}, function($ctx1) {$ctx1.fill(self,"canvasTag:",{aTagBrush:aTagBrush},smalltalk.AthensHTMLSurface)})},
args: ["aTagBrush"],
source: "canvasTag: aTagBrush\x0a\x09canvasTag := aTagBrush",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._clear_(nil);
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.AthensHTMLSurface)})},
args: [],
source: "clear\x0a\x09self clear: nil.",
messageSends: ["clear:"],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "clear:",
category: 'accessing',
fn: function (clearPaint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
_st(self["@context2D"])._clearRect_a_a_a_((0),(0),self._width(),self._height());
$1=clearPaint;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
$2=canvas;
_st($2)._setPaint_(clearPaint);
_st($2)._setShape_(_st((0).__at((0)))._corner_(_st(self._width()).__at(self._height())));
$3=_st($2)._draw();
return $3;
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"clear:",{clearPaint:clearPaint},smalltalk.AthensHTMLSurface)})},
args: ["clearPaint"],
source: "clear: clearPaint\x0a\x09context2D clearRect: 0 a: 0 a: self width a: self height.\x0a\x09clearPaint ifNotNil: [\x0a\x09\x09self drawDuring: [:canvas |\x0a\x09\x09\x09canvas \x0a\x09\x09\x09\x09setPaint: clearPaint;\x0a\x09\x09\x09\x09setShape: (0@0 corner: (self width) @ (self height));\x0a\x09\x09\x09\x09draw]].",
messageSends: ["clearRect:a:a:a:", "width", "height", "ifNotNil:", "drawDuring:", "setPaint:", "setShape:", "corner:", "@", "draw"],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "context2D",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context2D"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context2D",{},smalltalk.AthensHTMLSurface)})},
args: [],
source: "context2D\x0a\x09^ context2D",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createBitmapPaint:",
category: 'paints',
fn: function (aBitmap){
var self=this;
function $AthensHTMLBitmapPaint(){return smalltalk.AthensHTMLBitmapPaint||(typeof AthensHTMLBitmapPaint=="undefined"?nil:AthensHTMLBitmapPaint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLBitmapPaint())._forBitmap_context_(aBitmap,self["@context2D"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createBitmapPaint:",{aBitmap:aBitmap},smalltalk.AthensHTMLSurface)})},
args: ["aBitmap"],
source: "createBitmapPaint: aBitmap\x0a\x09^ AthensHTMLBitmapPaint forBitmap: aBitmap context: context2D",
messageSends: ["forBitmap:context:"],
referencedClasses: ["AthensHTMLBitmapPaint"]
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createLinearGradient:start:stop:",
category: 'paints',
fn: function (aColorRamp,aStartPoint,aStopPoint){
var self=this;
function $AthensHTMLGradientPaint(){return smalltalk.AthensHTMLGradientPaint||(typeof AthensHTMLGradientPaint=="undefined"?nil:AthensHTMLGradientPaint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLGradientPaint())._createLinearGradient_start_stop_context_(aColorRamp,aStartPoint,aStopPoint,self["@context2D"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:start:stop:",{aColorRamp:aColorRamp,aStartPoint:aStartPoint,aStopPoint:aStopPoint},smalltalk.AthensHTMLSurface)})},
args: ["aColorRamp", "aStartPoint", "aStopPoint"],
source: "createLinearGradient: aColorRamp start: aStartPoint stop: aStopPoint\x0a\x09^ AthensHTMLGradientPaint \x0a\x09\x09createLinearGradient: aColorRamp \x0a\x09\x09start: aStartPoint \x0a\x09\x09stop: aStopPoint\x0a\x09\x09context: context2D",
messageSends: ["createLinearGradient:start:stop:context:"],
referencedClasses: ["AthensHTMLGradientPaint"]
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
category: 'creation',
fn: function (aPathCreatingBlock){
var self=this;
function $AthensHTMLPathBuilder(){return smalltalk.AthensHTMLPathBuilder||(typeof AthensHTMLPathBuilder=="undefined"?nil:AthensHTMLPathBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLPathBuilder())._on_with_(self,aPathCreatingBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aPathCreatingBlock:aPathCreatingBlock},smalltalk.AthensHTMLSurface)})},
args: ["aPathCreatingBlock"],
source: "createPath: aPathCreatingBlock\x0a\x09^ AthensHTMLPathBuilder on: self with: aPathCreatingBlock ",
messageSends: ["on:with:"],
referencedClasses: ["AthensHTMLPathBuilder"]
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createRadialGradient:center:radius:focalPoint:",
category: 'paints',
fn: function (colorRamp,aCenter,aRadius,fp){
var self=this;
function $AthensHTMLGradientPaint(){return smalltalk.AthensHTMLGradientPaint||(typeof AthensHTMLGradientPaint=="undefined"?nil:AthensHTMLGradientPaint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLGradientPaint())._radialBetween_extending_and_extending_withColorRamp_context_(fp,(0),aCenter,aRadius,colorRamp,self["@context2D"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createRadialGradient:center:radius:focalPoint:",{colorRamp:colorRamp,aCenter:aCenter,aRadius:aRadius,fp:fp},smalltalk.AthensHTMLSurface)})},
args: ["colorRamp", "aCenter", "aRadius", "fp"],
source: "createRadialGradient: colorRamp center: aCenter radius: aRadius focalPoint: fp\x0a\x09^AthensHTMLGradientPaint\x09\x0a\x09\x09radialBetween: fp\x0a\x09\x09extending: 0\x0a\x09\x09and: aCenter\x0a\x09\x09extending: aRadius\x0a\x09\x09withColorRamp: colorRamp\x0a\x09\x09context: context2D",
messageSends: ["radialBetween:extending:and:extending:withColorRamp:context:"],
referencedClasses: ["AthensHTMLGradientPaint"]
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createSolidColorPaint:",
category: 'paints',
fn: function (aColor){
var self=this;
function $AthensHTMLSolidPaint(){return smalltalk.AthensHTMLSolidPaint||(typeof AthensHTMLSolidPaint=="undefined"?nil:AthensHTMLSolidPaint)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($AthensHTMLSolidPaint())._new();
_st($2)._color_(aColor);
_st($2)._context_(self["@context2D"]);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"createSolidColorPaint:",{aColor:aColor},smalltalk.AthensHTMLSurface)})},
args: ["aColor"],
source: "createSolidColorPaint: aColor \x0a\x09^ AthensHTMLSolidPaint new \x0a\x09\x09color: aColor;\x0a\x09\x09context: context2D;\x0a\x09\x09yourself",
messageSends: ["color:", "new", "context:", "yourself"],
referencedClasses: ["AthensHTMLSolidPaint"]
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createStrokePaintFor:",
category: 'paints',
fn: function (aPaint){
var self=this;
function $AthensHTMLStrokePaint(){return smalltalk.AthensHTMLStrokePaint||(typeof AthensHTMLStrokePaint=="undefined"?nil:AthensHTMLStrokePaint)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($AthensHTMLStrokePaint())._new();
_st($2)._fillPaint_(aPaint);
_st($2)._context_(self["@context2D"]);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"createStrokePaintFor:",{aPaint:aPaint},smalltalk.AthensHTMLSurface)})},
args: ["aPaint"],
source: "createStrokePaintFor: aPaint\x0a\x09^ AthensHTMLStrokePaint new \x0a\x09\x09fillPaint: aPaint;\x0a\x09\x09context: context2D;\x0a\x09\x09yourself",
messageSends: ["fillPaint:", "new", "context:", "yourself"],
referencedClasses: ["AthensHTMLStrokePaint"]
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "drawDuring:",
category: 'drawing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
self["@currentCanvas"]=self["@athensCanvas"];
self["@currentCanvas"];
self._setDefaults();
return _st(aBlock)._value_(self["@currentCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
self["@currentCanvas"]=nil;
return self["@currentCanvas"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawDuring:",{aBlock:aBlock},smalltalk.AthensHTMLSurface)})},
args: ["aBlock"],
source: "drawDuring: aBlock\x0a\x0a\x09\x22You may draw on receiver only when inside a block and only using provided canvas object.\x0a\x09This ensures releasing system resources used after finishing drawing\x22\x0a\x0a\x09[currentCanvas := athensCanvas.\x0a\x09\x09self setDefaults.\x0a\x09\x09aBlock value: currentCanvas.\x0a\x09] ensure: [currentCanvas := nil].",
messageSends: ["ensure:", "setDefaults", "value:"],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@extent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.AthensHTMLSurface)})},
args: [],
source: "extent\x0a\x09^ extent",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'accessing',
fn: function (anExtent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@extent"]=anExtent;
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtent:anExtent},smalltalk.AthensHTMLSurface)})},
args: ["anExtent"],
source: "extent: anExtent\x0a\x09extent := anExtent.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@extent"])._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.AthensHTMLSurface)})},
args: [],
source: "height\x0a\x09^ extent y",
messageSends: ["y"],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "newCanvas",
category: 'private',
fn: function (){
var self=this;
function $AthensHTMLCanvas(){return smalltalk.AthensHTMLCanvas||(typeof AthensHTMLCanvas=="undefined"?nil:AthensHTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLCanvas())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCanvas",{},smalltalk.AthensHTMLSurface)})},
args: [],
source: "newCanvas\x0a\x09^ AthensHTMLCanvas on: self",
messageSends: ["on:"],
referencedClasses: ["AthensHTMLCanvas"]
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvasTag"]=_st(html)._canvas();
_st(self["@canvasTag"])._height_(self._height());
_st(self["@canvasTag"])._width_(self._width());
self["@context2D"]=_st(_st(self["@canvasTag"])._element())._getContext_("2d");
self["@athensCanvas"]=self._newCanvas();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.AthensHTMLSurface)})},
args: ["html"],
source: "renderOn: html\x0a\x09canvasTag := html canvas.\x0a\x09canvasTag height: self height.\x0a\x09canvasTag width: self width.\x0a\x09context2D := canvasTag element getContext: '2d'.\x0a\x09athensCanvas := self newCanvas.",
messageSends: ["canvas", "height:", "height", "width:", "width", "getContext:", "element", "newCanvas"],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "setDefaults",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@currentCanvas"])._pathTransform())._loadIdentity();
_st(_st(self["@currentCanvas"])._paintTransform())._loadIdentity();
return self}, function($ctx1) {$ctx1.fill(self,"setDefaults",{},smalltalk.AthensHTMLSurface)})},
args: [],
source: "setDefaults\x0a\x09currentCanvas pathTransform loadIdentity.\x0a\x09currentCanvas paintTransform loadIdentity.",
messageSends: ["loadIdentity", "pathTransform", "paintTransform"],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@extent"])._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.AthensHTMLSurface)})},
args: [],
source: "width\x0a\x09^ extent x",
messageSends: ["x"],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);


smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'instance creation',
fn: function (anExtent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._extent_(anExtent);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtent:anExtent},smalltalk.AthensHTMLSurface.klass)})},
args: ["anExtent"],
source: "extent: anExtent\x0a\x09^ self basicNew\x0a\x09\x09extent: anExtent;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["extent:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface.klass);



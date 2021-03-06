smalltalk.addPackage('Athens-HTML');
smalltalk.addClass('AthensHTMLCanvas', smalltalk.AthensCanvas, ['context2D', 'pathTransform', 'paintTransform', 'currentClipRect', 'font'], 'Athens-HTML');
smalltalk.addMethod(
smalltalk.method({
selector: "clipBy:during:",
fn: function (aShape,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._push();
_st(self["@context2D"])._beginPath();
_st(aShape)._drawOn_(self);
_st(self["@context2D"])._clip();
_st(self["@context2D"])._beginPath();
_st(aBlock)._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@context2D"])._pop();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"clipBy:during:",{aShape:aShape,aBlock:aBlock},smalltalk.AthensHTMLCanvas)})},
messageSends: ["push", "beginPath", "drawOn:", "clip", "ensure:", "pop"]}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "context2D",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context2D"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context2D",{},smalltalk.AthensHTMLCanvas)})},
messageSends: []}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "context2D:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context2D"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"context2D:",{aContext:aContext},smalltalk.AthensHTMLCanvas)})},
messageSends: []}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
fn: function (aPathCreatingBlock){
var self=this;
function $AthensSimplePathBuilder(){return smalltalk.AthensSimplePathBuilder||(typeof AthensSimplePathBuilder=="undefined"?nil:AthensSimplePathBuilder)}
function $AthensHTMLPath(){return smalltalk.AthensHTMLPath||(typeof AthensHTMLPath=="undefined"?nil:AthensHTMLPath)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLPath())._segment_(_st($AthensSimplePathBuilder())._createPath_(aPathCreatingBlock));
return $1;
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aPathCreatingBlock:aPathCreatingBlock},smalltalk.AthensHTMLCanvas)})},
messageSends: ["segment:", "createPath:"]}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._font_(_st(self["@font"])._asHTMLString());
self._drawShape_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"drawString:",{aString:aString},smalltalk.AthensHTMLCanvas)})},
messageSends: ["font:", "asHTMLString", "drawShape:"]}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:from:to:",
fn: function (aString,start,end){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._drawString_(_st(aString)._copyFrom_to_(start,end));
return $1;
}, function($ctx1) {$ctx1.fill(self,"drawString:from:to:",{aString:aString,start:start,end:end},smalltalk.AthensHTMLCanvas)})},
messageSends: ["drawString:", "copyFrom:to:"]}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "measureStringWidth:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@context2D"])._font_(_st(self["@font"])._asHTMLString());
$1=_st(self["@context2D"])._measureStringWidth_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"measureStringWidth:",{aString:aString},smalltalk.AthensHTMLCanvas)})},
messageSends: ["font:", "asHTMLString", "measureStringWidth:"]}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "newPath",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@surface']['@context2D'].beginPath(); ;
return self}, function($ctx1) {$ctx1.fill(self,"newPath",{},smalltalk.AthensHTMLCanvas)})},
messageSends: []}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paintTransform",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@paintTransform"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"paintTransform",{},smalltalk.AthensHTMLCanvas)})},
messageSends: []}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "pathTransform",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@pathTransform"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pathTransform",{},smalltalk.AthensHTMLCanvas)})},
messageSends: []}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "setFont:",
fn: function (aFont){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@font"]=aFont;
return self}, function($ctx1) {$ctx1.fill(self,"setFont:",{aFont:aFont},smalltalk.AthensHTMLCanvas)})},
messageSends: []}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
fn: function (anHTMLSurface){
var self=this;
function $AthensHTMLTransformation(){return smalltalk.AthensHTMLTransformation||(typeof AthensHTMLTransformation=="undefined"?nil:AthensHTMLTransformation)}
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
function $AthensHTMLPaintMode(){return smalltalk.AthensHTMLPaintMode||(typeof AthensHTMLPaintMode=="undefined"?nil:AthensHTMLPaintMode)}
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=anHTMLSurface;
self["@pathTransform"]=_st($AthensHTMLTransformation())._on_(self["@surface"]);
self["@paintTransform"]=_st($AthensAffineTransform())._new();
self["@paintMode"]=_st($AthensHTMLPaintMode())._on_(self["@surface"]);
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensHTMLCanvas)})},
messageSends: ["on:", "new"]}),
smalltalk.AthensHTMLCanvas);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (anHTMLSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._surface_(anHTMLSurface);
_st($2)._context2D_(_st(anHTMLSurface)._context2D());
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensHTMLCanvas.klass)})},
messageSends: ["surface:", "basicNew", "context2D:", "context2D", "initialize", "yourself"]}),
smalltalk.AthensHTMLCanvas.klass);


smalltalk.addClass('AthensHTMLPaintMode', smalltalk.AthensPaintMode, ['context2D', 'surface'], 'Athens-HTML');
smalltalk.addMethod(
smalltalk.method({
selector: "atop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("source-atop");
return self}, function($ctx1) {$ctx1.fill(self,"atop",{},smalltalk.AthensHTMLPaintMode)})},
messageSends: ["globalCompositeOperation:"]}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "availableModes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["atop", "darken", "destAtop", "destIn", "destOut", "destOver", "in", "lighten", "out", "over", "xor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"availableModes",{},smalltalk.AthensHTMLPaintMode)})},
messageSends: []}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "darken",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("darker");
return self}, function($ctx1) {$ctx1.fill(self,"darken",{},smalltalk.AthensHTMLPaintMode)})},
messageSends: ["globalCompositeOperation:"]}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "destAtop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("destination-atop");
return self}, function($ctx1) {$ctx1.fill(self,"destAtop",{},smalltalk.AthensHTMLPaintMode)})},
messageSends: ["globalCompositeOperation:"]}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "destIn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("destination-in");
return self}, function($ctx1) {$ctx1.fill(self,"destIn",{},smalltalk.AthensHTMLPaintMode)})},
messageSends: ["globalCompositeOperation:"]}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "destOut",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("destination-out");
return self}, function($ctx1) {$ctx1.fill(self,"destOut",{},smalltalk.AthensHTMLPaintMode)})},
messageSends: ["globalCompositeOperation:"]}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "destOver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("destination-over");
return self}, function($ctx1) {$ctx1.fill(self,"destOver",{},smalltalk.AthensHTMLPaintMode)})},
messageSends: ["globalCompositeOperation:"]}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "in",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("source-in");
return self}, function($ctx1) {$ctx1.fill(self,"in",{},smalltalk.AthensHTMLPaintMode)})},
messageSends: ["globalCompositeOperation:"]}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("lighter");
return self}, function($ctx1) {$ctx1.fill(self,"lighten",{},smalltalk.AthensHTMLPaintMode)})},
messageSends: ["globalCompositeOperation:"]}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "out",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("source-out");
return self}, function($ctx1) {$ctx1.fill(self,"out",{},smalltalk.AthensHTMLPaintMode)})},
messageSends: ["globalCompositeOperation:"]}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "over",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("source-over");
return self}, function($ctx1) {$ctx1.fill(self,"over",{},smalltalk.AthensHTMLPaintMode)})},
messageSends: ["globalCompositeOperation:"]}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "restoreAfter:",
fn: function (aBlock){
var self=this;
var previous;
return smalltalk.withContext(function($ctx1) { 
previous=_st(self["@context2D"])._globalCompositeOperation();
_st(aBlock)._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@context2D"])._globalCompositeOperation_(previous);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock,previous:previous},smalltalk.AthensHTMLPaintMode)})},
messageSends: ["globalCompositeOperation", "ensure:", "globalCompositeOperation:"]}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=aSurface;
self["@context2D"]=_st(aSurface)._context2D();
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},smalltalk.AthensHTMLPaintMode)})},
messageSends: ["context2D"]}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "xor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("xor");
return self}, function($ctx1) {$ctx1.fill(self,"xor",{},smalltalk.AthensHTMLPaintMode)})},
messageSends: ["globalCompositeOperation:"]}),
smalltalk.AthensHTMLPaintMode);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._surface_(aSurface);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aSurface:aSurface},smalltalk.AthensHTMLPaintMode.klass)})},
messageSends: ["surface:", "new", "yourself"]}),
smalltalk.AthensHTMLPaintMode.klass);


smalltalk.addClass('AthensHTMLSurface', smalltalk.AthensSurface, ['extent', 'canvasTag', 'context2D', 'athensCanvas', 'boundsRect', 'transparentColor'], 'Athens-HTML');
smalltalk.addMethod(
smalltalk.method({
selector: "appendToBrush:",
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._appendToJQuery_(_st(aTagBrush)._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},smalltalk.AthensHTMLSurface)})},
messageSends: ["appendToJQuery:", "asJQuery"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToJQuery:",
fn: function (aJQuery){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self._renderOn_(_st($HTMLCanvas())._onJQuery_(aJQuery));
return self}, function($ctx1) {$ctx1.fill(self,"appendToJQuery:",{aJQuery:aJQuery},smalltalk.AthensHTMLSurface)})},
messageSends: ["renderOn:", "onJQuery:"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "asAthensPaintOn:",
fn: function (aCanvas){
var self=this;
function $AthensHTMLPatternSurfacePaint(){return smalltalk.AthensHTMLPatternSurfacePaint||(typeof AthensHTMLPatternSurfacePaint=="undefined"?nil:AthensHTMLPatternSurfacePaint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLPatternSurfacePaint())._forSurface_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{aCanvas:aCanvas},smalltalk.AthensHTMLSurface)})},
messageSends: ["forSurface:"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasTag",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvasTag"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvasTag",{},smalltalk.AthensHTMLSurface)})},
messageSends: []}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasTag:",
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvasTag"]=aTagBrush;
return self}, function($ctx1) {$ctx1.fill(self,"canvasTag:",{aTagBrush:aTagBrush},smalltalk.AthensHTMLSurface)})},
messageSends: []}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._clear_(self["@transparentColor"]);
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.AthensHTMLSurface)})},
messageSends: ["clear:"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "clear:",
fn: function (clearPaint){
var self=this;
var canvas;
return smalltalk.withContext(function($ctx1) { 
canvas=self["@currentCanvas"];
_st(_st(canvas)._pathTransform())._restoreAfter_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(canvas)._pathTransform())._loadIdentity();
return _st(_st(canvas)._paintMode())._restoreAfter_((function(){
return smalltalk.withContext(function($ctx3) {
_st(self["@context2D"])._globalCompositeOperation_("source-over");
_st(self["@context2D"])._clearRect_(_st((0).__at((0)))._corner_(self["@extent"]));
_st(canvas)._setPaint_(clearPaint);
return _st(canvas)._drawShape_(self["@boundsRect"]);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"clear:",{clearPaint:clearPaint,canvas:canvas},smalltalk.AthensHTMLSurface)})},
messageSends: ["restoreAfter:", "loadIdentity", "pathTransform", "globalCompositeOperation:", "clearRect:", "corner:", "@", "setPaint:", "drawShape:", "paintMode"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "context2D",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context2D"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context2D",{},smalltalk.AthensHTMLSurface)})},
messageSends: []}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createBitmapPaint:",
fn: function (aBitmap){
var self=this;
function $AthensHTMLBitmapPaint(){return smalltalk.AthensHTMLBitmapPaint||(typeof AthensHTMLBitmapPaint=="undefined"?nil:AthensHTMLBitmapPaint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLBitmapPaint())._fromImage_(aBitmap);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createBitmapPaint:",{aBitmap:aBitmap},smalltalk.AthensHTMLSurface)})},
messageSends: ["fromImage:"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createBitmapPaint:afterLoading:",
fn: function (aBitmap,aBlock){
var self=this;
function $AthensHTMLBitmapPaint(){return smalltalk.AthensHTMLBitmapPaint||(typeof AthensHTMLBitmapPaint=="undefined"?nil:AthensHTMLBitmapPaint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLBitmapPaint())._fromImage_afterLoading_(aBitmap,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createBitmapPaint:afterLoading:",{aBitmap:aBitmap,aBlock:aBlock},smalltalk.AthensHTMLSurface)})},
messageSends: ["fromImage:afterLoading:"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createLinearGradient:start:stop:",
fn: function (aColorRamp,aStartPoint,aStopPoint){
var self=this;
function $AthensHTMLGradientPaint(){return smalltalk.AthensHTMLGradientPaint||(typeof AthensHTMLGradientPaint=="undefined"?nil:AthensHTMLGradientPaint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLGradientPaint())._createLinearGradient_start_stop_(aColorRamp,aStartPoint,aStopPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:start:stop:",{aColorRamp:aColorRamp,aStartPoint:aStartPoint,aStopPoint:aStopPoint},smalltalk.AthensHTMLSurface)})},
messageSends: ["createLinearGradient:start:stop:"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
fn: function (aPathCreatingBlock){
var self=this;
function $AthensSimplePathBuilder(){return smalltalk.AthensSimplePathBuilder||(typeof AthensSimplePathBuilder=="undefined"?nil:AthensSimplePathBuilder)}
function $AthensHTMLPath(){return smalltalk.AthensHTMLPath||(typeof AthensHTMLPath=="undefined"?nil:AthensHTMLPath)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLPath())._segment_(_st($AthensSimplePathBuilder())._createPath_(aPathCreatingBlock));
return $1;
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aPathCreatingBlock:aPathCreatingBlock},smalltalk.AthensHTMLSurface)})},
messageSends: ["segment:", "createPath:"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createRadialGradient:center:radius:focalPoint:",
fn: function (colorRamp,aCenter,aRadius,fp){
var self=this;
function $AthensHTMLGradientPaint(){return smalltalk.AthensHTMLGradientPaint||(typeof AthensHTMLGradientPaint=="undefined"?nil:AthensHTMLGradientPaint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLGradientPaint())._radialBetween_extending_and_extending_withColorRamp_(fp,(0),aCenter,aRadius,colorRamp);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createRadialGradient:center:radius:focalPoint:",{colorRamp:colorRamp,aCenter:aCenter,aRadius:aRadius,fp:fp},smalltalk.AthensHTMLSurface)})},
messageSends: ["radialBetween:extending:and:extending:withColorRamp:"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createSolidColorPaint:",
fn: function (aColor){
var self=this;
function $AthensHTMLSolidPaint(){return smalltalk.AthensHTMLSolidPaint||(typeof AthensHTMLSolidPaint=="undefined"?nil:AthensHTMLSolidPaint)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($AthensHTMLSolidPaint())._new();
_st($2)._color_(aColor);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"createSolidColorPaint:",{aColor:aColor},smalltalk.AthensHTMLSurface)})},
messageSends: ["color:", "new", "yourself"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createStrokePaintFor:",
fn: function (aPaint){
var self=this;
function $AthensHTMLStrokePaint(){return smalltalk.AthensHTMLStrokePaint||(typeof AthensHTMLStrokePaint=="undefined"?nil:AthensHTMLStrokePaint)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($AthensHTMLStrokePaint())._new();
_st($2)._fillPaint_(aPaint);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"createStrokePaintFor:",{aPaint:aPaint},smalltalk.AthensHTMLSurface)})},
messageSends: ["fillPaint:", "new", "yourself"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "drawDuring:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentCanvas"]=self["@athensCanvas"];
self._setDefaults();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(self["@currentCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
self["@currentCanvas"]=nil;
return self["@currentCanvas"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawDuring:",{aBlock:aBlock},smalltalk.AthensHTMLSurface)})},
messageSends: ["setDefaults", "ensure:", "value:"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@extent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.AthensHTMLSurface)})},
messageSends: []}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (anExtent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@extent"]=anExtent;
self["@boundsRect"]=_st((0).__at((0)))._corner_(anExtent);
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtent:anExtent},smalltalk.AthensHTMLSurface)})},
messageSends: ["corner:", "@"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@extent"])._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.AthensHTMLSurface)})},
messageSends: ["y"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@transparentColor"]=_st($Color())._transparent();
smalltalk.AthensSurface.fn.prototype._initialize.apply(_st(self), []);
self._initializeCanvas();
_st(self["@canvasTag"])._height_(self._height());
_st(self["@canvasTag"])._width_(self._width());
self["@context2D"]=_st(self["@canvasTag"])._getContext_("2d");
self["@athensCanvas"]=self._newCanvas();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLSurface)})},
messageSends: ["transparent", "initialize", "initializeCanvas", "height:", "height", "width:", "width", "getContext:", "newCanvas"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeCanvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@canvasTag'] = document.createElement('canvas'); ;
return self}, function($ctx1) {$ctx1.fill(self,"initializeCanvas",{},smalltalk.AthensHTMLSurface)})},
messageSends: []}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "newCanvas",
fn: function (){
var self=this;
function $AthensHTMLCanvas(){return smalltalk.AthensHTMLCanvas||(typeof AthensHTMLCanvas=="undefined"?nil:AthensHTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLCanvas())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCanvas",{},smalltalk.AthensHTMLSurface)})},
messageSends: ["on:"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($TagBrush())._fromJQuery_canvas_(_st(self["@canvasTag"])._asJQuery(),html));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.AthensHTMLSurface)})},
messageSends: ["with:", "fromJQuery:canvas:", "asJQuery"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "setDefaults",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@currentCanvas"])._paintMode())._over();
_st(_st(self["@currentCanvas"])._pathTransform())._loadIdentity();
_st(_st(self["@currentCanvas"])._paintTransform())._loadIdentity();
_st(self["@context2D"])._lineJoin_("miter");
_st(self["@context2D"])._miterLimit_((10));
_st(self["@context2D"])._lineCap_("butt");
return self}, function($ctx1) {$ctx1.fill(self,"setDefaults",{},smalltalk.AthensHTMLSurface)})},
messageSends: ["over", "paintMode", "loadIdentity", "pathTransform", "paintTransform", "lineJoin:", "miterLimit:", "lineCap:"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@extent"])._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.AthensHTMLSurface)})},
messageSends: ["x"]}),
smalltalk.AthensHTMLSurface);


smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
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
messageSends: ["extent:", "basicNew", "initialize", "yourself"]}),
smalltalk.AthensHTMLSurface.klass);


smalltalk.addMethod(
smalltalk.method({
selector: "paintFillsUsing:on:",
fn: function (aPaint,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aPaint)._drawString_on_(self,anAthensCanvas);
return self}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},smalltalk.String)})},
messageSends: ["drawString:on:"]}),
smalltalk.String);


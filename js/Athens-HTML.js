smalltalk.addPackage('Athens-HTML');
smalltalk.addClass('AthensHTMLCanvas', smalltalk.AthensCanvas, ['context2D', 'pathTransform', 'paintTransform', 'currentClipRect', 'font'], 'Athens-HTML');
smalltalk.addMethod(
smalltalk.method({
selector: "clipBy:during:",
category: 'clipping',
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
args: ["aShape", "aBlock"],
source: "clipBy: aShape during: aBlock\x0a\x09context2D push.\x0a\x09context2D beginPath.\x0a\x09aShape drawOn: self.\x0a\x09context2D clip.\x0a\x09context2D beginPath.\x0a\x09aBlock ensure: [context2D pop].",
messageSends: ["push", "beginPath", "drawOn:", "clip", "ensure:", "pop"],
referencedClasses: []
}),
smalltalk.AthensHTMLCanvas);

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
}, function($ctx1) {$ctx1.fill(self,"context2D",{},smalltalk.AthensHTMLCanvas)})},
args: [],
source: "context2D\x0a\x09^ context2D",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "context2D:",
category: 'accessing',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context2D"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"context2D:",{aContext:aContext},smalltalk.AthensHTMLCanvas)})},
args: ["aContext"],
source: "context2D: aContext\x0a\x09context2D := aContext.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
category: 'creation',
fn: function (aPathCreatingBlock){
var self=this;
function $AthensSimplePathBuilder(){return smalltalk.AthensSimplePathBuilder||(typeof AthensSimplePathBuilder=="undefined"?nil:AthensSimplePathBuilder)}
function $AthensHTMLPath(){return smalltalk.AthensHTMLPath||(typeof AthensHTMLPath=="undefined"?nil:AthensHTMLPath)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLPath())._segment_(_st($AthensSimplePathBuilder())._createPath_(aPathCreatingBlock));
return $1;
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aPathCreatingBlock:aPathCreatingBlock},smalltalk.AthensHTMLCanvas)})},
args: ["aPathCreatingBlock"],
source: "createPath: aPathCreatingBlock\x0a\x09^ AthensHTMLPath segment: (AthensSimplePathBuilder createPath: aPathCreatingBlock)",
messageSends: ["segment:", "createPath:"],
referencedClasses: ["AthensSimplePathBuilder", "AthensHTMLPath"]
}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:",
category: 'drawing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._font_(_st(self["@font"])._asHTMLString());
self._drawShape_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"drawString:",{aString:aString},smalltalk.AthensHTMLCanvas)})},
args: ["aString"],
source: "drawString: aString\x0a\x09context2D font: font asHTMLString.\x0a\x09self drawShape: aString.",
messageSends: ["font:", "asHTMLString", "drawShape:"],
referencedClasses: []
}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:from:to:",
category: 'drawing',
fn: function (aString,start,end){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._drawString_(_st(aString)._copyFrom_to_(start,end));
return $1;
}, function($ctx1) {$ctx1.fill(self,"drawString:from:to:",{aString:aString,start:start,end:end},smalltalk.AthensHTMLCanvas)})},
args: ["aString", "start", "end"],
source: "drawString: aString from: start to: end\x0a\x09^ self drawString: (aString copyFrom: start to: end)",
messageSends: ["drawString:", "copyFrom:to:"],
referencedClasses: []
}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "measureStringWidth:",
category: 'drawing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@context2D"])._font_(_st(self["@font"])._asHTMLString());
$1=_st(self["@context2D"])._measureStringWidth_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"measureStringWidth:",{aString:aString},smalltalk.AthensHTMLCanvas)})},
args: ["aString"],
source: "measureStringWidth: aString\x0a\x09context2D font: font asHTMLString.\x0a\x09^ context2D measureStringWidth: aString",
messageSends: ["font:", "asHTMLString", "measureStringWidth:"],
referencedClasses: []
}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "newPath",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@surface']['@context2D'].beginPath(); ;
return self}, function($ctx1) {$ctx1.fill(self,"newPath",{},smalltalk.AthensHTMLCanvas)})},
args: [],
source: "newPath\x0a\x09< self['@surface']['@context2D'].beginPath(); >",
messageSends: [],
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
selector: "setFont:",
category: 'accessing',
fn: function (aFont){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@font"]=aFont;
return self}, function($ctx1) {$ctx1.fill(self,"setFont:",{aFont:aFont},smalltalk.AthensHTMLCanvas)})},
args: ["aFont"],
source: "setFont: aFont\x0a\x09font := aFont.",
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
function $AthensHTMLTransformation(){return smalltalk.AthensHTMLTransformation||(typeof AthensHTMLTransformation=="undefined"?nil:AthensHTMLTransformation)}
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
function $AthensHTMLPaintMode(){return smalltalk.AthensHTMLPaintMode||(typeof AthensHTMLPaintMode=="undefined"?nil:AthensHTMLPaintMode)}
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=anHTMLSurface;
self["@pathTransform"]=_st($AthensHTMLTransformation())._on_(self["@surface"]);
self["@paintTransform"]=_st($AthensAffineTransform())._new();
self["@paintMode"]=_st($AthensHTMLPaintMode())._on_(self["@surface"]);
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensHTMLCanvas)})},
args: ["anHTMLSurface"],
source: "surface: anHTMLSurface\x0a\x09surface := anHTMLSurface.\x0a\x09pathTransform := AthensHTMLTransformation on: surface.\x0a\x09paintTransform := AthensAffineTransform new.\x0a\x09paintMode := AthensHTMLPaintMode on: surface.",
messageSends: ["on:", "new"],
referencedClasses: ["AthensHTMLTransformation", "AthensAffineTransform", "AthensHTMLPaintMode"]
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
_st($2)._context2D_(_st(anHTMLSurface)._context2D());
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensHTMLCanvas.klass)})},
args: ["anHTMLSurface"],
source: "on: anHTMLSurface\x0a\x09^ self basicNew\x0a\x09\x09surface: anHTMLSurface;\x0a\x09\x09context2D: anHTMLSurface context2D;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["surface:", "basicNew", "context2D:", "context2D", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLCanvas.klass);


smalltalk.addClass('AthensHTMLPaintMode', smalltalk.AthensPaintMode, ['context2D', 'surface'], 'Athens-HTML');
smalltalk.addMethod(
smalltalk.method({
selector: "atop",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("source-atop");
return self}, function($ctx1) {$ctx1.fill(self,"atop",{},smalltalk.AthensHTMLPaintMode)})},
args: [],
source: "atop\x0a\x09context2D globalCompositeOperation: 'source-atop'.",
messageSends: ["globalCompositeOperation:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "availableModes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["atop", "darken", "destAtop", "destIn", "destOut", "destOver", "in", "lighten", "out", "over", "xor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"availableModes",{},smalltalk.AthensHTMLPaintMode)})},
args: [],
source: "availableModes\x0a\x09^ #(atop darken destAtop destIn destOut destOver in lighten out over xor)",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "darken",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("darker");
return self}, function($ctx1) {$ctx1.fill(self,"darken",{},smalltalk.AthensHTMLPaintMode)})},
args: [],
source: "darken\x0a\x09context2D globalCompositeOperation: 'darker'.",
messageSends: ["globalCompositeOperation:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "destAtop",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("destination-atop");
return self}, function($ctx1) {$ctx1.fill(self,"destAtop",{},smalltalk.AthensHTMLPaintMode)})},
args: [],
source: "destAtop\x0a\x09context2D globalCompositeOperation: 'destination-atop'.",
messageSends: ["globalCompositeOperation:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "destIn",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("destination-in");
return self}, function($ctx1) {$ctx1.fill(self,"destIn",{},smalltalk.AthensHTMLPaintMode)})},
args: [],
source: "destIn\x0a\x09context2D globalCompositeOperation: 'destination-in'.",
messageSends: ["globalCompositeOperation:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "destOut",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("destination-out");
return self}, function($ctx1) {$ctx1.fill(self,"destOut",{},smalltalk.AthensHTMLPaintMode)})},
args: [],
source: "destOut\x0a\x09context2D globalCompositeOperation: 'destination-out'.",
messageSends: ["globalCompositeOperation:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "destOver",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("destination-over");
return self}, function($ctx1) {$ctx1.fill(self,"destOver",{},smalltalk.AthensHTMLPaintMode)})},
args: [],
source: "destOver\x0a\x09context2D globalCompositeOperation: 'destination-over'.",
messageSends: ["globalCompositeOperation:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "in",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("source-in");
return self}, function($ctx1) {$ctx1.fill(self,"in",{},smalltalk.AthensHTMLPaintMode)})},
args: [],
source: "in\x0a\x09context2D globalCompositeOperation: 'source-in'.",
messageSends: ["globalCompositeOperation:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("lighter");
return self}, function($ctx1) {$ctx1.fill(self,"lighten",{},smalltalk.AthensHTMLPaintMode)})},
args: [],
source: "lighten\x0a\x09context2D globalCompositeOperation: 'lighter'.",
messageSends: ["globalCompositeOperation:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "out",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("source-out");
return self}, function($ctx1) {$ctx1.fill(self,"out",{},smalltalk.AthensHTMLPaintMode)})},
args: [],
source: "out\x0a\x09context2D globalCompositeOperation: 'source-out'.",
messageSends: ["globalCompositeOperation:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "over",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("source-over");
return self}, function($ctx1) {$ctx1.fill(self,"over",{},smalltalk.AthensHTMLPaintMode)})},
args: [],
source: "over\x0a\x09context2D globalCompositeOperation: 'source-over'.",
messageSends: ["globalCompositeOperation:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "restoreAfter:",
category: 'convenience',
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
args: ["aBlock"],
source: "restoreAfter: aBlock\x0a\x09|previous|\x0a\x09previous := context2D globalCompositeOperation.\x0a\x09aBlock ensure: [context2D globalCompositeOperation: previous].",
messageSends: ["globalCompositeOperation", "ensure:", "globalCompositeOperation:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
category: 'accessing',
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=aSurface;
self["@context2D"]=_st(aSurface)._context2D();
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},smalltalk.AthensHTMLPaintMode)})},
args: ["aSurface"],
source: "surface: aSurface\x0a\x09surface := aSurface.\x0a\x09context2D := aSurface context2D.",
messageSends: ["context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "xor",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._globalCompositeOperation_("xor");
return self}, function($ctx1) {$ctx1.fill(self,"xor",{},smalltalk.AthensHTMLPaintMode)})},
args: [],
source: "xor\x0a\x09context2D globalCompositeOperation: 'xor'.",
messageSends: ["globalCompositeOperation:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaintMode);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
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
args: ["aSurface"],
source: "on: aSurface\x0a\x09^ self new\x0a\x09\x09surface: aSurface;\x0a\x09\x09yourself",
messageSends: ["surface:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaintMode.klass);


smalltalk.addClass('AthensHTMLSurface', smalltalk.AthensSurface, ['extent', 'canvasTag', 'context2D', 'athensCanvas', 'boundsRect', 'transparentColor'], 'Athens-HTML');
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
selector: "asAthensPaintOn:",
category: 'converting',
fn: function (aCanvas){
var self=this;
function $AthensHTMLPatternSurfacePaint(){return smalltalk.AthensHTMLPatternSurfacePaint||(typeof AthensHTMLPatternSurfacePaint=="undefined"?nil:AthensHTMLPatternSurfacePaint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLPatternSurfacePaint())._forSurface_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{aCanvas:aCanvas},smalltalk.AthensHTMLSurface)})},
args: ["aCanvas"],
source: "asAthensPaintOn: aCanvas\x0a\x09^ AthensHTMLPatternSurfacePaint forSurface: self",
messageSends: ["forSurface:"],
referencedClasses: ["AthensHTMLPatternSurfacePaint"]
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
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._clear_(self["@transparentColor"]);
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.AthensHTMLSurface)})},
args: [],
source: "clear\x0a\x09self clear: transparentColor.",
messageSends: ["clear:"],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "clear:",
category: 'drawing',
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
args: ["clearPaint"],
source: "clear: clearPaint\x0a\x09|canvas|\x0a\x09canvas := currentCanvas.\x0a\x09canvas pathTransform restoreAfter: [\x0a\x09\x09canvas pathTransform loadIdentity.\x0a\x09\x09canvas paintMode restoreAfter: [\x0a\x09\x09\x09context2D globalCompositeOperation: 'source-over'.\x0a\x09\x09\x09context2D clearRect: (0@0 corner: extent).\x0a\x09\x09\x09canvas setPaint: clearPaint.\x0a\x09\x09\x09canvas drawShape: boundsRect]].",
messageSends: ["restoreAfter:", "loadIdentity", "pathTransform", "globalCompositeOperation:", "clearRect:", "corner:", "@", "setPaint:", "drawShape:", "paintMode"],
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
$1=_st($AthensHTMLBitmapPaint())._fromImage_(aBitmap);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createBitmapPaint:",{aBitmap:aBitmap},smalltalk.AthensHTMLSurface)})},
args: ["aBitmap"],
source: "createBitmapPaint: aBitmap\x0a\x09^ AthensHTMLBitmapPaint fromImage: aBitmap",
messageSends: ["fromImage:"],
referencedClasses: ["AthensHTMLBitmapPaint"]
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createBitmapPaint:afterLoading:",
category: 'paints',
fn: function (aBitmap,aBlock){
var self=this;
function $AthensHTMLBitmapPaint(){return smalltalk.AthensHTMLBitmapPaint||(typeof AthensHTMLBitmapPaint=="undefined"?nil:AthensHTMLBitmapPaint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLBitmapPaint())._fromImage_afterLoading_(aBitmap,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createBitmapPaint:afterLoading:",{aBitmap:aBitmap,aBlock:aBlock},smalltalk.AthensHTMLSurface)})},
args: ["aBitmap", "aBlock"],
source: "createBitmapPaint: aBitmap afterLoading: aBlock\x0a\x09^ AthensHTMLBitmapPaint fromImage: aBitmap afterLoading: aBlock",
messageSends: ["fromImage:afterLoading:"],
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
$1=_st($AthensHTMLGradientPaint())._createLinearGradient_start_stop_(aColorRamp,aStartPoint,aStopPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:start:stop:",{aColorRamp:aColorRamp,aStartPoint:aStartPoint,aStopPoint:aStopPoint},smalltalk.AthensHTMLSurface)})},
args: ["aColorRamp", "aStartPoint", "aStopPoint"],
source: "createLinearGradient: aColorRamp start: aStartPoint stop: aStopPoint\x0a\x09^ AthensHTMLGradientPaint \x0a\x09\x09createLinearGradient: aColorRamp \x0a\x09\x09start: aStartPoint \x0a\x09\x09stop: aStopPoint",
messageSends: ["createLinearGradient:start:stop:"],
referencedClasses: ["AthensHTMLGradientPaint"]
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
category: 'creation',
fn: function (aPathCreatingBlock){
var self=this;
function $AthensSimplePathBuilder(){return smalltalk.AthensSimplePathBuilder||(typeof AthensSimplePathBuilder=="undefined"?nil:AthensSimplePathBuilder)}
function $AthensHTMLPath(){return smalltalk.AthensHTMLPath||(typeof AthensHTMLPath=="undefined"?nil:AthensHTMLPath)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLPath())._segment_(_st($AthensSimplePathBuilder())._createPath_(aPathCreatingBlock));
return $1;
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aPathCreatingBlock:aPathCreatingBlock},smalltalk.AthensHTMLSurface)})},
args: ["aPathCreatingBlock"],
source: "createPath: aPathCreatingBlock\x0a\x09^ AthensHTMLPath segment: (AthensSimplePathBuilder createPath: aPathCreatingBlock)",
messageSends: ["segment:", "createPath:"],
referencedClasses: ["AthensSimplePathBuilder", "AthensHTMLPath"]
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
$1=_st($AthensHTMLGradientPaint())._radialBetween_extending_and_extending_withColorRamp_(fp,(0),aCenter,aRadius,colorRamp);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createRadialGradient:center:radius:focalPoint:",{colorRamp:colorRamp,aCenter:aCenter,aRadius:aRadius,fp:fp},smalltalk.AthensHTMLSurface)})},
args: ["colorRamp", "aCenter", "aRadius", "fp"],
source: "createRadialGradient: colorRamp center: aCenter radius: aRadius focalPoint: fp\x0a\x09^AthensHTMLGradientPaint\x09\x0a\x09\x09radialBetween: fp\x0a\x09\x09extending: 0\x0a\x09\x09and: aCenter\x0a\x09\x09extending: aRadius\x0a\x09\x09withColorRamp: colorRamp",
messageSends: ["radialBetween:extending:and:extending:withColorRamp:"],
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
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"createSolidColorPaint:",{aColor:aColor},smalltalk.AthensHTMLSurface)})},
args: ["aColor"],
source: "createSolidColorPaint: aColor \x0a\x09^ AthensHTMLSolidPaint new \x0a\x09\x09color: aColor;\x0a\x09\x09yourself",
messageSends: ["color:", "new", "yourself"],
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
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"createStrokePaintFor:",{aPaint:aPaint},smalltalk.AthensHTMLSurface)})},
args: ["aPaint"],
source: "createStrokePaintFor: aPaint\x0a\x09^ AthensHTMLStrokePaint new \x0a\x09\x09fillPaint: aPaint;\x0a\x09\x09yourself",
messageSends: ["fillPaint:", "new", "yourself"],
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
args: ["aBlock"],
source: "drawDuring: aBlock\x0a\x09currentCanvas := athensCanvas.\x0a\x09self setDefaults.\x0a\x09[aBlock value: currentCanvas] ensure: [currentCanvas := nil].",
messageSends: ["setDefaults", "ensure:", "value:"],
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
self["@boundsRect"]=_st((0).__at((0)))._corner_(anExtent);
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtent:anExtent},smalltalk.AthensHTMLSurface)})},
args: ["anExtent"],
source: "extent: anExtent\x0a\x09extent := anExtent.\x0a\x09boundsRect := 0@0 corner: anExtent.",
messageSends: ["corner:", "@"],
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
selector: "initialize",
category: 'initialization',
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
args: [],
source: "initialize\x0a\x09transparentColor := Color transparent.\x0a\x09super initialize.\x0a\x09self initializeCanvas.\x0a\x09canvasTag height: self height.\x0a\x09canvasTag width: self width.\x0a\x09context2D := canvasTag getContext: '2d'.\x0a\x09athensCanvas := self newCanvas.",
messageSends: ["transparent", "initialize", "initializeCanvas", "height:", "height", "width:", "width", "getContext:", "newCanvas"],
referencedClasses: ["Color"]
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeCanvas",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@canvasTag'] = document.createElement('canvas'); ;
return self}, function($ctx1) {$ctx1.fill(self,"initializeCanvas",{},smalltalk.AthensHTMLSurface)})},
args: [],
source: "initializeCanvas\x0a\x09< self['@canvasTag'] = document.createElement('canvas'); >",
messageSends: [],
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
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($TagBrush())._fromJQuery_canvas_(_st(self["@canvasTag"])._asJQuery(),html));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.AthensHTMLSurface)})},
args: ["html"],
source: "renderOn: html\x0a\x09html with: (TagBrush fromJQuery: canvasTag asJQuery canvas: html).",
messageSends: ["with:", "fromJQuery:canvas:", "asJQuery"],
referencedClasses: ["TagBrush"]
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "setDefaults",
category: 'private',
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
args: [],
source: "setDefaults\x0a\x09currentCanvas paintMode over.\x0a\x09currentCanvas pathTransform loadIdentity.\x0a\x09currentCanvas paintTransform loadIdentity.\x0a\x09\x0a\x09context2D lineJoin: 'miter'.\x0a\x09context2D miterLimit: 10.\x0a\x09context2D lineCap: 'butt'.",
messageSends: ["over", "paintMode", "loadIdentity", "pathTransform", "paintTransform", "lineJoin:", "miterLimit:", "lineCap:"],
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


smalltalk.addMethod(
smalltalk.method({
selector: "paintFillsUsing:on:",
category: '*Athens-HTML',
fn: function (aPaint,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aPaint)._drawString_on_(self,anAthensCanvas);
return self}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},smalltalk.String)})},
args: ["aPaint", "anAthensCanvas"],
source: "paintFillsUsing: aPaint on: anAthensCanvas\x0a\x09aPaint drawString: self on: anAthensCanvas.",
messageSends: ["drawString:on:"],
referencedClasses: []
}),
smalltalk.String);


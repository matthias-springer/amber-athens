smalltalk.addPackage('Athens-HTML-Paints');
smalltalk.addClass('AthensHTMLPaint', smalltalk.AthensPaint, ['fillStyle'], 'Athens-HTML-Paints');
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
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPaint)})},
args: ["anAthensCanvas"],
source: "asAthensPaintOn: anAthensCanvas\x09\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:on:",
category: 'drawing',
fn: function (aString,anAthensCanvas){
var self=this;
var context2D;
return smalltalk.withContext(function($ctx1) { 
context2D=_st(anAthensCanvas)._context2D();
self._preparePaintFor_(context2D);
_st(context2D)._beginPath();
_st(context2D)._fillStyle_(self["@fillStyle"]);
_st(context2D)._fillText_X_Y_(aString,(0),(0));
return self}, function($ctx1) {$ctx1.fill(self,"drawString:on:",{aString:aString,anAthensCanvas:anAthensCanvas,context2D:context2D},smalltalk.AthensHTMLPaint)})},
args: ["aString", "anAthensCanvas"],
source: "drawString: aString on: anAthensCanvas\x0a\x09|context2D|\x0a\x09context2D := anAthensCanvas context2D.\x0a\x09self preparePaintFor: context2D.\x0a\x09context2D beginPath.\x0a\x09\x22TODO: apply paint transform, but how?\x22\x0a\x09context2D fillStyle: fillStyle.\x0a\x09context2D fillText: aString X: 0 Y: 0.",
messageSends: ["context2D", "preparePaintFor:", "beginPath", "fillStyle:", "fillText:X:Y:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
category: 'drawing',
fn: function (aPath,anAthensCanvas){
var self=this;
var context2D;
return smalltalk.withContext(function($ctx1) { 
context2D=_st(anAthensCanvas)._context2D();
self._preparePaintFor_(context2D);
_st(context2D)._beginPath();
_st(aPath)._drawOn_(anAthensCanvas);
_st(context2D)._push();
_st(_st(anAthensCanvas)._pathTransform())._multiplyBy_(_st(anAthensCanvas)._paintTransform());
_st(context2D)._fillStyle_(self["@fillStyle"]);
_st(context2D)._fill();
_st(context2D)._pop();
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas,context2D:context2D},smalltalk.AthensHTMLPaint)})},
args: ["aPath", "anAthensCanvas"],
source: "fillPath: aPath on: anAthensCanvas\x0a\x09|context2D|\x0a\x09context2D := anAthensCanvas context2D.\x0a\x09self preparePaintFor: context2D.\x0a\x09context2D beginPath.\x0a\x09aPath drawOn: anAthensCanvas.\x0a\x09context2D push.\x0a\x09anAthensCanvas pathTransform multiplyBy: anAthensCanvas paintTransform.\x0a\x09context2D fillStyle: fillStyle.\x0a\x09context2D fill.\x0a\x09context2D pop.",
messageSends: ["context2D", "preparePaintFor:", "beginPath", "drawOn:", "push", "multiplyBy:", "paintTransform", "pathTransform", "fillStyle:", "fill", "pop"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
category: 'drawing',
fn: function (rect,anAthensCanvas){
var self=this;
var context2D;
return smalltalk.withContext(function($ctx1) { 
context2D=_st(anAthensCanvas)._context2D();
self._preparePaintFor_(context2D);
_st(context2D)._beginPath();
_st(context2D)._rect_(rect);
_st(context2D)._push();
_st(_st(anAthensCanvas)._pathTransform())._multiplyBy_(_st(anAthensCanvas)._paintTransform());
_st(context2D)._fillStyle_(self["@fillStyle"]);
_st(context2D)._fill();
_st(context2D)._pop();
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{rect:rect,anAthensCanvas:anAthensCanvas,context2D:context2D},smalltalk.AthensHTMLPaint)})},
args: ["rect", "anAthensCanvas"],
source: "fillRectangle: rect on: anAthensCanvas\x0a\x09|context2D|\x0a\x09context2D := anAthensCanvas context2D.\x0a\x09self preparePaintFor: context2D.\x0a\x09context2D beginPath.\x0a\x09context2D rect: rect.\x0a\x09context2D push.\x0a\x09anAthensCanvas pathTransform multiplyBy: anAthensCanvas paintTransform.\x0a\x09context2D fillStyle: fillStyle.\x0a\x09context2D fill.\x0a\x09context2D pop.",
messageSends: ["context2D", "preparePaintFor:", "beginPath", "rect:", "push", "multiplyBy:", "paintTransform", "pathTransform", "fillStyle:", "fill", "pop"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillStyle",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fillStyle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fillStyle",{},smalltalk.AthensHTMLPaint)})},
args: [],
source: "fillStyle\x0a\x09^ fillStyle",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "preparePaintFor:",
category: 'drawing',
fn: function (context2D){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"preparePaintFor:",{context2D:context2D},smalltalk.AthensHTMLPaint)})},
args: ["context2D"],
source: "preparePaintFor: context2D\x0a\x09self subclassResponsibility.",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensHTMLPaint);



smalltalk.addClass('AthensHTMLGradientPaint', smalltalk.AthensHTMLPaint, ['start', 'stop', 'innerRadius', 'outerRadius', 'colorRamp'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "colorRamp:",
category: 'accessing',
fn: function (aColorRamp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@colorRamp"]=aColorRamp;
return self}, function($ctx1) {$ctx1.fill(self,"colorRamp:",{aColorRamp:aColorRamp},smalltalk.AthensHTMLGradientPaint)})},
args: ["aColorRamp"],
source: "colorRamp: aColorRamp\x0a\x09colorRamp := aColorRamp.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "innerRadius:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@innerRadius"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"innerRadius:",{aNumber:aNumber},smalltalk.AthensHTMLGradientPaint)})},
args: ["aNumber"],
source: "innerRadius: aNumber\x0a\x09innerRadius := aNumber.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "outerRadius:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@outerRadius"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"outerRadius:",{aNumber:aNumber},smalltalk.AthensHTMLGradientPaint)})},
args: ["aNumber"],
source: "outerRadius: aNumber\x0a\x09outerRadius := aNumber.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "preparePaintFor:",
category: 'drawing',
fn: function (context2D){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@innerRadius"]).__eq_eq(nil);
if(smalltalk.assert($1)){
self["@fillStyle"]=_st(context2D)._createLinearGradientFrom_to_(self["@start"],self["@stop"]);
self["@fillStyle"];
} else {
self["@fillStyle"]=_st(context2D)._createRadialGradientFrom_with_to_with_(self["@start"],self["@innerRadius"],self["@stop"],self["@outerRadius"]);
self["@fillStyle"];
};
_st(self["@colorRamp"])._keysAndValuesDo_((function(pos,color){
return smalltalk.withContext(function($ctx2) {
return _st(self["@fillStyle"])._addColorStopAt_color_(pos,_st(color)._rgbaString());
}, function($ctx2) {$ctx2.fillBlock({pos:pos,color:color},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"preparePaintFor:",{context2D:context2D},smalltalk.AthensHTMLGradientPaint)})},
args: ["context2D"],
source: "preparePaintFor: context2D\x0a\x09innerRadius == nil\x0a\x09\x09ifTrue: [fillStyle := context2D createLinearGradientFrom: start to: stop]\x0a\x09\x09ifFalse: [fillStyle := context2D createRadialGradientFrom: start with: innerRadius to: stop with: outerRadius].\x0a\x09\x09\x0a\x09colorRamp keysAndValuesDo: [:pos :color |\x0a\x09\x09fillStyle addColorStopAt: pos color: color rgbaString].",
messageSends: ["ifTrue:ifFalse:", "createLinearGradientFrom:to:", "createRadialGradientFrom:with:to:with:", "==", "keysAndValuesDo:", "addColorStopAt:color:", "rgbaString"],
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
selector: "createLinearGradient:start:stop:",
category: 'instance creation',
fn: function (aColorRamp,aStartPoint,aStopPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._start_(aStartPoint);
_st($2)._stop_(aStopPoint);
_st($2)._initialize();
_st($2)._colorRamp_(aColorRamp);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:start:stop:",{aColorRamp:aColorRamp,aStartPoint:aStartPoint,aStopPoint:aStopPoint},smalltalk.AthensHTMLGradientPaint.klass)})},
args: ["aColorRamp", "aStartPoint", "aStopPoint"],
source: "createLinearGradient: aColorRamp start: aStartPoint stop: aStopPoint\x0a\x09^ self basicNew\x0a\x09\x09start: aStartPoint;\x0a\x09\x09stop: aStopPoint;\x0a\x09\x09initialize;\x0a\x09\x09colorRamp: aColorRamp;\x0a\x09\x09yourself",
messageSends: ["start:", "basicNew", "stop:", "initialize", "colorRamp:", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLGradientPaint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "radialBetween:extending:and:extending:withColorRamp:",
category: 'instance creation',
fn: function (origin,innerRadius,outerOrigin,outerRadius,aColorRamp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._start_(origin);
_st($2)._stop_(outerOrigin);
_st($2)._innerRadius_(innerRadius);
_st($2)._outerRadius_(outerRadius);
_st($2)._initialize();
_st($2)._colorRamp_(aColorRamp);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"radialBetween:extending:and:extending:withColorRamp:",{origin:origin,innerRadius:innerRadius,outerOrigin:outerOrigin,outerRadius:outerRadius,aColorRamp:aColorRamp},smalltalk.AthensHTMLGradientPaint.klass)})},
args: ["origin", "innerRadius", "outerOrigin", "outerRadius", "aColorRamp"],
source: "radialBetween: origin extending: innerRadius and: outerOrigin  extending: outerRadius withColorRamp: aColorRamp\x0a\x09^ self basicNew\x0a\x09\x09start: origin;\x0a\x09\x09stop: outerOrigin;\x0a\x09\x09innerRadius: innerRadius;\x0a\x09\x09outerRadius: outerRadius;\x0a\x09\x09initialize;\x0a\x09\x09colorRamp: aColorRamp;\x0a\x09\x09yourself",
messageSends: ["start:", "basicNew", "stop:", "innerRadius:", "outerRadius:", "initialize", "colorRamp:", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLGradientPaint.klass);


smalltalk.addClass('AthensHTMLPatternPaint', smalltalk.AthensHTMLPaint, ['repeatMode', 'anAthensCanvas', 'patternSource'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@repeatMode"]="no-repeat";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLPatternPaint)})},
args: [],
source: "initialize\x0a\x09repeatMode := 'no-repeat'.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPatternPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "noRepeat",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@repeatMode"]="no-repeat";
return self}, function($ctx1) {$ctx1.fill(self,"noRepeat",{},smalltalk.AthensHTMLPatternPaint)})},
args: [],
source: "noRepeat\x0a\x09repeatMode := 'no-repeat'.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPatternPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "preparePaintFor:",
category: 'drawing',
fn: function (context2D){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fillStyle"]=_st(context2D)._createPattern_repeat_(self["@patternSource"],self["@repeatMode"]);
return self}, function($ctx1) {$ctx1.fill(self,"preparePaintFor:",{context2D:context2D},smalltalk.AthensHTMLPatternPaint)})},
args: ["context2D"],
source: "preparePaintFor: context2D\x0a\x09fillStyle := context2D createPattern: patternSource repeat: repeatMode.",
messageSends: ["createPattern:repeat:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPatternPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "repeat",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@repeatMode"]="repeat";
return self}, function($ctx1) {$ctx1.fill(self,"repeat",{},smalltalk.AthensHTMLPatternPaint)})},
args: [],
source: "repeat\x0a\x09repeatMode := 'repeat'.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPatternPaint);



smalltalk.addClass('AthensHTMLBitmapPaint', smalltalk.AthensHTMLPatternPaint, [], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "bitmap:",
category: 'accessing',
fn: function (aBitmap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@patternSource"]=aBitmap;
return self}, function($ctx1) {$ctx1.fill(self,"bitmap:",{aBitmap:aBitmap},smalltalk.AthensHTMLBitmapPaint)})},
args: ["aBitmap"],
source: "bitmap: aBitmap\x0a\x09patternSource := aBitmap.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLBitmapPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@patternSource"])._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.AthensHTMLBitmapPaint)})},
args: [],
source: "height\x0a\x09^ patternSource height",
messageSends: ["height"],
referencedClasses: []
}),
smalltalk.AthensHTMLBitmapPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "loadingCallback:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@patternSource"])._complete();
if(smalltalk.assert($1)){
_st(aBlock)._value_(self);
} else {
_st(self["@patternSource"])._onLoad_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"loadingCallback:",{aBlock:aBlock},smalltalk.AthensHTMLBitmapPaint)})},
args: ["aBlock"],
source: "loadingCallback: aBlock\x0a\x09patternSource complete\x0a\x09\x09ifTrue: [aBlock value: self]\x0a\x09\x09ifFalse: [patternSource onLoad: [aBlock value: self]].",
messageSends: ["ifTrue:ifFalse:", "value:", "onLoad:", "complete"],
referencedClasses: []
}),
smalltalk.AthensHTMLBitmapPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@patternSource"])._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.AthensHTMLBitmapPaint)})},
args: [],
source: "width\x0a\x09^ patternSource width",
messageSends: ["width"],
referencedClasses: []
}),
smalltalk.AthensHTMLBitmapPaint);


smalltalk.addMethod(
smalltalk.method({
selector: "fromImage:",
category: 'instance creation',
fn: function (aBitmap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._bitmap_(aBitmap);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromImage:",{aBitmap:aBitmap},smalltalk.AthensHTMLBitmapPaint.klass)})},
args: ["aBitmap"],
source: "fromImage: aBitmap\x0a\x09^ self new\x0a\x09\x09bitmap: aBitmap;\x0a\x09\x09yourself",
messageSends: ["bitmap:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLBitmapPaint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromImage:afterLoading:",
category: 'instance creation',
fn: function (aBitmap,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._bitmap_(aBitmap);
_st($2)._loadingCallback_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromImage:afterLoading:",{aBitmap:aBitmap,aBlock:aBlock},smalltalk.AthensHTMLBitmapPaint.klass)})},
args: ["aBitmap", "aBlock"],
source: "fromImage: aBitmap afterLoading: aBlock\x0a\x09^ self new\x0a\x09\x09bitmap: aBitmap;\x0a\x09\x09loadingCallback: aBlock;\x0a\x09\x09yourself",
messageSends: ["bitmap:", "new", "loadingCallback:", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLBitmapPaint.klass);


smalltalk.addClass('AthensHTMLPatternSurfacePaint', smalltalk.AthensHTMLPatternPaint, ['surface'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
category: 'accessing',
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@patternSource"]=_st(aSurface)._canvasTag();
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},smalltalk.AthensHTMLPatternSurfacePaint)})},
args: ["aSurface"],
source: "surface: aSurface\x0a\x09patternSource := aSurface canvasTag.",
messageSends: ["canvasTag"],
referencedClasses: []
}),
smalltalk.AthensHTMLPatternSurfacePaint);


smalltalk.addMethod(
smalltalk.method({
selector: "forSurface:",
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
}, function($ctx1) {$ctx1.fill(self,"forSurface:",{aSurface:aSurface},smalltalk.AthensHTMLPatternSurfacePaint.klass)})},
args: ["aSurface"],
source: "forSurface: aSurface\x0a\x09^ self new\x0a\x09\x09surface: aSurface;\x0a\x09\x09yourself",
messageSends: ["surface:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLPatternSurfacePaint.klass);


smalltalk.addClass('AthensHTMLSolidPaint', smalltalk.AthensHTMLPaint, ['color'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fillStyle"]=_st(aColor)._rgbaString();
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.AthensHTMLSolidPaint)})},
args: ["aColor"],
source: "color: aColor\x0a\x09fillStyle := aColor rgbaString.",
messageSends: ["rgbaString"],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:on:",
category: 'drawing',
fn: function (aString,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(anAthensCanvas)._context2D();
_st($1)._fillStyle_(self["@fillStyle"]);
$2=_st($1)._fillText_X_Y_(aString,(0),(0));
return self}, function($ctx1) {$ctx1.fill(self,"drawString:on:",{aString:aString,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
args: ["aString", "anAthensCanvas"],
source: "drawString: aString on: anAthensCanvas\x0a\x09anAthensCanvas context2D\x0a\x09\x09fillStyle: fillStyle;\x0a\x09\x09fillText: aString X: 0 Y: 0.",
messageSends: ["fillStyle:", "context2D", "fillText:X:Y:"],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
category: 'drawing',
fn: function (aPath,anAthensCanvas){
var self=this;
var context2D;
return smalltalk.withContext(function($ctx1) { 
context2D=_st(anAthensCanvas)._context2D();
_st(context2D)._fillStyle_(self["@fillStyle"]);
_st(aPath)._drawOn_(anAthensCanvas);
_st(context2D)._fill();
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas,context2D:context2D},smalltalk.AthensHTMLSolidPaint)})},
args: ["aPath", "anAthensCanvas"],
source: "fillPath: aPath on: anAthensCanvas\x0a\x09|context2D|\x0a\x09context2D := anAthensCanvas context2D.\x0a\x09context2D fillStyle: fillStyle.\x0a\x09aPath drawOn: anAthensCanvas.\x0a\x09context2D fill.",
messageSends: ["context2D", "fillStyle:", "drawOn:", "fill"],
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
var $1,$2;
$1=_st(anAthensCanvas)._context2D();
_st($1)._fillStyle_(self["@fillStyle"]);
$2=_st($1)._fillRect_(aRect);
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
args: ["aRect", "anAthensCanvas"],
source: "fillRectangle: aRect on: anAthensCanvas\x0a\x09anAthensCanvas context2D\x0a\x09\x09fillStyle: fillStyle;\x0a\x09\x09fillRect: aRect.",
messageSends: ["fillStyle:", "context2D", "fillRect:"],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "preparePaintFor:",
category: 'drawing',
fn: function (context2D){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"preparePaintFor:",{context2D:context2D},smalltalk.AthensHTMLSolidPaint)})},
args: ["context2D"],
source: "preparePaintFor: context2D\x0a\x09\x22nothing to do\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);



smalltalk.addClass('AthensHTMLStrokePaint', smalltalk.AthensStrokePaint, ['dashOffset', 'dashLengths'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "capButt",
category: 'setting cap styles',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@capStyle"]="butt";
return self}, function($ctx1) {$ctx1.fill(self,"capButt",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "capButt\x0a\x09capStyle := 'butt'.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "capRound",
category: 'setting cap styles',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@capStyle"]="round";
return self}, function($ctx1) {$ctx1.fill(self,"capRound",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "capRound\x0a\x09capStyle := 'round'.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "capSquare",
category: 'setting cap styles',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@capStyle"]="square";
return self}, function($ctx1) {$ctx1.fill(self,"capSquare",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "capSquare\x0a\x09capStyle := 'square'.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "dashes:offset:",
category: 'accessing',
fn: function (anAlternateCollectionOfLenghts,anOffset){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dashLengths"]=anAlternateCollectionOfLenghts;
self["@dashOffset"]=anOffset;
return self}, function($ctx1) {$ctx1.fill(self,"dashes:offset:",{anAlternateCollectionOfLenghts:anAlternateCollectionOfLenghts,anOffset:anOffset},smalltalk.AthensHTMLStrokePaint)})},
args: ["anAlternateCollectionOfLenghts", "anOffset"],
source: "dashes: anAlternateCollectionOfLenghts offset: anOffset\x0a\x09dashLengths := anAlternateCollectionOfLenghts.\x0a\x09dashOffset := anOffset.",
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
var $1,$2;
$1=_st(anAthensCanvas)._context2D();
_st($1)._strokeStyle_(_st(self["@fillPaint"])._fillStyle());
_st($1)._lineWidth_(self["@width"]);
_st($1)._lineJoin_(self["@joinStyle"]);
_st($1)._lineCap_(self["@capStyle"]);
_st($1)._lineDash_(self["@dashLengths"]);
$2=_st($1)._lineDashOffset_(self["@dashOffset"]);
_st(aPath)._drawOn_(anAthensCanvas);
_st(_st(anAthensCanvas)._context2D())._stroke();
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLStrokePaint)})},
args: ["aPath", "anAthensCanvas"],
source: "fillPath: aPath on: anAthensCanvas\x0a\x09anAthensCanvas context2D\x0a\x09\x09strokeStyle: fillPaint fillStyle;\x0a\x09\x09lineWidth: width;\x0a\x09\x09lineJoin: joinStyle;\x0a\x09\x09lineCap: capStyle;\x0a\x09\x09lineDash: dashLengths;\x0a\x09\x09lineDashOffset: dashOffset.\x0a\x09aPath drawOn: anAthensCanvas.\x0a\x09anAthensCanvas context2D stroke.",
messageSends: ["strokeStyle:", "fillStyle", "context2D", "lineWidth:", "lineJoin:", "lineCap:", "lineDash:", "lineDashOffset:", "drawOn:", "stroke"],
referencedClasses: []
}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
category: 'drawing',
fn: function (aRect,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(anAthensCanvas)._context2D();
_st($1)._strokeStyle_(_st(self["@fillPaint"])._fillStyle());
_st($1)._lineWidth_(self["@width"]);
_st($1)._lineJoin_(self["@joinStyle"]);
_st($1)._lineCap_(self["@capStyle"]);
_st($1)._lineDash_(self["@dashLengths"]);
_st($1)._lineDashOffset_(self["@dashOffset"]);
$2=_st($1)._strokeRect_(aRect);
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLStrokePaint)})},
args: ["aRect", "anAthensCanvas"],
source: "fillRectangle: aRect on: anAthensCanvas\x0a\x09anAthensCanvas context2D\x0a\x09\x09strokeStyle: fillPaint fillStyle;\x0a\x09\x09lineWidth: width;\x0a\x09\x09lineJoin: joinStyle;\x0a\x09\x09lineCap: capStyle;\x0a\x09\x09lineDash: dashLengths;\x0a\x09\x09lineDashOffset: dashOffset;\x0a\x09\x09strokeRect: aRect.",
messageSends: ["strokeStyle:", "fillStyle", "context2D", "lineWidth:", "lineJoin:", "lineCap:", "lineDash:", "lineDashOffset:", "strokeRect:"],
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
source: "initialize\x0a\x09super initialize.\x0a\x09width := 1.\x0a\x09capStyle := joinStyle := nil.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "joinBevel",
category: 'setting join styles',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@joinStyle"]="bevel";
return self}, function($ctx1) {$ctx1.fill(self,"joinBevel",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "joinBevel\x0a\x09joinStyle := 'bevel'.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "joinMiter",
category: 'setting join styles',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@joinStyle"]="miter";
return self}, function($ctx1) {$ctx1.fill(self,"joinMiter",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "joinMiter\x0a\x09joinStyle := 'miter'.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "joinRound",
category: 'setting join styles',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@joinStyle"]="round";
return self}, function($ctx1) {$ctx1.fill(self,"joinRound",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "joinRound\x0a\x09joinStyle := 'round'.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLStrokePaint);




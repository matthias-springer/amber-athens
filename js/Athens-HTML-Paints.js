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
return smalltalk.withContext(function($ctx1) { 
 var context2D = anAthensCanvas._context2D();
	context2D.fillStyle = self['@fillStyle'];
	anAthensCanvas._pathTransform()._set();
	context2D.fillText(aString, 0, 0); ;
return self}, function($ctx1) {$ctx1.fill(self,"drawString:on:",{aString:aString,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPaint)})},
args: ["aString", "anAthensCanvas"],
source: "drawString: aString on: anAthensCanvas\x0a\x09< var context2D = anAthensCanvas._context2D();\x0a\x09context2D.fillStyle = self['@fillStyle'];\x0a\x09anAthensCanvas._pathTransform()._set();\x0a\x09context2D.fillText(aString, 0, 0); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
category: 'drawing',
fn: function (aPath,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var context2D = anAthensCanvas['@surface']['@context2D'];
	context2D.beginPath();
	anAthensCanvas['@pathTransform']._set();
	aPath._drawOn_(anAthensCanvas);
	anAthensCanvas['@paintTransform']._apply();
	context2D.fillStyle = self['@fillStyle'];
	context2D.fill(); ;
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPaint)})},
args: ["aPath", "anAthensCanvas"],
source: "fillPath: aPath on: anAthensCanvas\x0a\x09< var context2D = anAthensCanvas['@surface']['@context2D'];\x0a\x09context2D.beginPath();\x0a\x09anAthensCanvas['@pathTransform']._set();\x0a\x09aPath._drawOn_(anAthensCanvas);\x0a\x09anAthensCanvas['@paintTransform']._apply();\x0a\x09context2D.fillStyle = self['@fillStyle'];\x0a\x09context2D.fill(); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
category: 'drawing',
fn: function (aRect,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var context2D = anAthensCanvas['@surface']['@context2D'];
	context2D.beginPath();
	anAthensCanvas['@pathTransform']._set();
	context2D.rect(aRect._left(), aRect._top(), aRect._width(), aRect._height());
	anAthensCanvas['@paintTransform']._apply();
	context2D.fillStyle = self['@fillStyle'];
	context2D.fill(); ;
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPaint)})},
args: ["aRect", "anAthensCanvas"],
source: "fillRectangle: aRect on: anAthensCanvas\x0a\x09< var context2D = anAthensCanvas['@surface']['@context2D'];\x0a\x09context2D.beginPath();\x0a\x09anAthensCanvas['@pathTransform']._set();\x0a\x09context2D.rect(aRect._left(), aRect._top(), aRect._width(), aRect._height());\x0a\x09anAthensCanvas['@paintTransform']._apply();\x0a\x09context2D.fillStyle = self['@fillStyle'];\x0a\x09context2D.fill(); >",
messageSends: [],
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
selector: "createGradient:",
category: 'initialization',
fn: function (context2D){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@innerRadius"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@fillStyle"]=_st(context2D)._createLinearGradient_a_a_a_(_st(self["@start"])._x(),_st(self["@start"])._y(),_st(self["@stop"])._x(),_st(self["@stop"])._y());
self["@fillStyle"];
} else {
self["@fillStyle"]=_st(context2D)._createRadialGradient_a_a_a_a_a_(_st(self["@start"])._x(),_st(self["@start"])._y(),self["@innerRadius"],_st(self["@stop"])._x(),_st(self["@stop"])._y(),self["@outerRadius"]);
self["@fillStyle"];
};
return self}, function($ctx1) {$ctx1.fill(self,"createGradient:",{context2D:context2D},smalltalk.AthensHTMLGradientPaint)})},
args: ["context2D"],
source: "createGradient: context2D\x0a\x09innerRadius \x0a\x09\x09ifNil: [fillStyle := context2D createLinearGradient: start x a: start y a: stop x a: stop y]\x0a\x09\x09ifNotNil: [fillStyle := context2D createRadialGradient: start x a: start y a: innerRadius a: stop x a: stop y a: outerRadius].",
messageSends: ["ifNil:ifNotNil:", "createLinearGradient:a:a:a:", "x", "y", "createRadialGradient:a:a:a:a:a:"],
referencedClasses: []
}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
category: 'drawing',
fn: function (aPath,anAthensCanvas){
var self=this;
var context2D;
return smalltalk.withContext(function($ctx1) { 
context2D=_st(anAthensCanvas)._context2D();
self._createGradient_(context2D);
self._populateRamp_(self["@colorRamp"]);
smalltalk.AthensHTMLPaint.fn.prototype._fillPath_on_.apply(_st(self), [aPath,anAthensCanvas]);
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas,context2D:context2D},smalltalk.AthensHTMLGradientPaint)})},
args: ["aPath", "anAthensCanvas"],
source: "fillPath: aPath on: anAthensCanvas\x0a\x09|context2D|\x0a\x09context2D := anAthensCanvas context2D.\x0a\x09self createGradient: context2D.\x0a\x09self populateRamp: colorRamp.\x0a\x09super fillPath: aPath on: anAthensCanvas.",
messageSends: ["context2D", "createGradient:", "populateRamp:", "fillPath:on:"],
referencedClasses: []
}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
category: 'drawing',
fn: function (aRect,anAthensCanvas){
var self=this;
var context2D;
return smalltalk.withContext(function($ctx1) { 
context2D=_st(anAthensCanvas)._context2D();
self._createGradient_(context2D);
self._populateRamp_(self["@colorRamp"]);
smalltalk.AthensHTMLPaint.fn.prototype._fillRectangle_on_.apply(_st(self), [aRect,anAthensCanvas]);
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas,context2D:context2D},smalltalk.AthensHTMLGradientPaint)})},
args: ["aRect", "anAthensCanvas"],
source: "fillRectangle: aRect on: anAthensCanvas\x0a\x09|context2D|\x0a\x09context2D := anAthensCanvas context2D.\x0a\x09self createGradient: context2D.\x0a\x09self populateRamp: colorRamp.\x0a\x09super fillRectangle: aRect on: anAthensCanvas.",
messageSends: ["context2D", "createGradient:", "populateRamp:", "fillRectangle:on:"],
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
selector: "populateRamp:",
category: 'initialization',
fn: function (aRamp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aRamp)._do_((function(assoc){
return smalltalk.withContext(function($ctx2) {
return _st(self["@fillStyle"])._addColorStop_a_(_st(assoc)._key(),_st(_st(assoc)._value())._rgbaString());
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"populateRamp:",{aRamp:aRamp},smalltalk.AthensHTMLGradientPaint)})},
args: ["aRamp"],
source: "populateRamp: aRamp\x0a\x09aRamp do: [:assoc |\x0a\x09\x09fillStyle addColorStop: assoc key a: assoc value rgbaString].",
messageSends: ["do:", "addColorStop:a:", "key", "rgbaString", "value"],
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


smalltalk.addClass('AthensHTMLPatternPaint', smalltalk.AthensHTMLPaint, ['repeatMode'], 'Athens-HTML-Paints');
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

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
category: 'drawing',
fn: function (aPath,anAthensCanvas){
var self=this;
var context2D;
return smalltalk.withContext(function($ctx1) { 
context2D=_st(anAthensCanvas)._context2D();
self["@fillStyle"]=_st(context2D)._createPattern_a_(self._patternSource(),self["@repeatMode"]);
smalltalk.AthensHTMLPaint.fn.prototype._fillPath_on_.apply(_st(self), [aPath,anAthensCanvas]);
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas,context2D:context2D},smalltalk.AthensHTMLPatternPaint)})},
args: ["aPath", "anAthensCanvas"],
source: "fillPath: aPath on: anAthensCanvas\x0a\x09|context2D|\x0a\x09context2D := anAthensCanvas context2D.\x0a\x09fillStyle := context2D createPattern: self patternSource a: repeatMode.\x0a\x09super fillPath: aPath on: anAthensCanvas.",
messageSends: ["context2D", "createPattern:a:", "patternSource", "fillPath:on:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPatternPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
category: 'drawing',
fn: function (aRect,anAthensCanvas){
var self=this;
var context2D;
return smalltalk.withContext(function($ctx1) { 
context2D=_st(anAthensCanvas)._context2D();
self["@fillStyle"]=_st(context2D)._createPattern_a_(self._patternSource(),self["@repeatMode"]);
smalltalk.AthensHTMLPaint.fn.prototype._fillRectangle_on_.apply(_st(self), [aRect,anAthensCanvas]);
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas,context2D:context2D},smalltalk.AthensHTMLPatternPaint)})},
args: ["aRect", "anAthensCanvas"],
source: "fillRectangle: aRect on: anAthensCanvas\x0a\x09|context2D|\x0a\x09context2D := anAthensCanvas context2D.\x0a\x09fillStyle := context2D createPattern: self patternSource a: repeatMode.\x0a\x09super fillRectangle: aRect on: anAthensCanvas.",
messageSends: ["context2D", "createPattern:a:", "patternSource", "fillRectangle:on:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPatternPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._noRepeat();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLPatternPaint)})},
args: [],
source: "initialize\x0a\x09self noRepeat.",
messageSends: ["noRepeat"],
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
selector: "patternSource",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"patternSource",{},smalltalk.AthensHTMLPatternPaint)})},
args: [],
source: "patternSource\x0a\x09self subclassResponsibility.",
messageSends: ["subclassResponsibility"],
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



smalltalk.addClass('AthensHTMLBitmapPaint', smalltalk.AthensHTMLPatternPaint, ['bitmap', 'loadingCallback'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "bitmap:",
category: 'accessing',
fn: function (aBitmap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@bitmap"]=aBitmap;
return self}, function($ctx1) {$ctx1.fill(self,"bitmap:",{aBitmap:aBitmap},smalltalk.AthensHTMLBitmapPaint)})},
args: ["aBitmap"],
source: "bitmap: aBitmap\x0a\x09bitmap := aBitmap.",
messageSends: [],
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
self["@loadingCallback"]=aBlock;
$1=_st(_st(self["@bitmap"])._image())._complete();
if(smalltalk.assert($1)){
_st(aBlock)._value_(self);
} else {
_st(_st(self["@bitmap"])._image())._onLoad_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"loadingCallback:",{aBlock:aBlock},smalltalk.AthensHTMLBitmapPaint)})},
args: ["aBlock"],
source: "loadingCallback: aBlock\x0a\x09loadingCallback := aBlock.\x0a\x09bitmap image complete\x0a\x09\x09ifTrue: [aBlock value: self]\x0a\x09\x09ifFalse: [bitmap image onLoad: [aBlock value: self]].",
messageSends: ["ifTrue:ifFalse:", "value:", "onLoad:", "image", "complete"],
referencedClasses: []
}),
smalltalk.AthensHTMLBitmapPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "patternSource",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self["@bitmap"])._image())._complete();
if(! smalltalk.assert($1)){
self._error_("image not preloaded.");
};
$2=_st(self["@bitmap"])._image();
return $2;
}, function($ctx1) {$ctx1.fill(self,"patternSource",{},smalltalk.AthensHTMLBitmapPaint)})},
args: [],
source: "patternSource\x0a\x09bitmap image complete\x0a\x09\x09ifFalse: [self error: 'image not preloaded.'].\x0a\x09^ bitmap image",
messageSends: ["ifFalse:", "error:", "complete", "image"],
referencedClasses: []
}),
smalltalk.AthensHTMLBitmapPaint);


smalltalk.addMethod(
smalltalk.method({
selector: "forBitmap:",
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
}, function($ctx1) {$ctx1.fill(self,"forBitmap:",{aBitmap:aBitmap},smalltalk.AthensHTMLBitmapPaint.klass)})},
args: ["aBitmap"],
source: "forBitmap: aBitmap\x0a\x09^ self new\x0a\x09\x09bitmap: aBitmap;\x0a\x09\x09yourself",
messageSends: ["bitmap:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLBitmapPaint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "forBitmap:afterLoading:",
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
}, function($ctx1) {$ctx1.fill(self,"forBitmap:afterLoading:",{aBitmap:aBitmap,aBlock:aBlock},smalltalk.AthensHTMLBitmapPaint.klass)})},
args: ["aBitmap", "aBlock"],
source: "forBitmap: aBitmap afterLoading: aBlock\x0a\x09^ self new\x0a\x09\x09bitmap: aBitmap;\x0a\x09\x09loadingCallback: aBlock;\x0a\x09\x09yourself",
messageSends: ["bitmap:", "new", "loadingCallback:", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLBitmapPaint.klass);


smalltalk.addClass('AthensHTMLPatternSurfacePaint', smalltalk.AthensHTMLPatternPaint, ['surface'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "patternSource",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._canvasTag();
return $1;
}, function($ctx1) {$ctx1.fill(self,"patternSource",{},smalltalk.AthensHTMLPatternSurfacePaint)})},
args: [],
source: "patternSource\x0a\x09^ surface canvasTag",
messageSends: ["canvasTag"],
referencedClasses: []
}),
smalltalk.AthensHTMLPatternSurfacePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
category: 'accessing',
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=aSurface;
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},smalltalk.AthensHTMLPatternSurfacePaint)})},
args: ["aSurface"],
source: "surface: aSurface\x0a\x09surface := aSurface.",
messageSends: [],
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
 var context2D = anAthensCanvas['@surface']['@context2D'];
	context2D.fillStyle = self['@fillStyle'];
	anAthensCanvas._pathTransform()._set();
	context2D.fillText(aString, 0, 0); ;
return self}, function($ctx1) {$ctx1.fill(self,"drawString:on:",{aString:aString,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
args: ["aString", "anAthensCanvas"],
source: "drawString: aString on: anAthensCanvas\x0a\x09< var context2D = anAthensCanvas['@surface']['@context2D'];\x0a\x09context2D.fillStyle = self['@fillStyle'];\x0a\x09anAthensCanvas._pathTransform()._set();\x0a\x09context2D.fillText(aString, 0, 0); >",
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
 var context2D = anAthensCanvas['@surface']['@context2D'];
	anAthensCanvas._pathTransform()._set();
	context2D.fillStyle = self['@fillStyle'];
	aPath._drawOn_(anAthensCanvas);
	context2D.fill(); ;
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
args: ["aPath", "anAthensCanvas"],
source: "fillPath: aPath on: anAthensCanvas\x0a\x09< var context2D = anAthensCanvas['@surface']['@context2D'];\x0a\x09anAthensCanvas._pathTransform()._set();\x0a\x09context2D.fillStyle = self['@fillStyle'];\x0a\x09aPath._drawOn_(anAthensCanvas);\x0a\x09context2D.fill(); >",
messageSends: [],
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
 var context2D = anAthensCanvas['@surface']['@context2D'];
	anAthensCanvas._pathTransform()._set();
	context2D.fillStyle = self['@fillStyle'];
	context2D.fillRect(aRect._left(), aRect._top(), aRect._width(), aRect._height()); ;
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
args: ["aRect", "anAthensCanvas"],
source: "fillRectangle: aRect on: anAthensCanvas\x0a\x09< var context2D = anAthensCanvas['@surface']['@context2D'];\x0a\x09anAthensCanvas._pathTransform()._set();\x0a\x09context2D.fillStyle = self['@fillStyle'];\x0a\x09context2D.fillRect(aRect._left(), aRect._top(), aRect._width(), aRect._height()); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);



smalltalk.addClass('AthensHTMLStrokePaint', smalltalk.AthensStrokePaint, ['dashLenghts', 'dashOffset'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "capButt",
category: 'setting cap styles',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@capStyle'] = 'butt'; ;
return self}, function($ctx1) {$ctx1.fill(self,"capButt",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "capButt\x0a\x09< self['@capStyle'] = 'butt'; >",
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
 self['@capStyle'] = 'round'; ;
return self}, function($ctx1) {$ctx1.fill(self,"capRound",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "capRound\x0a\x09< self['@capStyle'] = 'round'; >",
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
 self['@capStyle'] = 'square'; ;
return self}, function($ctx1) {$ctx1.fill(self,"capSquare",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "capSquare\x0a\x09< self['@capStyle'] = 'square'; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLStrokePaint);

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
selector: "dashes:offset:",
category: 'accessing',
fn: function (anAlternateCollectionOfLenghts,anOffset){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dashLenghts"]=anAlternateCollectionOfLenghts;
self["@dashOffset"]=anOffset;
return self}, function($ctx1) {$ctx1.fill(self,"dashes:offset:",{anAlternateCollectionOfLenghts:anAlternateCollectionOfLenghts,anOffset:anOffset},smalltalk.AthensHTMLStrokePaint)})},
args: ["anAlternateCollectionOfLenghts", "anOffset"],
source: "dashes: anAlternateCollectionOfLenghts offset: anOffset\x0a\x09dashLenghts := anAlternateCollectionOfLenghts.\x0a\x09dashOffset := anOffset.",
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
 var context2D = anAthensCanvas['@surface']['@context2D'];
	anAthensCanvas['@pathTransform']._set();
	context2D.strokeStyle = self['@fillPaint']['@fillStyle'];
	context2D.lineWidth = self['@width'];
	context2D.lineJoin = self['@joinStyle'];
	context2D.lineCap = self['@capStyle'];
	// TODO: this only works in Chrome, see http://www.rgraph.net/blog/2013/january/html5-canvas-dashed-lines.html
	context2D.setLineDash(self['@dashLenghts']);
	context2D.lineDashOffset = self['@dashOffset'];
	aPath._drawOn_(anAthensCanvas);
	context2D.stroke(); ;
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLStrokePaint)})},
args: ["aPath", "anAthensCanvas"],
source: "fillPath: aPath on: anAthensCanvas\x0a\x09< var context2D = anAthensCanvas['@surface']['@context2D'];\x0a\x09anAthensCanvas['@pathTransform']._set();\x0a\x09context2D.strokeStyle = self['@fillPaint']['@fillStyle'];\x0a\x09context2D.lineWidth = self['@width'];\x0a\x09context2D.lineJoin = self['@joinStyle'];\x0a\x09context2D.lineCap = self['@capStyle'];\x0a\x09// TODO: this only works in Chrome, see http://www.rgraph.net/blog/2013/january/html5-canvas-dashed-lines.html\x0a\x09context2D.setLineDash(self['@dashLenghts']);\x0a\x09context2D.lineDashOffset = self['@dashOffset'];\x0a\x09aPath._drawOn_(anAthensCanvas);\x0a\x09context2D.stroke(); >",
messageSends: [],
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
selector: "joinBevel",
category: 'setting join styles',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@joinStyle'] = 'bevel'; ;
return self}, function($ctx1) {$ctx1.fill(self,"joinBevel",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "joinBevel\x0a\x09< self['@joinStyle'] = 'bevel'; >",
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
 self['@joinStyle'] = 'miter'; ;
return self}, function($ctx1) {$ctx1.fill(self,"joinMiter",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "joinMiter\x0a\x09< self['@joinStyle'] = 'miter'; >",
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
 self['@joinStyle'] = 'round'; ;
return self}, function($ctx1) {$ctx1.fill(self,"joinRound",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "joinRound\x0a\x09< self['@joinStyle'] = 'round'; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLStrokePaint);




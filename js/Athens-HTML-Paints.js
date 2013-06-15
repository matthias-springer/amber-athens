smalltalk.addPackage('Athens-HTML-Paints');
smalltalk.addClass('AthensHTMLGradientPaint', smalltalk.Object, ['start', 'stop', 'gradient', 'innerRadius', 'outerRadius', 'colorRamp'], 'Athens-HTML-Paints');
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
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLGradientPaint)})},
args: ["anAthensCanvas"],
source: "asAthensPaintOn: anAthensCanvas\x09\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLGradientPaint);

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
category: 'drawing',
fn: function (context2D){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@innerRadius"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@gradient"]=_st(context2D)._createLinearGradient_a_a_a_(_st(self["@start"])._x(),_st(self["@start"])._y(),_st(self["@stop"])._x(),_st(self["@stop"])._y());
self["@gradient"];
} else {
self["@gradient"]=_st(context2D)._createRadialGradient_a_a_a_a_a_(_st(self["@start"])._x(),_st(self["@start"])._y(),self["@innerRadius"],_st(self["@stop"])._x(),_st(self["@stop"])._y(),self["@outerRadius"]);
self["@gradient"];
};
return self}, function($ctx1) {$ctx1.fill(self,"createGradient:",{context2D:context2D},smalltalk.AthensHTMLGradientPaint)})},
args: ["context2D"],
source: "createGradient: context2D\x0a\x09innerRadius \x0a\x09\x09ifNil: [gradient := context2D createLinearGradient: start x a: start y a: stop x a: stop y]\x0a\x09\x09ifNotNil: [gradient := context2D createRadialGradient: start x a: start y a: innerRadius a: stop x a: stop y a: outerRadius].",
messageSends: ["ifNil:ifNotNil:", "createLinearGradient:a:a:a:", "x", "y", "createRadialGradient:a:a:a:a:a:"],
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
_st(context2D)._beginPath();
_st(_st(anAthensCanvas)._pathTransform())._set();
_st(context2D)._rect_a_a_a_(_st(aRect)._left(),_st(aRect)._top(),_st(aRect)._width(),_st(aRect)._height());
_st(_st(anAthensCanvas)._paintTransform())._apply();
_st(context2D)._fillStyle_(self["@gradient"]);
_st(context2D)._fill();
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas,context2D:context2D},smalltalk.AthensHTMLGradientPaint)})},
args: ["aRect", "anAthensCanvas"],
source: "fillRectangle: aRect on: anAthensCanvas\x0a\x09|context2D|\x0a\x09context2D := anAthensCanvas context2D.\x0a\x09self createGradient: context2D.\x0a\x09self populateRamp: colorRamp.\x0a\x09context2D beginPath.\x0a\x09anAthensCanvas pathTransform set.\x0a\x09context2D rect: aRect left a: aRect top a: aRect width a: aRect height.\x0a\x09anAthensCanvas paintTransform apply.\x0a\x09context2D fillStyle: gradient.\x0a\x09context2D fill.",
messageSends: ["context2D", "createGradient:", "populateRamp:", "beginPath", "set", "pathTransform", "rect:a:a:a:", "left", "top", "width", "height", "apply", "paintTransform", "fillStyle:", "fill"],
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
category: 'drawing',
fn: function (aRamp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aRamp)._do_((function(assoc){
return smalltalk.withContext(function($ctx2) {
return _st(self["@gradient"])._addColorStop_a_(_st(assoc)._key(),_st(_st(assoc)._value())._rgbaString());
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"populateRamp:",{aRamp:aRamp},smalltalk.AthensHTMLGradientPaint)})},
args: ["aRamp"],
source: "populateRamp: aRamp\x0a\x09aRamp do: [:assoc |\x0a\x09\x09gradient addColorStop: assoc key a: assoc value rgbaString].",
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


smalltalk.addClass('AthensHTMLPatternPaint', smalltalk.Object, ['repeatMode'], 'Athens-HTML-Paints');
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
selector: "fillRectangle:on:",
category: 'drawing',
fn: function (aRect,anAthensCanvas){
var self=this;
var context2D;
return smalltalk.withContext(function($ctx1) { 
context2D=_st(anAthensCanvas)._context2D();
_st(context2D)._beginPath();
_st(_st(anAthensCanvas)._pathTransform())._set();
_st(context2D)._rect_a_a_a_(_st(aRect)._left(),_st(aRect)._top(),_st(aRect)._width(),_st(aRect)._height());
_st(_st(anAthensCanvas)._paintTransform())._apply();
_st(context2D)._fillStyle_(_st(context2D)._createPattern_a_(self._patternSource(),self["@repeatMode"]));
_st(context2D)._fill();
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas,context2D:context2D},smalltalk.AthensHTMLPatternPaint)})},
args: ["aRect", "anAthensCanvas"],
source: "fillRectangle: aRect on: anAthensCanvas\x0a\x09|context2D|\x0a\x09context2D := anAthensCanvas context2D.\x0a\x09context2D beginPath.\x0a\x09anAthensCanvas pathTransform set.\x0a\x09context2D rect: aRect left a: aRect top a: aRect width a: aRect height.\x0a\x09anAthensCanvas paintTransform apply.\x0a\x09context2D fillStyle: (context2D createPattern: self patternSource a: repeatMode).\x0a\x09context2D fill.",
messageSends: ["context2D", "beginPath", "set", "pathTransform", "rect:a:a:a:", "left", "top", "width", "height", "apply", "paintTransform", "fillStyle:", "createPattern:a:", "patternSource", "fill"],
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



smalltalk.addClass('AthensHTMLBitmapPaint', smalltalk.AthensHTMLPatternPaint, ['bitmap'], 'Athens-HTML-Paints');
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
selector: "patternSource",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@bitmap"])._image();
return $1;
}, function($ctx1) {$ctx1.fill(self,"patternSource",{},smalltalk.AthensHTMLBitmapPaint)})},
args: [],
source: "patternSource\x0a\x09^ bitmap image",
messageSends: ["image"],
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


smalltalk.addClass('AthensHTMLSolidPaint', smalltalk.AthensPaint, ['color'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.AthensHTMLSolidPaint)})},
args: ["aColor"],
source: "color: aColor\x0a\x09color := aColor",
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
var context2D;
return smalltalk.withContext(function($ctx1) { 
context2D=_st(anAthensCanvas)._context2D();
_st(_st(anAthensCanvas)._pathTransform())._set();
_st(context2D)._fillStyle_(self._rgbaString());
_st(aPath)._draw();
_st(context2D)._fill();
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas,context2D:context2D},smalltalk.AthensHTMLSolidPaint)})},
args: ["aPath", "anAthensCanvas"],
source: "fillPath: aPath on: anAthensCanvas\x0a\x09|context2D|\x0a\x09context2D := anAthensCanvas context2D.\x0a\x09anAthensCanvas pathTransform set.\x0a\x09context2D fillStyle: self rgbaString.\x0a\x09aPath draw.\x0a\x09context2D fill.",
messageSends: ["context2D", "set", "pathTransform", "fillStyle:", "rgbaString", "draw", "fill"],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
category: 'drawing',
fn: function (aRect,anAthensCanvas){
var self=this;
var context2D;
return smalltalk.withContext(function($ctx1) { 
context2D=_st(anAthensCanvas)._context2D();
_st(_st(anAthensCanvas)._pathTransform())._set();
_st(context2D)._fillStyle_(self._rgbaString());
_st(context2D)._fillRect_a_a_a_(_st(aRect)._left(),_st(aRect)._top(),_st(aRect)._width(),_st(aRect)._height());
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas,context2D:context2D},smalltalk.AthensHTMLSolidPaint)})},
args: ["aRect", "anAthensCanvas"],
source: "fillRectangle: aRect on: anAthensCanvas\x0a\x09|context2D|\x0a\x09context2D := anAthensCanvas context2D.\x0a\x09anAthensCanvas pathTransform set.\x0a\x09context2D fillStyle: self rgbaString.\x0a\x09context2D fillRect: aRect left a: aRect top a: aRect width a: aRect height.",
messageSends: ["context2D", "set", "pathTransform", "fillStyle:", "rgbaString", "fillRect:a:a:a:", "left", "top", "width", "height"],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "rgbaString",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@color"])._rgbaString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"rgbaString",{},smalltalk.AthensHTMLSolidPaint)})},
args: [],
source: "rgbaString\x0a\x09^ color rgbaString",
messageSends: ["rgbaString"],
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
self._capStyle_("butt");
return self}, function($ctx1) {$ctx1.fill(self,"capButt",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "capButt\x0a\x09self capStyle: 'butt'.",
messageSends: ["capStyle:"],
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
self._capStyle_("round");
return self}, function($ctx1) {$ctx1.fill(self,"capRound",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "capRound\x0a\x09self capStyle: 'round'.",
messageSends: ["capStyle:"],
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
self._capStyle_("square");
return self}, function($ctx1) {$ctx1.fill(self,"capSquare",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "capSquare\x0a\x09self capStyle: 'square'.",
messageSends: ["capStyle:"],
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
var context2D;
return smalltalk.withContext(function($ctx1) { 
context2D=_st(anAthensCanvas)._context2D();
_st(_st(anAthensCanvas)._pathTransform())._set();
_st(context2D)._strokeStyle_(_st(self["@fillPaint"])._rgbaString());
_st(context2D)._lineWidth_(self["@width"]);
_st(context2D)._lineJoin_(self["@joinStyle"]);
_st(context2D)._lineCap_(self["@capStyle"]);
_st(context2D)._setLineDash_(self["@dashLenghts"]);
_st(context2D)._lineDashOffset_(self["@dashOffset"]);
_st(aPath)._draw();
_st(context2D)._stroke();
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas,context2D:context2D},smalltalk.AthensHTMLStrokePaint)})},
args: ["aPath", "anAthensCanvas"],
source: "fillPath: aPath on: anAthensCanvas\x0a\x09|context2D|\x0a\x09context2D := anAthensCanvas context2D.\x0a\x09anAthensCanvas pathTransform set.\x0a\x09context2D strokeStyle: fillPaint rgbaString.\x0a\x09context2D lineWidth: width.\x0a\x09context2D lineJoin: joinStyle.\x0a\x09context2D lineCap: capStyle.\x0a\x09\x22TODO: this only works in Chrome, see http://www.rgraph.net/blog/2013/january/html5-canvas-dashed-lines.html\x22\x0a\x09context2D setLineDash: dashLenghts.\x0a\x09context2D lineDashOffset: dashOffset.\x0a\x09aPath draw.\x0a\x09context2D stroke.",
messageSends: ["context2D", "set", "pathTransform", "strokeStyle:", "rgbaString", "lineWidth:", "lineJoin:", "lineCap:", "setLineDash:", "lineDashOffset:", "draw", "stroke"],
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
self._joinStyle_("bevel");
return self}, function($ctx1) {$ctx1.fill(self,"joinBevel",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "joinBevel\x0a\x09self joinStyle: 'bevel'.",
messageSends: ["joinStyle:"],
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
self._joinStyle_("miter");
return self}, function($ctx1) {$ctx1.fill(self,"joinMiter",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "joinMiter\x0a\x09self joinStyle: 'miter'.",
messageSends: ["joinStyle:"],
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
self._joinStyle_("round");
return self}, function($ctx1) {$ctx1.fill(self,"joinRound",{},smalltalk.AthensHTMLStrokePaint)})},
args: [],
source: "joinRound\x0a\x09self joinStyle: 'round'.",
messageSends: ["joinStyle:"],
referencedClasses: []
}),
smalltalk.AthensHTMLStrokePaint);




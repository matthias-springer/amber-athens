smalltalk.addPackage('Athens-HTML-Paints');
smalltalk.addClass('AthensHTMLGradientPaint', smalltalk.Object, ['start', 'stop', 'gradient', 'innerRadius', 'outerRadius', 'colorRamp'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "asAthensPaintOn:",
fn: function (anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLGradientPaint)})},
messageSends: []}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "colorRamp:",
fn: function (aColorRamp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@colorRamp"]=aColorRamp;
return self}, function($ctx1) {$ctx1.fill(self,"colorRamp:",{aColorRamp:aColorRamp},smalltalk.AthensHTMLGradientPaint)})},
messageSends: []}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "createGradient:",
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
messageSends: ["ifNil:ifNotNil:", "createLinearGradient:a:a:a:", "x", "y", "createRadialGradient:a:a:a:a:a:"]}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
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
messageSends: ["context2D", "createGradient:", "populateRamp:", "beginPath", "set", "pathTransform", "rect:a:a:a:", "left", "top", "width", "height", "apply", "paintTransform", "fillStyle:", "fill"]}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "gradient",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gradient"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gradient",{},smalltalk.AthensHTMLGradientPaint)})},
messageSends: []}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "innerRadius:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@innerRadius"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"innerRadius:",{aNumber:aNumber},smalltalk.AthensHTMLGradientPaint)})},
messageSends: []}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "outerRadius:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@outerRadius"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"outerRadius:",{aNumber:aNumber},smalltalk.AthensHTMLGradientPaint)})},
messageSends: []}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "populateRamp:",
fn: function (aRamp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aRamp)._do_((function(assoc){
return smalltalk.withContext(function($ctx2) {
return _st(self["@gradient"])._addColorStop_a_(_st(assoc)._key(),_st(_st(assoc)._value())._rgbaString());
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"populateRamp:",{aRamp:aRamp},smalltalk.AthensHTMLGradientPaint)})},
messageSends: ["do:", "addColorStop:a:", "key", "rgbaString", "value"]}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "start:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@start"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"start:",{aPoint:aPoint},smalltalk.AthensHTMLGradientPaint)})},
messageSends: []}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "stop:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stop"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"stop:",{aPoint:aPoint},smalltalk.AthensHTMLGradientPaint)})},
messageSends: []}),
smalltalk.AthensHTMLGradientPaint);


smalltalk.addMethod(
smalltalk.method({
selector: "createLinearGradient:start:stop:",
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
messageSends: ["start:", "basicNew", "stop:", "initialize", "colorRamp:", "yourself"]}),
smalltalk.AthensHTMLGradientPaint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "radialBetween:extending:and:extending:withColorRamp:",
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
messageSends: ["start:", "basicNew", "stop:", "innerRadius:", "outerRadius:", "initialize", "colorRamp:", "yourself"]}),
smalltalk.AthensHTMLGradientPaint.klass);


smalltalk.addClass('AthensHTMLPatternPaint', smalltalk.Object, ['repeatMode'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "asAthensPaintOn:",
fn: function (anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPatternPaint)})},
messageSends: []}),
smalltalk.AthensHTMLPatternPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
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
messageSends: ["context2D", "beginPath", "set", "pathTransform", "rect:a:a:a:", "left", "top", "width", "height", "apply", "paintTransform", "fillStyle:", "createPattern:a:", "patternSource", "fill"]}),
smalltalk.AthensHTMLPatternPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._noRepeat();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLPatternPaint)})},
messageSends: ["noRepeat"]}),
smalltalk.AthensHTMLPatternPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "noRepeat",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@repeatMode"]="no-repeat";
return self}, function($ctx1) {$ctx1.fill(self,"noRepeat",{},smalltalk.AthensHTMLPatternPaint)})},
messageSends: []}),
smalltalk.AthensHTMLPatternPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "patternSource",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"patternSource",{},smalltalk.AthensHTMLPatternPaint)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensHTMLPatternPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "repeat",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@repeatMode"]="repeat";
return self}, function($ctx1) {$ctx1.fill(self,"repeat",{},smalltalk.AthensHTMLPatternPaint)})},
messageSends: []}),
smalltalk.AthensHTMLPatternPaint);



smalltalk.addClass('AthensHTMLBitmapPaint', smalltalk.AthensHTMLPatternPaint, ['bitmap', 'loadingCallback'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "bitmap:",
fn: function (aBitmap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@bitmap"]=aBitmap;
return self}, function($ctx1) {$ctx1.fill(self,"bitmap:",{aBitmap:aBitmap},smalltalk.AthensHTMLBitmapPaint)})},
messageSends: []}),
smalltalk.AthensHTMLBitmapPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "loadingCallback:",
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
messageSends: ["ifTrue:ifFalse:", "value:", "onLoad:", "image", "complete"]}),
smalltalk.AthensHTMLBitmapPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "patternSource",
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
messageSends: ["ifFalse:", "error:", "complete", "image"]}),
smalltalk.AthensHTMLBitmapPaint);


smalltalk.addMethod(
smalltalk.method({
selector: "forBitmap:",
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
messageSends: ["bitmap:", "new", "yourself"]}),
smalltalk.AthensHTMLBitmapPaint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "forBitmap:afterLoading:",
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
messageSends: ["bitmap:", "new", "loadingCallback:", "yourself"]}),
smalltalk.AthensHTMLBitmapPaint.klass);


smalltalk.addClass('AthensHTMLPatternSurfacePaint', smalltalk.AthensHTMLPatternPaint, ['surface'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "patternSource",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._canvasTag();
return $1;
}, function($ctx1) {$ctx1.fill(self,"patternSource",{},smalltalk.AthensHTMLPatternSurfacePaint)})},
messageSends: ["canvasTag"]}),
smalltalk.AthensHTMLPatternSurfacePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=aSurface;
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},smalltalk.AthensHTMLPatternSurfacePaint)})},
messageSends: []}),
smalltalk.AthensHTMLPatternSurfacePaint);


smalltalk.addMethod(
smalltalk.method({
selector: "forSurface:",
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
messageSends: ["surface:", "new", "yourself"]}),
smalltalk.AthensHTMLPatternSurfacePaint.klass);


smalltalk.addClass('AthensHTMLSolidPaint', smalltalk.AthensPaint, ['color'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.AthensHTMLSolidPaint)})},
messageSends: []}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:on:",
fn: function (aString,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var context2D = anAthensCanvas._context2D();
	context2D.fillStyle = self._rgbaString();
	anAthensCanvas._pathTransform()._set();
	context2D.fillText(aString, 0, 0); ;
return self}, function($ctx1) {$ctx1.fill(self,"drawString:on:",{aString:aString,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
messageSends: []}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
fn: function (aPath,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var context2D = anAthensCanvas._context2D();
	anAthensCanvas._pathTransform()._set();
	context2D.fillStyle = self._rgbaString();
	aPath._drawOn_(anAthensCanvas);
	context2D.fill(); ;
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
messageSends: []}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
fn: function (aRect,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var context2D = anAthensCanvas._context2D();
	anAthensCanvas._pathTransform()._set();
	context2D.fillStyle = self._rgbaString();
	context2D.fillRect(aRect._left(), aRect._top(), aRect._width(), aRect._height()); ;
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
messageSends: []}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "rgbaString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@color"])._rgbaString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"rgbaString",{},smalltalk.AthensHTMLSolidPaint)})},
messageSends: ["rgbaString"]}),
smalltalk.AthensHTMLSolidPaint);



smalltalk.addClass('AthensHTMLStrokePaint', smalltalk.AthensStrokePaint, ['dashLenghts', 'dashOffset'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "capButt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._capStyle_("butt");
return self}, function($ctx1) {$ctx1.fill(self,"capButt",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: ["capStyle:"]}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "capRound",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._capStyle_("round");
return self}, function($ctx1) {$ctx1.fill(self,"capRound",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: ["capStyle:"]}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "capSquare",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._capStyle_("square");
return self}, function($ctx1) {$ctx1.fill(self,"capSquare",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: ["capStyle:"]}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context2D"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "dashes:offset:",
fn: function (anAlternateCollectionOfLenghts,anOffset){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dashLenghts"]=anAlternateCollectionOfLenghts;
self["@dashOffset"]=anOffset;
return self}, function($ctx1) {$ctx1.fill(self,"dashes:offset:",{anAlternateCollectionOfLenghts:anAlternateCollectionOfLenghts,anOffset:anOffset},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
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
self._setDashStyleOn_(context2D);
_st(aPath)._drawOn_(anAthensCanvas);
_st(context2D)._stroke();
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas,context2D:context2D},smalltalk.AthensHTMLStrokePaint)})},
messageSends: ["context2D", "set", "pathTransform", "strokeStyle:", "rgbaString", "lineWidth:", "lineJoin:", "lineCap:", "setDashStyleOn:", "drawOn:", "stroke"]}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensStrokePaint.fn.prototype._initialize.apply(_st(self), []);
self["@width"]=(1);
self["@joinStyle"]=nil;
self["@capStyle"]=self["@joinStyle"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: ["initialize"]}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "joinBevel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._joinStyle_("bevel");
return self}, function($ctx1) {$ctx1.fill(self,"joinBevel",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: ["joinStyle:"]}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "joinMiter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._joinStyle_("miter");
return self}, function($ctx1) {$ctx1.fill(self,"joinMiter",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: ["joinStyle:"]}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "joinRound",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._joinStyle_("round");
return self}, function($ctx1) {$ctx1.fill(self,"joinRound",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: ["joinStyle:"]}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "setDashStyleOn:",
fn: function (context2D){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(context2D)._setLineDash_(self["@dashLenghts"]);
_st(context2D)._lineDashOffset_(self["@dashOffset"]);
return self}, function($ctx1) {$ctx1.fill(self,"setDashStyleOn:",{context2D:context2D},smalltalk.AthensHTMLStrokePaint)})},
messageSends: ["setLineDash:", "lineDashOffset:"]}),
smalltalk.AthensHTMLStrokePaint);




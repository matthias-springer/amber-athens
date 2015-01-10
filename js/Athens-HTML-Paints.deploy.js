smalltalk.addPackage('Athens-HTML-Paints');
smalltalk.addClass('AthensHTMLPaint', smalltalk.AthensPaint, ['fillStyle'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "asAthensPaintOn:",
fn: function (anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPaint)})},
messageSends: []}),
smalltalk.AthensHTMLPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:on:",
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
messageSends: ["context2D", "preparePaintFor:", "beginPath", "fillStyle:", "fillText:X:Y:"]}),
smalltalk.AthensHTMLPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
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
messageSends: ["context2D", "preparePaintFor:", "beginPath", "drawOn:", "push", "multiplyBy:", "paintTransform", "pathTransform", "fillStyle:", "fill", "pop"]}),
smalltalk.AthensHTMLPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
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
messageSends: ["context2D", "preparePaintFor:", "beginPath", "rect:", "push", "multiplyBy:", "paintTransform", "pathTransform", "fillStyle:", "fill", "pop"]}),
smalltalk.AthensHTMLPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillStyle",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fillStyle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fillStyle",{},smalltalk.AthensHTMLPaint)})},
messageSends: []}),
smalltalk.AthensHTMLPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "preparePaintFor:",
fn: function (context2D){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"preparePaintFor:",{context2D:context2D},smalltalk.AthensHTMLPaint)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensHTMLPaint);



smalltalk.addClass('AthensHTMLGradientPaint', smalltalk.AthensHTMLPaint, ['start', 'stop', 'innerRadius', 'outerRadius', 'colorRamp'], 'Athens-HTML-Paints');
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
selector: "preparePaintFor:",
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
messageSends: ["ifTrue:ifFalse:", "createLinearGradientFrom:to:", "createRadialGradientFrom:with:to:with:", "==", "keysAndValuesDo:", "addColorStopAt:color:", "rgbaString"]}),
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


smalltalk.addClass('AthensHTMLPatternPaint', smalltalk.AthensHTMLPaint, ['repeatMode', 'anAthensCanvas', 'patternSource'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@repeatMode"]="no-repeat";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLPatternPaint)})},
messageSends: []}),
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
selector: "preparePaintFor:",
fn: function (context2D){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fillStyle"]=_st(context2D)._createPattern_repeat_(self["@patternSource"],self["@repeatMode"]);
return self}, function($ctx1) {$ctx1.fill(self,"preparePaintFor:",{context2D:context2D},smalltalk.AthensHTMLPatternPaint)})},
messageSends: ["createPattern:repeat:"]}),
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



smalltalk.addClass('AthensHTMLBitmapPaint', smalltalk.AthensHTMLPatternPaint, [], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "bitmap:",
fn: function (aBitmap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@patternSource"]=aBitmap;
return self}, function($ctx1) {$ctx1.fill(self,"bitmap:",{aBitmap:aBitmap},smalltalk.AthensHTMLBitmapPaint)})},
messageSends: []}),
smalltalk.AthensHTMLBitmapPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@patternSource"])._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.AthensHTMLBitmapPaint)})},
messageSends: ["height"]}),
smalltalk.AthensHTMLBitmapPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "loadingCallback:",
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
messageSends: ["ifTrue:ifFalse:", "value:", "onLoad:", "complete"]}),
smalltalk.AthensHTMLBitmapPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@patternSource"])._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.AthensHTMLBitmapPaint)})},
messageSends: ["width"]}),
smalltalk.AthensHTMLBitmapPaint);


smalltalk.addMethod(
smalltalk.method({
selector: "fromImage:",
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
messageSends: ["bitmap:", "new", "yourself"]}),
smalltalk.AthensHTMLBitmapPaint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromImage:afterLoading:",
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
messageSends: ["bitmap:", "new", "loadingCallback:", "yourself"]}),
smalltalk.AthensHTMLBitmapPaint.klass);


smalltalk.addClass('AthensHTMLPatternSurfacePaint', smalltalk.AthensHTMLPatternPaint, ['surface'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@patternSource"]=_st(aSurface)._canvasTag();
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},smalltalk.AthensHTMLPatternSurfacePaint)})},
messageSends: ["canvasTag"]}),
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


smalltalk.addClass('AthensHTMLSolidPaint', smalltalk.AthensHTMLPaint, ['color'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fillStyle"]=_st(aColor)._rgbaString();
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.AthensHTMLSolidPaint)})},
messageSends: ["rgbaString"]}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:on:",
fn: function (aString,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(anAthensCanvas)._context2D();
_st($1)._fillStyle_(self["@fillStyle"]);
$2=_st($1)._fillText_X_Y_(aString,(0),(0));
return self}, function($ctx1) {$ctx1.fill(self,"drawString:on:",{aString:aString,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
messageSends: ["fillStyle:", "context2D", "fillText:X:Y:"]}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
fn: function (aPath,anAthensCanvas){
var self=this;
var context2D;
return smalltalk.withContext(function($ctx1) { 
context2D=_st(anAthensCanvas)._context2D();
_st(context2D)._fillStyle_(self["@fillStyle"]);
_st(aPath)._drawOn_(anAthensCanvas);
_st(context2D)._fill();
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas,context2D:context2D},smalltalk.AthensHTMLSolidPaint)})},
messageSends: ["context2D", "fillStyle:", "drawOn:", "fill"]}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
fn: function (aRect,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(anAthensCanvas)._context2D();
_st($1)._fillStyle_(self["@fillStyle"]);
$2=_st($1)._fillRect_(aRect);
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
messageSends: ["fillStyle:", "context2D", "fillRect:"]}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "preparePaintFor:",
fn: function (context2D){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"preparePaintFor:",{context2D:context2D},smalltalk.AthensHTMLSolidPaint)})},
messageSends: []}),
smalltalk.AthensHTMLSolidPaint);



smalltalk.addClass('AthensHTMLStrokePaint', smalltalk.AthensStrokePaint, ['dashOffset', 'dashLengths'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "capButt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@capStyle"]="butt";
return self}, function($ctx1) {$ctx1.fill(self,"capButt",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "capRound",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@capStyle"]="round";
return self}, function($ctx1) {$ctx1.fill(self,"capRound",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "capSquare",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@capStyle"]="square";
return self}, function($ctx1) {$ctx1.fill(self,"capSquare",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "dashes:offset:",
fn: function (anAlternateCollectionOfLenghts,anOffset){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dashLengths"]=anAlternateCollectionOfLenghts;
self["@dashOffset"]=anOffset;
return self}, function($ctx1) {$ctx1.fill(self,"dashes:offset:",{anAlternateCollectionOfLenghts:anAlternateCollectionOfLenghts,anOffset:anOffset},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
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
messageSends: ["strokeStyle:", "fillStyle", "context2D", "lineWidth:", "lineJoin:", "lineCap:", "lineDash:", "lineDashOffset:", "drawOn:", "stroke"]}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
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
messageSends: ["strokeStyle:", "fillStyle", "context2D", "lineWidth:", "lineJoin:", "lineCap:", "lineDash:", "lineDashOffset:", "strokeRect:"]}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensStrokePaint.fn.prototype._initialize.apply(_st(self), []);
self["@dashLengths"]=_st($OrderedCollection())._new();
self["@width"]=(1);
self["@joinStyle"]=nil;
self["@capStyle"]=self["@joinStyle"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: ["initialize", "new"]}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "joinBevel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@joinStyle"]="bevel";
return self}, function($ctx1) {$ctx1.fill(self,"joinBevel",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "joinMiter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@joinStyle"]="miter";
return self}, function($ctx1) {$ctx1.fill(self,"joinMiter",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "joinRound",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@joinStyle"]="round";
return self}, function($ctx1) {$ctx1.fill(self,"joinRound",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);




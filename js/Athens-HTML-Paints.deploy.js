smalltalk.addPackage('Athens-HTML-Paints');
smalltalk.addClass('AthensHTMLPatternPaint', smalltalk.Object, [], 'Athens-HTML-Paints');
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



smalltalk.addClass('AthensHTMLGradientPaint', smalltalk.AthensHTMLPatternPaint, ['start', 'stop', 'gradient', 'context2D', 'innerRadius', 'outerRadius'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "context:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context2D"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.AthensHTMLGradientPaint)})},
messageSends: []}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
fn: function (aRect,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._beginPath();
_st(_st(anAthensCanvas)._pathTransform())._set();
_st(self["@context2D"])._rect_a_a_a_(_st(aRect)._left(),_st(aRect)._top(),_st(aRect)._width(),_st(aRect)._height());
_st(_st(anAthensCanvas)._paintTransform())._apply();
_st(self["@context2D"])._fillStyle_(self["@gradient"]);
_st(self["@context2D"])._fill();
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLGradientPaint)})},
messageSends: ["beginPath", "set", "pathTransform", "rect:a:a:a:", "left", "top", "width", "height", "apply", "paintTransform", "fillStyle:", "fill"]}),
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
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@innerRadius"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@gradient"]=_st(self["@context2D"])._createLinearGradient_a_a_a_(_st(self["@start"])._x(),_st(self["@start"])._y(),_st(self["@stop"])._x(),_st(self["@stop"])._y());
self["@gradient"];
} else {
self["@gradient"]=_st(self["@context2D"])._createRadialGradient_a_a_a_a_a_(_st(self["@start"])._x(),_st(self["@start"])._y(),self["@innerRadius"],_st(self["@stop"])._x(),_st(self["@stop"])._y(),self["@outerRadius"]);
self["@gradient"];
};
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLGradientPaint)})},
messageSends: ["ifNil:ifNotNil:", "createLinearGradient:a:a:a:", "x", "y", "createRadialGradient:a:a:a:a:a:"]}),
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
selector: "createLinearGradient:start:stop:context:",
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
}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:start:stop:context:",{aColorRamp:aColorRamp,aStartPoint:aStartPoint,aStopPoint:aStopPoint,aContext:aContext},smalltalk.AthensHTMLGradientPaint.klass)})},
messageSends: ["start:", "basicNew", "stop:", "context:", "initialize", "populateRamp:", "yourself"]}),
smalltalk.AthensHTMLGradientPaint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "radialBetween:extending:and:extending:withColorRamp:context:",
fn: function (origin,innerRadius,outerOrigin,outerRadius,aColorRamp,aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._start_(origin);
_st($2)._stop_(outerOrigin);
_st($2)._innerRadius_(innerRadius);
_st($2)._outerRadius_(outerRadius);
_st($2)._context_(aContext);
_st($2)._initialize();
_st($2)._populateRamp_(aColorRamp);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"radialBetween:extending:and:extending:withColorRamp:context:",{origin:origin,innerRadius:innerRadius,outerOrigin:outerOrigin,outerRadius:outerRadius,aColorRamp:aColorRamp,aContext:aContext},smalltalk.AthensHTMLGradientPaint.klass)})},
messageSends: ["start:", "basicNew", "stop:", "innerRadius:", "outerRadius:", "context:", "initialize", "populateRamp:", "yourself"]}),
smalltalk.AthensHTMLGradientPaint.klass);


smalltalk.addClass('AthensHTMLSolidPaint', smalltalk.AthensPaint, ['color', 'context2D'], 'Athens-HTML-Paints');
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
selector: "context:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context2D"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.AthensHTMLSolidPaint)})},
messageSends: []}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
fn: function (aPath,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(anAthensCanvas)._pathTransform())._set();
_st(self["@context2D"])._fillStyle_(self._rgbaString());
_st(aPath)._draw();
_st(self["@context2D"])._fill();
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
messageSends: ["set", "pathTransform", "fillStyle:", "rgbaString", "draw", "fill"]}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
fn: function (aRect,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(anAthensCanvas)._pathTransform())._set();
_st(self["@context2D"])._fillStyle_(self._rgbaString());
_st(self["@context2D"])._fillRect_a_a_a_(_st(aRect)._left(),_st(aRect)._top(),_st(aRect)._width(),_st(aRect)._height());
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
messageSends: ["set", "pathTransform", "fillStyle:", "rgbaString", "fillRect:a:a:a:", "left", "top", "width", "height"]}),
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



smalltalk.addClass('AthensHTMLStrokePaint', smalltalk.AthensStrokePaint, ['dashLenghts', 'dashOffset', 'context2D'], 'Athens-HTML-Paints');
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
selector: "fillPath:on:",
fn: function (aPath,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(anAthensCanvas)._pathTransform())._set();
_st(self["@context2D"])._strokeStyle_(_st(self["@fillPaint"])._rgbaString());
_st(self["@context2D"])._lineWidth_(self["@width"]);
_st(aPath)._draw();
_st(self["@context2D"])._stroke();
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLStrokePaint)})},
messageSends: ["set", "pathTransform", "strokeStyle:", "rgbaString", "lineWidth:", "draw", "stroke"]}),
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




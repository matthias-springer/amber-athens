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



smalltalk.addClass('AthensHTMLGradientPaint', smalltalk.AthensHTMLPatternPaint, ['start', 'stop', 'gradient', 'context2D'], 'Athens-HTML-Paints');
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
_st(_st(anAthensCanvas)._pathTransform())._applyToContext();
_st(self["@context2D"])._rect_a_a_a_(_st(aRect)._left(),_st(aRect)._top(),_st(aRect)._width(),_st(aRect)._height());
_st(_st(anAthensCanvas)._paintTransform())._applyToContext();
_st(self["@context2D"])._fillStyle_(self["@gradient"]);
_st(self["@context2D"])._fill();
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLGradientPaint)})},
messageSends: ["beginPath", "applyToContext", "pathTransform", "rect:a:a:a:", "left", "top", "width", "height", "paintTransform", "fillStyle:", "fill"]}),
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
self["@gradient"]=_st(self["@context2D"])._createLinearGradient_a_a_a_(_st(self["@start"])._x(),_st(self["@start"])._y(),_st(self["@stop"])._x(),_st(self["@stop"])._y());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLGradientPaint)})},
messageSends: ["createLinearGradient:a:a:a:", "x", "y"]}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "populateRamp:",
fn: function (aRamp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aRamp)._do_((function(assoc){
return smalltalk.withContext(function($ctx2) {
return _st(self["@gradient"])._addColorStop_a_(_st(assoc)._key(),_st(_st(assoc)._value())._hexString());
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"populateRamp:",{aRamp:aRamp},smalltalk.AthensHTMLGradientPaint)})},
messageSends: ["do:", "addColorStop:a:", "key", "hexString", "value"]}),
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
selector: "createLinearGradient:start:stop:on:",
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
messageSends: ["start:", "basicNew", "stop:", "context:", "initialize", "populateRamp:", "yourself"]}),
smalltalk.AthensHTMLGradientPaint.klass);


smalltalk.addClass('AthensHTMLSolidPaint', smalltalk.AthensPaint, ['r', 'g', 'b', 'a', 'context2D'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "alpha",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@a"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"alpha",{},smalltalk.AthensHTMLSolidPaint)})},
messageSends: []}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "blue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@b"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"blue",{},smalltalk.AthensHTMLSolidPaint)})},
messageSends: []}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@r"]=_st(_st(aColor)._red()).__star((255));
self["@g"]=_st(_st(aColor)._green()).__star((255));
self["@b"]=_st(_st(aColor)._blue()).__star((255));
self["@a"]=_st(aColor)._alpha();
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.AthensHTMLSolidPaint)})},
messageSends: ["*", "red", "green", "blue", "alpha"]}),
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
_st(_st(anAthensCanvas)._pathTransform())._applyToContext();
_st(self["@context2D"])._fillStyle_(_st(_st(_st(_st(_st(_st(_st("rgba(".__comma(self["@r"])).__comma(", ")).__comma(self["@g"])).__comma(", ")).__comma(self["@b"])).__comma(", ")).__comma(self["@a"])).__comma(")"));
_st(aPath)._draw();
_st(self["@context2D"])._fill();
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
messageSends: ["applyToContext", "pathTransform", "fillStyle:", ",", "draw", "fill"]}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
fn: function (aRect,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(anAthensCanvas)._pathTransform())._applyToContext();
_st(self["@context2D"])._fillStyle_(_st(_st(_st(_st(_st(_st(_st("rgba(".__comma(_st(self["@r"])._asString())).__comma(", ")).__comma(_st(self["@g"])._asString())).__comma(", ")).__comma(_st(self["@b"])._asString())).__comma(", ")).__comma(_st(self["@a"])._asString())).__comma(")"));
_st(self["@context2D"])._fillRect_a_a_a_(_st(aRect)._left(),_st(aRect)._top(),_st(aRect)._width(),_st(aRect)._height());
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
messageSends: ["applyToContext", "pathTransform", "fillStyle:", ",", "asString", "fillRect:a:a:a:", "left", "top", "width", "height"]}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "green",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@g"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.AthensHTMLSolidPaint)})},
messageSends: []}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "red",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@r"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.AthensHTMLSolidPaint)})},
messageSends: []}),
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
_st(_st(anAthensCanvas)._pathTransform())._applyToContext();
_st(self["@context2D"])._strokeStyle_(_st(_st(_st(_st(_st(_st(_st("rgba(".__comma(_st(self["@fillPaint"])._red())).__comma(", ")).__comma(_st(self["@fillPaint"])._green())).__comma(", ")).__comma(_st(self["@fillPaint"])._blue())).__comma(", ")).__comma(_st(self["@fillPaint"])._alpha())).__comma(")"));
_st(self["@context2D"])._lineWidth_(self["@width"]);
_st(aPath)._draw();
_st(self["@context2D"])._stroke();
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLStrokePaint)})},
messageSends: ["applyToContext", "pathTransform", "strokeStyle:", ",", "alpha", "blue", "green", "red", "lineWidth:", "draw", "stroke"]}),
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
selector: "loadOn:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._fillPaint())._loadOn_(aCanvas);
return self}, function($ctx1) {$ctx1.fill(self,"loadOn:",{aCanvas:aCanvas},smalltalk.AthensHTMLStrokePaint)})},
messageSends: ["loadOn:", "fillPaint"]}),
smalltalk.AthensHTMLStrokePaint);




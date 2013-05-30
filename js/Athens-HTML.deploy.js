smalltalk.addPackage('Athens-HTML');
smalltalk.addClass('AthensHTMLCanvas', smalltalk.AthensCanvas, ['pathTransform', 'paintTransform', 'currentClipRect'], 'Athens-HTML');
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
selector: "rectangleX:y:width:height:",
fn: function (x,y,aWidth,aHeight){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._fillRect_a_a_a_(x,y,aWidth,aHeight);
return self}, function($ctx1) {$ctx1.fill(self,"rectangleX:y:width:height:",{x:x,y:y,aWidth:aWidth,aHeight:aHeight},smalltalk.AthensHTMLCanvas)})},
messageSends: ["fillRect:a:a:a:", "context2D"]}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "setSourceR:g:b:a:",
fn: function (red,green,blue,alpha){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._fillStyle_(_st(_st(_st(_st(_st(_st(_st("rgba(".__comma(_st(red)._asString())).__comma(", ")).__comma(_st(green)._asString())).__comma(", ")).__comma(_st(blue)._asString())).__comma(", ")).__comma(_st(alpha)._asString())).__comma(")"));
return self}, function($ctx1) {$ctx1.fill(self,"setSourceR:g:b:a:",{red:red,green:green,blue:blue,alpha:alpha},smalltalk.AthensHTMLCanvas)})},
messageSends: ["fillStyle:", ",", "asString", "context2D"]}),
smalltalk.AthensHTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
fn: function (anHTMLSurface){
var self=this;
function $AthensHTMLMatrix(){return smalltalk.AthensHTMLMatrix||(typeof AthensHTMLMatrix=="undefined"?nil:AthensHTMLMatrix)}
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=anHTMLSurface;
self["@pathTransform"]=_st($AthensHTMLMatrix())._on_(self["@surface"]);
self["@paintTransform"]=_st($AthensHTMLMatrix())._on_(self["@surface"]);
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensHTMLCanvas)})},
messageSends: ["on:"]}),
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
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensHTMLCanvas.klass)})},
messageSends: ["surface:", "basicNew", "initialize", "yourself"]}),
smalltalk.AthensHTMLCanvas.klass);


smalltalk.addClass('AthensHTMLSurface', smalltalk.AthensSurface, ['extent', 'canvasTag', 'context2D', 'athensCanvas'], 'Athens-HTML');
smalltalk.addMethod(
smalltalk.method({
selector: "attemptToRecurseDrawing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"attemptToRecurseDrawing",{},smalltalk.AthensHTMLSurface)})},
messageSends: []}),
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
self._clear_(nil);
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.AthensHTMLSurface)})},
messageSends: ["clear:"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "clear:",
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
messageSends: ["clearRect:a:a:a:", "width", "height", "ifNotNil:", "drawDuring:", "setPaint:", "setShape:", "corner:", "@", "draw"]}),
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
selector: "createSolidColorPaint:",
fn: function (aColor){
var self=this;
function $AthensHTMLSolidPaint(){return smalltalk.AthensHTMLSolidPaint||(typeof AthensHTMLSolidPaint=="undefined"?nil:AthensHTMLSolidPaint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($AthensHTMLSolidPaint())._new())._color_(aColor);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createSolidColorPaint:",{aColor:aColor},smalltalk.AthensHTMLSurface)})},
messageSends: ["color:", "new"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "drawDuring:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentCanvas"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._attemptToRecurseDrawing();
};
_st((function(){
return smalltalk.withContext(function($ctx2) {
self["@currentCanvas"]=self["@athensCanvas"];
self["@currentCanvas"];
return _st(aBlock)._value_(self["@currentCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
self["@currentCanvas"]=nil;
return self["@currentCanvas"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawDuring:",{aBlock:aBlock},smalltalk.AthensHTMLSurface)})},
messageSends: ["ifNotNil:", "attemptToRecurseDrawing", "ensure:", "value:"]}),
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
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtent:anExtent},smalltalk.AthensHTMLSurface)})},
messageSends: []}),
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
var html;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
html=_st($HTMLCanvas())._onJQuery_("#workspace"._asJQuery());
_st("#workspace"._asJQuery())._empty();
self["@canvasTag"]=_st(html)._canvas();
_st(self["@canvasTag"])._height_(self._height());
_st(self["@canvasTag"])._width_(self._width());
_st(_st(self["@canvasTag"])._asJQuery())._css_with_("background-color","#000000");
self["@context2D"]=_st(_st(self["@canvasTag"])._element())._getContext_("2d");
self["@athensCanvas"]=self._newCanvas();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{html:html},smalltalk.AthensHTMLSurface)})},
messageSends: ["onJQuery:", "asJQuery", "empty", "canvas", "height:", "height", "width:", "width", "css:with:", "getContext:", "element", "newCanvas"]}),
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



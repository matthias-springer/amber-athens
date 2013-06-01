smalltalk.addPackage('Athens-HTML-Paints');
smalltalk.addClass('AthensHTMLSolidPaint', smalltalk.AthensPaint, ['r', 'g', 'b', 'a'], 'Athens-HTML-Paints');
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
selector: "fillPath:on:",
fn: function (path,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._loadOn_(anAthensCanvas);
$1=anAthensCanvas;
_st($1)._newPath();
$2=_st($1)._loadPath_(path);
self._fillOn_(anAthensCanvas);
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{path:path,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
messageSends: ["loadOn:", "newPath", "loadPath:", "fillOn:"]}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
fn: function (aRect,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._loadOn_(anAthensCanvas);
_st(anAthensCanvas)._rectangleX_y_width_height_(_st(aRect)._left(),_st(aRect)._top(),_st(aRect)._width(),_st(aRect)._height());
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
messageSends: ["loadOn:", "rectangleX:y:width:height:", "left", "top", "width", "height"]}),
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
selector: "loadOn:",
fn: function (anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anAthensCanvas)._setSourceR_g_b_a_(self["@r"],self["@g"],self["@b"],self["@a"]);
return self}, function($ctx1) {$ctx1.fill(self,"loadOn:",{anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
messageSends: ["setSourceR:g:b:a:"]}),
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



smalltalk.addClass('AthensHTMLStrokePaint', smalltalk.AthensStrokePaint, ['dashLenghts', 'dashOffset'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
fn: function (aPath,anAthensCanvas){
var self=this;
var context;
return smalltalk.withContext(function($ctx1) { 
context=_st(_st(anAthensCanvas)._surface())._context2D();
_st(context)._strokeStyle_(_st(_st(_st(_st(_st(_st(_st("rgba(".__comma(_st(self["@fillPaint"])._red())).__comma(", ")).__comma(_st(self["@fillPaint"])._green())).__comma(", ")).__comma(_st(self["@fillPaint"])._blue())).__comma(", ")).__comma(_st(self["@fillPaint"])._alpha())).__comma(")"));
_st(context)._lineWidth_(self["@width"]);
_st(aPath)._draw();
_st(context)._stroke();
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas,context:context},smalltalk.AthensHTMLStrokePaint)})},
messageSends: ["context2D", "surface", "strokeStyle:", ",", "alpha", "blue", "green", "red", "lineWidth:", "draw", "stroke"]}),
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




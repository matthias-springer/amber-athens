smalltalk.addPackage('Athens-HTML-Paints');
smalltalk.addClass('AthensHTMLSolidPaint', smalltalk.AthensPaint, ['r', 'g', 'b', 'a'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "alpha",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@a"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"alpha",{},smalltalk.AthensHTMLSolidPaint)})},
args: [],
source: "alpha\x0a\x09^ a",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "blue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@b"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"blue",{},smalltalk.AthensHTMLSolidPaint)})},
args: [],
source: "blue\x0a\x09^ b",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@r"]=_st(_st(aColor)._red()).__star((255));
self["@g"]=_st(_st(aColor)._green()).__star((255));
self["@b"]=_st(_st(aColor)._blue()).__star((255));
self["@a"]=_st(aColor)._alpha();
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.AthensHTMLSolidPaint)})},
args: ["aColor"],
source: "color: aColor\x0a\x09r := aColor red * 255.\x0a\x09g := aColor green * 255.\x0a\x09b := aColor blue * 255.\x0a\x09a := aColor alpha.",
messageSends: ["*", "red", "green", "blue", "alpha"],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
category: 'drawing',
fn: function (aPath,anAthensCanvas){
var self=this;
var context;
return smalltalk.withContext(function($ctx1) { 
context=_st(_st(anAthensCanvas)._surface())._context2D();
_st(context)._fillStyle_(_st(_st(_st(_st(_st(_st(_st("rgba(".__comma(self["@r"])).__comma(", ")).__comma(self["@g"])).__comma(", ")).__comma(self["@b"])).__comma(", ")).__comma(self["@a"])).__comma(")"));
_st(aPath)._draw();
_st(context)._fill();
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas,context:context},smalltalk.AthensHTMLSolidPaint)})},
args: ["aPath", "anAthensCanvas"],
source: "fillPath: aPath on: anAthensCanvas\x0a\x09|context|\x0a\x09context := anAthensCanvas surface context2D.\x0a\x09context fillStyle: 'rgba(', r, ', ', g, ', ', b, ', ', a, ')'.\x0a\x09aPath draw.\x0a\x09context fill.",
messageSends: ["context2D", "surface", "fillStyle:", ",", "draw", "fill"],
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
self._loadOn_(anAthensCanvas);
_st(anAthensCanvas)._rectangleX_y_width_height_(_st(aRect)._left(),_st(aRect)._top(),_st(aRect)._width(),_st(aRect)._height());
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
args: ["aRect", "anAthensCanvas"],
source: "fillRectangle: aRect on: anAthensCanvas\x0a\x09\x22This is a terminal method in rendering dispatch scheme\x0a\x09canvas->shape->paint. See AthensCanvas>>fillShape: \x22\x0a\x09self loadOn: anAthensCanvas.\x0a\x09anAthensCanvas rectangleX: aRect left y: aRect top width: aRect width height: aRect height.",
messageSends: ["loadOn:", "rectangleX:y:width:height:", "left", "top", "width", "height"],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "green",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@g"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.AthensHTMLSolidPaint)})},
args: [],
source: "green\x0a\x09^ g",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "loadOn:",
category: 'drawing',
fn: function (anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anAthensCanvas)._setSourceR_g_b_a_(self["@r"],self["@g"],self["@b"],self["@a"]);
return self}, function($ctx1) {$ctx1.fill(self,"loadOn:",{anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
args: ["anAthensCanvas"],
source: "loadOn: anAthensCanvas\x0a\x09anAthensCanvas setSourceR: r g: g b: b a: a.\x0a\x09",
messageSends: ["setSourceR:g:b:a:"],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "red",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@r"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.AthensHTMLSolidPaint)})},
args: [],
source: "red\x0a\x09^ r",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSolidPaint);



smalltalk.addClass('AthensHTMLStrokePaint', smalltalk.AthensStrokePaint, ['dashLenghts', 'dashOffset'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
category: 'drawing',
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
args: ["aPath", "anAthensCanvas"],
source: "fillPath: aPath on: anAthensCanvas\x0a\x09|context|\x0a\x09context := anAthensCanvas surface context2D.\x0a\x09context strokeStyle: 'rgba(', fillPaint red, ', ', fillPaint green, ', ', fillPaint blue, ', ', fillPaint alpha, ')'.\x0a\x09context lineWidth: width.\x0a\x09aPath draw.\x0a\x09context stroke.",
messageSends: ["context2D", "surface", "strokeStyle:", ",", "alpha", "blue", "green", "red", "lineWidth:", "draw", "stroke"],
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
selector: "loadOn:",
category: 'drawing',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._fillPaint())._loadOn_(aCanvas);
return self}, function($ctx1) {$ctx1.fill(self,"loadOn:",{aCanvas:aCanvas},smalltalk.AthensHTMLStrokePaint)})},
args: ["aCanvas"],
source: "loadOn: aCanvas\x0a\x09self fillPaint loadOn: aCanvas.",
messageSends: ["loadOn:", "fillPaint"],
referencedClasses: []
}),
smalltalk.AthensHTMLStrokePaint);




smalltalk.addPackage('Athens-HTML-Paints');
smalltalk.addClass('AthensHTMLSolidPaint', smalltalk.AthensPaint, ['r', 'g', 'b', 'a'], 'Athens-HTML-Paints');
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
args: ["path", "anAthensCanvas"],
source: "fillPath: path on: anAthensCanvas \x0a\x09self loadOn: anAthensCanvas.\x0a\x09anAthensCanvas\x0a\x09\x09newPath;\x0a\x09\x09loadPath: path.\x0a\x09\x09\x0a\x09self fillOn: anAthensCanvas",
messageSends: ["loadOn:", "newPath", "loadPath:", "fillOn:"],
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




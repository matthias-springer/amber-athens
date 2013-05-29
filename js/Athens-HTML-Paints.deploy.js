smalltalk.addPackage('Athens-HTML-Paints');
smalltalk.addClass('AthensHTMLSolidPaint', smalltalk.AthensPaint, ['r', 'g', 'b', 'a'], 'Athens-HTML-Paints');
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
selector: "loadOn:",
fn: function (anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anAthensCanvas)._setSourceR_g_b_a_(self["@r"],self["@g"],self["@b"],self["@a"]);
return self}, function($ctx1) {$ctx1.fill(self,"loadOn:",{anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
messageSends: ["setSourceR:g:b:a:"]}),
smalltalk.AthensHTMLSolidPaint);




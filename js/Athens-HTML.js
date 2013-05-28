smalltalk.addPackage('Athens-HTML');
smalltalk.addClass('AthensHTMLSurface', smalltalk.AthensSurface, ['extent', 'canvas', 'context2D'], 'Athens-HTML');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor:",
category: 'initializing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._fillStyle_(aString);
_st(self["@context2D"])._fillRect_a_a_a_((0),(0),self._width(),self._height());
return self}, function($ctx1) {$ctx1.fill(self,"backgroundColor:",{aString:aString},smalltalk.AthensHTMLSurface)})},
args: ["aString"],
source: "backgroundColor: aString\x0a\x09context2D fillStyle: aString.\x0a\x09context2D fillRect: 0 a: 0 a: self width a: self height.",
messageSends: ["fillStyle:", "fillRect:a:a:a:", "width", "height"],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.AthensHTMLSurface)})},
args: [],
source: "canvas\x0a\x09^ canvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
category: 'accessing',
fn: function (aDomElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aDomElement;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aDomElement:aDomElement},smalltalk.AthensHTMLSurface)})},
args: ["aDomElement"],
source: "canvas: aDomElement\x0a\x09canvas := aDomElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@extent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.AthensHTMLSurface)})},
args: [],
source: "extent\x0a\x09^ extent",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'accessing',
fn: function (anExtent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@extent"]=anExtent;
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtent:anExtent},smalltalk.AthensHTMLSurface)})},
args: ["anExtent"],
source: "extent: anExtent\x0a\x09extent := anExtent.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@extent"])._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.AthensHTMLSurface)})},
args: [],
source: "height\x0a\x09^ extent y",
messageSends: ["y"],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initializing',
fn: function (){
var self=this;
var html;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
html=_st($HTMLCanvas())._onJQuery_("#workspace"._asJQuery());
_st("#workspace"._asJQuery())._empty();
self["@canvas"]=_st(html)._canvas();
_st(self["@canvas"])._height_(self._height());
_st(self["@canvas"])._width_(self._width());
self["@context2D"]=_st(_st(self["@canvas"])._element())._getContext_("2d");
self._backgroundColor_("#000000");
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{html:html},smalltalk.AthensHTMLSurface)})},
args: [],
source: "initialize\x0a\x09|html|\x0a\x09html := HTMLCanvas onJQuery: '#workspace' asJQuery.\x0a\x09'#workspace' asJQuery empty.\x0a\x09canvas := html canvas.\x0a\x09canvas height: self height.\x0a\x09canvas width: self width.\x0a\x09context2D := canvas element getContext: '2d'.\x0a\x09self backgroundColor: '#000000'.",
messageSends: ["onJQuery:", "asJQuery", "empty", "canvas", "height:", "height", "width:", "width", "getContext:", "element", "backgroundColor:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@extent"])._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.AthensHTMLSurface)})},
args: [],
source: "width\x0a\x09^ extent x",
messageSends: ["x"],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface);


smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'instance creation',
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
args: ["anExtent"],
source: "extent: anExtent\x0a\x09^ self basicNew\x0a\x09\x09extent: anExtent;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["extent:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLSurface.klass);



smalltalk.addPackage('Athens-HTML');
smalltalk.addClass('AthensHTMLSurface', smalltalk.AthensSurface, ['extent', 'canvas', 'context2D'], 'Athens-HTML');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@context2D"])._fillStyle_(aString);
_st(self["@context2D"])._fillRect_a_a_a_((0),(0),self._width(),self._height());
return self}, function($ctx1) {$ctx1.fill(self,"backgroundColor:",{aString:aString},smalltalk.AthensHTMLSurface)})},
messageSends: ["fillStyle:", "fillRect:a:a:a:", "width", "height"]}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.AthensHTMLSurface)})},
messageSends: []}),
smalltalk.AthensHTMLSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
fn: function (aDomElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aDomElement;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aDomElement:aDomElement},smalltalk.AthensHTMLSurface)})},
messageSends: []}),
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
self["@canvas"]=_st(html)._canvas();
_st(self["@canvas"])._height_(self._height());
_st(self["@canvas"])._width_(self._width());
self["@context2D"]=_st(_st(self["@canvas"])._element())._getContext_("2d");
self._backgroundColor_("#000000");
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{html:html},smalltalk.AthensHTMLSurface)})},
messageSends: ["onJQuery:", "asJQuery", "empty", "canvas", "height:", "height", "width:", "width", "getContext:", "element", "backgroundColor:"]}),
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



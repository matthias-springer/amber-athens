smalltalk.addPackage('Athens-HTML-Morphic');
smalltalk.addClass('AthensHTMLMorphicCanvas', smalltalk.AthensHTMLCanvas, [], 'Athens-HTML-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
category: 'initialization',
fn: function (anHTMLSurface){
var self=this;
function $AthensHTMLMorphicMatrix(){return smalltalk.AthensHTMLMorphicMatrix||(typeof AthensHTMLMorphicMatrix=="undefined"?nil:AthensHTMLMorphicMatrix)}
function $AthensHTMLPaintMode(){return smalltalk.AthensHTMLPaintMode||(typeof AthensHTMLPaintMode=="undefined"?nil:AthensHTMLPaintMode)}
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=anHTMLSurface;
self["@pathTransform"]=_st($AthensHTMLMorphicMatrix())._on_(self["@surface"]);
self["@paintTransform"]=_st($AthensHTMLMorphicMatrix())._on_(self["@surface"]);
self["@paintMode"]=_st($AthensHTMLPaintMode())._on_(self["@surface"]);
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensHTMLMorphicCanvas)})},
args: ["anHTMLSurface"],
source: "surface: anHTMLSurface\x0a\x09surface := anHTMLSurface.\x0a\x09pathTransform := AthensHTMLMorphicMatrix on: surface.\x0a\x09paintTransform := AthensHTMLMorphicMatrix on: surface.\x0a\x09paintMode := AthensHTMLPaintMode on: surface.",
messageSends: ["on:"],
referencedClasses: ["AthensHTMLMorphicMatrix", "AthensHTMLPaintMode"]
}),
smalltalk.AthensHTMLMorphicCanvas);



smalltalk.addClass('AthensHTMLMorphicMatrix', smalltalk.AthensHTMLMatrix, ['relativeIdentity'], 'Athens-HTML-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
self["@relativeIdentity"]=_st($AthensAffineTransform())._new();
smalltalk.AthensHTMLMatrix.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLMorphicMatrix)})},
args: [],
source: "initialize\x0a\x09relativeIdentity := AthensAffineTransform new.\x0a\x09super initialize.",
messageSends: ["new", "initialize"],
referencedClasses: ["AthensAffineTransform"]
}),
smalltalk.AthensHTMLMorphicMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "loadIdentity",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._loadAffineTransform_(self["@relativeIdentity"]);
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensHTMLMorphicMatrix)})},
args: [],
source: "loadIdentity\x0a\x09self loadAffineTransform: relativeIdentity.",
messageSends: ["loadAffineTransform:"],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "setIdentity",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@relativeIdentity"])._loadAffineTransform_(self);
return self}, function($ctx1) {$ctx1.fill(self,"setIdentity",{},smalltalk.AthensHTMLMorphicMatrix)})},
args: [],
source: "setIdentity\x0a\x09relativeIdentity loadAffineTransform: self.",
messageSends: ["loadAffineTransform:"],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicMatrix);



smalltalk.addClass('AthensHTMLMorphicSurface', smalltalk.AthensHTMLSurface, ['world', 'morphBelowHand'], 'Athens-HTML-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "bindEvents",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("click",(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self["@world"])._handleEvent_with_("mouseClick",evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mousedown",(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self["@world"])._handleEvent_with_("mouseDown",evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mousemove",(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self["@world"])._handleEvent_with_("mouseMove",evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mouseup",(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self["@world"])._handleEvent_with_("mouseUp",evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"bindEvents",{},smalltalk.AthensHTMLMorphicSurface)})},
args: [],
source: "bindEvents\x0a\x09canvasTag asJQuery \x0a\x09\x09bind: 'click' \x0a\x09\x09do: [:evt | world handleEvent: #mouseClick with: evt].\x0a\x09canvasTag asJQuery \x0a\x09\x09bind: 'mousedown' \x0a\x09\x09do: [:evt | world handleEvent: #mouseDown with: evt].\x0a\x09canvasTag asJQuery \x0a\x09\x09bind: 'mousemove' \x0a\x09\x09do: [:evt | world handleEvent: #mouseMove with: evt].\x0a\x09canvasTag asJQuery \x0a\x09\x09bind: 'mouseup' \x0a\x09\x09do: [:evt | world handleEvent: #mouseUp with: evt].",
messageSends: ["bind:do:", "handleEvent:with:", "asJQuery"],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $AthensWorldMorph(){return smalltalk.AthensWorldMorph||(typeof AthensWorldMorph=="undefined"?nil:AthensWorldMorph)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensHTMLSurface.fn.prototype._initialize.apply(_st(self), []);
self["@world"]=_st($AthensWorldMorph())._forSurface_(self);
self._bindEvents();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLMorphicSurface)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09world := AthensWorldMorph forSurface: self.\x0a\x09self bindEvents.",
messageSends: ["initialize", "forSurface:", "bindEvents"],
referencedClasses: ["AthensWorldMorph"]
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "newCanvas",
category: 'private',
fn: function (){
var self=this;
function $AthensHTMLMorphicCanvas(){return smalltalk.AthensHTMLMorphicCanvas||(typeof AthensHTMLMorphicCanvas=="undefined"?nil:AthensHTMLMorphicCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLMorphicCanvas())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCanvas",{},smalltalk.AthensHTMLMorphicSurface)})},
args: [],
source: "newCanvas\x0a\x09^ AthensHTMLMorphicCanvas on: self",
messageSends: ["on:"],
referencedClasses: ["AthensHTMLMorphicCanvas"]
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensHTMLSurface.fn.prototype._renderOn_.apply(_st(self), [html]);
_st(self["@world"])._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.AthensHTMLMorphicSurface)})},
args: ["html"],
source: "renderOn: html\x0a\x09super renderOn: html.\x0a\x09world redraw.",
messageSends: ["renderOn:", "redraw"],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "world",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@world"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"world",{},smalltalk.AthensHTMLMorphicSurface)})},
args: [],
source: "world\x0a\x09^ world",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicSurface);




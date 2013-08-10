smalltalk.addPackage('Athens-HTML-Morphic');
smalltalk.addClass('AthensHTMLMorphicCanvas', smalltalk.AthensHTMLCanvas, [], 'Athens-HTML-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
category: 'initialization',
fn: function (anHTMLSurface){
var self=this;
function $AthensHTMLMorphicTransformation(){return smalltalk.AthensHTMLMorphicTransformation||(typeof AthensHTMLMorphicTransformation=="undefined"?nil:AthensHTMLMorphicTransformation)}
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
function $AthensHTMLPaintMode(){return smalltalk.AthensHTMLPaintMode||(typeof AthensHTMLPaintMode=="undefined"?nil:AthensHTMLPaintMode)}
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=anHTMLSurface;
self["@pathTransform"]=_st($AthensHTMLMorphicTransformation())._on_(self["@surface"]);
self["@paintTransform"]=_st($AthensAffineTransform())._new();
self["@paintMode"]=_st($AthensHTMLPaintMode())._on_(self["@surface"]);
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensHTMLMorphicCanvas)})},
args: ["anHTMLSurface"],
source: "surface: anHTMLSurface\x0a\x09surface := anHTMLSurface.\x0a\x09pathTransform := AthensHTMLMorphicTransformation on: surface.\x0a\x09paintTransform := AthensAffineTransform new.\x0a\x09paintMode := AthensHTMLPaintMode on: surface.",
messageSends: ["on:", "new"],
referencedClasses: ["AthensHTMLMorphicTransformation", "AthensAffineTransform", "AthensHTMLPaintMode"]
}),
smalltalk.AthensHTMLMorphicCanvas);



smalltalk.addClass('AthensHTMLMorphicSurface', smalltalk.AthensHTMLSurface, ['world', 'morphBelowHand', 'isMouseDown'], 'Athens-HTML-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "bindEvents",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("dblclick",(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(self["@world"])._handleEvent_with_("mouseDoubleClick",evt);
return _st(evt)._preventDefault();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("click",(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(self["@world"])._handleEvent_with_("mouseClick",evt);
return _st(evt)._preventDefault();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mousedown",(function(evt){
return smalltalk.withContext(function($ctx2) {
self["@isMouseDown"]=true;
self["@isMouseDown"];
_st(self["@world"])._handleEvent_with_("mouseDown",evt);
return _st(evt)._preventDefault();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mousemove",(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(self["@world"])._handleEvent_with_("mouseMove",evt);
return _st(evt)._preventDefault();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mouseup",(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(self["@world"])._handleEvent_with_("mouseUp",evt);
return _st(evt)._preventDefault();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mousewheel DOMMouseScroll",(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(self["@world"])._handleEvent_with_("mouseWheel",self._wheelDeltaFrom_(evt));
return _st(evt)._preventDefault();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mouseleave",(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._handleMouseLeave_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"bindEvents",{},smalltalk.AthensHTMLMorphicSurface)})},
args: [],
source: "bindEvents\x0a\x09canvasTag asJQuery \x0a\x09\x09bind: 'dblclick' \x0a\x09\x09do: [:evt | world handleEvent: #mouseDoubleClick with: evt. evt preventDefault].\x0a\x09canvasTag asJQuery \x0a\x09\x09bind: 'click' \x0a\x09\x09do: [:evt | world handleEvent: #mouseClick with: evt. evt preventDefault].\x0a\x09canvasTag asJQuery \x0a\x09\x09bind: 'mousedown' \x0a\x09\x09do: [:evt | isMouseDown := true. world handleEvent: #mouseDown with: evt. evt preventDefault].\x0a\x09canvasTag asJQuery \x0a\x09\x09bind: 'mousemove' \x0a\x09\x09do: [:evt | world handleEvent: #mouseMove with: evt. evt preventDefault].\x0a\x09canvasTag asJQuery \x0a\x09\x09bind: 'mouseup' \x0a\x09\x09do: [:evt | world handleEvent: #mouseUp with: evt. evt preventDefault].\x0a\x09canvasTag asJQuery\x0a\x09\x09bind: 'mousewheel DOMMouseScroll'\x0a\x09\x09do: [:evt | world handleEvent: #mouseWheel with: (self wheelDeltaFrom: evt). evt preventDefault].\x0a\x09canvasTag asJQuery\x0a\x09\x09bind: 'mouseleave'\x0a\x09\x09do: [:evt | self handleMouseLeave: evt].",
messageSends: ["bind:do:", "handleEvent:with:", "preventDefault", "asJQuery", "wheelDeltaFrom:", "handleMouseLeave:"],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isMouseDown"];
if(smalltalk.assert($1)){
_st(self["@world"])._handleEvent_with_("mouseUp",evt);
self["@isMouseDown"]=false;
self["@isMouseDown"];
};
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
args: ["evt"],
source: "handleMouseLeave: evt\x0a\x09\x22Trigger mouse up if canvas loses mouse focus.\x22\x0a\x09isMouseDown ifTrue: [\x0a\x09\x09world handleEvent: #mouseUp with: evt.\x0a\x09\x09isMouseDown := false].",
messageSends: ["ifTrue:", "handleEvent:with:"],
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
self["@isMouseDown"]=true;
self._bindEvents();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLMorphicSurface)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09world := AthensWorldMorph forSurface: self.\x0a\x09isMouseDown := true.\x0a\x09self bindEvents.",
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
selector: "wheelDeltaFrom:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(evt)._originalEvent())._at_("wheelDeltaX");
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=_st(_st(_st(_st(evt)._originalEvent())._wheelDeltaX()).__slash((30))).__at(_st(_st(_st(evt)._originalEvent())._wheelDeltaY()).__slash((30)));
return $2;
};
return self}, function($ctx1) {$ctx1.fill(self,"wheelDeltaFrom:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
args: ["evt"],
source: "wheelDeltaFrom: evt\x0a\x09\x22This probably works only in Chrome.\x22\x0a\x09(evt originalEvent at: #wheelDeltaX)\x0a\x09\x09ifNotNil: [^ evt originalEvent wheelDeltaX/30 @ (evt originalEvent wheelDeltaY/30)].",
messageSends: ["ifNotNil:", "@", "/", "wheelDeltaY", "originalEvent", "wheelDeltaX", "at:"],
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



smalltalk.addClass('AthensHTMLMorphicTransformation', smalltalk.AthensHTMLTransformation, ['relativeIdentity'], 'Athens-HTML-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
self["@relativeIdentity"]=_st($AthensAffineTransform())._new();
smalltalk.AthensHTMLTransformation.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLMorphicTransformation)})},
args: [],
source: "initialize\x0a\x09relativeIdentity := AthensAffineTransform new.\x0a\x09super initialize.",
messageSends: ["new", "initialize"],
referencedClasses: ["AthensAffineTransform"]
}),
smalltalk.AthensHTMLMorphicTransformation);

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
smalltalk.AthensHTMLMorphicTransformation);

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
smalltalk.AthensHTMLMorphicTransformation);




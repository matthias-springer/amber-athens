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
_st(self["@world"])._handleEvent_with_("mouseDoubleClick",self._mouseDoubleClickEventDataFor_(evt));
return _st(evt)._preventDefault();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("click",(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(self["@world"])._handleEvent_with_("mouseClick",self._mouseClickEventDataFor_(evt));
return _st(evt)._preventDefault();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mousedown",(function(evt){
return smalltalk.withContext(function($ctx2) {
self["@isMouseDown"]=true;
self["@isMouseDown"];
_st(self["@world"])._handleEvent_with_("mouseDown",self._mouseDownEventDataFor_(evt));
return _st(evt)._preventDefault();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mousemove",(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(self["@world"])._handleEvent_with_("mouseMove",self._mouseMoveEventDataFor_(evt));
return _st(evt)._preventDefault();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mouseup",(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(self["@world"])._handleEvent_with_("mouseUp",self._mouseUpEventDataFor_(evt));
return _st(evt)._preventDefault();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mousewheel DOMMouseScroll",(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(self["@world"])._handleEvent_with_("mouseWheel",self._mouseWheelEventDataFor_(evt));
return _st(evt)._preventDefault();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mouseenter",(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._handleMouseEnter_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mouseleave",(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._handleMouseLeave_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(document)._addEventListener_do_initiateCapture_("keydown",(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self["@world"])._handleEvent_with_("keyDown",self._keyDownEventDataFor_(evt));
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}),false);
_st(document)._addEventListener_do_initiateCapture_("keyup",(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self["@world"])._handleEvent_with_("keyUp",self._keyUpEventDataFor_(evt));
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}),false);
_st(document)._addEventListener_do_initiateCapture_("keypress",(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self["@world"])._handleEvent_with_("keyPress",self._keyPressEventDataFor_(evt));
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}),false);
return self}, function($ctx1) {$ctx1.fill(self,"bindEvents",{},smalltalk.AthensHTMLMorphicSurface)})},
args: [],
source: "bindEvents\x0a\x09canvasTag asJQuery \x0a\x09\x09bind: 'dblclick' \x0a\x09\x09do: [:evt | world handleEvent: #mouseDoubleClick with: (self mouseDoubleClickEventDataFor: evt). evt preventDefault].\x0a\x09canvasTag asJQuery \x0a\x09\x09bind: 'click' \x0a\x09\x09do: [:evt | world handleEvent: #mouseClick with: (self mouseClickEventDataFor: evt). evt preventDefault].\x0a\x09canvasTag asJQuery \x0a\x09\x09bind: 'mousedown' \x0a\x09\x09do: [:evt | isMouseDown := true. world handleEvent: #mouseDown with: (self mouseDownEventDataFor: evt). evt preventDefault].\x0a\x09canvasTag asJQuery \x0a\x09\x09bind: 'mousemove' \x0a\x09\x09do: [:evt | world handleEvent: #mouseMove with: (self mouseMoveEventDataFor: evt). evt preventDefault].\x0a\x09canvasTag asJQuery \x0a\x09\x09bind: 'mouseup' \x0a\x09\x09do: [:evt | world handleEvent: #mouseUp with: (self mouseUpEventDataFor: evt). evt preventDefault].\x0a\x09canvasTag asJQuery\x0a\x09\x09bind: 'mousewheel DOMMouseScroll'\x0a\x09\x09do: [:evt | world handleEvent: #mouseWheel with: (self mouseWheelEventDataFor: evt). evt preventDefault].\x0a\x09canvasTag asJQuery\x0a\x09\x09bind: 'mouseenter'\x0a\x09\x09do: [:evt | self handleMouseEnter: evt].\x0a\x09canvasTag asJQuery\x0a\x09\x09bind: 'mouseleave'\x0a\x09\x09do: [:evt | self handleMouseLeave: evt].\x0a\x09document \x0a\x09\x09addEventListener: 'keydown'\x0a\x09\x09do: [:evt | world handleEvent: #keyDown with: (self keyDownEventDataFor: evt)]\x0a\x09\x09initiateCapture: false.\x0a\x09document \x0a\x09\x09addEventListener: 'keyup'\x0a\x09\x09do: [:evt | world handleEvent: #keyUp with: (self keyUpEventDataFor: evt)]\x0a\x09\x09initiateCapture: false.\x0a\x09document \x0a\x09\x09addEventListener: 'keypress'\x0a\x09\x09do: [:evt | world handleEvent: #keyPress with: (self keyPressEventDataFor: evt)]\x0a\x09\x09initiateCapture: false.",
messageSends: ["bind:do:", "handleEvent:with:", "mouseDoubleClickEventDataFor:", "preventDefault", "asJQuery", "mouseClickEventDataFor:", "mouseDownEventDataFor:", "mouseMoveEventDataFor:", "mouseUpEventDataFor:", "mouseWheelEventDataFor:", "handleMouseEnter:", "handleMouseLeave:", "addEventListener:do:initiateCapture:", "keyDownEventDataFor:", "keyUpEventDataFor:", "keyPressEventDataFor:"],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@canvasTag"])._asJQuery())._attr_data_("tabindex",(0));
_st(self["@canvasTag"])._focus();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
args: ["evt"],
source: "handleMouseEnter: evt\x0a\x09canvasTag asJQuery attr: 'tabindex' data: 0.\x0a\x09canvasTag focus.",
messageSends: ["attr:data:", "asJQuery", "focus"],
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
selector: "keyDownEventDataFor:",
category: 'events',
fn: function (evt){
var self=this;
function $AthensMorphicEvent(){return smalltalk.AthensMorphicEvent||(typeof AthensMorphicEvent=="undefined"?nil:AthensMorphicEvent)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($AthensMorphicEvent())._new();
_st($2)._at_put_("keyCode",_st(evt)._keyCode());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyDownEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
args: ["evt"],
source: "keyDownEventDataFor: evt\x0a\x09^ AthensMorphicEvent new\x0a\x09\x09at: #keyCode put: evt keyCode;\x0a\x09\x09yourself",
messageSends: ["at:put:", "keyCode", "new", "yourself"],
referencedClasses: ["AthensMorphicEvent"]
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "keyPressEventDataFor:",
category: 'events',
fn: function (evt){
var self=this;
function $AthensMorphicEvent(){return smalltalk.AthensMorphicEvent||(typeof AthensMorphicEvent=="undefined"?nil:AthensMorphicEvent)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($AthensMorphicEvent())._new();
_st($2)._at_put_("keyCode",_st(evt)._keyCode());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyPressEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
args: ["evt"],
source: "keyPressEventDataFor: evt\x0a\x09^ AthensMorphicEvent new\x0a\x09\x09at: #keyCode put: evt keyCode;\x0a\x09\x09yourself",
messageSends: ["at:put:", "keyCode", "new", "yourself"],
referencedClasses: ["AthensMorphicEvent"]
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "keyUpEventDataFor:",
category: 'events',
fn: function (evt){
var self=this;
function $AthensMorphicEvent(){return smalltalk.AthensMorphicEvent||(typeof AthensMorphicEvent=="undefined"?nil:AthensMorphicEvent)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($AthensMorphicEvent())._new();
_st($2)._at_put_("keyCode",_st(evt)._keyCode());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyUpEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
args: ["evt"],
source: "keyUpEventDataFor: evt\x0a\x09^ AthensMorphicEvent new\x0a\x09\x09at: #keyCode put: evt keyCode;\x0a\x09\x09yourself",
messageSends: ["at:put:", "keyCode", "new", "yourself"],
referencedClasses: ["AthensMorphicEvent"]
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClickEventDataFor:",
category: 'events',
fn: function (evt){
var self=this;
function $AthensMorphicEvent(){return smalltalk.AthensMorphicEvent||(typeof AthensMorphicEvent=="undefined"?nil:AthensMorphicEvent)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($AthensMorphicEvent())._new();
_st($2)._at_put_("ctrlKeyPressed",_st(evt)._ctrlKey());
_st($2)._at_put_("globalPosition",_st(_st(evt)._offsetX()).__at(_st(evt)._offsetY()));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseClickEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
args: ["evt"],
source: "mouseClickEventDataFor: evt\x0a\x09^ AthensMorphicEvent new\x0a\x09\x09at: #ctrlKeyPressed put: evt ctrlKey;\x0a\x09\x09at: #globalPosition put: evt offsetX @ evt offsetY;\x0a\x09\x09yourself.",
messageSends: ["at:put:", "ctrlKey", "new", "@", "offsetY", "offsetX", "yourself"],
referencedClasses: ["AthensMorphicEvent"]
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseDoubleClickEventDataFor:",
category: 'events',
fn: function (evt){
var self=this;
function $AthensMorphicEvent(){return smalltalk.AthensMorphicEvent||(typeof AthensMorphicEvent=="undefined"?nil:AthensMorphicEvent)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensMorphicEvent())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseDoubleClickEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
args: ["evt"],
source: "mouseDoubleClickEventDataFor: evt\x0a\x09^ AthensMorphicEvent new",
messageSends: ["new"],
referencedClasses: ["AthensMorphicEvent"]
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseDownEventDataFor:",
category: 'events',
fn: function (evt){
var self=this;
function $AthensMorphicEvent(){return smalltalk.AthensMorphicEvent||(typeof AthensMorphicEvent=="undefined"?nil:AthensMorphicEvent)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensMorphicEvent())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseDownEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
args: ["evt"],
source: "mouseDownEventDataFor: evt\x0a\x09^ AthensMorphicEvent new",
messageSends: ["new"],
referencedClasses: ["AthensMorphicEvent"]
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseMoveEventDataFor:",
category: 'events',
fn: function (evt){
var self=this;
function $AthensMorphicEvent(){return smalltalk.AthensMorphicEvent||(typeof AthensMorphicEvent=="undefined"?nil:AthensMorphicEvent)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($AthensMorphicEvent())._new();
_st($2)._at_put_("globalPosition",_st(_st(evt)._offsetX()).__at(_st(evt)._offsetY()));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseMoveEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
args: ["evt"],
source: "mouseMoveEventDataFor: evt\x0a\x09^ AthensMorphicEvent new\x0a\x09\x09at: #globalPosition put: evt offsetX @ evt offsetY;\x0a\x09\x09yourself",
messageSends: ["at:put:", "@", "offsetY", "offsetX", "new", "yourself"],
referencedClasses: ["AthensMorphicEvent"]
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseUpEventDataFor:",
category: 'events',
fn: function (evt){
var self=this;
function $AthensMorphicEvent(){return smalltalk.AthensMorphicEvent||(typeof AthensMorphicEvent=="undefined"?nil:AthensMorphicEvent)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensMorphicEvent())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseUpEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
args: ["evt"],
source: "mouseUpEventDataFor: evt\x0a\x09^ AthensMorphicEvent new",
messageSends: ["new"],
referencedClasses: ["AthensMorphicEvent"]
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseWheelEventDataFor:",
category: 'events',
fn: function (evt){
var self=this;
var evtData;
function $AthensMorphicEvent(){return smalltalk.AthensMorphicEvent||(typeof AthensMorphicEvent=="undefined"?nil:AthensMorphicEvent)}
return smalltalk.withContext(function($ctx1) { 
var $1;
evtData=_st($AthensMorphicEvent())._new();
_st(evtData)._at_put_("wheelDelta",_st(_st(_st(_st(evt)._originalEvent())._wheelDeltaX()).__slash((30))).__at(_st(_st(_st(evt)._originalEvent())._wheelDeltaY()).__slash((30))));
$1=evtData;
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseWheelEventDataFor:",{evt:evt,evtData:evtData},smalltalk.AthensHTMLMorphicSurface)})},
args: ["evt"],
source: "mouseWheelEventDataFor: evt\x0a\x09|evtData|\x0a\x09evtData := AthensMorphicEvent new.\x0a\x09\x0a\x09\x22This probably works only in Chrome.\x22\x0a\x09evtData at: #wheelDelta put: evt originalEvent wheelDeltaX/30 @ (evt originalEvent wheelDeltaY/30).\x0a\x09^ evtData",
messageSends: ["new", "at:put:", "@", "/", "wheelDeltaY", "originalEvent", "wheelDeltaX"],
referencedClasses: ["AthensMorphicEvent"]
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
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensHTMLMorphicTransformation)})},
args: [],
source: "loadIdentity\x0a\x09self loadAffineTransform: relativeIdentity.",
messageSends: ["loadAffineTransform:"],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "setIdentity:",
category: 'initialization',
fn: function (aMatrix){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@relativeIdentity"])._loadAffineTransform_(aMatrix);
return self}, function($ctx1) {$ctx1.fill(self,"setIdentity:",{aMatrix:aMatrix},smalltalk.AthensHTMLMorphicTransformation)})},
args: ["aMatrix"],
source: "setIdentity: aMatrix\x0a\x09relativeIdentity loadAffineTransform: aMatrix.",
messageSends: ["loadAffineTransform:"],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicTransformation);




smalltalk.addPackage('Athens-HTML-Morphic');
smalltalk.addClass('AthensHTMLMorphicCanvas', smalltalk.AthensHTMLCanvas, [], 'Athens-HTML-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
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
messageSends: ["on:", "new"]}),
smalltalk.AthensHTMLMorphicCanvas);



smalltalk.addClass('AthensHTMLMorphicSurface', smalltalk.AthensHTMLSurface, ['world', 'morphBelowHand', 'isMouseDown'], 'Athens-HTML-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "bindEvents",
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
messageSends: ["bind:do:", "handleEvent:with:", "mouseDoubleClickEventDataFor:", "preventDefault", "asJQuery", "mouseClickEventDataFor:", "mouseDownEventDataFor:", "mouseMoveEventDataFor:", "mouseUpEventDataFor:", "mouseWheelEventDataFor:", "handleMouseEnter:", "handleMouseLeave:", "addEventListener:do:initiateCapture:", "keyDownEventDataFor:", "keyUpEventDataFor:", "keyPressEventDataFor:"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@canvasTag"])._asJQuery())._attr_data_("tabindex",(0));
_st(self["@canvasTag"])._focus();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
messageSends: ["attr:data:", "asJQuery", "focus"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave:",
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
messageSends: ["ifTrue:", "handleEvent:with:"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $AthensWorldMorph(){return smalltalk.AthensWorldMorph||(typeof AthensWorldMorph=="undefined"?nil:AthensWorldMorph)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensHTMLSurface.fn.prototype._initialize.apply(_st(self), []);
self["@world"]=_st($AthensWorldMorph())._forSurface_(self);
self["@isMouseDown"]=true;
self._bindEvents();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLMorphicSurface)})},
messageSends: ["initialize", "forSurface:", "bindEvents"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "keyDownEventDataFor:",
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
messageSends: ["at:put:", "keyCode", "new", "yourself"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "keyPressEventDataFor:",
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
messageSends: ["at:put:", "keyCode", "new", "yourself"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "keyUpEventDataFor:",
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
messageSends: ["at:put:", "keyCode", "new", "yourself"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClickEventDataFor:",
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
messageSends: ["at:put:", "ctrlKey", "new", "@", "offsetY", "offsetX", "yourself"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseDoubleClickEventDataFor:",
fn: function (evt){
var self=this;
function $AthensMorphicEvent(){return smalltalk.AthensMorphicEvent||(typeof AthensMorphicEvent=="undefined"?nil:AthensMorphicEvent)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensMorphicEvent())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseDoubleClickEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
messageSends: ["new"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseDownEventDataFor:",
fn: function (evt){
var self=this;
function $AthensMorphicEvent(){return smalltalk.AthensMorphicEvent||(typeof AthensMorphicEvent=="undefined"?nil:AthensMorphicEvent)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensMorphicEvent())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseDownEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
messageSends: ["new"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseMoveEventDataFor:",
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
messageSends: ["at:put:", "@", "offsetY", "offsetX", "new", "yourself"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseUpEventDataFor:",
fn: function (evt){
var self=this;
function $AthensMorphicEvent(){return smalltalk.AthensMorphicEvent||(typeof AthensMorphicEvent=="undefined"?nil:AthensMorphicEvent)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensMorphicEvent())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseUpEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
messageSends: ["new"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseWheelEventDataFor:",
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
messageSends: ["new", "at:put:", "@", "/", "wheelDeltaY", "originalEvent", "wheelDeltaX"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "newCanvas",
fn: function (){
var self=this;
function $AthensHTMLMorphicCanvas(){return smalltalk.AthensHTMLMorphicCanvas||(typeof AthensHTMLMorphicCanvas=="undefined"?nil:AthensHTMLMorphicCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLMorphicCanvas())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCanvas",{},smalltalk.AthensHTMLMorphicSurface)})},
messageSends: ["on:"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensHTMLSurface.fn.prototype._renderOn_.apply(_st(self), [html]);
_st(self["@world"])._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.AthensHTMLMorphicSurface)})},
messageSends: ["renderOn:", "redraw"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "world",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@world"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"world",{},smalltalk.AthensHTMLMorphicSurface)})},
messageSends: []}),
smalltalk.AthensHTMLMorphicSurface);


smalltalk.addMethod(
smalltalk.method({
selector: "basicNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
var $early={};
try {
_st(self._subclasses())._do_((function(class_){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(class_)._browser()).__eq_eq(self._userAgent());
if(smalltalk.assert($1)){
$2=_st(class_)._basicNew();
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({class_:class_},$ctx1)})}));
$3=smalltalk.AthensHTMLSurface.klass.fn.prototype._basicNew.apply(_st(self), []);
return $3;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"basicNew",{},smalltalk.AthensHTMLMorphicSurface.klass)})},
messageSends: ["do:", "ifTrue:", "basicNew", "==", "userAgent", "browser", "subclasses"]}),
smalltalk.AthensHTMLMorphicSurface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "browser",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "generic";
}, function($ctx1) {$ctx1.fill(self,"browser",{},smalltalk.AthensHTMLMorphicSurface.klass)})},
messageSends: []}),
smalltalk.AthensHTMLMorphicSurface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "userAgent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(navigator)._at_("userAgent"))._includesSubString_("Firefox");
if(smalltalk.assert($1)){
return "Firefox";
};
$2=_st(_st(navigator)._at_("userAgent"))._includesSubString_("Chrome");
if(smalltalk.assert($2)){
return "Chromium";
};
$3=_st(_st(navigator)._at_("userAgent"))._includesSubString_("Chromium");
if(smalltalk.assert($3)){
return "Chromium";
};
return "unknown";
}, function($ctx1) {$ctx1.fill(self,"userAgent",{},smalltalk.AthensHTMLMorphicSurface.klass)})},
messageSends: ["ifTrue:", "includesSubString:", "at:"]}),
smalltalk.AthensHTMLMorphicSurface.klass);


smalltalk.addClass('AthensHTMLMorphicMozillaSurface', smalltalk.AthensHTMLMorphicSurface, [], 'Athens-HTML-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "mouseClickEventDataFor:",
fn: function (evt){
var self=this;
function $AthensMorphicEvent(){return smalltalk.AthensMorphicEvent||(typeof AthensMorphicEvent=="undefined"?nil:AthensMorphicEvent)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($AthensMorphicEvent())._new();
_st($2)._at_put_("ctrlKeyPressed",_st(evt)._ctrlKey());
_st($2)._at_put_("globalPosition",_st(_st(_st(evt)._pageX()).__minus(_st(_st(_st(self["@canvasTag"])._asJQuery())._offset())._left())).__at(_st(_st(evt)._pageY()).__minus(_st(_st(_st(self["@canvasTag"])._asJQuery())._offset())._top())));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseClickEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicMozillaSurface)})},
messageSends: ["at:put:", "ctrlKey", "new", "@", "-", "top", "offset", "asJQuery", "pageY", "left", "pageX", "yourself"]}),
smalltalk.AthensHTMLMorphicMozillaSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseMoveEventDataFor:",
fn: function (evt){
var self=this;
function $AthensMorphicEvent(){return smalltalk.AthensMorphicEvent||(typeof AthensMorphicEvent=="undefined"?nil:AthensMorphicEvent)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($AthensMorphicEvent())._new();
_st($2)._at_put_("globalPosition",_st(_st(_st(evt)._pageX()).__minus(_st(_st(_st(self["@canvasTag"])._asJQuery())._offset())._left())).__at(_st(_st(evt)._pageY()).__minus(_st(_st(_st(self["@canvasTag"])._asJQuery())._offset())._top())));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseMoveEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicMozillaSurface)})},
messageSends: ["at:put:", "@", "-", "top", "offset", "asJQuery", "pageY", "left", "pageX", "new", "yourself"]}),
smalltalk.AthensHTMLMorphicMozillaSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseWheelEventDataFor:",
fn: function (evt){
var self=this;
function $AthensMorphicEvent(){return smalltalk.AthensMorphicEvent||(typeof AthensMorphicEvent=="undefined"?nil:AthensMorphicEvent)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($AthensMorphicEvent())._new();
_st($2)._at_put_("wheelDelta",(0).__at(_st(_st(_st(evt)._originalEvent())._detail()).__star((-1.5))));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseWheelEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicMozillaSurface)})},
messageSends: ["at:put:", "@", "*", "detail", "originalEvent", "new", "yourself"]}),
smalltalk.AthensHTMLMorphicMozillaSurface);


smalltalk.addMethod(
smalltalk.method({
selector: "browser",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Firefox";
}, function($ctx1) {$ctx1.fill(self,"browser",{},smalltalk.AthensHTMLMorphicMozillaSurface.klass)})},
messageSends: []}),
smalltalk.AthensHTMLMorphicMozillaSurface.klass);


smalltalk.addClass('AthensHTMLMorphicTransformation', smalltalk.AthensHTMLTransformation, ['relativeIdentity'], 'Athens-HTML-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
self["@relativeIdentity"]=_st($AthensAffineTransform())._new();
smalltalk.AthensHTMLTransformation.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLMorphicTransformation)})},
messageSends: ["new", "initialize"]}),
smalltalk.AthensHTMLMorphicTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "loadIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._loadAffineTransform_(self["@relativeIdentity"]);
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensHTMLMorphicTransformation)})},
messageSends: ["loadAffineTransform:"]}),
smalltalk.AthensHTMLMorphicTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "setIdentity:",
fn: function (aMatrix){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@relativeIdentity"])._loadAffineTransform_(aMatrix);
return self}, function($ctx1) {$ctx1.fill(self,"setIdentity:",{aMatrix:aMatrix},smalltalk.AthensHTMLMorphicTransformation)})},
messageSends: ["loadAffineTransform:"]}),
smalltalk.AthensHTMLMorphicTransformation);




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
 var canvasJ = $(self['@canvasTag']); 
	var documentJ = $(document); 
	var events = {
		'dblclick': ['mouseDoubleClick', true, canvasJ],
		'click': ['mouseClick', true, canvasJ],
		'mousedown': ['mouseDown', true, canvasJ],
		'mousemove': ['mouseMove', true, canvasJ],
		'mouseup': ['mouseUp', true, canvasJ],
		'mousewheel DOMMouseScroll': ['mouseWheel', true, canvasJ],
		'keydown': ['keyDown', false, documentJ],
		'keyup': ['keyUp', false, documentJ],
		'keypress': ['keyPress', false, documentJ]};
		
	for (event in events) {
		var eventTarget = events[event][2];
		
		eventTarget.bind(event, function(evt) {
			var eventName = events[evt.type][0];
			self['@world']._handleEvent_with_(eventName, self['_' + eventName + 'EventDataFor_'](evt));
			if (events[event.type][1]) {
				evt.preventDefault();
			}
		});
	}
	
	canvasJ.bind('mouseenter', function(evt) {self._handleMouseEnter_(evt);});
	canvasJ.bind('mouseleave', function(evt) {self._handleMouseLeave_(evt);}); ;
return self}, function($ctx1) {$ctx1.fill(self,"bindEvents",{},smalltalk.AthensHTMLMorphicSurface)})},
args: [],
source: "bindEvents\x0a\x09< var canvasJ = $(self['@canvasTag']); \x0a\x09var documentJ = $(document); \x0a\x09var events = {\x0a\x09\x09'dblclick': ['mouseDoubleClick', true, canvasJ],\x0a\x09\x09'click': ['mouseClick', true, canvasJ],\x0a\x09\x09'mousedown': ['mouseDown', true, canvasJ],\x0a\x09\x09'mousemove': ['mouseMove', true, canvasJ],\x0a\x09\x09'mouseup': ['mouseUp', true, canvasJ],\x0a\x09\x09'mousewheel DOMMouseScroll': ['mouseWheel', true, canvasJ],\x0a\x09\x09'keydown': ['keyDown', false, documentJ],\x0a\x09\x09'keyup': ['keyUp', false, documentJ],\x0a\x09\x09'keypress': ['keyPress', false, documentJ]};\x0a\x09\x09\x0a\x09for (event in events) {\x0a\x09\x09var eventTarget = events[event][2];\x0a\x09\x09\x0a\x09\x09eventTarget.bind(event, function(evt) {\x0a\x09\x09\x09var eventName = events[evt.type][0];\x0a\x09\x09\x09self['@world']._handleEvent_with_(eventName, self['_' + eventName + 'EventDataFor_'](evt));\x0a\x09\x09\x09if (events[event.type][1]) {\x0a\x09\x09\x09\x09evt.preventDefault();\x0a\x09\x09\x09}\x0a\x09\x09});\x0a\x09}\x0a\x09\x0a\x09canvasJ.bind('mouseenter', function(evt) {self._handleMouseEnter_(evt);});\x0a\x09canvasJ.bind('mouseleave', function(evt) {self._handleMouseLeave_(evt);}); >",
messageSends: [],
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
function $AthensMorphicEvent(){return smalltalk.AthensMorphicEvent||(typeof AthensMorphicEvent=="undefined"?nil:AthensMorphicEvent)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isMouseDown"];
if(smalltalk.assert($1)){
_st(self["@world"])._handleEvent_with_("mouseUp",_st($AthensMorphicEvent())._new());
self["@isMouseDown"]=false;
self["@isMouseDown"];
};
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
args: ["evt"],
source: "handleMouseLeave: evt\x0a\x09\x22Trigger mouse up if canvas loses mouse focus.\x22\x0a\x09isMouseDown ifTrue: [\x0a\x09\x09world handleEvent: #mouseUp with: AthensMorphicEvent new.\x0a\x09\x09isMouseDown := false].",
messageSends: ["ifTrue:", "handleEvent:with:", "new"],
referencedClasses: ["AthensMorphicEvent"]
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
self["@isMouseDown"]=true;
$1=_st($AthensMorphicEvent())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseDownEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
args: ["evt"],
source: "mouseDownEventDataFor: evt\x0a\x09isMouseDown := true.\x0a\x09^ AthensMorphicEvent new",
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
return smalltalk.withContext(function($ctx1) { 
 var eventObject = smalltalk.AthensMorphicEvent._new();
	eventObject._at_put_('globalPosition', evt.offsetX.__at(evt.offsetY));
	return eventObject; ;
return self}, function($ctx1) {$ctx1.fill(self,"mouseMoveEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
args: ["evt"],
source: "mouseMoveEventDataFor: evt\x0a\x09< var eventObject = smalltalk.AthensMorphicEvent._new();\x0a\x09eventObject._at_put_('globalPosition', evt.offsetX.__at(evt.offsetY));\x0a\x09return eventObject; >",
messageSends: [],
referencedClasses: []
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
self["@isMouseDown"]=false;
$1=_st($AthensMorphicEvent())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseUpEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicSurface)})},
args: ["evt"],
source: "mouseUpEventDataFor: evt\x0a\x09isMouseDown := false.\x0a\x09^ AthensMorphicEvent new",
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


smalltalk.addMethod(
smalltalk.method({
selector: "basicNew",
category: 'instance creation',
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
args: [],
source: "basicNew\x0a\x09self subclasses do: [:class | \x0a\x09\x09class browser == self userAgent\x0a\x09\x09\x09ifTrue: [^ class basicNew]].\x0a\x09^ super basicNew",
messageSends: ["do:", "ifTrue:", "basicNew", "==", "userAgent", "browser", "subclasses"],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicSurface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "browser",
category: 'browser compatibility',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "generic";
}, function($ctx1) {$ctx1.fill(self,"browser",{},smalltalk.AthensHTMLMorphicSurface.klass)})},
args: [],
source: "browser\x0a\x09^ 'generic'",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicSurface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "userAgent",
category: 'browser compatibility',
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
args: [],
source: "userAgent\x0a\x09((navigator at: #userAgent) includesSubString: 'Firefox')\x0a\x09\x09ifTrue: [^ 'Firefox'].\x0a\x09((navigator at: #userAgent) includesSubString: 'Chrome')\x0a\x09\x09ifTrue: [^ 'Chromium'].\x0a\x09((navigator at: #userAgent) includesSubString: 'Chromium')\x0a\x09\x09ifTrue: [^ 'Chromium'].\x0a\x09^ 'unknown'",
messageSends: ["ifTrue:", "includesSubString:", "at:"],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicSurface.klass);


smalltalk.addClass('AthensHTMLMorphicMozillaSurface', smalltalk.AthensHTMLMorphicSurface, [], 'Athens-HTML-Morphic');
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
_st($2)._at_put_("globalPosition",_st(_st(_st(evt)._pageX()).__minus(_st(_st(_st(self["@canvasTag"])._asJQuery())._offset())._left())).__at(_st(_st(evt)._pageY()).__minus(_st(_st(_st(self["@canvasTag"])._asJQuery())._offset())._top())));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseClickEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicMozillaSurface)})},
args: ["evt"],
source: "mouseClickEventDataFor: evt\x0a\x09^ AthensMorphicEvent new\x0a\x09\x09at: #ctrlKeyPressed put: evt ctrlKey;\x0a\x09\x09at: #globalPosition put: (evt pageX - canvasTag asJQuery offset left) @ (evt pageY - canvasTag asJQuery offset top);\x0a\x09\x09yourself.",
messageSends: ["at:put:", "ctrlKey", "new", "@", "-", "top", "offset", "asJQuery", "pageY", "left", "pageX", "yourself"],
referencedClasses: ["AthensMorphicEvent"]
}),
smalltalk.AthensHTMLMorphicMozillaSurface);

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
_st($2)._at_put_("globalPosition",_st(_st(_st(evt)._pageX()).__minus(_st(_st(_st(self["@canvasTag"])._asJQuery())._offset())._left())).__at(_st(_st(evt)._pageY()).__minus(_st(_st(_st(self["@canvasTag"])._asJQuery())._offset())._top())));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseMoveEventDataFor:",{evt:evt},smalltalk.AthensHTMLMorphicMozillaSurface)})},
args: ["evt"],
source: "mouseMoveEventDataFor: evt\x0a\x09^ AthensMorphicEvent new\x0a\x09\x09at: #globalPosition put: (evt pageX - canvasTag asJQuery offset left) @ (evt pageY - canvasTag asJQuery offset top);\x0a\x09\x09yourself",
messageSends: ["at:put:", "@", "-", "top", "offset", "asJQuery", "pageY", "left", "pageX", "new", "yourself"],
referencedClasses: ["AthensMorphicEvent"]
}),
smalltalk.AthensHTMLMorphicMozillaSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseWheelEventDataFor:",
category: 'events',
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
args: ["evt"],
source: "mouseWheelEventDataFor: evt\x0a\x09^ AthensMorphicEvent new\x0a\x09\x09at: #wheelDelta put: 0 @ (evt originalEvent detail * -1.5);\x0a\x09\x09yourself",
messageSends: ["at:put:", "@", "*", "detail", "originalEvent", "new", "yourself"],
referencedClasses: ["AthensMorphicEvent"]
}),
smalltalk.AthensHTMLMorphicMozillaSurface);


smalltalk.addMethod(
smalltalk.method({
selector: "browser",
category: 'browser compatibility',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Firefox";
}, function($ctx1) {$ctx1.fill(self,"browser",{},smalltalk.AthensHTMLMorphicMozillaSurface.klass)})},
args: [],
source: "browser\x0a\x09^ 'Firefox'",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicMozillaSurface.klass);


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
 self._loadAffineTransform_(self['@relativeIdentity']); ;
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensHTMLMorphicTransformation)})},
args: [],
source: "loadIdentity\x0a\x09< self._loadAffineTransform_(self['@relativeIdentity']); >",
messageSends: [],
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
 self['@relativeIdentity']._loadAffineTransform_(aMatrix); ;
return self}, function($ctx1) {$ctx1.fill(self,"setIdentity:",{aMatrix:aMatrix},smalltalk.AthensHTMLMorphicTransformation)})},
args: ["aMatrix"],
source: "setIdentity: aMatrix\x0a\x09< self['@relativeIdentity']._loadAffineTransform_(aMatrix); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicTransformation);




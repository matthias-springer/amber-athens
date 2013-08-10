smalltalk.addPackage('Athens-Core-Morphic');
smalltalk.addClass('AthensMorph', smalltalk.Object, ['transformation', 'outerShape', 'outerPolygon', 'owner', 'submorphs', 'color', 'globalPathTransform', 'globalOuterPolygon', 'visible', 'eventCallbacks', 'hasMouseFocus', 'isMouseDown', 'zIndex'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "addMorph:",
category: 'morph handling',
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self._submorphs())._add_(aMorph);
_st(aMorph)._owner_(self);
$1=_st(aMorph)._isVisible();
if(smalltalk.assert($1)){
_st(aMorph)._redraw();
};
return self}, function($ctx1) {$ctx1.fill(self,"addMorph:",{aMorph:aMorph},smalltalk.AthensMorph)})},
args: ["aMorph"],
source: "addMorph: aMorph\x0a\x09self submorphs add: aMorph.\x0a\x09aMorph owner: self.\x0a\x09aMorph isVisible ifTrue: [aMorph redraw].",
messageSends: ["add:", "submorphs", "owner:", "ifTrue:", "redraw", "isVisible"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "bounds",
category: 'internals',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@outerPolygon"])._boundingBox();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bounds",{},smalltalk.AthensMorph)})},
args: [],
source: "bounds\x0a\x09^ outerPolygon boundingBox",
messageSends: ["boundingBox"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "bringToFront",
category: 'morph handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._zIndex_(_st(_st(self["@owner"])._maxZIndex()).__plus((1)));
return self}, function($ctx1) {$ctx1.fill(self,"bringToFront",{},smalltalk.AthensMorph)})},
args: [],
source: "bringToFront\x0a\x09self zIndex: owner maxZIndex + 1.",
messageSends: ["zIndex:", "+", "maxZIndex"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColor;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.AthensMorph)})},
args: ["aColor"],
source: "color: aColor\x0a\x09color := aColor.\x0a\x09self redraw.",
messageSends: ["redraw"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "delete",
category: 'morph handling',
fn: function (){
var self=this;
function $AthensDummyWorldMorph(){return smalltalk.AthensDummyWorldMorph||(typeof AthensDummyWorldMorph=="undefined"?nil:AthensDummyWorldMorph)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@owner"])._removeMorph_(self);
self["@owner"]=_st($AthensDummyWorldMorph())._instance();
return self}, function($ctx1) {$ctx1.fill(self,"delete",{},smalltalk.AthensMorph)})},
args: [],
source: "delete\x0a\x09owner removeMorph: self.\x0a\x09owner := AthensDummyWorldMorph instance.",
messageSends: ["removeMorph:", "instance"],
referencedClasses: ["AthensDummyWorldMorph"]
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
var path;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
path=_st(canvas)._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._absolute();
_st($1)._lineTo_((200).__at((0)));
_st($1)._lineTo_((200).__at((200)));
_st($1)._lineTo_((0).__at((200)));
$2=_st($1)._lineTo_((0).__at((0)));
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
self._outerShape_(path);
_st(canvas)._setPaint_(self["@color"]);
_st(canvas)._setShape_(path);
_st(canvas)._draw();
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas,path:path},smalltalk.AthensMorph)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09|path|\x0a\x09path := canvas createPath: [:builder |\x0a\x09\x09builder\x0a\x09\x09\x09absolute;\x0a\x09\x09\x09lineTo: 200@0;\x0a\x09\x09\x09lineTo: 200@200;\x0a\x09\x09\x09lineTo: 0@200;\x0a\x09\x09\x09lineTo: 0@0].\x0a\x09self outerShape: path.\x0a\x09\x0a\x09canvas setPaint: color.\x0a\x09canvas setShape: path.\x0a\x09canvas draw.",
messageSends: ["createPath:", "absolute", "lineTo:", "@", "outerShape:", "setPaint:", "setShape:", "draw"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "globalBounds",
category: 'internals',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@globalOuterPolygon"])._boundingBox();
return $1;
}, function($ctx1) {$ctx1.fill(self,"globalBounds",{},smalltalk.AthensMorph)})},
args: [],
source: "globalBounds\x0a\x09^ globalOuterPolygon boundingBox",
messageSends: ["boundingBox"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "globalPathTransform",
category: 'internals',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@globalPathTransform"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"globalPathTransform",{},smalltalk.AthensMorph)})},
args: [],
source: "globalPathTransform\x0a\x09^ globalPathTransform",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleChange:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("change",(function(){
return smalltalk.withContext(function($ctx2) {
return (function(ev){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({ev:ev},$ctx2)})});
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value_(evt);
return self}, function($ctx1) {$ctx1.fill(self,"handleChange:",{evt:evt},smalltalk.AthensMorph)})},
args: ["evt"],
source: "handleChange: evt\x0a\x09(eventCallbacks at: #change ifAbsent: [[:ev |]]) value: evt.",
messageSends: ["value:", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseClick:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(evt)._ctrlKeyPressed()).__and(_st(evt)._topMost());
if(smalltalk.assert($1)){
_st(self._world())._addHalosTo_(self);
} else {
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseClick",(function(){
return smalltalk.withContext(function($ctx2) {
return (function(ev){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({ev:ev},$ctx2)})});
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value_(evt);
};
$2=_st(_st(_st(evt)._ctrlKeyPressed())._not()).__and(_st(evt)._topMost());
if(smalltalk.assert($2)){
_st(self._world())._hideHalos();
};
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensMorph)})},
args: ["evt"],
source: "handleMouseClick: evt\x0a\x09evt ctrlKeyPressed & (evt topMost)\x0a\x09\x09ifTrue: [self world addHalosTo: self]\x0a\x09\x09ifFalse: [(eventCallbacks at: #mouseClick ifAbsent: [[:ev | ]]) value: evt].\x0a\x09evt ctrlKeyPressed not & evt topMost\x0a\x09\x09ifTrue: [self world hideHalos].",
messageSends: ["ifTrue:ifFalse:", "addHalosTo:", "world", "value:", "at:ifAbsent:", "&", "topMost", "ctrlKeyPressed", "ifTrue:", "hideHalos", "not"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseDown:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isMouseDown"]=true;
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseDown",(function(){
return smalltalk.withContext(function($ctx2) {
return (function(ev){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({ev:ev},$ctx2)})});
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value_(evt);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseDown:",{evt:evt},smalltalk.AthensMorph)})},
args: ["evt"],
source: "handleMouseDown: evt\x0a\x09isMouseDown := true.\x0a\x09(eventCallbacks at: #mouseDown ifAbsent: [[:ev |]]) value: evt.",
messageSends: ["value:", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hasMouseFocus"]=true;
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseEnter",(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensMorph)})},
args: [],
source: "handleMouseEnter\x0a\x09hasMouseFocus := true.\x0a\x09(eventCallbacks at: #mouseEnter ifAbsent: []) value.",
messageSends: ["value", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hasMouseFocus"]=false;
self["@isMouseDown"]=false;
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseLeave",(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensMorph)})},
args: [],
source: "handleMouseLeave\x0a\x09hasMouseFocus := false.\x0a\x09isMouseDown := false.\x0a\x09(eventCallbacks at: #mouseLeave ifAbsent: []) value.",
messageSends: ["value", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseMove:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseMove",(function(){
return smalltalk.withContext(function($ctx2) {
return (function(ev){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({ev:ev},$ctx2)})});
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value_(evt);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseMove:",{evt:evt},smalltalk.AthensMorph)})},
args: ["evt"],
source: "handleMouseMove: evt\x0a\x09(eventCallbacks at: #mouseMove ifAbsent: [[:ev | ]]) value: evt.",
messageSends: ["value:", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseUp:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isMouseDown"]=false;
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseUp",(function(){
return smalltalk.withContext(function($ctx2) {
return (function(ev){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({ev:ev},$ctx2)})});
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value_(evt);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseUp:",{evt:evt},smalltalk.AthensMorph)})},
args: ["evt"],
source: "handleMouseUp: evt\x0a\x09isMouseDown := false.\x0a\x09(eventCallbacks at: #mouseUp ifAbsent: [[:ev |]]) value: evt.",
messageSends: ["value:", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseWheel:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseWheel",(function(){
return smalltalk.withContext(function($ctx2) {
return (function(ev){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({ev:ev},$ctx2)})});
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value_(evt);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseWheel:",{evt:evt},smalltalk.AthensMorph)})},
args: ["evt"],
source: "handleMouseWheel: evt\x0a\x09(eventCallbacks at: #mouseWheel ifAbsent: [[:ev | ]]) value: evt.",
messageSends: ["value:", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
category: 'morph handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@visible"]=false;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.AthensMorph)})},
args: [],
source: "hide\x0a\x09visible := false.\x0a\x09self redraw.",
messageSends: ["redraw"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $AthensDummyWorldMorph(){return smalltalk.AthensDummyWorldMorph||(typeof AthensDummyWorldMorph=="undefined"?nil:AthensDummyWorldMorph)}
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@color"]=_st($Color())._blue();
self["@owner"]=_st($AthensDummyWorldMorph())._instance();
self["@transformation"]=_st($AthensAffineTransform())._new();
self["@globalPathTransform"]=_st($AthensAffineTransform())._new();
self["@submorphs"]=_st($OrderedCollection())._new();
self["@visible"]=true;
self["@eventCallbacks"]=_st($Dictionary())._new();
self["@isMouseDown"]=false;
self["@hasMouseFocus"]=self["@isMouseDown"];
self["@zIndex"]=(0);
self._outerShape_(_st((0).__at((0)))._corner_((200).__at((200))));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensMorph)})},
args: [],
source: "initialize\x0a\x09color := Color blue.\x0a\x09owner := AthensDummyWorldMorph instance.\x0a\x09transformation := AthensAffineTransform new.\x0a\x09globalPathTransform := AthensAffineTransform new.\x0a\x09submorphs := OrderedCollection new.\x0a\x09visible := true.\x0a\x09eventCallbacks := Dictionary new.\x0a\x09hasMouseFocus := isMouseDown := false.\x0a\x09zIndex := 0.\x0a\x09self outerShape: (0@0 corner: 200@200).",
messageSends: ["blue", "instance", "new", "outerShape:", "corner:", "@"],
referencedClasses: ["Color", "AthensDummyWorldMorph", "AthensAffineTransform", "OrderedCollection", "Dictionary"]
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isHaloMorph",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isHaloMorph",{},smalltalk.AthensMorph)})},
args: [],
source: "isHaloMorph\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isVisible",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@visible"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isVisible",{},smalltalk.AthensMorph)})},
args: [],
source: "isVisible\x0a\x09^ visible",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isWorldMorph",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isWorldMorph",{},smalltalk.AthensMorph)})},
args: [],
source: "isWorldMorph\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutChanged",
category: 'morph handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"layoutChanged",{},smalltalk.AthensMorph)})},
args: [],
source: "layoutChanged\x0a\x09\x22Morph does not respond to layout changes.\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "maxZIndex",
category: 'internals',
fn: function (){
var self=this;
var index;
return smalltalk.withContext(function($ctx1) { 
var $1;
index=(0);
_st(self["@submorphs"])._do_((function(morph){
return smalltalk.withContext(function($ctx2) {
index=_st(index)._max_(_st(morph)._zIndex());
return index;
}, function($ctx2) {$ctx2.fillBlock({morph:morph},$ctx1)})}));
$1=index;
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxZIndex",{index:index},smalltalk.AthensMorph)})},
args: [],
source: "maxZIndex\x0a\x09|index|\x0a\x09index := 0.\x0a\x09submorphs do: [:morph | index := index max: morph zIndex].\x0a\x09^ index",
messageSends: ["do:", "max:", "zIndex"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "morphsAtPosition:",
category: 'events',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$6,$4,$7;
var $early={};
try {
$1=_st(self["@globalOuterPolygon"])._includesPoint_(aPoint);
if(smalltalk.assert($1)){
_st(self["@submorphs"])._reverseDo_((function(morph){
return smalltalk.withContext(function($ctx2) {
$2=_st(morph)._isVisible();
if(smalltalk.assert($2)){
$3=_st(morph)._morphsAtPosition_(aPoint);
if(($receiver = $3) == nil || $receiver == undefined){
return $3;
} else {
var m;
m=$receiver;
$5=m;
_st($5)._add_(self);
$6=_st($5)._yourself();
$4=$6;
throw $early=[$4];
};
};
}, function($ctx2) {$ctx2.fillBlock({morph:morph},$ctx1)})}));
} else {
return nil;
};
$7=[self];
return $7;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"morphsAtPosition:",{aPoint:aPoint},smalltalk.AthensMorph)})},
args: ["aPoint"],
source: "morphsAtPosition: aPoint\x0a\x09(globalOuterPolygon includesPoint: aPoint)\x0a\x09\x09ifTrue: [submorphs reverseDo: [:morph |\x0a\x09\x09\x09morph isVisible ifTrue: [\x0a\x09\x09\x09\x09(morph morphsAtPosition: aPoint) ifNotNil: [:m | \x0a\x09\x09\x09\x09\x09^ m\x0a\x09\x09\x09\x09\x09\x09add: self;\x0a\x09\x09\x09\x09\x09\x09yourself]]]]\x0a\x09\x09ifFalse: [^ nil].\x0a\x09^ {self}",
messageSends: ["ifTrue:ifFalse:", "reverseDo:", "ifTrue:", "ifNotNil:", "add:", "yourself", "morphsAtPosition:", "isVisible", "includesPoint:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onChange:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("change",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onChange:",{aBlock:aBlock},smalltalk.AthensMorph)})},
args: ["aBlock"],
source: "onChange: aBlock\x0a\x09eventCallbacks at: #change put: aBlock.",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseClick:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseClick",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseClick:",{aBlock:aBlock},smalltalk.AthensMorph)})},
args: ["aBlock"],
source: "onMouseClick: aBlock\x0a\x09eventCallbacks at: #mouseClick put: aBlock.",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseDown:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseDown",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseDown:",{aBlock:aBlock},smalltalk.AthensMorph)})},
args: ["aBlock"],
source: "onMouseDown: aBlock\x0a\x09eventCallbacks at: #mouseDown put: aBlock.",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseEnter:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseEnter",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseEnter:",{aBlock:aBlock},smalltalk.AthensMorph)})},
args: ["aBlock"],
source: "onMouseEnter: aBlock\x0a\x09eventCallbacks at: #mouseEnter put: aBlock.",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseLeave:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseLeave",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseLeave:",{aBlock:aBlock},smalltalk.AthensMorph)})},
args: ["aBlock"],
source: "onMouseLeave: aBlock\x0a\x09eventCallbacks at: #mouseLeave put: aBlock.",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseMove:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseMove",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseMove:",{aBlock:aBlock},smalltalk.AthensMorph)})},
args: ["aBlock"],
source: "onMouseMove: aBlock\x0a\x09eventCallbacks at: #mouseMove put: aBlock.",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseUp:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseUp",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseUp:",{aBlock:aBlock},smalltalk.AthensMorph)})},
args: ["aBlock"],
source: "onMouseUp: aBlock\x0a\x09eventCallbacks at: #mouseUp put: aBlock.",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseWheel:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseWheel",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseWheel:",{aBlock:aBlock},smalltalk.AthensMorph)})},
args: ["aBlock"],
source: "onMouseWheel: aBlock\x0a\x09eventCallbacks at: #mouseWheel put: aBlock.",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "outerShape:",
category: 'internals',
fn: function (aShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@outerShape"]=aShape;
self["@outerPolygon"]=_st(aShape)._asPolygon();
self["@globalOuterPolygon"]=_st(self["@outerPolygon"])._deepCopy();
_st(self["@globalOuterPolygon"])._multiplyBy_(self["@globalPathTransform"]);
return self}, function($ctx1) {$ctx1.fill(self,"outerShape:",{aShape:aShape},smalltalk.AthensMorph)})},
args: ["aShape"],
source: "outerShape: aShape\x0a\x09outerShape := aShape.\x0a\x09outerPolygon := aShape asPolygon.\x0a\x09globalOuterPolygon := outerPolygon deepCopy.\x0a\x09globalOuterPolygon multiplyBy: globalPathTransform.",
messageSends: ["asPolygon", "deepCopy", "multiplyBy:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "owner",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@owner"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"owner",{},smalltalk.AthensMorph)})},
args: [],
source: "owner\x0a\x09^ owner",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "owner:",
category: 'accessing',
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@owner"]=aMorph;
return self}, function($ctx1) {$ctx1.fill(self,"owner:",{aMorph:aMorph},smalltalk.AthensMorph)})},
args: ["aMorph"],
source: "owner: aMorph\x0a\x09owner := aMorph.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redraw",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"redraw",{},smalltalk.AthensMorph)})},
args: [],
source: "redraw\x0a\x09\x22Causes Morph to be redrawn.\x22\x0a\x09self world redraw.",
messageSends: ["redraw", "world"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redrawEverythingOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@globalPathTransform"]=_st($AthensAffineTransform())._new();
_st(self["@globalPathTransform"])._loadAffineTransform_(_st(self["@owner"])._globalPathTransform());
_st(self["@globalPathTransform"])._multiplyBy_(self["@transformation"]);
$1=self["@visible"];
if(smalltalk.assert($1)){
_st(_st(canvas)._pathTransform())._restoreAfter_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(canvas)._pathTransform())._multiplyBy_(self["@transformation"]);
_st(_st(canvas)._pathTransform())._setIdentity();
_st(_st(canvas)._pathTransform())._restoreAfter_((function(){
return smalltalk.withContext(function($ctx3) {
return self._drawOn_(canvas);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$2=self["@outerShape"];
if(($receiver = $2) == nil || $receiver == undefined){
self._outerShape_(_st((0).__at((0)))._corner_((50).__at((50))));
} else {
$2;
};
return _st(canvas)._clipBy_during_(self["@outerShape"],(function(){
return smalltalk.withContext(function($ctx3) {
return _st(self["@submorphs"])._do_((function(morph){
return smalltalk.withContext(function($ctx4) {
return _st(morph)._redrawEverythingOn_(canvas);
}, function($ctx4) {$ctx4.fillBlock({morph:morph},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"redrawEverythingOn:",{canvas:canvas},smalltalk.AthensMorph)})},
args: ["canvas"],
source: "redrawEverythingOn: canvas\x0a\x09globalPathTransform := AthensAffineTransform new.\x0a\x09globalPathTransform loadAffineTransform: owner globalPathTransform.\x0a\x09globalPathTransform multiplyBy: transformation.\x0a\x09visible ifTrue: [\x0a\x09\x09canvas pathTransform restoreAfter: [\x0a\x09\x09\x09canvas pathTransform multiplyBy: transformation.\x0a\x09\x09\x09canvas pathTransform setIdentity.\x0a\x0a\x09\x09\x09canvas pathTransform restoreAfter: [\x0a\x09\x09\x09\x09self drawOn: canvas].\x0a\x09\x09\x09\x09\x0a\x09\x09\x09outerShape ifNil: [self outerShape: (0@0 corner: 50@50)].\x0a\x09\x09\x09\x0a\x09\x09\x09canvas clipBy: outerShape during: [\x0a\x09\x09\x09\x09submorphs do: [:morph | morph redrawEverythingOn: canvas]]]].",
messageSends: ["new", "loadAffineTransform:", "globalPathTransform", "multiplyBy:", "ifTrue:", "restoreAfter:", "pathTransform", "setIdentity", "drawOn:", "ifNil:", "outerShape:", "corner:", "@", "clipBy:during:", "do:", "redrawEverythingOn:"],
referencedClasses: ["AthensAffineTransform"]
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMorph:",
category: 'morph handling',
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@submorphs"])._remove_(aMorph);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"removeMorph:",{aMorph:aMorph},smalltalk.AthensMorph)})},
args: ["aMorph"],
source: "removeMorph: aMorph\x0a\x09submorphs remove: aMorph.\x0a\x09self redraw.",
messageSends: ["remove:", "redraw"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "resetTransformation",
category: 'geometry',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@transformation"])._loadIdentity();
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"resetTransformation",{},smalltalk.AthensMorph)})},
args: [],
source: "resetTransformation\x0a\x09transformation loadIdentity.\x0a\x09self redraw.",
messageSends: ["loadIdentity", "redraw"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateBy:",
category: 'geometry',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@transformation"])._rotateByRadians_(aNumber);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"rotateBy:",{aNumber:aNumber},smalltalk.AthensMorph)})},
args: ["aNumber"],
source: "rotateBy: aNumber\x0a\x09transformation rotateByRadians: aNumber.\x0a\x09self redraw.",
messageSends: ["rotateByRadians:", "redraw"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByDegrees:",
category: 'geometry',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@transformation"])._rotateByDegrees_(aNumber);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"rotateByDegrees:",{aNumber:aNumber},smalltalk.AthensMorph)})},
args: ["aNumber"],
source: "rotateByDegrees: aNumber\x0a\x09transformation rotateByDegrees: aNumber.\x0a\x09self redraw.",
messageSends: ["rotateByDegrees:", "redraw"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByRadians:",
category: 'geometry',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@transformation"])._rotateByRadians_(aNumber);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{aNumber:aNumber},smalltalk.AthensMorph)})},
args: ["aNumber"],
source: "rotateByRadians: aNumber\x0a\x09transformation rotateByRadians: aNumber.\x0a\x09self redraw.",
messageSends: ["rotateByRadians:", "redraw"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:",
category: 'geometry',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._scaleByX_Y_(_st(aPoint)._x(),_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{aPoint:aPoint},smalltalk.AthensMorph)})},
args: ["aPoint"],
source: "scaleBy: aPoint\x0a\x09self scaleByX: aPoint x Y: aPoint y.",
messageSends: ["scaleByX:Y:", "x", "y"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleByX:Y:",
category: 'geometry',
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@transformation"])._scaleX_Y_(x,y);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"scaleByX:Y:",{x:x,y:y},smalltalk.AthensMorph)})},
args: ["x", "y"],
source: "scaleByX: x Y: y\x0a\x09transformation scaleX: x Y: y.\x0a\x09self redraw.",
messageSends: ["scaleX:Y:", "redraw"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
category: 'morph handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@visible"]=true;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.AthensMorph)})},
args: [],
source: "show\x0a\x09visible := true.\x0a\x09self redraw.",
messageSends: ["redraw"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "signalChange:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._handleChange_(evt);
return self}, function($ctx1) {$ctx1.fill(self,"signalChange:",{evt:evt},smalltalk.AthensMorph)})},
args: ["evt"],
source: "signalChange: evt\x0a\x09self handleChange: evt.",
messageSends: ["handleChange:"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "submorphs",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@submorphs"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"submorphs",{},smalltalk.AthensMorph)})},
args: [],
source: "submorphs\x0a\x09^ submorphs",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "submorphsZIndicesChanged",
category: 'morph handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@submorphs"])._sort_((function(m1,m2){
return smalltalk.withContext(function($ctx2) {
return _st(_st(m1)._zIndex()).__lt(_st(m2)._zIndex());
}, function($ctx2) {$ctx2.fillBlock({m1:m1,m2:m2},$ctx1)})}));
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"submorphsZIndicesChanged",{},smalltalk.AthensMorph)})},
args: [],
source: "submorphsZIndicesChanged\x0a\x09submorphs sort: [:m1 :m2 | m1 zIndex < m2 zIndex].\x0a\x09self redraw.",
messageSends: ["sort:", "<", "zIndex", "redraw"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "transformation",
category: 'internals',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@transformation"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"transformation",{},smalltalk.AthensMorph)})},
args: [],
source: "transformation\x0a\x09^ transformation",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "transformedBounds",
category: 'internals',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@outerPolygon"])._deepCopy())._multiplyBy_(self["@transformation"]))._boundingBox();
return $1;
}, function($ctx1) {$ctx1.fill(self,"transformedBounds",{},smalltalk.AthensMorph)})},
args: [],
source: "transformedBounds\x0a\x09^  (outerPolygon deepCopy\x0a\x09\x09multiplyBy: transformation) boundingBox",
messageSends: ["boundingBox", "multiplyBy:", "deepCopy"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'geometry',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._translateByX_Y_(_st(aPoint)._x(),_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.AthensMorph)})},
args: ["aPoint"],
source: "translateBy: aPoint\x0a\x09self translateByX: aPoint x Y: aPoint y.",
messageSends: ["translateByX:Y:", "x", "y"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "translateByX:Y:",
category: 'geometry',
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@transformation"])._translateX_Y_(x,y);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"translateByX:Y:",{x:x,y:y},smalltalk.AthensMorph)})},
args: ["x", "y"],
source: "translateByX: x Y: y\x0a\x09transformation translateX: x Y: y.\x0a\x09self redraw.",
messageSends: ["translateX:Y:", "redraw"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "world",
category: 'internals',
fn: function (){
var self=this;
var m;
return smalltalk.withContext(function($ctx1) { 
var $1;
m=self;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(m)._isWorldMorph();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
m=_st(m)._owner();
return m;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=m;
return $1;
}, function($ctx1) {$ctx1.fill(self,"world",{m:m},smalltalk.AthensMorph)})},
args: [],
source: "world\x0a\x09|m|\x0a\x09m := self.\x0a\x09[m isWorldMorph] whileFalse: [m := m owner].\x0a\x09^ m",
messageSends: ["whileFalse:", "owner", "isWorldMorph"],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "zIndex",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@zIndex"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"zIndex",{},smalltalk.AthensMorph)})},
args: [],
source: "zIndex\x0a\x09^ zIndex",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "zIndex:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@zIndex"]=aNumber;
_st(self["@owner"])._submorphsZIndicesChanged();
return self}, function($ctx1) {$ctx1.fill(self,"zIndex:",{aNumber:aNumber},smalltalk.AthensMorph)})},
args: ["aNumber"],
source: "zIndex: aNumber\x0a\x09zIndex := aNumber.\x0a\x09owner submorphsZIndicesChanged.",
messageSends: ["submorphsZIndicesChanged"],
referencedClasses: []
}),
smalltalk.AthensMorph);



smalltalk.addClass('AthensBinaryStatusButtonMorph', smalltalk.AthensMorph, ['textMorph', 'isChecked'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "checked:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
var changed;
return smalltalk.withContext(function($ctx1) { 
var $1;
changed=_st(self["@isChecked"]).__eq_eq(_st(aBoolean)._not());
self["@isChecked"]=aBoolean;
$1=changed;
if(smalltalk.assert($1)){
self._signalChange_(self["@isChecked"]);
};
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"checked:",{aBoolean:aBoolean,changed:changed},smalltalk.AthensBinaryStatusButtonMorph)})},
args: ["aBoolean"],
source: "checked: aBoolean\x0a\x09|changed|\x0a\x09changed := isChecked == aBoolean not.\x0a\x09isChecked := aBoolean.\x0a\x09changed ifTrue: [self signalChange: isChecked].\x0a\x09self redraw.",
messageSends: ["==", "not", "ifTrue:", "signalChange:", "redraw"],
referencedClasses: []
}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._drawStatusOn_(canvas);
self._outerShape_(_st((0).__at((0)))._corner_(_st((15).__plus(_st(self["@textMorph"])._width())).__at((15))));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.AthensBinaryStatusButtonMorph)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09self drawStatusOn: canvas.\x0a\x09self outerShape: (0@0 corner: 15 + textMorph width @15).\x09",
messageSends: ["drawStatusOn:", "outerShape:", "corner:", "@", "+", "width"],
referencedClasses: []
}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseDown:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseDown_.apply(_st(self), [evt]);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseDown:",{evt:evt},smalltalk.AthensBinaryStatusButtonMorph)})},
args: ["evt"],
source: "handleMouseDown: evt\x0a\x09super handleMouseDown: evt.\x0a\x09self redraw.",
messageSends: ["handleMouseDown:", "redraw"],
referencedClasses: []
}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseEnter.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensBinaryStatusButtonMorph)})},
args: [],
source: "handleMouseEnter\x0a\x09super handleMouseEnter.\x0a\x09self redraw.",
messageSends: ["handleMouseEnter", "redraw"],
referencedClasses: []
}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseLeave.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensBinaryStatusButtonMorph)})},
args: [],
source: "handleMouseLeave\x0a\x09super handleMouseLeave.\x0a\x09self redraw.",
messageSends: ["handleMouseLeave", "redraw"],
referencedClasses: []
}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseUp:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseUp_.apply(_st(self), [evt]);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseUp:",{evt:evt},smalltalk.AthensBinaryStatusButtonMorph)})},
args: ["evt"],
source: "handleMouseUp: evt\x0a\x09super handleMouseUp: evt.\x0a\x09self redraw.",
messageSends: ["handleMouseUp:", "redraw"],
referencedClasses: []
}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._initialize.apply(_st(self), []);
self._initializeText();
self["@isChecked"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensBinaryStatusButtonMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self initializeText.\x0a\x09isChecked := false.",
messageSends: ["initialize", "initializeText"],
referencedClasses: []
}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeText",
category: 'initialization',
fn: function (){
var self=this;
function $AthensTextMorph(){return smalltalk.AthensTextMorph||(typeof AthensTextMorph=="undefined"?nil:AthensTextMorph)}
return smalltalk.withContext(function($ctx1) { 
self["@textMorph"]=_st($AthensTextMorph())._new();
_st(self["@textMorph"])._translateByX_Y_((15),(-4));
_st(self["@textMorph"])._text_("BinaryStatusButtonMorph");
self._addMorph_(self["@textMorph"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeText",{},smalltalk.AthensBinaryStatusButtonMorph)})},
args: [],
source: "initializeText\x0a\x09textMorph := AthensTextMorph new.\x0a\x09textMorph translateByX: 15 Y: -4.\x0a\x09textMorph text: 'BinaryStatusButtonMorph'.\x0a\x09self addMorph: textMorph.",
messageSends: ["new", "translateByX:Y:", "text:", "addMorph:"],
referencedClasses: ["AthensTextMorph"]
}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isChecked",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isChecked"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isChecked",{},smalltalk.AthensBinaryStatusButtonMorph)})},
args: [],
source: "isChecked\x0a\x09^ isChecked",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@textMorph"])._text_(aString);
self._layoutChanged();
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.AthensBinaryStatusButtonMorph)})},
args: ["aString"],
source: "text: aString\x0a\x09textMorph text: aString.\x0a\x09self layoutChanged.",
messageSends: ["text:", "layoutChanged"],
referencedClasses: []
}),
smalltalk.AthensBinaryStatusButtonMorph);



smalltalk.addClass('AthensCheckBoxMorph', smalltalk.AthensBinaryStatusButtonMorph, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "drawStatusOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
_st(_st(canvas)._pathTransform())._translateBy_((0).__at((1)));
_st(canvas)._setShape_(_st((0).__at((0)))._corner_((10).__at((10))));
_st(canvas)._setPaint_(_st($Color())._cosmoGray());
$1=self["@isMouseDown"];
if(smalltalk.assert($1)){
_st(canvas)._setPaint_(_st($Color())._cosmoDarkGray());
};
_st(canvas)._draw();
_st(_st(canvas)._pathTransform())._translateBy_((0.25).__at((0.25)));
_st(canvas)._setShape_(_st((1).__at((1)))._corner_((9).__at((9))));
$2=self["@hasMouseFocus"];
if(smalltalk.assert($2)){
_st(canvas)._setPaint_(_st($Color())._cosmoLightGray());
} else {
_st(canvas)._setPaint_(_st($Color())._white());
};
_st(canvas)._draw();
$3=self["@isChecked"];
if(smalltalk.assert($3)){
_st(_st(canvas)._pathTransform())._translateBy_((0).__at((0)));
_st(canvas)._setShape_(_st((2).__at((2)))._corner_((8).__at((8))));
_st(canvas)._setPaint_(_st($Color())._black());
_st(canvas)._draw();
};
return self}, function($ctx1) {$ctx1.fill(self,"drawStatusOn:",{canvas:canvas},smalltalk.AthensCheckBoxMorph)})},
args: ["canvas"],
source: "drawStatusOn: canvas\x0a\x09canvas pathTransform translateBy: 0@1.\x0a\x09canvas setShape: (0@0 corner: 10@10).\x0a\x09canvas setPaint: Color cosmoGray.\x0a\x09isMouseDown ifTrue: [canvas setPaint: Color cosmoDarkGray].\x0a\x09canvas draw.\x0a\x0a\x09canvas pathTransform translateBy: 0.25@0.25. \x0a\x09canvas setShape: (1@1 corner: 9@9).\x0a\x09hasMouseFocus\x0a\x09\x09ifTrue: [canvas setPaint: Color cosmoLightGray]\x0a\x09\x09ifFalse: [canvas setPaint: Color white].\x0a\x09canvas draw.\x0a\x0a\x09isChecked ifTrue: [\x0a\x09\x09canvas pathTransform translateBy: 0@0.\x0a\x09\x09canvas setShape: (2@2 corner: 8@8).\x0a\x09\x09canvas setPaint: Color black.\x0a\x09\x09canvas draw].",
messageSends: ["translateBy:", "@", "pathTransform", "setShape:", "corner:", "setPaint:", "cosmoGray", "ifTrue:", "cosmoDarkGray", "draw", "ifTrue:ifFalse:", "cosmoLightGray", "white", "black"],
referencedClasses: ["Color"]
}),
smalltalk.AthensCheckBoxMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseClick:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._checked_(_st(self["@isChecked"])._not());
smalltalk.AthensBinaryStatusButtonMorph.fn.prototype._handleMouseClick_.apply(_st(self), [evt]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensCheckBoxMorph)})},
args: ["evt"],
source: "handleMouseClick: evt\x0a\x09self checked: isChecked not.\x0a\x09super handleMouseClick: evt.",
messageSends: ["checked:", "not", "handleMouseClick:"],
referencedClasses: []
}),
smalltalk.AthensCheckBoxMorph);



smalltalk.addClass('AthensRadioButtonMorph', smalltalk.AthensBinaryStatusButtonMorph, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "drawStatusOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
var circle;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
_st(_st(canvas)._pathTransform())._translateBy_((0).__at((3)));
circle=_st(canvas)._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._absolute();
_st($1)._moveTo_((0).__at((5)));
_st($1)._cwArcTo_angle_((10).__at((5)),(180));
$2=_st($1)._cwArcTo_angle_((0).__at((5)),(90));
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(canvas)._setShape_(circle);
_st(canvas)._setPaint_(_st($Color())._cosmoGray());
$3=self["@isMouseDown"];
if(smalltalk.assert($3)){
_st(canvas)._setPaint_(_st($Color())._cosmoDarkGray());
};
_st(canvas)._draw();
_st(_st(canvas)._pathTransform())._translateBy_((0).__at((0.5)));
circle=_st(canvas)._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$4=builder;
_st($4)._absolute();
_st($4)._moveTo_((1).__at((4)));
_st($4)._cwArcTo_angle_((9).__at((4)),(180));
$5=_st($4)._cwArcTo_angle_((1).__at((4)),(90));
return $5;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(canvas)._setShape_(circle);
$6=self["@hasMouseFocus"];
if(smalltalk.assert($6)){
_st(canvas)._setPaint_(_st($Color())._cosmoLightGray());
} else {
_st(canvas)._setPaint_(_st($Color())._white());
};
_st(canvas)._draw();
$7=self["@isChecked"];
if(smalltalk.assert($7)){
_st(_st(canvas)._pathTransform())._translateBy_((0).__at((0.5)));
circle=_st(canvas)._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$8=builder;
_st($8)._absolute();
_st($8)._moveTo_((2).__at((3)));
_st($8)._cwArcTo_angle_((8).__at((3)),(180));
$9=_st($8)._cwArcTo_angle_((2).__at((3)),(90));
return $9;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
circle;
_st(canvas)._setShape_(circle);
_st(canvas)._setPaint_(_st($Color())._black());
_st(canvas)._draw();
};
return self}, function($ctx1) {$ctx1.fill(self,"drawStatusOn:",{canvas:canvas,circle:circle},smalltalk.AthensRadioButtonMorph)})},
args: ["canvas"],
source: "drawStatusOn: canvas\x0a\x09|circle|\x0a\x09canvas pathTransform translateBy: 0@3.\x0a\x09circle := canvas createPath: [:builder | \x0a\x09\x09builder \x0a\x09\x09\x09absolute;\x0a\x09\x09\x09moveTo: 0@5;\x0a\x09\x09\x09cwArcTo: 10@5 angle: 180;\x0a\x09\x09\x09cwArcTo: 0@5 angle: 90 ] .\x0a\x09canvas setShape: circle.\x0a\x09canvas setPaint: Color cosmoGray.\x0a\x09isMouseDown ifTrue: [canvas setPaint: Color cosmoDarkGray].\x0a\x09canvas draw.\x0a\x0a\x09canvas pathTransform translateBy: 0@0.5.\x0a\x09circle := canvas createPath: [:builder | \x0a\x09\x09builder \x0a\x09\x09\x09absolute;\x0a\x09\x09\x09moveTo: 1@4;\x0a\x09\x09\x09cwArcTo: 9@4 angle: 180;\x0a\x09\x09\x09cwArcTo: 1@4 angle: 90].\x0a\x09canvas setShape: circle.\x0a\x09hasMouseFocus\x0a\x09\x09ifTrue: [canvas setPaint: Color cosmoLightGray]\x0a\x09\x09ifFalse: [canvas setPaint: Color white].\x0a\x09canvas draw.\x0a\x0a\x09isChecked ifTrue: [\x0a\x09\x09canvas pathTransform translateBy: 0@0.5.\x0a\x09\x09circle := canvas createPath: [:builder | \x0a\x09\x09\x09builder \x0a\x09\x09\x09\x09absolute;\x0a\x09\x09\x09\x09moveTo: 2@3;\x0a\x09\x09\x09\x09cwArcTo: 8@3 angle: 180;\x0a\x09\x09\x09\x09cwArcTo: 2@3 angle: 90 ] .\x0a\x09\x09canvas setShape: circle.\x0a\x09\x09canvas setPaint: Color black.\x0a\x09\x09canvas draw].",
messageSends: ["translateBy:", "@", "pathTransform", "createPath:", "absolute", "moveTo:", "cwArcTo:angle:", "setShape:", "setPaint:", "cosmoGray", "ifTrue:", "cosmoDarkGray", "draw", "ifTrue:ifFalse:", "cosmoLightGray", "white", "black"],
referencedClasses: ["Color"]
}),
smalltalk.AthensRadioButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseClick:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._checked_(true);
smalltalk.AthensBinaryStatusButtonMorph.fn.prototype._handleMouseClick_.apply(_st(self), [evt]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensRadioButtonMorph)})},
args: ["evt"],
source: "handleMouseClick: evt\x0a\x09self checked: true.\x0a\x09super handleMouseClick: evt.",
messageSends: ["checked:", "handleMouseClick:"],
referencedClasses: []
}),
smalltalk.AthensRadioButtonMorph);



smalltalk.addClass('AthensHaloMorph', smalltalk.AthensMorph, ['attachedTo', 'font', 'rectPath'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "attachedTo:",
category: 'accessing',
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@attachedTo"]=aMorph;
return self}, function($ctx1) {$ctx1.fill(self,"attachedTo:",{aMorph:aMorph},smalltalk.AthensHaloMorph)})},
args: ["aMorph"],
source: "attachedTo: aMorph\x0a\x09attachedTo := aMorph.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
var shape;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
shape=_st((0).__at((0)))._corner_((15).__at((15)));
_st(canvas)._setPaint_(self["@color"]);
$1=self["@rectPath"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@rectPath"]=self._generatePathWith_(canvas);
self["@rectPath"];
} else {
$1;
};
_st(canvas)._drawShape_(self["@rectPath"]);
_st(canvas)._setStrokePaint_(_st($Color())._black());
_st(canvas)._drawShape_(self["@rectPath"]);
_st(canvas)._setFont_(self["@font"]);
_st(canvas)._setPaint_(_st($Color())._white());
_st(_st(canvas)._pathTransform())._translateX_Y_((2),(11));
_st(canvas)._drawString_(self._haloText());
self._outerShape_(shape);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas,shape:shape},smalltalk.AthensHaloMorph)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09|shape|\x0a\x09shape := 0@0 corner: 15@15.\x0a\x09canvas setPaint: color.\x0a\x09rectPath ifNil: [rectPath := self generatePathWith: canvas].\x0a\x09canvas drawShape: rectPath.\x0a\x09canvas setStrokePaint: Color black.\x0a\x09canvas drawShape: rectPath.\x0a\x09canvas setFont: font.\x0a\x09canvas setPaint: Color white.\x0a\x09canvas pathTransform translateX: 2 Y: 11.\x0a\x09canvas drawString: self haloText.\x0a\x09self outerShape: shape.",
messageSends: ["corner:", "@", "setPaint:", "ifNil:", "generatePathWith:", "drawShape:", "setStrokePaint:", "black", "setFont:", "white", "translateX:Y:", "pathTransform", "drawString:", "haloText", "outerShape:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "generatePathWith:",
category: 'drawing',
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st(canvas)._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$2=builder;
_st($2)._absolute();
_st($2)._moveTo_((5).__at((0)));
_st($2)._lineTo_((10).__at((0)));
_st($2)._curveVia_to_((15).__at((0)),(15).__at((5)));
_st($2)._lineTo_((15).__at((10)));
_st($2)._curveVia_to_((15).__at((15)),(10).__at((15)));
_st($2)._lineTo_((5).__at((15)));
_st($2)._curveVia_to_((0).__at((15)),(0).__at((10)));
_st($2)._lineTo_((0).__at((5)));
$3=_st($2)._curveVia_to_((0).__at((0)),(5).__at((0)));
return $3;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"generatePathWith:",{canvas:canvas},smalltalk.AthensHaloMorph)})},
args: ["canvas"],
source: "generatePathWith: canvas\x0a\x09^ canvas createPath: [:builder |\x0a\x09\x09builder\x0a\x09\x09\x09absolute;\x0a\x09\x09\x09moveTo: 5@0;\x0a\x09\x09\x09lineTo: 10@0;\x0a\x09\x09\x09curveVia: 15@0 to: 15@5;\x0a\x09\x09\x09lineTo: 15@10;\x0a\x09\x09\x09curveVia: 15@15 to: 10@15;\x0a\x09\x09\x09lineTo: 5@15;\x0a\x09\x09\x09curveVia: 0@15 to: 0@10;\x0a\x09\x09\x09lineTo: 0@5;\x0a\x09\x09\x09curveVia: 0@0 to: 5@0].",
messageSends: ["createPath:", "absolute", "moveTo:", "@", "lineTo:", "curveVia:to:"],
referencedClasses: []
}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._color_(self._highlightColor());
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensHaloMorph)})},
args: [],
source: "handleMouseEnter\x0a\x09self color: self highlightColor.",
messageSends: ["color:", "highlightColor"],
referencedClasses: []
}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._color_(self._basicColor());
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensHaloMorph)})},
args: [],
source: "handleMouseLeave\x0a\x09self color: self basicColor.",
messageSends: ["color:", "basicColor"],
referencedClasses: []
}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._initialize.apply(_st(self), []);
self["@visible"]=false;
self["@font"]=_st($LogicalFont())._familyName_pointSize_("FontAwesome","12");
self["@color"]=self._basicColor();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHaloMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09visible := false.\x0a\x09font := LogicalFont familyName: 'FontAwesome' pointSize: '12'.\x0a\x09color := self basicColor.",
messageSends: ["initialize", "familyName:pointSize:", "basicColor"],
referencedClasses: ["LogicalFont"]
}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isHaloMorph",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isHaloMorph",{},smalltalk.AthensHaloMorph)})},
args: [],
source: "isHaloMorph\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHaloMorph);



smalltalk.addClass('AthensCloseHaloMorph', smalltalk.AthensHaloMorph, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "basicColor",
category: 'halo',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((0.6),(0.13),(0.47));
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicColor",{},smalltalk.AthensCloseHaloMorph)})},
args: [],
source: "basicColor\x0a\x09^ Color r: 0.6 g: 0.13 b: 0.47",
messageSends: ["r:g:b:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensCloseHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "haloPosition",
category: 'halo',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(-20).__at((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"haloPosition",{},smalltalk.AthensCloseHaloMorph)})},
args: [],
source: "haloPosition\x0a\x09^ -20 @ 0",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.AthensCloseHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "haloText",
category: 'halo',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"haloText",{},smalltalk.AthensCloseHaloMorph)})},
args: [],
source: "haloText\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensCloseHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseClick:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@attachedTo"])._delete();
_st(self._world())._hideHalos();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensCloseHaloMorph)})},
args: ["evt"],
source: "handleMouseClick: evt\x0a\x09attachedTo delete.\x0a\x09self world hideHalos.",
messageSends: ["delete", "hideHalos", "world"],
referencedClasses: []
}),
smalltalk.AthensCloseHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightColor",
category: 'halo',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((0.2),(0),(0.14));
return $1;
}, function($ctx1) {$ctx1.fill(self,"highlightColor",{},smalltalk.AthensCloseHaloMorph)})},
args: [],
source: "highlightColor\x0a\x09^ Color r: 0.2 g: 0 b: 0.14",
messageSends: ["r:g:b:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensCloseHaloMorph);



smalltalk.addClass('AthensInspectHaloMorph', smalltalk.AthensHaloMorph, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "basicColor",
category: 'halo',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((0),(0.9),(0.19));
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicColor",{},smalltalk.AthensInspectHaloMorph)})},
args: [],
source: "basicColor\x0a\x09^ Color r: 0 g: 0.9 b: 0.19",
messageSends: ["r:g:b:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensInspectHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "haloPosition",
category: 'halo',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(-20).__at((20));
return $1;
}, function($ctx1) {$ctx1.fill(self,"haloPosition",{},smalltalk.AthensInspectHaloMorph)})},
args: [],
source: "haloPosition\x0a\x09^ -20 @ 20",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.AthensInspectHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "haloText",
category: 'halo',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"haloText",{},smalltalk.AthensInspectHaloMorph)})},
args: [],
source: "haloText\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensInspectHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseClick:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@attachedTo"])._inspect();
_st(self._world())._hideHalos();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensInspectHaloMorph)})},
args: ["evt"],
source: "handleMouseClick: evt\x0a\x09attachedTo inspect.\x0a\x09self world hideHalos.",
messageSends: ["inspect", "hideHalos", "world"],
referencedClasses: []
}),
smalltalk.AthensInspectHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightColor",
category: 'halo',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((0),(0.2),(0.04));
return $1;
}, function($ctx1) {$ctx1.fill(self,"highlightColor",{},smalltalk.AthensInspectHaloMorph)})},
args: [],
source: "highlightColor\x0a\x09^ Color r: 0 g: 0.2 b: 0.04",
messageSends: ["r:g:b:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensInspectHaloMorph);



smalltalk.addClass('AthensMoveHaloMorph', smalltalk.AthensHaloMorph, ['globalMoveHandler', 'globalUpHandler', 'globalDownHandler'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "basicColor",
category: 'halo',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((0.6),(0.13),(0.47));
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicColor",{},smalltalk.AthensMoveHaloMorph)})},
args: [],
source: "basicColor\x0a\x09^ Color r: 0.6 g: 0.13 b: 0.47",
messageSends: ["r:g:b:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "haloPosition",
category: 'halo',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(-20).__at((40));
return $1;
}, function($ctx1) {$ctx1.fill(self,"haloPosition",{},smalltalk.AthensMoveHaloMorph)})},
args: [],
source: "haloPosition\x0a\x09^ -20 @ 40",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "haloText",
category: 'halo',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"haloText",{},smalltalk.AthensMoveHaloMorph)})},
args: [],
source: "haloText\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseDown:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._registerGlobalEvent_withCallback_("mouseMove",self["@globalMoveHandler"]);
_st(self._world())._registerGlobalEvent_withCallback_("mouseUp",self["@globalUpHandler"]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseDown:",{evt:evt},smalltalk.AthensMoveHaloMorph)})},
args: ["evt"],
source: "handleMouseDown: evt\x0a\x09self world registerGlobalEvent: #mouseMove withCallback: globalMoveHandler.\x0a\x09self world registerGlobalEvent: #mouseUp withCallback: globalUpHandler.",
messageSends: ["registerGlobalEvent:withCallback:", "world"],
referencedClasses: []
}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseUp:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseMove",self["@globalMoveHandler"]);
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseUp",self["@globalUpHandler"]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseUp:",{evt:evt},smalltalk.AthensMoveHaloMorph)})},
args: ["evt"],
source: "handleMouseUp: evt\x0a\x09self world unregisterGlobalEvent: #mouseMove withCallback: globalMoveHandler.\x0a\x09self world unregisterGlobalEvent: #mouseUp withCallback: globalUpHandler.",
messageSends: ["unregisterGlobalEvent:withCallback:", "world"],
referencedClasses: []
}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightColor",
category: 'halo',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((0),(0.2),(0.04));
return $1;
}, function($ctx1) {$ctx1.fill(self,"highlightColor",{},smalltalk.AthensMoveHaloMorph)})},
args: [],
source: "highlightColor\x0a\x09^ Color r: 0 g: 0.2 b: 0.04",
messageSends: ["r:g:b:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensHaloMorph.fn.prototype._initialize.apply(_st(self), []);
self["@globalMoveHandler"]=(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._processMouseMove_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
self["@globalUpHandler"]=(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._processMouseUp_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensMoveHaloMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09globalMoveHandler := [:evt | self processMouseMove: evt].\x0a\x09globalUpHandler := [:evt | self processMouseUp: evt].",
messageSends: ["initialize", "processMouseMove:", "processMouseUp:"],
referencedClasses: []
}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "processMouseMove:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@attachedTo"])._translateBy_(_st(_st(self["@attachedTo"])._globalPathTransform())._inverseTransform_(_st(_st(evt)._offsetX()).__at(_st(evt)._offsetY())));
return self}, function($ctx1) {$ctx1.fill(self,"processMouseMove:",{evt:evt},smalltalk.AthensMoveHaloMorph)})},
args: ["evt"],
source: "processMouseMove: evt\x0a\x09attachedTo translateBy: (attachedTo globalPathTransform inverseTransform: evt offsetX @ evt offsetY).",
messageSends: ["translateBy:", "inverseTransform:", "@", "offsetY", "offsetX", "globalPathTransform"],
referencedClasses: []
}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "processMouseUp:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._handleMouseUp_(evt);
return self}, function($ctx1) {$ctx1.fill(self,"processMouseUp:",{evt:evt},smalltalk.AthensMoveHaloMorph)})},
args: ["evt"],
source: "processMouseUp: evt\x0a\x09self handleMouseUp: evt.",
messageSends: ["handleMouseUp:"],
referencedClasses: []
}),
smalltalk.AthensMoveHaloMorph);



smalltalk.addClass('AthensRectangleMorph', smalltalk.AthensMorph, ['width', 'height', 'borderColor', 'fillColor', 'mouseDownFillColor', 'mouseFocusFillColor', 'hasSharpBorder'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderColor"]=aColor;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aColor:aColor},smalltalk.AthensRectangleMorph)})},
args: ["aColor"],
source: "borderColor: aColor\x0a\x09borderColor := aColor.\x0a\x09self redraw.",
messageSends: ["redraw"],
referencedClasses: []
}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
var shape,currentFillColor;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
shape=_st((0).__at((0)))._corner_(_st(self._width()).__at(self["@height"]));
$1=self["@hasMouseFocus"];
if(smalltalk.assert($1)){
currentFillColor=self["@mouseFocusFillColor"];
currentFillColor;
} else {
currentFillColor=self["@fillColor"];
currentFillColor;
};
$2=self["@isMouseDown"];
if(smalltalk.assert($2)){
currentFillColor=self["@mouseDownFillColor"];
currentFillColor;
};
$3=self["@hasSharpBorder"];
if(smalltalk.assert($3)){
_st(canvas)._setPaint_(self["@borderColor"]);
_st(canvas)._drawShape_(shape);
_st(canvas)._setPaint_(currentFillColor);
_st(canvas)._drawShape_(_st((1).__at((1)))._corner_(_st(_st(self["@width"]).__minus((1))).__at(_st(self["@height"]).__minus((1)))));
} else {
_st(canvas)._setPaint_(currentFillColor);
_st(canvas)._drawShape_(shape);
_st(canvas)._setStrokePaint_(self["@borderColor"]);
_st(canvas)._drawShape_(shape);
};
self._outerShape_(shape);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas,shape:shape,currentFillColor:currentFillColor},smalltalk.AthensRectangleMorph)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09|shape currentFillColor|\x0a\x09\x22Use method width instead of instance variable to ensure that width is calculated.\x22\x0a\x09shape := 0@0 corner: self width@height.\x0a\x09hasMouseFocus \x0a\x09\x09ifTrue: [currentFillColor := mouseFocusFillColor]\x0a\x09\x09ifFalse: [currentFillColor := fillColor].\x0a\x09isMouseDown ifTrue: [currentFillColor := mouseDownFillColor].\x0a\x09\x0a\x09hasSharpBorder\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09canvas setPaint: borderColor.\x0a\x09\x09\x09canvas drawShape: shape.\x0a\x09\x09\x09canvas setPaint: currentFillColor.\x0a\x09\x09\x09canvas drawShape: (1@1 corner: width - 1 @ (height - 1))]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09canvas setPaint: currentFillColor.\x0a\x09\x09\x09canvas drawShape: shape.\x0a\x09\x09\x09canvas setStrokePaint: borderColor.\x0a\x09\x09\x09canvas drawShape: shape].\x0a\x09\x09\x09\x0a\x09self outerShape: shape.",
messageSends: ["corner:", "@", "width", "ifTrue:ifFalse:", "ifTrue:", "setPaint:", "drawShape:", "-", "setStrokePaint:", "outerShape:"],
referencedClasses: []
}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "fillColor:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mouseFocusFillColor"]=aColor;
self["@mouseDownFillColor"]=self["@mouseFocusFillColor"];
self["@fillColor"]=self["@mouseDownFillColor"];
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"fillColor:",{aColor:aColor},smalltalk.AthensRectangleMorph)})},
args: ["aColor"],
source: "fillColor: aColor\x0a\x09fillColor := mouseDownFillColor := mouseFocusFillColor := aColor.\x0a\x09self redraw.",
messageSends: ["redraw"],
referencedClasses: []
}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseDown:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseDown_.apply(_st(self), [evt]);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseDown:",{evt:evt},smalltalk.AthensRectangleMorph)})},
args: ["evt"],
source: "handleMouseDown: evt\x0a\x09super handleMouseDown: evt.\x0a\x09self redraw.",
messageSends: ["handleMouseDown:", "redraw"],
referencedClasses: []
}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseEnter.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensRectangleMorph)})},
args: [],
source: "handleMouseEnter\x0a\x09super handleMouseEnter.\x0a\x09self redraw.",
messageSends: ["handleMouseEnter", "redraw"],
referencedClasses: []
}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseLeave.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensRectangleMorph)})},
args: [],
source: "handleMouseLeave\x0a\x09super handleMouseLeave.\x0a\x09self redraw.",
messageSends: ["handleMouseLeave", "redraw"],
referencedClasses: []
}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseUp:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseUp_.apply(_st(self), [evt]);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseUp:",{evt:evt},smalltalk.AthensRectangleMorph)})},
args: ["evt"],
source: "handleMouseUp: evt\x0a\x09super handleMouseUp: evt.\x0a\x09self redraw.",
messageSends: ["handleMouseUp:", "redraw"],
referencedClasses: []
}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.AthensRectangleMorph)})},
args: [],
source: "height\x0a\x09^ height",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@height"]=aNumber;
self._outerShape_(_st((0).__at((0)))._corner_(_st(self._width()).__at(self["@height"])));
self._layoutChanged();
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumber:aNumber},smalltalk.AthensRectangleMorph)})},
args: ["aNumber"],
source: "height: aNumber\x0a\x09height := aNumber.\x0a\x09self outerShape: (0@0 corner: self width@height).\x0a\x09self layoutChanged.\x0a\x09self redraw.",
messageSends: ["outerShape:", "corner:", "@", "width", "layoutChanged", "redraw"],
referencedClasses: []
}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._initialize.apply(_st(self), []);
self["@height"]=(50);
self["@width"]=self["@height"];
self["@borderColor"]=_st($Color())._black();
self["@mouseFocusFillColor"]=_st($Color())._white();
self["@mouseDownFillColor"]=self["@mouseFocusFillColor"];
self["@fillColor"]=self["@mouseDownFillColor"];
self["@hasSharpBorder"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensRectangleMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09width := height := 50.\x0a\x09borderColor := Color black.\x0a\x09fillColor := mouseDownFillColor := mouseFocusFillColor := Color white.\x0a\x09hasSharpBorder := false.",
messageSends: ["initialize", "black", "white"],
referencedClasses: ["Color"]
}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseDownFillColor:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mouseDownFillColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"mouseDownFillColor:",{aColor:aColor},smalltalk.AthensRectangleMorph)})},
args: ["aColor"],
source: "mouseDownFillColor: aColor\x0a\x09mouseDownFillColor := aColor.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseFocusFillColor:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mouseFocusFillColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"mouseFocusFillColor:",{aColor:aColor},smalltalk.AthensRectangleMorph)})},
args: ["aColor"],
source: "mouseFocusFillColor: aColor\x0a\x09mouseFocusFillColor := aColor.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.AthensRectangleMorph)})},
args: [],
source: "width\x0a\x09^ width",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=aNumber;
self._outerShape_(_st((0).__at((0)))._corner_(_st(self._width()).__at(self["@height"])));
self._layoutChanged();
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},smalltalk.AthensRectangleMorph)})},
args: ["aNumber"],
source: "width: aNumber\x0a\x09width := aNumber.\x0a\x09self outerShape: (0@0 corner: self width@height).\x0a\x09self layoutChanged.\x0a\x09self redraw.",
messageSends: ["outerShape:", "corner:", "@", "width", "layoutChanged", "redraw"],
referencedClasses: []
}),
smalltalk.AthensRectangleMorph);


smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'instance creation',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._width_(_st(aPoint)._x());
_st($2)._height_(_st(aPoint)._y());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.AthensRectangleMorph.klass)})},
args: ["aPoint"],
source: "extent: aPoint\x0a\x09^ self new\x0a\x09\x09width: aPoint x;\x0a\x09\x09height: aPoint y;\x0a\x09\x09yourself",
messageSends: ["width:", "x", "new", "height:", "y", "yourself"],
referencedClasses: []
}),
smalltalk.AthensRectangleMorph.klass);


smalltalk.addClass('AthensButtonMorph', smalltalk.AthensRectangleMorph, ['textMorph'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._initialize.apply(_st(self), []);
self._initializeTextMorph();
self._initializeColors();
self["@hasSharpBorder"]=true;
self._layoutChanged();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensButtonMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self initializeTextMorph.\x0a\x09self initializeColors.\x0a\x09hasSharpBorder := true.\x0a\x09self layoutChanged.",
messageSends: ["initialize", "initializeTextMorph", "initializeColors", "layoutChanged"],
referencedClasses: []
}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeColors",
category: 'initialization',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@fillColor"]=_st($Color())._cosmoBlue();
self["@mouseFocusFillColor"]=_st($Color())._cosmoMiddleBlue();
self["@mouseDownFillColor"]=_st($Color())._cosmoDarkBlue();
self["@borderColor"]=self["@mouseDownFillColor"];
_st(self["@textMorph"])._fontColor_(_st($Color())._white());
return self}, function($ctx1) {$ctx1.fill(self,"initializeColors",{},smalltalk.AthensButtonMorph)})},
args: [],
source: "initializeColors\x0a\x09fillColor := Color cosmoBlue.\x0a\x09mouseFocusFillColor := Color cosmoMiddleBlue.\x0a\x09borderColor := mouseDownFillColor := Color cosmoDarkBlue.\x0a\x09textMorph fontColor: Color white.",
messageSends: ["cosmoBlue", "cosmoMiddleBlue", "cosmoDarkBlue", "fontColor:", "white"],
referencedClasses: ["Color"]
}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeTextMorph",
category: 'initialization',
fn: function (){
var self=this;
function $AthensTextMorph(){return smalltalk.AthensTextMorph||(typeof AthensTextMorph=="undefined"?nil:AthensTextMorph)}
return smalltalk.withContext(function($ctx1) { 
self["@textMorph"]=_st($AthensTextMorph())._new();
_st(self["@textMorph"])._text_("ButtonMorph");
self._addMorph_(self["@textMorph"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeTextMorph",{},smalltalk.AthensButtonMorph)})},
args: [],
source: "initializeTextMorph\x0a\x09textMorph := AthensTextMorph new.\x0a\x09textMorph text: 'ButtonMorph'.\x0a\x09self addMorph: textMorph.",
messageSends: ["new", "text:", "addMorph:"],
referencedClasses: ["AthensTextMorph"]
}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutChanged",
category: 'morph handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.AthensRectangleMorph.fn.prototype._layoutChanged.apply(_st(self), []);
$1=self["@textMorph"];
_st($1)._resetTransformation();
$2=_st($1)._translateByX_Y_(_st(_st(self["@width"]).__minus(_st(self["@textMorph"])._width())).__slash((2)),_st(_st(self["@height"]).__minus(_st(self["@textMorph"])._height())).__slash((2)));
return self}, function($ctx1) {$ctx1.fill(self,"layoutChanged",{},smalltalk.AthensButtonMorph)})},
args: [],
source: "layoutChanged\x0a\x09super layoutChanged.\x0a\x09textMorph\x0a\x09\x09resetTransformation;\x0a\x09\x09translateByX: width - textMorph width / 2 Y: height - textMorph height / 2.",
messageSends: ["layoutChanged", "resetTransformation", "translateByX:Y:", "/", "-", "width", "height"],
referencedClasses: []
}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@textMorph"])._text_(aString);
self._layoutChanged();
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.AthensButtonMorph)})},
args: ["aString"],
source: "text: aString\x0a\x09textMorph text: aString.\x0a\x09self layoutChanged.",
messageSends: ["text:", "layoutChanged"],
referencedClasses: []
}),
smalltalk.AthensButtonMorph);



smalltalk.addClass('AthensIconButtonMorph', smalltalk.AthensButtonMorph, ['iconMorph'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "icon:",
category: 'accessing',
fn: function (anIconMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@iconMorph"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self["@iconMorph"])._delete();
};
self["@iconMorph"]=anIconMorph;
_st(self["@iconMorph"])._fontColor_(_st(self["@textMorph"])._fontColor());
self._addMorph_(self["@iconMorph"]);
self._layoutChanged();
return self}, function($ctx1) {$ctx1.fill(self,"icon:",{anIconMorph:anIconMorph},smalltalk.AthensIconButtonMorph)})},
args: ["anIconMorph"],
source: "icon: anIconMorph\x0a\x09iconMorph ifNotNil: [iconMorph delete].\x0a\x09iconMorph := anIconMorph.\x0a\x09iconMorph fontColor: textMorph fontColor.\x0a\x09self addMorph: iconMorph.\x0a\x09self layoutChanged.",
messageSends: ["ifNotNil:", "delete", "fontColor:", "fontColor", "addMorph:", "layoutChanged"],
referencedClasses: []
}),
smalltalk.AthensIconButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutChanged",
category: 'morph handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
smalltalk.AthensButtonMorph.fn.prototype._layoutChanged.apply(_st(self), []);
$1=self["@iconMorph"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self["@textMorph"])._translateByX_Y_(_st(_st(_st(self["@iconMorph"])._width()).__slash((2))).__plus((3.5)),(0));
$2=self["@iconMorph"];
_st($2)._resetTransformation();
$3=_st($2)._translateByX_Y_(_st(_st(_st(_st(self["@width"]).__minus(_st(self["@textMorph"])._width())).__minus(_st(self["@iconMorph"])._width())).__slash((2))).__minus((0.5)),_st(_st(_st(self["@height"]).__minus(_st(self["@textMorph"])._height())).__slash((2))).__minus((1)));
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"layoutChanged",{},smalltalk.AthensIconButtonMorph)})},
args: [],
source: "layoutChanged\x0a\x09super layoutChanged.\x0a\x09\x0a\x09iconMorph ifNotNil: [\x0a\x09\x09textMorph translateByX: iconMorph width / 2 + 3.5 Y: 0.\x0a\x09\x09iconMorph\x0a\x09\x09\x09resetTransformation;\x0a\x09\x09\x09translateByX: width - textMorph width - iconMorph width / 2 - 0.5 Y: height - textMorph height / 2 - 1].",
messageSends: ["layoutChanged", "ifNotNil:", "translateByX:Y:", "+", "/", "width", "resetTransformation", "-", "height"],
referencedClasses: []
}),
smalltalk.AthensIconButtonMorph);



smalltalk.addClass('AthensListItemMorph', smalltalk.AthensRectangleMorph, ['textMorph', 'item'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._initialize.apply(_st(self), []);
self["@hasSharpBorder"]=true;
self._initializeTextMorph();
self._height_((20));
self._unselect();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensListItemMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09hasSharpBorder := true.\x0a\x09self initializeTextMorph.\x0a\x09self height: 20.\x0a\x09self unselect.",
messageSends: ["initialize", "initializeTextMorph", "height:", "unselect"],
referencedClasses: []
}),
smalltalk.AthensListItemMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeTextMorph",
category: 'initialization',
fn: function (){
var self=this;
function $AthensTextMorph(){return smalltalk.AthensTextMorph||(typeof AthensTextMorph=="undefined"?nil:AthensTextMorph)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($AthensTextMorph())._new();
_st($1)._translateByX_Y_((5),(0));
$2=_st($1)._yourself();
self["@textMorph"]=$2;
self._addMorph_(self["@textMorph"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeTextMorph",{},smalltalk.AthensListItemMorph)})},
args: [],
source: "initializeTextMorph\x0a\x09textMorph := AthensTextMorph new\x0a\x09\x09translateByX: 5 Y: 0;\x0a\x09\x09yourself.\x0a\x09self addMorph: textMorph.",
messageSends: ["translateByX:Y:", "new", "yourself", "addMorph:"],
referencedClasses: ["AthensTextMorph"]
}),
smalltalk.AthensListItemMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "item",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@item"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"item",{},smalltalk.AthensListItemMorph)})},
args: [],
source: "item\x0a\x09^ item",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensListItemMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "item:",
category: 'accessing',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@item"]=anItem;
_st(self["@textMorph"])._text_(_st(anItem)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"item:",{anItem:anItem},smalltalk.AthensListItemMorph)})},
args: ["anItem"],
source: "item: anItem\x0a\x09item := anItem.\x0a\x09textMorph text: anItem asString.",
messageSends: ["text:", "asString"],
referencedClasses: []
}),
smalltalk.AthensListItemMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "select",
category: 'item handling',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@mouseFocusFillColor"]=_st($Color())._cosmoMiddleBlue();
self["@mouseDownFillColor"]=_st($Color())._cosmoDarkBlue();
self["@fillColor"]=_st($Color())._cosmoDarkBlue();
self["@borderColor"]=_st($Color())._cosmoDarkGray();
_st(self["@textMorph"])._fontColor_(_st($Color())._white());
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"select",{},smalltalk.AthensListItemMorph)})},
args: [],
source: "select\x0a\x09mouseFocusFillColor := Color cosmoMiddleBlue.\x0a\x09mouseDownFillColor := Color cosmoDarkBlue.\x0a\x09fillColor := Color cosmoDarkBlue.\x0a\x09borderColor := Color cosmoDarkGray.\x0a\x09textMorph fontColor: Color white.\x0a\x09self redraw.",
messageSends: ["cosmoMiddleBlue", "cosmoDarkBlue", "cosmoDarkGray", "fontColor:", "white", "redraw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensListItemMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "unselect",
category: 'item handling',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@mouseFocusFillColor"]=_st($Color())._cosmoLightGray();
self["@mouseDownFillColor"]=_st($Color())._cosmoGray();
self["@fillColor"]=_st($Color())._white();
self["@borderColor"]=_st($Color())._cosmoDarkGray();
_st(self["@textMorph"])._fontColor_(_st($Color())._black());
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"unselect",{},smalltalk.AthensListItemMorph)})},
args: [],
source: "unselect\x0a\x09mouseFocusFillColor := Color cosmoLightGray.\x0a\x09mouseDownFillColor := Color cosmoGray.\x0a\x09fillColor := Color white.\x0a\x09borderColor := Color cosmoDarkGray.\x0a\x09textMorph fontColor: Color black.\x0a\x09self redraw.",
messageSends: ["cosmoLightGray", "cosmoGray", "white", "cosmoDarkGray", "fontColor:", "black", "redraw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensListItemMorph);


smalltalk.addMethod(
smalltalk.method({
selector: "for:",
category: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._item_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{anObject:anObject},smalltalk.AthensListItemMorph.klass)})},
args: ["anObject"],
source: "for: anObject\x0a\x09^ self new\x0a\x09\x09item: anObject;\x0a\x09\x09yourself",
messageSends: ["item:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AthensListItemMorph.klass);


smalltalk.addClass('AthensScrollAreaMorph', smalltalk.AthensRectangleMorph, ['xScrollBar', 'yScrollBar', 'hasXScrollBar', 'hasYScrollBar', 'innerContainer', 'outerContainer', 'needsContentExtentUpdate'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "addMorph:",
category: 'morph handling',
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@innerContainer"])._addMorph_(aMorph);
self._updateContentExtent();
self["@needsContentExtentUpdate"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"addMorph:",{aMorph:aMorph},smalltalk.AthensScrollAreaMorph)})},
args: ["aMorph"],
source: "addMorph: aMorph\x0a\x09innerContainer addMorph: aMorph.\x0a\x09self updateContentExtent.\x0a\x09needsContentExtentUpdate := true.",
messageSends: ["addMorph:", "updateContentExtent"],
referencedClasses: []
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleChangeX:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._updateVisibleArea();
return self}, function($ctx1) {$ctx1.fill(self,"handleChangeX:",{evt:evt},smalltalk.AthensScrollAreaMorph)})},
args: ["evt"],
source: "handleChangeX: evt\x0a\x09self updateVisibleArea.",
messageSends: ["updateVisibleArea"],
referencedClasses: []
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleChangeY:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._updateVisibleArea();
return self}, function($ctx1) {$ctx1.fill(self,"handleChangeY:",{evt:evt},smalltalk.AthensScrollAreaMorph)})},
args: ["evt"],
source: "handleChangeY: evt\x0a\x09self updateVisibleArea.",
messageSends: ["updateVisibleArea"],
referencedClasses: []
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseWheel:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@xScrollBar"])._value_(_st(_st(_st(self["@xScrollBar"])._buttonStepSize()).__star(_st(_st(evt)._at_("wheelDelta"))._x())).__plus(_st(self["@xScrollBar"])._value()));
_st(self["@yScrollBar"])._value_(_st(_st(_st(self["@yScrollBar"])._buttonStepSize()).__star(_st(_st(evt)._at_("wheelDelta"))._y())).__plus(_st(self["@yScrollBar"])._value()));
smalltalk.AthensRectangleMorph.fn.prototype._handleMouseWheel_.apply(_st(self), [evt]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseWheel:",{evt:evt},smalltalk.AthensScrollAreaMorph)})},
args: ["evt"],
source: "handleMouseWheel: evt\x0a\x09xScrollBar value: xScrollBar buttonStepSize * (evt at: #wheelDelta) x + xScrollBar value.\x0a\x09yScrollBar value: yScrollBar buttonStepSize * (evt at: #wheelDelta) y + yScrollBar value.\x0a\x09super handleMouseWheel: evt.",
messageSends: ["value:", "+", "value", "*", "x", "at:", "buttonStepSize", "y", "handleMouseWheel:"],
referencedClasses: []
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "hasXScrollBar",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@hasXScrollBar"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasXScrollBar",{},smalltalk.AthensScrollAreaMorph)})},
args: [],
source: "hasXScrollBar\x0a\x09^ hasXScrollBar",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "hasXScrollBar:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@hasXScrollBar"]=aBoolean;
$1=self;
_st($1)._layoutChanged();
$2=_st($1)._updateVisibleArea();
return self}, function($ctx1) {$ctx1.fill(self,"hasXScrollBar:",{aBoolean:aBoolean},smalltalk.AthensScrollAreaMorph)})},
args: ["aBoolean"],
source: "hasXScrollBar: aBoolean\x0a\x09hasXScrollBar := aBoolean.\x0a\x09self\x0a\x09\x09layoutChanged;\x0a\x09\x09updateVisibleArea.",
messageSends: ["layoutChanged", "updateVisibleArea"],
referencedClasses: []
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "hasYScrollBar",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@hasYScrollBar"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasYScrollBar",{},smalltalk.AthensScrollAreaMorph)})},
args: [],
source: "hasYScrollBar\x0a\x09^ hasYScrollBar",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "hasYScrollBar:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@hasYScrollBar"]=aBoolean;
$1=self;
_st($1)._layoutChanged();
$2=_st($1)._updateVisibleArea();
return self}, function($ctx1) {$ctx1.fill(self,"hasYScrollBar:",{aBoolean:aBoolean},smalltalk.AthensScrollAreaMorph)})},
args: ["aBoolean"],
source: "hasYScrollBar: aBoolean\x0a\x09hasYScrollBar := aBoolean.\x0a\x09self\x0a\x09\x09layoutChanged;\x0a\x09\x09updateVisibleArea.",
messageSends: ["layoutChanged", "updateVisibleArea"],
referencedClasses: []
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._initialize.apply(_st(self), []);
self["@hasYScrollBar"]=true;
self["@hasXScrollBar"]=self["@hasYScrollBar"];
self._initializeContainer();
self._initializeScrollBars();
self._layoutChanged();
self._updateContentExtent();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensScrollAreaMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09hasXScrollBar := hasYScrollBar := true.\x0a\x09self initializeContainer.\x0a\x09self initializeScrollBars.\x0a\x09self layoutChanged.\x0a\x09self updateContentExtent.",
messageSends: ["initialize", "initializeContainer", "initializeScrollBars", "layoutChanged", "updateContentExtent"],
referencedClasses: []
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeContainer",
category: 'initialization',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $AthensRectangleMorph(){return smalltalk.AthensRectangleMorph||(typeof AthensRectangleMorph=="undefined"?nil:AthensRectangleMorph)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st($AthensRectangleMorph())._new();
_st($1)._borderColor_(_st($Color())._transparent());
_st($1)._fillColor_(_st($Color())._transparent());
_st($1)._mouseDownFillColor_(_st($Color())._transparent());
_st($1)._mouseFocusFillColor_(_st($Color())._transparent());
$2=_st($1)._translateByX_Y_((1),(1));
self["@outerContainer"]=$2;
smalltalk.AthensRectangleMorph.fn.prototype._addMorph_.apply(_st(self), [self["@outerContainer"]]);
$3=_st($AthensRectangleMorph())._new();
_st($3)._borderColor_(_st($Color())._transparent());
_st($3)._fillColor_(_st($Color())._transparent());
_st($3)._mouseDownFillColor_(_st($Color())._transparent());
$4=_st($3)._mouseFocusFillColor_(_st($Color())._transparent());
self["@innerContainer"]=$4;
_st(self["@outerContainer"])._addMorph_(self["@innerContainer"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeContainer",{},smalltalk.AthensScrollAreaMorph)})},
args: [],
source: "initializeContainer\x0a\x09outerContainer := AthensRectangleMorph new\x0a\x09\x09borderColor: Color transparent;\x0a\x09\x09fillColor: Color transparent;\x0a\x09\x09mouseDownFillColor: Color transparent;\x0a\x09\x09mouseFocusFillColor: Color transparent;\x0a\x09\x09translateByX: 1 Y: 1.\x09\x09\x22ensure that upper and left border is always visible\x22\x0a\x09super addMorph: outerContainer.\x0a\x09innerContainer := AthensRectangleMorph new\x0a\x09\x09borderColor: Color transparent;\x0a\x09\x09fillColor: Color transparent;\x0a\x09\x09mouseDownFillColor: Color transparent;\x0a\x09\x09mouseFocusFillColor: Color transparent.\x0a\x09outerContainer addMorph: innerContainer.",
messageSends: ["borderColor:", "transparent", "new", "fillColor:", "mouseDownFillColor:", "mouseFocusFillColor:", "translateByX:Y:", "addMorph:"],
referencedClasses: ["Color", "AthensRectangleMorph"]
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeScrollBars",
category: 'initialization',
fn: function (){
var self=this;
function $AthensScrollBarMorph(){return smalltalk.AthensScrollBarMorph||(typeof AthensScrollBarMorph=="undefined"?nil:AthensScrollBarMorph)}
return smalltalk.withContext(function($ctx1) { 
self["@yScrollBar"]=_st($AthensScrollBarMorph())._new();
self["@xScrollBar"]=_st($AthensScrollBarMorph())._new();
_st(self["@yScrollBar"])._onChange_((function(evt){
return smalltalk.withContext(function($ctx2) {
return self._handleChangeY_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(self["@xScrollBar"])._onChange_((function(evt){
return smalltalk.withContext(function($ctx2) {
return self._handleChangeX_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
smalltalk.AthensRectangleMorph.fn.prototype._addMorph_.apply(_st(self), [self["@yScrollBar"]]);
smalltalk.AthensRectangleMorph.fn.prototype._addMorph_.apply(_st(self), [self["@xScrollBar"]]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeScrollBars",{},smalltalk.AthensScrollAreaMorph)})},
args: [],
source: "initializeScrollBars\x0a\x09yScrollBar := AthensScrollBarMorph new.\x0a\x09xScrollBar := AthensScrollBarMorph new.\x0a\x09yScrollBar onChange: [:evt | self handleChangeY: evt].\x0a\x09xScrollBar onChange: [:evt | self handleChangeX: evt].\x0a\x09super addMorph: yScrollBar.\x0a\x09super addMorph: xScrollBar.",
messageSends: ["new", "onChange:", "handleChangeY:", "handleChangeX:", "addMorph:"],
referencedClasses: ["AthensScrollBarMorph"]
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutChanged",
category: 'morph handling',
fn: function (){
var self=this;
var barWidth,barHeight;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=self["@hasXScrollBar"];
if(smalltalk.assert($1)){
barHeight=(10);
barHeight;
_st(self["@xScrollBar"])._show();
} else {
barHeight=(0);
barHeight;
_st(self["@xScrollBar"])._hide();
};
$2=self["@hasYScrollBar"];
if(smalltalk.assert($2)){
barWidth=(10);
barWidth;
_st(self["@yScrollBar"])._show();
} else {
barWidth=(0);
barWidth;
_st(self["@yScrollBar"])._hide();
};
$3=self["@yScrollBar"];
_st($3)._resetTransformation();
_st($3)._height_(_st(self["@height"]).__minus(barHeight));
_st($3)._width_((10));
$4=_st($3)._translateByX_Y_(_st(self["@width"]).__minus((10)),(0));
$5=self["@xScrollBar"];
_st($5)._resetTransformation();
_st($5)._height_(_st(self["@width"]).__minus(barWidth));
_st($5)._width_((10));
_st($5)._translateByX_Y_((0),self["@height"]);
$6=_st($5)._rotateByDegrees_((-90));
$7=self["@outerContainer"];
_st($7)._height_(_st(self["@height"]).__minus(barWidth));
$8=_st($7)._width_(_st(self["@width"]).__minus(barWidth));
return self}, function($ctx1) {$ctx1.fill(self,"layoutChanged",{barWidth:barWidth,barHeight:barHeight},smalltalk.AthensScrollAreaMorph)})},
args: [],
source: "layoutChanged\x0a\x09|barWidth barHeight|\x0a\x09hasXScrollBar \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09barHeight := 10.\x0a\x09\x09\x09xScrollBar show]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09barHeight := 0.\x0a\x09\x09\x09xScrollBar hide].\x0a\x09hasYScrollBar \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09barWidth := 10.\x0a\x09\x09\x09yScrollBar show]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09barWidth := 0.\x0a\x09\x09\x09yScrollBar hide].\x0a\x0a\x09yScrollBar\x0a\x09\x09resetTransformation;\x0a\x09\x09height: height - barHeight;\x0a\x09\x09width: 10;\x0a\x09\x09translateByX:  width - 10 Y: 0.\x0a\x09xScrollBar\x0a\x09\x09resetTransformation;\x0a\x09\x09height: width - barWidth;\x0a\x09\x09width: 10;\x0a\x09\x09translateByX: 0 Y: height;\x0a\x09\x09rotateByDegrees: -90.\x0a\x09outerContainer\x0a\x09\x09height: height - barWidth;\x0a\x09\x09width: width - barWidth.",
messageSends: ["ifTrue:ifFalse:", "show", "hide", "resetTransformation", "height:", "-", "width:", "translateByX:Y:", "rotateByDegrees:"],
referencedClasses: []
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redrawEverythingOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.AthensRectangleMorph.fn.prototype._redrawEverythingOn_.apply(_st(self), [canvas]);
$1=self["@needsContentExtentUpdate"];
if(smalltalk.assert($1)){
self._updateContentExtent();
};
return self}, function($ctx1) {$ctx1.fill(self,"redrawEverythingOn:",{canvas:canvas},smalltalk.AthensScrollAreaMorph)})},
args: ["canvas"],
source: "redrawEverythingOn: canvas\x0a\x09super redrawEverythingOn: canvas.\x0a\x09needsContentExtentUpdate ifTrue: [self updateContentExtent].",
messageSends: ["redrawEverythingOn:", "ifTrue:", "updateContentExtent"],
referencedClasses: []
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "updateContentExtent",
category: 'morph handling',
fn: function (){
var self=this;
var maxX,maxY;
return smalltalk.withContext(function($ctx1) { 
maxY=(1);
maxX=maxY;
_st(_st(self["@innerContainer"])._submorphs())._do_((function(morph){
var bounds;
return smalltalk.withContext(function($ctx2) {
bounds=_st(morph)._transformedBounds();
bounds;
maxX=_st(maxX)._max_(_st(_st(bounds)._width()).__plus(_st(_st(bounds)._origin())._x()));
maxX;
maxY=_st(maxY)._max_(_st(_st(bounds)._height()).__plus(_st(_st(bounds)._origin())._y()));
return maxY;
}, function($ctx2) {$ctx2.fillBlock({morph:morph,bounds:bounds},$ctx1)})}));
_st(self["@innerContainer"])._width_(maxX);
_st(self["@innerContainer"])._height_(maxY);
_st(self["@xScrollBar"])._sliderRange_(_st(_st(self["@outerContainer"])._width()).__slash(maxX));
_st(self["@yScrollBar"])._sliderRange_(_st(_st(self["@outerContainer"])._height()).__slash(maxY));
self["@needsContentExtentUpdate"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"updateContentExtent",{maxX:maxX,maxY:maxY},smalltalk.AthensScrollAreaMorph)})},
args: [],
source: "updateContentExtent\x0a\x09|maxX maxY|\x0a\x09maxX := maxY := 1.\x0a\x09innerContainer submorphs do: [:morph | |bounds|\x0a\x09\x09bounds := morph transformedBounds.\x0a\x09\x09maxX := maxX max: bounds width + bounds origin x.\x0a\x09\x09maxY := maxY max: bounds height + bounds origin y].\x0a\x09innerContainer width: maxX.\x0a\x09innerContainer height: maxY.\x0a\x09xScrollBar sliderRange: outerContainer width / maxX.\x0a\x09yScrollBar sliderRange: outerContainer height / maxY.\x0a\x09needsContentExtentUpdate := false.",
messageSends: ["do:", "transformedBounds", "max:", "+", "x", "origin", "width", "y", "height", "submorphs", "width:", "height:", "sliderRange:", "/"],
referencedClasses: []
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "updateVisibleArea",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@innerContainer"];
_st($1)._resetTransformation();
$2=_st($1)._translateByX_Y_(_st(_st(self["@xScrollBar"])._value()).__star(_st(_st(self["@outerContainer"])._width()).__minus(_st(self["@innerContainer"])._width())),_st(_st(self["@yScrollBar"])._value()).__star(_st(_st(self["@outerContainer"])._height()).__minus(_st(self["@innerContainer"])._height())));
return self}, function($ctx1) {$ctx1.fill(self,"updateVisibleArea",{},smalltalk.AthensScrollAreaMorph)})},
args: [],
source: "updateVisibleArea\x0a\x09innerContainer\x0a\x09\x09resetTransformation;\x0a\x09\x09translateByX: xScrollBar value * (outerContainer width - innerContainer width)\x0a\x09\x09\x09Y: yScrollBar value * (outerContainer height - innerContainer height).",
messageSends: ["resetTransformation", "translateByX:Y:", "*", "-", "width", "value", "height"],
referencedClasses: []
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "valueX",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@xScrollBar"])._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"valueX",{},smalltalk.AthensScrollAreaMorph)})},
args: [],
source: "valueX\x0a\x09^ xScrollBar value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "valueX:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@xScrollBar"])._value_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"valueX:",{aNumber:aNumber},smalltalk.AthensScrollAreaMorph)})},
args: ["aNumber"],
source: "valueX: aNumber\x0a\x09xScrollBar value: aNumber.",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "valueY",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@yScrollBar"])._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"valueY",{},smalltalk.AthensScrollAreaMorph)})},
args: [],
source: "valueY\x0a\x09^ yScrollBar value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "valueY:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@yScrollBar"])._value_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"valueY:",{aNumber:aNumber},smalltalk.AthensScrollAreaMorph)})},
args: ["aNumber"],
source: "valueY: aNumber\x0a\x09yScrollBar value: aNumber.",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.AthensScrollAreaMorph);



smalltalk.addClass('AthensListBoxMorph', smalltalk.AthensScrollAreaMorph, ['nextPositionY', 'selectedItem'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "addItem:",
category: 'item handling',
fn: function (anObject){
var self=this;
var itemMorph;
function $AthensListItemMorph(){return smalltalk.AthensListItemMorph||(typeof AthensListItemMorph=="undefined"?nil:AthensListItemMorph)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
itemMorph=_st($AthensListItemMorph())._for_(anObject);
$1=itemMorph;
_st($1)._translateByX_Y_((-1),self["@nextPositionY"]);
_st($1)._width_(_st(_st(self["@outerContainer"])._width()).__plus((1)));
$2=_st($1)._onMouseClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._selectedItem_(itemMorph);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._addMorph_(itemMorph);
self["@nextPositionY"]=_st(_st(self["@nextPositionY"]).__plus(_st(itemMorph)._height())).__minus((1));
return self}, function($ctx1) {$ctx1.fill(self,"addItem:",{anObject:anObject,itemMorph:itemMorph},smalltalk.AthensListBoxMorph)})},
args: ["anObject"],
source: "addItem: anObject\x0a\x09|itemMorph|\x0a\x09itemMorph := AthensListItemMorph for: anObject.\x0a\x09itemMorph \x0a\x09\x09translateByX: -1 Y: nextPositionY;\x09\x22avoid double border\x22\x0a\x09\x09width: outerContainer width + 1;\x0a\x09\x09onMouseClick: [self selectedItem: itemMorph].\x0a\x09self addMorph: itemMorph.\x0a\x09nextPositionY := nextPositionY + itemMorph height - 1.",
messageSends: ["for:", "translateByX:Y:", "width:", "+", "width", "onMouseClick:", "selectedItem:", "addMorph:", "-", "height"],
referencedClasses: ["AthensListItemMorph"]
}),
smalltalk.AthensListBoxMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensScrollAreaMorph.fn.prototype._initialize.apply(_st(self), []);
self["@nextPositionY"]=(-1);
self["@hasSharpBorder"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensListBoxMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09nextPositionY := -1.\x09\x09\x22avoid double border\x22\x0a\x09hasSharpBorder := true.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.AthensListBoxMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem",
category: 'item handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedItem"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{},smalltalk.AthensListBoxMorph)})},
args: [],
source: "selectedItem\x0a\x09^ selectedItem",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensListBoxMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem:",
category: 'item handling',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedItem"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self["@selectedItem"])._unselect();
};
self["@selectedItem"]=anItem;
_st(self["@selectedItem"])._select();
self._signalChange_(_st(self["@selectedItem"])._item());
return self}, function($ctx1) {$ctx1.fill(self,"selectedItem:",{anItem:anItem},smalltalk.AthensListBoxMorph)})},
args: ["anItem"],
source: "selectedItem: anItem\x0a\x09selectedItem ifNotNil: [selectedItem unselect].\x0a\x09selectedItem := anItem.\x0a\x09selectedItem select.\x0a\x09self signalChange: selectedItem item.",
messageSends: ["ifNotNil:", "unselect", "select", "signalChange:", "item"],
referencedClasses: []
}),
smalltalk.AthensListBoxMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensScrollAreaMorph.fn.prototype._width_.apply(_st(self), [aNumber]);
_st(_st(self["@innerContainer"])._submorphs())._do_((function(morph){
return smalltalk.withContext(function($ctx2) {
return _st(morph)._width_(_st(_st(self["@outerContainer"])._width()).__plus((1)));
}, function($ctx2) {$ctx2.fillBlock({morph:morph},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},smalltalk.AthensListBoxMorph)})},
args: ["aNumber"],
source: "width: aNumber\x0a\x09super width: aNumber.\x0a\x09innerContainer submorphs do: [:morph | morph width: outerContainer width + 1].",
messageSends: ["width:", "do:", "+", "width", "submorphs"],
referencedClasses: []
}),
smalltalk.AthensListBoxMorph);



smalltalk.addClass('AthensScrollBarMorph', smalltalk.AthensRectangleMorph, ['decreaseButton', 'increaseButton', 'sliderButton', 'value', 'sliderRange', 'sliderMoveHandler', 'sliderUpHandler', 'buttonStepSize'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "buttonStepSize",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@buttonStepSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"buttonStepSize",{},smalltalk.AthensScrollBarMorph)})},
args: [],
source: "buttonStepSize\x0a\x09^ buttonStepSize",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "buttonStepSize:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@buttonStepSize"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"buttonStepSize:",{aNumber:aNumber},smalltalk.AthensScrollBarMorph)})},
args: ["aNumber"],
source: "buttonStepSize: aNumber\x0a\x09buttonStepSize := aNumber.\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleDecrease",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._value_(_st(self["@value"]).__minus(self["@buttonStepSize"]));
return self}, function($ctx1) {$ctx1.fill(self,"handleDecrease",{},smalltalk.AthensScrollBarMorph)})},
args: [],
source: "handleDecrease\x0a\x09self value: value - buttonStepSize.",
messageSends: ["value:", "-"],
referencedClasses: []
}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleIncrease",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._value_(_st(self["@value"]).__plus(self["@buttonStepSize"]));
return self}, function($ctx1) {$ctx1.fill(self,"handleIncrease",{},smalltalk.AthensScrollBarMorph)})},
args: [],
source: "handleIncrease\x0a\x09self value: value + buttonStepSize.",
messageSends: ["value:", "+"],
referencedClasses: []
}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._initialize.apply(_st(self), []);
self["@borderColor"]=_st($Color())._cosmoDarkGray();
self["@fillColor"]=_st($Color())._white();
self["@mouseDownFillColor"]=_st($Color())._cosmoLightGray();
self["@mouseFocusFillColor"]=_st($Color())._cosmoLightGray();
self["@hasSharpBorder"]=true;
self["@value"]=(0);
self["@sliderRange"]=(0.2);
self["@buttonStepSize"]=(0.1);
self._initializeButtons();
self._initializeEvents();
self._layoutChanged();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensScrollBarMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09borderColor := Color cosmoDarkGray.\x0a\x09fillColor := Color white.\x0a\x09mouseDownFillColor := Color cosmoLightGray.\x0a\x09mouseFocusFillColor := Color cosmoLightGray.\x0a\x09hasSharpBorder := true.\x0a\x09value := 0.\x0a\x09sliderRange := 0.2.\x0a\x09buttonStepSize := 0.1.\x0a\x09self initializeButtons.\x0a\x09self initializeEvents.\x0a\x09self layoutChanged.",
messageSends: ["initialize", "cosmoDarkGray", "white", "cosmoLightGray", "initializeButtons", "initializeEvents", "layoutChanged"],
referencedClasses: ["Color"]
}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeButtons",
category: 'initialization',
fn: function (){
var self=this;
function $AthensIconMorph(){return smalltalk.AthensIconMorph||(typeof AthensIconMorph=="undefined"?nil:AthensIconMorph)}
function $AthensIconButtonMorph(){return smalltalk.AthensIconButtonMorph||(typeof AthensIconButtonMorph=="undefined"?nil:AthensIconButtonMorph)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st($AthensIconButtonMorph())._new();
_st($1)._icon_(_st($AthensIconMorph())._arrowUp());
_st($1)._text_("");
_st($1)._onMouseClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._handleDecrease();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._yourself();
self["@decreaseButton"]=$2;
$3=_st($AthensIconButtonMorph())._new();
_st($3)._icon_(_st($AthensIconMorph())._arrowDown());
_st($3)._text_("");
_st($3)._onMouseClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._handleIncrease();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=_st($3)._yourself();
self["@increaseButton"]=$4;
$5=_st($AthensIconButtonMorph())._new();
_st($5)._icon_(_st(_st($AthensIconMorph())._reorder())._size_((9)));
_st($5)._text_("");
$6=_st($5)._yourself();
self["@sliderButton"]=$6;
self._addMorph_(self["@decreaseButton"]);
self._addMorph_(self["@increaseButton"]);
self._addMorph_(self["@sliderButton"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeButtons",{},smalltalk.AthensScrollBarMorph)})},
args: [],
source: "initializeButtons\x0a\x09decreaseButton := AthensIconButtonMorph new\x0a\x09\x09icon: AthensIconMorph arrowUp;\x0a\x09\x09text: '';\x0a\x09\x09onMouseClick: [self handleDecrease];\x0a\x09\x09yourself.\x0a\x09increaseButton := AthensIconButtonMorph new\x0a\x09\x09icon: AthensIconMorph arrowDown;\x0a\x09\x09text: '';\x0a\x09\x09onMouseClick: [self handleIncrease];\x0a\x09\x09yourself.\x0a\x09sliderButton := AthensIconButtonMorph new\x0a\x09\x09icon: (AthensIconMorph reorder size: 9);\x0a\x09\x09text: '';\x0a\x09\x09yourself.\x0a\x09self addMorph: decreaseButton.\x0a\x09self addMorph: increaseButton.\x0a\x09self addMorph: sliderButton.",
messageSends: ["icon:", "arrowUp", "new", "text:", "onMouseClick:", "handleDecrease", "yourself", "arrowDown", "handleIncrease", "size:", "reorder", "addMorph:"],
referencedClasses: ["AthensIconMorph", "AthensIconButtonMorph"]
}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEvents",
category: 'initialization',
fn: function (){
var self=this;
var sliderDownHandler;
return smalltalk.withContext(function($ctx1) { 
self["@sliderMoveHandler"]=(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._sliderMouseMove_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
self["@sliderUpHandler"]=(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._sliderMouseUp_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
sliderDownHandler=(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(self._world())._registerGlobalEvent_withCallback_("mouseMove",self["@sliderMoveHandler"]);
return _st(self._world())._registerGlobalEvent_withCallback_("mouseUp",self["@sliderUpHandler"]);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
_st(self["@sliderButton"])._onMouseDown_(sliderDownHandler);
return self}, function($ctx1) {$ctx1.fill(self,"initializeEvents",{sliderDownHandler:sliderDownHandler},smalltalk.AthensScrollBarMorph)})},
args: [],
source: "initializeEvents\x0a\x09|sliderDownHandler|\x0a\x09sliderMoveHandler := [:evt | self sliderMouseMove: evt].\x0a\x09sliderUpHandler := [:evt | self sliderMouseUp: evt].\x0a\x09sliderDownHandler := [:evt | \x0a\x09\x09self world registerGlobalEvent: #mouseMove withCallback: sliderMoveHandler.\x0a\x09\x09self world registerGlobalEvent: #mouseUp withCallback: sliderUpHandler].\x0a\x09sliderButton onMouseDown: sliderDownHandler.",
messageSends: ["sliderMouseMove:", "sliderMouseUp:", "registerGlobalEvent:withCallback:", "world", "onMouseDown:"],
referencedClasses: []
}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutChanged",
category: 'morph handling',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=self["@decreaseButton"];
_st($1)._width_(self["@width"]);
_st($1)._height_((10));
_st($1)._borderColor_(_st($Color())._cosmoDarkPurple());
_st($1)._fillColor_(_st($Color())._cosmoPurple());
_st($1)._mouseFocusFillColor_(_st($Color())._cosmoMiddlePurple());
_st($1)._mouseDownFillColor_(_st($Color())._cosmoDarkPurple());
$2=_st($1)._resetTransformation();
$3=self["@increaseButton"];
_st($3)._width_(self["@width"]);
_st($3)._height_((10));
_st($3)._borderColor_(_st($Color())._cosmoDarkPurple());
_st($3)._fillColor_(_st($Color())._cosmoPurple());
_st($3)._mouseFocusFillColor_(_st($Color())._cosmoMiddlePurple());
_st($3)._mouseDownFillColor_(_st($Color())._cosmoDarkPurple());
_st($3)._resetTransformation();
$4=_st($3)._translateByX_Y_((0),_st(self["@height"]).__minus((10)));
$5=self["@sliderButton"];
_st($5)._width_(self["@width"]);
_st($5)._borderColor_(_st($Color())._cosmoDarkPurple());
_st($5)._fillColor_(_st($Color())._cosmoLightPurple());
_st($5)._mouseFocusFillColor_(_st($Color())._cosmoMiddlePurple());
$6=_st($5)._mouseDownFillColor_(_st($Color())._cosmoDarkPurple());
self._layoutSliderButton();
return self}, function($ctx1) {$ctx1.fill(self,"layoutChanged",{},smalltalk.AthensScrollBarMorph)})},
args: [],
source: "layoutChanged\x0a\x09decreaseButton\x0a\x09\x09width: width;\x0a\x09\x09height: 10;\x0a\x09\x09borderColor: Color cosmoDarkPurple;\x0a\x09\x09fillColor: Color cosmoPurple;\x0a\x09\x09mouseFocusFillColor: Color cosmoMiddlePurple;\x0a\x09\x09mouseDownFillColor: Color cosmoDarkPurple;\x0a\x09\x09resetTransformation.\x0a\x09increaseButton\x0a\x09\x09width: width;\x0a\x09\x09height: 10;\x0a\x09\x09borderColor: Color cosmoDarkPurple;\x0a\x09\x09fillColor: Color cosmoPurple;\x0a\x09\x09mouseFocusFillColor: Color cosmoMiddlePurple;\x0a\x09\x09mouseDownFillColor: Color cosmoDarkPurple;\x0a\x09\x09resetTransformation;\x0a\x09\x09translateByX: 0 Y: height - 10.\x0a\x09sliderButton\x0a\x09\x09width: width;\x0a\x09\x09borderColor: Color cosmoDarkPurple;\x0a\x09\x09fillColor: Color cosmoLightPurple;\x0a\x09\x09mouseFocusFillColor: Color cosmoMiddlePurple;\x0a\x09\x09mouseDownFillColor: Color cosmoDarkPurple.\x0a\x09self layoutSliderButton.",
messageSends: ["width:", "height:", "borderColor:", "cosmoDarkPurple", "fillColor:", "cosmoPurple", "mouseFocusFillColor:", "cosmoMiddlePurple", "mouseDownFillColor:", "resetTransformation", "translateByX:Y:", "-", "cosmoLightPurple", "layoutSliderButton"],
referencedClasses: ["Color"]
}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutSliderButton",
category: 'morph handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@sliderButton"];
_st($1)._height_(_st(_st(self["@sliderRange"]).__star(_st(self["@height"]).__minus((20))))._max_((7)));
_st($1)._resetTransformation();
$2=_st($1)._translateByX_Y_((0),_st(_st(_st((1).__minus(self["@sliderRange"])).__star(self["@value"])).__star(_st(self["@height"]).__minus((20)))).__plus((10)));
return self}, function($ctx1) {$ctx1.fill(self,"layoutSliderButton",{},smalltalk.AthensScrollBarMorph)})},
args: [],
source: "layoutSliderButton\x0a\x09sliderButton\x0a\x09\x09height: (sliderRange * (height - 20) max: 7);\x0a\x09\x09resetTransformation;\x0a\x09\x09translateByX: 0 Y: (1 - sliderRange) * value * (height - 20) + 10.",
messageSends: ["height:", "max:", "*", "-", "resetTransformation", "translateByX:Y:", "+"],
referencedClasses: []
}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "sliderMouseMove:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._value_(_st(_st(_st(_st(self["@globalPathTransform"])._inverseTransform_(_st(evt)._at_("position")))._y()).__minus((10))).__slash(_st(self["@height"]).__minus((20))));
return self}, function($ctx1) {$ctx1.fill(self,"sliderMouseMove:",{evt:evt},smalltalk.AthensScrollBarMorph)})},
args: ["evt"],
source: "sliderMouseMove: evt\x0a\x09self value: (globalPathTransform inverseTransform: (evt at: #position)) y - 10 / (height - 20).",
messageSends: ["value:", "/", "-", "y", "inverseTransform:", "at:"],
referencedClasses: []
}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "sliderMouseUp:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseMove",self["@sliderMoveHandler"]);
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseUp",self["@sliderUpHandler"]);
return self}, function($ctx1) {$ctx1.fill(self,"sliderMouseUp:",{evt:evt},smalltalk.AthensScrollBarMorph)})},
args: ["evt"],
source: "sliderMouseUp: evt\x0a\x09self world unregisterGlobalEvent: #mouseMove withCallback: sliderMoveHandler.\x0a\x09self world unregisterGlobalEvent: #mouseUp withCallback: sliderUpHandler.",
messageSends: ["unregisterGlobalEvent:withCallback:", "world"],
referencedClasses: []
}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "sliderRange",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sliderRange"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sliderRange",{},smalltalk.AthensScrollBarMorph)})},
args: [],
source: "sliderRange\x0a\x09^ sliderRange",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "sliderRange:",
category: 'accessing',
fn: function (aNumber){
var self=this;
var newRange;
return smalltalk.withContext(function($ctx1) { 
newRange=_st(_st(aNumber)._min_((1)))._max_((0));
self["@sliderRange"]=newRange;
self._layoutSliderButton();
return self}, function($ctx1) {$ctx1.fill(self,"sliderRange:",{aNumber:aNumber,newRange:newRange},smalltalk.AthensScrollBarMorph)})},
args: ["aNumber"],
source: "sliderRange: aNumber\x0a\x09|newRange|\x0a\x09newRange := (aNumber min: 1) max: 0.\x0a\x09sliderRange := newRange.\x0a\x09self layoutSliderButton.",
messageSends: ["max:", "min:", "layoutSliderButton"],
referencedClasses: []
}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@value"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.AthensScrollBarMorph)})},
args: [],
source: "value\x0a\x09^ value",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (aNumber){
var self=this;
var changed,newNumber;
return smalltalk.withContext(function($ctx1) { 
var $1;
newNumber=_st(_st(aNumber)._min_((1)))._max_((0));
changed=_st(self["@value"]).__tild_tild(newNumber);
self["@value"]=newNumber;
self._layoutSliderButton();
$1=changed;
if(smalltalk.assert($1)){
self._signalChange_(newNumber);
};
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aNumber:aNumber,changed:changed,newNumber:newNumber},smalltalk.AthensScrollBarMorph)})},
args: ["aNumber"],
source: "value: aNumber\x0a\x09|changed newNumber|\x0a\x09newNumber := (aNumber min: 1) max: 0.\x0a\x09changed := value ~~ newNumber.\x0a\x09value := newNumber.\x0a\x09self layoutSliderButton.\x0a\x09changed ifTrue: [self signalChange: newNumber].",
messageSends: ["max:", "min:", "~~", "layoutSliderButton", "ifTrue:", "signalChange:"],
referencedClasses: []
}),
smalltalk.AthensScrollBarMorph);



smalltalk.addClass('AthensTextMorph', smalltalk.AthensRectangleMorph, ['text', 'font', 'fontColor', 'highlightFontColor'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "calculateWidth",
category: 'drawing',
fn: function (){
var self=this;
var surface;
function $AthensHTMLSurface(){return smalltalk.AthensHTMLSurface||(typeof AthensHTMLSurface=="undefined"?nil:AthensHTMLSurface)}
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
surface=_st($AthensHTMLSurface())._extent_((0).__at((0)));
_st(surface)._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(canvas)._setFont_(self["@font"]);
$1=_st(canvas)._measureStringWidth_(self["@text"]);
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"calculateWidth",{surface:surface},smalltalk.AthensTextMorph)})},
args: [],
source: "calculateWidth\x0a\x09|surface|\x0a\x09surface := AthensHTMLSurface extent: 0@0.\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09canvas setFont: font.\x0a\x09\x09^ canvas measureStringWidth: text].",
messageSends: ["extent:", "@", "drawDuring:", "setFont:", "measureStringWidth:"],
referencedClasses: ["AthensHTMLSurface"]
}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.AthensRectangleMorph.fn.prototype._drawOn_.apply(_st(self), [canvas]);
_st(canvas)._setFont_(self["@font"]);
$1=self["@hasMouseFocus"];
if(smalltalk.assert($1)){
_st(canvas)._setPaint_(self["@highlightFontColor"]);
} else {
_st(canvas)._setPaint_(self["@fontColor"]);
};
_st(_st(canvas)._pathTransform())._translateX_Y_((0),(15));
_st(canvas)._drawString_(self["@text"]);
self["@width"]=_st(canvas)._measureStringWidth_(self["@text"]);
self._outerShape_(_st((0).__at((0)))._corner_(_st(self["@width"]).__at(self["@height"])));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.AthensTextMorph)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09super drawOn: canvas.\x0a\x09canvas setFont: font.\x0a\x09hasMouseFocus \x0a\x09\x09ifTrue: [canvas setPaint: highlightFontColor]\x0a\x09\x09ifFalse: [canvas setPaint: fontColor].\x0a\x09canvas pathTransform translateX: 0 Y: 15.\x0a\x09canvas drawString: text.\x0a\x09\x0a\x09width := canvas measureStringWidth: text.\x0a\x09\x0a\x09self outerShape: (0@0 corner: width@height).",
messageSends: ["drawOn:", "setFont:", "ifTrue:ifFalse:", "setPaint:", "translateX:Y:", "pathTransform", "drawString:", "measureStringWidth:", "outerShape:", "corner:", "@"],
referencedClasses: []
}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "font:",
category: 'accessing',
fn: function (aFont){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@font"]=aFont;
self["@height"]=_st(_st(self["@font"])._pointSize()).__star((1.25));
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"font:",{aFont:aFont},smalltalk.AthensTextMorph)})},
args: ["aFont"],
source: "font: aFont\x0a\x09font := aFont.\x0a\x09height := font pointSize * 1.25.\x0a\x09self redraw.",
messageSends: ["*", "pointSize", "redraw"],
referencedClasses: []
}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "fontColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fontColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fontColor",{},smalltalk.AthensTextMorph)})},
args: [],
source: "fontColor\x0a\x09^ fontColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "fontColor:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@highlightFontColor"]=aColor;
self["@fontColor"]=self["@highlightFontColor"];
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"fontColor:",{aColor:aColor},smalltalk.AthensTextMorph)})},
args: ["aColor"],
source: "fontColor: aColor\x0a\x09fontColor := highlightFontColor := aColor.\x0a\x09self redraw.",
messageSends: ["redraw"],
referencedClasses: []
}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._handleMouseEnter.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensTextMorph)})},
args: [],
source: "handleMouseEnter\x0a\x09super handleMouseEnter.\x0a\x09self redraw.",
messageSends: ["handleMouseEnter", "redraw"],
referencedClasses: []
}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._handleMouseLeave.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensTextMorph)})},
args: [],
source: "handleMouseLeave\x0a\x09super handleMouseLeave.\x0a\x09self redraw.",
messageSends: ["handleMouseLeave", "redraw"],
referencedClasses: []
}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightFontColor:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@highlightFontColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"highlightFontColor:",{aColor:aColor},smalltalk.AthensTextMorph)})},
args: ["aColor"],
source: "highlightFontColor: aColor\x0a\x09highlightFontColor := aColor.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._initialize.apply(_st(self), []);
self["@mouseFocusFillColor"]=_st($Color())._transparent();
self["@mouseDownFillColor"]=self["@mouseFocusFillColor"];
self["@fillColor"]=self["@mouseDownFillColor"];
self["@borderColor"]=self["@fillColor"];
self["@text"]="a TextMorph";
self["@font"]=_st($LogicalFont())._familyName_pointSize_("Arial",(15));
self["@height"]=_st(_st(self["@font"])._pointSize()).__star((1.25));
self["@highlightFontColor"]=_st($Color())._black();
self["@fontColor"]=self["@highlightFontColor"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensTextMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09borderColor := fillColor := mouseDownFillColor := mouseFocusFillColor := Color transparent.\x0a\x09text := 'a TextMorph'.\x0a\x09font := LogicalFont familyName: 'Arial' pointSize: 15.\x0a\x09height := font pointSize * 1.25.\x0a\x09fontColor := highlightFontColor := Color black.",
messageSends: ["initialize", "transparent", "familyName:pointSize:", "*", "pointSize", "black"],
referencedClasses: ["Color", "LogicalFont"]
}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@text"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.AthensTextMorph)})},
args: [],
source: "text\x0a\x09^ text",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=aString;
self["@width"]=nil;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.AthensTextMorph)})},
args: ["aString"],
source: "text: aString\x0a\x09text := aString.\x0a\x09width := nil.\x0a\x09self redraw.",
messageSends: ["redraw"],
referencedClasses: []
}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@width"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@width"]=self._calculateWidth();
self["@width"];
} else {
$1;
};
$2=self["@width"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.AthensTextMorph)})},
args: [],
source: "width\x0a\x09width ifNil: [width := self calculateWidth].\x0a\x09^ width",
messageSends: ["ifNil:", "calculateWidth"],
referencedClasses: []
}),
smalltalk.AthensTextMorph);



smalltalk.addClass('AthensIconMorph', smalltalk.AthensTextMorph, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "font:",
category: ' accessing',
fn: function (aFont){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAllowed();
return self}, function($ctx1) {$ctx1.fill(self,"font:",{aFont:aFont},smalltalk.AthensIconMorph)})},
args: ["aFont"],
source: "font: aFont\x0a\x09self notAllowed.",
messageSends: ["notAllowed"],
referencedClasses: []
}),
smalltalk.AthensIconMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensTextMorph.fn.prototype._initialize.apply(_st(self), []);
self._size_((12));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensIconMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self size: 12.",
messageSends: ["initialize", "size:"],
referencedClasses: []
}),
smalltalk.AthensIconMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
category: ' accessing',
fn: function (aNumber){
var self=this;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
return smalltalk.withContext(function($ctx1) { 
self["@font"]=_st($LogicalFont())._familyName_pointSize_("FontAwesome",aNumber);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"size:",{aNumber:aNumber},smalltalk.AthensIconMorph)})},
args: ["aNumber"],
source: "size: aNumber\x0a\x09font := LogicalFont familyName: 'FontAwesome' pointSize: aNumber.\x0a\x09self redraw.",
messageSends: ["familyName:pointSize:", "redraw"],
referencedClasses: ["LogicalFont"]
}),
smalltalk.AthensIconMorph);


smalltalk.addMethod(
smalltalk.method({
selector: "arrowDown",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._text_("");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"arrowDown",{},smalltalk.AthensIconMorph.klass)})},
args: [],
source: "arrowDown\x0a\x09^ self new\x0a\x09\x09text: '';\x0a\x09\x09yourself",
messageSends: ["text:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AthensIconMorph.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "arrowUp",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._text_("");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"arrowUp",{},smalltalk.AthensIconMorph.klass)})},
args: [],
source: "arrowUp\x0a\x09^ self new\x0a\x09\x09text: '';\x0a\x09\x09yourself",
messageSends: ["text:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AthensIconMorph.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._text_("");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.AthensIconMorph.klass)})},
args: [],
source: "remove\x0a\x09^ self new\x0a\x09\x09text: '';\x0a\x09\x09yourself",
messageSends: ["text:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AthensIconMorph.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "reorder",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._text_("");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"reorder",{},smalltalk.AthensIconMorph.klass)})},
args: [],
source: "reorder\x0a\x09^ self new\x0a\x09\x09text: '';\x0a\x09\x09yourself",
messageSends: ["text:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AthensIconMorph.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resizeFull",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._text_("");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"resizeFull",{},smalltalk.AthensIconMorph.klass)})},
args: [],
source: "resizeFull\x0a\x09^ self new\x0a\x09\x09text: '';\x0a\x09\x09yourself",
messageSends: ["text:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AthensIconMorph.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resizeSmall",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._text_("");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"resizeSmall",{},smalltalk.AthensIconMorph.klass)})},
args: [],
source: "resizeSmall\x0a\x09^ self new\x0a\x09\x09text: '';\x0a\x09\x09yourself",
messageSends: ["text:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AthensIconMorph.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateCcw",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._text_("");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateCcw",{},smalltalk.AthensIconMorph.klass)})},
args: [],
source: "rotateCcw\x0a\x09^ self new\x0a\x09\x09text: '';\x0a\x09\x09yourself",
messageSends: ["text:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AthensIconMorph.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateCw",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._text_("");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateCw",{},smalltalk.AthensIconMorph.klass)})},
args: [],
source: "rotateCw\x0a\x09^ self new\x0a\x09\x09text: '';\x0a\x09\x09yourself",
messageSends: ["text:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AthensIconMorph.klass);


smalltalk.addClass('AthensResizeMorph', smalltalk.AthensIconMorph, ['globalMoveHandler', 'globalUpHandler'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'initialization',
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(canvas)._pathTransform())._translateBy_((16).__at((0)));
_st(_st(canvas)._pathTransform())._rotateByDegrees_((90));
smalltalk.AthensIconMorph.fn.prototype._drawOn_.apply(_st(self), [canvas]);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.AthensResizeMorph)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09canvas pathTransform translateBy: 16@0.\x0a\x09canvas pathTransform rotateByDegrees: 90.\x0a\x09super drawOn: canvas.",
messageSends: ["translateBy:", "@", "pathTransform", "rotateByDegrees:", "drawOn:"],
referencedClasses: []
}),
smalltalk.AthensResizeMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseDown:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._registerGlobalEvent_withCallback_("mouseMove",self["@globalMoveHandler"]);
_st(self._world())._registerGlobalEvent_withCallback_("mouseUp",self["@globalUpHandler"]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseDown:",{evt:evt},smalltalk.AthensResizeMorph)})},
args: ["evt"],
source: "handleMouseDown: evt\x0a\x09self world registerGlobalEvent: #mouseMove withCallback: globalMoveHandler.\x0a\x09self world registerGlobalEvent: #mouseUp withCallback: globalUpHandler.",
messageSends: ["registerGlobalEvent:withCallback:", "world"],
referencedClasses: []
}),
smalltalk.AthensResizeMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseUp:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseMove",self["@globalMoveHandler"]);
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseUp",self["@globalUpHandler"]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseUp:",{evt:evt},smalltalk.AthensResizeMorph)})},
args: ["evt"],
source: "handleMouseUp: evt\x0a\x09self world unregisterGlobalEvent: #mouseMove withCallback: globalMoveHandler.\x0a\x09self world unregisterGlobalEvent: #mouseUp withCallback: globalUpHandler.",
messageSends: ["unregisterGlobalEvent:withCallback:", "world"],
referencedClasses: []
}),
smalltalk.AthensResizeMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensIconMorph.fn.prototype._initialize.apply(_st(self), []);
self["@text"]="";
self["@fontColor"]=_st($Color())._cosmoDarkGray();
self["@highlightFontColor"]=_st($Color())._black();
self["@globalMoveHandler"]=(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._processMouseMove_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
self["@globalUpHandler"]=(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._processMouseUp_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensResizeMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09text := ''.\x0a\x09fontColor := Color cosmoDarkGray.\x0a\x09highlightFontColor := Color black.\x0a\x09globalMoveHandler := [:evt | self processMouseMove: evt].\x0a\x09globalUpHandler := [:evt | self processMouseUp: evt].",
messageSends: ["initialize", "cosmoDarkGray", "black", "processMouseMove:", "processMouseUp:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensResizeMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "processMouseMove:",
category: 'events',
fn: function (evt){
var self=this;
var newPos;
return smalltalk.withContext(function($ctx1) { 
newPos=_st(_st(self["@owner"])._globalPathTransform())._inverseTransform_(_st(evt)._globalPosition());
_st(self["@owner"])._width_(_st(newPos)._x());
_st(self["@owner"])._height_(_st(newPos)._y());
return self}, function($ctx1) {$ctx1.fill(self,"processMouseMove:",{evt:evt,newPos:newPos},smalltalk.AthensResizeMorph)})},
args: ["evt"],
source: "processMouseMove: evt\x0a\x09|newPos|\x0a\x09newPos := owner globalPathTransform inverseTransform: evt globalPosition.\x0a\x09owner width: newPos x.\x0a\x09owner height: newPos y.",
messageSends: ["inverseTransform:", "globalPosition", "globalPathTransform", "width:", "x", "height:", "y"],
referencedClasses: []
}),
smalltalk.AthensResizeMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "processMouseUp:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._handleMouseUp_(evt);
return self}, function($ctx1) {$ctx1.fill(self,"processMouseUp:",{evt:evt},smalltalk.AthensResizeMorph)})},
args: ["evt"],
source: "processMouseUp: evt\x0a\x09self handleMouseUp: evt.",
messageSends: ["handleMouseUp:"],
referencedClasses: []
}),
smalltalk.AthensResizeMorph);



smalltalk.addClass('AthensWindowMorph', smalltalk.AthensRectangleMorph, ['title', 'titleBarMorph', 'titleTextMorph', 'resizeMorph', 'windowMoveHandler', 'windowMoveOffset', 'windowUpHandler', 'closeButton'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseClick:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._bringToFront();
smalltalk.AthensRectangleMorph.fn.prototype._handleMouseClick_.apply(_st(self), [evt]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensWindowMorph)})},
args: ["evt"],
source: "handleMouseClick: evt\x0a\x09self bringToFront.\x0a\x09super handleMouseClick: evt.",
messageSends: ["bringToFront", "handleMouseClick:"],
referencedClasses: []
}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseDown:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@windowMoveOffset"]=_st(evt)._at_("position");
self._bringToFront();
smalltalk.AthensRectangleMorph.fn.prototype._handleMouseDown_.apply(_st(self), [evt]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseDown:",{evt:evt},smalltalk.AthensWindowMorph)})},
args: ["evt"],
source: "handleMouseDown: evt\x0a\x09windowMoveOffset := evt at: #position.\x0a\x09self bringToFront.\x0a\x09super handleMouseDown: evt.",
messageSends: ["at:", "bringToFront", "handleMouseDown:"],
referencedClasses: []
}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._initialize.apply(_st(self), []);
self["@height"]=(200);
self["@width"]=self["@height"];
self["@hasSharpBorder"]=true;
self._initializeTitleBar();
self._initializeEvents();
self._initializeResizeIcon();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensWindowMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09width := height := 200.\x0a\x09hasSharpBorder := true.\x0a\x09self initializeTitleBar.\x0a\x09self initializeEvents.\x0a\x09self initializeResizeIcon.",
messageSends: ["initialize", "initializeTitleBar", "initializeEvents", "initializeResizeIcon"],
referencedClasses: []
}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEvents",
category: 'initialization',
fn: function (){
var self=this;
var mouseDownHandler;
return smalltalk.withContext(function($ctx1) { 
self["@windowMoveHandler"]=(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._windowMouseMove_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
self["@windowUpHandler"]=(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._windowMouseUp_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
mouseDownHandler=(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(self._world())._registerGlobalEvent_withCallback_("mouseMove",self["@windowMoveHandler"]);
return _st(self._world())._registerGlobalEvent_withCallback_("mouseUp",self["@windowUpHandler"]);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
_st(self["@titleBarMorph"])._onMouseDown_(mouseDownHandler);
return self}, function($ctx1) {$ctx1.fill(self,"initializeEvents",{mouseDownHandler:mouseDownHandler},smalltalk.AthensWindowMorph)})},
args: [],
source: "initializeEvents\x0a\x09|mouseDownHandler|\x0a\x09windowMoveHandler := [:evt | self windowMouseMove: evt].\x0a\x09windowUpHandler := [:evt | self windowMouseUp: evt].\x0a\x09mouseDownHandler := [:evt | \x0a\x09\x09self world registerGlobalEvent: #mouseMove withCallback: windowMoveHandler.\x0a\x09\x09self world registerGlobalEvent: #mouseUp withCallback: windowUpHandler].\x0a\x09titleBarMorph onMouseDown: mouseDownHandler.",
messageSends: ["windowMouseMove:", "windowMouseUp:", "registerGlobalEvent:withCallback:", "world", "onMouseDown:"],
referencedClasses: []
}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeResizeIcon",
category: 'initialization',
fn: function (){
var self=this;
function $AthensResizeMorph(){return smalltalk.AthensResizeMorph||(typeof AthensResizeMorph=="undefined"?nil:AthensResizeMorph)}
return smalltalk.withContext(function($ctx1) { 
self["@resizeMorph"]=_st($AthensResizeMorph())._new();
_st(self["@resizeMorph"])._translateByX_Y_(_st(self["@width"]).__minus((15)),_st(self["@height"]).__minus((15)));
self._addMorph_(self["@resizeMorph"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeResizeIcon",{},smalltalk.AthensWindowMorph)})},
args: [],
source: "initializeResizeIcon\x0a\x09resizeMorph := AthensResizeMorph new.\x0a\x09resizeMorph translateByX: width - 15 Y: height - 15.\x0a\x09self addMorph: resizeMorph.",
messageSends: ["new", "translateByX:Y:", "-", "addMorph:"],
referencedClasses: ["AthensResizeMorph"]
}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeTitleBar",
category: 'initialization',
fn: function (){
var self=this;
function $AthensRectangleMorph(){return smalltalk.AthensRectangleMorph||(typeof AthensRectangleMorph=="undefined"?nil:AthensRectangleMorph)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $AthensTextMorph(){return smalltalk.AthensTextMorph||(typeof AthensTextMorph=="undefined"?nil:AthensTextMorph)}
function $AthensIconMorph(){return smalltalk.AthensIconMorph||(typeof AthensIconMorph=="undefined"?nil:AthensIconMorph)}
return smalltalk.withContext(function($ctx1) { 
self["@title"]="Window Title";
self["@titleBarMorph"]=_st($AthensRectangleMorph())._extent_(_st(_st(self["@width"]).__minus((10))).__at((25)));
_st(self["@titleBarMorph"])._fillColor_(_st($Color())._black());
_st(self["@titleBarMorph"])._borderColor_(_st($Color())._transparent());
_st(self["@titleBarMorph"])._translateByX_Y_((5),(5));
self._addMorph_(self["@titleBarMorph"]);
self["@titleTextMorph"]=_st($AthensTextMorph())._extent_(_st(_st(self["@width"]).__minus((16))).__at((19)));
_st(self["@titleTextMorph"])._translateByX_Y_((3),(3));
_st(self["@titleTextMorph"])._fontColor_(_st($Color())._white());
_st(self["@titleTextMorph"])._text_(self["@title"]);
_st(self["@titleBarMorph"])._addMorph_(self["@titleTextMorph"]);
self["@closeButton"]=_st($AthensIconMorph())._remove();
_st(self["@closeButton"])._fontColor_(_st($Color())._white());
_st(self["@closeButton"])._highlightFontColor_(_st($Color())._gray());
_st(self["@closeButton"])._translateByX_Y_(_st(self["@width"]).__minus((25)),(2));
_st(self["@closeButton"])._onMouseClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._delete();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self["@titleBarMorph"])._addMorph_(self["@closeButton"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeTitleBar",{},smalltalk.AthensWindowMorph)})},
args: [],
source: "initializeTitleBar\x0a\x09title := 'Window Title'.\x0a\x09titleBarMorph := AthensRectangleMorph extent: width - 10 @ 25.\x0a\x09titleBarMorph fillColor: Color black.\x0a\x09titleBarMorph borderColor: Color transparent.\x0a\x09titleBarMorph translateByX: 5 Y: 5.\x0a\x09self addMorph: titleBarMorph.\x0a\x09titleTextMorph := AthensTextMorph extent: width - 16 @ 19.\x0a\x09titleTextMorph translateByX: 3 Y: 3.\x0a\x09titleTextMorph fontColor: Color white.\x0a\x09titleTextMorph text: title.\x0a\x09titleBarMorph addMorph: titleTextMorph.\x0a\x09closeButton := AthensIconMorph remove.\x0a\x09closeButton fontColor: Color white.\x0a\x09closeButton highlightFontColor: Color gray.\x0a\x09closeButton translateByX: width - 25 Y: 2.\x0a\x09closeButton onMouseClick: [self delete].\x0a\x09titleBarMorph addMorph: closeButton.",
messageSends: ["extent:", "@", "-", "fillColor:", "black", "borderColor:", "transparent", "translateByX:Y:", "addMorph:", "fontColor:", "white", "text:", "remove", "highlightFontColor:", "gray", "onMouseClick:", "delete"],
referencedClasses: ["AthensRectangleMorph", "Color", "AthensTextMorph", "AthensIconMorph"]
}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutChanged",
category: 'morph handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@submorphs"])._do_((function(morph){
return smalltalk.withContext(function($ctx2) {
return _st(morph)._layoutChanged();
}, function($ctx2) {$ctx2.fillBlock({morph:morph},$ctx1)})}));
_st(self["@titleBarMorph"])._width_(_st(self["@width"]).__minus((10)));
_st(self["@closeButton"])._resetTransformation();
_st(self["@closeButton"])._translateByX_Y_(_st(self["@width"]).__minus((25)),(2));
_st(self["@resizeMorph"])._resetTransformation();
_st(self["@resizeMorph"])._translateByX_Y_(_st(self["@width"]).__minus((15)),_st(self["@height"]).__minus((15)));
return self}, function($ctx1) {$ctx1.fill(self,"layoutChanged",{},smalltalk.AthensWindowMorph)})},
args: [],
source: "layoutChanged\x0a\x09submorphs do: [:morph | morph layoutChanged].\x0a\x09titleBarMorph width: width - 10.\x0a\x09closeButton resetTransformation.\x0a\x09closeButton translateByX: width - 25 Y: 2.\x0a\x09resizeMorph resetTransformation.\x0a\x09resizeMorph translateByX: width - 15 Y: height - 15.",
messageSends: ["do:", "layoutChanged", "width:", "-", "resetTransformation", "translateByX:Y:"],
referencedClasses: []
}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@title"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.AthensWindowMorph)})},
args: [],
source: "title\x0a\x09^ title",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "title:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@title"]=aString;
_st(self["@titleTextMorph"])._text_(aString);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString},smalltalk.AthensWindowMorph)})},
args: ["aString"],
source: "title: aString\x0a\x09title := aString.\x0a\x09titleTextMorph text: aString.\x0a\x09self redraw.",
messageSends: ["text:", "redraw"],
referencedClasses: []
}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "windowMouseMove:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._translateBy_(_st(_st(self["@globalPathTransform"])._inverseTransform_(_st(evt)._at_("globalPosition"))).__minus(self["@windowMoveOffset"]));
return self}, function($ctx1) {$ctx1.fill(self,"windowMouseMove:",{evt:evt},smalltalk.AthensWindowMorph)})},
args: ["evt"],
source: "windowMouseMove: evt\x0a\x09self translateBy: (globalPathTransform inverseTransform: (evt at: #globalPosition)) - windowMoveOffset.",
messageSends: ["translateBy:", "-", "inverseTransform:", "at:"],
referencedClasses: []
}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "windowMouseUp:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseMove",self["@windowMoveHandler"]);
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseUp",self["@windowUpHandler"]);
return self}, function($ctx1) {$ctx1.fill(self,"windowMouseUp:",{evt:evt},smalltalk.AthensWindowMorph)})},
args: ["evt"],
source: "windowMouseUp: evt\x0a\x09self world unregisterGlobalEvent: #mouseMove withCallback: windowMoveHandler.\x0a\x09self world unregisterGlobalEvent: #mouseUp withCallback: windowUpHandler.",
messageSends: ["unregisterGlobalEvent:withCallback:", "world"],
referencedClasses: []
}),
smalltalk.AthensWindowMorph);


smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'instance creation',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._width_(_st(aPoint)._x());
_st($2)._height_(_st(aPoint)._y());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.AthensWindowMorph.klass)})},
args: ["aPoint"],
source: "extent: aPoint\x0a\x09^ self new\x0a\x09\x09width: aPoint x;\x0a\x09\x09height: aPoint y;\x0a\x09\x09yourself",
messageSends: ["width:", "x", "new", "height:", "y", "yourself"],
referencedClasses: []
}),
smalltalk.AthensWindowMorph.klass);


smalltalk.addClass('AthensWorldMorph', smalltalk.AthensMorph, ['backgroundPaint', 'surface', 'morphsUnderHand', 'halos', 'globalEventCallbacks', 'handPosition', 'worldState'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "addHalosTo:",
category: 'halos',
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMorph)._isHaloMorph();
if(! smalltalk.assert($1)){
_st(self["@halos"])._do_((function(halo){
return smalltalk.withContext(function($ctx2) {
_st(halo)._resetTransformation();
_st(halo)._translateBy_(_st(_st(_st(aMorph)._globalBounds())._origin()).__plus(_st(halo)._haloPosition()));
_st(halo)._attachedTo_(aMorph);
return _st(halo)._show();
}, function($ctx2) {$ctx2.fillBlock({halo:halo},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"addHalosTo:",{aMorph:aMorph},smalltalk.AthensWorldMorph)})},
args: ["aMorph"],
source: "addHalosTo: aMorph\x0a\x09aMorph isHaloMorph ifFalse: [\x0a\x09\x09halos do: [:halo | \x0a\x09\x09\x09halo resetTransformation.\x0a\x09\x09\x09halo translateBy: aMorph globalBounds origin + halo haloPosition.\x0a\x09\x09\x09halo attachedTo: aMorph.\x0a\x09\x09\x09halo show]].",
messageSends: ["ifFalse:", "do:", "resetTransformation", "translateBy:", "+", "haloPosition", "origin", "globalBounds", "attachedTo:", "show", "isHaloMorph"],
referencedClasses: []
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "delegateEvent:with:",
category: 'events',
fn: function (aSymbol,evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
_st(self["@morphsUnderHand"])._do_((function(morph){
return smalltalk.withContext(function($ctx2) {
$1=_st(morph).__eq_eq(_st(self["@morphsUnderHand"])._first());
if(smalltalk.assert($1)){
_st(evt)._at_put_("topMost",true);
} else {
_st(evt)._at_put_("topMost",false);
};
$2=_st(_st(_st(_st(aSymbol).__eq_eq("mouseMove")).__or(_st(aSymbol).__eq_eq("mouseClick"))).__or(_st(aSymbol).__eq_eq("mouseDown"))).__or(_st(aSymbol).__eq_eq("mouseUp"));
if(smalltalk.assert($2)){
_st(evt)._at_put_("position",_st(_st(morph)._globalPathTransform())._inverseTransform_(self["@handPosition"]));
_st(evt)._at_put_("globalPosition",self["@handPosition"]);
};
$3=_st(aSymbol).__eq_eq("mouseClick");
if(smalltalk.assert($3)){
_st(morph)._handleMouseClick_(evt);
};
$4=_st(aSymbol).__eq_eq("mouseMove");
if(smalltalk.assert($4)){
_st(morph)._handleMouseMove_(evt);
};
$5=_st(aSymbol).__eq_eq("mouseDown");
if(smalltalk.assert($5)){
_st(morph)._handleMouseDown_(evt);
};
$6=_st(aSymbol).__eq_eq("mouseUp");
if(smalltalk.assert($6)){
_st(morph)._handleMouseUp_(evt);
};
$7=_st(aSymbol).__eq_eq("mouseWheel");
if(smalltalk.assert($7)){
return _st(morph)._handleMouseWheel_(evt);
};
}, function($ctx2) {$ctx2.fillBlock({morph:morph},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"delegateEvent:with:",{aSymbol:aSymbol,evt:evt},smalltalk.AthensWorldMorph)})},
args: ["aSymbol", "evt"],
source: "delegateEvent: aSymbol with: evt\x0a\x09morphsUnderHand do: [:morph |\x0a\x09\x09morph == morphsUnderHand first\x0a\x09\x09\x09ifTrue: [evt at: #topMost put: true]\x0a\x09\x09\x09ifFalse: [evt at: #topMost put: false].\x0a\x09\x09\x09\x09\x0a\x09\x09aSymbol == #mouseMove | (aSymbol == #mouseClick) | (aSymbol == #mouseDown) | (aSymbol == #mouseUp)\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09evt at: #position put: (morph globalPathTransform inverseTransform: handPosition).\x0a\x09\x09\x09\x09evt at: #globalPosition put: handPosition].\x0a\x09\x09\x0a\x09\x09aSymbol == #mouseClick ifTrue: [morph handleMouseClick: evt].\x0a\x09\x09aSymbol == #mouseMove ifTrue: [morph handleMouseMove: evt].\x0a\x09\x09aSymbol == #mouseDown ifTrue: [morph handleMouseDown: evt].\x0a\x09\x09aSymbol == #mouseUp ifTrue: [morph handleMouseUp: evt].\x0a\x09\x09aSymbol == #mouseWheel ifTrue: [morph handleMouseWheel: evt]].",
messageSends: ["do:", "ifTrue:ifFalse:", "at:put:", "==", "first", "ifTrue:", "inverseTransform:", "globalPathTransform", "|", "handleMouseClick:", "handleMouseMove:", "handleMouseDown:", "handleMouseUp:", "handleMouseWheel:"],
referencedClasses: []
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(_st(canvas)._setPaint_(self["@backgroundPaint"]))._repeat();
_st(canvas)._drawShape_(_st((0).__at((0)))._corner_(_st(self["@surface"])._extent()));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.AthensWorldMorph)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09surface clear: Color gray.\x0a\x09\x0a\x09(canvas setPaint: backgroundPaint) repeat.\x0a\x09canvas drawShape: (0@0 corner: surface extent).",
messageSends: ["clear:", "gray", "repeat", "setPaint:", "drawShape:", "corner:", "extent", "@"],
referencedClasses: ["Color"]
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleEvent:with:",
category: 'events',
fn: function (aSymbol,evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@globalEventCallbacks"])._at_ifAbsent_(aSymbol,(function(){
return smalltalk.withContext(function($ctx2) {
return [];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._do_((function(handler){
return smalltalk.withContext(function($ctx2) {
return _st(handler)._value_(evt);
}, function($ctx2) {$ctx2.fillBlock({handler:handler},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"handleEvent:with:",{aSymbol:aSymbol,evt:evt},smalltalk.AthensWorldMorph)})},
args: ["aSymbol", "evt"],
source: "handleEvent: aSymbol with: evt\x0a\x09(globalEventCallbacks at: aSymbol ifAbsent: [{}])\x0a\x09\x09do: [:handler | handler value: evt].",
messageSends: ["do:", "value:", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "hideHalos",
category: 'halos',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addHalosTo_(self);
return self}, function($ctx1) {$ctx1.fill(self,"hideHalos",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "hideHalos\x0a\x09self addHalosTo: self.",
messageSends: ["addHalosTo:"],
referencedClasses: []
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $WorldState(){return smalltalk.WorldState||(typeof WorldState=="undefined"?nil:WorldState)}
return smalltalk.withContext(function($ctx1) { 
self["@worldState"]=_st($WorldState())._for_(self);
smalltalk.AthensMorph.fn.prototype._initialize.apply(_st(self), []);
self._initializeBackgroundPaint();
self._initializeHalos();
self["@morphsUnderHand"]=[self];
self["@handPosition"]=(0).__at((0));
self._initializeCallbacks();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "initialize\x0a\x09worldState := WorldState for: self.\x0a\x09super initialize.\x0a\x09self initializeBackgroundPaint.\x0a\x09self initializeHalos.\x0a\x09morphsUnderHand := {self}.\x0a\x09handPosition := 0@0.\x0a\x09self initializeCallbacks.",
messageSends: ["for:", "initialize", "initializeBackgroundPaint", "initializeHalos", "@", "initializeCallbacks"],
referencedClasses: ["WorldState"]
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeBackgroundPaint",
category: 'initialization',
fn: function (){
var self=this;
function $AthensHTMLSurface(){return smalltalk.AthensHTMLSurface||(typeof AthensHTMLSurface=="undefined"?nil:AthensHTMLSurface)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@backgroundPaint"]=_st($AthensHTMLSurface())._extent_((10).__at((10)));
_st(self["@backgroundPaint"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@backgroundPaint"])._clear();
_st(canvas)._setPaint_(_st($Color())._white());
$1=canvas;
_st($1)._drawShape_(_st((0).__at((0)))._corner_((5).__at((5))));
$2=_st($1)._drawShape_(_st((5).__at((5)))._corner_((10).__at((10))));
return $2;
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeBackgroundPaint",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "initializeBackgroundPaint\x0a\x09backgroundPaint := AthensHTMLSurface extent: 10@10.\x0a\x09\x0a\x09\x22checker board\x22\x0a\x09backgroundPaint drawDuring: [:canvas |\x0a\x09\x09backgroundPaint clear.\x0a\x09\x09canvas setPaint: Color white.\x0a\x09\x09canvas \x0a\x09\x09\x09drawShape: (0@0 corner: 5@5);\x0a\x09\x09\x09drawShape: (5@5 corner: 10@10)].",
messageSends: ["extent:", "@", "drawDuring:", "clear", "setPaint:", "white", "drawShape:", "corner:"],
referencedClasses: ["AthensHTMLSurface", "Color"]
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeCallbacks",
category: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@globalEventCallbacks"]=_st($Dictionary())._new();
self._registerGlobalEvent_withCallback_("mouseMove",(function(evt){
return smalltalk.withContext(function($ctx2) {
self["@handPosition"]=_st(evt)._at_("globalPosition");
self["@handPosition"];
return self._updateMorphsUnderHandAt_(self["@handPosition"]);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(["mouseMove","mouseDown","mouseUp","mouseClick","mouseWheel"])._do_((function(sym){
return smalltalk.withContext(function($ctx2) {
return self._registerGlobalEvent_withCallback_(sym,(function(evt){
return smalltalk.withContext(function($ctx3) {
return self._delegateEvent_with_(sym,evt);
}, function($ctx3) {$ctx3.fillBlock({evt:evt},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({sym:sym},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeCallbacks",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "initializeCallbacks\x0a\x09globalEventCallbacks := Dictionary new.\x0a\x09self registerGlobalEvent: #mouseMove withCallback: [:evt | \x0a\x09\x09handPosition := evt at: #globalPosition.\x0a\x09\x09self updateMorphsUnderHandAt: handPosition].\x0a\x09{#mouseMove. #mouseDown. #mouseUp. #mouseClick. #mouseWheel} do: [:sym |\x0a\x09\x09self registerGlobalEvent: sym withCallback: [:evt | self delegateEvent: sym with: evt]].",
messageSends: ["new", "registerGlobalEvent:withCallback:", "at:", "updateMorphsUnderHandAt:", "do:", "delegateEvent:with:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeHalos",
category: 'initialization',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $AthensCloseHaloMorph(){return smalltalk.AthensCloseHaloMorph||(typeof AthensCloseHaloMorph=="undefined"?nil:AthensCloseHaloMorph)}
function $AthensInspectHaloMorph(){return smalltalk.AthensInspectHaloMorph||(typeof AthensInspectHaloMorph=="undefined"?nil:AthensInspectHaloMorph)}
function $AthensMoveHaloMorph(){return smalltalk.AthensMoveHaloMorph||(typeof AthensMoveHaloMorph=="undefined"?nil:AthensMoveHaloMorph)}
return smalltalk.withContext(function($ctx1) { 
self["@halos"]=_st($OrderedCollection())._new();
_st(self["@halos"])._add_(_st($AthensCloseHaloMorph())._new());
_st(self["@halos"])._add_(_st($AthensInspectHaloMorph())._new());
_st(self["@halos"])._add_(_st($AthensMoveHaloMorph())._new());
_st(self["@halos"])._do_((function(halo){
return smalltalk.withContext(function($ctx2) {
return self._addMorph_(halo);
}, function($ctx2) {$ctx2.fillBlock({halo:halo},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeHalos",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "initializeHalos\x0a\x09halos := OrderedCollection new.\x0a\x09halos add: AthensCloseHaloMorph new.\x0a\x09halos add: AthensInspectHaloMorph new.\x0a\x09halos add: AthensMoveHaloMorph new.\x0a\x09halos do: [:halo | self addMorph: halo].",
messageSends: ["new", "add:", "do:", "addMorph:"],
referencedClasses: ["OrderedCollection", "AthensCloseHaloMorph", "AthensInspectHaloMorph", "AthensMoveHaloMorph"]
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isWorldMorph",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isWorldMorph",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "isWorldMorph\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "morphsAtPosition:",
category: 'morph handling',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3,$6,$7,$8;
var $early={};
try {
_st(self["@halos"])._reverseDo_((function(morph){
var ret;
return smalltalk.withContext(function($ctx2) {
$1=_st(morph)._isVisible();
if(smalltalk.assert($1)){
ret=_st(morph)._morphsAtPosition_(aPoint);
ret;
$2=ret;
if(($receiver = $2) == nil || $receiver == undefined){
return $2;
} else {
$4=ret;
_st($4)._add_(self);
$5=_st($4)._yourself();
$3=$5;
throw $early=[$3];
};
};
}, function($ctx2) {$ctx2.fillBlock({morph:morph,ret:ret},$ctx1)})}));
$6=smalltalk.AthensMorph.fn.prototype._morphsAtPosition_.apply(_st(self), [aPoint]);
if(($receiver = $6) == nil || $receiver == undefined){
$6;
} else {
var m;
m=$receiver;
$7=m;
return $7;
};
$8=[self];
return $8;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"morphsAtPosition:",{aPoint:aPoint},smalltalk.AthensWorldMorph)})},
args: ["aPoint"],
source: "morphsAtPosition: aPoint\x0a\x09halos reverseDo: [:morph | |ret|\x0a\x09\x09morph isVisible ifTrue: [\x0a\x09\x09\x09ret := morph morphsAtPosition: aPoint.\x0a\x09\x09\x09ret ifNotNil: [^ ret\x0a\x09\x09\x09\x09add: self;\x0a\x09\x09\x09\x09yourself]]].\x0a\x09\x0a\x09(super morphsAtPosition: aPoint) ifNotNil: [:m | ^ m].\x0a\x09^ {self}\x0a\x09",
messageSends: ["reverseDo:", "ifTrue:", "morphsAtPosition:", "ifNotNil:", "add:", "yourself", "isVisible"],
referencedClasses: []
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "privateRedraw",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
self._redrawEverythingOn_(canvas);
return self._redrawHalosOn_(canvas);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"privateRedraw",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "privateRedraw\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09self redrawEverythingOn: canvas.\x0a\x09\x09self redrawHalosOn: canvas].",
messageSends: ["drawDuring:", "redrawEverythingOn:", "redrawHalosOn:"],
referencedClasses: []
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redraw",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@worldState"])._damageWorld();
return self}, function($ctx1) {$ctx1.fill(self,"redraw",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "redraw\x0a\x09worldState damageWorld.",
messageSends: ["damageWorld"],
referencedClasses: []
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redrawHalosOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@halos"])._do_((function(halo){
return smalltalk.withContext(function($ctx2) {
return _st(halo)._redrawEverythingOn_(canvas);
}, function($ctx2) {$ctx2.fillBlock({halo:halo},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"redrawHalosOn:",{canvas:canvas},smalltalk.AthensWorldMorph)})},
args: ["canvas"],
source: "redrawHalosOn: canvas\x0a\x09halos do: [:halo | halo redrawEverythingOn: canvas].",
messageSends: ["do:", "redrawEverythingOn:"],
referencedClasses: []
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "registerGlobalEvent:withCallback:",
category: 'events',
fn: function (aSymbol,aBlock){
var self=this;
var handlers;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
handlers=_st(self["@globalEventCallbacks"])._at_ifAbsent_(aSymbol,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@globalEventCallbacks"])._at_put_(aSymbol,_st($OrderedCollection())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(handlers)._add_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"registerGlobalEvent:withCallback:",{aSymbol:aSymbol,aBlock:aBlock,handlers:handlers},smalltalk.AthensWorldMorph)})},
args: ["aSymbol", "aBlock"],
source: "registerGlobalEvent: aSymbol withCallback: aBlock\x0a\x09|handlers|\x0a\x09handlers := globalEventCallbacks at: aSymbol ifAbsent: [globalEventCallbacks at: aSymbol put: OrderedCollection new].\x0a\x09handlers add: aBlock.",
messageSends: ["at:ifAbsent:", "at:put:", "new", "add:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "surface",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@surface"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"surface",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "surface\x0a\x09^ surface",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
category: 'accessing',
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=aSurface;
self._outerShape_(_st((0).__at((0)))._corner_(_st(self["@surface"])._extent()));
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},smalltalk.AthensWorldMorph)})},
args: ["aSurface"],
source: "surface: aSurface\x0a\x09surface := aSurface.\x0a\x09self outerShape: (0@0 corner: surface extent).",
messageSends: ["outerShape:", "corner:", "extent", "@"],
referencedClasses: []
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "unregisterGlobalEvent:withCallback:",
category: 'events',
fn: function (aSymbol,aBlock){
var self=this;
var handlers;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
handlers=_st(self["@globalEventCallbacks"])._at_ifAbsent_(aSymbol,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@globalEventCallbacks"])._at_put_(aSymbol,_st($OrderedCollection())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(handlers)._remove_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"unregisterGlobalEvent:withCallback:",{aSymbol:aSymbol,aBlock:aBlock,handlers:handlers},smalltalk.AthensWorldMorph)})},
args: ["aSymbol", "aBlock"],
source: "unregisterGlobalEvent: aSymbol withCallback: aBlock\x0a\x09|handlers|\x0a\x09handlers := globalEventCallbacks at: aSymbol ifAbsent: [globalEventCallbacks at: aSymbol put: OrderedCollection new].\x0a\x09handlers remove: aBlock.",
messageSends: ["at:ifAbsent:", "at:put:", "new", "remove:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMorphsUnderHandAt:",
category: 'morph handling',
fn: function (aPoint){
var self=this;
var oldMorphs;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
oldMorphs=self["@morphsUnderHand"];
self["@morphsUnderHand"]=self._morphsAtPosition_(aPoint);
_st(oldMorphs)._do_((function(m){
return smalltalk.withContext(function($ctx2) {
$1=_st(self["@morphsUnderHand"])._includes_(m);
if(! smalltalk.assert($1)){
return _st(m)._handleMouseLeave();
};
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1)})}));
_st(self["@morphsUnderHand"])._do_((function(m){
return smalltalk.withContext(function($ctx2) {
$2=_st(oldMorphs)._includes_(m);
if(! smalltalk.assert($2)){
return _st(m)._handleMouseEnter();
};
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateMorphsUnderHandAt:",{aPoint:aPoint,oldMorphs:oldMorphs},smalltalk.AthensWorldMorph)})},
args: ["aPoint"],
source: "updateMorphsUnderHandAt: aPoint\x0a\x09|oldMorphs|\x0a\x09oldMorphs := morphsUnderHand.\x0a\x09morphsUnderHand := self morphsAtPosition: aPoint.\x0a\x09oldMorphs do: [:m |\x0a\x09\x09(morphsUnderHand includes: m) ifFalse: [m handleMouseLeave]].\x0a\x09morphsUnderHand do: [:m |\x0a\x09\x09(oldMorphs includes: m) ifFalse: [m handleMouseEnter]].",
messageSends: ["morphsAtPosition:", "do:", "ifFalse:", "handleMouseLeave", "includes:", "handleMouseEnter"],
referencedClasses: []
}),
smalltalk.AthensWorldMorph);


smalltalk.addMethod(
smalltalk.method({
selector: "forSurface:",
category: 'instance creation',
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._surface_(aSurface);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forSurface:",{aSurface:aSurface},smalltalk.AthensWorldMorph.klass)})},
args: ["aSurface"],
source: "forSurface: aSurface\x0a\x09^ self new\x0a\x09\x09surface: aSurface;\x0a\x09\x09yourself",
messageSends: ["surface:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AthensWorldMorph.klass);


smalltalk.addClass('AthensDummyWorldMorph', smalltalk.AthensWorldMorph, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "addHalosTo:",
category: 'morph handling',
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"addHalosTo:",{aMorph:aMorph},smalltalk.AthensDummyWorldMorph)})},
args: ["aMorph"],
source: "addHalosTo: aMorph",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensDummyWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
self["@globalPathTransform"]=_st($AthensAffineTransform())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensDummyWorldMorph)})},
args: [],
source: "initialize\x0a\x09globalPathTransform := AthensAffineTransform new.",
messageSends: ["new"],
referencedClasses: ["AthensAffineTransform"]
}),
smalltalk.AthensDummyWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "maxZIndex",
category: 'morph handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"maxZIndex",{},smalltalk.AthensDummyWorldMorph)})},
args: [],
source: "maxZIndex\x0a\x09^ 0",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensDummyWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redraw",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"redraw",{},smalltalk.AthensDummyWorldMorph)})},
args: [],
source: "redraw",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensDummyWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "submorphsZIndicesChanged",
category: 'morph handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"submorphsZIndicesChanged",{},smalltalk.AthensDummyWorldMorph)})},
args: [],
source: "submorphsZIndicesChanged",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensDummyWorldMorph);


smalltalk.AthensDummyWorldMorph.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "instance",
category: ' singleton',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@instance"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@instance"]=self._new();
self["@instance"];
} else {
$1;
};
$2=self["@instance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"instance",{},smalltalk.AthensDummyWorldMorph.klass)})},
args: [],
source: "instance\x0a\x09instance ifNil: [instance := self new].\x0a\x09^ instance",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.AthensDummyWorldMorph.klass);


smalltalk.addClass('AthensMorphicEvent', smalltalk.Dictionary, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'method wrapper',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_(_st(aMessage)._selector());
return $1;
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.AthensMorphicEvent)})},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09^ self at: aMessage selector",
messageSends: ["at:", "selector"],
referencedClasses: []
}),
smalltalk.AthensMorphicEvent);



smalltalk.addClass('WorldState', smalltalk.Object, ['needsRedraw', 'world'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "damageWorld",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@needsRedraw"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"damageWorld",{},smalltalk.WorldState)})},
args: [],
source: "damageWorld\x0a\x09needsRedraw := true.",
messageSends: [],
referencedClasses: []
}),
smalltalk.WorldState);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@needsRedraw"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.WorldState)})},
args: [],
source: "initialize\x0a\x09needsRedraw := false.",
messageSends: [],
referencedClasses: []
}),
smalltalk.WorldState);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeRenderLoop",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 setInterval(function() {
		if (self['@needsRedraw']) {
			self['@needsRedraw'] = false;
			self['@world']._privateRedraw();
		}
	}, 0); ;
return self}, function($ctx1) {$ctx1.fill(self,"initializeRenderLoop",{},smalltalk.WorldState)})},
args: [],
source: "initializeRenderLoop\x0a\x09< setInterval(function() {\x0a\x09\x09if (self['@needsRedraw']) {\x0a\x09\x09\x09self['@needsRedraw'] = false;\x0a\x09\x09\x09self['@world']._privateRedraw();\x0a\x09\x09}\x0a\x09}, 0); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.WorldState);

smalltalk.addMethod(
smalltalk.method({
selector: "world:",
category: 'accessing',
fn: function (aWorld){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@world"]=aWorld;
self._initializeRenderLoop();
return self}, function($ctx1) {$ctx1.fill(self,"world:",{aWorld:aWorld},smalltalk.WorldState)})},
args: ["aWorld"],
source: "world: aWorld\x0a\x09world := aWorld.\x0a\x09self initializeRenderLoop.",
messageSends: ["initializeRenderLoop"],
referencedClasses: []
}),
smalltalk.WorldState);


smalltalk.addMethod(
smalltalk.method({
selector: "for:",
category: 'instance creation',
fn: function (aWorld){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._world_(aWorld);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aWorld:aWorld},smalltalk.WorldState.klass)})},
args: ["aWorld"],
source: "for: aWorld\x0a\x09^ self new\x0a\x09\x09world: aWorld;\x0a\x09\x09yourself",
messageSends: ["world:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.WorldState.klass);



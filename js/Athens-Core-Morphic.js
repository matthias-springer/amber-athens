smalltalk.addPackage('Athens-Core-Morphic');
smalltalk.addClass('AthensMorph', smalltalk.Object, ['transformation', 'outerShape', 'outerPolygon', 'owner', 'submorphs', 'color', 'globalPathTransform', 'globalOuterPolygon', 'visible', 'eventCallbacks', 'hasMouseFocus'], 'Athens-Core-Morphic');
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
return smalltalk.withContext(function($ctx1) { 
_st(self["@owner"])._removeMorph_(self);
self["@owner"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"delete",{},smalltalk.AthensMorph)})},
args: [],
source: "delete\x0a\x09owner removeMorph: self.\x0a\x09owner := nil.",
messageSends: ["removeMorph:"],
referencedClasses: []
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
category: 'accessing',
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
category: 'accessing',
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
selector: "handleMouseClick:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseClick",(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensMorph)})},
args: ["evt"],
source: "handleMouseClick: evt\x0a\x09(eventCallbacks at: #mouseClick ifAbsent: []) value.",
messageSends: ["value", "at:ifAbsent:"],
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
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseDown",(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseDown:",{evt:evt},smalltalk.AthensMorph)})},
args: ["evt"],
source: "handleMouseDown: evt\x0a\x09(eventCallbacks at: #mouseDown ifAbsent: []) value.",
messageSends: ["value", "at:ifAbsent:"],
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
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseLeave",(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensMorph)})},
args: [],
source: "handleMouseLeave\x0a\x09hasMouseFocus := false.\x0a\x09(eventCallbacks at: #mouseLeave ifAbsent: []) value.",
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
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseUp",(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseUp:",{evt:evt},smalltalk.AthensMorph)})},
args: ["evt"],
source: "handleMouseUp: evt\x0a\x09(eventCallbacks at: #mouseUp ifAbsent: []) value.",
messageSends: ["value", "at:ifAbsent:"],
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
self["@hasMouseFocus"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensMorph)})},
args: [],
source: "initialize\x0a\x09color := Color blue.\x0a\x09owner := AthensDummyWorldMorph instance.\x0a\x09transformation := AthensAffineTransform new.\x0a\x09globalPathTransform := AthensAffineTransform new.\x0a\x09submorphs := OrderedCollection new.\x0a\x09visible := true.\x0a\x09eventCallbacks := Dictionary new.\x0a\x09hasMouseFocus := false.",
messageSends: ["blue", "instance", "new"],
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
selector: "morphAtPosition:",
category: 'events',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
var $early={};
try {
$1=_st(self["@globalOuterPolygon"])._includesPoint_(aPoint);
if(smalltalk.assert($1)){
_st(self["@submorphs"])._reverseDo_((function(morph){
return smalltalk.withContext(function($ctx2) {
$2=_st(morph)._isVisible();
if(smalltalk.assert($2)){
$3=_st(morph)._morphAtPosition_(aPoint);
if(($receiver = $3) == nil || $receiver == undefined){
return $3;
} else {
var m;
m=$receiver;
$4=m;
throw $early=[$4];
};
};
}, function($ctx2) {$ctx2.fillBlock({morph:morph},$ctx1)})}));
} else {
return nil;
};
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"morphAtPosition:",{aPoint:aPoint},smalltalk.AthensMorph)})},
args: ["aPoint"],
source: "morphAtPosition: aPoint\x0a\x09(globalOuterPolygon includesPoint: aPoint)\x0a\x09\x09ifTrue: [submorphs reverseDo: [:morph |\x0a\x09\x09\x09morph isVisible ifTrue: [\x0a\x09\x09\x09\x09(morph morphAtPosition: aPoint) ifNotNil: [:m | ^ m]]]]\x0a\x09\x09ifFalse: [^ nil].",
messageSends: ["ifTrue:ifFalse:", "reverseDo:", "ifTrue:", "ifNotNil:", "morphAtPosition:", "isVisible", "includesPoint:"],
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
selector: "outerShape:",
category: 'accessing',
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
selector: "transformation",
category: 'accessing',
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
category: 'accessing',
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



smalltalk.addClass('AthensButtonMorph', smalltalk.AthensMorph, ['text', 'extent', 'font', 'borderColor', 'highlightColor'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderColor"]=aColor;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aColor:aColor},smalltalk.AthensButtonMorph)})},
args: ["aColor"],
source: "borderColor: aColor\x0a\x09borderColor := aColor.\x0a\x09self redraw.",
messageSends: ["redraw"],
referencedClasses: []
}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
var textX,textY,shape;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
shape=_st((0).__at((0)))._corner_(self["@extent"]);
self._outerShape_(shape);
_st(canvas)._setPaint_(self["@borderColor"]);
_st(canvas)._drawShape_(shape);
$1=self["@hasMouseFocus"];
if(smalltalk.assert($1)){
_st(canvas)._setPaint_(self["@highlightColor"]);
} else {
_st(canvas)._setPaint_(self["@color"]);
};
_st(canvas)._drawShape_(_st((1).__at((1)))._corner_(_st(self["@extent"]).__minus((1).__at((1)))));
_st(canvas)._setFont_(self["@font"]);
textX=_st(_st(canvas)._measureStringWidth_(self["@text"])).__slash((2));
textY=_st(_st(_st(self["@extent"])._y()).__plus(_st(_st(self["@font"])._pointSize()).__star((0.6)))).__slash((2));
_st(_st(canvas)._pathTransform())._translateX_Y_(textX,textY);
_st(canvas)._setPaint_(_st($Color())._white());
_st(canvas)._drawString_(self["@text"]);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas,textX:textX,textY:textY,shape:shape},smalltalk.AthensButtonMorph)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09|textX textY shape|\x0a\x09shape := 0@0 corner: extent.\x0a\x09self outerShape: shape.\x0a\x09canvas setPaint: borderColor.\x0a\x09canvas drawShape: shape.\x0a\x09hasMouseFocus \x0a\x09\x09ifTrue: [canvas setPaint: highlightColor]\x0a\x09\x09ifFalse: [canvas setPaint: color].\x0a\x09canvas drawShape: (1@1 corner: extent - (1@1)).\x0a\x09canvas setFont: font.\x0a\x09textX := (canvas measureStringWidth: text) / 2.\x0a\x09textY := (extent y + (font pointSize*0.6)) / 2.\x0a\x09canvas pathTransform translateX: textX Y: textY.\x0a\x09canvas setPaint: Color white.\x0a\x09canvas drawString: text.",
messageSends: ["corner:", "@", "outerShape:", "setPaint:", "drawShape:", "ifTrue:ifFalse:", "-", "setFont:", "/", "measureStringWidth:", "+", "*", "pointSize", "y", "translateX:Y:", "pathTransform", "white", "drawString:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseEnter.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensButtonMorph)})},
args: [],
source: "handleMouseEnter\x0a\x09super handleMouseEnter.\x0a\x09self redraw.",
messageSends: ["handleMouseEnter", "redraw"],
referencedClasses: []
}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseLeave.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensButtonMorph)})},
args: [],
source: "handleMouseLeave\x0a\x09super handleMouseLeave.\x0a\x09self redraw.",
messageSends: ["handleMouseLeave", "redraw"],
referencedClasses: []
}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightColor:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@highlightColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"highlightColor:",{aColor:aColor},smalltalk.AthensButtonMorph)})},
args: ["aColor"],
source: "highlightColor: aColor\x0a\x09highlightColor := aColor.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._initialize.apply(_st(self), []);
self["@extent"]=(200).__at((25));
self["@text"]="ButtonMorph";
self["@font"]=_st($LogicalFont())._familyName_pointSize_("Arial",(15));
self["@color"]=_st($Color())._cosmoBlue();
self["@highlightColor"]=_st($Color())._cosmoMiddleBlue();
self["@borderColor"]=_st($Color())._cosmoDarkBlue();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensButtonMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09extent := 200@25.\x0a\x09text := 'ButtonMorph'.\x0a\x09font := LogicalFont familyName: 'Arial' pointSize: 15.\x0a\x09color := Color cosmoBlue.\x0a\x09highlightColor := Color cosmoMiddleBlue.\x0a\x09borderColor := Color cosmoDarkBlue.",
messageSends: ["initialize", "@", "familyName:pointSize:", "cosmoBlue", "cosmoMiddleBlue", "cosmoDarkBlue"],
referencedClasses: ["LogicalFont", "Color"]
}),
smalltalk.AthensButtonMorph);



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



smalltalk.addClass('AthensRadioButtonMorph', smalltalk.AthensMorph, ['text', 'textMorph', 'isChecked'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "checked:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isChecked"]=aBoolean;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"checked:",{aBoolean:aBoolean},smalltalk.AthensRadioButtonMorph)})},
args: ["aBoolean"],
source: "checked: aBoolean\x0a\x09isChecked := aBoolean.\x0a\x09self redraw.",
messageSends: ["redraw"],
referencedClasses: []
}),
smalltalk.AthensRadioButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
var circle;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
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
_st(canvas)._draw();
_st(_st(canvas)._pathTransform())._translateBy_((0).__at((0.5)));
circle=_st(canvas)._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$3=builder;
_st($3)._absolute();
_st($3)._moveTo_((1).__at((4)));
_st($3)._cwArcTo_angle_((9).__at((4)),(180));
$4=_st($3)._cwArcTo_angle_((1).__at((4)),(90));
return $4;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(canvas)._setShape_(circle);
$5=self["@hasMouseFocus"];
if(smalltalk.assert($5)){
_st(canvas)._setPaint_(_st($Color())._cosmoLightGray());
} else {
_st(canvas)._setPaint_(_st($Color())._white());
};
_st(canvas)._draw();
$6=self["@isChecked"];
if(smalltalk.assert($6)){
_st(_st(canvas)._pathTransform())._translateBy_((0).__at((0.5)));
circle=_st(canvas)._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$7=builder;
_st($7)._absolute();
_st($7)._moveTo_((2).__at((3)));
_st($7)._cwArcTo_angle_((8).__at((3)),(180));
$8=_st($7)._cwArcTo_angle_((2).__at((3)),(90));
return $8;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
circle;
_st(canvas)._setShape_(circle);
_st(canvas)._setPaint_(_st($Color())._black());
_st(canvas)._draw();
};
self._outerShape_(_st((0).__at((0)))._corner_(_st((15).__plus(_st(self["@textMorph"])._width())).__at((15))));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas,circle:circle},smalltalk.AthensRadioButtonMorph)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09|circle|\x0a\x09canvas pathTransform translateBy: 0@3.\x0a\x09circle := canvas createPath: [:builder | \x0a\x09\x09builder \x0a\x09\x09\x09absolute;\x0a\x09\x09\x09moveTo: 0@5;\x0a\x09\x09\x09cwArcTo: 10@5 angle: 180;\x0a\x09\x09\x09cwArcTo: 0@5 angle: 90 ] .\x0a\x09canvas setShape: circle.\x0a\x09canvas setPaint: Color cosmoGray.\x0a\x09canvas draw.\x0a\x0a\x09canvas pathTransform translateBy: 0@0.5.\x0a\x09circle := canvas createPath: [:builder | \x0a\x09\x09builder \x0a\x09\x09\x09absolute;\x0a\x09\x09\x09moveTo: 1@4;\x0a\x09\x09\x09cwArcTo: 9@4 angle: 180;\x0a\x09\x09\x09cwArcTo: 1@4 angle: 90 ] .\x0a\x09canvas setShape: circle.\x0a\x09hasMouseFocus\x0a\x09\x09ifTrue: [canvas setPaint: Color cosmoLightGray]\x0a\x09\x09ifFalse: [canvas setPaint: Color white].\x0a\x09canvas draw.\x0a\x0a\x09isChecked ifTrue: [\x0a\x09\x09canvas pathTransform translateBy: 0@0.5.\x0a\x09\x09circle := canvas createPath: [:builder | \x0a\x09\x09\x09builder \x0a\x09\x09\x09\x09absolute;\x0a\x09\x09\x09\x09moveTo: 2@3;\x0a\x09\x09\x09\x09cwArcTo: 8@3 angle: 180;\x0a\x09\x09\x09\x09cwArcTo: 2@3 angle: 90 ] .\x0a\x09\x09canvas setShape: circle.\x0a\x09\x09canvas setPaint: Color black.\x0a\x09\x09canvas draw].\x0a\x0a\x09self outerShape: (0@0 corner: 15 + textMorph width @15).\x09",
messageSends: ["translateBy:", "@", "pathTransform", "createPath:", "absolute", "moveTo:", "cwArcTo:angle:", "setShape:", "setPaint:", "cosmoGray", "draw", "ifTrue:ifFalse:", "cosmoLightGray", "white", "ifTrue:", "black", "outerShape:", "corner:", "+", "width"],
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
self._checked_(_st(self["@isChecked"])._not());
smalltalk.AthensMorph.fn.prototype._handleMouseClick_.apply(_st(self), [evt]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensRadioButtonMorph)})},
args: ["evt"],
source: "handleMouseClick: evt\x0a\x09self checked: isChecked not.\x0a\x09super handleMouseClick: evt.",
messageSends: ["checked:", "not", "handleMouseClick:"],
referencedClasses: []
}),
smalltalk.AthensRadioButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseEnter.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensRadioButtonMorph)})},
args: [],
source: "handleMouseEnter\x0a\x09super handleMouseEnter.\x0a\x09self redraw.",
messageSends: ["handleMouseEnter", "redraw"],
referencedClasses: []
}),
smalltalk.AthensRadioButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseLeave.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensRadioButtonMorph)})},
args: [],
source: "handleMouseLeave\x0a\x09super handleMouseLeave.\x0a\x09self redraw.",
messageSends: ["handleMouseLeave", "redraw"],
referencedClasses: []
}),
smalltalk.AthensRadioButtonMorph);

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
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensRadioButtonMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self initializeText.\x0a\x09isChecked := false.",
messageSends: ["initialize", "initializeText"],
referencedClasses: []
}),
smalltalk.AthensRadioButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeText",
category: 'initialization',
fn: function (){
var self=this;
function $AthensTextMorph(){return smalltalk.AthensTextMorph||(typeof AthensTextMorph=="undefined"?nil:AthensTextMorph)}
return smalltalk.withContext(function($ctx1) { 
self["@textMorph"]=_st($AthensTextMorph())._new();
_st(self["@textMorph"])._translateByX_Y_((15),(-5));
_st(self["@textMorph"])._text_("RadioButtonMorph");
self._addMorph_(self["@textMorph"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeText",{},smalltalk.AthensRadioButtonMorph)})},
args: [],
source: "initializeText\x0a\x09textMorph := AthensTextMorph new.\x0a\x09textMorph translateByX: 15 Y: -5.\x0a\x09textMorph text: 'RadioButtonMorph'.\x0a\x09self addMorph: textMorph.",
messageSends: ["new", "translateByX:Y:", "text:", "addMorph:"],
referencedClasses: ["AthensTextMorph"]
}),
smalltalk.AthensRadioButtonMorph);

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
}, function($ctx1) {$ctx1.fill(self,"isChecked",{},smalltalk.AthensRadioButtonMorph)})},
args: [],
source: "isChecked\x0a\x09^ isChecked",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensRadioButtonMorph);



smalltalk.addClass('AthensRectangleMorph', smalltalk.AthensMorph, ['width', 'height', 'borderColor', 'fillColor'], 'Athens-Core-Morphic');
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
var shape;
return smalltalk.withContext(function($ctx1) { 
shape=_st((0).__at((0)))._corner_(_st(self["@width"]).__at(self["@height"]));
_st(canvas)._setPaint_(self["@fillColor"]);
_st(canvas)._drawShape_(shape);
_st(canvas)._setStrokePaint_(self["@borderColor"]);
_st(canvas)._drawShape_(shape);
self._outerShape_(shape);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas,shape:shape},smalltalk.AthensRectangleMorph)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09|shape|\x0a\x09shape := 0@0 corner: width@height.\x0a\x09canvas setPaint: fillColor.\x0a\x09canvas drawShape: shape.\x0a\x09canvas setStrokePaint: borderColor.\x0a\x09canvas drawShape: shape.\x0a\x09self outerShape: shape.",
messageSends: ["corner:", "@", "setPaint:", "drawShape:", "setStrokePaint:", "outerShape:"],
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
self["@fillColor"]=aColor;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"fillColor:",{aColor:aColor},smalltalk.AthensRectangleMorph)})},
args: ["aColor"],
source: "fillColor: aColor\x0a\x09fillColor := aColor.\x0a\x09self redraw.",
messageSends: ["redraw"],
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
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumber:aNumber},smalltalk.AthensRectangleMorph)})},
args: ["aNumber"],
source: "height: aNumber\x0a\x09height := aNumber.\x0a\x09self redraw.",
messageSends: ["redraw"],
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
self["@fillColor"]=_st($Color())._white();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensRectangleMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09width := height := 50.\x0a\x09borderColor := Color black.\x0a\x09fillColor := Color white.",
messageSends: ["initialize", "black", "white"],
referencedClasses: ["Color"]
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
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},smalltalk.AthensRectangleMorph)})},
args: ["aNumber"],
source: "width: aNumber\x0a\x09width := aNumber.\x0a\x09self redraw.",
messageSends: ["redraw"],
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


smalltalk.addClass('AthensTextMorph', smalltalk.AthensRectangleMorph, ['text', 'font', 'fontColor', 'highlightFontColor'], 'Athens-Core-Morphic');
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
self._outerShape_(_st((0).__at((0)))._corner_(_st(self["@width"]).__at((15))));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.AthensTextMorph)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09super drawOn: canvas.\x0a\x09canvas setFont: font.\x0a\x09hasMouseFocus \x0a\x09\x09ifTrue: [canvas setPaint: highlightFontColor]\x0a\x09\x09ifFalse: [canvas setPaint: fontColor].\x0a\x09canvas pathTransform translateX: 0 Y: 15.\x0a\x09canvas drawString: text.\x0a\x09\x0a\x09width := canvas measureStringWidth: text.\x0a\x09self outerShape: (0@0 corner: width@15).",
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
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"font:",{aFont:aFont},smalltalk.AthensTextMorph)})},
args: ["aFont"],
source: "font: aFont\x0a\x09font := aFont.\x0a\x09self redraw.",
messageSends: ["redraw"],
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
self["@fillColor"]=_st($Color())._transparent();
self["@borderColor"]=self["@fillColor"];
self["@text"]="a TextMorph";
self["@font"]=_st($LogicalFont())._familyName_pointSize_("Verdana",(15));
self["@highlightFontColor"]=_st($Color())._black();
self["@fontColor"]=self["@highlightFontColor"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensTextMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09borderColor := fillColor := Color transparent.\x0a\x09text := 'a TextMorph'.\x0a\x09font := LogicalFont familyName: 'Verdana' pointSize: 15.\x0a\x09fontColor := highlightFontColor := Color black.",
messageSends: ["initialize", "transparent", "familyName:pointSize:", "black"],
referencedClasses: ["Color", "LogicalFont"]
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
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.AthensTextMorph)})},
args: ["aString"],
source: "text: aString\x0a\x09text := aString.\x0a\x09self redraw.",
messageSends: ["redraw"],
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
self["@font"]=_st($LogicalFont())._familyName_pointSize_("FontAwesome",_st(aNumber)._asString());
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"size:",{aNumber:aNumber},smalltalk.AthensIconMorph)})},
args: ["aNumber"],
source: "size: aNumber\x0a\x09font := LogicalFont familyName: 'FontAwesome' pointSize: aNumber asString.\x0a\x09self redraw.",
messageSends: ["familyName:pointSize:", "asString", "redraw"],
referencedClasses: ["LogicalFont"]
}),
smalltalk.AthensIconMorph);


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


smalltalk.addClass('AthensWindowMorph', smalltalk.AthensMorph, ['width', 'height', 'title', 'font', 'titleBarMorph', 'titleTextMorph', 'windowMoveHandler', 'windowUpHandler'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
var shape;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
shape=_st((0).__at((0)))._corner_(_st(self["@width"]).__at(self["@height"]));
_st(canvas)._setPaint_(_st($Color())._white());
_st(canvas)._drawShape_(shape);
_st(canvas)._setStrokePaint_(_st($Color())._black());
_st(canvas)._drawShape_(shape);
self._outerShape_(shape);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas,shape:shape},smalltalk.AthensWindowMorph)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09|shape|\x0a\x09shape := 0@0 corner: width@height.\x0a\x09canvas setPaint: Color white.\x0a\x09canvas drawShape: shape.\x0a\x09canvas setStrokePaint: Color black.\x0a\x09canvas drawShape: shape.\x0a\x09self outerShape: shape.\x0a\x09",
messageSends: ["corner:", "@", "setPaint:", "white", "drawShape:", "setStrokePaint:", "black", "outerShape:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@height"]=aNumber;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumber:aNumber},smalltalk.AthensWindowMorph)})},
args: ["aNumber"],
source: "height: aNumber\x0a\x09height := aNumber.\x0a\x09self redraw.",
messageSends: ["redraw"],
referencedClasses: []
}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._initialize.apply(_st(self), []);
self["@height"]=(200);
self["@width"]=self["@height"];
self._initializeTitleBar();
self._initializeEvents();
self["@font"]=_st($LogicalFont())._familyName_pointSize_("Arial","14");
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensWindowMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09width := height := 200.\x0a\x09self initializeTitleBar.\x0a\x09self initializeEvents.\x0a\x09font := LogicalFont familyName: 'Arial' pointSize: '14'.",
messageSends: ["initialize", "initializeTitleBar", "initializeEvents", "familyName:pointSize:"],
referencedClasses: ["LogicalFont"]
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
_st(self["@titleTextMorph"])._onMouseDown_(mouseDownHandler);
return self}, function($ctx1) {$ctx1.fill(self,"initializeEvents",{mouseDownHandler:mouseDownHandler},smalltalk.AthensWindowMorph)})},
args: [],
source: "initializeEvents\x0a\x09|mouseDownHandler|\x0a\x09windowMoveHandler := [:evt | self windowMouseMove: evt].\x0a\x09windowUpHandler := [:evt | self windowMouseUp: evt].\x0a\x09mouseDownHandler := [:evt | \x09\x0a\x09\x09self world registerGlobalEvent: #mouseMove withCallback: windowMoveHandler.\x0a\x09\x09self world registerGlobalEvent: #mouseUp withCallback: windowUpHandler].\x0a\x09titleBarMorph onMouseDown: mouseDownHandler.\x0a\x09titleTextMorph onMouseDown: mouseDownHandler.",
messageSends: ["windowMouseMove:", "windowMouseUp:", "registerGlobalEvent:withCallback:", "world", "onMouseDown:"],
referencedClasses: []
}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeTitleBar",
category: 'initialization',
fn: function (){
var self=this;
var closeButton;
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
closeButton=_st($AthensIconMorph())._remove();
_st(closeButton)._fontColor_(_st($Color())._white());
_st(closeButton)._highlightFontColor_(_st($Color())._gray());
_st(closeButton)._translateByX_Y_(_st(self["@width"]).__minus((25)),(2));
_st(closeButton)._onMouseClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._delete();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self["@titleBarMorph"])._addMorph_(closeButton);
return self}, function($ctx1) {$ctx1.fill(self,"initializeTitleBar",{closeButton:closeButton},smalltalk.AthensWindowMorph)})},
args: [],
source: "initializeTitleBar\x0a\x09|closeButton|\x0a\x09title := 'Window Title'.\x0a\x09titleBarMorph := AthensRectangleMorph extent: width - 10 @ 25.\x0a\x09titleBarMorph fillColor: Color black.\x0a\x09titleBarMorph borderColor: Color transparent.\x0a\x09titleBarMorph translateByX: 5 Y: 5.\x0a\x09self addMorph: titleBarMorph.\x0a\x09titleTextMorph := AthensTextMorph extent: width - 16 @ 19.\x0a\x09titleTextMorph translateByX: 3 Y: 3.\x0a\x09titleTextMorph fontColor: Color white.\x0a\x09titleTextMorph text: title.\x0a\x09titleBarMorph addMorph: titleTextMorph.\x0a\x09closeButton := AthensIconMorph remove.\x0a\x09closeButton fontColor: Color white.\x0a\x09closeButton highlightFontColor: Color gray.\x0a\x09closeButton translateByX: width - 25 Y: 2.\x0a\x09closeButton onMouseClick: [self delete].\x0a\x09titleBarMorph addMorph: closeButton.",
messageSends: ["extent:", "@", "-", "fillColor:", "black", "borderColor:", "transparent", "translateByX:Y:", "addMorph:", "fontColor:", "white", "text:", "remove", "highlightFontColor:", "gray", "onMouseClick:", "delete"],
referencedClasses: ["AthensRectangleMorph", "Color", "AthensTextMorph", "AthensIconMorph"]
}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redraw",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@titleBarMorph"])._width_(_st(self["@width"]).__minus((10)));
smalltalk.AthensMorph.fn.prototype._redraw.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"redraw",{},smalltalk.AthensWindowMorph)})},
args: [],
source: "redraw\x0a\x09titleBarMorph width: width - 10.\x0a\x09super redraw.",
messageSends: ["width:", "-", "redraw"],
referencedClasses: []
}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=aNumber;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},smalltalk.AthensWindowMorph)})},
args: ["aNumber"],
source: "width: aNumber\x0a\x09width := aNumber.\x0a\x09self redraw.",
messageSends: ["redraw"],
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
self._translateBy_(_st(self["@globalPathTransform"])._inverseTransform_(_st(_st(evt)._offsetX()).__at(_st(evt)._offsetY())));
return self}, function($ctx1) {$ctx1.fill(self,"windowMouseMove:",{evt:evt},smalltalk.AthensWindowMorph)})},
args: ["evt"],
source: "windowMouseMove: evt\x0a\x09self translateBy: (globalPathTransform inverseTransform: evt offsetX @ evt offsetY).",
messageSends: ["translateBy:", "inverseTransform:", "@", "offsetY", "offsetX"],
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
selector: "windowUpHandler:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseMove",self["@windowMoveHandler"]);
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseUp",self["@windowUpHandler"]);
return self}, function($ctx1) {$ctx1.fill(self,"windowUpHandler:",{evt:evt},smalltalk.AthensWindowMorph)})},
args: ["evt"],
source: "windowUpHandler: evt\x0a\x09self world unregisterGlobalEvent: #mouseMove withCallback: windowMoveHandler.\x0a\x09self world unregisterGlobalEvent: #mouseUp withCallback: windowUpHandler.",
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


smalltalk.addClass('AthensWorldMorph', smalltalk.AthensMorph, ['backgroundPaint', 'surface', 'morphBelowHand', 'halos', 'globalEventCallbacks'], 'Athens-Core-Morphic');
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
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._initialize.apply(_st(self), []);
self._initializeBackgroundPaint();
self._initializeHalos();
self["@morphBelowHand"]=self;
self._initializeCallbacks();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self initializeBackgroundPaint.\x0a\x09self initializeHalos.\x0a\x09morphBelowHand := self.\x0a\x09self initializeCallbacks.",
messageSends: ["initialize", "initializeBackgroundPaint", "initializeHalos", "initializeCallbacks"],
referencedClasses: []
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
return self._updateMorphBelowHandAt_(_st(_st(evt)._offsetX()).__at(_st(evt)._offsetY()));
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
self._registerGlobalEvent_withCallback_("mouseMove",(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self["@morphBelowHand"])._handleMouseMove_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
self._registerGlobalEvent_withCallback_("mouseDown",(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self["@morphBelowHand"])._handleMouseDown_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
self._registerGlobalEvent_withCallback_("mouseUp",(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self["@morphBelowHand"])._handleMouseUp_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
self._registerGlobalEvent_withCallback_("mouseClick",(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self["@morphBelowHand"])._handleMouseClick_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
self._registerGlobalEvent_withCallback_("mouseClick",(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._addHalosTo_(self["@morphBelowHand"]);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeCallbacks",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "initializeCallbacks\x0a\x09globalEventCallbacks := Dictionary new.\x0a\x09self registerGlobalEvent: #mouseMove withCallback: [:evt | self updateMorphBelowHandAt: evt offsetX @ evt offsetY].\x0a\x09self registerGlobalEvent: #mouseMove withCallback: [:evt | morphBelowHand handleMouseMove: evt].\x0a\x09self registerGlobalEvent: #mouseDown withCallback: [:evt | morphBelowHand handleMouseDown: evt].\x0a\x09self registerGlobalEvent: #mouseUp withCallback: [:evt | morphBelowHand handleMouseUp: evt].\x0a\x09self registerGlobalEvent: #mouseClick withCallback: [:evt | morphBelowHand handleMouseClick: evt].\x0a\x09self registerGlobalEvent: #mouseClick withCallback: [:evt | self addHalosTo: morphBelowHand].",
messageSends: ["new", "registerGlobalEvent:withCallback:", "updateMorphBelowHandAt:", "@", "offsetY", "offsetX", "handleMouseMove:", "handleMouseDown:", "handleMouseUp:", "handleMouseClick:", "addHalosTo:"],
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
selector: "morphAtPosition:",
category: 'morph handling',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
var $early={};
try {
_st(self["@halos"])._reverseDo_((function(morph){
var ret;
return smalltalk.withContext(function($ctx2) {
$1=_st(morph)._isVisible();
if(smalltalk.assert($1)){
ret=_st(morph)._morphAtPosition_(aPoint);
ret;
$2=ret;
if(($receiver = $2) == nil || $receiver == undefined){
return $2;
} else {
$3=ret;
throw $early=[$3];
};
};
}, function($ctx2) {$ctx2.fillBlock({morph:morph,ret:ret},$ctx1)})}));
$4=smalltalk.AthensMorph.fn.prototype._morphAtPosition_.apply(_st(self), [aPoint]);
if(($receiver = $4) == nil || $receiver == undefined){
$4;
} else {
var m;
m=$receiver;
$5=m;
return $5;
};
$6=self;
return $6;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"morphAtPosition:",{aPoint:aPoint},smalltalk.AthensWorldMorph)})},
args: ["aPoint"],
source: "morphAtPosition: aPoint\x0a\x09halos reverseDo: [:morph | |ret|\x0a\x09\x09morph isVisible ifTrue: [\x0a\x09\x09\x09ret := morph morphAtPosition: aPoint.\x0a\x09\x09\x09ret ifNotNil: [^ ret]]].\x0a\x09\x0a\x09(super morphAtPosition: aPoint) ifNotNil: [:m | ^ m].\x0a\x09^ self\x0a\x09",
messageSends: ["reverseDo:", "ifTrue:", "morphAtPosition:", "ifNotNil:", "isVisible"],
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
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
self._redrawEverythingOn_(canvas);
return self._redrawHalosOn_(canvas);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"redraw",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "redraw\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09self redrawEverythingOn: canvas.\x0a\x09\x09self redrawHalosOn: canvas].",
messageSends: ["drawDuring:", "redrawEverythingOn:", "redrawHalosOn:"],
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
selector: "updateMorphBelowHandAt:",
category: 'morph handling',
fn: function (aPoint){
var self=this;
var oldMorph;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
oldMorph=self["@morphBelowHand"];
self["@morphBelowHand"]=self._morphAtPosition_(aPoint);
$1=_st(self["@morphBelowHand"]).__tild_tild(oldMorph);
if(smalltalk.assert($1)){
$2=oldMorph;
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st(oldMorph)._handleMouseLeave();
};
_st(self["@morphBelowHand"])._handleMouseEnter();
};
return self}, function($ctx1) {$ctx1.fill(self,"updateMorphBelowHandAt:",{aPoint:aPoint,oldMorph:oldMorph},smalltalk.AthensWorldMorph)})},
args: ["aPoint"],
source: "updateMorphBelowHandAt: aPoint\x0a\x09|oldMorph|\x0a\x09oldMorph := morphBelowHand.\x0a\x09morphBelowHand := self morphAtPosition: aPoint.\x0a\x09morphBelowHand ~~ oldMorph ifTrue: [\x0a\x09\x09oldMorph ifNotNil: [oldMorph handleMouseLeave].\x0a\x09\x09morphBelowHand handleMouseEnter].",
messageSends: ["morphAtPosition:", "ifTrue:", "ifNotNil:", "handleMouseLeave", "handleMouseEnter", "~~"],
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



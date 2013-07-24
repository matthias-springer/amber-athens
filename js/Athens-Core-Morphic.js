smalltalk.addPackage('Athens-Core-Morphic');
smalltalk.addClass('AthensMorph', smalltalk.Object, ['transformation', 'outerShape', 'owner', 'submorphs', 'color', 'globalPathTransform', 'globalOuterShape', 'visible', 'eventCallbacks'], 'Athens-Core-Morphic');
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
selector: "globalOuterShape",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@globalOuterShape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"globalOuterShape",{},smalltalk.AthensMorph)})},
args: [],
source: "globalOuterShape\x0a\x09^ globalOuterShape",
messageSends: [],
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
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseEnter",(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensMorph)})},
args: [],
source: "handleMouseEnter\x0a\x09(eventCallbacks at: #mouseEnter ifAbsent: []) value.",
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
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseLeave",(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensMorph)})},
args: [],
source: "handleMouseLeave\x0a\x09(eventCallbacks at: #mouseLeave ifAbsent: []) value.",
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
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensMorph)})},
args: [],
source: "initialize\x0a\x09color := Color blue.\x0a\x09owner := AthensDummyWorldMorph instance.\x0a\x09transformation := AthensAffineTransform new.\x0a\x09globalPathTransform := AthensAffineTransform new.\x0a\x09submorphs := OrderedCollection new.\x0a\x09visible := true.\x0a\x09eventCallbacks := Dictionary new.",
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
var $1,$2,$3,$4,$5;
var $early={};
try {
_st(self["@submorphs"])._reverseDo_((function(morph){
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
$4=_st(_st(self["@globalOuterShape"])._includesPoint_(aPoint))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return self._isWorldMorph();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($4)){
$5=self;
return $5;
} else {
return nil;
};
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"morphAtPosition:",{aPoint:aPoint},smalltalk.AthensMorph)})},
args: ["aPoint"],
source: "morphAtPosition: aPoint\x0a\x09submorphs reverseDo: [:morph | |ret|\x0a\x09\x09morph isVisible ifTrue: [\x0a\x09\x09\x09ret := morph morphAtPosition: aPoint.\x0a\x09\x09\x09ret ifNotNil: [^ ret]]].\x0a\x09\x09\x0a\x09((globalOuterShape includesPoint: aPoint) or: [self isWorldMorph])\x0a\x09\x09ifTrue: [^ self]\x0a\x09\x09ifFalse: [^ nil].",
messageSends: ["reverseDo:", "ifTrue:", "morphAtPosition:", "ifNotNil:", "isVisible", "ifTrue:ifFalse:", "or:", "isWorldMorph", "includesPoint:"],
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
fn: function (shapeOrPolygon){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@outerShape"]=_st(shapeOrPolygon)._asPolygon();
self["@globalOuterShape"]=_st(self["@outerShape"])._deepCopy();
_st(self["@globalOuterShape"])._multiplyBy_(self["@globalPathTransform"]);
return self}, function($ctx1) {$ctx1.fill(self,"outerShape:",{shapeOrPolygon:shapeOrPolygon},smalltalk.AthensMorph)})},
args: ["shapeOrPolygon"],
source: "outerShape: shapeOrPolygon\x0a\x09outerShape := shapeOrPolygon asPolygon.\x0a\x09globalOuterShape := outerShape deepCopy.\x0a\x09globalOuterShape multiplyBy: globalPathTransform.",
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
var $1;
self["@globalPathTransform"]=_st($AthensAffineTransform())._new();
_st(self["@globalPathTransform"])._loadAffineTransform_(_st(self["@owner"])._globalPathTransform());
_st(self["@globalPathTransform"])._multiplyBy_(self["@transformation"]);
$1=self["@visible"];
if(smalltalk.assert($1)){
_st(_st(canvas)._pathTransform())._loadAffineTransform_(self["@globalPathTransform"]);
_st(_st(canvas)._pathTransform())._setIdentity();
_st(_st(canvas)._pathTransform())._set();
self._drawOn_(canvas);
_st(self["@submorphs"])._do_((function(morph){
return smalltalk.withContext(function($ctx2) {
return _st(morph)._redrawEverythingOn_(canvas);
}, function($ctx2) {$ctx2.fillBlock({morph:morph},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"redrawEverythingOn:",{canvas:canvas},smalltalk.AthensMorph)})},
args: ["canvas"],
source: "redrawEverythingOn: canvas\x0a\x09globalPathTransform := AthensAffineTransform new.\x0a\x09globalPathTransform loadAffineTransform: owner globalPathTransform.\x0a\x09globalPathTransform multiplyBy: transformation.\x0a\x09visible ifTrue: [\x0a\x09\x09canvas pathTransform loadAffineTransform: globalPathTransform.\x0a\x09\x09canvas pathTransform setIdentity.\x0a\x09\x09canvas pathTransform set.\x0a\x09\x09self drawOn: canvas.\x0a\x09\x09submorphs do: [:morph | morph redrawEverythingOn: canvas]].",
messageSends: ["new", "loadAffineTransform:", "globalPathTransform", "multiplyBy:", "ifTrue:", "pathTransform", "setIdentity", "set", "drawOn:", "do:", "redrawEverythingOn:"],
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



smalltalk.addClass('AthensButtonMorph', smalltalk.AthensMorph, ['text', 'extent', 'font'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
var textX,textY,shape;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
shape=_st((0).__at((0)))._corner_(self["@extent"]);
self["@outerShape"]=_st(shape)._asPolygon();
_st(canvas)._setStrokePaint_(_st($Color())._black());
_st(canvas)._drawShape_(shape);
_st(canvas)._setPaint_(_st($Color())._white());
_st(canvas)._drawShape_(shape);
_st(canvas)._setFont_(self["@font"]);
textX=_st(_st(canvas)._measureStringWidth_(self["@text"])).__slash((2));
textY=_st(_st(_st(self["@extent"])._y()).__plus(_st(_st(self["@font"])._pointSize()).__star((0.6)))).__slash((2));
_st(_st(canvas)._pathTransform())._translateX_Y_(textX,textY);
_st(canvas)._setPaint_(_st($Color())._black());
_st(canvas)._drawString_(self["@text"]);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas,textX:textX,textY:textY,shape:shape},smalltalk.AthensButtonMorph)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09|textX textY shape|\x0a\x09shape := 0@0 corner: extent.\x0a\x09outerShape := shape asPolygon.\x0a\x09canvas setStrokePaint: Color black.\x0a\x09canvas drawShape: shape.\x0a\x09canvas setPaint: Color white.\x0a\x09canvas drawShape: shape.\x0a\x09canvas setFont: font.\x0a\x09textX := (canvas measureStringWidth: text) / 2.\x0a\x09textY := (extent y + (font pointSize*0.6)) / 2.\x0a\x09canvas pathTransform translateX: textX Y: textY.\x0a\x09canvas setPaint: Color black.\x0a\x09canvas drawString: text.",
messageSends: ["corner:", "@", "asPolygon", "setStrokePaint:", "black", "drawShape:", "setPaint:", "white", "setFont:", "/", "measureStringWidth:", "+", "*", "pointSize", "y", "translateX:Y:", "pathTransform", "drawString:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._initialize.apply(_st(self), []);
self["@extent"]=(200).__at((25));
self["@text"]="ButtonMorph";
self["@font"]=_st($LogicalFont())._familyName_pointSize_("Verdana",(15));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensButtonMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09extent := 200@25.\x0a\x09text := 'ButtonMorph'.\x0a\x09font := LogicalFont familyName: 'Verdana' pointSize: 15.",
messageSends: ["initialize", "@", "familyName:pointSize:"],
referencedClasses: ["LogicalFont"]
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
self._outerShape_(_st(shape)._asPolygon());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas,shape:shape},smalltalk.AthensHaloMorph)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09|shape|\x0a\x09shape := 0@0 corner: 15@15.\x0a\x09canvas setPaint: color.\x0a\x09rectPath ifNil: [rectPath := self generatePathWith: canvas].\x0a\x09canvas drawShape: rectPath.\x0a\x09canvas setStrokePaint: Color black.\x0a\x09canvas drawShape: rectPath.\x0a\x09canvas setFont: font.\x0a\x09canvas setPaint: Color white.\x0a\x09canvas pathTransform translateX: 2 Y: 11.\x0a\x09canvas drawString: self haloText.\x0a\x09self outerShape: shape asPolygon.",
messageSends: ["corner:", "@", "setPaint:", "ifNil:", "generatePathWith:", "drawShape:", "setStrokePaint:", "black", "setFont:", "white", "translateX:Y:", "pathTransform", "drawString:", "haloText", "outerShape:", "asPolygon"],
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



smalltalk.addClass('AthensWorldMorph', smalltalk.AthensMorph, ['backgroundPaint', 'surface', 'morphBelowHand', 'halos'], 'Athens-Core-Morphic');
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
_st(halo)._translateBy_(_st(_st(_st(_st(aMorph)._globalOuterShape())._boundingBox())._origin()).__plus(_st(halo)._haloPosition()));
_st(halo)._attachedTo_(aMorph);
return _st(halo)._show();
}, function($ctx2) {$ctx2.fillBlock({halo:halo},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"addHalosTo:",{aMorph:aMorph},smalltalk.AthensWorldMorph)})},
args: ["aMorph"],
source: "addHalosTo: aMorph\x0a\x09aMorph isHaloMorph ifFalse: [\x0a\x09\x09halos do: [:halo | \x0a\x09\x09\x09halo resetTransformation.\x0a\x09\x09\x09halo translateBy: aMorph globalOuterShape boundingBox origin + halo haloPosition.\x0a\x09\x09\x09halo attachedTo: aMorph.\x0a\x09\x09\x09halo show]].",
messageSends: ["ifFalse:", "do:", "resetTransformation", "translateBy:", "+", "haloPosition", "origin", "boundingBox", "globalOuterShape", "attachedTo:", "show", "isHaloMorph"],
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
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self initializeBackgroundPaint.\x0a\x09self initializeHalos.\x0a\x09morphBelowHand := self.",
messageSends: ["initialize", "initializeBackgroundPaint", "initializeHalos"],
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
selector: "initializeHalos",
category: 'initialization',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $AthensCloseHaloMorph(){return smalltalk.AthensCloseHaloMorph||(typeof AthensCloseHaloMorph=="undefined"?nil:AthensCloseHaloMorph)}
function $AthensInspectHaloMorph(){return smalltalk.AthensInspectHaloMorph||(typeof AthensInspectHaloMorph=="undefined"?nil:AthensInspectHaloMorph)}
return smalltalk.withContext(function($ctx1) { 
self["@halos"]=_st($OrderedCollection())._new();
_st(self["@halos"])._add_(_st($AthensCloseHaloMorph())._new());
_st(self["@halos"])._add_(_st($AthensInspectHaloMorph())._new());
_st(self["@halos"])._do_((function(halo){
return smalltalk.withContext(function($ctx2) {
return self._addMorph_(halo);
}, function($ctx2) {$ctx2.fillBlock({halo:halo},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeHalos",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "initializeHalos\x0a\x09halos := OrderedCollection new.\x0a\x09halos add: AthensCloseHaloMorph new.\x0a\x09halos add: AthensInspectHaloMorph new.\x0a\x09halos do: [:halo | self addMorph: halo].",
messageSends: ["new", "add:", "do:", "addMorph:"],
referencedClasses: ["OrderedCollection", "AthensCloseHaloMorph", "AthensInspectHaloMorph"]
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
category: 'events',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
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
return $4;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"morphAtPosition:",{aPoint:aPoint},smalltalk.AthensWorldMorph)})},
args: ["aPoint"],
source: "morphAtPosition: aPoint\x0a\x09halos reverseDo: [:morph | |ret|\x0a\x09\x09morph isVisible ifTrue: [\x0a\x09\x09\x09ret := morph morphAtPosition: aPoint.\x0a\x09\x09\x09ret ifNotNil: [^ ret]]].\x0a\x09\x0a\x09^ super morphAtPosition: aPoint",
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
self._outerShape_(_st(_st((0).__at((0)))._corner_(_st(self["@surface"])._extent()))._asPolygon());
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},smalltalk.AthensWorldMorph)})},
args: ["aSurface"],
source: "surface: aSurface\x0a\x09surface := aSurface.\x0a\x09self outerShape: (0@0 corner: surface extent) asPolygon.",
messageSends: ["outerShape:", "asPolygon", "corner:", "extent", "@"],
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



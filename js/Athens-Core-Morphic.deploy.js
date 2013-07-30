smalltalk.addPackage('Athens-Core-Morphic');
smalltalk.addClass('AthensMorph', smalltalk.Object, ['transformation', 'outerShape', 'outerPolygon', 'owner', 'submorphs', 'color', 'globalPathTransform', 'globalOuterPolygon', 'visible', 'eventCallbacks', 'hasMouseFocus'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "addMorph:",
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
messageSends: ["add:", "submorphs", "owner:", "ifTrue:", "redraw", "isVisible"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColor;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.AthensMorph)})},
messageSends: ["redraw"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "delete",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@owner"])._removeMorph_(self);
self["@owner"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"delete",{},smalltalk.AthensMorph)})},
messageSends: ["removeMorph:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["createPath:", "absolute", "lineTo:", "@", "outerShape:", "setPaint:", "setShape:", "draw"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "globalBounds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@globalOuterPolygon"])._boundingBox();
return $1;
}, function($ctx1) {$ctx1.fill(self,"globalBounds",{},smalltalk.AthensMorph)})},
messageSends: ["boundingBox"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "globalPathTransform",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@globalPathTransform"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"globalPathTransform",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseClick:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseClick",(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensMorph)})},
messageSends: ["value", "at:ifAbsent:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseDown:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseDown",(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseDown:",{evt:evt},smalltalk.AthensMorph)})},
messageSends: ["value", "at:ifAbsent:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hasMouseFocus"]=true;
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseEnter",(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensMorph)})},
messageSends: ["value", "at:ifAbsent:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hasMouseFocus"]=false;
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseLeave",(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensMorph)})},
messageSends: ["value", "at:ifAbsent:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseMove:",
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
messageSends: ["value:", "at:ifAbsent:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseUp:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseUp",(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseUp:",{evt:evt},smalltalk.AthensMorph)})},
messageSends: ["value", "at:ifAbsent:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@visible"]=false;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.AthensMorph)})},
messageSends: ["redraw"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["blue", "instance", "new"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isHaloMorph",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isHaloMorph",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isVisible",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@visible"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isVisible",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isWorldMorph",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isWorldMorph",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "morphAtPosition:",
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
messageSends: ["ifTrue:ifFalse:", "reverseDo:", "ifTrue:", "ifNotNil:", "morphAtPosition:", "isVisible", "includesPoint:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseClick:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseClick",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseClick:",{aBlock:aBlock},smalltalk.AthensMorph)})},
messageSends: ["at:put:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseDown:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseDown",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseDown:",{aBlock:aBlock},smalltalk.AthensMorph)})},
messageSends: ["at:put:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseEnter:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseEnter",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseEnter:",{aBlock:aBlock},smalltalk.AthensMorph)})},
messageSends: ["at:put:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseLeave:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseLeave",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseLeave:",{aBlock:aBlock},smalltalk.AthensMorph)})},
messageSends: ["at:put:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseMove:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseMove",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseMove:",{aBlock:aBlock},smalltalk.AthensMorph)})},
messageSends: ["at:put:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseUp:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseUp",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseUp:",{aBlock:aBlock},smalltalk.AthensMorph)})},
messageSends: ["at:put:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "outerShape:",
fn: function (aShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@outerShape"]=aShape;
self["@outerPolygon"]=_st(aShape)._asPolygon();
self["@globalOuterPolygon"]=_st(self["@outerPolygon"])._deepCopy();
_st(self["@globalOuterPolygon"])._multiplyBy_(self["@globalPathTransform"]);
return self}, function($ctx1) {$ctx1.fill(self,"outerShape:",{aShape:aShape},smalltalk.AthensMorph)})},
messageSends: ["asPolygon", "deepCopy", "multiplyBy:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "owner",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@owner"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"owner",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "owner:",
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@owner"]=aMorph;
return self}, function($ctx1) {$ctx1.fill(self,"owner:",{aMorph:aMorph},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redraw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"redraw",{},smalltalk.AthensMorph)})},
messageSends: ["redraw", "world"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redrawEverythingOn:",
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
messageSends: ["new", "loadAffineTransform:", "globalPathTransform", "multiplyBy:", "ifTrue:", "restoreAfter:", "pathTransform", "setIdentity", "drawOn:", "ifNil:", "outerShape:", "corner:", "@", "clipBy:during:", "do:", "redrawEverythingOn:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMorph:",
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@submorphs"])._remove_(aMorph);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"removeMorph:",{aMorph:aMorph},smalltalk.AthensMorph)})},
messageSends: ["remove:", "redraw"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "resetTransformation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@transformation"])._loadIdentity();
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"resetTransformation",{},smalltalk.AthensMorph)})},
messageSends: ["loadIdentity", "redraw"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateBy:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@transformation"])._rotateByRadians_(aNumber);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"rotateBy:",{aNumber:aNumber},smalltalk.AthensMorph)})},
messageSends: ["rotateByRadians:", "redraw"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleByX:Y:",
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@transformation"])._scaleX_Y_(x,y);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"scaleByX:Y:",{x:x,y:y},smalltalk.AthensMorph)})},
messageSends: ["scaleX:Y:", "redraw"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@visible"]=true;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.AthensMorph)})},
messageSends: ["redraw"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "submorphs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@submorphs"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"submorphs",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "transformation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@transformation"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"transformation",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._translateByX_Y_(_st(aPoint)._x(),_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.AthensMorph)})},
messageSends: ["translateByX:Y:", "x", "y"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "translateByX:Y:",
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@transformation"])._translateX_Y_(x,y);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"translateByX:Y:",{x:x,y:y},smalltalk.AthensMorph)})},
messageSends: ["translateX:Y:", "redraw"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "world",
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
messageSends: ["whileFalse:", "owner", "isWorldMorph"]}),
smalltalk.AthensMorph);



smalltalk.addClass('AthensButtonMorph', smalltalk.AthensMorph, ['text', 'extent', 'font', 'borderColor', 'highlightColor'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderColor"]=aColor;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aColor:aColor},smalltalk.AthensButtonMorph)})},
messageSends: ["redraw"]}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["corner:", "@", "outerShape:", "setPaint:", "drawShape:", "ifTrue:ifFalse:", "-", "setFont:", "/", "measureStringWidth:", "+", "*", "pointSize", "y", "translateX:Y:", "pathTransform", "white", "drawString:"]}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseEnter.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensButtonMorph)})},
messageSends: ["handleMouseEnter", "redraw"]}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseLeave.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensButtonMorph)})},
messageSends: ["handleMouseLeave", "redraw"]}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@highlightColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"highlightColor:",{aColor:aColor},smalltalk.AthensButtonMorph)})},
messageSends: []}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "@", "familyName:pointSize:", "cosmoBlue", "cosmoMiddleBlue", "cosmoDarkBlue"]}),
smalltalk.AthensButtonMorph);



smalltalk.addClass('AthensHaloMorph', smalltalk.AthensMorph, ['attachedTo', 'font', 'rectPath'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "attachedTo:",
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@attachedTo"]=aMorph;
return self}, function($ctx1) {$ctx1.fill(self,"attachedTo:",{aMorph:aMorph},smalltalk.AthensHaloMorph)})},
messageSends: []}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["corner:", "@", "setPaint:", "ifNil:", "generatePathWith:", "drawShape:", "setStrokePaint:", "black", "setFont:", "white", "translateX:Y:", "pathTransform", "drawString:", "haloText", "outerShape:"]}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "generatePathWith:",
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
messageSends: ["createPath:", "absolute", "moveTo:", "@", "lineTo:", "curveVia:to:"]}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._color_(self._highlightColor());
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensHaloMorph)})},
messageSends: ["color:", "highlightColor"]}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._color_(self._basicColor());
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensHaloMorph)})},
messageSends: ["color:", "basicColor"]}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._initialize.apply(_st(self), []);
self["@visible"]=false;
self["@font"]=_st($LogicalFont())._familyName_pointSize_("FontAwesome","12");
self["@color"]=self._basicColor();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHaloMorph)})},
messageSends: ["initialize", "familyName:pointSize:", "basicColor"]}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isHaloMorph",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isHaloMorph",{},smalltalk.AthensHaloMorph)})},
messageSends: []}),
smalltalk.AthensHaloMorph);



smalltalk.addClass('AthensCloseHaloMorph', smalltalk.AthensHaloMorph, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "basicColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((0.6),(0.13),(0.47));
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicColor",{},smalltalk.AthensCloseHaloMorph)})},
messageSends: ["r:g:b:"]}),
smalltalk.AthensCloseHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "haloPosition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(-20).__at((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"haloPosition",{},smalltalk.AthensCloseHaloMorph)})},
messageSends: ["@"]}),
smalltalk.AthensCloseHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "haloText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"haloText",{},smalltalk.AthensCloseHaloMorph)})},
messageSends: []}),
smalltalk.AthensCloseHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseClick:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@attachedTo"])._delete();
_st(self._world())._hideHalos();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensCloseHaloMorph)})},
messageSends: ["delete", "hideHalos", "world"]}),
smalltalk.AthensCloseHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((0.2),(0),(0.14));
return $1;
}, function($ctx1) {$ctx1.fill(self,"highlightColor",{},smalltalk.AthensCloseHaloMorph)})},
messageSends: ["r:g:b:"]}),
smalltalk.AthensCloseHaloMorph);



smalltalk.addClass('AthensInspectHaloMorph', smalltalk.AthensHaloMorph, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "basicColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((0),(0.9),(0.19));
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicColor",{},smalltalk.AthensInspectHaloMorph)})},
messageSends: ["r:g:b:"]}),
smalltalk.AthensInspectHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "haloPosition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(-20).__at((20));
return $1;
}, function($ctx1) {$ctx1.fill(self,"haloPosition",{},smalltalk.AthensInspectHaloMorph)})},
messageSends: ["@"]}),
smalltalk.AthensInspectHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "haloText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"haloText",{},smalltalk.AthensInspectHaloMorph)})},
messageSends: []}),
smalltalk.AthensInspectHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseClick:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@attachedTo"])._inspect();
_st(self._world())._hideHalos();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensInspectHaloMorph)})},
messageSends: ["inspect", "hideHalos", "world"]}),
smalltalk.AthensInspectHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((0),(0.2),(0.04));
return $1;
}, function($ctx1) {$ctx1.fill(self,"highlightColor",{},smalltalk.AthensInspectHaloMorph)})},
messageSends: ["r:g:b:"]}),
smalltalk.AthensInspectHaloMorph);



smalltalk.addClass('AthensMoveHaloMorph', smalltalk.AthensHaloMorph, ['globalMoveHandler', 'globalUpHandler', 'globalDownHandler'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "basicColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((0.6),(0.13),(0.47));
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicColor",{},smalltalk.AthensMoveHaloMorph)})},
messageSends: ["r:g:b:"]}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "haloPosition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(-20).__at((40));
return $1;
}, function($ctx1) {$ctx1.fill(self,"haloPosition",{},smalltalk.AthensMoveHaloMorph)})},
messageSends: ["@"]}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "haloText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"haloText",{},smalltalk.AthensMoveHaloMorph)})},
messageSends: []}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseDown:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._registerGlobalEvent_withCallback_("mouseMove",self["@globalMoveHandler"]);
_st(self._world())._registerGlobalEvent_withCallback_("mouseUp",self["@globalUpHandler"]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseDown:",{evt:evt},smalltalk.AthensMoveHaloMorph)})},
messageSends: ["registerGlobalEvent:withCallback:", "world"]}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseUp:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseMove",self["@globalMoveHandler"]);
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseUp",self["@globalUpHandler"]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseUp:",{evt:evt},smalltalk.AthensMoveHaloMorph)})},
messageSends: ["unregisterGlobalEvent:withCallback:", "world"]}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((0),(0.2),(0.04));
return $1;
}, function($ctx1) {$ctx1.fill(self,"highlightColor",{},smalltalk.AthensMoveHaloMorph)})},
messageSends: ["r:g:b:"]}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "processMouseMove:", "processMouseUp:"]}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "processMouseMove:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@attachedTo"])._translateBy_(_st(_st(self["@attachedTo"])._globalPathTransform())._inverseTransform_(_st(_st(evt)._offsetX()).__at(_st(evt)._offsetY())));
return self}, function($ctx1) {$ctx1.fill(self,"processMouseMove:",{evt:evt},smalltalk.AthensMoveHaloMorph)})},
messageSends: ["translateBy:", "inverseTransform:", "@", "offsetY", "offsetX", "globalPathTransform"]}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "processMouseUp:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._handleMouseUp_(evt);
return self}, function($ctx1) {$ctx1.fill(self,"processMouseUp:",{evt:evt},smalltalk.AthensMoveHaloMorph)})},
messageSends: ["handleMouseUp:"]}),
smalltalk.AthensMoveHaloMorph);



smalltalk.addClass('AthensRadioButtonMorph', smalltalk.AthensMorph, ['text', 'textMorph', 'isChecked'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "checked:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isChecked"]=aBoolean;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"checked:",{aBoolean:aBoolean},smalltalk.AthensRadioButtonMorph)})},
messageSends: ["redraw"]}),
smalltalk.AthensRadioButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["translateBy:", "@", "pathTransform", "createPath:", "absolute", "moveTo:", "cwArcTo:angle:", "setShape:", "setPaint:", "cosmoGray", "draw", "ifTrue:ifFalse:", "cosmoLightGray", "white", "ifTrue:", "black", "outerShape:", "corner:", "+", "width"]}),
smalltalk.AthensRadioButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseClick:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._checked_(_st(self["@isChecked"])._not());
smalltalk.AthensMorph.fn.prototype._handleMouseClick_.apply(_st(self), [evt]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensRadioButtonMorph)})},
messageSends: ["checked:", "not", "handleMouseClick:"]}),
smalltalk.AthensRadioButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseEnter.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensRadioButtonMorph)})},
messageSends: ["handleMouseEnter", "redraw"]}),
smalltalk.AthensRadioButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseLeave.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensRadioButtonMorph)})},
messageSends: ["handleMouseLeave", "redraw"]}),
smalltalk.AthensRadioButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._initialize.apply(_st(self), []);
self._initializeText();
self["@isChecked"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensRadioButtonMorph)})},
messageSends: ["initialize", "initializeText"]}),
smalltalk.AthensRadioButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeText",
fn: function (){
var self=this;
function $AthensTextMorph(){return smalltalk.AthensTextMorph||(typeof AthensTextMorph=="undefined"?nil:AthensTextMorph)}
return smalltalk.withContext(function($ctx1) { 
self["@textMorph"]=_st($AthensTextMorph())._new();
_st(self["@textMorph"])._translateByX_Y_((15),(-5));
_st(self["@textMorph"])._text_("RadioButtonMorph");
self._addMorph_(self["@textMorph"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeText",{},smalltalk.AthensRadioButtonMorph)})},
messageSends: ["new", "translateByX:Y:", "text:", "addMorph:"]}),
smalltalk.AthensRadioButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isChecked",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isChecked"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isChecked",{},smalltalk.AthensRadioButtonMorph)})},
messageSends: []}),
smalltalk.AthensRadioButtonMorph);



smalltalk.addClass('AthensRectangleMorph', smalltalk.AthensMorph, ['width', 'height', 'borderColor', 'fillColor'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderColor"]=aColor;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aColor:aColor},smalltalk.AthensRectangleMorph)})},
messageSends: ["redraw"]}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["corner:", "@", "setPaint:", "drawShape:", "setStrokePaint:", "outerShape:"]}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "fillColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fillColor"]=aColor;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"fillColor:",{aColor:aColor},smalltalk.AthensRectangleMorph)})},
messageSends: ["redraw"]}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@height"]=aNumber;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumber:aNumber},smalltalk.AthensRectangleMorph)})},
messageSends: ["redraw"]}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "black", "white"]}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=aNumber;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},smalltalk.AthensRectangleMorph)})},
messageSends: ["redraw"]}),
smalltalk.AthensRectangleMorph);


smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
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
messageSends: ["width:", "x", "new", "height:", "y", "yourself"]}),
smalltalk.AthensRectangleMorph.klass);


smalltalk.addClass('AthensTextMorph', smalltalk.AthensRectangleMorph, ['text', 'font', 'fontColor', 'highlightFontColor'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["drawOn:", "setFont:", "ifTrue:ifFalse:", "setPaint:", "translateX:Y:", "pathTransform", "drawString:", "measureStringWidth:", "outerShape:", "corner:", "@"]}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "font:",
fn: function (aFont){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@font"]=aFont;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"font:",{aFont:aFont},smalltalk.AthensTextMorph)})},
messageSends: ["redraw"]}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "fontColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@highlightFontColor"]=aColor;
self["@fontColor"]=self["@highlightFontColor"];
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"fontColor:",{aColor:aColor},smalltalk.AthensTextMorph)})},
messageSends: ["redraw"]}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._handleMouseEnter.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensTextMorph)})},
messageSends: ["handleMouseEnter", "redraw"]}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._handleMouseLeave.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensTextMorph)})},
messageSends: ["handleMouseLeave", "redraw"]}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightFontColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@highlightFontColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"highlightFontColor:",{aColor:aColor},smalltalk.AthensTextMorph)})},
messageSends: []}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "transparent", "familyName:pointSize:", "black"]}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=aString;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.AthensTextMorph)})},
messageSends: ["redraw"]}),
smalltalk.AthensTextMorph);



smalltalk.addClass('AthensIconMorph', smalltalk.AthensTextMorph, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "font:",
fn: function (aFont){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAllowed();
return self}, function($ctx1) {$ctx1.fill(self,"font:",{aFont:aFont},smalltalk.AthensIconMorph)})},
messageSends: ["notAllowed"]}),
smalltalk.AthensIconMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensTextMorph.fn.prototype._initialize.apply(_st(self), []);
self._size_((12));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensIconMorph)})},
messageSends: ["initialize", "size:"]}),
smalltalk.AthensIconMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
fn: function (aNumber){
var self=this;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
return smalltalk.withContext(function($ctx1) { 
self["@font"]=_st($LogicalFont())._familyName_pointSize_("FontAwesome",_st(aNumber)._asString());
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"size:",{aNumber:aNumber},smalltalk.AthensIconMorph)})},
messageSends: ["familyName:pointSize:", "asString", "redraw"]}),
smalltalk.AthensIconMorph);


smalltalk.addMethod(
smalltalk.method({
selector: "remove",
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
messageSends: ["text:", "new", "yourself"]}),
smalltalk.AthensIconMorph.klass);


smalltalk.addClass('AthensWindowMorph', smalltalk.AthensMorph, ['width', 'height', 'title', 'font', 'titleBarMorph', 'titleTextMorph', 'windowMoveHandler', 'windowUpHandler'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["corner:", "@", "setPaint:", "white", "drawShape:", "setStrokePaint:", "black", "outerShape:"]}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@height"]=aNumber;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumber:aNumber},smalltalk.AthensWindowMorph)})},
messageSends: ["redraw"]}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "initializeTitleBar", "initializeEvents", "familyName:pointSize:"]}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEvents",
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
messageSends: ["windowMouseMove:", "windowMouseUp:", "registerGlobalEvent:withCallback:", "world", "onMouseDown:"]}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeTitleBar",
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
messageSends: ["extent:", "@", "-", "fillColor:", "black", "borderColor:", "transparent", "translateByX:Y:", "addMorph:", "fontColor:", "white", "text:", "remove", "highlightFontColor:", "gray", "onMouseClick:", "delete"]}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redraw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@titleBarMorph"])._width_(_st(self["@width"]).__minus((10)));
smalltalk.AthensMorph.fn.prototype._redraw.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"redraw",{},smalltalk.AthensWindowMorph)})},
messageSends: ["width:", "-", "redraw"]}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=aNumber;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},smalltalk.AthensWindowMorph)})},
messageSends: ["redraw"]}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "windowMouseMove:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._translateBy_(_st(self["@globalPathTransform"])._inverseTransform_(_st(_st(evt)._offsetX()).__at(_st(evt)._offsetY())));
return self}, function($ctx1) {$ctx1.fill(self,"windowMouseMove:",{evt:evt},smalltalk.AthensWindowMorph)})},
messageSends: ["translateBy:", "inverseTransform:", "@", "offsetY", "offsetX"]}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "windowMouseUp:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseMove",self["@windowMoveHandler"]);
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseUp",self["@windowUpHandler"]);
return self}, function($ctx1) {$ctx1.fill(self,"windowMouseUp:",{evt:evt},smalltalk.AthensWindowMorph)})},
messageSends: ["unregisterGlobalEvent:withCallback:", "world"]}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "windowUpHandler:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseMove",self["@windowMoveHandler"]);
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseUp",self["@windowUpHandler"]);
return self}, function($ctx1) {$ctx1.fill(self,"windowUpHandler:",{evt:evt},smalltalk.AthensWindowMorph)})},
messageSends: ["unregisterGlobalEvent:withCallback:", "world"]}),
smalltalk.AthensWindowMorph);


smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
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
messageSends: ["width:", "x", "new", "height:", "y", "yourself"]}),
smalltalk.AthensWindowMorph.klass);


smalltalk.addClass('AthensWorldMorph', smalltalk.AthensMorph, ['backgroundPaint', 'surface', 'morphBelowHand', 'halos', 'globalEventCallbacks'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "addHalosTo:",
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
messageSends: ["ifFalse:", "do:", "resetTransformation", "translateBy:", "+", "haloPosition", "origin", "globalBounds", "attachedTo:", "show", "isHaloMorph"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (canvas){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(_st(canvas)._setPaint_(self["@backgroundPaint"]))._repeat();
_st(canvas)._drawShape_(_st((0).__at((0)))._corner_(_st(self["@surface"])._extent()));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.AthensWorldMorph)})},
messageSends: ["clear:", "gray", "repeat", "setPaint:", "drawShape:", "corner:", "extent", "@"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleEvent:with:",
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
messageSends: ["do:", "value:", "at:ifAbsent:"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "hideHalos",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addHalosTo_(self);
return self}, function($ctx1) {$ctx1.fill(self,"hideHalos",{},smalltalk.AthensWorldMorph)})},
messageSends: ["addHalosTo:"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._initialize.apply(_st(self), []);
self._initializeBackgroundPaint();
self._initializeHalos();
self["@morphBelowHand"]=self;
self._initializeCallbacks();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensWorldMorph)})},
messageSends: ["initialize", "initializeBackgroundPaint", "initializeHalos", "initializeCallbacks"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeBackgroundPaint",
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
messageSends: ["extent:", "@", "drawDuring:", "clear", "setPaint:", "white", "drawShape:", "corner:"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeCallbacks",
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
messageSends: ["new", "registerGlobalEvent:withCallback:", "updateMorphBelowHandAt:", "@", "offsetY", "offsetX", "handleMouseMove:", "handleMouseDown:", "handleMouseUp:", "handleMouseClick:", "addHalosTo:"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeHalos",
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
messageSends: ["new", "add:", "do:", "addMorph:"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isWorldMorph",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isWorldMorph",{},smalltalk.AthensWorldMorph)})},
messageSends: []}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "morphAtPosition:",
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
messageSends: ["reverseDo:", "ifTrue:", "morphAtPosition:", "ifNotNil:", "isVisible"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redraw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
self._redrawEverythingOn_(canvas);
return self._redrawHalosOn_(canvas);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"redraw",{},smalltalk.AthensWorldMorph)})},
messageSends: ["drawDuring:", "redrawEverythingOn:", "redrawHalosOn:"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redrawHalosOn:",
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@halos"])._do_((function(halo){
return smalltalk.withContext(function($ctx2) {
return _st(halo)._redrawEverythingOn_(canvas);
}, function($ctx2) {$ctx2.fillBlock({halo:halo},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"redrawHalosOn:",{canvas:canvas},smalltalk.AthensWorldMorph)})},
messageSends: ["do:", "redrawEverythingOn:"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "registerGlobalEvent:withCallback:",
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
messageSends: ["at:ifAbsent:", "at:put:", "new", "add:"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "surface",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@surface"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"surface",{},smalltalk.AthensWorldMorph)})},
messageSends: []}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=aSurface;
self._outerShape_(_st((0).__at((0)))._corner_(_st(self["@surface"])._extent()));
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},smalltalk.AthensWorldMorph)})},
messageSends: ["outerShape:", "corner:", "extent", "@"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "unregisterGlobalEvent:withCallback:",
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
messageSends: ["at:ifAbsent:", "at:put:", "new", "remove:"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMorphBelowHandAt:",
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
messageSends: ["morphAtPosition:", "ifTrue:", "ifNotNil:", "handleMouseLeave", "handleMouseEnter", "~~"]}),
smalltalk.AthensWorldMorph);


smalltalk.addMethod(
smalltalk.method({
selector: "forSurface:",
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
messageSends: ["surface:", "new", "yourself"]}),
smalltalk.AthensWorldMorph.klass);


smalltalk.addClass('AthensDummyWorldMorph', smalltalk.AthensWorldMorph, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
self["@globalPathTransform"]=_st($AthensAffineTransform())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensDummyWorldMorph)})},
messageSends: ["new"]}),
smalltalk.AthensDummyWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redraw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"redraw",{},smalltalk.AthensDummyWorldMorph)})},
messageSends: []}),
smalltalk.AthensDummyWorldMorph);


smalltalk.AthensDummyWorldMorph.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "instance",
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
messageSends: ["ifNil:", "new"]}),
smalltalk.AthensDummyWorldMorph.klass);



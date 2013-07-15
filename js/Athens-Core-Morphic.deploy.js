smalltalk.addPackage('Athens-Core-Morphic');
smalltalk.addClass('AthensMorph', smalltalk.Object, ['transformation', 'globalTransformation', 'outerShape', 'owner', 'submorphs', 'position', 'rotation', 'scaling', 'color'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "addMorph:",
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._submorphs())._add_(aMorph);
_st(aMorph)._owner_(self);
_st(aMorph)._drawAll();
return self}, function($ctx1) {$ctx1.fill(self,"addMorph:",{aMorph:aMorph},smalltalk.AthensMorph)})},
messageSends: ["add:", "submorphs", "owner:", "drawAll"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "calculateGlobalTransformation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@globalTransformation"]=_st(_st(self["@owner"])._globalTransformation())._copy();
_st(self["@globalTransformation"])._multiplyBy_(self["@transformation"]);
return self}, function($ctx1) {$ctx1.fill(self,"calculateGlobalTransformation",{},smalltalk.AthensMorph)})},
messageSends: ["copy", "globalTransformation", "multiplyBy:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "calculateTransformation",
fn: function (){
var self=this;
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
self["@transformation"]=_st($AthensAffineTransform())._new();
_st(self["@transformation"])._translateBy_(self["@position"]);
_st(self["@transformation"])._rotateByRadians_(self["@rotation"]);
_st(self["@transformation"])._scaleBy_(self["@scaling"]);
_st(self._world())._drawAll();
return self}, function($ctx1) {$ctx1.fill(self,"calculateTransformation",{},smalltalk.AthensMorph)})},
messageSends: ["new", "translateBy:", "rotateByRadians:", "scaleBy:", "drawAll", "world"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawAll",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
return self._drawAllOn_(canvas);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawAll",{},smalltalk.AthensMorph)})},
messageSends: ["drawDuring:", "drawAllOn:", "world"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawAllOn:",
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._calculateGlobalTransformation();
_st(canvas)._implicitTransformation_(self["@globalTransformation"]);
self._drawOn_(canvas);
_st(self["@submorphs"])._do_((function(morph){
return smalltalk.withContext(function($ctx2) {
return _st(morph)._drawAllOn_(canvas);
}, function($ctx2) {$ctx2.fillBlock({morph:morph},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawAllOn:",{canvas:canvas},smalltalk.AthensMorph)})},
messageSends: ["calculateGlobalTransformation", "implicitTransformation:", "drawOn:", "do:", "drawAllOn:"]}),
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
selector: "globalTransformation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@globalTransformation"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"globalTransformation",{},smalltalk.AthensMorph)})},
messageSends: []}),
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
return smalltalk.withContext(function($ctx1) { 
self["@position"]=(0).__at((0));
self["@rotation"]=(0);
self["@scaling"]=(1).__at((1));
self["@color"]=_st($Color())._blue();
self["@owner"]=_st($AthensDummyWorldMorph())._instance();
self["@transformation"]=_st($AthensAffineTransform())._new();
self["@submorphs"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensMorph)})},
messageSends: ["@", "blue", "instance", "new"]}),
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
selector: "outerShape:",
fn: function (shapeOrPolygon){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@outerShape"]=_st(shapeOrPolygon)._asPolygon();
return self}, function($ctx1) {$ctx1.fill(self,"outerShape:",{shapeOrPolygon:shapeOrPolygon},smalltalk.AthensMorph)})},
messageSends: ["asPolygon"]}),
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
selector: "position:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPoint;
self._calculateTransformation();
return self}, function($ctx1) {$ctx1.fill(self,"position:",{aPoint:aPoint},smalltalk.AthensMorph)})},
messageSends: ["calculateTransformation"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "rotation:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rotation"]=aNumber;
self._calculateTransformation();
return self}, function($ctx1) {$ctx1.fill(self,"rotation:",{aNumber:aNumber},smalltalk.AthensMorph)})},
messageSends: ["calculateTransformation"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "scaling:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scaling"]=aPoint;
self._calculateTransformation();
return self}, function($ctx1) {$ctx1.fill(self,"scaling:",{aPoint:aPoint},smalltalk.AthensMorph)})},
messageSends: ["calculateTransformation"]}),
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
selector: "world",
fn: function (){
var self=this;
var morph;
return smalltalk.withContext(function($ctx1) { 
var $1;
morph=self;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(morph)._isWorldMorph();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
morph=_st(morph)._owner();
return morph;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=morph;
return $1;
}, function($ctx1) {$ctx1.fill(self,"world",{morph:morph},smalltalk.AthensMorph)})},
messageSends: ["whileFalse:", "owner", "isWorldMorph"]}),
smalltalk.AthensMorph);



smalltalk.addClass('AthensWorldMorph', smalltalk.AthensMorph, ['surface', 'backgroundPaint'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "calculateGlobalTransformation",
fn: function (){
var self=this;
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
self["@globalTransformation"]=_st($AthensAffineTransform())._new();
return self}, function($ctx1) {$ctx1.fill(self,"calculateGlobalTransformation",{},smalltalk.AthensWorldMorph)})},
messageSends: ["new"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawDuring:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"drawDuring:",{aBlock:aBlock},smalltalk.AthensWorldMorph)})},
messageSends: ["drawDuring:"]}),
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
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._initialize.apply(_st(self), []);
self._initializeBackgroundPaint();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensWorldMorph)})},
messageSends: ["initialize", "initializeBackgroundPaint"]}),
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
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},smalltalk.AthensWorldMorph)})},
messageSends: []}),
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
selector: "drawDuring:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"drawDuring:",{aBlock:aBlock},smalltalk.AthensDummyWorldMorph)})},
messageSends: []}),
smalltalk.AthensDummyWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensDummyWorldMorph)})},
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



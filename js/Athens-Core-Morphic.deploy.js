smalltalk.addPackage('Athens-Core-Morphic');
smalltalk.addClass('AthensMorph', smalltalk.Object, ['transformation', 'outerShape', 'owner', 'submorphs', 'color'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "addMorph:",
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._submorphs())._add_(aMorph);
_st(aMorph)._owner_(self);
_st(aMorph)._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"addMorph:",{aMorph:aMorph},smalltalk.AthensMorph)})},
messageSends: ["add:", "submorphs", "owner:", "redraw"]}),
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
selector: "createSurfacePaint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._initializeSurface();
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(canvas)._implicitTransformation_(self["@transformation"]);
_st(_st(canvas)._pathTransform())._loadIdentity();
_st(_st(canvas)._paintTransform())._loadIdentity();
self._drawOn_(canvas);
_st(_st(canvas)._pathTransform())._loadIdentity();
_st(_st(canvas)._paintTransform())._loadIdentity();
return _st(self["@submorphs"])._do_((function(morph){
return smalltalk.withContext(function($ctx3) {
_st(canvas)._setPaint_(_st(morph)._surface());
return _st(canvas)._drawShape_(_st((0).__at((0)))._corner_((500).__at((400))));
}, function($ctx3) {$ctx3.fillBlock({morph:morph},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"createSurfacePaint",{},smalltalk.AthensMorph)})},
messageSends: ["initializeSurface", "drawDuring:", "implicitTransformation:", "loadIdentity", "pathTransform", "paintTransform", "drawOn:", "do:", "setPaint:", "surface", "drawShape:", "corner:", "@"]}),
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
selector: "initialize",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $AthensDummyWorldMorph(){return smalltalk.AthensDummyWorldMorph||(typeof AthensDummyWorldMorph=="undefined"?nil:AthensDummyWorldMorph)}
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self["@color"]=_st($Color())._blue();
self["@owner"]=_st($AthensDummyWorldMorph())._instance();
self["@transformation"]=_st($AthensAffineTransform())._new();
self["@submorphs"]=_st($OrderedCollection())._new();
self._createSurfacePaint();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensMorph)})},
messageSends: ["blue", "instance", "new", "createSurfacePaint"]}),
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
selector: "translateByX:Y:",
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@transformation"])._translateX_Y_(x,y);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"translateByX:Y:",{x:x,y:y},smalltalk.AthensMorph)})},
messageSends: ["translateX:Y:", "redraw"]}),
smalltalk.AthensMorph);



smalltalk.addClass('AthensButtonMorph', smalltalk.AthensMorph, ['text', 'extent', 'font'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (canvas){
var self=this;
var textX,textY,shape;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
shape=_st((0).__at((0)))._corner_(self["@extent"]);
self["@outerShape"]=_st(shape)._asPolygon();
_st(canvas)._setStrokePaint_(_st($Color())._black());
_st(canvas)._drawShape_setPaint_(_st(shape)._canvas(),_st($Color())._white());
_st(canvas)._drawShape_(shape);
_st(canvas)._setFont_(self["@font"]);
textX=_st(_st(canvas)._measureStringWidth_(self["@text"])).__slash((2));
textY=_st(_st(_st(self["@extent"])._y()).__plus(_st(_st(self["@font"])._pointSize()).__star((0.6)))).__slash((2));
_st(_st(canvas)._pathTransform())._translateX_Y_(textX,textY);
_st(canvas)._setPaint_(_st($Color())._black());
_st(canvas)._drawString_(self["@text"]);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas,textX:textX,textY:textY,shape:shape},smalltalk.AthensButtonMorph)})},
messageSends: ["corner:", "@", "asPolygon", "setStrokePaint:", "black", "drawShape:setPaint:", "canvas", "white", "drawShape:", "setFont:", "/", "measureStringWidth:", "+", "*", "pointSize", "y", "translateX:Y:", "pathTransform", "setPaint:", "drawString:"]}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._initialize.apply(_st(self), []);
self["@extent"]=(200).__at((25));
self["@text"]="ButtonMorph";
self["@font"]=_st($LogicalFont())._familyName_pointSize_("Verdana",(15));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensButtonMorph)})},
messageSends: ["initialize", "@", "familyName:pointSize:"]}),
smalltalk.AthensButtonMorph);



smalltalk.addClass('AthensWorldMorph', smalltalk.AthensMorph, ['backgroundPaint'], 'Athens-Core-Morphic');
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
selector: "initializeSurface",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initializeSurface",{},smalltalk.AthensWorldMorph)})},
messageSends: []}),
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
$2=self._basicNew();
_st($2)._surface_(aSurface);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forSurface:",{aSurface:aSurface},smalltalk.AthensWorldMorph.klass)})},
messageSends: ["surface:", "basicNew", "initialize", "yourself"]}),
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


smalltalk.addClass('DamageRecorder', smalltalk.Object, ['invalidRects'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self["@invalidRects"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DamageRecorder)})},
messageSends: ["new"]}),
smalltalk.DamageRecorder);

smalltalk.addMethod(
smalltalk.method({
selector: "recordInvalidRect:",
fn: function (newRect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@invalidRects"])._add_(newRect);
return self}, function($ctx1) {$ctx1.fill(self,"recordInvalidRect:",{newRect:newRect},smalltalk.DamageRecorder)})},
messageSends: ["add:"]}),
smalltalk.DamageRecorder);

smalltalk.addMethod(
smalltalk.method({
selector: "updateIsNeeded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@invalidRects"])._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"updateIsNeeded",{},smalltalk.DamageRecorder)})},
messageSends: ["notEmpty"]}),
smalltalk.DamageRecorder);



smalltalk.addClass('WorldState', smalltalk.Object, ['damageRecorder'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "drawWorld",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@damageRecorder"])._updateIsNeeded();
if(smalltalk.assert($1)){
};
return self}, function($ctx1) {$ctx1.fill(self,"drawWorld",{},smalltalk.WorldState)})},
messageSends: ["ifTrue:", "updateIsNeeded"]}),
smalltalk.WorldState);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $DamageRecorder(){return smalltalk.DamageRecorder||(typeof DamageRecorder=="undefined"?nil:DamageRecorder)}
return smalltalk.withContext(function($ctx1) { 
self["@damageRecorder"]=_st($DamageRecorder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.WorldState)})},
messageSends: ["new"]}),
smalltalk.WorldState);

smalltalk.addMethod(
smalltalk.method({
selector: "startDrawLoop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 function drawWorldLoop() {
		self._drawWorld();
		requestAnimationFrame(drawWorldLoop);
	}
	drawWorldLoop();;
return self}, function($ctx1) {$ctx1.fill(self,"startDrawLoop",{},smalltalk.WorldState)})},
messageSends: []}),
smalltalk.WorldState);




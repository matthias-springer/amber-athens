smalltalk.addPackage('Athens-Core-Morphic');
smalltalk.addClass('AthensMorph', smalltalk.Object, ['transformation', 'outerShape', 'owner', 'submorphs', 'color', 'globalPathTransform', 'globalOuterShape'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "addMorph:",
category: 'morph handling',
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._submorphs())._add_(aMorph);
_st(aMorph)._owner_(self);
_st(aMorph)._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"addMorph:",{aMorph:aMorph},smalltalk.AthensMorph)})},
args: ["aMorph"],
source: "addMorph: aMorph\x0a\x09self submorphs add: aMorph.\x0a\x09aMorph owner: self.\x0a\x09aMorph redraw.",
messageSends: ["add:", "submorphs", "owner:", "redraw"],
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
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self._color_(_st($Color())._green());
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensMorph)})},
args: ["evt"],
source: "handleMouseClick: evt\x0a\x09self color: Color green.",
messageSends: ["color:", "green"],
referencedClasses: ["Color"]
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseDown:",
category: 'events',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseDown:",{evt:evt},smalltalk.AthensMorph)})},
args: ["evt"],
source: "handleMouseDown: evt",
messageSends: [],
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
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseMove:",{evt:evt},smalltalk.AthensMorph)})},
args: ["evt"],
source: "handleMouseMove: evt",
messageSends: [],
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
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseUp:",{evt:evt},smalltalk.AthensMorph)})},
args: ["evt"],
source: "handleMouseUp: evt",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { 
self["@color"]=_st($Color())._blue();
self["@owner"]=_st($AthensDummyWorldMorph())._instance();
self["@transformation"]=_st($AthensAffineTransform())._new();
self["@globalPathTransform"]=_st($AthensAffineTransform())._new();
self["@submorphs"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensMorph)})},
args: [],
source: "initialize\x0a\x09color := Color blue.\x0a\x09owner := AthensDummyWorldMorph instance.\x0a\x09transformation := AthensAffineTransform new.\x0a\x09globalPathTransform := AthensAffineTransform new.\x0a\x09submorphs := OrderedCollection new.",
messageSends: ["blue", "instance", "new"],
referencedClasses: ["Color", "AthensDummyWorldMorph", "AthensAffineTransform", "OrderedCollection"]
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
_st(self["@submorphs"])._reverseDo_((function(morph){
var ret;
return smalltalk.withContext(function($ctx2) {
ret=_st(morph)._morphAtPosition_(aPoint);
ret;
$1=ret;
if(($receiver = $1) == nil || $receiver == undefined){
return $1;
} else {
$2=ret;
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({morph:morph,ret:ret},$ctx1)})}));
$3=_st(_st(self["@globalOuterShape"])._includesPoint_(aPoint))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return self._isWorldMorph();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
$4=self;
return $4;
} else {
return nil;
};
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"morphAtPosition:",{aPoint:aPoint},smalltalk.AthensMorph)})},
args: ["aPoint"],
source: "morphAtPosition: aPoint\x0a\x09submorphs reverseDo: [:morph | |ret|\x0a\x09\x09ret := morph morphAtPosition: aPoint.\x0a\x09\x09ret ifNotNil: [^ ret]].\x0a\x09\x09\x0a\x09((globalOuterShape includesPoint: aPoint) or: [self isWorldMorph])\x0a\x09\x09ifTrue: [^ self]\x0a\x09\x09ifFalse: [^ nil].",
messageSends: ["reverseDo:", "morphAtPosition:", "ifNotNil:", "ifTrue:ifFalse:", "or:", "isWorldMorph", "includesPoint:"],
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
self["@globalPathTransform"]=_st($AthensAffineTransform())._new();
_st(self["@globalPathTransform"])._loadAffineTransform_(_st(self["@owner"])._globalPathTransform());
_st(self["@globalPathTransform"])._multiplyBy_(self["@transformation"]);
_st(_st(canvas)._pathTransform())._loadAffineTransform_(self["@globalPathTransform"]);
_st(_st(canvas)._pathTransform())._setIdentity();
_st(_st(canvas)._pathTransform())._set();
self._drawOn_(canvas);
_st(self["@submorphs"])._do_((function(morph){
return smalltalk.withContext(function($ctx2) {
return _st(morph)._redrawEverythingOn_(canvas);
}, function($ctx2) {$ctx2.fillBlock({morph:morph},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"redrawEverythingOn:",{canvas:canvas},smalltalk.AthensMorph)})},
args: ["canvas"],
source: "redrawEverythingOn: canvas\x0a\x09globalPathTransform := AthensAffineTransform new.\x0a\x09globalPathTransform loadAffineTransform: owner globalPathTransform.\x0a\x09globalPathTransform multiplyBy: transformation.\x0a\x09canvas pathTransform loadAffineTransform: globalPathTransform.\x0a\x09canvas pathTransform setIdentity.\x0a\x09canvas pathTransform set.\x0a\x09self drawOn: canvas.\x0a\x09submorphs do: [:morph | morph redrawEverythingOn: canvas].",
messageSends: ["new", "loadAffineTransform:", "globalPathTransform", "multiplyBy:", "pathTransform", "setIdentity", "set", "drawOn:", "do:", "redrawEverythingOn:"],
referencedClasses: ["AthensAffineTransform"]
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



smalltalk.addClass('AthensWorldMorph', smalltalk.AthensMorph, ['backgroundPaint', 'surface', 'morphBelowHand'], 'Athens-Core-Morphic');
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
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._initialize.apply(_st(self), []);
self._initializeBackgroundPaint();
self["@morphBelowHand"]=self;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self initializeBackgroundPaint.\x0a\x09morphBelowHand := self.",
messageSends: ["initialize", "initializeBackgroundPaint"],
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
selector: "redraw",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
return self._redrawEverythingOn_(canvas);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"redraw",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "redraw\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09self redrawEverythingOn: canvas].",
messageSends: ["drawDuring:", "redrawEverythingOn:"],
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



smalltalk.addPackage('Athens-Core-Morphic');
smalltalk.addClass('AthensMorph', smalltalk.Object, ['transformation', 'outerShape', 'owner', 'submorphs', 'color'], 'Athens-Core-Morphic');
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
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.AthensMorph)})},
args: ["aColor"],
source: "color: aColor\x0a\x09color := aColor.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "createSurfacePaint",
category: 'private',
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
args: [],
source: "createSurfacePaint\x0a\x09\x22TODO: surface class variable, extent variable\x22\x0a\x09self initializeSurface.\x0a\x0a\x09surface drawDuring: [:canvas | \x0a\x09\x09canvas implicitTransformation: transformation.\x0a\x09\x09canvas pathTransform loadIdentity.\x0a\x09\x09canvas paintTransform loadIdentity.\x0a\x09\x09self drawOn: canvas.\x0a\x09\x09canvas pathTransform loadIdentity.\x0a\x09\x09canvas paintTransform loadIdentity.\x0a\x09\x09\x0a\x09\x09submorphs do: [:morph | \x0a\x09\x09\x09canvas setPaint: morph surface.\x0a\x09\x09\x09canvas drawShape: (0@0 corner: 500@400)]].",
messageSends: ["initializeSurface", "drawDuring:", "implicitTransformation:", "loadIdentity", "pathTransform", "paintTransform", "drawOn:", "do:", "setPaint:", "surface", "drawShape:", "corner:", "@"],
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
self["@submorphs"]=_st($OrderedCollection())._new();
self._createSurfacePaint();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensMorph)})},
args: [],
source: "initialize\x0a\x09color := Color blue.\x0a\x09owner := AthensDummyWorldMorph instance.\x0a\x09transformation := AthensAffineTransform new.\x0a\x09submorphs := OrderedCollection new.\x0a\x09\x0a\x09self createSurfacePaint.",
messageSends: ["blue", "instance", "new", "createSurfacePaint"],
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
selector: "outerShape:",
category: 'accessing',
fn: function (shapeOrPolygon){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@outerShape"]=_st(shapeOrPolygon)._asPolygon();
return self}, function($ctx1) {$ctx1.fill(self,"outerShape:",{shapeOrPolygon:shapeOrPolygon},smalltalk.AthensMorph)})},
args: ["shapeOrPolygon"],
source: "outerShape: shapeOrPolygon\x0a\x09outerShape := shapeOrPolygon asPolygon.",
messageSends: ["asPolygon"],
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
_st(canvas)._drawShape_setPaint_(_st(shape)._canvas(),_st($Color())._white());
_st(canvas)._drawShape_(shape);
_st(canvas)._setFont_(self["@font"]);
textX=_st(_st(canvas)._measureStringWidth_(self["@text"])).__slash((2));
textY=_st(_st(_st(self["@extent"])._y()).__plus(_st(_st(self["@font"])._pointSize()).__star((0.6)))).__slash((2));
_st(_st(canvas)._pathTransform())._translateX_Y_(textX,textY);
_st(canvas)._setPaint_(_st($Color())._black());
_st(canvas)._drawString_(self["@text"]);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas,textX:textX,textY:textY,shape:shape},smalltalk.AthensButtonMorph)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09|textX textY shape|\x0a\x09shape := 0@0 corner: extent.\x0a\x09outerShape := shape asPolygon.\x0a\x09canvas setStrokePaint: Color black.\x0a\x09canvas drawShape: shape\x0a\x09canvas setPaint: Color white.\x0a\x09canvas drawShape: shape.\x0a\x09canvas setFont: font.\x0a\x09textX := (canvas measureStringWidth: text) / 2.\x0a\x09textY := (extent y + (font pointSize*0.6)) / 2.\x0a\x09canvas pathTransform translateX: textX Y: textY.\x0a\x09canvas setPaint: Color black.\x0a\x09canvas drawString: text.",
messageSends: ["corner:", "@", "asPolygon", "setStrokePaint:", "black", "drawShape:setPaint:", "canvas", "white", "drawShape:", "setFont:", "/", "measureStringWidth:", "+", "*", "pointSize", "y", "translateX:Y:", "pathTransform", "setPaint:", "drawString:"],
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



smalltalk.addClass('AthensWorldMorph', smalltalk.AthensMorph, ['backgroundPaint'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'initialization',
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
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self initializeBackgroundPaint.",
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
selector: "initializeSurface",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initializeSurface",{},smalltalk.AthensWorldMorph)})},
args: [],
source: "initializeSurface",
messageSends: [],
referencedClasses: []
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
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},smalltalk.AthensWorldMorph)})},
args: ["aSurface"],
source: "surface: aSurface\x0a\x09surface := aSurface.",
messageSends: [],
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
$2=self._basicNew();
_st($2)._surface_(aSurface);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forSurface:",{aSurface:aSurface},smalltalk.AthensWorldMorph.klass)})},
args: ["aSurface"],
source: "forSurface: aSurface\x0a\x09^ self basicNew\x0a\x09\x09surface: aSurface;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["surface:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.AthensWorldMorph.klass);


smalltalk.addClass('AthensDummyWorldMorph', smalltalk.AthensWorldMorph, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "drawDuring:",
category: 'drawing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"drawDuring:",{aBlock:aBlock},smalltalk.AthensDummyWorldMorph)})},
args: ["aBlock"],
source: "drawDuring: aBlock",
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
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensDummyWorldMorph)})},
args: [],
source: "initialize",
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


smalltalk.addClass('DamageRecorder', smalltalk.Object, ['invalidRects'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'testing',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self["@invalidRects"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DamageRecorder)})},
args: [],
source: "initialize\x0a\x09invalidRects := OrderedCollection new.",
messageSends: ["new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.DamageRecorder);

smalltalk.addMethod(
smalltalk.method({
selector: "recordInvalidRect:",
category: 'recording',
fn: function (newRect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@invalidRects"])._add_(newRect);
return self}, function($ctx1) {$ctx1.fill(self,"recordInvalidRect:",{newRect:newRect},smalltalk.DamageRecorder)})},
args: ["newRect"],
source: "recordInvalidRect: newRect\x0a\x09invalidRects add: newRect.",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.DamageRecorder);

smalltalk.addMethod(
smalltalk.method({
selector: "updateIsNeeded",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@invalidRects"])._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"updateIsNeeded",{},smalltalk.DamageRecorder)})},
args: [],
source: "updateIsNeeded\x0a\x09^ invalidRects notEmpty",
messageSends: ["notEmpty"],
referencedClasses: []
}),
smalltalk.DamageRecorder);



smalltalk.addClass('WorldState', smalltalk.Object, ['damageRecorder'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "drawWorld",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@damageRecorder"])._updateIsNeeded();
if(smalltalk.assert($1)){
};
return self}, function($ctx1) {$ctx1.fill(self,"drawWorld",{},smalltalk.WorldState)})},
args: [],
source: "drawWorld\x0a\x09damageRecorder updateIsNeeded\x0a\x09\x09ifTrue: [].",
messageSends: ["ifTrue:", "updateIsNeeded"],
referencedClasses: []
}),
smalltalk.WorldState);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $DamageRecorder(){return smalltalk.DamageRecorder||(typeof DamageRecorder=="undefined"?nil:DamageRecorder)}
return smalltalk.withContext(function($ctx1) { 
self["@damageRecorder"]=_st($DamageRecorder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.WorldState)})},
args: [],
source: "initialize\x0a\x09damageRecorder := DamageRecorder new.",
messageSends: ["new"],
referencedClasses: ["DamageRecorder"]
}),
smalltalk.WorldState);

smalltalk.addMethod(
smalltalk.method({
selector: "startDrawLoop",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 function drawWorldLoop() {
		self._drawWorld();
		requestAnimationFrame(drawWorldLoop);
	}
	drawWorldLoop();;
return self}, function($ctx1) {$ctx1.fill(self,"startDrawLoop",{},smalltalk.WorldState)})},
args: [],
source: "startDrawLoop\x0a\x09< function drawWorldLoop() {\x0a\x09\x09self._drawWorld();\x0a\x09\x09requestAnimationFrame(drawWorldLoop);\x0a\x09}\x0a\x09drawWorldLoop();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.WorldState);




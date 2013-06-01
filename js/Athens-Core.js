smalltalk.addPackage('Athens-Core');
smalltalk.addClass('AthensCanvas', smalltalk.Object, ['paint', 'surface', 'shape', 'fontRenderer', 'paintMode'], 'Athens-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "cacheAt:ifAbsentPut:",
category: 'caching',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._cacheAt_ifAbsentPut_(anObject,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"cacheAt:ifAbsentPut:",{anObject:anObject,aBlock:aBlock},smalltalk.AthensCanvas)})},
args: ["anObject", "aBlock"],
source: "cacheAt: anObject ifAbsentPut: aBlock\x0a\x0a\x09^ surface cacheAt: anObject ifAbsentPut: aBlock",
messageSends: ["cacheAt:ifAbsentPut:"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "clearMask:",
category: 'masking',
fn: function (aShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aShape)._paintFillsUsing_on_(_st(self["@surface"])._clearMaskPaint(),self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"clearMask:",{aShape:aShape},smalltalk.AthensCanvas)})},
args: ["aShape"],
source: "clearMask: aShape\x0a\x09\x22set mask pixels to 0 for all pixels covered by shape, aShape\x22\x0a\x09^ aShape paintFillsUsing: surface clearMaskPaint on: self",
messageSends: ["paintFillsUsing:on:", "clearMaskPaint"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "clipBy:during:",
category: 'clipping',
fn: function (aRectangle,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._clipBy_during_(aRectangle,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"clipBy:during:",{aRectangle:aRectangle,aBlock:aBlock},smalltalk.AthensCanvas)})},
args: ["aRectangle", "aBlock"],
source: "clipBy: aRectangle during: aBlock\x0a\x09\x0a\x09\x22 Set a clipping rectangle during drawing operations performed in a block.\x0a\x09Note that clipping rectangle are intetersected with currently active clipping\x0a\x09rectangle \x22\x0a\x09\x0a\x09 ^surface clipBy: aRectangle during: aBlock",
messageSends: ["clipBy:during:"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
category: 'paths',
fn: function (aPathCreatingBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._createPath_(aPathCreatingBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aPathCreatingBlock:aPathCreatingBlock},smalltalk.AthensCanvas)})},
args: ["aPathCreatingBlock"],
source: "createPath: aPathCreatingBlock\x0a\x09\x22Create new path. A path creating block should be a monadic block,\x0a\x09which will get a path builder instance as argument. See AthensPathBuilder\x0a\x09for available protocol.\x0a\x09The resulting path object can be later used for drawing.\x0a\x09\x22 \x0a\x09^ surface createPath: aPathCreatingBlock",
messageSends: ["createPath:"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "createRectanglePath:",
category: 'paths',
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._createRectanglePath_(aRectangle);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createRectanglePath:",{aRectangle:aRectangle},smalltalk.AthensCanvas)})},
args: ["aRectangle"],
source: "createRectanglePath: aRectangle \x0a\x09^ surface createRectanglePath: aRectangle ",
messageSends: ["createRectanglePath:"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "disableMask",
category: 'masking',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._disableMask();
return $1;
}, function($ctx1) {$ctx1.fill(self,"disableMask",{},smalltalk.AthensCanvas)})},
args: [],
source: "disableMask\x0a\x09^ surface disableMask",
messageSends: ["disableMask"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape"])._paintFillsUsing_on_(self["@paint"],self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.AthensCanvas)})},
args: [],
source: "draw\x0a\x09\x22Fill the shape (anObject) using currently selected paint\x0a\x09an object should implement double-dispatch to currently selected paint\x22\x0a\x09\x0a\x09^ shape paintFillsUsing: paint on: self",
messageSends: ["paintFillsUsing:on:"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "draw:",
category: 'drawing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._drawOnAthensCanvas_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"draw:",{anObject:anObject},smalltalk.AthensCanvas)})},
args: ["anObject"],
source: "draw: anObject\x0a\x09\x22A generic dispatch method to draw anObject on receiver. \x0a\x09the object should understand #drawOnAthensCanvas: message\x22\x0a\x09^ anObject drawOnAthensCanvas: self",
messageSends: ["drawOnAthensCanvas:"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawShape:",
category: 'drawing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setShape_(anObject);
self._draw();
return self}, function($ctx1) {$ctx1.fill(self,"drawShape:",{anObject:anObject},smalltalk.AthensCanvas)})},
args: ["anObject"],
source: "drawShape: anObject\x0a\x09\x22A convenience method, which sets the current shape to anObject and then fills it\x0a\x09with currently selected paint\x22 \x0a\x09self setShape: anObject.\x0a\x09self draw.\x0a\x09",
messageSends: ["setShape:", "draw"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:",
category: 'drawing text',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@fontRenderer"])._renderCharacters_from_to_(aString,(1),_st(aString)._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"drawString:",{aString:aString},smalltalk.AthensCanvas)})},
args: ["aString"],
source: "drawString: aString\x0a\x09\x22Draw a string using currently selected font.\x0a\x09Answer a total advance of rendered string \x22\x0a\x09^ fontRenderer renderCharacters: aString from: 1 to: aString size.",
messageSends: ["renderCharacters:from:to:", "size"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:from:to:",
category: 'drawing text',
fn: function (aString,start,end){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@fontRenderer"])._renderCharacters_from_to_(aString,start,end);
return $1;
}, function($ctx1) {$ctx1.fill(self,"drawString:from:to:",{aString:aString,start:start,end:end},smalltalk.AthensCanvas)})},
args: ["aString", "start", "end"],
source: "drawString: aString from: start to: end\x0a\x0a\x09\x22Draw a portion of string using currently selected font.\x0a\x09Answer a total advance of rendered portion\x22\x0a\x09^ fontRenderer renderCharacters: aString from: start to: end",
messageSends: ["renderCharacters:from:to:"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "enableMask",
category: 'masking',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._enableMask();
return $1;
}, function($ctx1) {$ctx1.fill(self,"enableMask",{},smalltalk.AthensCanvas)})},
args: [],
source: "enableMask\x0a\x09^ surface enableMask",
messageSends: ["enableMask"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "flushCacheAt:",
category: 'caching',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._removeCacheAt_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"flushCacheAt:",{anObject:anObject},smalltalk.AthensCanvas)})},
args: ["anObject"],
source: "flushCacheAt: anObject\x0a\x09\x22Flush (delete) any cached value(s) identified by given object, anObject.\x0a\x09A surface using identity comparison for object identifiers.\x0a\x0a\x09Answer receiver.\x0a\x09\x22\x0a\x0a\x09surface removeCacheAt: anObject",
messageSends: ["removeCacheAt:"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithSurface:",
category: 'initialization',
fn: function (anAthensSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=anAthensSurface;
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithSurface:",{anAthensSurface:anAthensSurface},smalltalk.AthensCanvas)})},
args: ["anAthensSurface"],
source: "initializeWithSurface: anAthensSurface\x09\x0a\x09surface := anAthensSurface",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "isVisible:",
category: 'clipping',
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isVisible:",{aRectangle:aRectangle},smalltalk.AthensCanvas)})},
args: ["aRectangle"],
source: "isVisible: aRectangle \x0a\x09\x22check if rectangle are not fully clipped by current clipping coordinates\x22\x0a\x09\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paint",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@paint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"paint",{},smalltalk.AthensCanvas)})},
args: [],
source: "paint\x0a\x09^ paint  ",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paintMode",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@paintMode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"paintMode",{},smalltalk.AthensCanvas)})},
args: [],
source: "paintMode\x0a\x09\x22Answer the current paint mode controller.\x0a\x09The answered object should conform to AthensPaintMode public protocol.\x22\x0a\x0a\x09^ paintMode",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paintTransform",
category: 'transformation matrices',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._paintTransform();
return $1;
}, function($ctx1) {$ctx1.fill(self,"paintTransform",{},smalltalk.AthensCanvas)})},
args: [],
source: "paintTransform\x0a\x09\x22Answer the paint transformation matrix controller.\x0a\x09The answered object should conform to AthensTransform public protocol.\x22\x0a\x0a\x09^ surface paintTransform",
messageSends: ["paintTransform"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "pathTransform",
category: 'transformation matrices',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._pathTransform();
return $1;
}, function($ctx1) {$ctx1.fill(self,"pathTransform",{},smalltalk.AthensCanvas)})},
args: [],
source: "pathTransform\x0a\x09\x22Answer the path transformation matrix controller.\x0a\x09The answered object should conform to AthensTransform public protocol.\x22\x0a\x09^ surface pathTransform",
messageSends: ["pathTransform"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "setFont:",
category: 'drawing text',
fn: function (aFont){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fontRenderer"]=_st(aFont)._glyphRendererOn_(self["@surface"]);
return self}, function($ctx1) {$ctx1.fill(self,"setFont:",{aFont:aFont},smalltalk.AthensCanvas)})},
args: ["aFont"],
source: "setFont: aFont\x0a\x09\x22Set the current font of receiver. Font object should answer a glyph renderer instance,\x0a\x09compatible with glyph renderer protocol\x22 \x0a\x09fontRenderer := aFont glyphRendererOn: surface.",
messageSends: ["glyphRendererOn:"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "setMask:",
category: 'masking',
fn: function (aShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aShape)._paintFillsUsing_on_(_st(self["@surface"])._setMaskPaint(),self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"setMask:",{aShape:aShape},smalltalk.AthensCanvas)})},
args: ["aShape"],
source: "setMask: aShape\x0a\x09\x22set mask pixels to 1 for all pixels covered by shape, aShape\x22\x0a\x0a\x09^ aShape paintFillsUsing: surface setMaskPaint on: self",
messageSends: ["paintFillsUsing:on:", "setMaskPaint"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "setPaint:",
category: 'paint',
fn: function (aPaint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self["@paint"]).__eq(aPaint);
if(smalltalk.assert($1)){
$2=self["@paint"];
return $2;
};
self["@paint"]=_st(aPaint)._asAthensPaintOn_(self);
$3=self["@paint"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"setPaint:",{aPaint:aPaint},smalltalk.AthensCanvas)})},
args: ["aPaint"],
source: "setPaint: aPaint\x0a\x09\x22set the current paint of receiver\x22\x0a\x09paint = aPaint ifTrue:[ ^ paint ].\x0a\x09paint := aPaint asAthensPaintOn: self.\x0a\x09^ paint.",
messageSends: ["ifTrue:", "=", "asAthensPaintOn:"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "setShape:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"setShape:",{anObject:anObject},smalltalk.AthensCanvas)})},
args: ["anObject"],
source: "setShape: anObject\x0a\x09\x22Set the current shape of receiver\x22\x0a\x09shape := anObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "setStrokePaint:",
category: 'paint',
fn: function (aPaint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@paint"]=_st(_st(aPaint)._asAthensPaintOn_(self))._asStrokePaintOn_(self);
$1=self["@paint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"setStrokePaint:",{aPaint:aPaint},smalltalk.AthensCanvas)})},
args: ["aPaint"],
source: "setStrokePaint: aPaint\x0a\x09\x22use paint as stroke paint, note conversion to #asStrokePaintOn:\x22\x0a\x09paint := (aPaint asAthensPaintOn: self) asStrokePaintOn: self.\x0a\x09^ paint",
messageSends: ["asStrokePaintOn:", "asAthensPaintOn:"],
referencedClasses: []
}),
smalltalk.AthensCanvas);

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
}, function($ctx1) {$ctx1.fill(self,"surface",{},smalltalk.AthensCanvas)})},
args: [],
source: "surface\x0a\x09\x22Answer an Athens surface, to which receiver is bound to\x22\x0a\x09^ surface",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensCanvas);


smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.AthensCanvas.klass)})},
args: [],
source: "new\x0a\x09\x22use #on: instead\x22\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.AthensCanvas.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'private',
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._initializeWithSurface_(aSurface);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aSurface:aSurface},smalltalk.AthensCanvas.klass)})},
args: ["aSurface"],
source: "on: aSurface\x0a\x09^ self basicNew initializeWithSurface: aSurface",
messageSends: ["initializeWithSurface:", "basicNew"],
referencedClasses: []
}),
smalltalk.AthensCanvas.klass);


smalltalk.addClass('AthensPaintMode', smalltalk.Object, [], 'Athens-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "add",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"add",{},smalltalk.AthensPaintMode)})},
args: [],
source: "add\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "atop",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"atop",{},smalltalk.AthensPaintMode)})},
args: [],
source: "atop\x0a\x09\x22Set 'atop' painting mode \x22\x0a\x09\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "availableModes",
category: 'capabilities',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"availableModes",{},smalltalk.AthensPaintMode)})},
args: [],
source: "availableModes\x0a\x0a\x09\x22Answer a collection of paint mode names, currently supported by backend. \x0a\x09Different backends may support different sets of paint modes.\x0a\x09\x0a\x09You may need to structure your code depending on modes available\x22\x0a\x09\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.AthensPaintMode)})},
args: [],
source: "clear\x0a\x09\x22Set 'clear' drawing mode.\x0a\x09\x0a\x09Drawing under this mode will clear the surface under the shape boundaries\x22\x0a\x09\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "colorBurn",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"colorBurn",{},smalltalk.AthensPaintMode)})},
args: [],
source: "colorBurn\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "colorDodge",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"colorDodge",{},smalltalk.AthensPaintMode)})},
args: [],
source: "colorDodge\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "darken",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"darken",{},smalltalk.AthensPaintMode)})},
args: [],
source: "darken\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "default",
category: 'default mode',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._over();
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.AthensPaintMode)})},
args: [],
source: "default\x0a\x09\x22Set the default paint mode. The default paint mode in Athens, is 'over' \x22\x0a\x09^ self over",
messageSends: ["over"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "dest",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"dest",{},smalltalk.AthensPaintMode)})},
args: [],
source: "dest\x0a\x09\x22Set 'dest' drawing mode.\x0a\x09\x0a\x09Drawing under this mode will ignore the source, as if nothing drawn\x22\x0a\x09\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "destAtop",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"destAtop",{},smalltalk.AthensPaintMode)})},
args: [],
source: "destAtop\x0a\x09\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "destIn",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"destIn",{},smalltalk.AthensPaintMode)})},
args: [],
source: "destIn\x0a\x09\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "destOut",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"destOut",{},smalltalk.AthensPaintMode)})},
args: [],
source: "destOut\x0a\x09\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "destOver",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"destOver",{},smalltalk.AthensPaintMode)})},
args: [],
source: "destOver\x0a\x09\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "difference",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"difference",{},smalltalk.AthensPaintMode)})},
args: [],
source: "difference\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "exclusion",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"exclusion",{},smalltalk.AthensPaintMode)})},
args: [],
source: "exclusion\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "hardLight",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"hardLight",{},smalltalk.AthensPaintMode)})},
args: [],
source: "hardLight\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "hslColor",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"hslColor",{},smalltalk.AthensPaintMode)})},
args: [],
source: "hslColor\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "hslHue",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"hslHue",{},smalltalk.AthensPaintMode)})},
args: [],
source: "hslHue\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "hslLuminosity",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"hslLuminosity",{},smalltalk.AthensPaintMode)})},
args: [],
source: "hslLuminosity\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "hslSaturation",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"hslSaturation",{},smalltalk.AthensPaintMode)})},
args: [],
source: "hslSaturation\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "in",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"in",{},smalltalk.AthensPaintMode)})},
args: [],
source: "in\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"lighten",{},smalltalk.AthensPaintMode)})},
args: [],
source: "lighten\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "multiply",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"multiply",{},smalltalk.AthensPaintMode)})},
args: [],
source: "multiply\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "notAvailable",
category: 'errors',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._error_("A requested paint mode is not supported by backend");
return $1;
}, function($ctx1) {$ctx1.fill(self,"notAvailable",{},smalltalk.AthensPaintMode)})},
args: [],
source: "notAvailable\x0a\x09^ self error: 'A requested paint mode is not supported by backend'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "out",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"out",{},smalltalk.AthensPaintMode)})},
args: [],
source: "out\x0a\x09\x22Set 'out' painting mode \x22\x0a\x09\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "over",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"over",{},smalltalk.AthensPaintMode)})},
args: [],
source: "over\x0a\x09\x22Set 'over' drawing mode. This is default paint mode.\x0a\x09\x0a\x09Drawing under this mode will blend source with destination color using source alpha component\x22\x0a\x09\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "overlay",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"overlay",{},smalltalk.AthensPaintMode)})},
args: [],
source: "overlay\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "restoreAfter:",
category: 'convenience',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock},smalltalk.AthensPaintMode)})},
args: ["aBlock"],
source: "restoreAfter: aBlock\x0a\x0a\x09\x22restore current paint mode after evaluating a block\x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "saturate",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"saturate",{},smalltalk.AthensPaintMode)})},
args: [],
source: "saturate\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "screen",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"screen",{},smalltalk.AthensPaintMode)})},
args: [],
source: "screen\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "softLight",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"softLight",{},smalltalk.AthensPaintMode)})},
args: [],
source: "softLight\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.AthensPaintMode)})},
args: [],
source: "source\x0a\x09\x22Set 'source' drawing mode.\x0a\x09\x0a\x09Drawing under this mode will replace the content with incoming source under the shape boundaries\x22\x0a\x09\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "xor",
category: 'modes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"xor",{},smalltalk.AthensPaintMode)})},
args: [],
source: "xor\x0a\x09self notAvailable",
messageSends: ["notAvailable"],
referencedClasses: []
}),
smalltalk.AthensPaintMode);



smalltalk.addClass('AthensShape', smalltalk.Object, [], 'Athens-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "paintFillsUsing:on:",
category: 'drawing',
fn: function (aPaint,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},smalltalk.AthensShape)})},
args: ["aPaint", "anAthensCanvas"],
source: "paintFillsUsing: aPaint on: anAthensCanvas \x0a\x09\x22This method is a part of rendering dispatch  Canvas->receiver->paint\x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensShape);



smalltalk.addClass('AthensPath', smalltalk.AthensShape, [], 'Athens-Core');


smalltalk.addClass('AthensSurface', smalltalk.Object, ['currentCanvas'], 'Athens-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "asForm",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"asForm",{},smalltalk.AthensSurface)})},
args: [],
source: "asForm\x0a\x09\x22Answer a Form , which contains a bits, converted from surface \x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "cacheAt:ifAbsentPut:",
category: 'caching',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"cacheAt:ifAbsentPut:",{anObject:anObject,aBlock:aBlock},smalltalk.AthensSurface)})},
args: ["anObject", "aBlock"],
source: "cacheAt: anObject ifAbsentPut: aBlock\x0a\x09\x22Answer an object from surface's cache identified by anObject,\x0a\x09if there is no cached object under such identifier, evaluate a block\x0a\x09and put it into cache. Then answer the result of evaluation.\x0a\x09A surface using identity comparison for object identifiers.\x0a\x09\x22\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
category: 'public',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.AthensSurface)})},
args: [],
source: "clear\x0a\x09\x22clear the surface\x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "clear:",
category: 'public',
fn: function (clearColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"clear:",{clearColor:clearColor},smalltalk.AthensSurface)})},
args: ["clearColor"],
source: "clear: clearColor\x0a\x09\x22clear the surface\x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "clipBy:during:",
category: 'clipping',
fn: function (aRectangle,aBlockClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"clipBy:during:",{aRectangle:aRectangle,aBlockClosure:aBlockClosure},smalltalk.AthensSurface)})},
args: ["aRectangle", "aBlockClosure"],
source: "clipBy: aRectangle during: aBlockClosure \x0a\x09self subclassResponsibility.",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createFormPaint:",
category: 'paints',
fn: function (aForm){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"createFormPaint:",{aForm:aForm},smalltalk.AthensSurface)})},
args: ["aForm"],
source: "createFormPaint: aForm \x0a\x09self subclassResponsibility.",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createLinearGradient:origin:corner:",
category: 'paints',
fn: function (colorRamp,pt1,pt2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:origin:corner:",{colorRamp:colorRamp,pt1:pt1,pt2:pt2},smalltalk.AthensSurface)})},
args: ["colorRamp", "pt1", "pt2"],
source: "createLinearGradient: colorRamp origin: pt1 corner: pt2\x0a \x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createLinearGradient:start:stop:",
category: 'paints',
fn: function (colorRamp,pt1,pt2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:start:stop:",{colorRamp:colorRamp,pt1:pt1,pt2:pt2},smalltalk.AthensSurface)})},
args: ["colorRamp", "pt1", "pt2"],
source: "createLinearGradient: colorRamp start: pt1 stop: pt2\x0a \x0a\x09\x22This protocol is deprecated. Use #createLinearGradient: start:stop: instead\x22\x0a\x09\x0a\x09\x0a\x09self shouldNotImplement ",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
category: 'paths',
fn: function (aPathBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"createPath:",{aPathBuilder:aPathBuilder},smalltalk.AthensSurface)})},
args: ["aPathBuilder"],
source: "createPath: aPathBuilder\x0a\x09\x22Create a path from provided path builder instance\x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createRadialGradient:center:radius:",
category: 'paints',
fn: function (colorRamp,aCenter,aRadius){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._createRadialGradient_center_radius_focalPoint_(colorRamp,aCenter,aRadius,aCenter);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createRadialGradient:center:radius:",{colorRamp:colorRamp,aCenter:aCenter,aRadius:aRadius},smalltalk.AthensSurface)})},
args: ["colorRamp", "aCenter", "aRadius"],
source: "createRadialGradient: colorRamp center: aCenter radius: aRadius\x0a\x09\x22by default, focal point coincede with center\x22\x0a\x09^ self createRadialGradient: colorRamp center: aCenter radius: aRadius focalPoint: aCenter",
messageSends: ["createRadialGradient:center:radius:focalPoint:"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createRadialGradient:center:radius:focalPoint:",
category: 'paints',
fn: function (colorRamp,aCenter,aRadius,fp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"createRadialGradient:center:radius:focalPoint:",{colorRamp:colorRamp,aCenter:aCenter,aRadius:aRadius,fp:fp},smalltalk.AthensSurface)})},
args: ["colorRamp", "aCenter", "aRadius", "fp"],
source: "createRadialGradient: colorRamp center: aCenter radius: aRadius focalPoint: fp\x0a \x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createRectanglePath:",
category: 'paths',
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=aRectangle;
return $1;
}, function($ctx1) {$ctx1.fill(self,"createRectanglePath:",{aRectangle:aRectangle},smalltalk.AthensSurface)})},
args: ["aRectangle"],
source: "createRectanglePath: aRectangle \x0a\x09^ aRectangle",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createSolidColorPaint:",
category: 'paints',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"createSolidColorPaint:",{aColor:aColor},smalltalk.AthensSurface)})},
args: ["aColor"],
source: "createSolidColorPaint: aColor \x0a\x09 \x22Answer an instance of AthensPaint, valid for use with given surface\x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createStrokePaintFor:",
category: 'paints',
fn: function (aPaint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"createStrokePaintFor:",{aPaint:aPaint},smalltalk.AthensSurface)})},
args: ["aPaint"],
source: "createStrokePaintFor: aPaint\x0a\x09 \x22Answer an instance of AthensPaint, valid for use as stroke paint on receiver,\x0a\x09using an argument, paint for fills\x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "disableMask",
category: 'masking',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"disableMask",{},smalltalk.AthensSurface)})},
args: [],
source: "disableMask\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "drawDuring:",
category: 'public',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentCanvas"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._attemptToRecurseDrawing();
};
_st((function(){
return smalltalk.withContext(function($ctx2) {
self["@currentCanvas"]=self._newCanvas();
self["@currentCanvas"];
return _st(aBlock)._value_(self["@currentCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
self._releaseCanvas();
self["@currentCanvas"]=nil;
return self["@currentCanvas"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawDuring:",{aBlock:aBlock},smalltalk.AthensSurface)})},
args: ["aBlock"],
source: "drawDuring: aBlock\x0a\x0a\x09\x22You may draw on receiver only when inside a block and only using provided canvas object.\x0a\x09This ensures releasing system resources used after finishing drawing\x22\x0a\x0a\x0a\x09currentCanvas ifNotNil: [ self attemptToRecurseDrawing ].\x0a\x09\x0a\x09[\x0a\x09\x09currentCanvas := self newCanvas.\x0a\x09\x09aBlock value: currentCanvas.\x0a\x09] ensure: [\x0a\x09\x09self releaseCanvas.\x0a\x09\x09currentCanvas := nil.\x0a\x09].",
messageSends: ["ifNotNil:", "attemptToRecurseDrawing", "ensure:", "releaseCanvas", "newCanvas", "value:"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "enableMask",
category: 'masking',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"enableMask",{},smalltalk.AthensSurface)})},
args: [],
source: "enableMask\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "flushCacheAt:",
category: 'caching',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"flushCacheAt:",{anObject:anObject},smalltalk.AthensSurface)})},
args: ["anObject"],
source: "flushCacheAt: anObject\x0a\x0a\x09\x22Flush (delete) any cached value(s) identified by given object, anObject.\x0a\x09A surface using identity comparison for object identifiers.\x0a\x0a\x09Answer receiver.\x0a\x09\x22\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "maskEnabled",
category: 'masking',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"maskEnabled",{},smalltalk.AthensSurface)})},
args: [],
source: "maskEnabled\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "newCanvas",
category: 'private',
fn: function (){
var self=this;
function $AthensCanvas(){return smalltalk.AthensCanvas||(typeof AthensCanvas=="undefined"?nil:AthensCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensCanvas())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCanvas",{},smalltalk.AthensSurface)})},
args: [],
source: "newCanvas\x0a\x09\x22Answer a preinitialized instance of AthensCanvas.\x0a\x09Private to receiver and its subclasses, override seldom\x22\x0a\x09^ AthensCanvas on: self",
messageSends: ["on:"],
referencedClasses: ["AthensCanvas"]
}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "releaseCanvas",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentCanvas"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"releaseCanvas",{},smalltalk.AthensSurface)})},
args: [],
source: "releaseCanvas\x0a\x09currentCanvas := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensSurface);


smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'instance creation',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.AthensSurface.klass)})},
args: ["aPoint"],
source: "extent: aPoint\x0a\x09\x22Create a new surface with given extent. \x0a\x09Note that some surfaces may not support this method, since they may represent an infinite surface.\x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensSurface.klass);


smalltalk.addClass('AthensTransform', smalltalk.Object, [], 'Athens-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "getMatrix",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"getMatrix",{},smalltalk.AthensTransform)})},
args: [],
source: "getMatrix\x0a\x09\x22Answer an affine transformation matrix currently used by receiver.\x0a\x09Note, that resulting matrix should be copied from receiver's data, i.e.\x0a\x09no future modifications of receiver should affect the answered object.\x0a\x09\x0a\x09The default implementation is to answer a copy of receiver\x22\x0a\x09\x0a\x09^ self copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "invert",
category: 'transformations',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"invert",{},smalltalk.AthensTransform)})},
args: [],
source: "invert\x0a\x09\x22i should invert\x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "loadAffineTransform:",
category: 'transformations',
fn: function (anAthenTransform){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"loadAffineTransform:",{anAthenTransform:anAthenTransform},smalltalk.AthensTransform)})},
args: ["anAthenTransform"],
source: "loadAffineTransform: anAthenTransform\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "loadIdentity",
category: 'transformations',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensTransform)})},
args: [],
source: "loadIdentity\x0a\x09\x22load the identity matrix into receiver\x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "restoreAfter:",
category: 'transformations',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock},smalltalk.AthensTransform)})},
args: ["aBlock"],
source: "restoreAfter: aBlock\x0a\x09\x22i should save the current transform state, evaluate the block, and then restore the saved transform state\x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByDegrees:",
category: 'transformations',
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"rotateByDegrees:",{angle:angle},smalltalk.AthensTransform)})},
args: ["angle"],
source: "rotateByDegrees: angle\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByRadians:",
category: 'transformations',
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{angle:angle},smalltalk.AthensTransform)})},
args: ["angle"],
source: "rotateByRadians: angle\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:",
category: 'transformations',
fn: function (factor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{factor:factor},smalltalk.AthensTransform)})},
args: ["factor"],
source: "scaleBy: factor\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleX:Y:",
category: 'transformations',
fn: function (fx,fy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"scaleX:Y:",{fx:fx,fy:fy},smalltalk.AthensTransform)})},
args: ["fx", "fy"],
source: "scaleX: fx Y: fy\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "transform:",
category: 'vector-transform',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"transform:",{aPoint:aPoint},smalltalk.AthensTransform)})},
args: ["aPoint"],
source: "transform: aPoint \x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "transformX:Y:",
category: 'vector-transform',
fn: function (px,py){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"transformX:Y:",{px:px,py:py},smalltalk.AthensTransform)})},
args: ["px", "py"],
source: "transformX: px Y: py \x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'transformations',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.AthensTransform)})},
args: ["aPoint"],
source: "translateBy: aPoint\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "translateX:Y:",
category: 'transformations',
fn: function (px,py){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"translateX:Y:",{px:px,py:py},smalltalk.AthensTransform)})},
args: ["px", "py"],
source: "translateX: px Y: py\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AthensTransform);



smalltalk.addMethod(
smalltalk.method({
selector: "isPoint",
category: '*Athens-Core',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isPoint",{},smalltalk.Object)})},
args: [],
source: "isPoint\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asAthensPaintOn:",
category: '*Athens-Core',
fn: function (anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anAthensCanvas)._surface())._createSolidColorPaint_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{anAthensCanvas:anAthensCanvas},smalltalk.Color)})},
args: ["anAthensCanvas"],
source: "asAthensPaintOn: anAthensCanvas\x0a\x09^ anAthensCanvas surface createSolidColorPaint: self",
messageSends: ["createSolidColorPaint:", "surface"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "arcCos",
category: '*Athens-Core',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.acos(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"arcCos",{},smalltalk.Number)})},
args: [],
source: "arcCos\x0a\x09< return Math.acos(self); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "arcSin",
category: '*Athens-Core',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.asin(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"arcSin",{},smalltalk.Number)})},
args: [],
source: "arcSin\x0a\x09< return Math.asin(self); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "arcTan",
category: '*Athens-Core',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.atan(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"arcTan",{},smalltalk.Number)})},
args: [],
source: "arcTan\x0a\x09< return Math.atan(self); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "cos",
category: '*Athens-Core',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.cos(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"cos",{},smalltalk.Number)})},
args: [],
source: "cos\x0a\x09< return Math.cos(self); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "degreesToRadians",
category: '*Athens-Core',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self / 180.0 * Math.PI; ;
return self}, function($ctx1) {$ctx1.fill(self,"degreesToRadians",{},smalltalk.Number)})},
args: [],
source: "degreesToRadians\x0a\x09< return self / 180.0 * Math.PI; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "sin",
category: '*Athens-Core',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.sin(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"sin",{},smalltalk.Number)})},
args: [],
source: "sin\x0a\x09< return Math.sin(self); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "tan",
category: '*Athens-Core',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.tan(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"tan",{},smalltalk.Number)})},
args: [],
source: "tan\x0a\x09< return Math.tan(self); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "corner:",
category: '*Athens-Core',
fn: function (cornerPoint){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(self,cornerPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"corner:",{cornerPoint:cornerPoint},smalltalk.Point)})},
args: ["cornerPoint"],
source: "corner: cornerPoint\x0a\x09^ Rectangle origin: self corner: cornerPoint",
messageSends: ["origin:corner:"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "isPoint",
category: '*Athens-Core',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isPoint",{},smalltalk.Point)})},
args: [],
source: "isPoint\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "normalized",
category: '*Athens-Core',
fn: function (){
var self=this;
var r;
return smalltalk.withContext(function($ctx1) { 
var $1;
r=_st(_st(_st(self["@x"]).__star(self["@x"])).__plus(_st(self["@y"]).__star(self["@y"])))._sqrt();
$1=_st(_st(self["@x"]).__slash(r)).__at(_st(self["@y"]).__slash(r));
return $1;
}, function($ctx1) {$ctx1.fill(self,"normalized",{r:r},smalltalk.Point)})},
args: [],
source: "normalized\x0a\x09| r |\x0a\x09r := (x * x + (y * y)) sqrt.\x0a\x09^ (x / r) @ (y / r)",
messageSends: ["sqrt", "+", "*", "@", "/"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "r",
category: '*Athens-Core',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@x"]).__star(self["@x"])).__plus(_st(self["@y"]).__star(self["@y"])))._sqrt();
return $1;
}, function($ctx1) {$ctx1.fill(self,"r",{},smalltalk.Point)})},
args: [],
source: "r\x0a\x09^ (x*x + (y*y)) sqrt",
messageSends: ["sqrt", "+", "*"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "paintFillsUsing:on:",
category: '*Athens-Core',
fn: function (aPaint,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aPaint)._fillRectangle_on_(self,anAthensCanvas);
return $1;
}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},smalltalk.Rectangle)})},
args: ["aPaint", "anAthensCanvas"],
source: "paintFillsUsing: aPaint on: anAthensCanvas \x0a\x09\x22This method is a part of rendering dispatch  Canvas->receiver->paint\x22\x0a\x09\x0a\x09^ aPaint fillRectangle: self on: anAthensCanvas",
messageSends: ["fillRectangle:on:"],
referencedClasses: []
}),
smalltalk.Rectangle);


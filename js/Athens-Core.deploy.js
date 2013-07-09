smalltalk.addPackage('Athens-Core');
smalltalk.addClass('AthensCanvas', smalltalk.Object, ['paint', 'surface', 'shape', 'fontRenderer', 'paintMode'], 'Athens-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "cacheAt:ifAbsentPut:",
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._cacheAt_ifAbsentPut_(anObject,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"cacheAt:ifAbsentPut:",{anObject:anObject,aBlock:aBlock},smalltalk.AthensCanvas)})},
messageSends: ["cacheAt:ifAbsentPut:"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "clearMask:",
fn: function (aShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aShape)._paintFillsUsing_on_(_st(self["@surface"])._clearMaskPaint(),self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"clearMask:",{aShape:aShape},smalltalk.AthensCanvas)})},
messageSends: ["paintFillsUsing:on:", "clearMaskPaint"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "clipBy:during:",
fn: function (aRectangle,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._clipBy_during_(aRectangle,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"clipBy:during:",{aRectangle:aRectangle,aBlock:aBlock},smalltalk.AthensCanvas)})},
messageSends: ["clipBy:during:"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
fn: function (aPathCreatingBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._createPath_(aPathCreatingBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aPathCreatingBlock:aPathCreatingBlock},smalltalk.AthensCanvas)})},
messageSends: ["createPath:"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "createRectanglePath:",
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._createRectanglePath_(aRectangle);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createRectanglePath:",{aRectangle:aRectangle},smalltalk.AthensCanvas)})},
messageSends: ["createRectanglePath:"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "disableMask",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._disableMask();
return $1;
}, function($ctx1) {$ctx1.fill(self,"disableMask",{},smalltalk.AthensCanvas)})},
messageSends: ["disableMask"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape"])._paintFillsUsing_on_(self["@paint"],self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.AthensCanvas)})},
messageSends: ["paintFillsUsing:on:"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "draw:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._drawOnAthensCanvas_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"draw:",{anObject:anObject},smalltalk.AthensCanvas)})},
messageSends: ["drawOnAthensCanvas:"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawShape:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setShape_(anObject);
self._draw();
return self}, function($ctx1) {$ctx1.fill(self,"drawShape:",{anObject:anObject},smalltalk.AthensCanvas)})},
messageSends: ["setShape:", "draw"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@fontRenderer"])._renderCharacters_from_to_(aString,(1),_st(aString)._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"drawString:",{aString:aString},smalltalk.AthensCanvas)})},
messageSends: ["renderCharacters:from:to:", "size"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:from:to:",
fn: function (aString,start,end){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@fontRenderer"])._renderCharacters_from_to_(aString,start,end);
return $1;
}, function($ctx1) {$ctx1.fill(self,"drawString:from:to:",{aString:aString,start:start,end:end},smalltalk.AthensCanvas)})},
messageSends: ["renderCharacters:from:to:"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "enableMask",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._enableMask();
return $1;
}, function($ctx1) {$ctx1.fill(self,"enableMask",{},smalltalk.AthensCanvas)})},
messageSends: ["enableMask"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "flushCacheAt:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._removeCacheAt_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"flushCacheAt:",{anObject:anObject},smalltalk.AthensCanvas)})},
messageSends: ["removeCacheAt:"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithSurface:",
fn: function (anAthensSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=anAthensSurface;
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithSurface:",{anAthensSurface:anAthensSurface},smalltalk.AthensCanvas)})},
messageSends: []}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "isVisible:",
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isVisible:",{aRectangle:aRectangle},smalltalk.AthensCanvas)})},
messageSends: []}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@paint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"paint",{},smalltalk.AthensCanvas)})},
messageSends: []}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paintMode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@paintMode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"paintMode",{},smalltalk.AthensCanvas)})},
messageSends: []}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paintTransform",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._paintTransform();
return $1;
}, function($ctx1) {$ctx1.fill(self,"paintTransform",{},smalltalk.AthensCanvas)})},
messageSends: ["paintTransform"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "pathTransform",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@surface"])._pathTransform();
return $1;
}, function($ctx1) {$ctx1.fill(self,"pathTransform",{},smalltalk.AthensCanvas)})},
messageSends: ["pathTransform"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "setFont:",
fn: function (aFont){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fontRenderer"]=_st(aFont)._glyphRendererOn_(self["@surface"]);
return self}, function($ctx1) {$ctx1.fill(self,"setFont:",{aFont:aFont},smalltalk.AthensCanvas)})},
messageSends: ["glyphRendererOn:"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "setMask:",
fn: function (aShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aShape)._paintFillsUsing_on_(_st(self["@surface"])._setMaskPaint(),self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"setMask:",{aShape:aShape},smalltalk.AthensCanvas)})},
messageSends: ["paintFillsUsing:on:", "setMaskPaint"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "setPaint:",
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
messageSends: ["ifTrue:", "=", "asAthensPaintOn:"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "setShape:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"setShape:",{anObject:anObject},smalltalk.AthensCanvas)})},
messageSends: []}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "setStrokePaint:",
fn: function (aPaint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@paint"]=_st(_st(aPaint)._asAthensPaintOn_(self))._asStrokePaintOn_(self);
$1=self["@paint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"setStrokePaint:",{aPaint:aPaint},smalltalk.AthensCanvas)})},
messageSends: ["asStrokePaintOn:", "asAthensPaintOn:"]}),
smalltalk.AthensCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "surface",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@surface"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"surface",{},smalltalk.AthensCanvas)})},
messageSends: []}),
smalltalk.AthensCanvas);


smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.AthensCanvas.klass)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.AthensCanvas.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._initializeWithSurface_(aSurface);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aSurface:aSurface},smalltalk.AthensCanvas.klass)})},
messageSends: ["initializeWithSurface:", "basicNew"]}),
smalltalk.AthensCanvas.klass);


smalltalk.addClass('AthensPaintMode', smalltalk.Object, [], 'Athens-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "add",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"add",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "atop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"atop",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "availableModes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"availableModes",{},smalltalk.AthensPaintMode)})},
messageSends: []}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "colorBurn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"colorBurn",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "colorDodge",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"colorDodge",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "darken",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"darken",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "default",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._over();
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.AthensPaintMode)})},
messageSends: ["over"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "dest",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"dest",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "destAtop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"destAtop",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "destIn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"destIn",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "destOut",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"destOut",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "destOver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"destOver",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "difference",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"difference",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "exclusion",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"exclusion",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "hardLight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"hardLight",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "hslColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"hslColor",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "hslHue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"hslHue",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "hslLuminosity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"hslLuminosity",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "hslSaturation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"hslSaturation",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "in",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"in",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"lighten",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "multiply",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"multiply",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "notAvailable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._error_("A requested paint mode is not supported by backend");
return $1;
}, function($ctx1) {$ctx1.fill(self,"notAvailable",{},smalltalk.AthensPaintMode)})},
messageSends: ["error:"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "out",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"out",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "over",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"over",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "overlay",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"overlay",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "restoreAfter:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock},smalltalk.AthensPaintMode)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "saturate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"saturate",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "screen",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"screen",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "softLight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"softLight",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);

smalltalk.addMethod(
smalltalk.method({
selector: "xor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAvailable();
return self}, function($ctx1) {$ctx1.fill(self,"xor",{},smalltalk.AthensPaintMode)})},
messageSends: ["notAvailable"]}),
smalltalk.AthensPaintMode);



smalltalk.addClass('AthensShape', smalltalk.Object, [], 'Athens-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "paintFillsUsing:on:",
fn: function (aPaint,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},smalltalk.AthensShape)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensShape);



smalltalk.addClass('AthensPath', smalltalk.AthensShape, [], 'Athens-Core');


smalltalk.addClass('AthensSurface', smalltalk.Object, ['currentCanvas'], 'Athens-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "asForm",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"asForm",{},smalltalk.AthensSurface)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "cacheAt:ifAbsentPut:",
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"cacheAt:ifAbsentPut:",{anObject:anObject,aBlock:aBlock},smalltalk.AthensSurface)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.AthensSurface)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "clear:",
fn: function (clearColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"clear:",{clearColor:clearColor},smalltalk.AthensSurface)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "clipBy:during:",
fn: function (aRectangle,aBlockClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"clipBy:during:",{aRectangle:aRectangle,aBlockClosure:aBlockClosure},smalltalk.AthensSurface)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createFormPaint:",
fn: function (aForm){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"createFormPaint:",{aForm:aForm},smalltalk.AthensSurface)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createLinearGradient:origin:corner:",
fn: function (colorRamp,pt1,pt2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:origin:corner:",{colorRamp:colorRamp,pt1:pt1,pt2:pt2},smalltalk.AthensSurface)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createLinearGradient:start:stop:",
fn: function (colorRamp,pt1,pt2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:start:stop:",{colorRamp:colorRamp,pt1:pt1,pt2:pt2},smalltalk.AthensSurface)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
fn: function (aPathBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"createPath:",{aPathBuilder:aPathBuilder},smalltalk.AthensSurface)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createRadialGradient:center:radius:",
fn: function (colorRamp,aCenter,aRadius){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._createRadialGradient_center_radius_focalPoint_(colorRamp,aCenter,aRadius,aCenter);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createRadialGradient:center:radius:",{colorRamp:colorRamp,aCenter:aCenter,aRadius:aRadius},smalltalk.AthensSurface)})},
messageSends: ["createRadialGradient:center:radius:focalPoint:"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createRadialGradient:center:radius:focalPoint:",
fn: function (colorRamp,aCenter,aRadius,fp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"createRadialGradient:center:radius:focalPoint:",{colorRamp:colorRamp,aCenter:aCenter,aRadius:aRadius,fp:fp},smalltalk.AthensSurface)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createRectanglePath:",
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=aRectangle;
return $1;
}, function($ctx1) {$ctx1.fill(self,"createRectanglePath:",{aRectangle:aRectangle},smalltalk.AthensSurface)})},
messageSends: []}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createSolidColorPaint:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"createSolidColorPaint:",{aColor:aColor},smalltalk.AthensSurface)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "createStrokePaintFor:",
fn: function (aPaint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"createStrokePaintFor:",{aPaint:aPaint},smalltalk.AthensSurface)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "disableMask",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"disableMask",{},smalltalk.AthensSurface)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "drawDuring:",
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
messageSends: ["ifNotNil:", "attemptToRecurseDrawing", "ensure:", "releaseCanvas", "newCanvas", "value:"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "enableMask",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"enableMask",{},smalltalk.AthensSurface)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "flushCacheAt:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"flushCacheAt:",{anObject:anObject},smalltalk.AthensSurface)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "maskEnabled",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"maskEnabled",{},smalltalk.AthensSurface)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "newCanvas",
fn: function (){
var self=this;
function $AthensCanvas(){return smalltalk.AthensCanvas||(typeof AthensCanvas=="undefined"?nil:AthensCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensCanvas())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCanvas",{},smalltalk.AthensSurface)})},
messageSends: ["on:"]}),
smalltalk.AthensSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "releaseCanvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentCanvas"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"releaseCanvas",{},smalltalk.AthensSurface)})},
messageSends: []}),
smalltalk.AthensSurface);


smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.AthensSurface.klass)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensSurface.klass);


smalltalk.addClass('AthensTransform', smalltalk.Object, [], 'Athens-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "getMatrix",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"getMatrix",{},smalltalk.AthensTransform)})},
messageSends: ["copy"]}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "invert",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"invert",{},smalltalk.AthensTransform)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "loadAffineTransform:",
fn: function (anAthenTransform){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"loadAffineTransform:",{anAthenTransform:anAthenTransform},smalltalk.AthensTransform)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "loadIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensTransform)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "restoreAfter:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock},smalltalk.AthensTransform)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByDegrees:",
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"rotateByDegrees:",{angle:angle},smalltalk.AthensTransform)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByRadians:",
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{angle:angle},smalltalk.AthensTransform)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:",
fn: function (factor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{factor:factor},smalltalk.AthensTransform)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleX:Y:",
fn: function (fx,fy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"scaleX:Y:",{fx:fx,fy:fy},smalltalk.AthensTransform)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "transform:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"transform:",{aPoint:aPoint},smalltalk.AthensTransform)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "transformX:Y:",
fn: function (px,py){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"transformX:Y:",{px:px,py:py},smalltalk.AthensTransform)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.AthensTransform)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "translateX:Y:",
fn: function (px,py){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"translateX:Y:",{px:px,py:py},smalltalk.AthensTransform)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensTransform);



smalltalk.addMethod(
smalltalk.method({
selector: "isPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isPoint",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asAthensPaintOn:",
fn: function (anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return anAthensCanvas['@surface']._createSolidColorPaint_(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{anAthensCanvas:anAthensCanvas},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "arcCos",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.acos(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"arcCos",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "arcSin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.asin(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"arcSin",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "arcTan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.atan(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"arcTan",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asHexString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.toString(16); ;
return self}, function($ctx1) {$ctx1.fill(self,"asHexString",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "cos",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.cos(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"cos",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "degreesToRadians",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self / 180.0 * Math.PI; ;
return self}, function($ctx1) {$ctx1.fill(self,"degreesToRadians",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "sin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.sin(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"sin",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "tan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.tan(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"tan",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "corner:",
fn: function (cornerPoint){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(self,cornerPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"corner:",{cornerPoint:cornerPoint},smalltalk.Point)})},
messageSends: ["origin:corner:"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "isPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isPoint",{},smalltalk.Point)})},
messageSends: []}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "normalized",
fn: function (){
var self=this;
var r;
return smalltalk.withContext(function($ctx1) { 
var $1;
r=_st(_st(_st(self["@x"]).__star(self["@x"])).__plus(_st(self["@y"]).__star(self["@y"])))._sqrt();
$1=_st(_st(self["@x"]).__slash(r)).__at(_st(self["@y"]).__slash(r));
return $1;
}, function($ctx1) {$ctx1.fill(self,"normalized",{r:r},smalltalk.Point)})},
messageSends: ["sqrt", "+", "*", "@", "/"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "r",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@x"]).__star(self["@x"])).__plus(_st(self["@y"]).__star(self["@y"])))._sqrt();
return $1;
}, function($ctx1) {$ctx1.fill(self,"r",{},smalltalk.Point)})},
messageSends: ["sqrt", "+", "*"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "paintFillsUsing:on:",
fn: function (aPaint,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aPaint)._fillRectangle_on_(self,anAthensCanvas);
return $1;
}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},smalltalk.Rectangle)})},
messageSends: ["fillRectangle:on:"]}),
smalltalk.Rectangle);


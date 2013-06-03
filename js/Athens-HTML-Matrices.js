smalltalk.addPackage('Athens-HTML-Matrices');
smalltalk.addClass('AthensHTMLMatrix', smalltalk.AthensAffineTransform, ['surface'], 'Athens-HTML-Matrices');
smalltalk.addMethod(
smalltalk.method({
selector: "applyToContext",
category: 'transformations',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@surface"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(self["@surface"])._context2D())._setTransform_a_a_a_a_a_(self["@sx"],self["@shy"],self["@shx"],self["@sy"],self["@x"],self["@y"]);
};
return self}, function($ctx1) {$ctx1.fill(self,"applyToContext",{},smalltalk.AthensHTMLMatrix)})},
args: [],
source: "applyToContext\x0a\x09surface ifNotNil: [\x0a\x09\x09surface context2D setTransform: sx a: shy a: shx a: sy a: x a: y].",
messageSends: ["ifNotNil:", "setTransform:a:a:a:a:a:", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "loadAffineTransform:",
category: 'transformations',
fn: function (m){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensAffineTransform.fn.prototype._loadAffineTransform_.apply(_st(self), [m]);
self._applyToContext();
return self}, function($ctx1) {$ctx1.fill(self,"loadAffineTransform:",{m:m},smalltalk.AthensHTMLMatrix)})},
args: ["m"],
source: "loadAffineTransform: m\x0a\x09super loadAffineTransform: m.\x0a\x09self applyToContext.",
messageSends: ["loadAffineTransform:", "applyToContext"],
referencedClasses: []
}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "loadIdentity",
category: 'transformations',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensAffineTransform.fn.prototype._loadIdentity.apply(_st(self), []);
self._applyToContext();
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensHTMLMatrix)})},
args: [],
source: "loadIdentity\x0a\x09super loadIdentity.\x0a\x09self applyToContext.",
messageSends: ["loadIdentity", "applyToContext"],
referencedClasses: []
}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "restoreAfter:",
category: 'transformations',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._save();
_st(aBlock)._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self["@surface"])._context2D())._restore();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock},smalltalk.AthensHTMLMatrix)})},
args: ["aBlock"],
source: "restoreAfter: aBlock\x0a\x09surface context2D save.\x0a\x09aBlock ensure: [surface context2D restore].",
messageSends: ["save", "context2D", "ensure:", "restore"],
referencedClasses: []
}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByRadians:",
category: 'transformations',
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensAffineTransform.fn.prototype._rotateByRadians_.apply(_st(self), [angle]);
return self}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{angle:angle},smalltalk.AthensHTMLMatrix)})},
args: ["angle"],
source: "rotateByRadians: angle\x0a\x09super rotateByRadians: angle.\x0a\x09\x22surface context2D rotate: angle.\x22",
messageSends: ["rotateByRadians:"],
referencedClasses: []
}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:",
category: 'transformations',
fn: function (factor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(factor)._isPoint();
if(smalltalk.assert($1)){
self._scaleX_Y_(_st(factor)._x(),_st(factor)._y());
} else {
self._scaleX_Y_(factor,factor);
};
return self}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{factor:factor},smalltalk.AthensHTMLMatrix)})},
args: ["factor"],
source: "scaleBy: factor\x0a\x09factor isPoint \x0a\x09\x09ifTrue: [self scaleX: factor x Y: factor y] \x0a\x09\x09ifFalse: [self scaleX: factor Y: factor].",
messageSends: ["ifTrue:ifFalse:", "scaleX:Y:", "x", "y", "isPoint"],
referencedClasses: []
}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleX:Y:",
category: 'transformations',
fn: function (fx,fy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensAffineTransform.fn.prototype._scaleX_Y_.apply(_st(self), [fx,fy]);
return self}, function($ctx1) {$ctx1.fill(self,"scaleX:Y:",{fx:fx,fy:fy},smalltalk.AthensHTMLMatrix)})},
args: ["fx", "fy"],
source: "scaleX: fx Y: fy\x0a\x09super scaleX: fx Y: fy.\x0a\x09\x22surface context2D scale: fx a: fy.\x22",
messageSends: ["scaleX:Y:"],
referencedClasses: []
}),
smalltalk.AthensHTMLMatrix);

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
}, function($ctx1) {$ctx1.fill(self,"surface",{},smalltalk.AthensHTMLMatrix)})},
args: [],
source: "surface\x0a\x09^ surface",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
category: 'accessing',
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=aSurface;
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},smalltalk.AthensHTMLMatrix)})},
args: ["aSurface"],
source: "surface: aSurface\x0a\x09surface := aSurface.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "translateX:Y:",
category: 'transformations',
fn: function (px,py){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensAffineTransform.fn.prototype._translateX_Y_.apply(_st(self), [px,py]);
return self}, function($ctx1) {$ctx1.fill(self,"translateX:Y:",{px:px,py:py},smalltalk.AthensHTMLMatrix)})},
args: ["px", "py"],
source: "translateX: px Y: py\x0a\x09super translateX: px Y: py.\x0a\x09\x22surface context2D translate: px a: py.\x22",
messageSends: ["translateX:Y:"],
referencedClasses: []
}),
smalltalk.AthensHTMLMatrix);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (anHTMLSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._surface_(anHTMLSurface);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensHTMLMatrix.klass)})},
args: ["anHTMLSurface"],
source: "on: anHTMLSurface\x0a\x09^ self basicNew\x0a\x09\x09surface: anHTMLSurface;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["surface:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLMatrix.klass);



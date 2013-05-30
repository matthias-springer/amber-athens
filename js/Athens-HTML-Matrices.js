smalltalk.addPackage('Athens-HTML-Matrices');
smalltalk.addClass('AthensHTMLMatrix', smalltalk.Object, ['sx', 'shx', 'x', 'shy', 'sy', 'y', 'surface'], 'Athens-HTML-Matrices');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._loadIdentity();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLMatrix)})},
args: [],
source: "initialize\x0a\x09self loadIdentity",
messageSends: ["loadIdentity"],
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
self["@sy"]=(1);
self["@sx"]=self["@sy"];
self["@y"]=(0);
self["@x"]=self["@y"];
self["@shy"]=self["@x"];
self["@shx"]=self["@shy"];
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensHTMLMatrix)})},
args: [],
source: "loadIdentity\x0a\x09\x22initialize with identity transform\x22\x0a\x09sx := sy := 1.0.\x0a\x09shx := shy := x := y := 0.0.\x0a\x09\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByDegrees:",
category: 'transformations',
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._rotateByRadians_(_st(angle)._degreesToRadians());
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateByDegrees:",{angle:angle},smalltalk.AthensHTMLMatrix)})},
args: ["angle"],
source: "rotateByDegrees: angle\x0a\x09^ self rotateByRadians: angle degreesToRadians",
messageSends: ["rotateByRadians:", "degreesToRadians"],
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
_st(_st(self["@surface"])._context2D())._rotate_(angle);
return self}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{angle:angle},smalltalk.AthensHTMLMatrix)})},
args: ["angle"],
source: "rotateByRadians: angle\x0a\x09surface context2D rotate: angle",
messageSends: ["rotate:", "context2D"],
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
source: "scaleBy: factor\x0a\x09\x22Do a uniform scale if factor is a number.\x22\x0a\x09\x0a\x09factor isPoint \x0a\x09\x09ifTrue: [self scaleX: factor x Y: factor y] \x0a\x09\x09ifFalse: [self scaleX: factor Y: factor].",
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
_st(_st(self["@surface"])._context2D())._scale_a_(fx,fy);
return self}, function($ctx1) {$ctx1.fill(self,"scaleX:Y:",{fx:fx,fy:fy},smalltalk.AthensHTMLMatrix)})},
args: ["fx", "fy"],
source: "scaleX: fx Y: fy\x0a\x09surface context2D scale: fx a: fy.",
messageSends: ["scale:a:", "context2D"],
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
_st(_st(self["@surface"])._context2D())._translate_a_(px,py);
return self}, function($ctx1) {$ctx1.fill(self,"translateX:Y:",{px:px,py:py},smalltalk.AthensHTMLMatrix)})},
args: ["px", "py"],
source: "translateX: px Y: py\x0a\x09surface context2D translate: px a: py.",
messageSends: ["translate:a:", "context2D"],
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
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensHTMLMatrix.klass)})},
args: ["anHTMLSurface"],
source: "on: anHTMLSurface\x0a\x09^ self basicNew\x0a\x09\x09surface: anHTMLSurface;\x0a\x09\x09yourself",
messageSends: ["surface:", "basicNew", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLMatrix.klass);



smalltalk.addPackage('Athens-HTML-Matrices');
smalltalk.addClass('AthensHTMLTransformation', smalltalk.AthensAffineTransform, ['surface'], 'Athens-HTML-Matrices');
smalltalk.addMethod(
smalltalk.method({
selector: "getMatrix",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("not allowed");
return self}, function($ctx1) {$ctx1.fill(self,"getMatrix",{},smalltalk.AthensHTMLTransformation)})},
args: [],
source: "getMatrix\x0a\x09self error: 'not allowed'.\x09",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "loadAffineTransform:",
category: 'transformations',
fn: function (m){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._transform_a_a_a_a_a_(_st(m)._sx(),_st(m)._shy(),_st(m)._shx(),_st(m)._sy(),_st(m)._x(),_st(m)._y());
return self}, function($ctx1) {$ctx1.fill(self,"loadAffineTransform:",{m:m},smalltalk.AthensHTMLTransformation)})},
args: ["m"],
source: "loadAffineTransform: m\x0a\x09surface context2D transform: m sx a: m shy a: m shx a: m sy a: m x a: m y.",
messageSends: ["transform:a:a:a:a:a:", "sx", "shy", "shx", "sy", "x", "y", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "loadGlobalIdentity",
category: 'transformations',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._transform_a_a_a_a_a_((1),(0),(0),(1),(0),(0));
return self}, function($ctx1) {$ctx1.fill(self,"loadGlobalIdentity",{},smalltalk.AthensHTMLTransformation)})},
args: [],
source: "loadGlobalIdentity\x0a\x09surface context2D transform: 1 a: 0 a: 0 a: 1 a: 0 a: 0.",
messageSends: ["transform:a:a:a:a:a:", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "loadIdentity",
category: 'transformations',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._transform_a_a_a_a_a_((1),(0),(0),(1),(0),(0));
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensHTMLTransformation)})},
args: [],
source: "loadIdentity\x0a\x09surface context2D transform: 1 a: 0 a: 0 a: 1 a: 0 a: 0.",
messageSends: ["transform:a:a:a:a:a:", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "multiplyBy:",
category: 'transformations',
fn: function (m){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._transformBy_a_a_a_a_a_(_st(m)._sx(),_st(m)._shy(),_st(m)._shx(),_st(m)._sy(),_st(m)._x(),_st(m)._y());
return self}, function($ctx1) {$ctx1.fill(self,"multiplyBy:",{m:m},smalltalk.AthensHTMLTransformation)})},
args: ["m"],
source: "multiplyBy: m\x0a\x09surface context2D transformBy: m sx a: m shy a: m shx a: m sy a: m x a: m y.",
messageSends: ["transformBy:a:a:a:a:a:", "sx", "shy", "shx", "sy", "x", "y", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "restoreAfter:",
category: 'transformations',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._push();
_st(aBlock)._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self["@surface"])._context2D())._pop();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock},smalltalk.AthensHTMLTransformation)})},
args: ["aBlock"],
source: "restoreAfter: aBlock\x0a\x09surface context2D push.\x0a\x09aBlock ensure: [surface context2D pop].",
messageSends: ["push", "context2D", "ensure:", "pop"],
referencedClasses: []
}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByDegrees:",
category: 'transformations',
fn: function (angle){
var self=this;
function $Number(){return smalltalk.Number||(typeof Number=="undefined"?nil:Number)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._rotateByRadians_(_st(_st(angle).__star(_st($Number())._pi())).__slash((180)));
return self}, function($ctx1) {$ctx1.fill(self,"rotateByDegrees:",{angle:angle},smalltalk.AthensHTMLTransformation)})},
args: ["angle"],
source: "rotateByDegrees: angle\x0a\x09surface context2D rotateByRadians: angle * Number pi /  180.",
messageSends: ["rotateByRadians:", "/", "*", "pi", "context2D"],
referencedClasses: ["Number"]
}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByRadians:",
category: 'transformations',
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._rotateByRadians_(angle);
return self}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{angle:angle},smalltalk.AthensHTMLTransformation)})},
args: ["angle"],
source: "rotateByRadians: angle\x0a\x09surface context2D rotateByRadians: angle.",
messageSends: ["rotateByRadians:", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:",
category: 'transformations',
fn: function (factor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(factor)._isNumber();
if(smalltalk.assert($1)){
_st(_st(self["@surface"])._context2D())._scaleByX_Y_(factor,factor);
} else {
_st(_st(self["@surface"])._context2D())._scaleByX_Y_(_st(factor)._x(),_st(factor)._y());
};
return self}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{factor:factor},smalltalk.AthensHTMLTransformation)})},
args: ["factor"],
source: "scaleBy: factor\x0a\x09factor isNumber\x0a\x09\x09ifTrue: [surface context2D scaleByX: factor Y: factor]\x0a\x09\x09ifFalse: [surface context2D scaleByX: factor x Y: factor y].",
messageSends: ["ifTrue:ifFalse:", "scaleByX:Y:", "context2D", "x", "y", "isNumber"],
referencedClasses: []
}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleX:Y:",
category: 'transformations',
fn: function (fx,fy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._scaleByX_Y_(fx,fy);
return self}, function($ctx1) {$ctx1.fill(self,"scaleX:Y:",{fx:fx,fy:fy},smalltalk.AthensHTMLTransformation)})},
args: ["fx", "fy"],
source: "scaleX: fx Y: fy\x0a\x09surface context2D scaleByX: fx Y: fy.",
messageSends: ["scaleByX:Y:", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
category: 'accessing',
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=aSurface;
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},smalltalk.AthensHTMLTransformation)})},
args: ["aSurface"],
source: "surface: aSurface\x0a\x09surface := aSurface.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'transformations',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._translateByX_Y_(_st(aPoint)._x(),_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.AthensHTMLTransformation)})},
args: ["aPoint"],
source: "translateBy: aPoint\x0a\x09surface context2D translateByX: aPoint x Y: aPoint y.",
messageSends: ["translateByX:Y:", "x", "y", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "translateX:Y:",
category: 'transformations',
fn: function (px,py){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._translateByX_Y_(px,py);
return self}, function($ctx1) {$ctx1.fill(self,"translateX:Y:",{px:px,py:py},smalltalk.AthensHTMLTransformation)})},
args: ["px", "py"],
source: "translateX: px Y: py\x0a\x09surface context2D translateByX: px Y: py.",
messageSends: ["translateByX:Y:", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLTransformation);


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
}, function($ctx1) {$ctx1.fill(self,"on:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensHTMLTransformation.klass)})},
args: ["anHTMLSurface"],
source: "on: anHTMLSurface\x0a\x09^ self basicNew\x0a\x09\x09surface: anHTMLSurface;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["surface:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLTransformation.klass);



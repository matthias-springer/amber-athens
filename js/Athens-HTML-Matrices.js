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
 self['@surface']['@context2D'].setTransform(m['@sx'], m['@shy'], m['@shx'], m['@sy'], m['@x'], m['@y']); ;
return self}, function($ctx1) {$ctx1.fill(self,"loadAffineTransform:",{m:m},smalltalk.AthensHTMLTransformation)})},
args: ["m"],
source: "loadAffineTransform: m\x0a\x09< self['@surface']['@context2D'].setTransform(m['@sx'], m['@shy'], m['@shx'], m['@sy'], m['@x'], m['@y']); >",
messageSends: [],
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
 self['@surface']['@context2D'].setTransform(1, 0, 0, 1, 0, 0); ;
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensHTMLTransformation)})},
args: [],
source: "loadIdentity\x0a\x09< self['@surface']['@context2D'].setTransform(1, 0, 0, 1, 0, 0); >",
messageSends: [],
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
 self['@surface']['@context2D'].transform(m['@sx'], m['@shy'], m['@shx'], m['@sy'], m['@x'], m['@y']); ;
return self}, function($ctx1) {$ctx1.fill(self,"multiplyBy:",{m:m},smalltalk.AthensHTMLTransformation)})},
args: ["m"],
source: "multiplyBy: m\x0a\x09< self['@surface']['@context2D'].transform(m['@sx'], m['@shy'], m['@shx'], m['@sy'], m['@x'], m['@y']); >",
messageSends: [],
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
 self['@surface']['@context2D'].save();
	
	aBlock._ensure_(function() {
		self['@surface']['@context2D'].restore();
	}); ;
return self}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock},smalltalk.AthensHTMLTransformation)})},
args: ["aBlock"],
source: "restoreAfter: aBlock\x0a\x09< self['@surface']['@context2D'].save();\x0a\x09\x0a\x09aBlock._ensure_(function() {\x0a\x09\x09self['@surface']['@context2D'].restore();\x0a\x09}); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByDegrees:",
category: 'transformations',
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@surface']['@context2D'].rotate(angle * Math.PI/180); ;
return self}, function($ctx1) {$ctx1.fill(self,"rotateByDegrees:",{angle:angle},smalltalk.AthensHTMLTransformation)})},
args: ["angle"],
source: "rotateByDegrees: angle\x0a\x09< self['@surface']['@context2D'].rotate(angle * Math.PI/180); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByRadians:",
category: 'transformations',
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@surface']['@context2D'].rotate(angle); ;
return self}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{angle:angle},smalltalk.AthensHTMLTransformation)})},
args: ["angle"],
source: "rotateByRadians: angle\x0a\x09< self['@surface']['@context2D'].rotate(angle); >",
messageSends: [],
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
 if (factor.constructor === Number) {
		self['@surface']['@context2D'].scale(factor, factor);
	}	
	else {
		self['@surface']['@context2D'].scale(factor['@x'], factor['@y']);
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{factor:factor},smalltalk.AthensHTMLTransformation)})},
args: ["factor"],
source: "scaleBy: factor\x0a\x09< if (factor.constructor === Number) {\x0a\x09\x09self['@surface']['@context2D'].scale(factor, factor);\x0a\x09}\x09\x0a\x09else {\x0a\x09\x09self['@surface']['@context2D'].scale(factor['@x'], factor['@y']);\x0a\x09} >",
messageSends: [],
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
 self['@surface']['@context2D'].scale(fx, fy); ;
return self}, function($ctx1) {$ctx1.fill(self,"scaleX:Y:",{fx:fx,fy:fy},smalltalk.AthensHTMLTransformation)})},
args: ["fx", "fy"],
source: "scaleX: fx Y: fy\x0a\x09< self['@surface']['@context2D'].scale(fx, fy); >",
messageSends: [],
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
 self['@surface']['@context2D'].translate(aPoint['@x'], aPoint['@y']); ;
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.AthensHTMLTransformation)})},
args: ["aPoint"],
source: "translateBy: aPoint\x0a\x09< self['@surface']['@context2D'].translate(aPoint['@x'], aPoint['@y']); >",
messageSends: [],
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
 self['@surface']['@context2D'].translate(px, py); ;
return self}, function($ctx1) {$ctx1.fill(self,"translateX:Y:",{px:px,py:py},smalltalk.AthensHTMLTransformation)})},
args: ["px", "py"],
source: "translateX: px Y: py\x0a\x09< self['@surface']['@context2D'].translate(px, py); >",
messageSends: [],
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



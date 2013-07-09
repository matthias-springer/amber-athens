smalltalk.addPackage('Athens-HTML-Matrices');
smalltalk.addClass('AthensHTMLMatrix', smalltalk.AthensAffineTransform, ['surface'], 'Athens-HTML-Matrices');
smalltalk.addMethod(
smalltalk.method({
selector: "apply",
category: 'applying transformations',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 // Applies this matrix to the current transformation (multiplication)
	if (self['@surface'] !== undefined) {
		self['@surface']['@context2D'].transform(self['@sx'], self['@shy'], self['@shx'], self['@sy'], self['@x'], self['@y']);
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"apply",{},smalltalk.AthensHTMLMatrix)})},
args: [],
source: "apply\x0a\x09< // Applies this matrix to the current transformation (multiplication)\x0a\x09if (self['@surface'] !== undefined) {\x0a\x09\x09self['@surface']['@context2D'].transform(self['@sx'], self['@shy'], self['@shx'], self['@sy'], self['@x'], self['@y']);\x0a\x09} >",
messageSends: [],
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
self._set();
return self}, function($ctx1) {$ctx1.fill(self,"loadAffineTransform:",{m:m},smalltalk.AthensHTMLMatrix)})},
args: ["m"],
source: "loadAffineTransform: m\x0a\x09super loadAffineTransform: m.\x0a\x09self set.",
messageSends: ["loadAffineTransform:", "set"],
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
self._set();
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensHTMLMatrix)})},
args: [],
source: "loadIdentity\x0a\x09super loadIdentity.\x0a\x09self set.",
messageSends: ["loadIdentity", "set"],
referencedClasses: []
}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "restoreAfter:",
category: 'transformations',
fn: function (aBlock){
var self=this;
var matrixBefore;
return smalltalk.withContext(function($ctx1) { 
matrixBefore=self._copy();
_st(aBlock)._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return self._loadAffineTransform_(matrixBefore);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock,matrixBefore:matrixBefore},smalltalk.AthensHTMLMatrix)})},
args: ["aBlock"],
source: "restoreAfter: aBlock\x0a\x09|matrixBefore|\x0a\x09matrixBefore := self copy.\x0a\x09aBlock ensure: [self loadAffineTransform: matrixBefore].",
messageSends: ["copy", "ensure:", "loadAffineTransform:"],
referencedClasses: []
}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "set",
category: 'applying transformations',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 // Overwrites the current transformation
	if (self['@surface'] !== undefined) {
		self['@surface']['@context2D'].setTransform(self['@sx'], self['@shy'], self['@shx'], self['@sy'], self['@x'], self['@y']);
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"set",{},smalltalk.AthensHTMLMatrix)})},
args: [],
source: "set\x0a\x09< // Overwrites the current transformation\x0a\x09if (self['@surface'] !== undefined) {\x0a\x09\x09self['@surface']['@context2D'].setTransform(self['@sx'], self['@shy'], self['@shx'], self['@sy'], self['@x'], self['@y']);\x0a\x09} >",
messageSends: [],
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



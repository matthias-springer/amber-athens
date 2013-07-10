smalltalk.addPackage('Athens-HTML-Matrices');
smalltalk.addClass('AthensHTMLMatrix', smalltalk.AthensAffineTransform, ['surface'], 'Athens-HTML-Matrices');
smalltalk.addMethod(
smalltalk.method({
selector: "apply",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 // Applies this matrix to the current transformation (multiplication)
	if (self['@surface'] !== undefined) {
		self['@surface']['@context2D'].transform(self['@sx'], self['@shy'], self['@shx'], self['@sy'], self['@x'], self['@y']);
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"apply",{},smalltalk.AthensHTMLMatrix)})},
messageSends: []}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "loadAffineTransform:",
fn: function (m){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensAffineTransform.fn.prototype._loadAffineTransform_.apply(_st(self), [m]);
self._set();
return self}, function($ctx1) {$ctx1.fill(self,"loadAffineTransform:",{m:m},smalltalk.AthensHTMLMatrix)})},
messageSends: ["loadAffineTransform:", "set"]}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "loadIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensAffineTransform.fn.prototype._loadIdentity.apply(_st(self), []);
self._set();
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensHTMLMatrix)})},
messageSends: ["loadIdentity", "set"]}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "restoreAfter:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var sx = self['@sx'];
	var shx = self['@shx'];
	var x = self['@x'];
	var shy = self['@shy'];
	var sy = self['@sy'];
	var y = self['@y'];
	
	aBlock._ensure_(function() {
		self['@sx'] = sx;
		self['@shx'] = shx;
		self['@x'] = x;
		self['@shy'] = shy;
		self['@sy'] = sy;
		self['@y'] = y;
		self._set();
	}); ;
return self}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock},smalltalk.AthensHTMLMatrix)})},
messageSends: []}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "set",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 // Overwrites the current transformation
	if (self['@surface'] !== undefined) {
		self['@surface']['@context2D'].setTransform(self['@sx'], self['@shy'], self['@shx'], self['@sy'], self['@x'], self['@y']);
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"set",{},smalltalk.AthensHTMLMatrix)})},
messageSends: []}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=aSurface;
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},smalltalk.AthensHTMLMatrix)})},
messageSends: []}),
smalltalk.AthensHTMLMatrix);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
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
messageSends: ["surface:", "basicNew", "initialize", "yourself"]}),
smalltalk.AthensHTMLMatrix.klass);



smalltalk.addPackage('Athens-HTML-Matrices');
smalltalk.addClass('AthensHTMLTransformation', smalltalk.AthensAffineTransform, ['surface'], 'Athens-HTML-Matrices');
smalltalk.addMethod(
smalltalk.method({
selector: "getMatrix",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("not allowed");
return self}, function($ctx1) {$ctx1.fill(self,"getMatrix",{},smalltalk.AthensHTMLTransformation)})},
messageSends: ["error:"]}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "loadAffineTransform:",
fn: function (m){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@surface']['@context2D'].setTransform(m['@sx'], m['@shy'], m['@shx'], m['@sy'], m['@x'], m['@y']); ;
return self}, function($ctx1) {$ctx1.fill(self,"loadAffineTransform:",{m:m},smalltalk.AthensHTMLTransformation)})},
messageSends: []}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "loadIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@surface']['@context2D'].setTransform(1, 0, 0, 1, 0, 0); ;
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensHTMLTransformation)})},
messageSends: []}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "multiplyBy:",
fn: function (m){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@surface']['@context2D'].transform(m['@sx'], m['@shy'], m['@shx'], m['@sy'], m['@x'], m['@y']); ;
return self}, function($ctx1) {$ctx1.fill(self,"multiplyBy:",{m:m},smalltalk.AthensHTMLTransformation)})},
messageSends: []}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "restoreAfter:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@surface']['@context2D'].save();
	
	aBlock._ensure_(function() {
		self['@surface']['@context2D'].restore();
	}); ;
return self}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock},smalltalk.AthensHTMLTransformation)})},
messageSends: []}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByDegrees:",
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@surface']['@context2D'].rotate(angle * Math.PI/180); ;
return self}, function($ctx1) {$ctx1.fill(self,"rotateByDegrees:",{angle:angle},smalltalk.AthensHTMLTransformation)})},
messageSends: []}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByRadians:",
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@surface']['@context2D'].rotate(angle); ;
return self}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{angle:angle},smalltalk.AthensHTMLTransformation)})},
messageSends: []}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:",
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
messageSends: []}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleX:Y:",
fn: function (fx,fy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@surface']['@context2D'].scale(fx, fy); ;
return self}, function($ctx1) {$ctx1.fill(self,"scaleX:Y:",{fx:fx,fy:fy},smalltalk.AthensHTMLTransformation)})},
messageSends: []}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=aSurface;
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},smalltalk.AthensHTMLTransformation)})},
messageSends: []}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@surface']['@context2D'].translate(aPoint['@x'], aPoint['@y']); ;
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.AthensHTMLTransformation)})},
messageSends: []}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "translateX:Y:",
fn: function (px,py){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@surface']['@context2D'].translate(px, py); ;
return self}, function($ctx1) {$ctx1.fill(self,"translateX:Y:",{px:px,py:py},smalltalk.AthensHTMLTransformation)})},
messageSends: []}),
smalltalk.AthensHTMLTransformation);


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
}, function($ctx1) {$ctx1.fill(self,"on:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensHTMLTransformation.klass)})},
messageSends: ["surface:", "basicNew", "initialize", "yourself"]}),
smalltalk.AthensHTMLTransformation.klass);



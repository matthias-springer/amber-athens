smalltalk.addPackage('Athens-HTML-Matrices');
smalltalk.addClass('AthensHTMLMatrix', smalltalk.AthensAffineTransform, ['surface'], 'Athens-HTML-Matrices');
smalltalk.addMethod(
smalltalk.method({
selector: "apply",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@surface"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(self["@surface"])._context2D())._transform_a_a_a_a_a_(self["@sx"],self["@shy"],self["@shx"],self["@sy"],self["@x"],self["@y"]);
};
return self}, function($ctx1) {$ctx1.fill(self,"apply",{},smalltalk.AthensHTMLMatrix)})},
messageSends: ["ifNotNil:", "transform:a:a:a:a:a:", "context2D"]}),
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
var matrixBefore;
return smalltalk.withContext(function($ctx1) { 
matrixBefore=self._copy();
_st(aBlock)._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return self._loadAffineTransform_(matrixBefore);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock,matrixBefore:matrixBefore},smalltalk.AthensHTMLMatrix)})},
messageSends: ["copy", "ensure:", "loadAffineTransform:"]}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "set",
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
return self}, function($ctx1) {$ctx1.fill(self,"set",{},smalltalk.AthensHTMLMatrix)})},
messageSends: ["ifNotNil:", "setTransform:a:a:a:a:a:", "context2D"]}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "surface",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@surface"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"surface",{},smalltalk.AthensHTMLMatrix)})},
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



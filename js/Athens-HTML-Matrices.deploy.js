smalltalk.addPackage('Athens-HTML-Matrices');
smalltalk.addClass('AthensHTMLMatrix', smalltalk.Object, ['sx', 'shx', 'x', 'shy', 'sy', 'y', 'surface'], 'Athens-HTML-Matrices');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._loadIdentity();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLMatrix)})},
messageSends: ["loadIdentity"]}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "loadIdentity",
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
messageSends: []}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByDegrees:",
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._rotateByRadians_(_st(angle)._degreesToRadians());
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateByDegrees:",{angle:angle},smalltalk.AthensHTMLMatrix)})},
messageSends: ["rotateByRadians:", "degreesToRadians"]}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByRadians:",
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._rotate_(angle);
return self}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{angle:angle},smalltalk.AthensHTMLMatrix)})},
messageSends: ["rotate:", "context2D"]}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:",
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
messageSends: ["ifTrue:ifFalse:", "scaleX:Y:", "x", "y", "isPoint"]}),
smalltalk.AthensHTMLMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleX:Y:",
fn: function (fx,fy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._scale_a_(fx,fy);
return self}, function($ctx1) {$ctx1.fill(self,"scaleX:Y:",{fx:fx,fy:fy},smalltalk.AthensHTMLMatrix)})},
messageSends: ["scale:a:", "context2D"]}),
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
selector: "translateX:Y:",
fn: function (px,py){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._translate_a_(px,py);
return self}, function($ctx1) {$ctx1.fill(self,"translateX:Y:",{px:px,py:py},smalltalk.AthensHTMLMatrix)})},
messageSends: ["translate:a:", "context2D"]}),
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
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensHTMLMatrix.klass)})},
messageSends: ["surface:", "basicNew", "yourself"]}),
smalltalk.AthensHTMLMatrix.klass);



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
_st(_st(self["@surface"])._context2D())._transform_a_a_a_a_a_(_st(m)._sx(),_st(m)._shy(),_st(m)._shx(),_st(m)._sy(),_st(m)._x(),_st(m)._y());
return self}, function($ctx1) {$ctx1.fill(self,"loadAffineTransform:",{m:m},smalltalk.AthensHTMLTransformation)})},
messageSends: ["transform:a:a:a:a:a:", "sx", "shy", "shx", "sy", "x", "y", "context2D"]}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "loadGlobalIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._transform_a_a_a_a_a_((1),(0),(0),(1),(0),(0));
return self}, function($ctx1) {$ctx1.fill(self,"loadGlobalIdentity",{},smalltalk.AthensHTMLTransformation)})},
messageSends: ["transform:a:a:a:a:a:", "context2D"]}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "loadIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._transform_a_a_a_a_a_((1),(0),(0),(1),(0),(0));
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensHTMLTransformation)})},
messageSends: ["transform:a:a:a:a:a:", "context2D"]}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "multiplyBy:",
fn: function (m){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._transformBy_a_a_a_a_a_(_st(m)._sx(),_st(m)._shy(),_st(m)._shx(),_st(m)._sy(),_st(m)._x(),_st(m)._y());
return self}, function($ctx1) {$ctx1.fill(self,"multiplyBy:",{m:m},smalltalk.AthensHTMLTransformation)})},
messageSends: ["transformBy:a:a:a:a:a:", "sx", "shy", "shx", "sy", "x", "y", "context2D"]}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "restoreAfter:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._push();
_st(aBlock)._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self["@surface"])._context2D())._pop();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock},smalltalk.AthensHTMLTransformation)})},
messageSends: ["push", "context2D", "ensure:", "pop"]}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByDegrees:",
fn: function (angle){
var self=this;
function $Number(){return smalltalk.Number||(typeof Number=="undefined"?nil:Number)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._rotateByRadians_(_st(_st(angle).__star(_st($Number())._pi())).__slash((180)));
return self}, function($ctx1) {$ctx1.fill(self,"rotateByDegrees:",{angle:angle},smalltalk.AthensHTMLTransformation)})},
messageSends: ["rotateByRadians:", "/", "*", "pi", "context2D"]}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByRadians:",
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._rotateByRadians_(angle);
return self}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{angle:angle},smalltalk.AthensHTMLTransformation)})},
messageSends: ["rotateByRadians:", "context2D"]}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:",
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
messageSends: ["ifTrue:ifFalse:", "scaleByX:Y:", "context2D", "x", "y", "isNumber"]}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleX:Y:",
fn: function (fx,fy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._scaleByX_Y_(fx,fy);
return self}, function($ctx1) {$ctx1.fill(self,"scaleX:Y:",{fx:fx,fy:fy},smalltalk.AthensHTMLTransformation)})},
messageSends: ["scaleByX:Y:", "context2D"]}),
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
_st(_st(self["@surface"])._context2D())._translateByX_Y_(_st(aPoint)._x(),_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.AthensHTMLTransformation)})},
messageSends: ["translateByX:Y:", "x", "y", "context2D"]}),
smalltalk.AthensHTMLTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "translateX:Y:",
fn: function (px,py){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._translateByX_Y_(px,py);
return self}, function($ctx1) {$ctx1.fill(self,"translateX:Y:",{px:px,py:py},smalltalk.AthensHTMLTransformation)})},
messageSends: ["translateByX:Y:", "context2D"]}),
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



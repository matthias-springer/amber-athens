smalltalk.addPackage('Athens-HTML-Morphic');
smalltalk.addClass('AthensHTMLMorphicCanvas', smalltalk.AthensHTMLCanvas, ['implicitTransformation'], 'Athens-HTML-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "draw",
fn: function (){
var self=this;
var result,matrixBefore;
return smalltalk.withContext(function($ctx1) { 
var $1;
matrixBefore=_st(self["@pathTransform"])._copy();
_st(self["@pathTransform"])._loadAffineTransform_(self["@implicitTransformation"]);
_st(self["@pathTransform"])._multiplyBy_(matrixBefore);
_st((function(){
return smalltalk.withContext(function($ctx2) {
result=_st(self["@shape"])._paintFillsUsing_on_(self["@paint"],self);
return result;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@pathTransform"])._loadAffineTransform_(matrixBefore);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"draw",{result:result,matrixBefore:matrixBefore},smalltalk.AthensHTMLMorphicCanvas)})},
messageSends: ["copy", "loadAffineTransform:", "multiplyBy:", "ensure:", "paintFillsUsing:on:"]}),
smalltalk.AthensHTMLMorphicCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "implicitTransformation:",
fn: function (aMatrix){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@implicitTransformation"]=aMatrix;
return self}, function($ctx1) {$ctx1.fill(self,"implicitTransformation:",{aMatrix:aMatrix},smalltalk.AthensHTMLMorphCanvas)})},
messageSends: []}),
smalltalk.AthensHTMLMorphicCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensHTMLCanvas.fn.prototype._initialize.apply(_st(self), []);
self["@implicitTransformation"]=_st($AthensAffineTransform())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLMorphicCanvas)})},
messageSends: ["initialize", "new"]}),
smalltalk.AthensHTMLMorphicCanvas);



smalltalk.addClass('AthensHTMLMorphicSurface', smalltalk.AthensHTMLSurface, ['world'], 'Athens-HTML-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $AthensWorldMorph(){return smalltalk.AthensWorldMorph||(typeof AthensWorldMorph=="undefined"?nil:AthensWorldMorph)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensHTMLSurface.fn.prototype._initialize.apply(_st(self), []);
self["@world"]=_st($AthensWorldMorph())._forSurface_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLMorphicSurface)})},
messageSends: ["initialize", "forSurface:"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "newCanvas",
fn: function (){
var self=this;
function $AthensHTMLMorphicCanvas(){return smalltalk.AthensHTMLMorphicCanvas||(typeof AthensHTMLMorphicCanvas=="undefined"?nil:AthensHTMLMorphicCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLMorphicCanvas())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCanvas",{},smalltalk.AthensHTMLMorphicSurface)})},
messageSends: ["on:"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseDown:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mousedown",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseDown:",{aBlock:aBlock},smalltalk.AthensHTMLMorphSurface)})},
messageSends: ["bind:do:", "asJQuery"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseMove:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mousemove",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseMove:",{aBlock:aBlock},smalltalk.AthensHTMLMorphSurface)})},
messageSends: ["bind:do:", "asJQuery"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseUp:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mouseup",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseUp:",{aBlock:aBlock},smalltalk.AthensHTMLMorphSurface)})},
messageSends: ["bind:do:", "asJQuery"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensHTMLSurface.fn.prototype._renderOn_.apply(_st(self), [html]);
_st(self["@world"])._drawAll();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.AthensHTMLMorphicSurface)})},
messageSends: ["renderOn:", "drawAll"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "world",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@world"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"world",{},smalltalk.AthensHTMLMorphicSurface)})},
messageSends: []}),
smalltalk.AthensHTMLMorphicSurface);




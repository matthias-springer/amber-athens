smalltalk.addPackage('Athens-HTML-Morphic');
smalltalk.addClass('AthensHTMLMorphicCanvas', smalltalk.AthensHTMLCanvas, ['implicitTransformation'], 'Athens-HTML-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "draw",
category: 'drawing',
fn: function (){
var self=this;
var result,matrixBefore;
return smalltalk.withContext(function($ctx1) { 
matrixBefore=_st(self["@pathTransform"])._copy();
_st(self["@pathTransform"])._multiplyBy_(self["@implicitTransformation"]);
_st((function(){
return smalltalk.withContext(function($ctx2) {
result=_st(self["@shape"])._paintFillsUsing_on_(self["@paint"],self);
return result;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@pathTransform"])._loadAffineTransform_(matrixBefore);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"draw",{result:result,matrixBefore:matrixBefore},smalltalk.AthensHTMLMorphCanvas)})},
args: [],
source: "draw\x0a\x09\x22Apply implicit transformation, draw scene, undo implicit transformation.\x22\x0a\x09\x0a\x09|result matrixBefore|\x0a\x09matrixBefore := pathTransform copy.\x0a\x09pathTransform multiplyBy: implicitTransformation.\x0a\x09[result := shape paintFillsUsing: paint on: self]\x0a\x09\x09ensure: [pathTransform loadAffineTransform: matrixBefore].",
messageSends: ["copy", "multiplyBy:", "ensure:", "loadAffineTransform:", "paintFillsUsing:on:"],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "implicitTransformation:",
category: 'accessing',
fn: function (aMatrix){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@implicitTransformation"]=aMatrix;
return self}, function($ctx1) {$ctx1.fill(self,"implicitTransformation:",{aMatrix:aMatrix},smalltalk.AthensHTMLMorphCanvas)})},
args: ["aMatrix"],
source: "implicitTransformation: aMatrix\x0a\x09implicitTransformation := aMatrix.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensHTMLCanvas.fn.prototype._initialize.apply(_st(self), []);
self["@implicitTransformation"]=_st($AthensAffineTransform())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLMorphicCanvas)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09implicitTransformation := AthensAffineTransform new.",
messageSends: ["initialize", "new"],
referencedClasses: ["AthensAffineTransform"]
}),
smalltalk.AthensHTMLMorphicCanvas);



smalltalk.addClass('AthensHTMLMorphicSurface', smalltalk.AthensHTMLSurface, ['world'], 'Athens-HTML-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $AthensWorldMorph(){return smalltalk.AthensWorldMorph||(typeof AthensWorldMorph=="undefined"?nil:AthensWorldMorph)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensHTMLSurface.fn.prototype._initialize.apply(_st(self), []);
self["@world"]=_st($AthensWorldMorph())._forSurface_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLMorphicSurface)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09world := AthensWorldMorph forSurface: self.",
messageSends: ["initialize", "forSurface:"],
referencedClasses: ["AthensWorldMorph"]
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "newCanvas",
category: 'private',
fn: function (){
var self=this;
function $AthensHTMLMorphicCanvas(){return smalltalk.AthensHTMLMorphicCanvas||(typeof AthensHTMLMorphicCanvas=="undefined"?nil:AthensHTMLMorphicCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AthensHTMLMorphicCanvas())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCanvas",{},smalltalk.AthensHTMLMorphicSurface)})},
args: [],
source: "newCanvas\x0a\x09^ AthensHTMLMorphicCanvas on: self",
messageSends: ["on:"],
referencedClasses: ["AthensHTMLMorphicCanvas"]
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseDown:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mousedown",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseDown:",{aBlock:aBlock},smalltalk.AthensHTMLMorphSurface)})},
args: ["aBlock"],
source: "onMouseDown: aBlock\x0a\x09canvasTag asJQuery bind: 'mousedown' do: aBlock.",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseMove:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mousemove",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseMove:",{aBlock:aBlock},smalltalk.AthensHTMLMorphSurface)})},
args: ["aBlock"],
source: "onMouseMove: aBlock\x0a\x09canvasTag asJQuery bind: 'mousemove' do: aBlock.",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseUp:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mouseup",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseUp:",{aBlock:aBlock},smalltalk.AthensHTMLMorphSurface)})},
args: ["aBlock"],
source: "onMouseUp: aBlock\x0a\x09canvasTag asJQuery bind: 'mouseup' do: aBlock.",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensHTMLSurface.fn.prototype._renderOn_.apply(_st(self), [html]);
_st(self["@world"])._drawAll();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.AthensHTMLMorphicSurface)})},
args: ["html"],
source: "renderOn: html\x0a\x09super renderOn: html.\x0a\x09world drawAll.",
messageSends: ["renderOn:", "drawAll"],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "world",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@world"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"world",{},smalltalk.AthensHTMLMorphicSurface)})},
args: [],
source: "world\x0a\x09^ world",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLMorphicSurface);




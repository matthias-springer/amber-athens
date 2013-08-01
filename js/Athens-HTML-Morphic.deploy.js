smalltalk.addPackage('Athens-HTML-Morphic');
smalltalk.addClass('AthensHTMLMorphicCanvas', smalltalk.AthensHTMLCanvas, [], 'Athens-HTML-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
fn: function (anHTMLSurface){
var self=this;
function $AthensHTMLMorphicTransformation(){return smalltalk.AthensHTMLMorphicTransformation||(typeof AthensHTMLMorphicTransformation=="undefined"?nil:AthensHTMLMorphicTransformation)}
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
function $AthensHTMLPaintMode(){return smalltalk.AthensHTMLPaintMode||(typeof AthensHTMLPaintMode=="undefined"?nil:AthensHTMLPaintMode)}
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=anHTMLSurface;
self["@pathTransform"]=_st($AthensHTMLMorphicTransformation())._on_(self["@surface"]);
self["@paintTransform"]=_st($AthensAffineTransform())._new();
self["@paintMode"]=_st($AthensHTMLPaintMode())._on_(self["@surface"]);
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensHTMLMorphicCanvas)})},
messageSends: ["on:", "new"]}),
smalltalk.AthensHTMLMorphicCanvas);



smalltalk.addClass('AthensHTMLMorphicSurface', smalltalk.AthensHTMLSurface, ['world', 'morphBelowHand'], 'Athens-HTML-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "bindEvents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("click",(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self["@world"])._handleEvent_with_("mouseClick",evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mousedown",(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self["@world"])._handleEvent_with_("mouseDown",evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mousemove",(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self["@world"])._handleEvent_with_("mouseMove",evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(_st(self["@canvasTag"])._asJQuery())._bind_do_("mouseup",(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self["@world"])._handleEvent_with_("mouseUp",evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"bindEvents",{},smalltalk.AthensHTMLMorphicSurface)})},
messageSends: ["bind:do:", "handleEvent:with:", "asJQuery"]}),
smalltalk.AthensHTMLMorphicSurface);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $AthensWorldMorph(){return smalltalk.AthensWorldMorph||(typeof AthensWorldMorph=="undefined"?nil:AthensWorldMorph)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensHTMLSurface.fn.prototype._initialize.apply(_st(self), []);
self["@world"]=_st($AthensWorldMorph())._forSurface_(self);
self._bindEvents();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLMorphicSurface)})},
messageSends: ["initialize", "forSurface:", "bindEvents"]}),
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
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensHTMLSurface.fn.prototype._renderOn_.apply(_st(self), [html]);
_st(self["@world"])._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.AthensHTMLMorphicSurface)})},
messageSends: ["renderOn:", "redraw"]}),
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



smalltalk.addClass('AthensHTMLMorphicTransformation', smalltalk.AthensHTMLTransformation, ['relativeIdentity'], 'Athens-HTML-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
self["@relativeIdentity"]=_st($AthensAffineTransform())._new();
smalltalk.AthensHTMLTransformation.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLMorphicTransformation)})},
messageSends: ["new", "initialize"]}),
smalltalk.AthensHTMLMorphicTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "loadIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._loadAffineTransform_(self["@relativeIdentity"]);
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensHTMLMorphicMatrix)})},
messageSends: ["loadAffineTransform:"]}),
smalltalk.AthensHTMLMorphicTransformation);

smalltalk.addMethod(
smalltalk.method({
selector: "setIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@relativeIdentity"])._loadAffineTransform_(self);
return self}, function($ctx1) {$ctx1.fill(self,"setIdentity",{},smalltalk.AthensHTMLMorphicMatrix)})},
messageSends: ["loadAffineTransform:"]}),
smalltalk.AthensHTMLMorphicTransformation);



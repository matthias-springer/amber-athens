smalltalk.addPackage('Athens-Core-Morphic');
smalltalk.addClass('AthensGlobalMorphSettings', smalltalk.Object, ['showDamageArea'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@showDamageArea"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensGlobalMorphSettings)})},
messageSends: []}),
smalltalk.AthensGlobalMorphSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "showDamageArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@showDamageArea"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"showDamageArea",{},smalltalk.AthensGlobalMorphSettings)})},
messageSends: []}),
smalltalk.AthensGlobalMorphSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "showDamageArea:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@showDamageArea"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"showDamageArea:",{aBoolean:aBoolean},smalltalk.AthensGlobalMorphSettings)})},
messageSends: []}),
smalltalk.AthensGlobalMorphSettings);


smalltalk.AthensGlobalMorphSettings.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "instance",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@instance"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@instance"]=self._new();
self["@instance"];
} else {
$1;
};
$2=self["@instance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"instance",{},smalltalk.AthensGlobalMorphSettings.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.AthensGlobalMorphSettings.klass);


smalltalk.addClass('AthensMorph', smalltalk.Object, ['transformation', 'outerShape', 'outerPolygon', 'owner', 'submorphs', 'color', 'globalPathTransform', 'visible', 'eventCallbacks', 'hasMouseFocus', 'isMouseDown', 'zIndex'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "addMorph:",
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@submorphs']._add_(aMorph);
	aMorph['@owner'] = self;
	if (aMorph['@visible']) {
		aMorph._redraw();
	}
	// bring to front
	aMorph._zIndex_(self._maxZIndex() + 1);	;
return self}, function($ctx1) {$ctx1.fill(self,"addMorph:",{aMorph:aMorph},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "bounds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self['@outerPolygon']._boundingBox(); ;
return self}, function($ctx1) {$ctx1.fill(self,"bounds",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "bringToFront",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var maxZIndex = self['@owner']._maxZIndex();
	if (self['@zIndex'] < maxZIndex) {
		self._zIndex_(maxZIndex + 1);
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"bringToFront",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@color'] = aColor;
	self._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "delete",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@owner']._removeMorph_(self);
	self['@owner'] = smalltalk.AthensDummyWorldMorph._instance(); ;
return self}, function($ctx1) {$ctx1.fill(self,"delete",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (canvas){
var self=this;
var path;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
path=_st(canvas)._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._absolute();
_st($1)._lineTo_((200).__at((0)));
_st($1)._lineTo_((200).__at((200)));
_st($1)._lineTo_((0).__at((200)));
$2=_st($1)._lineTo_((0).__at((0)));
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
self._outerShape_(path);
_st(canvas)._setPaint_(self["@color"]);
_st(canvas)._setShape_(path);
_st(canvas)._draw();
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas,path:path},smalltalk.AthensMorph)})},
messageSends: ["createPath:", "absolute", "lineTo:", "@", "outerShape:", "setPaint:", "setShape:", "draw"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "globalBounds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var globalOuterPolygon = self['@outerPolygon']._deepCopy();
	globalOuterPolygon._multiplyBy_(self['@globalPathTransform']);
	return globalOuterPolygon._boundingBox(); ;
return self}, function($ctx1) {$ctx1.fill(self,"globalBounds",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "globalPathTransform",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self['@globalPathTransform']; ;
return self}, function($ctx1) {$ctx1.fill(self,"globalPathTransform",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleChange:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@eventCallbacks']._at_ifAbsent_('change', function(){return function(ev) {}; })(evt); ;
return self}, function($ctx1) {$ctx1.fill(self,"handleChange:",{evt:evt},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyDown:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@eventCallbacks']._at_ifAbsent_('keyDown', function(){return function(ev) {}; })(evt); ;
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyDown:",{evt:evt},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyPress:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@eventCallbacks']._at_ifAbsent_('keyPress', function(){return function(ev) {}; })(evt); ;
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyPress:",{evt:evt},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyUp:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@eventCallbacks']._at_ifAbsent_('keyUp', function(){return function(ev) {}; })(evt); ;
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyUp:",{evt:evt},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseClick:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(evt)._ctrlKeyPressed()).__and(_st(evt)._topMost());
if(smalltalk.assert($1)){
_st(self._world())._addHalosTo_(self);
} else {
_st(_st(self["@eventCallbacks"])._at_ifAbsent_("mouseClick",(function(){
return smalltalk.withContext(function($ctx2) {
return (function(ev){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({ev:ev},$ctx2)})});
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._value_(evt);
};
$2=_st(_st(_st(evt)._ctrlKeyPressed())._not()).__and(_st(evt)._topMost());
if(smalltalk.assert($2)){
_st(self._world())._hideHalos();
};
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensMorph)})},
messageSends: ["ifTrue:ifFalse:", "addHalosTo:", "world", "value:", "at:ifAbsent:", "&", "topMost", "ctrlKeyPressed", "ifTrue:", "hideHalos", "not"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseDown:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@isMouseDown'] = true; 
	self['@eventCallbacks']._at_ifAbsent_('mouseDown', function(){return function(ev) {}; })(evt); ;
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseDown:",{evt:evt},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@hasMouseFocus'] = true; 
	self['@eventCallbacks']._at_ifAbsent_('mouseEnter', function(){return function() {}; })(); ;
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@hasMouseFocus'] = self['@isMouseDown'] = false;
	self['@eventCallbacks']._at_ifAbsent_('mouseLeave', function(){return function() {}; })(); ;
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseMove:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@eventCallbacks']._at_ifAbsent_('mouseMove', function(){return function(ev) {}; })(evt); ;
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseMove:",{evt:evt},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseUp:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@isMouseDown'] = false;
	self['@eventCallbacks']._at_ifAbsent_('mouseUp', function(){return function(ev) {}; })(evt); ;
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseUp:",{evt:evt},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseWheel:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@eventCallbacks']._at_ifAbsent_('mouseWheel', function(){return function(ev) {}; })(evt); ;
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseWheel:",{evt:evt},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@visible'] = false;
	self._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@color'] = smalltalk.Color._blue();
	self['@owner'] = smalltalk.AthensDummyWorldMorph._instance();
	self['@transformation'] = smalltalk.AthensAffineTransform._new();
	self['@globalPathTransform'] = smalltalk.AthensAffineTransform._new();
	self['@submorphs'] = smalltalk.OrderedCollection._new();
	self['@visible'] = true;
	self['@eventCallbacks'] = smalltalk.Dictionary._new(); 
	self['@hasMouseFocus'] = self['@isMouseDown'] = false;
	self['@zIndex'] = 0;
	var zero = 0;
	self._outerShape_(zero.__at(zero)._corner_(zero.__at(zero))); ;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isHaloMorph",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return false; ;
return self}, function($ctx1) {$ctx1.fill(self,"isHaloMorph",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isVisible",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self['@visible']; ;
return self}, function($ctx1) {$ctx1.fill(self,"isVisible",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isWorldMorph",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return false; ;
return self}, function($ctx1) {$ctx1.fill(self,"isWorldMorph",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutChanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"layoutChanged",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "maxZIndex",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var maxIndex = 0;
	for (var morphIndex = 0; morphIndex < self['@submorphs'].length; morphIndex++) {
		maxIndex = Math.max(maxIndex, self['@submorphs'][morphIndex]['@zIndex']);
	}
	return maxIndex; ;
return self}, function($ctx1) {$ctx1.fill(self,"maxZIndex",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "morphsAtPosition:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 if (self['@outerPolygon']._includesPoint_(self['@globalPathTransform']._inverseTransform_(aPoint))) {
		for (var morphIndex = self['@submorphs'].length - 1; -1 < morphIndex; morphIndex--) {
			var morph = self['@submorphs'][morphIndex];
			if (morph._isVisible) {
				var morphsAtPos = morph._morphsAtPosition_(aPoint);
				if (morphsAtPos !== undefined) {
					morphsAtPos._add_(self);
					return morphsAtPos;
				}
			}
		}
	}
	else {
		return undefined;
	}
	
	return [self]; ;
return self}, function($ctx1) {$ctx1.fill(self,"morphsAtPosition:",{aPoint:aPoint},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onChange:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("change",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onChange:",{aBlock:aBlock},smalltalk.AthensMorph)})},
messageSends: ["at:put:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("keyDown",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{aBlock:aBlock},smalltalk.AthensMorph)})},
messageSends: ["at:put:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyPress:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("keyPress",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onKeyPress:",{aBlock:aBlock},smalltalk.AthensMorph)})},
messageSends: ["at:put:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyUp:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("keyUp",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onKeyUp:",{aBlock:aBlock},smalltalk.AthensMorph)})},
messageSends: ["at:put:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseClick:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseClick",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseClick:",{aBlock:aBlock},smalltalk.AthensMorph)})},
messageSends: ["at:put:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseDown:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseDown",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseDown:",{aBlock:aBlock},smalltalk.AthensMorph)})},
messageSends: ["at:put:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseEnter:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseEnter",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseEnter:",{aBlock:aBlock},smalltalk.AthensMorph)})},
messageSends: ["at:put:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseLeave:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseLeave",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseLeave:",{aBlock:aBlock},smalltalk.AthensMorph)})},
messageSends: ["at:put:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseMove:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseMove",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseMove:",{aBlock:aBlock},smalltalk.AthensMorph)})},
messageSends: ["at:put:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseUp:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseUp",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseUp:",{aBlock:aBlock},smalltalk.AthensMorph)})},
messageSends: ["at:put:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseWheel:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventCallbacks"])._at_put_("mouseWheel",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseWheel:",{aBlock:aBlock},smalltalk.AthensMorph)})},
messageSends: ["at:put:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "outerShape:",
fn: function (aShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@outerShape'] = aShape;
	self['@outerPolygon'] = aShape._asPolygon(); ;
return self}, function($ctx1) {$ctx1.fill(self,"outerShape:",{aShape:aShape},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "owner",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@owner"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"owner",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "owner:",
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@owner"]=aMorph;
return self}, function($ctx1) {$ctx1.fill(self,"owner:",{aMorph:aMorph},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redraw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self._world()._redraw_(self['@outerPolygon']._deepCopy()._multiplyBy_(self['@globalPathTransform'])._boundingBox()); 
	//._deepCopy()._multiplyBy_(self['@globalPathTransform'])._boundingBox(); ;
return self}, function($ctx1) {$ctx1.fill(self,"redraw",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redrawNow:on:",
fn: function (rects,canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@globalPathTransform']._loadAffineTransform_(self['@owner']['@globalPathTransform']);
	self['@globalPathTransform']._multiplyBy_(self['@transformation']);
	
	if (self['@visible']) {
		canvas['@pathTransform']._setIdentity_(self['@globalPathTransform']);
		canvas['@pathTransform']._loadIdentity();
		
		canvas['@pathTransform']._restoreAfter_(function() {
			self._drawOn_(canvas);
		});
		
		if (self['@outerShape'] === undefined || self['@outerShape']._isNil()) {
			self._outerShape_(self._class()._defaultOuterShape_());
		}
		
		canvas._clipBy_during_(self['@outerShape'], function() {
			for (var index = 0; index < self['@submorphs'].length; index++) {
				var submorph = self['@submorphs'][index];
				var submorphGlobalOuterBounds = submorph['@outerPolygon']._boundingBox()._boundsAfterMultiplicationWith_(submorph['@globalPathTransform']);
//				var submorphGlobalOuterBounds = submorph['@outerPolygon']._deepCopy()._multiplyBy_(submorph['@globalPathTransform'])._boundingBox();
				var intersectRects = [];
				for (var i = 0; i < rects.length; i++) {
					if (submorphGlobalOuterBounds._intersectsWith_(rects[i])) {
						intersectRects.push(rects[i]);
					}
				}
				
				if (0 < intersectRects.length) {
					submorph._redrawNow_on_(intersectRects, canvas);
				}
				
				if (smalltalk.AthensGlobalMorphSettings['@instance']['@showDamageArea']) {
					// debug: show damage area
					if (0 < intersectRects.length) {
						canvas._setPaint_(smalltalk.Color._r_g_b_a_(0,1,0,0.25));
					}
					else {
						canvas._setPaint_(smalltalk.Color._r_g_b_a_(1,0,0,0.25));
					}

					canvas['@pathTransform']._loadAffineTransform_(self['@submorphs'][index]['@globalPathTransform']);
					canvas._drawShape_(self['@submorphs'][index]['@outerShape']);
				}

			}
		});
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"redrawNow:on:",{rects:rects,canvas:canvas},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMorph:",
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@submorphs']._remove_(aMorph);
	self._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"removeMorph:",{aMorph:aMorph},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "resetTransformation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@transformation']._loadIdentity();
	self['@owner']._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"resetTransformation",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateBy:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@transformation']._rotateByRadians_(aNumber);
	self['@owner']._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"rotateBy:",{aNumber:aNumber},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByDegrees:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@transformation']._rotateByDegrees_(aNumber); 
	self['@owner']._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"rotateByDegrees:",{aNumber:aNumber},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByRadians:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@transformation']._rotateByRadians_(aNumber);
	self['@owner']._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{aNumber:aNumber},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@transformation']._scaleX_Y_(aPoint['@x'], aPoint['@y']);
	self['@owner']._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{aPoint:aPoint},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleByX:Y:",
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@transformation']._scaleX_Y_(x, y);
	self['@owner']._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"scaleByX:Y:",{x:x,y:y},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@visible'] = true;
	self._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "signalChange:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._handleChange_(evt);
return self}, function($ctx1) {$ctx1.fill(self,"signalChange:",{evt:evt},smalltalk.AthensMorph)})},
messageSends: ["handleChange:"]}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "submorphs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@submorphs"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"submorphs",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "submorphsZIndicesChanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@submorphs'].sort(function(m1, m2) {
		return m2['@zIndex'] < m1['@zIndex'];
	});
	self._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"submorphsZIndicesChanged",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "transformation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@transformation"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"transformation",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "transformedBounds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self['@outerPolygon']._deepCopy()._multiplyBy_(self['@transformation'])._boundingBox(); ;
return self}, function($ctx1) {$ctx1.fill(self,"transformedBounds",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@transformation']._translateX_Y_(aPoint['@x'], aPoint['@y']);
	self['@owner']._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "translateByX:Y:",
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@transformation']._translateX_Y_(x, y);
	self['@owner']._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"translateByX:Y:",{x:x,y:y},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "world",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var morph = self;
	while (!morph._isWorldMorph()) {
		morph = morph['@owner'];
	}
	return morph; ;
return self}, function($ctx1) {$ctx1.fill(self,"world",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "zIndex",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@zIndex"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"zIndex",{},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "zIndex:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@zIndex'] = aNumber;
	self['@owner']._submorphsZIndicesChanged(); ;
return self}, function($ctx1) {$ctx1.fill(self,"zIndex:",{aNumber:aNumber},smalltalk.AthensMorph)})},
messageSends: []}),
smalltalk.AthensMorph);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultOuterShape",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((0).__at((0)))._corner_((50).__at((50)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultOuterShape",{},smalltalk.AthensMorph.klass)})},
messageSends: ["corner:", "@"]}),
smalltalk.AthensMorph.klass);


smalltalk.addClass('AthensBinaryStatusButtonMorph', smalltalk.AthensMorph, ['textMorph', 'isChecked'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "checked:",
fn: function (aBoolean){
var self=this;
var changed;
return smalltalk.withContext(function($ctx1) { 
var $1;
changed=_st(self["@isChecked"]).__eq_eq(_st(aBoolean)._not());
self["@isChecked"]=aBoolean;
$1=changed;
if(smalltalk.assert($1)){
self._signalChange_(self["@isChecked"]);
};
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"checked:",{aBoolean:aBoolean,changed:changed},smalltalk.AthensBinaryStatusButtonMorph)})},
messageSends: ["==", "not", "ifTrue:", "signalChange:", "redraw"]}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._drawStatusOn_(canvas);
self._outerShape_(_st((0).__at((0)))._corner_(_st((15).__plus(_st(self["@textMorph"])._width())).__at((15))));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.AthensBinaryStatusButtonMorph)})},
messageSends: ["drawStatusOn:", "outerShape:", "corner:", "@", "+", "width"]}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseDown:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseDown_.apply(_st(self), [evt]);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseDown:",{evt:evt},smalltalk.AthensBinaryStatusButtonMorph)})},
messageSends: ["handleMouseDown:", "redraw"]}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseEnter.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensBinaryStatusButtonMorph)})},
messageSends: ["handleMouseEnter", "redraw"]}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseLeave.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensBinaryStatusButtonMorph)})},
messageSends: ["handleMouseLeave", "redraw"]}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseUp:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._handleMouseUp_.apply(_st(self), [evt]);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseUp:",{evt:evt},smalltalk.AthensBinaryStatusButtonMorph)})},
messageSends: ["handleMouseUp:", "redraw"]}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._initialize.apply(_st(self), []);
self._initializeText();
self["@isChecked"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensBinaryStatusButtonMorph)})},
messageSends: ["initialize", "initializeText"]}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeText",
fn: function (){
var self=this;
function $AthensTextMorph(){return smalltalk.AthensTextMorph||(typeof AthensTextMorph=="undefined"?nil:AthensTextMorph)}
return smalltalk.withContext(function($ctx1) { 
self["@textMorph"]=_st($AthensTextMorph())._new();
_st(self["@textMorph"])._translateByX_Y_((15),(-4));
_st(self["@textMorph"])._text_("BinaryStatusButtonMorph");
self._addMorph_(self["@textMorph"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeText",{},smalltalk.AthensBinaryStatusButtonMorph)})},
messageSends: ["new", "translateByX:Y:", "text:", "addMorph:"]}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isChecked",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isChecked"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isChecked",{},smalltalk.AthensBinaryStatusButtonMorph)})},
messageSends: []}),
smalltalk.AthensBinaryStatusButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@textMorph"])._text_(aString);
self._layoutChanged();
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.AthensBinaryStatusButtonMorph)})},
messageSends: ["text:", "layoutChanged"]}),
smalltalk.AthensBinaryStatusButtonMorph);



smalltalk.addClass('AthensCheckBoxMorph', smalltalk.AthensBinaryStatusButtonMorph, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "drawStatusOn:",
fn: function (canvas){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
_st(_st(canvas)._pathTransform())._translateBy_((0).__at((1)));
_st(canvas)._setShape_(_st((0).__at((0)))._corner_((10).__at((10))));
_st(canvas)._setPaint_(_st($Color())._cosmoGray());
$1=self["@isMouseDown"];
if(smalltalk.assert($1)){
_st(canvas)._setPaint_(_st($Color())._cosmoDarkGray());
};
_st(canvas)._draw();
_st(_st(canvas)._pathTransform())._translateBy_((0.25).__at((0.25)));
_st(canvas)._setShape_(_st((1).__at((1)))._corner_((9).__at((9))));
$2=self["@hasMouseFocus"];
if(smalltalk.assert($2)){
_st(canvas)._setPaint_(_st($Color())._cosmoLightGray());
} else {
_st(canvas)._setPaint_(_st($Color())._white());
};
_st(canvas)._draw();
$3=self["@isChecked"];
if(smalltalk.assert($3)){
_st(_st(canvas)._pathTransform())._translateBy_((0).__at((0)));
_st(canvas)._setShape_(_st((2).__at((2)))._corner_((8).__at((8))));
_st(canvas)._setPaint_(_st($Color())._black());
_st(canvas)._draw();
};
return self}, function($ctx1) {$ctx1.fill(self,"drawStatusOn:",{canvas:canvas},smalltalk.AthensCheckBoxMorph)})},
messageSends: ["translateBy:", "@", "pathTransform", "setShape:", "corner:", "setPaint:", "cosmoGray", "ifTrue:", "cosmoDarkGray", "draw", "ifTrue:ifFalse:", "cosmoLightGray", "white", "black"]}),
smalltalk.AthensCheckBoxMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseClick:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._checked_(_st(self["@isChecked"])._not());
smalltalk.AthensBinaryStatusButtonMorph.fn.prototype._handleMouseClick_.apply(_st(self), [evt]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensCheckBoxMorph)})},
messageSends: ["checked:", "not", "handleMouseClick:"]}),
smalltalk.AthensCheckBoxMorph);



smalltalk.addClass('AthensRadioButtonMorph', smalltalk.AthensBinaryStatusButtonMorph, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "drawStatusOn:",
fn: function (canvas){
var self=this;
var circle;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
_st(_st(canvas)._pathTransform())._translateBy_((0).__at((3)));
circle=_st(canvas)._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._absolute();
_st($1)._moveTo_((0).__at((5)));
_st($1)._cwArcTo_angle_((10).__at((5)),(180));
$2=_st($1)._cwArcTo_angle_((0).__at((5)),(90));
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(canvas)._setShape_(circle);
_st(canvas)._setPaint_(_st($Color())._cosmoGray());
$3=self["@isMouseDown"];
if(smalltalk.assert($3)){
_st(canvas)._setPaint_(_st($Color())._cosmoDarkGray());
};
_st(canvas)._draw();
_st(_st(canvas)._pathTransform())._translateBy_((0).__at((0.5)));
circle=_st(canvas)._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$4=builder;
_st($4)._absolute();
_st($4)._moveTo_((1).__at((4)));
_st($4)._cwArcTo_angle_((9).__at((4)),(180));
$5=_st($4)._cwArcTo_angle_((1).__at((4)),(90));
return $5;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(canvas)._setShape_(circle);
$6=self["@hasMouseFocus"];
if(smalltalk.assert($6)){
_st(canvas)._setPaint_(_st($Color())._cosmoLightGray());
} else {
_st(canvas)._setPaint_(_st($Color())._white());
};
_st(canvas)._draw();
$7=self["@isChecked"];
if(smalltalk.assert($7)){
_st(_st(canvas)._pathTransform())._translateBy_((0).__at((0.5)));
circle=_st(canvas)._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$8=builder;
_st($8)._absolute();
_st($8)._moveTo_((2).__at((3)));
_st($8)._cwArcTo_angle_((8).__at((3)),(180));
$9=_st($8)._cwArcTo_angle_((2).__at((3)),(90));
return $9;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
circle;
_st(canvas)._setShape_(circle);
_st(canvas)._setPaint_(_st($Color())._black());
_st(canvas)._draw();
};
return self}, function($ctx1) {$ctx1.fill(self,"drawStatusOn:",{canvas:canvas,circle:circle},smalltalk.AthensRadioButtonMorph)})},
messageSends: ["translateBy:", "@", "pathTransform", "createPath:", "absolute", "moveTo:", "cwArcTo:angle:", "setShape:", "setPaint:", "cosmoGray", "ifTrue:", "cosmoDarkGray", "draw", "ifTrue:ifFalse:", "cosmoLightGray", "white", "black"]}),
smalltalk.AthensRadioButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseClick:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._checked_(true);
smalltalk.AthensBinaryStatusButtonMorph.fn.prototype._handleMouseClick_.apply(_st(self), [evt]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensRadioButtonMorph)})},
messageSends: ["checked:", "handleMouseClick:"]}),
smalltalk.AthensRadioButtonMorph);



smalltalk.addClass('AthensHaloMorph', smalltalk.AthensMorph, ['attachedTo', 'font', 'rectPath'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "attachedTo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@attachedTo"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attachedTo",{},smalltalk.AthensHaloMorph)})},
messageSends: []}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "attachedTo:",
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@attachedTo"]=aMorph;
return self}, function($ctx1) {$ctx1.fill(self,"attachedTo:",{aMorph:aMorph},smalltalk.AthensHaloMorph)})},
messageSends: []}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "basicColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._black();
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicColor",{},smalltalk.AthensHaloMorph)})},
messageSends: ["black"]}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (canvas){
var self=this;
var shape;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
shape=_st((0).__at((0)))._corner_((15).__at((15)));
_st(canvas)._setPaint_(self["@color"]);
$1=self["@rectPath"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@rectPath"]=self._generatePathWith_(canvas);
self["@rectPath"];
} else {
$1;
};
_st(canvas)._drawShape_(self["@rectPath"]);
_st(canvas)._setStrokePaint_(_st($Color())._black());
_st(canvas)._drawShape_(self["@rectPath"]);
_st(canvas)._setFont_(self["@font"]);
_st(canvas)._setPaint_(_st($Color())._white());
_st(_st(canvas)._pathTransform())._translateX_Y_((2),(11));
_st(canvas)._drawString_(self._haloText());
self._outerShape_(shape);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas,shape:shape},smalltalk.AthensHaloMorph)})},
messageSends: ["corner:", "@", "setPaint:", "ifNil:", "generatePathWith:", "drawShape:", "setStrokePaint:", "black", "setFont:", "white", "translateX:Y:", "pathTransform", "drawString:", "haloText", "outerShape:"]}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "generatePathWith:",
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st(canvas)._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$2=builder;
_st($2)._absolute();
_st($2)._moveTo_((5).__at((0)));
_st($2)._lineTo_((10).__at((0)));
_st($2)._curveVia_to_((15).__at((0)),(15).__at((5)));
_st($2)._lineTo_((15).__at((10)));
_st($2)._curveVia_to_((15).__at((15)),(10).__at((15)));
_st($2)._lineTo_((5).__at((15)));
_st($2)._curveVia_to_((0).__at((15)),(0).__at((10)));
_st($2)._lineTo_((0).__at((5)));
$3=_st($2)._curveVia_to_((0).__at((0)),(5).__at((0)));
return $3;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"generatePathWith:",{canvas:canvas},smalltalk.AthensHaloMorph)})},
messageSends: ["createPath:", "absolute", "moveTo:", "@", "lineTo:", "curveVia:to:"]}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._color_(self._highlightColor());
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensHaloMorph)})},
messageSends: ["color:", "highlightColor"]}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._color_(self._basicColor());
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensHaloMorph)})},
messageSends: ["color:", "basicColor"]}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._cosmoDarkGray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"highlightColor",{},smalltalk.AthensHaloMorph)})},
messageSends: ["cosmoDarkGray"]}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._initialize.apply(_st(self), []);
self["@visible"]=false;
self["@font"]=_st($LogicalFont())._familyName_size_("FontAwesome","12");
self["@color"]=self._basicColor();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHaloMorph)})},
messageSends: ["initialize", "familyName:size:", "basicColor"]}),
smalltalk.AthensHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isHaloMorph",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isHaloMorph",{},smalltalk.AthensHaloMorph)})},
messageSends: []}),
smalltalk.AthensHaloMorph);



smalltalk.addClass('AthensCloseHaloMorph', smalltalk.AthensHaloMorph, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "haloPosition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(-20).__at((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"haloPosition",{},smalltalk.AthensCloseHaloMorph)})},
messageSends: ["@"]}),
smalltalk.AthensCloseHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "haloText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"haloText",{},smalltalk.AthensCloseHaloMorph)})},
messageSends: []}),
smalltalk.AthensCloseHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseClick:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@attachedTo"])._delete();
_st(self._world())._hideHalos();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensCloseHaloMorph)})},
messageSends: ["delete", "hideHalos", "world"]}),
smalltalk.AthensCloseHaloMorph);



smalltalk.addClass('AthensInspectHaloMorph', smalltalk.AthensHaloMorph, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "haloPosition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(-20).__at((20));
return $1;
}, function($ctx1) {$ctx1.fill(self,"haloPosition",{},smalltalk.AthensInspectHaloMorph)})},
messageSends: ["@"]}),
smalltalk.AthensInspectHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "haloText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"haloText",{},smalltalk.AthensInspectHaloMorph)})},
messageSends: []}),
smalltalk.AthensInspectHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseClick:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@attachedTo"])._inspect();
_st(self._world())._hideHalos();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseClick:",{evt:evt},smalltalk.AthensInspectHaloMorph)})},
messageSends: ["inspect", "hideHalos", "world"]}),
smalltalk.AthensInspectHaloMorph);



smalltalk.addClass('AthensMoveHaloMorph', smalltalk.AthensHaloMorph, ['globalMoveHandler', 'globalUpHandler', 'globalDownHandler'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "haloPosition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(-20).__at((40));
return $1;
}, function($ctx1) {$ctx1.fill(self,"haloPosition",{},smalltalk.AthensMoveHaloMorph)})},
messageSends: ["@"]}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "haloText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"haloText",{},smalltalk.AthensMoveHaloMorph)})},
messageSends: []}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseDown:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._registerGlobalEvent_withCallback_("mouseMove",self["@globalMoveHandler"]);
_st(self._world())._registerGlobalEvent_withCallback_("mouseUp",self["@globalUpHandler"]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseDown:",{evt:evt},smalltalk.AthensMoveHaloMorph)})},
messageSends: ["registerGlobalEvent:withCallback:", "world"]}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseUp:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseMove",self["@globalMoveHandler"]);
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseUp",self["@globalUpHandler"]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseUp:",{evt:evt},smalltalk.AthensMoveHaloMorph)})},
messageSends: ["unregisterGlobalEvent:withCallback:", "world"]}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensHaloMorph.fn.prototype._initialize.apply(_st(self), []);
self["@globalMoveHandler"]=(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._processMouseMove_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
self["@globalUpHandler"]=(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._processMouseUp_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensMoveHaloMorph)})},
messageSends: ["initialize", "processMouseMove:", "processMouseUp:"]}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "processMouseMove:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@attachedTo"])._translateBy_(_st(_st(self["@attachedTo"])._globalPathTransform())._inverseTransform_(_st(evt)._globalPosition()));
_st(self._world())._addHalosTo_(self["@attachedTo"]);
return self}, function($ctx1) {$ctx1.fill(self,"processMouseMove:",{evt:evt},smalltalk.AthensMoveHaloMorph)})},
messageSends: ["translateBy:", "inverseTransform:", "globalPosition", "globalPathTransform", "addHalosTo:", "world"]}),
smalltalk.AthensMoveHaloMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "processMouseUp:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._handleMouseUp_(evt);
return self}, function($ctx1) {$ctx1.fill(self,"processMouseUp:",{evt:evt},smalltalk.AthensMoveHaloMorph)})},
messageSends: ["handleMouseUp:"]}),
smalltalk.AthensMoveHaloMorph);



smalltalk.addClass('AthensRectangleMorph', smalltalk.AthensMorph, ['width', 'height', 'borderColor', 'mouseDownBorderColor', 'mouseFocusBorderColor', 'fillColor', 'mouseDownFillColor', 'mouseFocusFillColor', 'hasSharpBorder', 'shapeInner', 'shapeOuter'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@borderColor'] = aColor;
	self._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aColor:aColor},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var currentFillColor = self['@fillColor'];
	var currentBorderColor = self['@borderColor'];
	
	if (self['@isMouseDown']) {
		if (!self['@mouseDownFillColor']._isNil()) {
			currentFillColor = self['@mouseDownFillColor'];
		}
		
		if (!self['@mouseDownBorderColor']._isNil()) {
			currentBorderColor = self['@mouseDownBorderColor'];
		}
	}
	else if (self['@hasMouseFocus']) {
		if (!self['@mouseFocusFillColor']._isNil()) {
			currentFillColor = self['@mouseFocusFillColor'];
		}
		
		if (!self['@mouseFocusBorderColor']._isNil()) {
			currentBorderColor = self['@mouseFocusBorderColor'];
		}
	}
	
	if (self['@hasSharpBorder']) {
		canvas._setPaint_(currentBorderColor);
		canvas._drawShape_(self['@shapeOuter']);
		canvas._setPaint_(currentFillColor);
		canvas._drawShape_(self['@shapeInner']);
	}
	else {
		canvas._setPaint_(currentFillColor);
		canvas._drawShape_(self['@shapeOuter']);
		canvas._setStrokePaint_(currentBorderColor);
		canvas._drawShape_(self['@shapeOuter']);
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "fillColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@fillColor'] = aColor;
	self._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"fillColor:",{aColor:aColor},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseDown:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.AthensMorph.fn.prototype._handleMouseDown_.apply(_st(self), [evt]);
$1=self._needsRedrawOnMouseDown();
if(smalltalk.assert($1)){
self._redraw();
};
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseDown:",{evt:evt},smalltalk.AthensRectangleMorph)})},
messageSends: ["handleMouseDown:", "ifTrue:", "redraw", "needsRedrawOnMouseDown"]}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.AthensMorph.fn.prototype._handleMouseEnter.apply(_st(self), []);
$1=self._needsRedrawOnMouseFocus();
if(smalltalk.assert($1)){
self._redraw();
};
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensRectangleMorph)})},
messageSends: ["handleMouseEnter", "ifTrue:", "redraw", "needsRedrawOnMouseFocus"]}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.AthensMorph.fn.prototype._handleMouseLeave.apply(_st(self), []);
$1=self._needsRedrawOnMouseFocus();
if(smalltalk.assert($1)){
self._redraw();
};
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensRectangleMorph)})},
messageSends: ["handleMouseLeave", "ifTrue:", "redraw", "needsRedrawOnMouseFocus"]}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseUp:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.AthensMorph.fn.prototype._handleMouseUp_.apply(_st(self), [evt]);
$1=self._needsRedrawOnMouseDown();
if(smalltalk.assert($1)){
self._redraw();
};
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseUp:",{evt:evt},smalltalk.AthensRectangleMorph)})},
messageSends: ["handleMouseUp:", "ifTrue:", "redraw", "needsRedrawOnMouseDown"]}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "hasSharpBorder",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@hasSharpBorder"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasSharpBorder",{},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "hasSharpBorder:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@hasSharpBorder'] = aBoolean;
	self._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"hasSharpBorder:",{aBoolean:aBoolean},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@height'] = aNumber;
	self._layoutChanged();
	self._outerShapeChanged();
	self._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumber:aNumber},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensMorph.fn.prototype._initialize.apply(_st(self), []);
self["@height"]=(50);
self["@width"]=self["@height"];
self["@borderColor"]=_st($Color())._black();
self["@fillColor"]=_st($Color())._white();
self["@mouseFocusFillColor"]=nil;
self["@mouseDownFillColor"]=self["@mouseFocusFillColor"];
self["@mouseFocusBorderColor"]=self["@mouseDownFillColor"];
self["@mouseDownBorderColor"]=self["@mouseFocusBorderColor"];
self["@hasSharpBorder"]=false;
self._outerShapeChanged();
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensRectangleMorph)})},
messageSends: ["initialize", "black", "white", "outerShapeChanged", "redraw"]}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseDownBorderColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mouseDownBorderColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"mouseDownBorderColor:",{aColor:aColor},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseDownFillColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mouseDownFillColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"mouseDownFillColor:",{aColor:aColor},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseFocusBorderColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mouseFocusBorderColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"mouseFocusBorderColor:",{aColor:aColor},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseFocusFillColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mouseFocusFillColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"mouseFocusFillColor:",{aColor:aColor},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "needsRedrawOnMouseDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self['@mouseDownFillColor']._notNil() || self['@mouseDownBorderColor']._notNil(); ;
return self}, function($ctx1) {$ctx1.fill(self,"needsRedrawOnMouseDown",{},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "needsRedrawOnMouseFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self['@mouseFocusFillColor']._notNil() || self['@mouseFocusBorderColor']._notNil(); ;
return self}, function($ctx1) {$ctx1.fill(self,"needsRedrawOnMouseFocus",{},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "outerShapeChanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var zero = 0, one = 1, width = self._width();
	var innerWidth = width - 1;
	self['@shapeOuter'] = zero.__at(zero)._corner_(width.__at(self['@height']));
	self['@shapeInner'] = one.__at(one)._corner_(innerWidth.__at(self['@height'] - 1));
	self._outerShape_(self['@shapeOuter']); ;
return self}, function($ctx1) {$ctx1.fill(self,"outerShapeChanged",{},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@width'] = aNumber;
	self._layoutChanged();
	self._outerShapeChanged();
	self._redraw(); ;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},smalltalk.AthensRectangleMorph)})},
messageSends: []}),
smalltalk.AthensRectangleMorph);


smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._width_(_st(aPoint)._x());
_st($2)._height_(_st(aPoint)._y());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.AthensRectangleMorph.klass)})},
messageSends: ["width:", "x", "new", "height:", "y", "yourself"]}),
smalltalk.AthensRectangleMorph.klass);


smalltalk.addClass('AthensButtonMorph', smalltalk.AthensRectangleMorph, ['textMorph'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._initialize.apply(_st(self), []);
self._initializeTextMorph();
self._initializeColors();
self["@hasSharpBorder"]=true;
self._layoutChanged();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensButtonMorph)})},
messageSends: ["initialize", "initializeTextMorph", "initializeColors", "layoutChanged"]}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeColors",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@fillColor"]=_st($Color())._cosmoBlue();
self["@mouseFocusFillColor"]=_st($Color())._cosmoMiddleBlue();
self["@mouseFocusBorderColor"]=_st($Color())._cosmoDarkBlue();
self["@mouseDownBorderColor"]=self["@mouseFocusBorderColor"];
self["@mouseDownFillColor"]=self["@mouseDownBorderColor"];
self["@borderColor"]=self["@mouseDownFillColor"];
_st(self["@textMorph"])._fontColor_(_st($Color())._white());
return self}, function($ctx1) {$ctx1.fill(self,"initializeColors",{},smalltalk.AthensButtonMorph)})},
messageSends: ["cosmoBlue", "cosmoMiddleBlue", "cosmoDarkBlue", "fontColor:", "white"]}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeTextMorph",
fn: function (){
var self=this;
function $AthensTextMorph(){return smalltalk.AthensTextMorph||(typeof AthensTextMorph=="undefined"?nil:AthensTextMorph)}
return smalltalk.withContext(function($ctx1) { 
self["@textMorph"]=_st($AthensTextMorph())._new();
_st(self["@textMorph"])._text_("ButtonMorph");
self._addMorph_(self["@textMorph"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeTextMorph",{},smalltalk.AthensButtonMorph)})},
messageSends: ["new", "text:", "addMorph:"]}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutChanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.AthensRectangleMorph.fn.prototype._layoutChanged.apply(_st(self), []);
$1=self["@textMorph"];
_st($1)._resetTransformation();
$2=_st($1)._translateByX_Y_(_st(_st(self["@width"]).__minus(_st(self["@textMorph"])._width())).__slash((2)),_st(_st(self["@height"]).__minus(_st(self["@textMorph"])._height())).__slash((2)));
return self}, function($ctx1) {$ctx1.fill(self,"layoutChanged",{},smalltalk.AthensButtonMorph)})},
messageSends: ["layoutChanged", "resetTransformation", "translateByX:Y:", "/", "-", "width", "height"]}),
smalltalk.AthensButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@textMorph"])._text_(aString);
self._layoutChanged();
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.AthensButtonMorph)})},
messageSends: ["text:", "layoutChanged"]}),
smalltalk.AthensButtonMorph);



smalltalk.addClass('AthensIconButtonMorph', smalltalk.AthensButtonMorph, ['iconMorph'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "icon:",
fn: function (anIconMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@iconMorph"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self["@iconMorph"])._delete();
};
self["@iconMorph"]=anIconMorph;
_st(self["@iconMorph"])._fontColor_(_st(self["@textMorph"])._fontColor());
self._addMorph_(self["@iconMorph"]);
self._layoutChanged();
return self}, function($ctx1) {$ctx1.fill(self,"icon:",{anIconMorph:anIconMorph},smalltalk.AthensIconButtonMorph)})},
messageSends: ["ifNotNil:", "delete", "fontColor:", "fontColor", "addMorph:", "layoutChanged"]}),
smalltalk.AthensIconButtonMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutChanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
smalltalk.AthensButtonMorph.fn.prototype._layoutChanged.apply(_st(self), []);
$1=self["@iconMorph"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self["@textMorph"])._translateByX_Y_(_st(_st(_st(self["@iconMorph"])._width()).__slash((2))).__plus((3.5)),(0));
$2=self["@iconMorph"];
_st($2)._resetTransformation();
$3=_st($2)._translateByX_Y_(_st(_st(_st(_st(self["@width"]).__minus(_st(self["@textMorph"])._width())).__minus(_st(self["@iconMorph"])._width())).__slash((2))).__minus((0.5)),_st(_st(_st(self["@height"]).__minus(_st(self["@textMorph"])._height())).__slash((2))).__minus((1)));
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"layoutChanged",{},smalltalk.AthensIconButtonMorph)})},
messageSends: ["layoutChanged", "ifNotNil:", "translateByX:Y:", "+", "/", "width", "resetTransformation", "-", "height"]}),
smalltalk.AthensIconButtonMorph);



smalltalk.addClass('AthensEditableTextMorph', smalltalk.AthensRectangleMorph, ['lines', 'selectionStart', 'selectionLength', 'keyHandlers', 'font', 'virtualLines', 'virtualSurface', 'virtualCanvas', 'maxWidth', 'isInSelectionMode', 'selectionStartOffset', 'lineHeight'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "bindKeyHandlers",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Dictionary())._new();
_st($1)._at_put_((8),(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyBackspace_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st($1)._at_put_((46),(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyDelete_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st($1)._at_put_((37),(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyLeftArrow_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st($1)._at_put_((38),(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyUpArrow_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st($1)._at_put_((39),(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyRightArrow_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st($1)._at_put_((40),(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyDownArrow_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
$2=_st($1)._yourself();
self["@keyHandlers"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"bindKeyHandlers",{},smalltalk.AthensEditableTextMorph)})},
messageSends: ["at:put:", "handleKeyBackspace:", "new", "handleKeyDelete:", "handleKeyLeftArrow:", "handleKeyUpArrow:", "handleKeyRightArrow:", "handleKeyDownArrow:", "yourself"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "charsBeforeLine:",
fn: function (aNumber){
var self=this;
var sum;
return smalltalk.withContext(function($ctx1) { 
var $1;
sum=(0);
_st((1)._to_(_st(aNumber).__minus((1))))._do_((function(lineIndex){
return smalltalk.withContext(function($ctx2) {
sum=_st(sum).__plus(_st(_st(self["@virtualLines"])._at_(lineIndex))._size());
return sum;
}, function($ctx2) {$ctx2.fillBlock({lineIndex:lineIndex},$ctx1)})}));
$1=sum;
return $1;
}, function($ctx1) {$ctx1.fill(self,"charsBeforeLine:",{aNumber:aNumber,sum:sum},smalltalk.AthensTextAreaMorph)})},
messageSends: ["do:", "+", "size", "at:", "to:", "-"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawCursorOn:",
fn: function (canvas){
var self=this;
var shape,pixelPosition;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(canvas)._pathTransform())._loadIdentity();
_st(canvas)._setPaint_(_st($Color())._black());
pixelPosition=self._pixelBeforePosition_(_st(self["@selectionStart"]).__plus(self["@selectionLength"]));
shape=_st(pixelPosition)._corner_(_st(pixelPosition).__plus((1).__at(self["@lineHeight"])));
_st(canvas)._drawShape_(shape);
return self}, function($ctx1) {$ctx1.fill(self,"drawCursorOn:",{canvas:canvas,shape:shape,pixelPosition:pixelPosition},smalltalk.AthensTextAreaMorph)})},
messageSends: ["loadIdentity", "pathTransform", "setPaint:", "black", "pixelBeforePosition:", "+", "corner:", "@", "drawShape:"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (canvas){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._drawOn_.apply(_st(self), [canvas]);
self._drawSelectionOn_(canvas);
_st(canvas)._setFont_(self["@font"]);
_st(canvas)._setPaint_(_st($Color())._black());
_st(self["@virtualLines"])._do_((function(line){
return smalltalk.withContext(function($ctx2) {
_st(_st(canvas)._pathTransform())._translateX_Y_((0),self["@lineHeight"]);
return _st(canvas)._drawString_(_st(line)._text());
}, function($ctx2) {$ctx2.fillBlock({line:line},$ctx1)})}));
self._drawCursorOn_(canvas);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.AthensEditableTextMorph)})},
messageSends: ["drawOn:", "drawSelectionOn:", "setFont:", "setPaint:", "black", "do:", "translateX:Y:", "pathTransform", "drawString:", "text", "drawCursorOn:"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawSelectionOn:",
fn: function (canvas){
var self=this;
var x,y,selOffsets,selStart,selStop;
return smalltalk.withContext(function($ctx1) { 
selOffsets=self._selectionStartStop();
selStart=_st(selOffsets)._first();
selStop=_st(selOffsets)._last();
x=_st(selStart)._x();
y=_st(selStart)._y();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(y).__eq_eq(_st(selStop)._y());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
self._drawSelectionOn_from_to_in_(canvas,x,self["@maxWidth"],y);
y=_st(y).__plus(self["@lineHeight"]);
y;
x=(0);
return x;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._drawSelectionOn_from_to_in_(canvas,x,_st(selStop)._x(),y);
return self}, function($ctx1) {$ctx1.fill(self,"drawSelectionOn:",{canvas:canvas,x:x,y:y,selOffsets:selOffsets,selStart:selStart,selStop:selStop},smalltalk.AthensEditableTextMorph)})},
messageSends: ["selectionStartStop", "first", "last", "x", "y", "whileFalse:", "drawSelectionOn:from:to:in:", "+", "=="]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawSelectionOn:from:to:in:",
fn: function (canvas,x1,x2,y){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(canvas)._setPaint_(_st($Color())._cosmoBlue());
_st(canvas)._drawShape_(_st(_st(x1).__at(y))._corner_(_st(x2).__at(_st(y).__plus(self["@lineHeight"]))));
return self}, function($ctx1) {$ctx1.fill(self,"drawSelectionOn:from:to:in:",{canvas:canvas,x1:x1,x2:x2,y:y},smalltalk.AthensEditableTextMorph)})},
messageSends: ["setPaint:", "cosmoBlue", "drawShape:", "corner:", "@", "+"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "generateVirtualLines:",
fn: function (aString){
var self=this;
var text;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $AthensVirtualTextAreaLine(){return smalltalk.AthensVirtualTextAreaLine||(typeof AthensVirtualTextAreaLine=="undefined"?nil:AthensVirtualTextAreaLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@virtualLines"]=_st($OrderedCollection())._new();
text=aString;
_st(_st(text)._lines())._do_((function(lineText){
var line,remainingText,emptyLine;
return smalltalk.withContext(function($ctx2) {
remainingText=lineText;
remainingText;
emptyLine=_st(_st(lineText)._size()).__eq_eq((0));
emptyLine;
_st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(remainingText)._size()).__gt((0))).__or(emptyLine);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx3) {
line=_st($AthensVirtualTextAreaLine())._forTextAreaMorph_(self);
line;
remainingText=_st(remainingText)._copyFrom_to_(_st(_st(line)._populateWith_(remainingText)).__plus((1)),_st(remainingText)._size());
remainingText;
$1=_st(_st(self["@virtualLines"])._size()).__gt((0));
if(smalltalk.assert($1)){
_st(_st(self["@virtualLines"])._last())._nextLine_(line);
};
_st(self["@virtualLines"])._add_(line);
emptyLine=false;
return emptyLine;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st(self["@virtualLines"])._ifEmpty_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self["@virtualLines"])._add_(_st($AthensVirtualTextAreaLine())._forTextAreaMorph_(self));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return _st(_st(self["@virtualLines"])._last())._hasLineBreak_(true);
}, function($ctx2) {$ctx2.fillBlock({lineText:lineText,line:line,remainingText:remainingText,emptyLine:emptyLine},$ctx1)})}));
_st(self["@virtualLines"])._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@virtualLines"])._add_(_st($AthensVirtualTextAreaLine())._forTextAreaMorph_(self));
return _st(_st(self["@virtualLines"])._last())._hasLineBreak_(true);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._updateHeight();
return self}, function($ctx1) {$ctx1.fill(self,"generateVirtualLines:",{aString:aString,text:text},smalltalk.AthensEditableTextMorph)})},
messageSends: ["new", "do:", "==", "size", "whileTrue:", "forTextAreaMorph:", "copyFrom:to:", "+", "populateWith:", "ifTrue:", "nextLine:", "last", ">", "add:", "|", "ifEmpty:", "hasLineBreak:", "lines", "updateHeight"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyBackspace:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@selectionLength"]).__eq_eq((0));
if(smalltalk.assert($1)){
self._removeCharAt_(_st(self["@selectionStart"]).__minus((1)));
self._moveCursorBy_((-1));
} else {
self._removeSelection();
};
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyBackspace:",{evt:evt},smalltalk.AthensEditableTextMorph)})},
messageSends: ["ifTrue:ifFalse:", "removeCharAt:", "-", "moveCursorBy:", "removeSelection", "==", "redraw"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyDelete:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@selectionLength"]).__eq_eq((0));
if(smalltalk.assert($1)){
self._removeCharAt_(self["@selectionStart"]);
} else {
self._removeSelection();
};
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyDelete:",{evt:evt},smalltalk.AthensEditableTextMorph)})},
messageSends: ["ifTrue:ifFalse:", "removeCharAt:", "removeSelection", "==", "redraw"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyDown:",
fn: function (evt){
var self=this;
var handler;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._handleKeyDown_.apply(_st(self), [evt]);
handler=_st(self["@keyHandlers"])._at_ifAbsent_(_st(evt)._keyCode(),(function(){
return smalltalk.withContext(function($ctx2) {
return (function(ev){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({ev:ev},$ctx2)})});
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(handler)._value_(evt);
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyDown:",{evt:evt,handler:handler},smalltalk.AthensTextAreaMorph)})},
messageSends: ["handleKeyDown:", "at:ifAbsent:", "keyCode", "value:"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyDownArrow:",
fn: function (evt){
var self=this;
var line,lineIndex,nextLine,nextLineIndex,lineOffset,positionOffset;
return smalltalk.withContext(function($ctx1) { 
lineIndex=self._lineForPosition_(self["@selectionStart"]);
line=_st(self["@virtualLines"])._at_(lineIndex);
lineOffset=self._charsBeforeLine_(lineIndex);
positionOffset=_st(line)._pixelOffsetBefore_(_st(self["@selectionStart"]).__minus(lineOffset));
nextLineIndex=_st(_st(lineIndex).__plus((1)))._min_(_st(self["@virtualLines"])._size());
nextLine=_st(self["@virtualLines"])._at_(nextLineIndex);
self._select_(_st(self._charsBeforeLine_(nextLineIndex)).__plus(_st(nextLine)._positionForPixelOffset_(positionOffset)));
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyDownArrow:",{evt:evt,line:line,lineIndex:lineIndex,nextLine:nextLine,nextLineIndex:nextLineIndex,lineOffset:lineOffset,positionOffset:positionOffset},smalltalk.AthensEditableTextMorph)})},
messageSends: ["lineForPosition:", "at:", "charsBeforeLine:", "pixelOffsetBefore:", "-", "min:", "size", "+", "select:", "positionForPixelOffset:"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyInput:",
fn: function (evt){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@selectionLength"]).__eq_eq((0));
if(! smalltalk.assert($1)){
self._removeSelection();
};
self._insertString_at_(_st($String())._fromCharCode_(_st(evt)._keyCode()),self["@selectionStart"]);
self._moveCursorBy_((1));
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyInput:",{evt:evt},smalltalk.AthensEditableTextMorph)})},
messageSends: ["ifFalse:", "removeSelection", "==", "insertString:at:", "fromCharCode:", "keyCode", "moveCursorBy:", "redraw"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyLeftArrow:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._select_(_st(self["@selectionStart"]).__minus((1)));
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyLeftArrow:",{evt:evt},smalltalk.AthensEditableTextMorph)})},
messageSends: ["select:", "-"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyPress:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._handleKeyPress_.apply(_st(self), [evt]);
self._handleKeyInput_(evt);
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyPress:",{evt:evt},smalltalk.AthensTextAreaMorph)})},
messageSends: ["handleKeyPress:", "handleKeyInput:"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyRightArrow:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._select_(_st(_st(self["@selectionStart"]).__plus(self["@selectionLength"])).__plus((1)));
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyRightArrow:",{evt:evt},smalltalk.AthensEditableTextMorph)})},
messageSends: ["select:", "+"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyUpArrow:",
fn: function (evt){
var self=this;
var line,lineIndex,nextLine,nextLineIndex,lineOffset,positionOffset;
return smalltalk.withContext(function($ctx1) { 
lineIndex=self._lineForPosition_(self["@selectionStart"]);
line=_st(self["@virtualLines"])._at_(lineIndex);
lineOffset=self._charsBeforeLine_(lineIndex);
positionOffset=_st(line)._pixelOffsetBefore_(_st(self["@selectionStart"]).__minus(lineOffset));
nextLineIndex=_st(_st(lineIndex).__minus((1)))._max_((1));
nextLine=_st(self["@virtualLines"])._at_(nextLineIndex);
self._select_(_st(self._charsBeforeLine_(nextLineIndex)).__plus(_st(nextLine)._positionForPixelOffset_(positionOffset)));
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyUpArrow:",{evt:evt,line:line,lineIndex:lineIndex,nextLine:nextLine,nextLineIndex:nextLineIndex,lineOffset:lineOffset,positionOffset:positionOffset},smalltalk.AthensEditableTextMorph)})},
messageSends: ["lineForPosition:", "at:", "charsBeforeLine:", "pixelOffsetBefore:", "-", "max:", "select:", "+", "positionForPixelOffset:"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseDown:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._handleMouseDown_.apply(_st(self), [evt]);
self["@isInSelectionMode"]=true;
self["@selectionStart"]=self._positionForPixel_(_st(evt)._position());
self["@selectionLength"]=(0);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseDown:",{evt:evt},smalltalk.AthensEditableTextMorph)})},
messageSends: ["handleMouseDown:", "positionForPixel:", "position", "redraw"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
fn: function (){
var self=this;
function $AthensMorphicEvent(){return smalltalk.AthensMorphicEvent||(typeof AthensMorphicEvent=="undefined"?nil:AthensMorphicEvent)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._handleMouseLeave.apply(_st(self), []);
self._handleMouseUp_(_st($AthensMorphicEvent())._new());
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensTextAreaMorph)})},
messageSends: ["handleMouseLeave", "handleMouseUp:", "new"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseMove:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.AthensRectangleMorph.fn.prototype._handleMouseMove_.apply(_st(self), [evt]);
$1=self["@isInSelectionMode"];
if(smalltalk.assert($1)){
var selectionStop;
selectionStop=self._positionForPixel_(_st(evt)._position());
selectionStop;
self["@selectionLength"]=_st(selectionStop).__minus(self["@selectionStart"]);
self["@selectionLength"];
self._redraw();
};
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseMove:",{evt:evt},smalltalk.AthensEditableTextMorph)})},
messageSends: ["handleMouseMove:", "ifTrue:", "positionForPixel:", "position", "-", "redraw"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseUp:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._handleMouseUp_.apply(_st(self), [evt]);
self["@isInSelectionMode"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseUp:",{evt:evt},smalltalk.AthensTextAreaMorph)})},
messageSends: ["handleMouseUp:"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._initialize.apply(_st(self), []);
self._initializeVariables();
self._initializeVirtualSurface();
self._bindKeyHandlers();
self._text_("");
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensEditableTextMorph)})},
messageSends: ["initialize", "initializeVariables", "initializeVirtualSurface", "bindKeyHandlers", "text:"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeVariables",
fn: function (){
var self=this;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@font"]=_st($LogicalFont())._familyName_size_("Arial",(15));
self["@virtualLines"]=_st($OrderedCollection())._new();
self["@maxWidth"]=(100);
self["@lineHeight"]=(15);
self["@isInSelectionMode"]=false;
self["@hasSharpBorder"]=true;
self["@fillColor"]=_st($Color())._transparent();
self["@borderColor"]=self["@fillColor"];
self["@selectionStart"]=(1);
self["@selectionLength"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initializeVariables",{},smalltalk.AthensEditableTextMorph)})},
messageSends: ["familyName:size:", "new", "transparent"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeVirtualSurface",
fn: function (){
var self=this;
function $AthensHTMLSurface(){return smalltalk.AthensHTMLSurface||(typeof AthensHTMLSurface=="undefined"?nil:AthensHTMLSurface)}
return smalltalk.withContext(function($ctx1) { 
self["@virtualSurface"]=_st($AthensHTMLSurface())._extent_((0).__at((0)));
_st(self["@virtualSurface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
self["@virtualCanvas"]=canvas;
self["@virtualCanvas"];
return _st(canvas)._setFont_(self["@font"]);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeVirtualSurface",{},smalltalk.AthensTextAreaMorph)})},
messageSends: ["extent:", "@", "drawDuring:", "setFont:"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "insertString:at:",
fn: function (aString,position){
var self=this;
var content;
return smalltalk.withContext(function($ctx1) { 
content=self._text();
self._text_(_st(_st(_st(content)._copyFrom_to_((1),_st(position).__minus((1)))).__comma(aString)).__comma(_st(content)._copyFrom_to_(position,_st(content)._size())));
return self}, function($ctx1) {$ctx1.fill(self,"insertString:at:",{aString:aString,position:position,content:content},smalltalk.AthensTextAreaMorph)})},
messageSends: ["text", "text:", ",", "copyFrom:to:", "size", "-"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "lineForPixelOffset:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(aNumber).__slash(self["@lineHeight"]))._floor()).__plus((1)))._min_(_st(self["@virtualLines"])._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineForPixelOffset:",{aNumber:aNumber},smalltalk.AthensTextAreaMorph)})},
messageSends: ["min:", "size", "+", "floor", "/"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "lineForPosition:",
fn: function (aNumber){
var self=this;
var currentPosition;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
currentPosition=(0);
_st((1)._to_(_st(self["@virtualLines"])._size()))._do_((function(lineIndex){
var line;
return smalltalk.withContext(function($ctx2) {
line=_st(self["@virtualLines"])._at_(lineIndex);
line;
$1=_st(_st(_st(currentPosition).__plus(_st(line)._size())).__plus((1))).__gt(aNumber);
if(smalltalk.assert($1)){
$2=lineIndex;
throw $early=[$2];
};
currentPosition=_st(currentPosition).__plus(_st(line)._size());
return currentPosition;
}, function($ctx2) {$ctx2.fillBlock({lineIndex:lineIndex,line:line},$ctx1)})}));
self._error_("line not found");
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"lineForPosition:",{aNumber:aNumber,currentPosition:currentPosition},smalltalk.AthensEditableTextMorph)})},
messageSends: ["do:", "at:", "ifTrue:", ">", "+", "size", "to:", "error:"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "maxWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@maxWidth"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxWidth",{},smalltalk.AthensTextAreaMorph)})},
messageSends: []}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "moveCursorBy:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selectionStart"]=_st(_st(_st(self["@selectionStart"]).__plus(aNumber))._max_((1)))._min_(self._size());
self["@selectionLength"]=(0);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"moveCursorBy:",{aNumber:aNumber},smalltalk.AthensTextAreaMorph)})},
messageSends: ["min:", "size", "max:", "+", "redraw"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "pixelAfterPosition:",
fn: function (aNumber){
var self=this;
var currentPosition;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
currentPosition=(0);
_st(self["@virtualLines"])._do_((function(line){
var previousLine;
return smalltalk.withContext(function($ctx2) {
$1=_st(currentPosition).__gt(aNumber);
if(smalltalk.assert($1)){
$2=_st(previousLine)._pixelOffsetAfter_(_st(_st(aNumber).__minus(currentPosition)).__plus(_st(line)._size()));
throw $early=[$2];
};
currentPosition=_st(currentPosition).__plus(_st(line)._size());
currentPosition;
previousLine=line;
return previousLine;
}, function($ctx2) {$ctx2.fillBlock({line:line,previousLine:previousLine},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"pixelAfterPosition:",{aNumber:aNumber,currentPosition:currentPosition},smalltalk.AthensTextAreaMorph)})},
messageSends: ["do:", "ifTrue:", "pixelOffsetAfter:", "+", "size", "-", ">"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "pixelBeforePosition:",
fn: function (aNumber){
var self=this;
var currentPosition;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
currentPosition=(0);
_st((1)._to_(_st(self["@virtualLines"])._size()))._do_((function(lineIndex){
var line;
return smalltalk.withContext(function($ctx2) {
line=_st(self["@virtualLines"])._at_(lineIndex);
line;
$1=_st(_st(_st(currentPosition).__plus(_st(line)._size())).__plus((1))).__gt(aNumber);
if(smalltalk.assert($1)){
$2=_st(_st(line)._pixelOffsetBefore_(_st(aNumber).__minus(currentPosition))).__at(self._pixelOffsetForLine_(lineIndex));
throw $early=[$2];
};
currentPosition=_st(currentPosition).__plus(_st(line)._size());
return currentPosition;
}, function($ctx2) {$ctx2.fillBlock({lineIndex:lineIndex,line:line},$ctx1)})}));
self._error_("pixel not found");
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"pixelBeforePosition:",{aNumber:aNumber,currentPosition:currentPosition},smalltalk.AthensTextAreaMorph)})},
messageSends: ["do:", "at:", "ifTrue:", "@", "pixelOffsetForLine:", "pixelOffsetBefore:", "-", ">", "+", "size", "to:", "error:"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "pixelOffsetForLine:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aNumber).__minus((1))).__star(self["@lineHeight"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"pixelOffsetForLine:",{aNumber:aNumber},smalltalk.AthensTextAreaMorph)})},
messageSends: ["*", "-"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "positionForPixel:",
fn: function (aPoint){
var self=this;
var lineIndex,lineOffset;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
lineIndex=self._lineForPixelOffset_(_st(aPoint)._y());
lineOffset=_st(_st(self["@virtualLines"])._at_(lineIndex))._positionForPixelOffset_(_st(aPoint)._x());
$1=_st(lineOffset).__eq_eq((-1));
if(smalltalk.assert($1)){
$2=_st(self._charsBeforeLine_(_st(lineIndex).__plus((1)))).__plus((1));
return $2;
} else {
$3=_st(lineOffset).__plus(self._charsBeforeLine_(lineIndex));
return $3;
};
return self}, function($ctx1) {$ctx1.fill(self,"positionForPixel:",{aPoint:aPoint,lineIndex:lineIndex,lineOffset:lineOffset},smalltalk.AthensTextAreaMorph)})},
messageSends: ["lineForPixelOffset:", "y", "positionForPixelOffset:", "x", "at:", "ifTrue:ifFalse:", "+", "charsBeforeLine:", "=="]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "removeCharAt:",
fn: function (position){
var self=this;
var content;
return smalltalk.withContext(function($ctx1) { 
content=self._text();
self._text_(_st(_st(content)._copyFrom_to_((1),_st(position).__minus((1)))).__comma(_st(content)._copyFrom_to_(_st(position).__plus((1)),_st(content)._size())));
return self}, function($ctx1) {$ctx1.fill(self,"removeCharAt:",{position:position,content:content},smalltalk.AthensTextAreaMorph)})},
messageSends: ["text", "text:", ",", "copyFrom:to:", "+", "size", "-"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFrom:to:",
fn: function (start,stop){
var self=this;
var content;
return smalltalk.withContext(function($ctx1) { 
content=self._text();
self._text_(_st(_st(content)._copyFrom_to_((1),_st(start).__minus((1)))).__comma(_st(content)._copyFrom_to_(_st(stop).__plus((1)),_st(content)._size())));
return self}, function($ctx1) {$ctx1.fill(self,"removeFrom:to:",{start:start,stop:stop,content:content},smalltalk.AthensEditableTextMorph)})},
messageSends: ["text", "text:", ",", "copyFrom:to:", "+", "size", "-"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelection",
fn: function (){
var self=this;
var selStart,selStop;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@selectionLength"]).__gt((0));
if(smalltalk.assert($1)){
selStart=self["@selectionStart"];
selStart;
selStop=_st(_st(self["@selectionStart"]).__plus(self["@selectionLength"])).__minus((1));
selStop;
} else {
selStart=_st(self["@selectionStart"]).__plus(self["@selectionLength"]);
selStart;
selStop=_st(self["@selectionStart"]).__minus((1));
selStop;
};
self._removeFrom_to_(selStart,selStop);
self._select_(selStart);
return self}, function($ctx1) {$ctx1.fill(self,"removeSelection",{selStart:selStart,selStop:selStop},smalltalk.AthensEditableTextMorph)})},
messageSends: ["ifTrue:ifFalse:", "-", "+", ">", "removeFrom:to:", "select:"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selectionStart"]=_st(_st(aNumber)._max_((1)))._min_(self._size());
self["@selectionLength"]=(0);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"select:",{aNumber:aNumber},smalltalk.AthensTextAreaMorph)})},
messageSends: ["min:", "size", "max:", "redraw"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionStartStop",
fn: function (){
var self=this;
var selStart,selStop;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
selStart=self._pixelBeforePosition_(self["@selectionStart"]);
selStop=self._pixelBeforePosition_(_st(self["@selectionStart"]).__plus(self["@selectionLength"]));
$1=_st(self["@selectionLength"]).__lt((0));
if(smalltalk.assert($1)){
var tmp;
tmp=selStart;
tmp;
selStart=selStop;
selStart;
selStop=tmp;
selStop;
};
$2=[selStart,selStop];
return $2;
}, function($ctx1) {$ctx1.fill(self,"selectionStartStop",{selStart:selStart,selStop:selStop},smalltalk.AthensEditableTextMorph)})},
messageSends: ["pixelBeforePosition:", "+", "ifTrue:", "<"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._text())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.AthensTextAreaMorph)})},
messageSends: ["size", "text"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
fn: function (){
var self=this;
var text;
return smalltalk.withContext(function($ctx1) { 
var $1;
text="";
_st(self["@virtualLines"])._do_((function(line){
return smalltalk.withContext(function($ctx2) {
text=_st(text).__comma(_st(line)._text());
return text;
}, function($ctx2) {$ctx2.fillBlock({line:line},$ctx1)})}));
$1=text;
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{text:text},smalltalk.AthensTextAreaMorph)})},
messageSends: ["do:", ",", "text"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._generateVirtualLines_(aString);
$1=_st(self["@selectionStart"]).__gt(_st(aString)._size());
if(smalltalk.assert($1)){
self._select_((1));
};
self._signalChange_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.AthensEditableTextMorph)})},
messageSends: ["generateVirtualLines:", "ifTrue:", "select:", ">", "size", "signalChange:"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "updateHeight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._height_(_st(_st(_st(self["@virtualLines"])._size()).__star(self["@lineHeight"])).__plus((3)));
return self}, function($ctx1) {$ctx1.fill(self,"updateHeight",{},smalltalk.AthensEditableTextMorph)})},
messageSends: ["height:", "+", "*", "size"]}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "virtualCanvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@virtualCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"virtualCanvas",{},smalltalk.AthensTextAreaMorph)})},
messageSends: []}),
smalltalk.AthensEditableTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._width_.apply(_st(self), [aNumber]);
self["@maxWidth"]=aNumber;
self._text_(self._text());
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},smalltalk.AthensEditableTextMorph)})},
messageSends: ["width:", "text:", "text", "redraw"]}),
smalltalk.AthensEditableTextMorph);



smalltalk.addClass('AthensImageMorph', smalltalk.AthensRectangleMorph, ['bitmapPaint', 'url'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "createBitmapPaint",
fn: function (){
var self=this;
var virtualSurface;
function $AthensHTMLSurface(){return smalltalk.AthensHTMLSurface||(typeof AthensHTMLSurface=="undefined"?nil:AthensHTMLSurface)}
function $Image(){return smalltalk.Image||(typeof Image=="undefined"?nil:Image)}
return smalltalk.withContext(function($ctx1) { 
virtualSurface=_st($AthensHTMLSurface())._extent_((0).__at((0)));
_st(virtualSurface)._createBitmapPaint_afterLoading_(_st($Image())._fromUrl_(self["@url"]),(function(paint){
return smalltalk.withContext(function($ctx2) {
self["@bitmapPaint"]=paint;
self["@bitmapPaint"];
self._height_(_st(self["@bitmapPaint"])._height());
self._width_(_st(self["@bitmapPaint"])._width());
return self._redraw();
}, function($ctx2) {$ctx2.fillBlock({paint:paint},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"createBitmapPaint",{virtualSurface:virtualSurface},smalltalk.AthensImageMorph)})},
messageSends: ["extent:", "@", "createBitmapPaint:afterLoading:", "fromUrl:", "height:", "height", "width:", "width", "redraw"]}),
smalltalk.AthensImageMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (canvas){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.AthensRectangleMorph.fn.prototype._drawOn_.apply(_st(self), [canvas]);
$1=_st(self["@bitmapPaint"])._notNil();
if(smalltalk.assert($1)){
_st(canvas)._setPaint_(self["@bitmapPaint"]);
} else {
_st(canvas)._setPaint_(_st($Color())._transparent());
};
_st(canvas)._drawShape_(_st((0).__at((0)))._corner_(_st(self["@width"]).__at(self["@height"])));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.AthensImageMorph)})},
messageSends: ["drawOn:", "ifTrue:ifFalse:", "setPaint:", "transparent", "notNil", "drawShape:", "corner:", "@"]}),
smalltalk.AthensImageMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._initialize.apply(_st(self), []);
self["@mouseFocusBorderColor"]=_st($Color())._transparent();
self["@mouseDownBorderColor"]=self["@mouseFocusBorderColor"];
self["@borderColor"]=self["@mouseDownBorderColor"];
self["@mouseFocusFillColor"]=self["@borderColor"];
self["@mouseDownFillColor"]=self["@mouseFocusFillColor"];
self["@fillColor"]=self["@mouseDownFillColor"];
self["@hasSharpBorder"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensImageMorph)})},
messageSends: ["initialize", "transparent"]}),
smalltalk.AthensImageMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@url"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.AthensImageMorph)})},
messageSends: []}),
smalltalk.AthensImageMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@url"]=aString;
self._createBitmapPaint();
return self}, function($ctx1) {$ctx1.fill(self,"url:",{aString:aString},smalltalk.AthensImageMorph)})},
messageSends: ["createBitmapPaint"]}),
smalltalk.AthensImageMorph);



smalltalk.addClass('AthensListItemMorph', smalltalk.AthensRectangleMorph, ['textMorph', 'item'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._initialize.apply(_st(self), []);
self["@hasSharpBorder"]=true;
self._initializeTextMorph();
self._height_((20));
self._unselect();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensListItemMorph)})},
messageSends: ["initialize", "initializeTextMorph", "height:", "unselect"]}),
smalltalk.AthensListItemMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeTextMorph",
fn: function (){
var self=this;
function $AthensTextMorph(){return smalltalk.AthensTextMorph||(typeof AthensTextMorph=="undefined"?nil:AthensTextMorph)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($AthensTextMorph())._new();
_st($1)._translateByX_Y_((5),(0));
$2=_st($1)._yourself();
self["@textMorph"]=$2;
self._addMorph_(self["@textMorph"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeTextMorph",{},smalltalk.AthensListItemMorph)})},
messageSends: ["translateByX:Y:", "new", "yourself", "addMorph:"]}),
smalltalk.AthensListItemMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "item",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@item"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"item",{},smalltalk.AthensListItemMorph)})},
messageSends: []}),
smalltalk.AthensListItemMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "item:",
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@item"]=anItem;
_st(self["@textMorph"])._text_(_st(anItem)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"item:",{anItem:anItem},smalltalk.AthensListItemMorph)})},
messageSends: ["text:", "asString"]}),
smalltalk.AthensListItemMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "select",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@mouseFocusFillColor"]=_st($Color())._cosmoMiddleBlue();
self["@mouseDownFillColor"]=_st($Color())._cosmoDarkBlue();
self["@fillColor"]=_st($Color())._cosmoDarkBlue();
self["@borderColor"]=_st($Color())._cosmoDarkGray();
_st(self["@textMorph"])._fontColor_(_st($Color())._white());
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"select",{},smalltalk.AthensListItemMorph)})},
messageSends: ["cosmoMiddleBlue", "cosmoDarkBlue", "cosmoDarkGray", "fontColor:", "white", "redraw"]}),
smalltalk.AthensListItemMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "unselect",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@mouseFocusFillColor"]=_st($Color())._cosmoLightGray();
self["@mouseDownFillColor"]=_st($Color())._cosmoGray();
self["@fillColor"]=_st($Color())._white();
self["@borderColor"]=_st($Color())._cosmoDarkGray();
_st(self["@textMorph"])._fontColor_(_st($Color())._black());
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"unselect",{},smalltalk.AthensListItemMorph)})},
messageSends: ["cosmoLightGray", "cosmoGray", "white", "cosmoDarkGray", "fontColor:", "black", "redraw"]}),
smalltalk.AthensListItemMorph);


smalltalk.addMethod(
smalltalk.method({
selector: "for:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._item_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{anObject:anObject},smalltalk.AthensListItemMorph.klass)})},
messageSends: ["item:", "new", "yourself"]}),
smalltalk.AthensListItemMorph.klass);


smalltalk.addClass('AthensScrollAreaMorph', smalltalk.AthensRectangleMorph, ['xScrollBar', 'yScrollBar', 'hasXScrollBar', 'hasYScrollBar', 'innerContainer', 'outerContainer', 'needsContentExtentUpdate'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "addMorph:",
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@innerContainer"])._addMorph_(aMorph);
self._updateContentExtent();
self["@needsContentExtentUpdate"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"addMorph:",{aMorph:aMorph},smalltalk.AthensScrollAreaMorph)})},
messageSends: ["addMorph:", "updateContentExtent"]}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleChangeX:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._updateVisibleArea();
return self}, function($ctx1) {$ctx1.fill(self,"handleChangeX:",{evt:evt},smalltalk.AthensScrollAreaMorph)})},
messageSends: ["updateVisibleArea"]}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleChangeY:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._updateVisibleArea();
return self}, function($ctx1) {$ctx1.fill(self,"handleChangeY:",{evt:evt},smalltalk.AthensScrollAreaMorph)})},
messageSends: ["updateVisibleArea"]}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseWheel:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@xScrollBar"])._value_(_st(_st(_st(self["@xScrollBar"])._buttonStepSize()).__star(_st(_st(evt)._at_("wheelDelta"))._x())).__plus(_st(self["@xScrollBar"])._value()));
_st(self["@yScrollBar"])._value_(_st(_st(_st(self["@yScrollBar"])._buttonStepSize()).__star(_st(_st(evt)._at_("wheelDelta"))._y())).__plus(_st(self["@yScrollBar"])._value()));
smalltalk.AthensRectangleMorph.fn.prototype._handleMouseWheel_.apply(_st(self), [evt]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseWheel:",{evt:evt},smalltalk.AthensScrollAreaMorph)})},
messageSends: ["value:", "+", "value", "*", "x", "at:", "buttonStepSize", "y", "handleMouseWheel:"]}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "hasXScrollBar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@hasXScrollBar"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasXScrollBar",{},smalltalk.AthensScrollAreaMorph)})},
messageSends: []}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "hasXScrollBar:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@hasXScrollBar"]=aBoolean;
$1=self;
_st($1)._layoutChanged();
$2=_st($1)._updateVisibleArea();
return self}, function($ctx1) {$ctx1.fill(self,"hasXScrollBar:",{aBoolean:aBoolean},smalltalk.AthensScrollAreaMorph)})},
messageSends: ["layoutChanged", "updateVisibleArea"]}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "hasYScrollBar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@hasYScrollBar"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasYScrollBar",{},smalltalk.AthensScrollAreaMorph)})},
messageSends: []}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "hasYScrollBar:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@hasYScrollBar"]=aBoolean;
$1=self;
_st($1)._layoutChanged();
$2=_st($1)._updateVisibleArea();
return self}, function($ctx1) {$ctx1.fill(self,"hasYScrollBar:",{aBoolean:aBoolean},smalltalk.AthensScrollAreaMorph)})},
messageSends: ["layoutChanged", "updateVisibleArea"]}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._initialize.apply(_st(self), []);
self["@hasYScrollBar"]=true;
self["@hasXScrollBar"]=self["@hasYScrollBar"];
self._initializeContainer();
self._initializeScrollBars();
self._layoutChanged();
self._updateContentExtent();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensScrollAreaMorph)})},
messageSends: ["initialize", "initializeContainer", "initializeScrollBars", "layoutChanged", "updateContentExtent"]}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeContainer",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $AthensRectangleMorph(){return smalltalk.AthensRectangleMorph||(typeof AthensRectangleMorph=="undefined"?nil:AthensRectangleMorph)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st($AthensRectangleMorph())._new();
_st($1)._borderColor_(_st($Color())._transparent());
_st($1)._fillColor_(_st($Color())._transparent());
_st($1)._mouseDownFillColor_(_st($Color())._transparent());
_st($1)._mouseFocusFillColor_(_st($Color())._transparent());
$2=_st($1)._translateByX_Y_((1),(1));
self["@outerContainer"]=$2;
smalltalk.AthensRectangleMorph.fn.prototype._addMorph_.apply(_st(self), [self["@outerContainer"]]);
$3=_st($AthensRectangleMorph())._new();
_st($3)._borderColor_(_st($Color())._transparent());
_st($3)._fillColor_(_st($Color())._transparent());
_st($3)._mouseDownFillColor_(_st($Color())._transparent());
$4=_st($3)._mouseFocusFillColor_(_st($Color())._transparent());
self["@innerContainer"]=$4;
_st(self["@outerContainer"])._addMorph_(self["@innerContainer"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeContainer",{},smalltalk.AthensScrollAreaMorph)})},
messageSends: ["borderColor:", "transparent", "new", "fillColor:", "mouseDownFillColor:", "mouseFocusFillColor:", "translateByX:Y:", "addMorph:"]}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeScrollBars",
fn: function (){
var self=this;
function $AthensScrollBarMorph(){return smalltalk.AthensScrollBarMorph||(typeof AthensScrollBarMorph=="undefined"?nil:AthensScrollBarMorph)}
return smalltalk.withContext(function($ctx1) { 
self["@yScrollBar"]=_st($AthensScrollBarMorph())._new();
self["@xScrollBar"]=_st($AthensScrollBarMorph())._new();
_st(self["@yScrollBar"])._onChange_((function(evt){
return smalltalk.withContext(function($ctx2) {
return self._handleChangeY_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(self["@xScrollBar"])._onChange_((function(evt){
return smalltalk.withContext(function($ctx2) {
return self._handleChangeX_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
smalltalk.AthensRectangleMorph.fn.prototype._addMorph_.apply(_st(self), [self["@yScrollBar"]]);
smalltalk.AthensRectangleMorph.fn.prototype._addMorph_.apply(_st(self), [self["@xScrollBar"]]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeScrollBars",{},smalltalk.AthensScrollAreaMorph)})},
messageSends: ["new", "onChange:", "handleChangeY:", "handleChangeX:", "addMorph:"]}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutChanged",
fn: function (){
var self=this;
var barWidth,barHeight;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=self["@hasXScrollBar"];
if(smalltalk.assert($1)){
barHeight=(10);
barHeight;
_st(self["@xScrollBar"])._show();
} else {
barHeight=(0);
barHeight;
_st(self["@xScrollBar"])._hide();
};
$2=self["@hasYScrollBar"];
if(smalltalk.assert($2)){
barWidth=(10);
barWidth;
_st(self["@yScrollBar"])._show();
} else {
barWidth=(0);
barWidth;
_st(self["@yScrollBar"])._hide();
};
$3=self["@yScrollBar"];
_st($3)._resetTransformation();
_st($3)._height_(_st(self["@height"]).__minus(barHeight));
_st($3)._width_((10));
$4=_st($3)._translateByX_Y_(_st(self["@width"]).__minus((10)),(0));
$5=self["@xScrollBar"];
_st($5)._resetTransformation();
_st($5)._height_(_st(self["@width"]).__minus(barWidth));
_st($5)._width_((10));
_st($5)._translateByX_Y_((0),self["@height"]);
$6=_st($5)._rotateByDegrees_((-90));
$7=self["@outerContainer"];
_st($7)._height_(_st(self["@height"]).__minus(barWidth));
$8=_st($7)._width_(_st(self["@width"]).__minus(barWidth));
return self}, function($ctx1) {$ctx1.fill(self,"layoutChanged",{barWidth:barWidth,barHeight:barHeight},smalltalk.AthensScrollAreaMorph)})},
messageSends: ["ifTrue:ifFalse:", "show", "hide", "resetTransformation", "height:", "-", "width:", "translateByX:Y:", "rotateByDegrees:"]}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redrawEverythingOn:",
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.AthensRectangleMorph.fn.prototype._redrawEverythingOn_.apply(_st(self), [canvas]);
$1=self["@needsContentExtentUpdate"];
if(smalltalk.assert($1)){
self._updateContentExtent();
};
return self}, function($ctx1) {$ctx1.fill(self,"redrawEverythingOn:",{canvas:canvas},smalltalk.AthensScrollAreaMorph)})},
messageSends: ["redrawEverythingOn:", "ifTrue:", "updateContentExtent"]}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "updateContentExtent",
fn: function (){
var self=this;
var maxX,maxY;
return smalltalk.withContext(function($ctx1) { 
maxY=(1);
maxX=maxY;
_st(_st(self["@innerContainer"])._submorphs())._do_((function(morph){
var bounds;
return smalltalk.withContext(function($ctx2) {
bounds=_st(morph)._transformedBounds();
bounds;
maxX=_st(maxX)._max_(_st(_st(bounds)._width()).__plus(_st(_st(bounds)._origin())._x()));
maxX;
maxY=_st(maxY)._max_(_st(_st(bounds)._height()).__plus(_st(_st(bounds)._origin())._y()));
return maxY;
}, function($ctx2) {$ctx2.fillBlock({morph:morph,bounds:bounds},$ctx1)})}));
_st(self["@innerContainer"])._width_(maxX);
_st(self["@innerContainer"])._height_(maxY);
_st(self["@xScrollBar"])._sliderRange_(_st(_st(self["@outerContainer"])._width()).__slash(maxX));
_st(self["@yScrollBar"])._sliderRange_(_st(_st(self["@outerContainer"])._height()).__slash(maxY));
self["@needsContentExtentUpdate"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"updateContentExtent",{maxX:maxX,maxY:maxY},smalltalk.AthensScrollAreaMorph)})},
messageSends: ["do:", "transformedBounds", "max:", "+", "x", "origin", "width", "y", "height", "submorphs", "width:", "height:", "sliderRange:", "/"]}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "updateVisibleArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@innerContainer"];
_st($1)._resetTransformation();
$2=_st($1)._translateByX_Y_(_st(_st(self["@xScrollBar"])._value()).__star(_st(_st(self["@outerContainer"])._width()).__minus(_st(self["@innerContainer"])._width())),_st(_st(self["@yScrollBar"])._value()).__star(_st(_st(self["@outerContainer"])._height()).__minus(_st(self["@innerContainer"])._height())));
return self}, function($ctx1) {$ctx1.fill(self,"updateVisibleArea",{},smalltalk.AthensScrollAreaMorph)})},
messageSends: ["resetTransformation", "translateByX:Y:", "*", "-", "width", "value", "height"]}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "valueX",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@xScrollBar"])._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"valueX",{},smalltalk.AthensScrollAreaMorph)})},
messageSends: ["value"]}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "valueX:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@xScrollBar"])._value_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"valueX:",{aNumber:aNumber},smalltalk.AthensScrollAreaMorph)})},
messageSends: ["value:"]}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "valueY",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@yScrollBar"])._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"valueY",{},smalltalk.AthensScrollAreaMorph)})},
messageSends: ["value"]}),
smalltalk.AthensScrollAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "valueY:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@yScrollBar"])._value_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"valueY:",{aNumber:aNumber},smalltalk.AthensScrollAreaMorph)})},
messageSends: ["value:"]}),
smalltalk.AthensScrollAreaMorph);



smalltalk.addClass('AthensListBoxMorph', smalltalk.AthensScrollAreaMorph, ['nextPositionY', 'selectedItem'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "addItem:",
fn: function (anObject){
var self=this;
var itemMorph;
function $AthensListItemMorph(){return smalltalk.AthensListItemMorph||(typeof AthensListItemMorph=="undefined"?nil:AthensListItemMorph)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
itemMorph=_st($AthensListItemMorph())._for_(anObject);
$1=itemMorph;
_st($1)._translateByX_Y_((-1),self["@nextPositionY"]);
_st($1)._width_(_st(_st(self["@outerContainer"])._width()).__plus((1)));
$2=_st($1)._onMouseClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._selectedItem_(itemMorph);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._addMorph_(itemMorph);
self["@nextPositionY"]=_st(_st(self["@nextPositionY"]).__plus(_st(itemMorph)._height())).__minus((1));
return self}, function($ctx1) {$ctx1.fill(self,"addItem:",{anObject:anObject,itemMorph:itemMorph},smalltalk.AthensListBoxMorph)})},
messageSends: ["for:", "translateByX:Y:", "width:", "+", "width", "onMouseClick:", "selectedItem:", "addMorph:", "-", "height"]}),
smalltalk.AthensListBoxMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensScrollAreaMorph.fn.prototype._initialize.apply(_st(self), []);
self["@nextPositionY"]=(-1);
self["@hasSharpBorder"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensListBoxMorph)})},
messageSends: ["initialize"]}),
smalltalk.AthensListBoxMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedItem"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{},smalltalk.AthensListBoxMorph)})},
messageSends: []}),
smalltalk.AthensListBoxMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem:",
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedItem"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self["@selectedItem"])._unselect();
};
self["@selectedItem"]=anItem;
_st(self["@selectedItem"])._select();
self._signalChange_(_st(self["@selectedItem"])._item());
return self}, function($ctx1) {$ctx1.fill(self,"selectedItem:",{anItem:anItem},smalltalk.AthensListBoxMorph)})},
messageSends: ["ifNotNil:", "unselect", "select", "signalChange:", "item"]}),
smalltalk.AthensListBoxMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensScrollAreaMorph.fn.prototype._width_.apply(_st(self), [aNumber]);
_st(_st(self["@innerContainer"])._submorphs())._do_((function(morph){
return smalltalk.withContext(function($ctx2) {
return _st(morph)._width_(_st(_st(self["@outerContainer"])._width()).__plus((1)));
}, function($ctx2) {$ctx2.fillBlock({morph:morph},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},smalltalk.AthensListBoxMorph)})},
messageSends: ["width:", "do:", "+", "width", "submorphs"]}),
smalltalk.AthensListBoxMorph);



smalltalk.addClass('AthensTextAreaMorph', smalltalk.AthensScrollAreaMorph, ['textMorph'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@textMorph"])._perform_withArguments_(_st(aMessage)._selector(),_st(aMessage)._arguments());
return $1;
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.AthensTextAreaMorph)})},
messageSends: ["perform:withArguments:", "selector", "arguments"]}),
smalltalk.AthensTextAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $AthensEditableTextMorph(){return smalltalk.AthensEditableTextMorph||(typeof AthensEditableTextMorph=="undefined"?nil:AthensEditableTextMorph)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@textMorph"]=_st($AthensEditableTextMorph())._new();
smalltalk.AthensScrollAreaMorph.fn.prototype._initialize.apply(_st(self), []);
self._hasXScrollBar_(false);
self["@hasSharpBorder"]=true;
self["@borderColor"]=_st($Color())._cosmoGray();
self["@mouseFocusFillColor"]=_st($Color())._cosmoLightGray();
self["@mouseDownBorderColor"]=_st($Color())._cosmoDarkGray();
self._addMorph_(self["@textMorph"]);
_st(self["@textMorph"])._onChange_((function(evt){
return smalltalk.withContext(function($ctx2) {
self._updateContentExtent();
return self._signalChange_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
self._layoutChanged();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensTextAreaMorph)})},
messageSends: ["new", "initialize", "hasXScrollBar:", "cosmoGray", "cosmoLightGray", "cosmoDarkGray", "addMorph:", "onChange:", "updateContentExtent", "signalChange:", "layoutChanged"]}),
smalltalk.AthensTextAreaMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutChanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.AthensScrollAreaMorph.fn.prototype._layoutChanged.apply(_st(self), []);
$1=self["@textMorph"];
_st($1)._resetTransformation();
_st($1)._translateByX_Y_((3),(3));
_st($1)._height_(_st(self["@height"]).__minus((6)));
$2=_st($1)._width_(_st(self["@width"]).__minus((16)));
return self}, function($ctx1) {$ctx1.fill(self,"layoutChanged",{},smalltalk.AthensTextAreaMorph)})},
messageSends: ["layoutChanged", "resetTransformation", "translateByX:Y:", "height:", "-", "width:"]}),
smalltalk.AthensTextAreaMorph);



smalltalk.addClass('AthensScrollBarMorph', smalltalk.AthensRectangleMorph, ['decreaseButton', 'increaseButton', 'sliderButton', 'value', 'sliderRange', 'sliderMoveHandler', 'sliderUpHandler', 'buttonStepSize'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "buttonStepSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@buttonStepSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"buttonStepSize",{},smalltalk.AthensScrollBarMorph)})},
messageSends: []}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "buttonStepSize:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@buttonStepSize"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"buttonStepSize:",{aNumber:aNumber},smalltalk.AthensScrollBarMorph)})},
messageSends: []}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleDecrease",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._value_(_st(self["@value"]).__minus(self["@buttonStepSize"]));
return self}, function($ctx1) {$ctx1.fill(self,"handleDecrease",{},smalltalk.AthensScrollBarMorph)})},
messageSends: ["value:", "-"]}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleIncrease",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._value_(_st(self["@value"]).__plus(self["@buttonStepSize"]));
return self}, function($ctx1) {$ctx1.fill(self,"handleIncrease",{},smalltalk.AthensScrollBarMorph)})},
messageSends: ["value:", "+"]}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._initialize.apply(_st(self), []);
self["@borderColor"]=_st($Color())._cosmoDarkGray();
self["@fillColor"]=_st($Color())._white();
self["@mouseDownFillColor"]=_st($Color())._cosmoLightGray();
self["@mouseFocusFillColor"]=_st($Color())._cosmoLightGray();
self["@hasSharpBorder"]=true;
self["@value"]=(0);
self["@sliderRange"]=(0.2);
self["@buttonStepSize"]=(0.1);
self._initializeButtons();
self._initializeEvents();
self._layoutChanged();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensScrollBarMorph)})},
messageSends: ["initialize", "cosmoDarkGray", "white", "cosmoLightGray", "initializeButtons", "initializeEvents", "layoutChanged"]}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeButtons",
fn: function (){
var self=this;
function $AthensIconMorph(){return smalltalk.AthensIconMorph||(typeof AthensIconMorph=="undefined"?nil:AthensIconMorph)}
function $AthensIconButtonMorph(){return smalltalk.AthensIconButtonMorph||(typeof AthensIconButtonMorph=="undefined"?nil:AthensIconButtonMorph)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st($AthensIconButtonMorph())._new();
_st($1)._icon_(_st($AthensIconMorph())._arrowUp());
_st($1)._text_("");
_st($1)._onMouseClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._handleDecrease();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._yourself();
self["@decreaseButton"]=$2;
$3=_st($AthensIconButtonMorph())._new();
_st($3)._icon_(_st($AthensIconMorph())._arrowDown());
_st($3)._text_("");
_st($3)._onMouseClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._handleIncrease();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=_st($3)._yourself();
self["@increaseButton"]=$4;
$5=_st($AthensIconButtonMorph())._new();
_st($5)._icon_(_st(_st($AthensIconMorph())._reorder())._size_((9)));
_st($5)._text_("");
$6=_st($5)._yourself();
self["@sliderButton"]=$6;
self._addMorph_(self["@decreaseButton"]);
self._addMorph_(self["@increaseButton"]);
self._addMorph_(self["@sliderButton"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeButtons",{},smalltalk.AthensScrollBarMorph)})},
messageSends: ["icon:", "arrowUp", "new", "text:", "onMouseClick:", "handleDecrease", "yourself", "arrowDown", "handleIncrease", "size:", "reorder", "addMorph:"]}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEvents",
fn: function (){
var self=this;
var sliderDownHandler;
return smalltalk.withContext(function($ctx1) { 
self["@sliderMoveHandler"]=(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._sliderMouseMove_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
self["@sliderUpHandler"]=(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._sliderMouseUp_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
sliderDownHandler=(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(self._world())._registerGlobalEvent_withCallback_("mouseMove",self["@sliderMoveHandler"]);
return _st(self._world())._registerGlobalEvent_withCallback_("mouseUp",self["@sliderUpHandler"]);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
_st(self["@sliderButton"])._onMouseDown_(sliderDownHandler);
return self}, function($ctx1) {$ctx1.fill(self,"initializeEvents",{sliderDownHandler:sliderDownHandler},smalltalk.AthensScrollBarMorph)})},
messageSends: ["sliderMouseMove:", "sliderMouseUp:", "registerGlobalEvent:withCallback:", "world", "onMouseDown:"]}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutChanged",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=self["@decreaseButton"];
_st($1)._width_(self["@width"]);
_st($1)._height_((10));
_st($1)._borderColor_(_st($Color())._cosmoDarkPurple());
_st($1)._fillColor_(_st($Color())._cosmoPurple());
_st($1)._mouseFocusFillColor_(_st($Color())._cosmoMiddlePurple());
_st($1)._mouseDownFillColor_(_st($Color())._cosmoDarkPurple());
$2=_st($1)._resetTransformation();
$3=self["@increaseButton"];
_st($3)._width_(self["@width"]);
_st($3)._height_((10));
_st($3)._borderColor_(_st($Color())._cosmoDarkPurple());
_st($3)._fillColor_(_st($Color())._cosmoPurple());
_st($3)._mouseFocusFillColor_(_st($Color())._cosmoMiddlePurple());
_st($3)._mouseDownFillColor_(_st($Color())._cosmoDarkPurple());
_st($3)._resetTransformation();
$4=_st($3)._translateByX_Y_((0),_st(self["@height"]).__minus((10)));
$5=self["@sliderButton"];
_st($5)._width_(self["@width"]);
_st($5)._borderColor_(_st($Color())._cosmoDarkPurple());
_st($5)._fillColor_(_st($Color())._cosmoLightPurple());
_st($5)._mouseFocusFillColor_(_st($Color())._cosmoMiddlePurple());
$6=_st($5)._mouseDownFillColor_(_st($Color())._cosmoDarkPurple());
self._layoutSliderButton();
return self}, function($ctx1) {$ctx1.fill(self,"layoutChanged",{},smalltalk.AthensScrollBarMorph)})},
messageSends: ["width:", "height:", "borderColor:", "cosmoDarkPurple", "fillColor:", "cosmoPurple", "mouseFocusFillColor:", "cosmoMiddlePurple", "mouseDownFillColor:", "resetTransformation", "translateByX:Y:", "-", "cosmoLightPurple", "layoutSliderButton"]}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutSliderButton",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@sliderButton"];
_st($1)._height_(_st(_st(self["@sliderRange"]).__star(_st(self["@height"]).__minus((20))))._max_((7)));
_st($1)._resetTransformation();
$2=_st($1)._translateByX_Y_((0),_st(_st(_st((1).__minus(self["@sliderRange"])).__star(self["@value"])).__star(_st(self["@height"]).__minus((20)))).__plus((10)));
return self}, function($ctx1) {$ctx1.fill(self,"layoutSliderButton",{},smalltalk.AthensScrollBarMorph)})},
messageSends: ["height:", "max:", "*", "-", "resetTransformation", "translateByX:Y:", "+"]}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "sliderMouseMove:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._value_(_st(_st(_st(_st(self["@globalPathTransform"])._inverseTransform_(_st(evt)._at_("position")))._y()).__minus((10))).__slash(_st(self["@height"]).__minus((20))));
return self}, function($ctx1) {$ctx1.fill(self,"sliderMouseMove:",{evt:evt},smalltalk.AthensScrollBarMorph)})},
messageSends: ["value:", "/", "-", "y", "inverseTransform:", "at:"]}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "sliderMouseUp:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseMove",self["@sliderMoveHandler"]);
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseUp",self["@sliderUpHandler"]);
return self}, function($ctx1) {$ctx1.fill(self,"sliderMouseUp:",{evt:evt},smalltalk.AthensScrollBarMorph)})},
messageSends: ["unregisterGlobalEvent:withCallback:", "world"]}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "sliderRange",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sliderRange"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sliderRange",{},smalltalk.AthensScrollBarMorph)})},
messageSends: []}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "sliderRange:",
fn: function (aNumber){
var self=this;
var newRange;
return smalltalk.withContext(function($ctx1) { 
newRange=_st(_st(aNumber)._min_((1)))._max_((0));
self["@sliderRange"]=newRange;
self._layoutSliderButton();
return self}, function($ctx1) {$ctx1.fill(self,"sliderRange:",{aNumber:aNumber,newRange:newRange},smalltalk.AthensScrollBarMorph)})},
messageSends: ["max:", "min:", "layoutSliderButton"]}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@value"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.AthensScrollBarMorph)})},
messageSends: []}),
smalltalk.AthensScrollBarMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
fn: function (aNumber){
var self=this;
var changed,newNumber;
return smalltalk.withContext(function($ctx1) { 
var $1;
newNumber=_st(_st(aNumber)._min_((1)))._max_((0));
changed=_st(self["@value"]).__tild_tild(newNumber);
self["@value"]=newNumber;
self._layoutSliderButton();
$1=changed;
if(smalltalk.assert($1)){
self._signalChange_(newNumber);
};
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aNumber:aNumber,changed:changed,newNumber:newNumber},smalltalk.AthensScrollBarMorph)})},
messageSends: ["max:", "min:", "~~", "layoutSliderButton", "ifTrue:", "signalChange:"]}),
smalltalk.AthensScrollBarMorph);



smalltalk.addClass('AthensTextMorph', smalltalk.AthensRectangleMorph, ['text', 'font', 'fontColor', 'highlightFontColor'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "calculateWidth",
fn: function (){
var self=this;
var surface;
function $AthensHTMLSurface(){return smalltalk.AthensHTMLSurface||(typeof AthensHTMLSurface=="undefined"?nil:AthensHTMLSurface)}
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
surface=_st($AthensHTMLSurface())._extent_((0).__at((0)));
_st(surface)._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(canvas)._setFont_(self["@font"]);
$1=_st(canvas)._measureStringWidth_(self["@text"]);
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"calculateWidth",{surface:surface},smalltalk.AthensTextMorph)})},
messageSends: ["extent:", "@", "drawDuring:", "setFont:", "measureStringWidth:"]}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.AthensRectangleMorph.fn.prototype._drawOn_.apply(_st(self), [canvas]);
_st(canvas)._setFont_(self["@font"]);
$1=self["@hasMouseFocus"];
if(smalltalk.assert($1)){
_st(canvas)._setPaint_(self["@highlightFontColor"]);
} else {
_st(canvas)._setPaint_(self["@fontColor"]);
};
_st(_st(canvas)._pathTransform())._translateX_Y_((0),(15));
_st(canvas)._drawString_(self["@text"]);
self["@width"]=_st(canvas)._measureStringWidth_(self["@text"]);
self._outerShape_(_st((0).__at((0)))._corner_(_st(self["@width"]).__at(self["@height"])));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.AthensTextMorph)})},
messageSends: ["drawOn:", "setFont:", "ifTrue:ifFalse:", "setPaint:", "translateX:Y:", "pathTransform", "drawString:", "measureStringWidth:", "outerShape:", "corner:", "@"]}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "font:",
fn: function (aFont){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@font"]=aFont;
self["@height"]=_st(_st(self["@font"])._size()).__star((1.25));
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"font:",{aFont:aFont},smalltalk.AthensTextMorph)})},
messageSends: ["*", "size", "redraw"]}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "fontColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fontColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fontColor",{},smalltalk.AthensTextMorph)})},
messageSends: []}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "fontColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@highlightFontColor"]=aColor;
self["@fontColor"]=self["@highlightFontColor"];
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"fontColor:",{aColor:aColor},smalltalk.AthensTextMorph)})},
messageSends: ["redraw"]}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseEnter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._handleMouseEnter.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseEnter",{},smalltalk.AthensTextMorph)})},
messageSends: ["handleMouseEnter", "redraw"]}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseLeave",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._handleMouseLeave.apply(_st(self), []);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseLeave",{},smalltalk.AthensTextMorph)})},
messageSends: ["handleMouseLeave", "redraw"]}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightFontColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@highlightFontColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"highlightFontColor:",{aColor:aColor},smalltalk.AthensTextMorph)})},
messageSends: []}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._initialize.apply(_st(self), []);
self["@mouseFocusFillColor"]=_st($Color())._transparent();
self["@mouseDownFillColor"]=self["@mouseFocusFillColor"];
self["@fillColor"]=self["@mouseDownFillColor"];
self["@borderColor"]=self["@fillColor"];
self["@text"]="a TextMorph";
self["@font"]=_st($LogicalFont())._familyName_size_("Arial",(15));
self["@height"]=_st(_st(self["@font"])._size()).__star((1.25));
self["@highlightFontColor"]=_st($Color())._black();
self["@fontColor"]=self["@highlightFontColor"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensTextMorph)})},
messageSends: ["initialize", "transparent", "familyName:size:", "*", "size", "black"]}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@text"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.AthensTextMorph)})},
messageSends: []}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=aString;
self["@width"]=nil;
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.AthensTextMorph)})},
messageSends: ["redraw"]}),
smalltalk.AthensTextMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@width"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@width"]=self._calculateWidth();
self["@width"];
} else {
$1;
};
$2=self["@width"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.AthensTextMorph)})},
messageSends: ["ifNil:", "calculateWidth"]}),
smalltalk.AthensTextMorph);



smalltalk.addClass('AthensIconMorph', smalltalk.AthensTextMorph, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "font:",
fn: function (aFont){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notAllowed();
return self}, function($ctx1) {$ctx1.fill(self,"font:",{aFont:aFont},smalltalk.AthensIconMorph)})},
messageSends: ["notAllowed"]}),
smalltalk.AthensIconMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensTextMorph.fn.prototype._initialize.apply(_st(self), []);
self._size_((12));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensIconMorph)})},
messageSends: ["initialize", "size:"]}),
smalltalk.AthensIconMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
fn: function (aNumber){
var self=this;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
return smalltalk.withContext(function($ctx1) { 
self["@font"]=_st($LogicalFont())._familyName_size_("FontAwesome",aNumber);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"size:",{aNumber:aNumber},smalltalk.AthensIconMorph)})},
messageSends: ["familyName:size:", "redraw"]}),
smalltalk.AthensIconMorph);


smalltalk.addMethod(
smalltalk.method({
selector: "arrowDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._text_("");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"arrowDown",{},smalltalk.AthensIconMorph.klass)})},
messageSends: ["text:", "new", "yourself"]}),
smalltalk.AthensIconMorph.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "arrowUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._text_("");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"arrowUp",{},smalltalk.AthensIconMorph.klass)})},
messageSends: ["text:", "new", "yourself"]}),
smalltalk.AthensIconMorph.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._text_("");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.AthensIconMorph.klass)})},
messageSends: ["text:", "new", "yourself"]}),
smalltalk.AthensIconMorph.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "reorder",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._text_("");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"reorder",{},smalltalk.AthensIconMorph.klass)})},
messageSends: ["text:", "new", "yourself"]}),
smalltalk.AthensIconMorph.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resizeFull",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._text_("");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"resizeFull",{},smalltalk.AthensIconMorph.klass)})},
messageSends: ["text:", "new", "yourself"]}),
smalltalk.AthensIconMorph.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resizeSmall",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._text_("");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"resizeSmall",{},smalltalk.AthensIconMorph.klass)})},
messageSends: ["text:", "new", "yourself"]}),
smalltalk.AthensIconMorph.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateCcw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._text_("");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateCcw",{},smalltalk.AthensIconMorph.klass)})},
messageSends: ["text:", "new", "yourself"]}),
smalltalk.AthensIconMorph.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateCw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._text_("");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateCw",{},smalltalk.AthensIconMorph.klass)})},
messageSends: ["text:", "new", "yourself"]}),
smalltalk.AthensIconMorph.klass);


smalltalk.addClass('AthensResizeMorph', smalltalk.AthensIconMorph, ['globalMoveHandler', 'globalUpHandler'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(canvas)._pathTransform())._translateBy_((16).__at((0)));
_st(_st(canvas)._pathTransform())._rotateByDegrees_((90));
smalltalk.AthensIconMorph.fn.prototype._drawOn_.apply(_st(self), [canvas]);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.AthensResizeMorph)})},
messageSends: ["translateBy:", "@", "pathTransform", "rotateByDegrees:", "drawOn:"]}),
smalltalk.AthensResizeMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseDown:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._registerGlobalEvent_withCallback_("mouseMove",self["@globalMoveHandler"]);
_st(self._world())._registerGlobalEvent_withCallback_("mouseUp",self["@globalUpHandler"]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseDown:",{evt:evt},smalltalk.AthensResizeMorph)})},
messageSends: ["registerGlobalEvent:withCallback:", "world"]}),
smalltalk.AthensResizeMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseUp:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseMove",self["@globalMoveHandler"]);
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseUp",self["@globalUpHandler"]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseUp:",{evt:evt},smalltalk.AthensResizeMorph)})},
messageSends: ["unregisterGlobalEvent:withCallback:", "world"]}),
smalltalk.AthensResizeMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensIconMorph.fn.prototype._initialize.apply(_st(self), []);
self["@text"]="";
self["@fontColor"]=_st($Color())._cosmoDarkGray();
self["@highlightFontColor"]=_st($Color())._black();
self["@globalMoveHandler"]=(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._processMouseMove_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
self["@globalUpHandler"]=(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._processMouseUp_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensResizeMorph)})},
messageSends: ["initialize", "cosmoDarkGray", "black", "processMouseMove:", "processMouseUp:"]}),
smalltalk.AthensResizeMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "processMouseMove:",
fn: function (evt){
var self=this;
var newPos;
return smalltalk.withContext(function($ctx1) { 
newPos=_st(_st(self["@owner"])._globalPathTransform())._inverseTransform_(_st(evt)._globalPosition());
_st(self["@owner"])._width_(_st(newPos)._x());
_st(self["@owner"])._height_(_st(newPos)._y());
return self}, function($ctx1) {$ctx1.fill(self,"processMouseMove:",{evt:evt,newPos:newPos},smalltalk.AthensResizeMorph)})},
messageSends: ["inverseTransform:", "globalPosition", "globalPathTransform", "width:", "x", "height:", "y"]}),
smalltalk.AthensResizeMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "processMouseUp:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._handleMouseUp_(evt);
return self}, function($ctx1) {$ctx1.fill(self,"processMouseUp:",{evt:evt},smalltalk.AthensResizeMorph)})},
messageSends: ["handleMouseUp:"]}),
smalltalk.AthensResizeMorph);



smalltalk.addClass('AthensWindowMorph', smalltalk.AthensRectangleMorph, ['title', 'titleBarMorph', 'titleTextMorph', 'resizeMorph', 'windowMoveHandler', 'windowMoveOffset', 'windowUpHandler', 'closeButton'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseDown:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@windowMoveOffset"]=_st(evt)._at_("position");
self._bringToFront();
smalltalk.AthensRectangleMorph.fn.prototype._handleMouseDown_.apply(_st(self), [evt]);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseDown:",{evt:evt},smalltalk.AthensWindowMorph)})},
messageSends: ["at:", "bringToFront", "handleMouseDown:"]}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensRectangleMorph.fn.prototype._initialize.apply(_st(self), []);
self["@hasSharpBorder"]=true;
self._initializeTitleBar();
self._initializeEvents();
self._initializeResizeIcon();
self._height_((200));
self._width_((200));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensWindowMorph)})},
messageSends: ["initialize", "initializeTitleBar", "initializeEvents", "initializeResizeIcon", "height:", "width:"]}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEvents",
fn: function (){
var self=this;
var mouseDownHandler;
return smalltalk.withContext(function($ctx1) { 
self["@windowMoveHandler"]=(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._windowMouseMove_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
self["@windowUpHandler"]=(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._windowMouseUp_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
mouseDownHandler=(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(self._world())._registerGlobalEvent_withCallback_("mouseMove",self["@windowMoveHandler"]);
return _st(self._world())._registerGlobalEvent_withCallback_("mouseUp",self["@windowUpHandler"]);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})});
_st(self["@titleBarMorph"])._onMouseDown_(mouseDownHandler);
return self}, function($ctx1) {$ctx1.fill(self,"initializeEvents",{mouseDownHandler:mouseDownHandler},smalltalk.AthensWindowMorph)})},
messageSends: ["windowMouseMove:", "windowMouseUp:", "registerGlobalEvent:withCallback:", "world", "onMouseDown:"]}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeResizeIcon",
fn: function (){
var self=this;
function $AthensResizeMorph(){return smalltalk.AthensResizeMorph||(typeof AthensResizeMorph=="undefined"?nil:AthensResizeMorph)}
return smalltalk.withContext(function($ctx1) { 
self["@resizeMorph"]=_st($AthensResizeMorph())._new();
_st(self["@resizeMorph"])._translateByX_Y_(_st(self["@width"]).__minus((15)),_st(self["@height"]).__minus((15)));
self._addMorph_(self["@resizeMorph"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeResizeIcon",{},smalltalk.AthensWindowMorph)})},
messageSends: ["new", "translateByX:Y:", "-", "addMorph:"]}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeTitleBar",
fn: function (){
var self=this;
function $AthensRectangleMorph(){return smalltalk.AthensRectangleMorph||(typeof AthensRectangleMorph=="undefined"?nil:AthensRectangleMorph)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $AthensTextMorph(){return smalltalk.AthensTextMorph||(typeof AthensTextMorph=="undefined"?nil:AthensTextMorph)}
function $AthensIconMorph(){return smalltalk.AthensIconMorph||(typeof AthensIconMorph=="undefined"?nil:AthensIconMorph)}
return smalltalk.withContext(function($ctx1) { 
self["@title"]="Window Title";
self["@titleBarMorph"]=_st($AthensRectangleMorph())._extent_(_st(_st(self["@width"]).__minus((10))).__at((25)));
_st(self["@titleBarMorph"])._fillColor_(_st($Color())._black());
_st(self["@titleBarMorph"])._borderColor_(_st($Color())._transparent());
_st(self["@titleBarMorph"])._translateByX_Y_((5),(5));
self._addMorph_(self["@titleBarMorph"]);
self["@titleTextMorph"]=_st($AthensTextMorph())._extent_(_st(_st(self["@width"]).__minus((16))).__at((19)));
_st(self["@titleTextMorph"])._translateByX_Y_((3),(3));
_st(self["@titleTextMorph"])._fontColor_(_st($Color())._white());
_st(self["@titleTextMorph"])._text_(self["@title"]);
_st(self["@titleBarMorph"])._addMorph_(self["@titleTextMorph"]);
self["@closeButton"]=_st($AthensIconMorph())._remove();
_st(self["@closeButton"])._fontColor_(_st($Color())._white());
_st(self["@closeButton"])._highlightFontColor_(_st($Color())._gray());
_st(self["@closeButton"])._translateByX_Y_(_st(self["@width"]).__minus((25)),(2));
_st(self["@closeButton"])._onMouseClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._delete();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self["@titleBarMorph"])._addMorph_(self["@closeButton"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeTitleBar",{},smalltalk.AthensWindowMorph)})},
messageSends: ["extent:", "@", "-", "fillColor:", "black", "borderColor:", "transparent", "translateByX:Y:", "addMorph:", "fontColor:", "white", "text:", "remove", "highlightFontColor:", "gray", "onMouseClick:", "delete"]}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutChanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@submorphs"])._do_((function(morph){
return smalltalk.withContext(function($ctx2) {
return _st(morph)._layoutChanged();
}, function($ctx2) {$ctx2.fillBlock({morph:morph},$ctx1)})}));
_st(self["@titleBarMorph"])._width_(_st(self["@width"]).__minus((10)));
_st(self["@closeButton"])._resetTransformation();
_st(self["@closeButton"])._translateByX_Y_(_st(self["@width"]).__minus((25)),(2));
_st(self["@resizeMorph"])._resetTransformation();
_st(self["@resizeMorph"])._translateByX_Y_(_st(self["@width"]).__minus((15)),_st(self["@height"]).__minus((15)));
return self}, function($ctx1) {$ctx1.fill(self,"layoutChanged",{},smalltalk.AthensWindowMorph)})},
messageSends: ["do:", "layoutChanged", "width:", "-", "resetTransformation", "translateByX:Y:"]}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@title"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.AthensWindowMorph)})},
messageSends: []}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "title:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@title"]=aString;
_st(self["@titleTextMorph"])._text_(aString);
self._redraw();
return self}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString},smalltalk.AthensWindowMorph)})},
messageSends: ["text:", "redraw"]}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "windowMouseMove:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._translateBy_(_st(_st(self["@globalPathTransform"])._inverseTransform_(_st(evt)._at_("globalPosition"))).__minus(self["@windowMoveOffset"]));
return self}, function($ctx1) {$ctx1.fill(self,"windowMouseMove:",{evt:evt},smalltalk.AthensWindowMorph)})},
messageSends: ["translateBy:", "-", "inverseTransform:", "at:"]}),
smalltalk.AthensWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "windowMouseUp:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseMove",self["@windowMoveHandler"]);
_st(self._world())._unregisterGlobalEvent_withCallback_("mouseUp",self["@windowUpHandler"]);
return self}, function($ctx1) {$ctx1.fill(self,"windowMouseUp:",{evt:evt},smalltalk.AthensWindowMorph)})},
messageSends: ["unregisterGlobalEvent:withCallback:", "world"]}),
smalltalk.AthensWindowMorph);


smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._width_(_st(aPoint)._x());
_st($2)._height_(_st(aPoint)._y());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.AthensWindowMorph.klass)})},
messageSends: ["width:", "x", "new", "height:", "y", "yourself"]}),
smalltalk.AthensWindowMorph.klass);


smalltalk.addClass('AthensWorldMorph', smalltalk.AthensRectangleMorph, ['surface', 'morphsUnderHand', 'halos', 'globalEventCallbacks', 'handPosition', 'worldState'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "addHalosTo:",
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMorph)._isHaloMorph();
if(! smalltalk.assert($1)){
_st(self["@halos"])._do_((function(halo){
return smalltalk.withContext(function($ctx2) {
_st(halo)._resetTransformation();
_st(halo)._translateBy_(_st(_st(_st(aMorph)._globalBounds())._origin()).__plus(_st(halo)._haloPosition()));
_st(halo)._attachedTo_(aMorph);
return _st(halo)._show();
}, function($ctx2) {$ctx2.fillBlock({halo:halo},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"addHalosTo:",{aMorph:aMorph},smalltalk.AthensWorldMorph)})},
messageSends: ["ifFalse:", "do:", "resetTransformation", "translateBy:", "+", "haloPosition", "origin", "globalBounds", "attachedTo:", "show", "isHaloMorph"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "delegateEvent:with:",
fn: function (aSymbol,evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 for (var morphIndex = 0; morphIndex < self['@morphsUnderHand'].length; morphIndex++) {
		var morph = self['@morphsUnderHand'][morphIndex];
		evt._at_put_('topMost', morphIndex == 0);
		
		if (-1 < ['mouseMove', 'mouseClick', 'mouseDown', 'mouseUp'].indexOf(aSymbol)) {
			evt._at_put_('position', morph['@globalPathTransform']._inverseTransform_(self['@handPosition']));
			// force copy of globalPosition
			evt._at_put_('globalPosition', self['@handPosition']['@x'].__at(self['@handPosition']['@y']));
		}
		
		morph['_handle' + aSymbol.charAt(0).toUpperCase() + aSymbol.slice(1) + '_'](evt);
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"delegateEvent:with:",{aSymbol:aSymbol,evt:evt},smalltalk.AthensWorldMorph)})},
messageSends: []}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (canvas){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._clear_(_st($Color())._cosmoGray());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.AthensWorldMorph)})},
messageSends: ["clear:", "cosmoGray"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "handleEvent:with:",
fn: function (aSymbol,evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@globalEventCallbacks"])._at_ifAbsent_(aSymbol,(function(){
return smalltalk.withContext(function($ctx2) {
return [];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._do_((function(handler){
return smalltalk.withContext(function($ctx2) {
return _st(handler)._value_(evt);
}, function($ctx2) {$ctx2.fillBlock({handler:handler},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"handleEvent:with:",{aSymbol:aSymbol,evt:evt},smalltalk.AthensWorldMorph)})},
messageSends: ["do:", "value:", "at:ifAbsent:"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "hideHalos",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@halos"])._notEmpty())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self["@halos"])._first())._attachedTo()).__tild_tild(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
self._addHalosTo_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"hideHalos",{},smalltalk.AthensWorldMorph)})},
messageSends: ["ifTrue:", "addHalosTo:", "and:", "~~", "attachedTo", "first", "notEmpty"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $WorldState(){return smalltalk.WorldState||(typeof WorldState=="undefined"?nil:WorldState)}
function $AthensGlobalMorphSettings(){return smalltalk.AthensGlobalMorphSettings||(typeof AthensGlobalMorphSettings=="undefined"?nil:AthensGlobalMorphSettings)}
return smalltalk.withContext(function($ctx1) { 
self["@worldState"]=_st($WorldState())._for_(self);
_st($AthensGlobalMorphSettings())._instance();
smalltalk.AthensRectangleMorph.fn.prototype._initialize.apply(_st(self), []);
self._initializeHalos();
self["@morphsUnderHand"]=[self];
self["@handPosition"]=(0).__at((0));
self._initializeCallbacks();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensWorldMorph)})},
messageSends: ["for:", "instance", "initialize", "initializeHalos", "@", "initializeCallbacks"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeCallbacks",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@globalEventCallbacks"]=_st($Dictionary())._new();
self._registerGlobalEvent_withCallback_("mouseMove",(function(evt){
return smalltalk.withContext(function($ctx2) {
self["@handPosition"]=_st(evt)._at_("globalPosition");
self["@handPosition"];
return self._updateMorphsUnderHandAt_(self["@handPosition"]);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(["mouseMove","mouseDown","mouseUp","mouseClick","mouseWheel","keyDown","keyUp","keyPress"])._do_((function(sym){
return smalltalk.withContext(function($ctx2) {
return self._registerGlobalEvent_withCallback_(sym,(function(evt){
return smalltalk.withContext(function($ctx3) {
return self._delegateEvent_with_(sym,evt);
}, function($ctx3) {$ctx3.fillBlock({evt:evt},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({sym:sym},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeCallbacks",{},smalltalk.AthensWorldMorph)})},
messageSends: ["new", "registerGlobalEvent:withCallback:", "at:", "updateMorphsUnderHandAt:", "do:", "delegateEvent:with:"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeHalos",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $AthensCloseHaloMorph(){return smalltalk.AthensCloseHaloMorph||(typeof AthensCloseHaloMorph=="undefined"?nil:AthensCloseHaloMorph)}
function $AthensInspectHaloMorph(){return smalltalk.AthensInspectHaloMorph||(typeof AthensInspectHaloMorph=="undefined"?nil:AthensInspectHaloMorph)}
function $AthensMoveHaloMorph(){return smalltalk.AthensMoveHaloMorph||(typeof AthensMoveHaloMorph=="undefined"?nil:AthensMoveHaloMorph)}
return smalltalk.withContext(function($ctx1) { 
self["@halos"]=_st($OrderedCollection())._new();
_st(self["@halos"])._add_(_st($AthensCloseHaloMorph())._new());
_st(self["@halos"])._add_(_st($AthensInspectHaloMorph())._new());
_st(self["@halos"])._add_(_st($AthensMoveHaloMorph())._new());
_st(self["@halos"])._do_((function(halo){
return smalltalk.withContext(function($ctx2) {
return self._addMorph_(halo);
}, function($ctx2) {$ctx2.fillBlock({halo:halo},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeHalos",{},smalltalk.AthensWorldMorph)})},
messageSends: ["new", "add:", "do:", "addMorph:"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "isWorldMorph",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isWorldMorph",{},smalltalk.AthensWorldMorph)})},
messageSends: []}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "morphsAtPosition:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3,$6,$7,$8;
var $early={};
try {
_st(self["@halos"])._reverseDo_((function(morph){
var ret;
return smalltalk.withContext(function($ctx2) {
$1=_st(morph)._isVisible();
if(smalltalk.assert($1)){
ret=_st(morph)._morphsAtPosition_(aPoint);
ret;
$2=ret;
if(($receiver = $2) == nil || $receiver == undefined){
return $2;
} else {
$4=ret;
_st($4)._add_(self);
$5=_st($4)._yourself();
$3=$5;
throw $early=[$3];
};
};
}, function($ctx2) {$ctx2.fillBlock({morph:morph,ret:ret},$ctx1)})}));
$6=smalltalk.AthensRectangleMorph.fn.prototype._morphsAtPosition_.apply(_st(self), [aPoint]);
if(($receiver = $6) == nil || $receiver == undefined){
$6;
} else {
var m;
m=$receiver;
$7=m;
return $7;
};
$8=[self];
return $8;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"morphsAtPosition:",{aPoint:aPoint},smalltalk.AthensWorldMorph)})},
messageSends: ["reverseDo:", "ifTrue:", "morphsAtPosition:", "ifNotNil:", "add:", "yourself", "isVisible"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redraw:",
fn: function (aRect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@worldState"])._damageArea_(aRect);
return self}, function($ctx1) {$ctx1.fill(self,"redraw:",{aRect:aRect},smalltalk.AthensWorldMorph)})},
messageSends: ["damageArea:"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redrawHalosOn:",
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@halos"])._do_((function(halo){
return smalltalk.withContext(function($ctx2) {
return _st(halo)._redrawNow_on_(_st((0).__at((0)))._corner_(_st(self._width()).__at(self._height())),canvas);
}, function($ctx2) {$ctx2.fillBlock({halo:halo},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"redrawHalosOn:",{canvas:canvas},smalltalk.AthensWorldMorph)})},
messageSends: ["do:", "redrawNow:on:", "corner:", "@", "height", "width"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redrawNow:",
fn: function (rects){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var rectsPath = smalltalk.AthensHTMLPath._segment_(smalltalk.AthensSimplePathBuilder._fromRectangles_(rects));
	
	self['@surface']._drawDuring_(function(canvas) {
		canvas['@pathTransform']._loadGlobalIdentity();
		
		if (smalltalk.AthensGlobalMorphSettings['@instance']['@showDamageArea']) {
			// debug: show damage area
			canvas._setStrokePaint_(smalltalk.Color._red());
			canvas._drawShape_(rectsPath);
		}
		
		canvas._clipBy_during_(rectsPath, function() {
			self._redrawNow_on_(rects, canvas);
		});
		
		self._redrawHalosOn_(canvas);
	}); ;
return self}, function($ctx1) {$ctx1.fill(self,"redrawNow:",{rects:rects},smalltalk.AthensWorldMorph)})},
messageSends: []}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "registerGlobalEvent:withCallback:",
fn: function (aSymbol,aBlock){
var self=this;
var handlers;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
handlers=_st(self["@globalEventCallbacks"])._at_ifAbsent_(aSymbol,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@globalEventCallbacks"])._at_put_(aSymbol,_st($OrderedCollection())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(handlers)._add_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"registerGlobalEvent:withCallback:",{aSymbol:aSymbol,aBlock:aBlock,handlers:handlers},smalltalk.AthensWorldMorph)})},
messageSends: ["at:ifAbsent:", "at:put:", "new", "add:"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "surface",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@surface"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"surface",{},smalltalk.AthensWorldMorph)})},
messageSends: []}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=aSurface;
self._width_(_st(_st(self["@surface"])._extent())._x());
self._height_(_st(_st(self["@surface"])._extent())._y());
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},smalltalk.AthensWorldMorph)})},
messageSends: ["width:", "x", "extent", "height:", "y"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "unregisterGlobalEvent:withCallback:",
fn: function (aSymbol,aBlock){
var self=this;
var handlers;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
handlers=_st(self["@globalEventCallbacks"])._at_ifAbsent_(aSymbol,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@globalEventCallbacks"])._at_put_(aSymbol,_st($OrderedCollection())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(handlers)._remove_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"unregisterGlobalEvent:withCallback:",{aSymbol:aSymbol,aBlock:aBlock,handlers:handlers},smalltalk.AthensWorldMorph)})},
messageSends: ["at:ifAbsent:", "at:put:", "new", "remove:"]}),
smalltalk.AthensWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMorphsUnderHandAt:",
fn: function (aPoint){
var self=this;
var oldMorphs;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
oldMorphs=self["@morphsUnderHand"];
self["@morphsUnderHand"]=self._morphsAtPosition_(aPoint);
_st(oldMorphs)._do_((function(m){
return smalltalk.withContext(function($ctx2) {
$1=_st(self["@morphsUnderHand"])._includes_(m);
if(! smalltalk.assert($1)){
return _st(m)._handleMouseLeave();
};
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1)})}));
_st(self["@morphsUnderHand"])._do_((function(m){
return smalltalk.withContext(function($ctx2) {
$2=_st(oldMorphs)._includes_(m);
if(! smalltalk.assert($2)){
return _st(m)._handleMouseEnter();
};
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateMorphsUnderHandAt:",{aPoint:aPoint,oldMorphs:oldMorphs},smalltalk.AthensWorldMorph)})},
messageSends: ["morphsAtPosition:", "do:", "ifFalse:", "handleMouseLeave", "includes:", "handleMouseEnter"]}),
smalltalk.AthensWorldMorph);


smalltalk.addMethod(
smalltalk.method({
selector: "forSurface:",
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._surface_(aSurface);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forSurface:",{aSurface:aSurface},smalltalk.AthensWorldMorph.klass)})},
messageSends: ["surface:", "new", "yourself"]}),
smalltalk.AthensWorldMorph.klass);


smalltalk.addClass('AthensDummyWorldMorph', smalltalk.AthensWorldMorph, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "addHalosTo:",
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"addHalosTo:",{aMorph:aMorph},smalltalk.AthensDummyWorldMorph)})},
messageSends: []}),
smalltalk.AthensDummyWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "hideHalos",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"hideHalos",{},smalltalk.AthensDummyWorldMorph)})},
messageSends: []}),
smalltalk.AthensDummyWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
self["@globalPathTransform"]=_st($AthensAffineTransform())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensDummyWorldMorph)})},
messageSends: ["new"]}),
smalltalk.AthensDummyWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "maxZIndex",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"maxZIndex",{},smalltalk.AthensDummyWorldMorph)})},
messageSends: []}),
smalltalk.AthensDummyWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redraw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"redraw",{},smalltalk.AthensDummyWorldMorph)})},
messageSends: []}),
smalltalk.AthensDummyWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "redraw:",
fn: function (aRect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"redraw:",{aRect:aRect},smalltalk.AthensDummyWorldMorph)})},
messageSends: []}),
smalltalk.AthensDummyWorldMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "submorphsZIndicesChanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"submorphsZIndicesChanged",{},smalltalk.AthensDummyWorldMorph)})},
messageSends: []}),
smalltalk.AthensDummyWorldMorph);


smalltalk.AthensDummyWorldMorph.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "instance",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@instance"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@instance"]=self._new();
self["@instance"];
} else {
$1;
};
$2=self["@instance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"instance",{},smalltalk.AthensDummyWorldMorph.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.AthensDummyWorldMorph.klass);


smalltalk.addClass('AthensMorphicEvent', smalltalk.Dictionary, [], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_(_st(aMessage)._selector());
return $1;
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.AthensMorphicEvent)})},
messageSends: ["at:", "selector"]}),
smalltalk.AthensMorphicEvent);



smalltalk.addClass('AthensVirtualTextAreaLine', smalltalk.Object, ['morph', 'text', 'hasLineBreak', 'nextLine'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "assert:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=aBoolean;
if(! smalltalk.assert($1)){
_st(aBoolean)._halt();
};
return self}, function($ctx1) {$ctx1.fill(self,"assert:",{aBoolean:aBoolean},smalltalk.AthensVirtualTextAreaLine)})},
messageSends: ["ifFalse:", "halt"]}),
smalltalk.AthensVirtualTextAreaLine);

smalltalk.addMethod(
smalltalk.method({
selector: "hasLineBreak",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@hasLineBreak"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasLineBreak",{},smalltalk.AthensVirtualTextAreaLine)})},
messageSends: []}),
smalltalk.AthensVirtualTextAreaLine);

smalltalk.addMethod(
smalltalk.method({
selector: "hasLineBreak:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hasLineBreak"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"hasLineBreak:",{aBoolean:aBoolean},smalltalk.AthensVirtualTextAreaLine)})},
messageSends: []}),
smalltalk.AthensVirtualTextAreaLine);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hasLineBreak"]=false;
self["@text"]="";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensVirtualTextAreaLine)})},
messageSends: []}),
smalltalk.AthensVirtualTextAreaLine);

smalltalk.addMethod(
smalltalk.method({
selector: "measureStringWidth:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@morph"])._virtualCanvas())._measureStringWidth_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"measureStringWidth:",{aString:aString},smalltalk.AthensVirtualTextAreaLine)})},
messageSends: ["measureStringWidth:", "virtualCanvas"]}),
smalltalk.AthensVirtualTextAreaLine);

smalltalk.addMethod(
smalltalk.method({
selector: "morph:",
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@morph"]=aMorph;
return self}, function($ctx1) {$ctx1.fill(self,"morph:",{aMorph:aMorph},smalltalk.AthensVirtualTextAreaLine)})},
messageSends: []}),
smalltalk.AthensVirtualTextAreaLine);

smalltalk.addMethod(
smalltalk.method({
selector: "nextLine:",
fn: function (aLine){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nextLine"]=aLine;
return self}, function($ctx1) {$ctx1.fill(self,"nextLine:",{aLine:aLine},smalltalk.AthensVirtualTextAreaLine)})},
messageSends: []}),
smalltalk.AthensVirtualTextAreaLine);

smalltalk.addMethod(
smalltalk.method({
selector: "pixelOffsetAfter:",
fn: function (anOffset){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._assert_(_st(anOffset).__gt((0)));
self._assert_(_st(anOffset).__lt_eq(self._size()));
$1=self._measureStringWidth_(_st(self["@text"])._copyFrom_to_((1),anOffset));
return $1;
}, function($ctx1) {$ctx1.fill(self,"pixelOffsetAfter:",{anOffset:anOffset},smalltalk.AthensVirtualTextAreaLine)})},
messageSends: ["assert:", ">", "<=", "size", "measureStringWidth:", "copyFrom:to:"]}),
smalltalk.AthensVirtualTextAreaLine);

smalltalk.addMethod(
smalltalk.method({
selector: "pixelOffsetBefore:",
fn: function (anOffset){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._assert_(_st(anOffset).__gt((0)));
$1=_st(anOffset).__eq_eq((1));
if(smalltalk.assert($1)){
return (0);
} else {
$2=self._pixelOffsetAfter_(_st(anOffset).__minus((1)));
return $2;
};
return self}, function($ctx1) {$ctx1.fill(self,"pixelOffsetBefore:",{anOffset:anOffset},smalltalk.AthensVirtualTextAreaLine)})},
messageSends: ["assert:", ">", "ifTrue:ifFalse:", "pixelOffsetAfter:", "-", "=="]}),
smalltalk.AthensVirtualTextAreaLine);

smalltalk.addMethod(
smalltalk.method({
selector: "populateWith:",
fn: function (aString){
var self=this;
var maxWidth;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
maxWidth=_st(self["@morph"])._maxWidth();
$1=_st(self._measureStringWidth_(aString)).__lt_eq(maxWidth);
if(smalltalk.assert($1)){
self["@text"]=aString;
self["@text"];
$2=_st(aString)._size();
return $2;
} else {
var stringLen;
stringLen=(1);
stringLen;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._measureStringWidth_(_st(aString)._copyFrom_to_((1),stringLen))).__lt(maxWidth);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
stringLen=_st(stringLen).__plus((1));
return stringLen;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@text"]=_st(aString)._copyFrom_to_((1),_st(stringLen).__minus((1)));
self["@text"];
$3=_st(stringLen).__minus((1));
return $3;
};
return self}, function($ctx1) {$ctx1.fill(self,"populateWith:",{aString:aString,maxWidth:maxWidth},smalltalk.AthensVirtualTextAreaLine)})},
messageSends: ["maxWidth", "ifTrue:ifFalse:", "size", "whileTrue:", "+", "<", "measureStringWidth:", "copyFrom:to:", "-", "<="]}),
smalltalk.AthensVirtualTextAreaLine);

smalltalk.addMethod(
smalltalk.method({
selector: "positionForPixelOffset:",
fn: function (aNumber){
var self=this;
var lastOffset;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
var $early={};
try {
lastOffset=(0);
_st((1)._to_(_st(self["@text"])._size()))._do_((function(charIndex){
var offset,midChar;
return smalltalk.withContext(function($ctx2) {
offset=self._measureStringWidth_(_st(self["@text"])._copyFrom_to_((1),charIndex));
offset;
midChar=_st(offset).__minus(_st(_st(offset).__minus(lastOffset)).__slash((2)));
midChar;
lastOffset=offset;
lastOffset;
$1=_st(aNumber).__lt_eq(midChar);
if(smalltalk.assert($1)){
$2=charIndex;
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({charIndex:charIndex,offset:offset,midChar:midChar},$ctx1)})}));
$3=self["@hasLineBreak"];
if(smalltalk.assert($3)){
$4=self._size();
return $4;
} else {
return (-1);
};
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"positionForPixelOffset:",{aNumber:aNumber,lastOffset:lastOffset},smalltalk.AthensVirtualTextAreaLine)})},
messageSends: ["do:", "measureStringWidth:", "copyFrom:to:", "-", "/", "ifTrue:", "<=", "to:", "size", "ifTrue:ifFalse:"]}),
smalltalk.AthensVirtualTextAreaLine);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@hasLineBreak"];
if(smalltalk.assert($1)){
$2=_st(_st(self["@text"])._size()).__plus((1));
return $2;
} else {
$3=_st(self["@text"])._size();
return $3;
};
return self}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.AthensVirtualTextAreaLine)})},
messageSends: ["ifTrue:ifFalse:", "+", "size"]}),
smalltalk.AthensVirtualTextAreaLine);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@hasLineBreak"];
if(smalltalk.assert($1)){
$2=_st(self["@text"]).__comma(_st($String())._fromCharCode_((13)));
return $2;
} else {
$3=self["@text"];
return $3;
};
return self}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.AthensVirtualTextAreaLine)})},
messageSends: ["ifTrue:ifFalse:", ",", "fromCharCode:"]}),
smalltalk.AthensVirtualTextAreaLine);


smalltalk.addMethod(
smalltalk.method({
selector: "forTextAreaMorph:",
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._morph_(aMorph);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forTextAreaMorph:",{aMorph:aMorph},smalltalk.AthensVirtualTextAreaLine.klass)})},
messageSends: ["morph:", "new", "yourself"]}),
smalltalk.AthensVirtualTextAreaLine.klass);


smalltalk.addClass('WorldState', smalltalk.Object, ['needsRedraw', 'world', 'damageRects'], 'Athens-Core-Morphic');
smalltalk.addMethod(
smalltalk.method({
selector: "damageArea:",
fn: function (aRect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@damageRects'].push(aRect); 
	self['@needsRedraw'] = true; ;
return self}, function($ctx1) {$ctx1.fill(self,"damageArea:",{aRect:aRect},smalltalk.WorldState)})},
messageSends: []}),
smalltalk.WorldState);

smalltalk.addMethod(
smalltalk.method({
selector: "damageWorld",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var zero = 0;
	console.log('damaging world');
	self['@damageRects'] = [];
	self._damageArea_(zero.__at(zero)._corner_(self['@world']._width().__at(self['@world']._height()))); ;
return self}, function($ctx1) {$ctx1.fill(self,"damageWorld",{},smalltalk.WorldState)})},
messageSends: []}),
smalltalk.WorldState);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@needsRedraw'] = false;
	self['@damageRects'] = []; ;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.WorldState)})},
messageSends: []}),
smalltalk.WorldState);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeRenderLoop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 setInterval(function() {
		if (self['@needsRedraw']) {
			self['@needsRedraw'] = false;
			self['@world']._redrawNow_(self['@damageRects']);
			self['@damageRects'] = [];
		}
	}, 0); ;
return self}, function($ctx1) {$ctx1.fill(self,"initializeRenderLoop",{},smalltalk.WorldState)})},
messageSends: []}),
smalltalk.WorldState);

smalltalk.addMethod(
smalltalk.method({
selector: "world:",
fn: function (aWorld){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@world"]=aWorld;
self._initializeRenderLoop();
return self}, function($ctx1) {$ctx1.fill(self,"world:",{aWorld:aWorld},smalltalk.WorldState)})},
messageSends: ["initializeRenderLoop"]}),
smalltalk.WorldState);


smalltalk.addMethod(
smalltalk.method({
selector: "for:",
fn: function (aWorld){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._world_(aWorld);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aWorld:aWorld},smalltalk.WorldState.klass)})},
messageSends: ["world:", "new", "yourself"]}),
smalltalk.WorldState.klass);



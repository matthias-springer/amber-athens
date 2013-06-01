smalltalk.addPackage('Athens-HTML-Paths');
smalltalk.addClass('AthensHTMLPathBuilder', smalltalk.AthensPathBuilder, ['surface', 'absolute', 'endPoint', 'pathCreatingBlock'], 'Athens-HTML-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "absolute",
category: 'path commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@absolute"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"absolute",{},smalltalk.AthensHTMLPathBuilder)})},
args: [],
source: "absolute\x0a\x09absolute := true.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._newPath();
self["@absolute"]=false;
self["@endPoint"]=_st(self._class())._zeroPoint();
self._moveToX_Y_((0),(0));
_st(aBlock)._value_(self);
return self}, function($ctx1) {$ctx1.fill(self,"createPath:",{aBlock:aBlock},smalltalk.AthensHTMLPathBuilder)})},
args: ["aBlock"],
source: "createPath: aBlock\x0a\x09self newPath.\x0a\x09\x0a\x09absolute := false.\x0a\x09endPoint := self class zeroPoint.\x0a\x09\x0a\x09\x22set the implicit path origin\x22\x0a\x09self moveToX: 0 Y: 0.\x0a\x0a\x09aBlock value: self.",
messageSends: ["newPath", "zeroPoint", "class", "moveToX:Y:", "value:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
category: 'path commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._moveToX_Y_((0),(0));
_st(self["@pathCreatingBlock"])._value_(self);
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.AthensHTMLPathBuilder)})},
args: [],
source: "draw\x0a\x09self moveToX: 0 Y: 0.\x0a\x09pathCreatingBlock value: self.",
messageSends: ["moveToX:Y:", "value:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
category: 'path commands',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@endPoint"]=self._toAbsolute_(aPoint);
$1=self._lineToX_Y_(_st(self["@endPoint"])._x(),_st(self["@endPoint"])._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.AthensHTMLPathBuilder)})},
args: ["aPoint"],
source: "lineTo: aPoint\x0a\x09endPoint := self toAbsolute: aPoint.\x0a\x09^ self lineToX: endPoint x Y: endPoint y",
messageSends: ["toAbsolute:", "lineToX:Y:", "x", "y"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "lineToX:Y:",
category: 'private',
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._lineTo_a_(x,y);
return self}, function($ctx1) {$ctx1.fill(self,"lineToX:Y:",{x:x,y:y},smalltalk.AthensHTMLPathBuilder)})},
args: ["x", "y"],
source: "lineToX: x Y: y\x0a\x09surface context2D lineTo: x a: y.",
messageSends: ["lineTo:a:", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "moveToX:Y:",
category: 'private',
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._moveTo_a_(x,y);
return self}, function($ctx1) {$ctx1.fill(self,"moveToX:Y:",{x:x,y:y},smalltalk.AthensHTMLPathBuilder)})},
args: ["x", "y"],
source: "moveToX: x Y: y\x0a\x09surface context2D moveTo: x a: y.",
messageSends: ["moveTo:a:", "context2D"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "newPath",
category: 'path commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"newPath",{},smalltalk.AthensHTMLPathBuilder)})},
args: [],
source: "newPath\x0a\x09\x22surface context2D beginPath.\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "paintFillsUsing:on:",
category: 'path commands',
fn: function (aPaint,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aPaint)._fillPath_on_(self,anAthensCanvas);
return $1;
}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPathBuilder)})},
args: ["aPaint", "anAthensCanvas"],
source: "paintFillsUsing: aPaint on: anAthensCanvas \x0a\x09^ aPaint fillPath: self on: anAthensCanvas",
messageSends: ["fillPath:on:"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "pathCreatingBlock",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@pathCreatingBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pathCreatingBlock",{},smalltalk.AthensHTMLPathBuilder)})},
args: [],
source: "pathCreatingBlock\x0a\x09^ pathCreatingBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "pathCreatingBlock:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@pathCreatingBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"pathCreatingBlock:",{aBlock:aBlock},smalltalk.AthensHTMLPathBuilder)})},
args: ["aBlock"],
source: "pathCreatingBlock: aBlock\x0a\x09pathCreatingBlock := aBlock.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

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
}, function($ctx1) {$ctx1.fill(self,"surface",{},smalltalk.AthensHTMLPathBuilder)})},
args: [],
source: "surface\x0a\x09^ surface",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{anObject:anObject},smalltalk.AthensHTMLPathBuilder)})},
args: ["anObject"],
source: "surface: anObject\x0a\x09surface := anObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "toAbsolute:",
category: 'path commands',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@absolute"];
if(smalltalk.assert($2)){
$1=aPoint;
} else {
$1=_st(self["@endPoint"]).__plus(aPoint);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"toAbsolute:",{aPoint:aPoint},smalltalk.AthensHTMLPathBuilder)})},
args: ["aPoint"],
source: "toAbsolute: aPoint\x0a\x09^ absolute \x0a\x09\x09\x09ifTrue: [aPoint] \x0a\x09\x09\x09ifFalse: [endPoint + aPoint]",
messageSends: ["ifTrue:ifFalse:", "+"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder);


smalltalk.addMethod(
smalltalk.method({
selector: "on:with:",
category: 'instance creation',
fn: function (anHTMLSurface,aPathCreatingBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._surface_(anHTMLSurface);
_st($2)._pathCreatingBlock_(aPathCreatingBlock);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:with:",{anHTMLSurface:anHTMLSurface,aPathCreatingBlock:aPathCreatingBlock},smalltalk.AthensHTMLPathBuilder.klass)})},
args: ["anHTMLSurface", "aPathCreatingBlock"],
source: "on: anHTMLSurface with: aPathCreatingBlock\x0a\x09^ self basicNew\x0a\x09\x09surface: anHTMLSurface;\x0a\x09\x09pathCreatingBlock: aPathCreatingBlock;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["surface:", "basicNew", "pathCreatingBlock:", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.AthensHTMLPathBuilder.klass);



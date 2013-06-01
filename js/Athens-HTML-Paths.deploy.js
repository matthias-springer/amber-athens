smalltalk.addPackage('Athens-HTML-Paths');
smalltalk.addClass('AthensHTMLPathBuilder', smalltalk.AthensPathBuilder, ['surface', 'absolute', 'endPoint', 'pathCreatingBlock'], 'Athens-HTML-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "absolute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@absolute"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"absolute",{},smalltalk.AthensHTMLPathBuilder)})},
messageSends: []}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._newPath();
self["@absolute"]=false;
self["@endPoint"]=_st(self._class())._zeroPoint();
self._moveToX_Y_((0),(0));
_st(aBlock)._value_(self);
return self}, function($ctx1) {$ctx1.fill(self,"createPath:",{aBlock:aBlock},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["newPath", "zeroPoint", "class", "moveToX:Y:", "value:"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._moveToX_Y_((0),(0));
_st(self["@pathCreatingBlock"])._value_(self);
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["moveToX:Y:", "value:"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@endPoint"]=self._toAbsolute_(aPoint);
$1=self._lineToX_Y_(_st(self["@endPoint"])._x(),_st(self["@endPoint"])._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["toAbsolute:", "lineToX:Y:", "x", "y"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "lineToX:Y:",
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._lineTo_a_(x,y);
return self}, function($ctx1) {$ctx1.fill(self,"lineToX:Y:",{x:x,y:y},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["lineTo:a:", "context2D"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "moveToX:Y:",
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@surface"])._context2D())._moveTo_a_(x,y);
return self}, function($ctx1) {$ctx1.fill(self,"moveToX:Y:",{x:x,y:y},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["moveTo:a:", "context2D"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "newPath",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"newPath",{},smalltalk.AthensHTMLPathBuilder)})},
messageSends: []}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "paintFillsUsing:on:",
fn: function (aPaint,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aPaint)._fillPath_on_(self,anAthensCanvas);
return $1;
}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPathBuilder)})},
messageSends: ["fillPath:on:"]}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "pathCreatingBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@pathCreatingBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pathCreatingBlock",{},smalltalk.AthensHTMLPathBuilder)})},
messageSends: []}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "pathCreatingBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@pathCreatingBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"pathCreatingBlock:",{aBlock:aBlock},smalltalk.AthensHTMLPathBuilder)})},
messageSends: []}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "surface",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@surface"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"surface",{},smalltalk.AthensHTMLPathBuilder)})},
messageSends: []}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{anObject:anObject},smalltalk.AthensHTMLPathBuilder)})},
messageSends: []}),
smalltalk.AthensHTMLPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "toAbsolute:",
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
messageSends: ["ifTrue:ifFalse:", "+"]}),
smalltalk.AthensHTMLPathBuilder);


smalltalk.addMethod(
smalltalk.method({
selector: "on:with:",
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
messageSends: ["surface:", "basicNew", "pathCreatingBlock:", "initialize", "yourself"]}),
smalltalk.AthensHTMLPathBuilder.klass);



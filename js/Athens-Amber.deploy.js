smalltalk.addPackage('Athens-Amber');
smalltalk.addClass('Color', smalltalk.Object, ['hexString', 'alpha'], 'Athens-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "alpha",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@alpha"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@alpha"]=(1);
self["@alpha"];
} else {
$1;
};
$2=self["@alpha"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"alpha",{},smalltalk.Color)})},
messageSends: ["ifNil:"]}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "alpha:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alpha"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"alpha:",{aNumber:aNumber},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "blue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return parseInt(self['@hexString'].substr(4, 2), 16) / 255.0; ;
return self}, function($ctx1) {$ctx1.fill(self,"blue",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "blueByte",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return parseInt(self['@hexString'].substr(4, 2), 16); ;
return self}, function($ctx1) {$ctx1.fill(self,"blueByte",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "green",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return parseInt(self['@hexString'].substr(2, 2), 16) / 255.0; ;
return self}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "greenByte",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return parseInt(self['@hexString'].substr(2, 2), 16); ;
return self}, function($ctx1) {$ctx1.fill(self,"greenByte",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "hexString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@hexString"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"hexString",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "hexString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hexString"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"hexString:",{aString:aString},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "red",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return parseInt(self['@hexString'].substr(0, 2), 16) / 255.0; ;
return self}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "redByte",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return parseInt(self['@hexString'].substr(0, 2), 16); ;
return self}, function($ctx1) {$ctx1.fill(self,"redByte",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "rgbaString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st(_st(_st("rgba(".__comma(_st(self._redByte())._asString())).__comma(", ")).__comma(_st(self._greenByte())._asString())).__comma(", ")).__comma(_st(self._blueByte())._asString())).__comma(", ")).__comma(_st(self._alpha())._asString())).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"rgbaString",{},smalltalk.Color)})},
messageSends: [",", "asString", "alpha", "blueByte", "greenByte", "redByte"]}),
smalltalk.Color);


smalltalk.addMethod(
smalltalk.method({
selector: "black",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._hexString_("000000");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"black",{},smalltalk.Color.klass)})},
messageSends: ["hexString:", "new", "yourself"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "blue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._hexString_("0000ff");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"blue",{},smalltalk.Color.klass)})},
messageSends: ["hexString:", "new", "yourself"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "gray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._hexString_("808080");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"gray",{},smalltalk.Color.klass)})},
messageSends: ["hexString:", "new", "yourself"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "green",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._hexString_("00ff00");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.Color.klass)})},
messageSends: ["hexString:", "new", "yourself"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "red",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._hexString_("ff0000");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.Color.klass)})},
messageSends: ["hexString:", "new", "yourself"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "transparent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._hexString_("000000");
_st($2)._alpha_((0));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"transparent",{},smalltalk.Color.klass)})},
messageSends: ["hexString:", "new", "alpha:", "yourself"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "white",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._hexString_("ffffff");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"white",{},smalltalk.Color.klass)})},
messageSends: ["hexString:", "new", "yourself"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "yellow",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._hexString_("ffff00");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"yellow",{},smalltalk.Color.klass)})},
messageSends: ["hexString:", "new", "yourself"]}),
smalltalk.Color.klass);


smalltalk.addClass('Rectangle', smalltalk.Object, ['origin', 'corner'], 'Athens-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "bottom",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@corner"])._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottom",{},smalltalk.Rectangle)})},
messageSends: ["y"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "corner",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@corner"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"corner",{},smalltalk.Rectangle)})},
messageSends: []}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "corner:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@corner"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"corner:",{aPoint:aPoint},smalltalk.Rectangle)})},
messageSends: []}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@corner"])._y()).__minus(_st(self["@origin"])._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.Rectangle)})},
messageSends: ["-", "y"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "left",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"left",{},smalltalk.Rectangle)})},
messageSends: ["x"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "origin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@origin"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"origin",{},smalltalk.Rectangle)})},
messageSends: []}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "origin:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@origin"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"origin:",{aPoint:aPoint},smalltalk.Rectangle)})},
messageSends: []}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "right",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@corner"])._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"right",{},smalltalk.Rectangle)})},
messageSends: ["x"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "top",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"top",{},smalltalk.Rectangle)})},
messageSends: ["y"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@corner"])._x()).__minus(_st(self["@origin"])._x());
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.Rectangle)})},
messageSends: ["-", "x"]}),
smalltalk.Rectangle);


smalltalk.addMethod(
smalltalk.method({
selector: "origin:corner:",
fn: function (originPoint,cornerPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._origin_(originPoint);
_st($2)._corner_(cornerPoint);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"origin:corner:",{originPoint:originPoint,cornerPoint:cornerPoint},smalltalk.Rectangle.klass)})},
messageSends: ["origin:", "basicNew", "corner:", "initialize", "yourself"]}),
smalltalk.Rectangle.klass);



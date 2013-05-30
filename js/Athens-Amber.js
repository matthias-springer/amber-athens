smalltalk.addPackage('Athens-Amber');
smalltalk.addClass('Color', smalltalk.Object, ['hexString', 'alpha'], 'Athens-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "alpha",
category: 'accessing',
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
args: [],
source: "alpha\x0a\x09alpha ifNil: [alpha := 1].\x0a\x09^ alpha",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "alpha:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alpha"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"alpha:",{aNumber:aNumber},smalltalk.Color)})},
args: ["aNumber"],
source: "alpha: aNumber\x0a\x09alpha := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "blue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return parseInt(self['@hexString'].substr(4, 2), 16) / 255.0; ;
return self}, function($ctx1) {$ctx1.fill(self,"blue",{},smalltalk.Color)})},
args: [],
source: "blue\x0a\x09< return parseInt(self['@hexString'].substr(4, 2), 16) / 255.0; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "green",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return parseInt(self['@hexString'].substr(2, 2), 16) / 255.0; ;
return self}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.Color)})},
args: [],
source: "green\x0a\x09< return parseInt(self['@hexString'].substr(2, 2), 16) / 255.0; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "hexString",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@hexString"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"hexString",{},smalltalk.Color)})},
args: [],
source: "hexString\x0a\x09^ hexString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "hexString:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hexString"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"hexString:",{aString:aString},smalltalk.Color)})},
args: ["aString"],
source: "hexString: aString\x0a\x09hexString := aString.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "red",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return parseInt(self['@hexString'].substr(0, 2), 16) / 255.0; ;
return self}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.Color)})},
args: [],
source: "red\x0a\x09< return parseInt(self['@hexString'].substr(0, 2), 16) / 255.0; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);


smalltalk.addMethod(
smalltalk.method({
selector: "black",
category: 'instance creation',
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
args: [],
source: "black\x0a\x09^ self new\x0a\x09\x09hexString: '000000';\x0a\x09\x09yourself",
messageSends: ["hexString:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "blue",
category: 'instance creation',
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
args: [],
source: "blue\x0a\x09^ self new\x0a\x09\x09hexString: '0000ff';\x0a\x09\x09yourself",
messageSends: ["hexString:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "gray",
category: 'instance creation',
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
args: [],
source: "gray\x0a\x09^ self new\x0a\x09\x09hexString: '808080';\x0a\x09\x09yourself",
messageSends: ["hexString:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "green",
category: 'instance creation',
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
args: [],
source: "green\x0a\x09^ self new\x0a\x09\x09hexString: '00ff00';\x0a\x09\x09yourself",
messageSends: ["hexString:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "red",
category: 'instance creation',
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
args: [],
source: "red\x0a\x09^ self new\x0a\x09\x09hexString: 'ff0000';\x0a\x09\x09yourself",
messageSends: ["hexString:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "transparent",
category: 'instance creation',
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
args: [],
source: "transparent\x0a\x09^ self new\x0a\x09\x09hexString: '000000';\x0a\x09\x09alpha: 0;\x0a\x09\x09yourself",
messageSends: ["hexString:", "new", "alpha:", "yourself"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "white",
category: 'instance creation',
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
args: [],
source: "white\x0a\x09^ self new\x0a\x09\x09hexString: 'ffffff';\x0a\x09\x09yourself",
messageSends: ["hexString:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "yellow",
category: 'instance creation',
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
args: [],
source: "yellow\x0a\x09^ self new\x0a\x09\x09hexString: 'ffff00';\x0a\x09\x09yourself",
messageSends: ["hexString:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Color.klass);


smalltalk.addClass('Rectangle', smalltalk.Object, ['origin', 'corner'], 'Athens-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "bottom",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@corner"])._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottom",{},smalltalk.Rectangle)})},
args: [],
source: "bottom\x0a\x09^ corner y",
messageSends: ["y"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "corner",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@corner"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"corner",{},smalltalk.Rectangle)})},
args: [],
source: "corner\x0a\x09^ corner",
messageSends: [],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "corner:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@corner"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"corner:",{aPoint:aPoint},smalltalk.Rectangle)})},
args: ["aPoint"],
source: "corner: aPoint\x0a\x09corner := aPoint.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@corner"])._y()).__minus(_st(self["@origin"])._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.Rectangle)})},
args: [],
source: "height\x0a\x09^ corner y - origin y",
messageSends: ["-", "y"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "left",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"left",{},smalltalk.Rectangle)})},
args: [],
source: "left\x0a\x09^ origin x",
messageSends: ["x"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "origin",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@origin"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"origin",{},smalltalk.Rectangle)})},
args: [],
source: "origin\x0a\x09^ origin",
messageSends: [],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "origin:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@origin"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"origin:",{aPoint:aPoint},smalltalk.Rectangle)})},
args: ["aPoint"],
source: "origin: aPoint\x0a\x09origin := aPoint.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "right",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@corner"])._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"right",{},smalltalk.Rectangle)})},
args: [],
source: "right\x0a\x09^ corner x",
messageSends: ["x"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "top",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"top",{},smalltalk.Rectangle)})},
args: [],
source: "top\x0a\x09^ origin y",
messageSends: ["y"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@corner"])._x()).__minus(_st(self["@origin"])._x());
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.Rectangle)})},
args: [],
source: "width\x0a\x09^ corner x - origin x",
messageSends: ["-", "x"],
referencedClasses: []
}),
smalltalk.Rectangle);


smalltalk.addMethod(
smalltalk.method({
selector: "origin:corner:",
category: 'instance creation',
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
args: ["originPoint", "cornerPoint"],
source: "origin: originPoint corner: cornerPoint\x0a\x09^ self basicNew\x0a\x09\x09origin: originPoint;\x0a\x09\x09corner: cornerPoint;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["origin:", "basicNew", "corner:", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.Rectangle.klass);



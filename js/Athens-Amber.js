smalltalk.addPackage('Athens-Amber');
smalltalk.addClass('Bitmap', smalltalk.Object, ['url'], 'Athens-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "image",
category: 'accessing',
fn: function (){
var self=this;
function $Image(){return smalltalk.Image||(typeof Image=="undefined"?nil:Image)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Image())._fromUrl_(self["@url"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"image",{},smalltalk.Bitmap)})},
args: [],
source: "image\x0a\x09^ Image fromUrl: url",
messageSends: ["fromUrl:"],
referencedClasses: ["Image"]
}),
smalltalk.Bitmap);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
category: 'accessing',
fn: function (anUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@url"]=anUrl;
return self}, function($ctx1) {$ctx1.fill(self,"url:",{anUrl:anUrl},smalltalk.Bitmap)})},
args: ["anUrl"],
source: "url: anUrl\x0a\x09url := anUrl.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Bitmap);


smalltalk.addMethod(
smalltalk.method({
selector: "fromUrl:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._url_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromUrl:",{aString:aString},smalltalk.Bitmap.klass)})},
args: ["aString"],
source: "fromUrl: aString\x0a\x09^ self new\x0a\x09\x09url: aString;\x0a\x09\x09yourself",
messageSends: ["url:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Bitmap.klass);


smalltalk.addClass('Color', smalltalk.Object, ['hexString', 'alpha', 'r', 'g', 'b'], 'Athens-Amber');
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
selector: "b:",
category: 'accessing',
fn: function (blue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@b"]=blue;
return self}, function($ctx1) {$ctx1.fill(self,"b:",{blue:blue},smalltalk.Color)})},
args: ["blue"],
source: "b: blue\x0a\x09b := blue.",
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
var $1;
$1=self["@b"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"blue",{},smalltalk.Color)})},
args: [],
source: "blue\x0a\x09^ b",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "g:",
category: 'accessing',
fn: function (green){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@g"]=green;
return self}, function($ctx1) {$ctx1.fill(self,"g:",{green:green},smalltalk.Color)})},
args: ["green"],
source: "g: green\x0a\x09g := green.",
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
var $1;
$1=self["@g"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.Color)})},
args: [],
source: "green\x0a\x09^ g",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "r:",
category: 'accessing',
fn: function (red){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@r"]=red;
return self}, function($ctx1) {$ctx1.fill(self,"r:",{red:red},smalltalk.Color)})},
args: ["red"],
source: "r: red\x0a\x09r := red.",
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
var $1;
$1=self["@r"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.Color)})},
args: [],
source: "red\x0a\x09^ r",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "rgbaString",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st(_st(_st("rgba(".__comma(_st(_st(_st(self["@r"]).__star((255)))._rounded())._asString())).__comma(", ")).__comma(_st(_st(_st(self["@g"]).__star((255)))._rounded())._asString())).__comma(", ")).__comma(_st(_st(_st(self["@b"]).__star((255)))._rounded())._asString())).__comma(", ")).__comma(_st(self._alpha())._asString())).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"rgbaString",{},smalltalk.Color)})},
args: [],
source: "rgbaString\x0a\x09^ 'rgba(', (r*255) rounded asString, ', ', (g*255) rounded asString, ', ', (b*255) rounded asString, ', ', self alpha asString, ')'",
messageSends: [",", "asString", "alpha", "rounded", "*"],
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
_st($2)._r_((0));
_st($2)._g_((0));
_st($2)._b_((0));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"black",{},smalltalk.Color.klass)})},
args: [],
source: "black\x0a\x09^ self new\x0a\x09\x09r: 0; g: 0; b: 0;\x0a\x09\x09yourself",
messageSends: ["r:", "new", "g:", "b:", "yourself"],
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
_st($2)._r_((0));
_st($2)._g_((0));
_st($2)._b_((1));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"blue",{},smalltalk.Color.klass)})},
args: [],
source: "blue\x0a\x09^ self new\x0a\x09\x09r: 0; g: 0; b: 1;\x0a\x09\x09yourself",
messageSends: ["r:", "new", "g:", "b:", "yourself"],
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
_st($2)._r_((0.5));
_st($2)._g_((0.5));
_st($2)._b_((0.5));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"gray",{},smalltalk.Color.klass)})},
args: [],
source: "gray\x0a\x09^ self new\x0a\x09\x09r: 0.5; g: 0.5; b: 0.5;\x0a\x09\x09yourself",
messageSends: ["r:", "new", "g:", "b:", "yourself"],
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
_st($2)._r_((0));
_st($2)._g_((1));
_st($2)._b_((0));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.Color.klass)})},
args: [],
source: "green\x0a\x09^ self new\x0a\x09\x09r: 0; g: 1; b: 0;\x0a\x09\x09yourself",
messageSends: ["r:", "new", "g:", "b:", "yourself"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "r:g:b:",
category: 'instance creation',
fn: function (red,green,blue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._r_(red);
_st($2)._g_(green);
_st($2)._b_(blue);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"r:g:b:",{red:red,green:green,blue:blue},smalltalk.Color.klass)})},
args: ["red", "green", "blue"],
source: "r: red g: green b: blue\x0a\x09^ self new\x0a\x09\x09r: red; g: green; b: blue;\x0a\x09\x09yourself",
messageSends: ["r:", "new", "g:", "b:", "yourself"],
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
_st($2)._r_((1));
_st($2)._g_((0));
_st($2)._b_((0));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.Color.klass)})},
args: [],
source: "red\x0a\x09^ self new\x0a\x09\x09r: 1; g: 0; b: 0;\x0a\x09\x09yourself",
messageSends: ["r:", "new", "g:", "b:", "yourself"],
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
_st($2)._r_((0));
_st($2)._g_((0));
_st($2)._b_((0));
_st($2)._alpha_((0));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"transparent",{},smalltalk.Color.klass)})},
args: [],
source: "transparent\x0a\x09^ self new\x0a\x09\x09r: 0; g: 0; b: 0;\x0a\x09\x09alpha: 0;\x0a\x09\x09yourself",
messageSends: ["r:", "new", "g:", "b:", "alpha:", "yourself"],
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
_st($2)._r_((1));
_st($2)._g_((1));
_st($2)._b_((1));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"white",{},smalltalk.Color.klass)})},
args: [],
source: "white\x0a\x09^ self new\x0a\x09\x09r: 1; g: 1; b: 1;\x0a\x09\x09yourself",
messageSends: ["r:", "new", "g:", "b:", "yourself"],
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
_st($2)._r_((1));
_st($2)._g_((1));
_st($2)._b_((0));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"yellow",{},smalltalk.Color.klass)})},
args: [],
source: "yellow\x0a\x09^ self new\x0a\x09\x09r: 1; g: 1; b: 0;\x0a\x09\x09yourself",
messageSends: ["r:", "new", "g:", "b:", "yourself"],
referencedClasses: []
}),
smalltalk.Color.klass);


smalltalk.addClass('Image', smalltalk.Object, [], 'Athens-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "complete",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.complete;;
return self}, function($ctx1) {$ctx1.fill(self,"complete",{},smalltalk.Image)})},
args: [],
source: "complete\x0a\x09<return self.complete;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Image);

smalltalk.addMethod(
smalltalk.method({
selector: "onLoad:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.onload = aBlock;;
return self}, function($ctx1) {$ctx1.fill(self,"onLoad:",{aBlock:aBlock},smalltalk.Image)})},
args: ["aBlock"],
source: "onLoad: aBlock\x0a \x09<self.onload = aBlock;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Image);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (anUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.src = anUrl;;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{anUrl:anUrl},smalltalk.Image)})},
args: ["anUrl"],
source: "source: anUrl\x0a\x09<self.src = anUrl;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Image);

smalltalk.addMethod(
smalltalk.method({
selector: "yourself",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self;
return self}, function($ctx1) {$ctx1.fill(self,"yourself",{},smalltalk.Image)})},
args: [],
source: "yourself\x0a\x09<return self>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Image);


smalltalk.addMethod(
smalltalk.method({
selector: "fromUrl:",
category: 'instance creation',
fn: function (anUrl){
var self=this;
function $Image(){return smalltalk.Image||(typeof Image=="undefined"?nil:Image)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Image())._new();
_st($2)._source_(anUrl);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromUrl:",{anUrl:anUrl},smalltalk.Image.klass)})},
args: ["anUrl"],
source: "fromUrl: anUrl\x0a\x09^ Image new\x0a\x09\x09source: anUrl;\x0a\x09\x09yourself",
messageSends: ["source:", "new", "yourself"],
referencedClasses: ["Image"]
}),
smalltalk.Image.klass);


smalltalk.addClass('LogicalFont', smalltalk.Object, ['familyName', 'pointSize'], 'Athens-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "asHTMLString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@pointSize"])._asString()).__comma("px ")).__comma(self["@familyName"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asHTMLString",{},smalltalk.LogicalFont)})},
args: [],
source: "asHTMLString\x0a\x09^ pointSize asString, 'px ', familyName",
messageSends: [",", "asString"],
referencedClasses: []
}),
smalltalk.LogicalFont);

smalltalk.addMethod(
smalltalk.method({
selector: "familyName:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@familyName"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"familyName:",{aString:aString},smalltalk.LogicalFont)})},
args: ["aString"],
source: "familyName: aString\x0a\x09familyName := aString.",
messageSends: [],
referencedClasses: []
}),
smalltalk.LogicalFont);

smalltalk.addMethod(
smalltalk.method({
selector: "pointSize:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@pointSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"pointSize:",{anInteger:anInteger},smalltalk.LogicalFont)})},
args: ["anInteger"],
source: "pointSize: anInteger\x0a\x09pointSize := anInteger.",
messageSends: [],
referencedClasses: []
}),
smalltalk.LogicalFont);


smalltalk.addMethod(
smalltalk.method({
selector: "familyName:pointSize:",
category: 'instance creation',
fn: function (aString,anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._familyName_(aString);
_st($2)._pointSize_(anInteger);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"familyName:pointSize:",{aString:aString,anInteger:anInteger},smalltalk.LogicalFont.klass)})},
args: ["aString", "anInteger"],
source: "familyName: aString pointSize: anInteger\x0a\x09^ self new\x0a\x09\x09familyName: aString;\x0a\x09\x09pointSize: anInteger;\x0a\x09\x09yourself",
messageSends: ["familyName:", "new", "pointSize:", "yourself"],
referencedClasses: []
}),
smalltalk.LogicalFont.klass);


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


smalltalk.addMethod(
smalltalk.method({
selector: "millisecondClockValue",
category: '*Athens-Amber',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return new Date().getMilliseconds(); ;
return self}, function($ctx1) {$ctx1.fill(self,"millisecondClockValue",{},smalltalk.Date.klass)})},
args: [],
source: "millisecondClockValue\x0a\x09< return new Date().getMilliseconds(); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date.klass);


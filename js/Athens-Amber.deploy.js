smalltalk.addPackage('Athens-Amber');
smalltalk.addClass('Bitmap', smalltalk.Object, ['url'], 'Athens-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "image",
fn: function (){
var self=this;
function $Image(){return smalltalk.Image||(typeof Image=="undefined"?nil:Image)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Image())._fromUrl_(self["@url"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"image",{},smalltalk.Bitmap)})},
messageSends: ["fromUrl:"]}),
smalltalk.Bitmap);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
fn: function (anUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@url"]=anUrl;
return self}, function($ctx1) {$ctx1.fill(self,"url:",{anUrl:anUrl},smalltalk.Bitmap)})},
messageSends: []}),
smalltalk.Bitmap);


smalltalk.addMethod(
smalltalk.method({
selector: "fromUrl:",
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
messageSends: ["url:", "new", "yourself"]}),
smalltalk.Bitmap.klass);


smalltalk.addClass('Color', smalltalk.Object, ['rgbaString', 'alpha', 'r', 'g', 'b'], 'Athens-Amber');
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
self["@rgbaString"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"alpha:",{aNumber:aNumber},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "b:",
fn: function (blue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@b"]=blue;
self["@rgbaString"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"b:",{blue:blue},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "blue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@b"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"blue",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "g:",
fn: function (green){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@g"]=green;
self["@rgbaString"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"g:",{green:green},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "green",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@g"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "r:",
fn: function (red){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@r"]=red;
self["@rgbaString"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"r:",{red:red},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "red",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@r"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "rgbaString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 if (self['@rgbaString'] !== undefined && !self['@rgbaString']._isNil()) {
		return self['@rgbaString'];
	}
	else {
		if (self['@alpha'] === undefined) { 
			return self['@rgbaString'] = 'rgba(' + Math.round(self['@r']*255) + ',' + Math.round(self['@g']*255) + ',' + Math.round(self['@b']*255) + ',1)';
		}
		else {
			return self['@rgbaString'] = 'rgba(' + Math.round(self['@r']*255) + ',' + Math.round(self['@g']*255) + ',' + Math.round(self['@b']*255) + ',' + self['@alpha'] + ')';
		}
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"rgbaString",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);


smalltalk.addMethod(
smalltalk.method({
selector: "black",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0, 0, 0, 'rgba(0,0,0,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"black",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "blue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0, 0, 1, 'rgba(0,0,255,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"blue",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "gray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.5, 0.5, 0.5, 'rgba(128, 128, 128, 1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"gray",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "green",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0, 1, 0, 'rgba(0,255,0,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "r:g:b:",
fn: function (red,green,blue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var instance = self._new();
	instance['@r'] = red;
	instance['@g'] = green;
	instance['@b'] = blue;
	return instance; ;
return self}, function($ctx1) {$ctx1.fill(self,"r:g:b:",{red:red,green:green,blue:blue},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "r:g:b:rgba:",
fn: function (red,green,blue,rgbaString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var instance = self._new();
	instance['@r'] = red;
	instance['@g'] = green;
	instance['@b'] = blue;
	instance['@rgbaString'] = rgbaString;
	return instance; ;
return self}, function($ctx1) {$ctx1.fill(self,"r:g:b:rgba:",{red:red,green:green,blue:blue,rgbaString:rgbaString},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "red",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(1, 0, 0, 'rgba(255,0,0,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "transparent",
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
messageSends: ["r:", "new", "g:", "b:", "alpha:", "yourself"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "white",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(1, 1, 1, 'rgba(255,255,255,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"white",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "yellow",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(1, 1, 0, 'rgba(255,255,0,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"yellow",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);


smalltalk.addClass('Image', smalltalk.Object, [], 'Athens-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "complete",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.complete; ;
return self}, function($ctx1) {$ctx1.fill(self,"complete",{},smalltalk.Image)})},
messageSends: []}),
smalltalk.Image);

smalltalk.addMethod(
smalltalk.method({
selector: "onLoad:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.onload = aBlock; ;
return self}, function($ctx1) {$ctx1.fill(self,"onLoad:",{aBlock:aBlock},smalltalk.Image)})},
messageSends: []}),
smalltalk.Image);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
fn: function (anUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.src = anUrl; ;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{anUrl:anUrl},smalltalk.Image)})},
messageSends: []}),
smalltalk.Image);

smalltalk.addMethod(
smalltalk.method({
selector: "yourself",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self; ;
return self}, function($ctx1) {$ctx1.fill(self,"yourself",{},smalltalk.Image)})},
messageSends: []}),
smalltalk.Image);


smalltalk.addMethod(
smalltalk.method({
selector: "fromUrl:",
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
messageSends: ["source:", "new", "yourself"]}),
smalltalk.Image.klass);


smalltalk.addClass('LogicalFont', smalltalk.Object, ['familyName', 'pointSize'], 'Athens-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "asHTMLString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self['@pointSize'].toString() + 'px ' + self['@familyName']; ;
return self}, function($ctx1) {$ctx1.fill(self,"asHTMLString",{},smalltalk.LogicalFont)})},
messageSends: []}),
smalltalk.LogicalFont);

smalltalk.addMethod(
smalltalk.method({
selector: "familyName:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@familyName"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"familyName:",{aString:aString},smalltalk.LogicalFont)})},
messageSends: []}),
smalltalk.LogicalFont);

smalltalk.addMethod(
smalltalk.method({
selector: "pointSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@pointSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pointSize",{},smalltalk.LogicalFont)})},
messageSends: []}),
smalltalk.LogicalFont);

smalltalk.addMethod(
smalltalk.method({
selector: "pointSize:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@pointSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"pointSize:",{anInteger:anInteger},smalltalk.LogicalFont)})},
messageSends: []}),
smalltalk.LogicalFont);


smalltalk.addMethod(
smalltalk.method({
selector: "familyName:pointSize:",
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
messageSends: ["familyName:", "new", "pointSize:", "yourself"]}),
smalltalk.LogicalFont.klass);


smalltalk.addClass('Rectangle', smalltalk.Object, ['origin', 'corner'], 'Athens-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "asPolygon",
fn: function (){
var self=this;
function $AthensPolygon(){return smalltalk.AthensPolygon||(typeof AthensPolygon=="undefined"?nil:AthensPolygon)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($AthensPolygon())._new();
_st($2)._moveTo_(self["@origin"]);
_st($2)._lineTo_(_st(_st(self["@corner"])._x()).__at(_st(self["@origin"])._y()));
_st($2)._lineTo_(_st(_st(self["@corner"])._x()).__at(_st(self["@corner"])._y()));
_st($2)._lineTo_(_st(_st(self["@origin"])._x()).__at(_st(self["@corner"])._y()));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asPolygon",{},smalltalk.Rectangle)})},
messageSends: ["moveTo:", "new", "lineTo:", "@", "y", "x", "yourself"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "bottom",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self['@corner']['@y']; ;
return self}, function($ctx1) {$ctx1.fill(self,"bottom",{},smalltalk.Rectangle)})},
messageSends: []}),
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
selector: "drawOn:",
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 canvas['@surface']['@context2D'].rect(self._left(), self._top(), self._width(0), self._height()); ;
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.Rectangle)})},
messageSends: []}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self['@corner']['@y'] -  self['@origin']['@y']; ;
return self}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.Rectangle)})},
messageSends: []}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "left",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self['@origin']['@x']; ;
return self}, function($ctx1) {$ctx1.fill(self,"left",{},smalltalk.Rectangle)})},
messageSends: []}),
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
 return self['@corner']['@x']; ;
return self}, function($ctx1) {$ctx1.fill(self,"right",{},smalltalk.Rectangle)})},
messageSends: []}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "top",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self['@origin']['@y']; ;
return self}, function($ctx1) {$ctx1.fill(self,"top",{},smalltalk.Rectangle)})},
messageSends: []}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self['@corner']['@x'] - self['@origin']['@x']; ;
return self}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.Rectangle)})},
messageSends: []}),
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


smalltalk.addMethod(
smalltalk.method({
selector: "reverseDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=self.length-1;-1<i;i--){aBlock._value_(self[i]);};
return self}, function($ctx1) {$ctx1.fill(self,"reverseDo:",{aBlock:aBlock},smalltalk.SequenceableCollection)})},
messageSends: []}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "millisecondClockValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return new Date().getTime(); ;
return self}, function($ctx1) {$ctx1.fill(self,"millisecondClockValue",{},smalltalk.Date.klass)})},
messageSends: []}),
smalltalk.Date.klass);


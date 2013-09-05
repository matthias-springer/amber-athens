smalltalk.addPackage('Athens-Core-Matrices');
smalltalk.addClass('AthensAffineTransform', smalltalk.AthensTransform, ['sx', 'shx', 'x', 'shy', 'sy', 'y'], 'Athens-Core-Matrices');
smalltalk.addMethod(
smalltalk.method({
selector: "clearTranslation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@y"]=(0);
self["@x"]=self["@y"];
return self}, function($ctx1) {$ctx1.fill(self,"clearTranslation",{},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._loadIdentity();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensAffineTransform)})},
messageSends: ["loadIdentity"]}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "inverseTransform:",
fn: function (aPoint){
var self=this;
var px,py,y0,x0;
return smalltalk.withContext(function($ctx1) { 
var $1;
px=_st(aPoint)._x();
py=_st(aPoint)._y();
y0=_st(_st(_st(_st(_st(self["@sx"]).__star(py)).__minus(_st(self["@sx"]).__star(self["@y"]))).__minus(_st(self["@shy"]).__star(px))).__plus(_st(self["@shy"]).__star(self["@x"]))).__slash(_st(_st(self["@sx"]).__star(self["@sy"])).__minus(_st(self["@shy"]).__star(self["@shx"])));
x0=_st(_st(_st(px).__minus(self["@x"])).__minus(_st(self["@shx"]).__star(y0))).__slash(self["@sx"]);
$1=_st(x0).__at(y0);
return $1;
}, function($ctx1) {$ctx1.fill(self,"inverseTransform:",{aPoint:aPoint,px:px,py:py,y0:y0,x0:x0},smalltalk.AthensAffineTransform)})},
messageSends: ["x", "y", "/", "-", "*", "+", "@"]}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "inverted",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notYetImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"inverted",{},smalltalk.AthensAffineTransform)})},
messageSends: ["notYetImplemented"]}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "loadAffineTransform:",
fn: function (m){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@x'] = m['@x'];
	self['@y'] = m['@y'];
	self['@sx'] = m['@sx'];
	self['@sy'] = m['@sy'];
	self['@shx'] = m['@shx'];
	self['@shy'] = m['@shy']; ;
return self}, function($ctx1) {$ctx1.fill(self,"loadAffineTransform:",{m:m},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "loadGlobalIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@sx'] = self['@sy'] = 1.0;
	self['@shx'] = self['@shy'] = self['@x'] = self['@y'] = 0.0; ;
return self}, function($ctx1) {$ctx1.fill(self,"loadGlobalIdentity",{},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "loadIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@sx'] = self['@sy'] = 1.0;
	self['@shx'] = self['@shy'] = self['@x'] = self['@y'] = 0.0; ;
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "multiplyBy:",
fn: function (m){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var nsx, nshx, nx, nshy, nsy, ny;
	nsx = self['@sx'] * m['@sx'] + self['@shx'] * m['@shy'];
	nshx = self['@sx'] * m['@shx'] + self['@shx'] * m['@sy'];
	nx = self['@sx'] * m['@x'] + self['@shx'] * m['@y'] + self['@x'];
	
	nshy = self['@shy'] * m['@sx'] + self['@sy'] * m['@shy'];
	nsy = self['@shy'] * m['@shx']  + self['@sy'] * m['@sy'];
	ny = self['@shy'] * m['@x'] + self['@sy'] * m['@y'] + self['@y'];
	
	self['@sx'] = nsx;
	self['@sy'] = nsy;
	self['@shx'] = nshx;
	self['@shy'] = nshy;
	self['@x'] = nx;
	self['@y'] = ny; ;
return self}, function($ctx1) {$ctx1.fill(self,"multiplyBy:",{m:m},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "restoreAfter:",
fn: function (aBlock){
var self=this;
var previous;
return smalltalk.withContext(function($ctx1) { 
previous=self._copy();
_st(aBlock)._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return self._loadAffineTransform_(previous);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"restoreAfter:",{aBlock:aBlock,previous:previous},smalltalk.AthensAffineTransform)})},
messageSends: ["copy", "ensure:", "loadAffineTransform:"]}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByDegrees:",
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var cos = Math.cos(angle / 180.0 * Math.PI);
	var sin = Math.sin(angle / 180.0 * Math.PI);
	
	var newSx = self['@sx']*cos + self['@shx']*sin;
	var newSy = self['@sy']*cos - self['@shy']*sin;
	
	self['@shx'] = self['@shx']*cos - self['@sx']*sin;
	self['@shy'] = self['@shy']*cos + self['@sy']*sin;
	
	self['@sx'] = newSx;
	self['@sy'] = newSy; ;
return self}, function($ctx1) {$ctx1.fill(self,"rotateByDegrees:",{angle:angle},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByRadians:",
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var cos = Math.cos(angle);
	var sin = Math.sin(angle);
	
	var newSx = self['@sx']*cos + self['@shx']*sin;
	var newSy = self['@sy']*cos - self['@shy']*sin;
	
	self['@shx'] = self['@shx']*cos - self['@sx']*sin;
	self['@shy'] = self['@shy']*cos + self['@sy']*sin;
	
	self['@sx'] = newSx;
	self['@sy'] = newSy; ;
return self}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{angle:angle},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "scale",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@sx"]).__at(self["@sy"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"scale",{},smalltalk.AthensAffineTransform)})},
messageSends: ["@"]}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:",
fn: function (factor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 if (factor.constructor === Number) {
		self['@sx'] *= factor;
		self['@shx'] *= factor;
		self['@sy'] *= factor;
		self['@shy'] *= factor;
	}
	else {
		self['@sx'] *= factor._x();;
		self['@shx'] *= factor._y();
		self['@sy'] *= factor._y();
		self['@shy'] *= factor._x();
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{factor:factor},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleByX:Y:",
fn: function (fx,fy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@sx'] *= fx;
	self['@shx'] *= fx;
	self['@sy'] *= fy;
	self['@shy'] *= fy; ;
return self}, function($ctx1) {$ctx1.fill(self,"scaleByX:Y:",{fx:fx,fy:fy},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "shx",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shx"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shx",{},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "shx:",
fn: function (number){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shx"]=number;
return self}, function($ctx1) {$ctx1.fill(self,"shx:",{number:number},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "shy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shy"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shy",{},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "shy:",
fn: function (number){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shy"]=number;
return self}, function($ctx1) {$ctx1.fill(self,"shy:",{number:number},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "sx",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sx"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sx",{},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "sx:",
fn: function (number){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sx"]=number;
return self}, function($ctx1) {$ctx1.fill(self,"sx:",{number:number},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "sy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sy"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sy",{},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "sy:",
fn: function (number){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sy"]=number;
return self}, function($ctx1) {$ctx1.fill(self,"sy:",{number:number},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "transform:",
fn: function (aPoint){
var self=this;
var px,py;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
px=_st(aPoint)._x();
py=_st(aPoint)._y();
$1=_st($Point())._x_y_(_st(_st(_st(self["@sx"]).__star(px)).__plus(_st(self["@shx"]).__star(py))).__plus(self["@x"]),_st(_st(_st(self["@shy"]).__star(px)).__plus(_st(self["@sy"]).__star(py))).__plus(self["@y"]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"transform:",{aPoint:aPoint,px:px,py:py},smalltalk.AthensAffineTransform)})},
messageSends: ["x", "y", "x:y:", "+", "*"]}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "transformX:Y:",
fn: function (px,py){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Point())._x_y_(_st(_st(_st(self["@sx"]).__star(px)).__plus(_st(self["@shx"]).__star(py))).__plus(self["@x"]),_st(_st(_st(self["@shy"]).__star(px)).__plus(_st(self["@sy"]).__star(py))).__plus(self["@y"]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"transformX:Y:",{px:px,py:py},smalltalk.AthensAffineTransform)})},
messageSends: ["x:y:", "+", "*"]}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var px = aPoint._x();
	var py = aPoint._y();
	self['@x'] += self['@sx']*px + self['@shx']*py;
	self['@y'] += self['@shy']*px + self['@sy']*py; ;
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "translateByX:Y:",
fn: function (px,py){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@x'] += self['@sx']*px + self['@shx']*py;
	self['@y'] += self['@shy']*px + self['@sy']*py; ;
return self}, function($ctx1) {$ctx1.fill(self,"translateByX:Y:",{px:px,py:py},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "translation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@x"]).__at(self["@y"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"translation",{},smalltalk.AthensAffineTransform)})},
messageSends: ["@"]}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "translation:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@x"]=_st(aPoint)._x();
self["@y"]=_st(aPoint)._y();
return self}, function($ctx1) {$ctx1.fill(self,"translation:",{aPoint:aPoint},smalltalk.AthensAffineTransform)})},
messageSends: ["x", "y"]}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "transposed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var s = self['@shx'];
	self['@shx'] = self['@shy'];
	self['@shy'] = s; ;
return self}, function($ctx1) {$ctx1.fill(self,"transposed",{},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "x",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@x"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"x",{},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "x:",
fn: function (number){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@x"]=number;
return self}, function($ctx1) {$ctx1.fill(self,"x:",{number:number},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "y",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@y"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"y",{},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "y:",
fn: function (number){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@y"]=number;
return self}, function($ctx1) {$ctx1.fill(self,"y:",{number:number},smalltalk.AthensAffineTransform)})},
messageSends: []}),
smalltalk.AthensAffineTransform);



smalltalk.addClass('AthensGenericTransform', smalltalk.AthensAffineTransform, ['w0', 'w1', 'w2'], 'Athens-Core-Matrices');
smalltalk.addMethod(
smalltalk.method({
selector: "loadIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensAffineTransform.fn.prototype._loadIdentity.apply(_st(self), []);
self["@w1"]=(0);
self["@w0"]=self["@w1"];
self["@w2"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensGenericTransform)})},
messageSends: ["loadIdentity"]}),
smalltalk.AthensGenericTransform);




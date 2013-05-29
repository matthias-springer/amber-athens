smalltalk.addPackage('Athens-Core-Matrices');
smalltalk.addClass('AthensAffineTransform', smalltalk.AthensTransform, ['sx', 'shx', 'x', 'shy', 'sy', 'y'], 'Athens-Core-Matrices');
smalltalk.addMethod(
smalltalk.method({
selector: "clearTranslation",
category: 'transformations',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@y"]=(0);
self["@x"]=self["@y"];
return self}, function($ctx1) {$ctx1.fill(self,"clearTranslation",{},smalltalk.AthensAffineTransform)})},
args: [],
source: "clearTranslation\x0a\x09\x22reset a translation from matrix, leaving only scale and rotation\x22\x0a\x09\x0a\x09x := y := 0.0",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._loadIdentity();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensAffineTransform)})},
args: [],
source: "initialize\x0a\x09self loadIdentity",
messageSends: ["loadIdentity"],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "inverseTransform:",
category: 'vector-transform',
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
args: ["aPoint"],
source: "inverseTransform: aPoint \x0a\x09| px py y0 x0 |\x0a\x09\x0a\x09px := aPoint x.\x0a\x09py := aPoint y.\x0a\x0a\x22  (we assume matrix is never degenerate)\x0a\x09Given straight transformation formulae:\x0a\x09\x09\x0a\x09px := x0*sx + y0*shx + x.\x0a\x09py := x0*shy + y0*sy + y.\x0a\x09\x0a\x09we doing inverse one, trying to find x0,y0 for rest of given variables (px,py,x,y,sx,sy,shx,shy).\x0a\x09\x0a\x09x0 := px - x - (shx*y0) / sx.\x0a\x09y0 := py - y - (shy*x0) / sy.\x0a\x09\x0a\x09y0 := py - y - (shy*(px - x - (shx*y0) / sx)) / sy.\x0a\x0a\x09sy * y0  == py - y - (shy*(px - x - (shx*y0) / sx)).\x0a\x0a\x09sx * sy * y0  == (sx*(py - y)) - (shy*(px - x - (shx*y0))).\x0a\x0a\x09sx * sy * y0  == sx*py - (sx*y) - (shy*px) + (shy*x) + (shy*shx*y0).\x0a\x0a\x09(sx * sy * y0) - (shy*shx*y0)  == sx*py - (sx*y) - (shy*px) + (shy*x) .\x0a\x09\x0a\x09y0* ((sx * sy) - (shy*shx))  == sx*py - (sx*y) - (shy*px) + (shy*x) .\x0a\x0a\x22\x0a\x09y0  := sx*py - (sx*y) - (shy*px) + (shy*x) / ((sx * sy) - (shy*shx)).\x0a\x09x0 := px - x - (shx*y0) / sx.\x0a\x0a\x09^ x0@y0\x0a\x09",
messageSends: ["x", "y", "/", "-", "*", "+", "@"],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "inverted",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._notYetImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"inverted",{},smalltalk.AthensAffineTransform)})},
args: [],
source: "inverted\x0a\x09\x22answer an inverse transformation of receiver\x22\x0a\x09self notYetImplemented ",
messageSends: ["notYetImplemented"],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "loadAffineTransform:",
category: 'transformations',
fn: function (m){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@x"]=_st(m)._x();
self["@y"]=_st(m)._y();
self["@sx"]=_st(m)._sx();
self["@sy"]=_st(m)._sy();
self["@shx"]=_st(m)._shx();
self["@shy"]=_st(m)._shy();
return self}, function($ctx1) {$ctx1.fill(self,"loadAffineTransform:",{m:m},smalltalk.AthensAffineTransform)})},
args: ["m"],
source: "loadAffineTransform: m\x0a\x0a\x09x := m x.\x0a\x09y := m y.\x0a\x09sx := m sx.\x0a\x09sy := m sy.\x0a\x09shx := m shx.\x0a\x09shy := m shy.",
messageSends: ["x", "y", "sx", "sy", "shx", "shy"],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "loadIdentity",
category: 'transformations',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sy"]=(1);
self["@sx"]=self["@sy"];
self["@y"]=(0);
self["@x"]=self["@y"];
self["@shy"]=self["@x"];
self["@shx"]=self["@shy"];
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensAffineTransform)})},
args: [],
source: "loadIdentity\x0a\x09\x22initialize with identity transform\x22\x0a\x09sx := sy := 1.0.\x0a\x09shx := shy := x := y := 0.0.\x0a\x09\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "multiplyBy:",
category: 'transformations',
fn: function (m){
var self=this;
var nsx,nshx,nx,nshy,nsy,ny;
return smalltalk.withContext(function($ctx1) { 
nsx=_st(_st(self["@sx"]).__star(_st(m)._sx())).__plus(_st(self["@shx"]).__star(_st(m)._shy()));
nshx=_st(_st(self["@sx"]).__star(_st(m)._shx())).__plus(_st(self["@shx"]).__star(_st(m)._sy()));
nx=_st(_st(_st(self["@sx"]).__star(_st(m)._x())).__plus(_st(self["@shx"]).__star(_st(m)._y()))).__plus(self["@x"]);
nshy=_st(_st(self["@shy"]).__star(_st(m)._sx())).__plus(_st(self["@sy"]).__star(_st(m)._shy()));
nsy=_st(_st(self["@shy"]).__star(_st(m)._shx())).__plus(_st(self["@sy"]).__star(_st(m)._sy()));
ny=_st(_st(_st(self["@shy"]).__star(_st(m)._x())).__plus(_st(self["@sy"]).__star(_st(m)._y()))).__plus(self["@y"]);
self["@sx"]=nsx;
self["@sy"]=nsy;
self["@shx"]=nshx;
self["@shy"]=nshy;
self["@x"]=nx;
self["@y"]=ny;
return self}, function($ctx1) {$ctx1.fill(self,"multiplyBy:",{m:m,nsx:nsx,nshx:nshx,nx:nx,nshy:nshy,nsy:nsy,ny:ny},smalltalk.AthensAffineTransform)})},
args: ["m"],
source: "multiplyBy: m\x0a\x0a\x09\x22multiply receiver by given affine matrix\x22\x0a\x22\x0a| sx   shx   x   |        | sx'   shx'   x'   | \x0a| shy sy     y    |   *    | shy' sy'     y'   |\x0a|  0     0     1   |        | 0  \x090   \x09\x091\x09|       \x0a\x0a\x22\x09\x0a\x09\x0a\x09| nsx nshx nx nshy nsy ny |\x0a\x09\x0a\x09nsx := sx * m sx + (shx  * m shy).\x0a\x09nshx := sx * m shx + (shx * m sy).\x0a\x09nx := sx * m x + (shx * m y) + x.\x0a\x09\x0a\x09nshy := shy * m sx + (sy * m shy).\x0a\x09nsy := shy * m shx  + (sy * m sy).\x0a\x09ny := shy* m x + (sy * m y) + y.\x0a\x09\x0a\x09sx := nsx.\x0a\x09sy := nsy.\x0a\x09shx := nshx.\x0a\x09shy := nshy.\x0a\x09x := nx.\x0a\x09y := ny.\x09\x09",
messageSends: ["+", "*", "shy", "sx", "sy", "shx", "y", "x"],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "restoreAfter:",
category: 'transformations',
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
args: ["aBlock"],
source: "restoreAfter: aBlock\x0a\x09|previous|\x0a\x09previous := self copy.\x0a\x09aBlock ensure: [ \x09self loadAffineTransform: previous ]",
messageSends: ["copy", "ensure:", "loadAffineTransform:"],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByDegrees:",
category: 'transformations',
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._rotateByRadians_(_st(angle)._degreesToRadians());
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateByDegrees:",{angle:angle},smalltalk.AthensAffineTransform)})},
args: ["angle"],
source: "rotateByDegrees: angle\x0a\x0a\x0a\x09^ self rotateByRadians: angle degreesToRadians",
messageSends: ["rotateByRadians:", "degreesToRadians"],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByRadians:",
category: 'transformations',
fn: function (angle){
var self=this;
var cos,sin,newSx,newSy;
return smalltalk.withContext(function($ctx1) { 
cos=_st(angle)._cos();
sin=_st(angle)._sin();
newSx=_st(_st(self["@sx"]).__star(cos)).__plus(_st(self["@shx"]).__star(sin));
newSy=_st(_st(self["@sy"]).__star(cos)).__minus(_st(self["@shy"]).__star(sin));
self["@shx"]=_st(_st(self["@shx"]).__star(cos)).__minus(_st(self["@sx"]).__star(sin));
self["@shy"]=_st(_st(self["@shy"]).__star(cos)).__plus(_st(self["@sy"]).__star(sin));
self["@sx"]=newSx;
self["@sy"]=newSy;
return self}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{angle:angle,cos:cos,sin:sin,newSx:newSx,newSy:newSy},smalltalk.AthensAffineTransform)})},
args: ["angle"],
source: "rotateByRadians: angle\x0a\x0a\x09\x22multiply receiver by rotation matrix\x0a\x0a| sx   shx   x   |        | cos -sin 0  |             | (sx*cos)+(shx*sin)   (-sx*sin+shx*cos)  x |\x0a| shy sy     y   |   *   | sin   cos 0 |   ===> | (shy*cos)+(sy*sin)   (-shy*sin)+sy*cos) y |\x0a|  0     0     1   |       | 0     0   1   |             |        0                                 0                1  |\x0a\x0a\x22\x0a\x09| cos sin newSx newSy |\x0a\x09\x0a\x09cos := angle cos.\x0a\x09sin := angle sin.\x0a\x09\x0a\x09\x0a\x09newSx := sx*cos + (shx*sin).\x0a\x09newSy := sy*cos - (shy*sin).\x0a\x09\x0a\x09shx := shx*cos - (sx*sin).\x0a\x09shy := shy*cos + (sy*sin).\x0a\x0a\x09sx := newSx.\x0a\x09sy := newSy.",
messageSends: ["cos", "sin", "+", "*", "-"],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "scale",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@sx"]).__at(self["@sy"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"scale",{},smalltalk.AthensAffineTransform)})},
args: [],
source: "scale\x0a\x09^ sx@sy",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:",
category: 'transformations',
fn: function (factor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(factor)._isPoint();
if(smalltalk.assert($1)){
self["@sx"]=_st(self["@sx"]).__star(_st(factor)._x());
self["@sx"];
self["@shx"]=_st(self["@shx"]).__star(_st(factor)._y());
self["@shx"];
self["@sy"]=_st(self["@sy"]).__star(_st(factor)._y());
self["@sy"];
self["@shy"]=_st(self["@shy"]).__star(_st(factor)._x());
self["@shy"];
} else {
self["@sx"]=_st(self["@sx"]).__star(factor);
self["@sx"];
self["@shx"]=_st(self["@shx"]).__star(factor);
self["@shx"];
self["@sy"]=_st(self["@sy"]).__star(factor);
self["@sy"];
self["@shy"]=_st(self["@shy"]).__star(factor);
self["@shy"];
};
return self}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{factor:factor},smalltalk.AthensAffineTransform)})},
args: ["factor"],
source: "scaleBy: factor\x0a\x0a\x09\x22multiply receiver by uniform scale matrix\x0a\x0a| sx   shx   x   |       | (f x) 0 0  |             | sx*(f x)    shx*(f y)  x |\x0a| shy sy     y   |   *   | 0 (f y) 0  |    ===> | shy*(f x)     sy*(f y)    y |\x0a|  0     0     1  |        | 0 0     1  |                |  0      0              1  |\x0a\x0a\x22\x09\x0a\x09factor isPoint ifTrue: [\x0a\x09\x09sx := sx*factor x.\x0a\x09\x09shx := shx*factor y.\x0a\x09\x09sy := sy*factor y.\x0a\x09\x09shy := shy*factor x. \x09\x09\x0a\x09] ifFalse: [\x0a\x09\x09sx := sx*factor.\x0a\x09\x09shx := shx*factor.\x0a\x09\x09sy := sy*factor.\x0a\x09\x09shy := shy*factor. ]",
messageSends: ["ifTrue:ifFalse:", "*", "x", "y", "isPoint"],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleX:Y:",
category: 'transformations',
fn: function (fx,fy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sx"]=_st(self["@sx"]).__star(fx);
self["@shx"]=_st(self["@shx"]).__star(fx);
self["@sy"]=_st(self["@sy"]).__star(fy);
self["@shy"]=_st(self["@shy"]).__star(fy);
return self}, function($ctx1) {$ctx1.fill(self,"scaleX:Y:",{fx:fx,fy:fy},smalltalk.AthensAffineTransform)})},
args: ["fx", "fy"],
source: "scaleX: fx Y: fy\x0a\x0a\x09\x22multiply receiver by scale matrix\x0a\x0a| sx   shx   x   |        | fx 0 0  |              | sx*fx    shx*fx  x |\x0a| shy sy     y   |   *   | 0 fy 0  |    ===> | shy*fy  sy*fy   y |\x0a|  0     0     1   |       | 0 0  1  |              |  0          0        1  |\x0a\x0a\x22\x0a\x09sx := sx*fx.\x0a\x09shx := shx*fx.\x0a\x09sy := sy*fy.\x0a\x09shy := shy*fy.",
messageSends: ["*"],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "shx",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shx"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shx",{},smalltalk.AthensAffineTransform)})},
args: [],
source: "shx\x0a\x09^ shx",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "shx:",
category: 'accessing',
fn: function (number){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shx"]=number;
return self}, function($ctx1) {$ctx1.fill(self,"shx:",{number:number},smalltalk.AthensAffineTransform)})},
args: ["number"],
source: "shx: number\x0a\x09shx := number",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "shy",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shy"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shy",{},smalltalk.AthensAffineTransform)})},
args: [],
source: "shy\x0a\x09^ shy",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "shy:",
category: 'accessing',
fn: function (number){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shy"]=number;
return self}, function($ctx1) {$ctx1.fill(self,"shy:",{number:number},smalltalk.AthensAffineTransform)})},
args: ["number"],
source: "shy: number\x0a\x09shy := number",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "sx",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sx"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sx",{},smalltalk.AthensAffineTransform)})},
args: [],
source: "sx\x0a\x09^ sx",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "sx:",
category: 'accessing',
fn: function (number){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sx"]=number;
return self}, function($ctx1) {$ctx1.fill(self,"sx:",{number:number},smalltalk.AthensAffineTransform)})},
args: ["number"],
source: "sx: number\x0a\x09sx := number",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "sy",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sy"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sy",{},smalltalk.AthensAffineTransform)})},
args: [],
source: "sy\x0a\x09^ sy",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "sy:",
category: 'accessing',
fn: function (number){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sy"]=number;
return self}, function($ctx1) {$ctx1.fill(self,"sy:",{number:number},smalltalk.AthensAffineTransform)})},
args: ["number"],
source: "sy: number\x0a\x09sy := number",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "transform:",
category: 'vector-transform',
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
args: ["aPoint"],
source: "transform: aPoint \x0a\x09| px py |\x0a\x09\x0a\x09px := aPoint x.\x0a\x09py := aPoint y.\x0a\x09^ Point \x0a\x09\x09x: (sx*px +(shx*py) + x)\x0a\x09\x09y: (shy*px + (sy*py) + y) ",
messageSends: ["x", "y", "x:y:", "+", "*"],
referencedClasses: ["Point"]
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "transformX:Y:",
category: 'vector-transform',
fn: function (px,py){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Point())._x_y_(_st(_st(_st(self["@sx"]).__star(px)).__plus(_st(self["@shx"]).__star(py))).__plus(self["@x"]),_st(_st(_st(self["@shy"]).__star(px)).__plus(_st(self["@sy"]).__star(py))).__plus(self["@y"]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"transformX:Y:",{px:px,py:py},smalltalk.AthensAffineTransform)})},
args: ["px", "py"],
source: "transformX: px Y: py\x0a\x09\x22 transform x and y coordinates by receiver. Answer a Point\x22\x0a\x09^ Point \x0a\x09\x09x: (sx*px +(shx*py) + x)\x0a\x09\x09y: (shy*px + (sy*py) + y) ",
messageSends: ["x:y:", "+", "*"],
referencedClasses: ["Point"]
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'transformations',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._translateX_Y_(_st(aPoint)._x(),_st(aPoint)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.AthensAffineTransform)})},
args: ["aPoint"],
source: "translateBy: aPoint\x0a\x0a\x09^ self translateX: aPoint x Y: aPoint y",
messageSends: ["translateX:Y:", "x", "y"],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "translateX:Y:",
category: 'transformations',
fn: function (px,py){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@x"]=_st(_st(_st(self["@sx"]).__star(px)).__plus(_st(self["@shx"]).__star(py))).__plus(self["@x"]);
self["@y"]=_st(_st(_st(self["@shy"]).__star(px)).__plus(_st(self["@sy"]).__star(py))).__plus(self["@y"]);
return self}, function($ctx1) {$ctx1.fill(self,"translateX:Y:",{px:px,py:py},smalltalk.AthensAffineTransform)})},
args: ["px", "py"],
source: "translateX: px Y: py\x0a\x0a\x0a\x22 multiply receiver by translation matrix :\x0a\x0a| sx   shx   x   |        | 1  0  px |             |\x09sx  shx  (sx*px + shx*py + x) |\x0a| shy sy     y   |   *   | 0  1  py |   ===> | shy  sy  (shy*px + sy*py + y)  |\x0a|  0     0     1   |       | 0  0   1  |             |  0     0    1  |\x0a\x0a\x22\x0a\x09x := (sx*px) + (shx*py) + x.\x0a\x09y := (shy*px) + (sy*py) + y.",
messageSends: ["+", "*"],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "translateX:y:",
category: 'transformations',
fn: function (px,py){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@x"]=_st(_st(_st(self["@sx"]).__star(px)).__plus(_st(self["@shx"]).__star(py))).__plus(self["@x"]);
self["@y"]=_st(_st(_st(self["@shy"]).__star(px)).__plus(_st(self["@sy"]).__star(py))).__plus(self["@y"]);
return self}, function($ctx1) {$ctx1.fill(self,"translateX:y:",{px:px,py:py},smalltalk.AthensAffineTransform)})},
args: ["px", "py"],
source: "translateX: px y: py\x0a\x0a\x22 multiply receiver by translation matrix :\x0a\x0a| sx   shx   x   |        | 1  0  px |             |\x09sx  shx  (sx*px + shx*py + x) |\x0a| shy sy     y   |   *   | 0  1  py |   ===> | shy  sy  (shy*px + sy*py + y)  |\x0a|  0     0     1   |       | 0  0   1  |             |  0     0    1  |\x0a\x0a\x22\x0a\x09x := (sx*px) + (shx*py) + x.\x0a\x09y := (shy*px) + (sy*py) + y.",
messageSends: ["+", "*"],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "translation",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@x"]).__at(self["@y"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"translation",{},smalltalk.AthensAffineTransform)})},
args: [],
source: "translation\x0a\x09^ x@y",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "translation:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@x"]=_st(aPoint)._x();
self["@y"]=_st(aPoint)._y();
return self}, function($ctx1) {$ctx1.fill(self,"translation:",{aPoint:aPoint},smalltalk.AthensAffineTransform)})},
args: ["aPoint"],
source: "translation: aPoint\x0a\x09x := aPoint x.\x0a\x09y := aPoint y.",
messageSends: ["x", "y"],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "transposed",
category: 'transformations',
fn: function (){
var self=this;
var s;
return smalltalk.withContext(function($ctx1) { 
s=self["@shx"];
self["@shx"]=self["@shy"];
self["@shy"]=s;
return self}, function($ctx1) {$ctx1.fill(self,"transposed",{s:s},smalltalk.AthensAffineTransform)})},
args: [],
source: "transposed\x0a\x09\x0a\x09| s |\x0a\x09s := shx.\x0a\x09shx := shy.\x0a\x09shy := s.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@x"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"x",{},smalltalk.AthensAffineTransform)})},
args: [],
source: "x\x0a\x09^ x",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "x:",
category: 'accessing',
fn: function (number){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@x"]=number;
return self}, function($ctx1) {$ctx1.fill(self,"x:",{number:number},smalltalk.AthensAffineTransform)})},
args: ["number"],
source: "x: number\x0a\x09x := number",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "y",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@y"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"y",{},smalltalk.AthensAffineTransform)})},
args: [],
source: "y\x0a\x09^ y",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);

smalltalk.addMethod(
smalltalk.method({
selector: "y:",
category: 'accessing',
fn: function (number){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@y"]=number;
return self}, function($ctx1) {$ctx1.fill(self,"y:",{number:number},smalltalk.AthensAffineTransform)})},
args: ["number"],
source: "y: number\x0a\x09y := number",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensAffineTransform);



smalltalk.addClass('AthensGenericTransform', smalltalk.AthensAffineTransform, ['w0', 'w1', 'w2'], 'Athens-Core-Matrices');
smalltalk.addMethod(
smalltalk.method({
selector: "loadIdentity",
category: 'transformations',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensAffineTransform.fn.prototype._loadIdentity.apply(_st(self), []);
self["@w1"]=(0);
self["@w0"]=self["@w1"];
self["@w2"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"loadIdentity",{},smalltalk.AthensGenericTransform)})},
args: [],
source: "loadIdentity\x0a\x09\x22initialize with identity transform\x22\x0a\x09super loadIdentity.\x0a\x09w0 := w1 := 0.0.\x0a\x09w2 := 1.0",
messageSends: ["loadIdentity"],
referencedClasses: []
}),
smalltalk.AthensGenericTransform);




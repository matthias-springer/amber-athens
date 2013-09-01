smalltalk.addPackage('Athens-Amber');
smalltalk.addClass('CanvasContext2D', smalltalk.Object, [], 'Athens-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "beginPath",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.beginPath(); ;
return self}, function($ctx1) {$ctx1.fill(self,"beginPath",{},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "bezierCurveVia:and:to:",
fn: function (pt1,pt2,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.bezierCurveTo(pt1._x(), pt1._y(), pt2._x(), pt2._y(), aPoint._x(), aPoint._y()); ;
return self}, function($ctx1) {$ctx1.fill(self,"bezierCurveVia:and:to:",{pt1:pt1,pt2:pt2,aPoint:aPoint},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "clearRect:",
fn: function (rect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._clearRect_a_a_a_(_st(rect)._left(),_st(rect)._top(),_st(rect)._right(),_st(rect)._bottom());
return self}, function($ctx1) {$ctx1.fill(self,"clearRect:",{rect:rect},smalltalk.CanvasContext2D)})},
messageSends: ["clearRect:a:a:a:", "left", "top", "right", "bottom"]}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "clearRect:a:a:a:",
fn: function (left,top,right,bottom){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.clearRect(left, top, right, bottom); ;
return self}, function($ctx1) {$ctx1.fill(self,"clearRect:a:a:a:",{left:left,top:top,right:right,bottom:bottom},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "clip",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.clip(); ;
return self}, function($ctx1) {$ctx1.fill(self,"clip",{},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "closePath",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.closePath(); ;
return self}, function($ctx1) {$ctx1.fill(self,"closePath",{},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "createLinearGradient:a:a:a:",
fn: function (x1,y1,x2,y2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.createLinearGradient(x1, y1, x2, y2); ;
return self}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:a:a:a:",{x1:x1,y1:y1,x2:x2,y2:y2},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "createLinearGradientFrom:to:",
fn: function (start,stop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._createLinearGradient_a_a_a_(_st(start)._x(),_st(start)._y(),_st(stop)._x(),_st(stop)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"createLinearGradientFrom:to:",{start:start,stop:stop},smalltalk.CanvasContext2D)})},
messageSends: ["createLinearGradient:a:a:a:", "x", "y"]}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "createPattern:repeat:",
fn: function (source,repeatMode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.createPattern(source, repeatMode); ;
return self}, function($ctx1) {$ctx1.fill(self,"createPattern:repeat:",{source:source,repeatMode:repeatMode},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "createRadialGradient:a:a:a:a:a:",
fn: function (x1,y1,innerRadius,x2,y2,outerRadius){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.createRadialGradient(x1, y1, innerRadius, x2, y2, outerRadius); ;
return self}, function($ctx1) {$ctx1.fill(self,"createRadialGradient:a:a:a:a:a:",{x1:x1,y1:y1,innerRadius:innerRadius,x2:x2,y2:y2,outerRadius:outerRadius},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "createRadialGradientFrom:with:to:with:",
fn: function (start,innerRadius,stop,outerRadius){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._createRadialGradient_a_a_a_a_a_(_st(start)._x(),_st(start)._y(),innerRadius,_st(stop)._x(),_st(stop)._y(),outerRadius);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createRadialGradientFrom:with:to:with:",{start:start,innerRadius:innerRadius,stop:stop,outerRadius:outerRadius},smalltalk.CanvasContext2D)})},
messageSends: ["createRadialGradient:a:a:a:a:a:", "x", "y"]}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "fill",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.fill(); ;
return self}, function($ctx1) {$ctx1.fill(self,"fill",{},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRect:",
fn: function (rect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._fillRect_a_a_a_(_st(rect)._left(),_st(rect)._top(),_st(rect)._right(),_st(rect)._bottom());
return self}, function($ctx1) {$ctx1.fill(self,"fillRect:",{rect:rect},smalltalk.CanvasContext2D)})},
messageSends: ["fillRect:a:a:a:", "left", "top", "right", "bottom"]}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRect:a:a:a:",
fn: function (left,top,right,bottom){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.fillRect(left, top, right, bottom); ;
return self}, function($ctx1) {$ctx1.fill(self,"fillRect:a:a:a:",{left:left,top:top,right:right,bottom:bottom},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "fillStyle:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.fillStyle = anObject; ;
return self}, function($ctx1) {$ctx1.fill(self,"fillStyle:",{anObject:anObject},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "fillText:X:Y:",
fn: function (aString,x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.fillText(aString, x, y); ;
return self}, function($ctx1) {$ctx1.fill(self,"fillText:X:Y:",{aString:aString,x:x,y:y},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "font:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.font = aString; ;
return self}, function($ctx1) {$ctx1.fill(self,"font:",{aString:aString},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "globalCompositeOperation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.globalCompositeOperation; ;
return self}, function($ctx1) {$ctx1.fill(self,"globalCompositeOperation",{},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "globalCompositeOperation:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.globalCompositeOperation = aString; ;
return self}, function($ctx1) {$ctx1.fill(self,"globalCompositeOperation:",{aString:aString},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "lineCap:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.lineCap = aNumber; ;
return self}, function($ctx1) {$ctx1.fill(self,"lineCap:",{aNumber:aNumber},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "lineDash:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 if (self.setLineDash !== undefined) {
		self.setLineDash(anArray);
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"lineDash:",{anArray:anArray},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "lineDashOffset:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 if (self.setLineDash !== undefined) {
		self.lineDashOffset = aNumber;
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"lineDashOffset:",{aNumber:aNumber},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "lineJoin:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.lineJoin = aNumber; ;
return self}, function($ctx1) {$ctx1.fill(self,"lineJoin:",{aNumber:aNumber},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.lineTo(aPoint._x(), aPoint._y()); ;
return self}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "lineWidth:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.lineWidth = aNumber; ;
return self}, function($ctx1) {$ctx1.fill(self,"lineWidth:",{aNumber:aNumber},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "measureStringWidth:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.measureText(aString).width; ;
return self}, function($ctx1) {$ctx1.fill(self,"measureStringWidth:",{aString:aString},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "miterLimit:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.miterLimit = aNumber; ;
return self}, function($ctx1) {$ctx1.fill(self,"miterLimit:",{aNumber:aNumber},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.moveTo(aPoint._x(), aPoint._y()); ;
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "pop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.restore(); ;
return self}, function($ctx1) {$ctx1.fill(self,"pop",{},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "push",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.save(); ;
return self}, function($ctx1) {$ctx1.fill(self,"push",{},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "quadraticCurveVia:to:",
fn: function (pt1,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.quadraticCurveTo(pt1._x(), pt1._y(), aPoint._x(), aPoint._y()); ;
return self}, function($ctx1) {$ctx1.fill(self,"quadraticCurveVia:to:",{pt1:pt1,aPoint:aPoint},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "rect:",
fn: function (rect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._rect_a_a_a_(_st(rect)._left(),_st(rect)._top(),_st(rect)._right(),_st(rect)._bottom());
return self}, function($ctx1) {$ctx1.fill(self,"rect:",{rect:rect},smalltalk.CanvasContext2D)})},
messageSends: ["rect:a:a:a:", "left", "top", "right", "bottom"]}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "rect:a:a:a:",
fn: function (left,top,right,bottom){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.rect(left, top, right, bottom); ;
return self}, function($ctx1) {$ctx1.fill(self,"rect:a:a:a:",{left:left,top:top,right:right,bottom:bottom},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateByRadians:",
fn: function (angle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.rotate(angle); ;
return self}, function($ctx1) {$ctx1.fill(self,"rotateByRadians:",{angle:angle},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleByX:Y:",
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.scale(x, y); ;
return self}, function($ctx1) {$ctx1.fill(self,"scaleByX:Y:",{x:x,y:y},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "stroke",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.stroke(); ;
return self}, function($ctx1) {$ctx1.fill(self,"stroke",{},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "strokeRect:",
fn: function (rect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._strokeRect_a_a_a_(_st(rect)._left(),_st(rect)._top(),_st(rect)._right(),_st(rect)._bottom());
return self}, function($ctx1) {$ctx1.fill(self,"strokeRect:",{rect:rect},smalltalk.CanvasContext2D)})},
messageSends: ["strokeRect:a:a:a:", "left", "top", "right", "bottom"]}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "strokeRect:a:a:a:",
fn: function (left,top,right,bottom){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.strokeRect(left, top, right, bottom); ;
return self}, function($ctx1) {$ctx1.fill(self,"strokeRect:a:a:a:",{left:left,top:top,right:right,bottom:bottom},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "strokeStyle:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.strokeStyle = anObject; ;
return self}, function($ctx1) {$ctx1.fill(self,"strokeStyle:",{anObject:anObject},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "transform:a:a:a:a:a:",
fn: function (sx,shy,shx,sy,x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.setTransform(sx, shy, shx, sy, x, y); ;
return self}, function($ctx1) {$ctx1.fill(self,"transform:a:a:a:a:a:",{sx:sx,shy:shy,shx:shx,sy:sy,x:x,y:y},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "transformBy:a:a:a:a:a:",
fn: function (sx,shy,shx,sy,x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.transform(sx, shy, shx, sy, x, y); ;
return self}, function($ctx1) {$ctx1.fill(self,"transformBy:a:a:a:a:a:",{sx:sx,shy:shy,shx:shx,sy:sy,x:x,y:y},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);

smalltalk.addMethod(
smalltalk.method({
selector: "translateByX:Y:",
fn: function (x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.translate(x, y); ;
return self}, function($ctx1) {$ctx1.fill(self,"translateByX:Y:",{x:x,y:y},smalltalk.CanvasContext2D)})},
messageSends: []}),
smalltalk.CanvasContext2D);



smalltalk.addClass('CanvasGradient', smalltalk.Object, [], 'Athens-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "addColorStopAt:color:",
fn: function (pos,color){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self.addColorStop(pos, color); ;
return self}, function($ctx1) {$ctx1.fill(self,"addColorStopAt:color:",{pos:pos,color:color},smalltalk.CanvasGradient)})},
messageSends: []}),
smalltalk.CanvasGradient);



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
selector: "cosmoBlue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.06, 0.51, 0.96, 'rgba(15,130,245,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoBlue",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoDarkBlue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0, 0.3, 0.6, 'rgba(0,76,153,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoDarkBlue",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoDarkGray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.33, 0.33, 0.33, 'rgba(85,85,85,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoDarkGray",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoDarkPurple",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.38, 0.19, 0.48, 'rgba(97,48,121,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoDarkPurple",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoGray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.6, 0.6, 0.6, 'rgba(153,153,153,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoGray",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoLightGray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.87, 0.87, 0.87, 'rgba(223,223,223,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoLightGray",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoLightPurple",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.69, 0.48, 0.8, 'rgba(177,123,203,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoLightPurple",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoMiddleBlue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0, 0.45, 0.9, 'rgba(0,114,230,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoMiddleBlue",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoMiddlePurple",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.55, 0.28, 0.69, 'rgba(141,70,176,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoMiddlePurple",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cosmoPurple",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._r_g_b_rgba_(0.61, 0.35, 0.73, 'rgba(155,89,187,1)'); ;
return self}, function($ctx1) {$ctx1.fill(self,"cosmoPurple",{},smalltalk.Color.klass)})},
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
selector: "r:g:b:a:",
fn: function (red,green,blue,alpha){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var instance = self._new();
	instance['@r'] = red;
	instance['@g'] = green;
	instance['@b'] = blue;
	instance['@alpha'] = alpha;
	return instance; ;
return self}, function($ctx1) {$ctx1.fill(self,"r:g:b:a:",{red:red,green:green,blue:blue,alpha:alpha},smalltalk.Color.klass)})},
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
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.height; ;
return self}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.Image)})},
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
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.width; ;
return self}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.Image)})},
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
_st($2)._lineTo_(self["@corner"]);
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
var $1;
$1=_st(self["@corner"])._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottom",{},smalltalk.Rectangle)})},
messageSends: ["y"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "boundingBox",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"boundingBox",{},smalltalk.Rectangle)})},
messageSends: []}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "boundsAfterMultiplicationWith:",
fn: function (matrix){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
	var x1 = matrix['@sx']*self['@origin']['@x'] + matrix['@shx']*self['@origin']['@y'] + matrix['@x'];
	var x2 = matrix['@sx']*self['@corner']['@x'] + matrix['@shx']*self['@corner']['@y'] + matrix['@x'];
	var y1 = matrix['@shy']*self['@origin']['@x'] + matrix['@sy']*self['@origin']['@y'] + matrix['@y'];
	var y2 = matrix['@shy']*self['@corner']['@x'] + matrix['@sy']*self['@corner']['@y'] + matrix['@y'];
	
	var points = [[x1, y1], [x1, y2], [x2, y1], [x2, y2]];
	
	for (var i = 0; i < 4; i++) {
		minX = Math.min(minX, points[i][0]);
		maxX = Math.max(maxX, points[i][0]);
		minY = Math.min(minY, points[i][1]);
		maxY = Math.max(maxY, points[i][1]);
	}
	
	return minX.__at(minY)._corner_(maxX.__at(maxY)); ;
return self}, function($ctx1) {$ctx1.fill(self,"boundsAfterMultiplicationWith:",{matrix:matrix},smalltalk.Rectangle)})},
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
_st(_st(canvas)._context2D())._rect_(self);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.Rectangle)})},
messageSends: ["rect:", "context2D"]}),
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
selector: "intersectsWith:",
fn: function (aRect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st(self["@origin"])._x()).__lt_eq(_st(_st(aRect)._corner())._x())).__and(_st(_st(_st(aRect)._origin())._x()).__lt_eq(_st(self["@corner"])._x()))).__and(_st(_st(self["@origin"])._y()).__lt(_st(_st(aRect)._corner())._y()))).__and(_st(_st(_st(aRect)._origin())._y()).__lt_eq(_st(self["@corner"])._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"intersectsWith:",{aRect:aRect},smalltalk.Rectangle)})},
messageSends: ["&", "<=", "y", "origin", "<", "corner", "x"]}),
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


smalltalk.addPackage('Athens-HTML-Paints');
smalltalk.addClass('AthensHTMLPaint', smalltalk.AthensPaint, ['fillStyle'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "asAthensPaintOn:",
fn: function (anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPaint)})},
messageSends: []}),
smalltalk.AthensHTMLPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:on:",
fn: function (aString,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var context2D = anAthensCanvas['@surface']['@context2D'];
	self._preparePaintFor_(context2D);
	context2D.beginPath();
	//anAthensCanvas['@paintTransform']._apply();
	context2D.fillStyle = self['@fillStyle'];
	context2D.fillText(aString, 0, 0); ;
return self}, function($ctx1) {$ctx1.fill(self,"drawString:on:",{aString:aString,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPaint)})},
messageSends: []}),
smalltalk.AthensHTMLPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
fn: function (aPath,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var context2D = anAthensCanvas['@surface']['@context2D'];
	self._preparePaintFor_(context2D);
	context2D.beginPath();
	aPath._drawOn_(anAthensCanvas);
	context2D.save();
	anAthensCanvas['@pathTransform']._multiplyBy_(anAthensCanvas['@paintTransform']);
	context2D.fillStyle = self['@fillStyle'];
	context2D.fill(); 
	context2D.restore();;
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPaint)})},
messageSends: []}),
smalltalk.AthensHTMLPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
fn: function (aRect,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var context2D = anAthensCanvas['@surface']['@context2D'];
	self._preparePaintFor_(context2D);
	context2D.beginPath();
	context2D.rect(aRect._left(), aRect._top(), aRect._width(), aRect._height());
	context2D.save();
	anAthensCanvas['@pathTransform']._multiplyBy_(anAthensCanvas['@paintTransform']);
	context2D.fillStyle = self['@fillStyle'];
	context2D.fill(); 
	context2D.restore(); ;
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLPaint)})},
messageSends: []}),
smalltalk.AthensHTMLPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "preparePaintFor:",
fn: function (context2D){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"preparePaintFor:",{context2D:context2D},smalltalk.AthensHTMLPaint)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensHTMLPaint);



smalltalk.addClass('AthensHTMLGradientPaint', smalltalk.AthensHTMLPaint, ['start', 'stop', 'innerRadius', 'outerRadius', 'colorRamp'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "colorRamp:",
fn: function (aColorRamp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@colorRamp"]=aColorRamp;
return self}, function($ctx1) {$ctx1.fill(self,"colorRamp:",{aColorRamp:aColorRamp},smalltalk.AthensHTMLGradientPaint)})},
messageSends: []}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "innerRadius:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@innerRadius"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"innerRadius:",{aNumber:aNumber},smalltalk.AthensHTMLGradientPaint)})},
messageSends: []}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "outerRadius:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@outerRadius"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"outerRadius:",{aNumber:aNumber},smalltalk.AthensHTMLGradientPaint)})},
messageSends: []}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "preparePaintFor:",
fn: function (context2D){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 if (self['@innerRadius'] === undefined) {
		self['@fillStyle'] = context2D.createLinearGradient(self['@start']._x(), self['@start']._y(), self['@stop']._x(), self['@stop']._y());
	}
	else {
		self['@fillStyle'] = context2D.createRadialGradient(self['@start']._x(), self['@start']._y(), self['@innerRadius'], self['@stop']._x(), self['@stop']._y(), self['@outerRadius']);
	}
	self['@colorRamp']._do_(function(assoc) {
		self['@fillStyle'].addColorStop(assoc['@key'], assoc['@value']._rgbaString());
	}); ;
return self}, function($ctx1) {$ctx1.fill(self,"preparePaintFor:",{context2D:context2D},smalltalk.AthensHTMLGradientPaint)})},
messageSends: []}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "start:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@start"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"start:",{aPoint:aPoint},smalltalk.AthensHTMLGradientPaint)})},
messageSends: []}),
smalltalk.AthensHTMLGradientPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "stop:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stop"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"stop:",{aPoint:aPoint},smalltalk.AthensHTMLGradientPaint)})},
messageSends: []}),
smalltalk.AthensHTMLGradientPaint);


smalltalk.addMethod(
smalltalk.method({
selector: "createLinearGradient:start:stop:",
fn: function (aColorRamp,aStartPoint,aStopPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._start_(aStartPoint);
_st($2)._stop_(aStopPoint);
_st($2)._initialize();
_st($2)._colorRamp_(aColorRamp);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"createLinearGradient:start:stop:",{aColorRamp:aColorRamp,aStartPoint:aStartPoint,aStopPoint:aStopPoint},smalltalk.AthensHTMLGradientPaint.klass)})},
messageSends: ["start:", "basicNew", "stop:", "initialize", "colorRamp:", "yourself"]}),
smalltalk.AthensHTMLGradientPaint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "radialBetween:extending:and:extending:withColorRamp:",
fn: function (origin,innerRadius,outerOrigin,outerRadius,aColorRamp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._start_(origin);
_st($2)._stop_(outerOrigin);
_st($2)._innerRadius_(innerRadius);
_st($2)._outerRadius_(outerRadius);
_st($2)._initialize();
_st($2)._colorRamp_(aColorRamp);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"radialBetween:extending:and:extending:withColorRamp:",{origin:origin,innerRadius:innerRadius,outerOrigin:outerOrigin,outerRadius:outerRadius,aColorRamp:aColorRamp},smalltalk.AthensHTMLGradientPaint.klass)})},
messageSends: ["start:", "basicNew", "stop:", "innerRadius:", "outerRadius:", "initialize", "colorRamp:", "yourself"]}),
smalltalk.AthensHTMLGradientPaint.klass);


smalltalk.addClass('AthensHTMLPatternPaint', smalltalk.AthensHTMLPaint, ['repeatMode', 'anAthensCanvas', 'patternSource'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@repeatMode"]="no-repeat";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLPatternPaint)})},
messageSends: []}),
smalltalk.AthensHTMLPatternPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "noRepeat",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@repeatMode"]="no-repeat";
return self}, function($ctx1) {$ctx1.fill(self,"noRepeat",{},smalltalk.AthensHTMLPatternPaint)})},
messageSends: []}),
smalltalk.AthensHTMLPatternPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "preparePaintFor:",
fn: function (context2D){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@fillStyle'] = context2D.createPattern(self['@patternSource'], self['@repeatMode']); ;
return self}, function($ctx1) {$ctx1.fill(self,"preparePaintFor:",{context2D:context2D},smalltalk.AthensHTMLPatternPaint)})},
messageSends: []}),
smalltalk.AthensHTMLPatternPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "repeat",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@repeatMode"]="repeat";
return self}, function($ctx1) {$ctx1.fill(self,"repeat",{},smalltalk.AthensHTMLPatternPaint)})},
messageSends: []}),
smalltalk.AthensHTMLPatternPaint);



smalltalk.addClass('AthensHTMLBitmapPaint', smalltalk.AthensHTMLPatternPaint, [], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "bitmap:",
fn: function (aBitmap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@patternSource"]=_st(aBitmap)._image();
return self}, function($ctx1) {$ctx1.fill(self,"bitmap:",{aBitmap:aBitmap},smalltalk.AthensHTMLBitmapPaint)})},
messageSends: ["image"]}),
smalltalk.AthensHTMLBitmapPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "loadingCallback:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 if (self['@patternSource'].complete) {
		aBlock._value_(self);
	}
	else {
		self['@patternSource'].onload = function() {aBlock._value_(self);};
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"loadingCallback:",{aBlock:aBlock},smalltalk.AthensHTMLBitmapPaint)})},
messageSends: []}),
smalltalk.AthensHTMLBitmapPaint);


smalltalk.addMethod(
smalltalk.method({
selector: "forBitmap:",
fn: function (aBitmap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._bitmap_(aBitmap);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forBitmap:",{aBitmap:aBitmap},smalltalk.AthensHTMLBitmapPaint.klass)})},
messageSends: ["bitmap:", "new", "yourself"]}),
smalltalk.AthensHTMLBitmapPaint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "forBitmap:afterLoading:",
fn: function (aBitmap,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._bitmap_(aBitmap);
_st($2)._loadingCallback_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forBitmap:afterLoading:",{aBitmap:aBitmap,aBlock:aBlock},smalltalk.AthensHTMLBitmapPaint.klass)})},
messageSends: ["bitmap:", "new", "loadingCallback:", "yourself"]}),
smalltalk.AthensHTMLBitmapPaint.klass);


smalltalk.addClass('AthensHTMLPatternSurfacePaint', smalltalk.AthensHTMLPatternPaint, ['surface'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@patternSource'] = aSurface['@canvasTag']; ;
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{aSurface:aSurface},smalltalk.AthensHTMLPatternSurfacePaint)})},
messageSends: []}),
smalltalk.AthensHTMLPatternSurfacePaint);


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
}, function($ctx1) {$ctx1.fill(self,"forSurface:",{aSurface:aSurface},smalltalk.AthensHTMLPatternSurfacePaint.klass)})},
messageSends: ["surface:", "new", "yourself"]}),
smalltalk.AthensHTMLPatternSurfacePaint.klass);


smalltalk.addClass('AthensHTMLSolidPaint', smalltalk.AthensHTMLPaint, ['color'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@fillStyle'] = aColor._rgbaString(); ;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.AthensHTMLSolidPaint)})},
messageSends: []}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:on:",
fn: function (aString,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var context2D = anAthensCanvas['@surface']['@context2D'];
	context2D.fillStyle = self['@fillStyle'];
	context2D.fillText(aString, 0, 0); ;
return self}, function($ctx1) {$ctx1.fill(self,"drawString:on:",{aString:aString,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
messageSends: []}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
fn: function (aPath,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var context2D = anAthensCanvas['@surface']['@context2D'];
	context2D.fillStyle = self['@fillStyle'];
	aPath._drawOn_(anAthensCanvas);
	context2D.fill(); ;
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
messageSends: []}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
fn: function (aRect,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var context2D = anAthensCanvas['@surface']['@context2D'];
	context2D.fillStyle = self['@fillStyle'];
	context2D.fillRect(aRect._left(), aRect._top(), aRect._width(), aRect._height()); ;
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLSolidPaint)})},
messageSends: []}),
smalltalk.AthensHTMLSolidPaint);

smalltalk.addMethod(
smalltalk.method({
selector: "preparePaintFor:",
fn: function (context2D){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"preparePaintFor:",{context2D:context2D},smalltalk.AthensHTMLSolidPaint)})},
messageSends: []}),
smalltalk.AthensHTMLSolidPaint);



smalltalk.addClass('AthensHTMLStrokePaint', smalltalk.AthensStrokePaint, ['dashLenghts', 'dashOffset'], 'Athens-HTML-Paints');
smalltalk.addMethod(
smalltalk.method({
selector: "capButt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@capStyle'] = 'butt'; ;
return self}, function($ctx1) {$ctx1.fill(self,"capButt",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "capRound",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@capStyle'] = 'round'; ;
return self}, function($ctx1) {$ctx1.fill(self,"capRound",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "capSquare",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@capStyle'] = 'square'; ;
return self}, function($ctx1) {$ctx1.fill(self,"capSquare",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "dashes:offset:",
fn: function (anAlternateCollectionOfLenghts,anOffset){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dashLenghts"]=anAlternateCollectionOfLenghts;
self["@dashOffset"]=anOffset;
return self}, function($ctx1) {$ctx1.fill(self,"dashes:offset:",{anAlternateCollectionOfLenghts:anAlternateCollectionOfLenghts,anOffset:anOffset},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPath:on:",
fn: function (aPath,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var context2D = anAthensCanvas['@surface']['@context2D'];
	context2D.strokeStyle = self['@fillPaint']['@fillStyle'];
	context2D.lineWidth = self['@width'];
	context2D.lineJoin = self['@joinStyle'];
	context2D.lineCap = self['@capStyle'];
	// TODO: this only works in Chrome, see http://www.rgraph.net/blog/2013/january/html5-canvas-dashed-lines.html
	if (context2D.setLineDash !== undefined) {
		context2D.setLineDash(self['@dashLenghts']);
		context2D.lineDashOffset = self['@dashOffset'];
	}
	aPath._drawOn_(anAthensCanvas);
	context2D.stroke(); ;
return self}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{aPath:aPath,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:on:",
fn: function (aRect,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var context2D = anAthensCanvas['@surface']['@context2D'];
	context2D.strokeStyle = self['@fillPaint']['@fillStyle'];
	context2D.lineWidth = self['@width'];
	context2D.lineJoin = self['@joinStyle'];
	context2D.lineCap = self['@capStyle'];
	// TODO: this only works in Chrome, see http://www.rgraph.net/blog/2013/january/html5-canvas-dashed-lines.html
	if (context2D.setLineDash !== undefined) {
		context2D.setLineDash(self['@dashLenghts']);
		context2D.lineDashOffset = self['@dashOffset'];
	}
	context2D.rect(aRect._left(), aRect._top(), aRect._width(), aRect._height());
	context2D.stroke(); ;
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AthensStrokePaint.fn.prototype._initialize.apply(_st(self), []);
self["@width"]=(1);
self["@joinStyle"]=nil;
self["@capStyle"]=self["@joinStyle"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: ["initialize"]}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "joinBevel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@joinStyle'] = 'bevel'; ;
return self}, function($ctx1) {$ctx1.fill(self,"joinBevel",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "joinMiter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@joinStyle'] = 'miter'; ;
return self}, function($ctx1) {$ctx1.fill(self,"joinMiter",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);

smalltalk.addMethod(
smalltalk.method({
selector: "joinRound",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@joinStyle'] = 'round'; ;
return self}, function($ctx1) {$ctx1.fill(self,"joinRound",{},smalltalk.AthensHTMLStrokePaint)})},
messageSends: []}),
smalltalk.AthensHTMLStrokePaint);




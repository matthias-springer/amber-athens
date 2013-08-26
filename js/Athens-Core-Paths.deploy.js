smalltalk.addPackage('Athens-Core-Paths');
smalltalk.addClass('AthensPathBuilder', smalltalk.Object, [], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "absolute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"absolute",{},smalltalk.AthensPathBuilder)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "ccwArcTo:angle:",
fn: function (endPt,rot){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"ccwArcTo:angle:",{endPt:endPt,rot:rot},smalltalk.AthensPathBuilder)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.AthensPathBuilder)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"createPath:",{aBlock:aBlock},smalltalk.AthensPathBuilder)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:and:to:",
fn: function (cp1,cp2,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:and:to:",{cp1:cp1,cp2:cp2,aPoint:aPoint},smalltalk.AthensPathBuilder)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:to:",
fn: function (cp1,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{cp1:cp1,aPoint:aPoint},smalltalk.AthensPathBuilder)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "cwArcTo:angle:",
fn: function (endPt,rot){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"cwArcTo:angle:",{endPt:endPt,rot:rot},smalltalk.AthensPathBuilder)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "fromRectangles:",
fn: function (rects){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._createPath_(function(builder) {
		builder._absolute();
		
		for (var i = 0; i < rects.length; i++) {
			var rect = rects[i];
			builder._moveTo_(rect['@origin']['@x'].__at(rect['@origin']['@y']));
			builder._lineTo_(rect['@corner']['@x'].__at(rect['@origin']['@y']));
			builder._lineTo_(rect['@corner']['@x'].__at(rect['@corner']['@y']));
			builder._lineTo_(rect['@origin']['@x'].__at(rect['@corner']['@y']));
			builder._close();
		}
	}); ;
return self}, function($ctx1) {$ctx1.fill(self,"fromRectangles:",{rects:rects},smalltalk.AthensPathBuilder)})},
messageSends: []}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.AthensPathBuilder)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.AthensPathBuilder)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensPathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "relative",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"relative",{},smalltalk.AthensPathBuilder)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensPathBuilder);


smalltalk.AthensPathBuilder.klass.iVarNames = ['zeroPoint'];
smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._createPath_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aBlock:aBlock},smalltalk.AthensPathBuilder.klass)})},
messageSends: ["createPath:", "new"]}),
smalltalk.AthensPathBuilder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromRectangles:",
fn: function (rects){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._fromRectangles_(rects);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromRectangles:",{rects:rects},smalltalk.AthensPathBuilder.klass)})},
messageSends: ["fromRectangles:", "new"]}),
smalltalk.AthensPathBuilder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@zeroPoint"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensPathBuilder.klass)})},
messageSends: ["@"]}),
smalltalk.AthensPathBuilder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "zeroPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__at((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"zeroPoint",{},smalltalk.AthensPathBuilder.klass)})},
messageSends: ["@"]}),
smalltalk.AthensPathBuilder.klass);


smalltalk.addClass('AthensSimplePathBuilder', smalltalk.AthensPathBuilder, ['absolute', 'open', 'contourStartPt', 'xMin', 'yMin', 'xMax', 'yMax', 'pathStart', 'lastSegment'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "absolute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@absolute"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"absolute",{},smalltalk.AthensSimplePathBuilder)})},
messageSends: []}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "addSegment:",
fn: function (aSegment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@lastSegment"])._next_(aSegment);
self["@lastSegment"]=aSegment;
return self}, function($ctx1) {$ctx1.fill(self,"addSegment:",{aSegment:aSegment},smalltalk.AthensSimplePathBuilder)})},
messageSends: ["next:"]}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "ccwArcTo:angle:",
fn: function (endPt,rot){
var self=this;
function $AthensCCWArcSegment(){return smalltalk.AthensCCWArcSegment||(typeof AthensCCWArcSegment=="undefined"?nil:AthensCCWArcSegment)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._addSegment_(_st(_st($AthensCCWArcSegment())._new())._endPoint_angle_(self._toAbsolute_(endPt),rot));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ccwArcTo:angle:",{endPt:endPt,rot:rot},smalltalk.AthensSimplePathBuilder)})},
messageSends: ["addSegment:", "endPoint:angle:", "toAbsolute:", "new"]}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
function $AthensCloseSegment(){return smalltalk.AthensCloseSegment||(typeof AthensCloseSegment=="undefined"?nil:AthensCloseSegment)}
return smalltalk.withContext(function($ctx1) { 
self._addSegment_(_st(_st($AthensCloseSegment())._new())._point_(self["@contourStartPt"]));
self["@contourStartPt"]=nil;
self["@open"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.AthensSimplePathBuilder)})},
messageSends: ["addSegment:", "point:", "new"]}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "createPath:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aBlock)._value_(self);
$1=self["@pathStart"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"createPath:",{aBlock:aBlock},smalltalk.AthensSimplePathBuilder)})},
messageSends: ["value:"]}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:and:to:",
fn: function (cp1,cp2,aPoint){
var self=this;
var pt1,pt2,pt3;
function $AthensCubicSegment(){return smalltalk.AthensCubicSegment||(typeof AthensCubicSegment=="undefined"?nil:AthensCubicSegment)}
return smalltalk.withContext(function($ctx1) { 
var $1;
pt1=self._toAbsolute_(cp1);
pt2=self._toAbsolute_(cp2);
pt3=self._toAbsolute_(aPoint);
$1=self._addSegment_(_st(_st($AthensCubicSegment())._new())._from_via_and_to_(_st(self["@lastSegment"])._endPoint(),pt1,pt2,pt3));
return $1;
}, function($ctx1) {$ctx1.fill(self,"curveVia:and:to:",{cp1:cp1,cp2:cp2,aPoint:aPoint,pt1:pt1,pt2:pt2,pt3:pt3},smalltalk.AthensSimplePathBuilder)})},
messageSends: ["toAbsolute:", "addSegment:", "from:via:and:to:", "endPoint", "new"]}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:to:",
fn: function (cp1,aPoint){
var self=this;
var pt1,pt2;
function $AthensQuadSegment(){return smalltalk.AthensQuadSegment||(typeof AthensQuadSegment=="undefined"?nil:AthensQuadSegment)}
return smalltalk.withContext(function($ctx1) { 
var $1;
pt1=self._toAbsolute_(cp1);
pt2=self._toAbsolute_(aPoint);
$1=self._addSegment_(_st(_st($AthensQuadSegment())._new())._from_via_to_(_st(self["@lastSegment"])._endPoint(),pt1,pt2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{cp1:cp1,aPoint:aPoint,pt1:pt1,pt2:pt2},smalltalk.AthensSimplePathBuilder)})},
messageSends: ["toAbsolute:", "addSegment:", "from:via:to:", "endPoint", "new"]}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "cwArcTo:angle:",
fn: function (endPt,rot){
var self=this;
function $AthensCWArcSegment(){return smalltalk.AthensCWArcSegment||(typeof AthensCWArcSegment=="undefined"?nil:AthensCWArcSegment)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._addSegment_(_st(_st($AthensCWArcSegment())._new())._endPoint_angle_(self._toAbsolute_(endPt),rot));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cwArcTo:angle:",{endPt:endPt,rot:rot},smalltalk.AthensSimplePathBuilder)})},
messageSends: ["addSegment:", "endPoint:angle:", "toAbsolute:", "new"]}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $AthensMoveSegment(){return smalltalk.AthensMoveSegment||(typeof AthensMoveSegment=="undefined"?nil:AthensMoveSegment)}
return smalltalk.withContext(function($ctx1) { 
self["@absolute"]=false;
self["@contourStartPt"]=_st(self._class())._zeroPoint();
self["@lastSegment"]=_st(_st($AthensMoveSegment())._new())._point_(_st(self._class())._zeroPoint());
self["@pathStart"]=self["@lastSegment"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensSimplePathBuilder)})},
messageSends: ["zeroPoint", "class", "point:", "new"]}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
fn: function (aPoint){
var self=this;
function $AthensLineSegment(){return smalltalk.AthensLineSegment||(typeof AthensLineSegment=="undefined"?nil:AthensLineSegment)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._addSegment_(_st(_st($AthensLineSegment())._new())._point_(self._toAbsolute_(aPoint)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.AthensSimplePathBuilder)})},
messageSends: ["addSegment:", "point:", "toAbsolute:", "new"]}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
fn: function (aPoint){
var self=this;
function $AthensMoveSegment(){return smalltalk.AthensMoveSegment||(typeof AthensMoveSegment=="undefined"?nil:AthensMoveSegment)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
self["@contourStartPt"]=self._toAbsolute_(aPoint);
$1=_st(self["@lastSegment"])._isMove();
if(smalltalk.assert($1)){
_st(self["@lastSegment"])._point_(self["@contourStartPt"]);
$2=self;
return $2;
};
$3=_st($AthensMoveSegment())._new();
_st($3)._point_(self["@contourStartPt"]);
$4=_st($3)._reopen_(self["@open"]);
self._addSegment_($4);
self["@open"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.AthensSimplePathBuilder)})},
messageSends: ["toAbsolute:", "ifTrue:", "point:", "isMove", "addSegment:", "new", "reopen:"]}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "pathBounds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@xMin"]).__at(self["@yMin"]))._corner_(_st(self["@xMax"]).__at(self["@yMax"]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"pathBounds",{},smalltalk.AthensSimplePathBuilder)})},
messageSends: ["corner:", "@"]}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "pathStart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@pathStart"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pathStart",{},smalltalk.AthensSimplePathBuilder)})},
messageSends: []}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "relative",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@absolute"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"relative",{},smalltalk.AthensSimplePathBuilder)})},
messageSends: []}),
smalltalk.AthensSimplePathBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "toAbsolute:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var pt = self['@absolute'] ? aPoint : self['@lastSegment']._endPoint().__plus(aPoint);
	var ptX = pt._x();
	var ptY = pt._y();
	
	if (self['@xMin'] === undefined) {
		self['@xMin'] = self['@xMax'] = ptX;
		self['@yMin'] = self['@yMax'] = ptY;
	}
	else {
		self['@xMin'] = Math.min(self['@xMin'], ptX);
		self['@xMax'] = Math.min(self['@xMax'], ptX);
		self['@yMin'] = Math.min(self['@yMin'], ptY);
		self['@yMax'] = Math.min(self['@yMax'], ptY);
	}
	
	return pt; ;
return self}, function($ctx1) {$ctx1.fill(self,"toAbsolute:",{aPoint:aPoint},smalltalk.AthensSimplePathBuilder)})},
messageSends: []}),
smalltalk.AthensSimplePathBuilder);



smalltalk.addClass('AthensPathConverter', smalltalk.Object, ['sourcePath', 'dest', 'endPoint'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "close:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@dest"])._close_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"close:",{aPoint:aPoint},smalltalk.AthensPathConverter)})},
messageSends: ["close:"]}),
smalltalk.AthensPathConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "convert:",
fn: function (aSourcePath){
var self=this;
var segment;
return smalltalk.withContext(function($ctx1) { 
var $1;
segment=aSourcePath;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(segment)._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(segment)._convertWith_(self);
self["@endPoint"]=_st(segment)._endPoint();
self["@endPoint"];
segment=_st(segment)._next();
return segment;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(self["@dest"])._finish();
return $1;
}, function($ctx1) {$ctx1.fill(self,"convert:",{aSourcePath:aSourcePath,segment:segment},smalltalk.AthensPathConverter)})},
messageSends: ["whileTrue:", "convertWith:", "endPoint", "next", "notNil", "finish"]}),
smalltalk.AthensPathConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:to:",
fn: function (pt1,pt2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@dest"])._curveVia_to_(pt1,pt2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{pt1:pt1,pt2:pt2},smalltalk.AthensPathConverter)})},
messageSends: ["curveVia:to:"]}),
smalltalk.AthensPathConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "dest:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dest"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"dest:",{anObject:anObject},smalltalk.AthensPathConverter)})},
messageSends: []}),
smalltalk.AthensPathConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "finish",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@dest"])._finish();
return $1;
}, function($ctx1) {$ctx1.fill(self,"finish",{},smalltalk.AthensPathConverter)})},
messageSends: ["finish"]}),
smalltalk.AthensPathConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@dest"])._lineTo_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.AthensPathConverter)})},
messageSends: ["lineTo:"]}),
smalltalk.AthensPathConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@dest"])._moveTo_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.AthensPathConverter)})},
messageSends: ["moveTo:"]}),
smalltalk.AthensPathConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "source:dest:",
fn: function (aSource,aDest){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sourcePath"]=aSource;
self["@dest"]=aDest;
return self}, function($ctx1) {$ctx1.fill(self,"source:dest:",{aSource:aSource,aDest:aDest},smalltalk.AthensPathConverter)})},
messageSends: []}),
smalltalk.AthensPathConverter);


smalltalk.addMethod(
smalltalk.method({
selector: "dest:",
fn: function (aDest){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._dest_(aDest);
return $1;
}, function($ctx1) {$ctx1.fill(self,"dest:",{aDest:aDest},smalltalk.AthensPathConverter.klass)})},
messageSends: ["dest:", "new"]}),
smalltalk.AthensPathConverter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "source:dest:",
fn: function (aSource,aDest){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._source_dest_(aSource,aDest);
return $1;
}, function($ctx1) {$ctx1.fill(self,"source:dest:",{aSource:aSource,aDest:aDest},smalltalk.AthensPathConverter.klass)})},
messageSends: ["source:dest:", "new"]}),
smalltalk.AthensPathConverter.klass);


smalltalk.addClass('AthensBezierConverter', smalltalk.AthensPathConverter, ['distanceTolerance', 'angleTolerance'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "angleBetween:and:ifDegenerate:",
fn: function (p1,p2,aBlock){
var self=this;
var x1,y1,x2,y2,dot2,n2;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
x1=_st(p1)._x();
y1=_st(p1)._y();
x2=_st(p2)._x();
y2=_st(p2)._y();
dot2=_st(_st(x1).__star(x2)).__plus(_st(y1).__star(y2));
dot2=_st(dot2).__star(dot2);
n2=_st(_st(_st(x1).__star(x1)).__plus(_st(y1).__star(y1))).__star(_st(_st(x2).__star(x2)).__plus(_st(y2).__star(y2)));
$1=_st(n2).__eq((0));
if(smalltalk.assert($1)){
$2=_st(aBlock)._value();
return $2;
};
$3=_st(_st(dot2).__slash(n2))._arcCos();
return $3;
}, function($ctx1) {$ctx1.fill(self,"angleBetween:and:ifDegenerate:",{p1:p1,p2:p2,aBlock:aBlock,x1:x1,y1:y1,x2:x2,y2:y2,dot2:dot2,n2:n2},smalltalk.AthensBezierConverter)})},
messageSends: ["x", "y", "+", "*", "ifTrue:", "value", "=", "arcCos", "/"]}),
smalltalk.AthensBezierConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:to:",
fn: function (pt1,pt2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._recursiveBezier2X1_y1_x2_y2_x3_y3_(_st(self["@endPoint"])._x(),_st(self["@endPoint"])._y(),_st(pt1)._x(),_st(pt1)._y(),_st(pt2)._x(),_st(pt2)._y());
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{pt1:pt1,pt2:pt2},smalltalk.AthensBezierConverter)})},
messageSends: ["recursiveBezier2X1:y1:x2:y2:x3:y3:", "x", "y"]}),
smalltalk.AthensBezierConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@distanceTolerance"]=(0.5);
self["@angleTolerance"]=(0.1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensBezierConverter)})},
messageSends: []}),
smalltalk.AthensBezierConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "isFlatBezier2X1:y1:x2:y2:x3:y3:",
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
var dx,dy,d,da,angle;
function $CurveAngleTolerance(){return smalltalk.CurveAngleTolerance||(typeof CurveAngleTolerance=="undefined"?nil:CurveAngleTolerance)}
function $CollinearityEps(){return smalltalk.CollinearityEps||(typeof CollinearityEps=="undefined"?nil:CollinearityEps)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
dx=_st(x3).__minus(x1);
dy=_st(y3).__minus(y1);
d=_st(_st(_st(_st(x2).__minus(x3)).__star(dy)).__minus(_st(_st(y2).__minus(y3)).__star(dx)))._abs();
$1=_st(d).__gt($CollinearityEps());
if(smalltalk.assert($1)){
$2=_st(_st(d).__star(d)).__lt_eq(_st(self["@distanceTolerance"]).__star(_st(_st(dx).__star(dx)).__plus(_st(dy).__star(dy))));
if(smalltalk.assert($2)){
$3=_st(self["@angleTolerance"]).__lt($CurveAngleTolerance());
if(smalltalk.assert($3)){
return true;
};
angle=self._angleBetween_and_ifDegenerate_(_st(_st(x2).__minus(x1)).__at(_st(y2).__minus(y1)),_st(_st(x3).__minus(x2)).__at(_st(y3).__minus(y2)),(function(){
return smalltalk.withContext(function($ctx2) {
return (0);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
angle;
$4=_st(angle).__lt_eq(self["@angleTolerance"]);
if(smalltalk.assert($4)){
return true;
};
};
} else {
da=_st(_st(dx).__star(dx)).__plus(_st(dy).__star(dy));
da;
$5=_st(da).__eq((0));
if(smalltalk.assert($5)){
d=_st(_st(_st(x1).__minus(x2))._squared()).__plus(_st(_st(y1).__minus(y2))._squared());
d;
} else {
_st(_st(d).__eq(_st(_st(_st(x2).__minus(x1)).__star(dx)).__plus(_st(_st(y2).__minus(y1)).__star(dy)))).__slash(da);
$6=_st(_st(d).__gt((0)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(d).__lt((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($6)){
return true;
};
$7=_st(d).__lt_eq((0));
if(smalltalk.assert($7)){
d=_st(_st(_st(x1).__minus(x2))._squared()).__plus(_st(_st(y1).__minus(y2))._squared());
d;
} else {
$8=_st(d).__gt_eq((1));
if(smalltalk.assert($8)){
d=_st(_st(_st(x2).__minus(x3))._squared()).__plus(_st(_st(y2).__minus(y3))._squared());
d;
} else {
d=_st(_st(_st(_st(x2).__minus(x1)).__minus(_st(d).__star(dx)))._squared()).__plus(_st(_st(_st(y2).__minus(y1)).__minus(_st(d).__star(dy)))._squared());
d;
};
};
};
$9=_st(d).__lt(self._distanceToleranceSquared());
if(smalltalk.assert($9)){
return true;
};
};
return false;
}, function($ctx1) {$ctx1.fill(self,"isFlatBezier2X1:y1:x2:y2:x3:y3:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3,dx:dx,dy:dy,d:d,da:da,angle:angle},smalltalk.AthensBezierConverter)})},
messageSends: ["-", "abs", "*", "ifTrue:ifFalse:", "ifTrue:", "<", "angleBetween:and:ifDegenerate:", "@", "<=", "+", "squared", "/", "=", "and:", ">", ">=", "distanceToleranceSquared"]}),
smalltalk.AthensBezierConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "recursiveBezier2X1:y1:x2:y2:x3:y3:",
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._isFlatBezier2X1_y1_x2_y2_x3_y3_(x1,y1,x2,y2,x3,y3);
if(smalltalk.assert($1)){
$2=self["@dest"];
_st($2)._lineTo_(_st(x2).__at(y2));
$3=_st($2)._lineTo_(_st(x3).__at(y3));
$3;
} else {
var x12,y12,x23,y23,x123,y123;
x12=_st(_st(x1).__plus(x2)).__star((0.5));
x12;
y12=_st(_st(y1).__plus(y2)).__star((0.5));
y12;
x23=_st(_st(x2).__plus(x3)).__star((0.5));
x23;
y23=_st(_st(y2).__plus(y3)).__star((0.5));
y23;
x123=_st(_st(x12).__plus(x23)).__star((0.5));
x123;
y123=_st(_st(y12).__plus(y23)).__star((0.5));
y123;
self._recursiveBezier2X1_y1_x2_y2_x3_y3_(x1,y1,x12,y12,x123,y123);
self._recursiveBezier2X1_y1_x2_y2_x3_y3_(x123,y123,x23,y23,x3,y3);
};
return self}, function($ctx1) {$ctx1.fill(self,"recursiveBezier2X1:y1:x2:y2:x3:y3:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3},smalltalk.AthensBezierConverter)})},
messageSends: ["ifTrue:ifFalse:", "lineTo:", "@", "*", "+", "recursiveBezier2X1:y1:x2:y2:x3:y3:", "isFlatBezier2X1:y1:x2:y2:x3:y3:"]}),
smalltalk.AthensBezierConverter);


smalltalk.AthensBezierConverter.klass.iVarNames = ['collinearityEps','curveAngleTolerance','distanceEps'];
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@curveAngleTolerance'] = 0.01;
	self['@collinearityEps'] = 1e-30;
	self['@distanceEps'] = 1e-30; ;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensBezierConverter.klass)})},
messageSends: []}),
smalltalk.AthensBezierConverter.klass);


smalltalk.addClass('AthensPathSegment', smalltalk.Object, ['next'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensPathSegment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensPathSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "convertWith:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"convertWith:",{anObject:anObject},smalltalk.AthensPathSegment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AthensPathSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
var segment;
return smalltalk.withContext(function($ctx1) { 
segment=self;
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value_(segment);
segment=_st(segment)._next();
segment;
return _st(segment)._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue();
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock,segment:segment},smalltalk.AthensPathSegment)})},
messageSends: ["whileTrue", "value:", "next", "notNil"]}),
smalltalk.AthensPathSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "isMove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isMove",{},smalltalk.AthensPathSegment)})},
messageSends: []}),
smalltalk.AthensPathSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@next"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.AthensPathSegment)})},
messageSends: []}),
smalltalk.AthensPathSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@next"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"next:",{anObject:anObject},smalltalk.AthensPathSegment)})},
messageSends: []}),
smalltalk.AthensPathSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "sendCommandsTo:",
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var segment = self;
	while (segment !== undefined) {
		segment._sendCommandTo_(aBuilder);
		segment = segment['@next'];
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"sendCommandsTo:",{aBuilder:aBuilder},smalltalk.AthensPathSegment)})},
messageSends: []}),
smalltalk.AthensPathSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
var segment,count;
return smalltalk.withContext(function($ctx1) { 
var $1;
segment=self;
count=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(segment)._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
count=_st(count).__plus((1));
count;
segment=_st(segment)._next();
return segment;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=count;
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{segment:segment,count:count},smalltalk.AthensPathSegment)})},
messageSends: ["whileTrue:", "+", "next", "notNil"]}),
smalltalk.AthensPathSegment);



smalltalk.addClass('AthensArcSegment', smalltalk.AthensPathSegment, ['endPoint', 'angle'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "angle",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@angle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"angle",{},smalltalk.AthensArcSegment)})},
messageSends: []}),
smalltalk.AthensArcSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "endPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@endPoint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"endPoint",{},smalltalk.AthensArcSegment)})},
messageSends: []}),
smalltalk.AthensArcSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "endPoint:angle:",
fn: function (pt,a){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@endPoint"]=pt;
self["@angle"]=a;
return self}, function($ctx1) {$ctx1.fill(self,"endPoint:angle:",{pt:pt,a:a},smalltalk.AthensArcSegment)})},
messageSends: []}),
smalltalk.AthensArcSegment);



smalltalk.addClass('AthensCCWArcSegment', smalltalk.AthensArcSegment, [], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._ccwArcSegment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensCCWArcSegment)})},
messageSends: ["ccwArcSegment:"]}),
smalltalk.AthensCCWArcSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "sendCommandTo:",
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 aBuilder._ccwArcTo_angle_(self['@endPoint'], self['@angle']); ;
return self}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},smalltalk.AthensCCWArcSegment)})},
messageSends: []}),
smalltalk.AthensCCWArcSegment);



smalltalk.addClass('AthensCWArcSegment', smalltalk.AthensArcSegment, [], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._cwArcSegment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensCWArcSegment)})},
messageSends: ["cwArcSegment:"]}),
smalltalk.AthensCWArcSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "sendCommandTo:",
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 aBuilder._cwArcTo_angle_(self['@endPoint'], self['@angle']); ;
return self}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},smalltalk.AthensCWArcSegment)})},
messageSends: []}),
smalltalk.AthensCWArcSegment);



smalltalk.addClass('AthensCubicSegment', smalltalk.AthensPathSegment, ['via1', 'via2', 'to'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._cubicBezierSegment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensCubicSegment)})},
messageSends: ["cubicBezierSegment:"]}),
smalltalk.AthensCubicSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "endPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@to"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"endPoint",{},smalltalk.AthensCubicSegment)})},
messageSends: []}),
smalltalk.AthensCubicSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "from:via:and:to:",
fn: function (origin,controlPoint,secondControlPoint,destination){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@via1"]=controlPoint;
self["@via2"]=secondControlPoint;
self["@to"]=destination;
return self}, function($ctx1) {$ctx1.fill(self,"from:via:and:to:",{origin:origin,controlPoint:controlPoint,secondControlPoint:secondControlPoint,destination:destination},smalltalk.AthensCubicSegment)})},
messageSends: []}),
smalltalk.AthensCubicSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "sendCommandTo:",
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 aBuilder._curveVia_and_to_(self['@via1'], self['@via2'], self['@to']); ;
return self}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},smalltalk.AthensCubicSegment)})},
messageSends: []}),
smalltalk.AthensCubicSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "to",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@to"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"to",{},smalltalk.AthensCubicSegment)})},
messageSends: []}),
smalltalk.AthensCubicSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "via1",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@via1"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"via1",{},smalltalk.AthensCubicSegment)})},
messageSends: []}),
smalltalk.AthensCubicSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "via2",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@via2"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"via2",{},smalltalk.AthensCubicSegment)})},
messageSends: []}),
smalltalk.AthensCubicSegment);



smalltalk.addClass('AthensEllipticalArcSegment', smalltalk.AthensPathSegment, ['radii', 'phi', 'large', 'sweep', 'endPoint'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._ellipticalArcSegment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensEllipticalArcSegment)})},
messageSends: ["ellipticalArcSegment:"]}),
smalltalk.AthensEllipticalArcSegment);



smalltalk.addClass('AthensLineSegment', smalltalk.AthensPathSegment, ['point'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._lineSegment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensLineSegment)})},
messageSends: ["lineSegment:"]}),
smalltalk.AthensLineSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "endPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@point"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"endPoint",{},smalltalk.AthensLineSegment)})},
messageSends: []}),
smalltalk.AthensLineSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "point",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@point"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"point",{},smalltalk.AthensLineSegment)})},
messageSends: []}),
smalltalk.AthensLineSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "point:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@point"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"point:",{anObject:anObject},smalltalk.AthensLineSegment)})},
messageSends: []}),
smalltalk.AthensLineSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "sendCommandTo:",
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 aBuilder._lineTo_(self['@point']); ;
return self}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},smalltalk.AthensLineSegment)})},
messageSends: []}),
smalltalk.AthensLineSegment);



smalltalk.addClass('AthensCloseSegment', smalltalk.AthensLineSegment, [], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._closeSegment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensCloseSegment)})},
messageSends: ["closeSegment:"]}),
smalltalk.AthensCloseSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "sendCommandTo:",
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 aBuilder._close(); ;
return self}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},smalltalk.AthensCloseSegment)})},
messageSends: []}),
smalltalk.AthensCloseSegment);



smalltalk.addClass('AthensMoveSegment', smalltalk.AthensLineSegment, ['closed'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._moveSegment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensMoveSegment)})},
messageSends: ["moveSegment:"]}),
smalltalk.AthensMoveSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "closed:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@closed"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"closed:",{aBoolean:aBoolean},smalltalk.AthensMoveSegment)})},
messageSends: []}),
smalltalk.AthensMoveSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "isClosed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@closed"]).__eq_eq(true);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isClosed",{},smalltalk.AthensMoveSegment)})},
messageSends: ["=="]}),
smalltalk.AthensMoveSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "isMove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isMove",{},smalltalk.AthensMoveSegment)})},
messageSends: []}),
smalltalk.AthensMoveSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "reopen:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@closed"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"reopen:",{aBoolean:aBoolean},smalltalk.AthensMoveSegment)})},
messageSends: []}),
smalltalk.AthensMoveSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "sendCommandTo:",
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 aBuilder._moveTo_(self['@point']); ;
return self}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},smalltalk.AthensMoveSegment)})},
messageSends: []}),
smalltalk.AthensMoveSegment);



smalltalk.addClass('AthensQuadSegment', smalltalk.AthensPathSegment, ['via', 'to'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._quadricBezierSegment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AthensQuadSegment)})},
messageSends: ["quadricBezierSegment:"]}),
smalltalk.AthensQuadSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "endPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@to"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"endPoint",{},smalltalk.AthensQuadSegment)})},
messageSends: []}),
smalltalk.AthensQuadSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "from:via:to:",
fn: function (pt0,pt1,p){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@via"]=pt1;
self["@to"]=p;
return self}, function($ctx1) {$ctx1.fill(self,"from:via:to:",{pt0:pt0,pt1:pt1,p:p},smalltalk.AthensQuadSegment)})},
messageSends: []}),
smalltalk.AthensQuadSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "sendCommandTo:",
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 aBuilder._curveVia_to_(self['@via'], self['@to']); ;
return self}, function($ctx1) {$ctx1.fill(self,"sendCommandTo:",{aBuilder:aBuilder},smalltalk.AthensQuadSegment)})},
messageSends: []}),
smalltalk.AthensQuadSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "to",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@to"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"to",{},smalltalk.AthensQuadSegment)})},
messageSends: []}),
smalltalk.AthensQuadSegment);

smalltalk.addMethod(
smalltalk.method({
selector: "via",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@via"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"via",{},smalltalk.AthensQuadSegment)})},
messageSends: []}),
smalltalk.AthensQuadSegment);



smalltalk.addClass('AthensPathSegmentConverter', smalltalk.Object, ['dest', 'endPoint', 'contourStartPt'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "convert:",
fn: function (aPath){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@endPoint"]=(0).__at((0));
self["@contourStartPt"]=self["@endPoint"];
_st(aPath)._sendCommandsTo_(self);
return self}, function($ctx1) {$ctx1.fill(self,"convert:",{aPath:aPath},smalltalk.AthensPathSegmentConverter)})},
messageSends: ["@", "sendCommandsTo:"]}),
smalltalk.AthensPathSegmentConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "dest:",
fn: function (aDest){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dest"]=aDest;
return self}, function($ctx1) {$ctx1.fill(self,"dest:",{aDest:aDest},smalltalk.AthensPathSegmentConverter)})},
messageSends: []}),
smalltalk.AthensPathSegmentConverter);



smalltalk.addClass('AthensPolygon', smalltalk.Object, ['contours', 'currentContour', 'distanceTolerance', 'angleTolerance', 'endPoint'], 'Athens-Core-Paths');
smalltalk.addMethod(
smalltalk.method({
selector: "angleBetween:and:ifDegenerate:",
fn: function (p1,p2,aBlock){
var self=this;
var x1,y1,x2,y2,dot2,n2;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
x1=_st(p1)._x();
y1=_st(p1)._y();
x2=_st(p2)._x();
y2=_st(p2)._y();
dot2=_st(_st(x1).__star(x2)).__plus(_st(y1).__star(y2));
dot2=_st(dot2).__star(dot2);
n2=_st(_st(_st(x1).__star(x1)).__plus(_st(y1).__star(y1))).__star(_st(_st(x2).__star(x2)).__plus(_st(y2).__star(y2)));
$1=_st(n2).__eq((0));
if(smalltalk.assert($1)){
$2=_st(aBlock)._value();
return $2;
};
$3=_st(_st(dot2).__slash(n2))._arcCos();
return $3;
}, function($ctx1) {$ctx1.fill(self,"angleBetween:and:ifDegenerate:",{p1:p1,p2:p2,aBlock:aBlock,x1:x1,y1:y1,x2:x2,y2:y2,dot2:dot2,n2:n2},smalltalk.AthensPolygon)})},
messageSends: ["x", "y", "+", "*", "ifTrue:", "value", "=", "arcCos", "/"]}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "asPolygon",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asPolygon",{},smalltalk.AthensPolygon)})},
messageSends: []}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "boundingBox",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var minX = Infinity;
	var minY = Infinity;
	var maxX = -Infinity;
	var maxY = -Infinity;
	
	for (var contourIndex = 0; contourIndex < self['@contours'].length; contourIndex++) {
		var contour = self['@contours'][contourIndex];
		for (var pointIndex = 0; pointIndex < contour.length; pointIndex++) {
			var point = contour[pointIndex];
			minX = Math.min(minX, point['@x']);
			minY = Math.min(minY, point['@y']);
			maxX = Math.max(maxX, point['@x']);
			maxY = Math.max(maxY, point['@y']);
		}
	}
	
	return minX.__at(minY)._corner_(maxX.__at(maxY)); ;
return self}, function($ctx1) {$ctx1.fill(self,"boundingBox",{},smalltalk.AthensPolygon)})},
messageSends: []}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "curveVia:to:",
fn: function (pt1,pt2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._recursiveBezier2X1_y1_x2_y2_x3_y3_(_st(self["@endPoint"])._x(),_st(self["@endPoint"])._y(),_st(pt1)._x(),_st(pt1)._y(),_st(pt2)._x(),_st(pt2)._y());
self["@endPoint"]=pt2;
return self}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{pt1:pt1,pt2:pt2},smalltalk.AthensPolygon)})},
messageSends: ["recursiveBezier2X1:y1:x2:y2:x3:y3:", "x", "y"]}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "finish",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"finish",{},smalltalk.AthensPolygon)})},
messageSends: []}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var pX = aPoint['@x'];
	var pY = aPoint['@y'];
	
	for (var ci = 0; ci < self['@contours'].length; ci++) {
		var contour = self['@contours'][ci];
		var num = contour.length;
		var i = 0;
		var j = num - 1;
		var c = false;
		
		for (i = 0; i < num; i++) {		
			if (((pY < contour[i]['@y']) != (pY < contour[j]['@y'])) && (pX < (contour[j]['@x'] - contour[i]['@x']) * (pY - contour[i]['@y']) / (contour[j]['@y'] - contour[i]['@y']) + contour[i]['@x'])) {
				c = !c;
			}
			
			j = i;
		}
		
		if (c) {
			return c;
		}
	}
	
	return false; ;
return self}, function($ctx1) {$ctx1.fill(self,"includesPoint:",{aPoint:aPoint},smalltalk.AthensPolygon)})},
messageSends: []}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:withTransformation:",
fn: function (aPoint,matrix){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var pX = matrix['@sx']*aPoint['@x'] + matrix['@shx']*aPoint['@y'] + matrix['@x'];
	var pY = matrix['@shy']*aPoint['@x'] + matrix['@sy']*aPoint['@y'] + matrix['@y'];
	
	for (var ci = 0; ci < self['@contours'].length; ci++) {
		var contour = self['@contours'][ci];
		x= contour;
		var num = contour.length;
		var i = 0;
		var j = num - 1;
		var c = false;
		
		for (i = 0; i < num; i++) {		
			if (((pY < contour[i]['@y']) != (pY < contour[j]['@y'])) && (pX < (contour[j]['@x'] - contour[i]['@x']) * (pY - contour[i]['@y']) / (contour[j]['@y'] - contour[i]['@y']) + contour[i]['@x'])) {
				c = !c;
			}
			
			j = i;
		}
		
		if (c) {
			return c;
		}
	}
	
	return false; ;
return self}, function($ctx1) {$ctx1.fill(self,"includesPoint:withTransformation:",{aPoint:aPoint,matrix:matrix},smalltalk.AthensPolygon)})},
messageSends: []}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@contours'] = smalltalk.OrderedCollection._new();
	self['@distanceTolerance'] = 0.5;
	self['@angleTolerance'] = 0.1; ;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensPolygon)})},
messageSends: []}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "isFlatBezier2X1:y1:x2:y2:x3:y3:",
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
var dx,dy,d,da,angle;
function $CurveAngleTolerance(){return smalltalk.CurveAngleTolerance||(typeof CurveAngleTolerance=="undefined"?nil:CurveAngleTolerance)}
function $CollinearityEps(){return smalltalk.CollinearityEps||(typeof CollinearityEps=="undefined"?nil:CollinearityEps)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
dx=_st(x3).__minus(x1);
dy=_st(y3).__minus(y1);
d=_st(_st(_st(_st(x2).__minus(x3)).__star(dy)).__minus(_st(_st(y2).__minus(y3)).__star(dx)))._abs();
$1=_st(d).__gt($CollinearityEps());
if(smalltalk.assert($1)){
$2=_st(_st(d).__star(d)).__lt_eq(_st(self["@distanceTolerance"]).__star(_st(_st(dx).__star(dx)).__plus(_st(dy).__star(dy))));
if(smalltalk.assert($2)){
$3=_st(self["@angleTolerance"]).__lt($CurveAngleTolerance());
if(smalltalk.assert($3)){
return true;
};
angle=self._angleBetween_and_ifDegenerate_(_st(_st(x2).__minus(x1)).__at(_st(y2).__minus(y1)),_st(_st(x3).__minus(x2)).__at(_st(y3).__minus(y2)),(function(){
return smalltalk.withContext(function($ctx2) {
return (0);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
angle;
$4=_st(angle).__lt_eq(self["@angleTolerance"]);
if(smalltalk.assert($4)){
return true;
};
};
} else {
da=_st(_st(dx).__star(dx)).__plus(_st(dy).__star(dy));
da;
$5=_st(da).__eq((0));
if(smalltalk.assert($5)){
d=_st(_st(_st(x1).__minus(x2))._squared()).__plus(_st(_st(y1).__minus(y2))._squared());
d;
} else {
_st(_st(d).__eq(_st(_st(_st(x2).__minus(x1)).__star(dx)).__plus(_st(_st(y2).__minus(y1)).__star(dy)))).__slash(da);
$6=_st(_st(d).__gt((0)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(d).__lt((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($6)){
return true;
};
$7=_st(d).__lt_eq((0));
if(smalltalk.assert($7)){
d=_st(_st(_st(x1).__minus(x2))._squared()).__plus(_st(_st(y1).__minus(y2))._squared());
d;
} else {
$8=_st(d).__gt_eq((1));
if(smalltalk.assert($8)){
d=_st(_st(_st(x2).__minus(x3))._squared()).__plus(_st(_st(y2).__minus(y3))._squared());
d;
} else {
d=_st(_st(_st(_st(x2).__minus(x1)).__minus(_st(d).__star(dx)))._squared()).__plus(_st(_st(_st(y2).__minus(y1)).__minus(_st(d).__star(dy)))._squared());
d;
};
};
};
$9=_st(d).__lt(self._distanceToleranceSquared());
if(smalltalk.assert($9)){
return true;
};
};
return false;
}, function($ctx1) {$ctx1.fill(self,"isFlatBezier2X1:y1:x2:y2:x3:y3:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3,dx:dx,dy:dy,d:d,da:da,angle:angle},smalltalk.AthensPolygon)})},
messageSends: ["-", "abs", "*", "ifTrue:ifFalse:", "ifTrue:", "<", "angleBetween:and:ifDegenerate:", "@", "<=", "+", "squared", "/", "=", "and:", ">", ">=", "distanceToleranceSquared"]}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "lineTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@currentContour']._add_(aPoint);
	self['@endPoint'] = aPoint; ;
return self}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},smalltalk.AthensPolygon)})},
messageSends: []}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self._newContour();
	self['@currentContour']._add_(aPoint);
	self['@endPoint'] = aPoint; ;
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},smalltalk.AthensPolygon)})},
messageSends: []}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "multiplyBy:",
fn: function (matrix){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 for (var ci = 0; ci < self['@contours'].length; ci++) {
		var contour = self['@contours'][ci];
		
		for (var pi = 0; pi < contour.length; pi++)
		{
			var x = contour[pi]['@x'];
			var y = contour[pi]['@y'];
			contour[pi]['@x'] = matrix['@sx']*x + matrix['@shx']*y + matrix['@x'];
			contour[pi]['@y'] = matrix['@shy']*x + matrix['@sy']*y + matrix['@y'];
		}
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"multiplyBy:",{matrix:matrix},smalltalk.AthensPolygon)})},
messageSends: []}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "newContour",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@currentContour'] = self['@contours']._add_(smalltalk.OrderedCollection._new()); ;
return self}, function($ctx1) {$ctx1.fill(self,"newContour",{},smalltalk.AthensPolygon)})},
messageSends: []}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "paintFillsUsing:on:",
fn: function (aPaint,anAthensCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aPaint)._fillPolygon_on_(self,anAthensCanvas);
return $1;
}, function($ctx1) {$ctx1.fill(self,"paintFillsUsing:on:",{aPaint:aPaint,anAthensCanvas:anAthensCanvas},smalltalk.AthensPolygon)})},
messageSends: ["fillPolygon:on:"]}),
smalltalk.AthensPolygon);

smalltalk.addMethod(
smalltalk.method({
selector: "recursiveBezier2X1:y1:x2:y2:x3:y3:",
fn: function (x1,y1,x2,y2,x3,y3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._isFlatBezier2X1_y1_x2_y2_x3_y3_(x1,y1,x2,y2,x3,y3);
if(smalltalk.assert($1)){
$2=self;
_st($2)._lineTo_(_st(x2).__at(y2));
$3=_st($2)._lineTo_(_st(x3).__at(y3));
$3;
} else {
var x12,y12,x23,y23,x123,y123;
x12=_st(_st(x1).__plus(x2)).__star((0.5));
x12;
y12=_st(_st(y1).__plus(y2)).__star((0.5));
y12;
x23=_st(_st(x2).__plus(x3)).__star((0.5));
x23;
y23=_st(_st(y2).__plus(y3)).__star((0.5));
y23;
x123=_st(_st(x12).__plus(x23)).__star((0.5));
x123;
y123=_st(_st(y12).__plus(y23)).__star((0.5));
y123;
self._recursiveBezier2X1_y1_x2_y2_x3_y3_(x1,y1,x12,y12,x123,y123);
self._recursiveBezier2X1_y1_x2_y2_x3_y3_(x123,y123,x23,y23,x3,y3);
};
return self}, function($ctx1) {$ctx1.fill(self,"recursiveBezier2X1:y1:x2:y2:x3:y3:",{x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3},smalltalk.AthensPolygon)})},
messageSends: ["ifTrue:ifFalse:", "lineTo:", "@", "*", "+", "recursiveBezier2X1:y1:x2:y2:x3:y3:", "isFlatBezier2X1:y1:x2:y2:x3:y3:"]}),
smalltalk.AthensPolygon);




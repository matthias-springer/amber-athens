smalltalk.addPackage('Athens-HTML-Tutorial');
smalltalk.addClass('AthensTigerShape', smalltalk.Object, ['paint', 'path', 'fillRule', 'fill', 'capStyle', 'joinStyle', 'miterLimit', 'strokeWidth', 'strokePaint', 'fillPaint', 'stroke'], 'Athens-HTML-Tutorial');
smalltalk.addMethod(
smalltalk.method({
selector: "addFill",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fill"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"addFill",{},smalltalk.AthensTigerShape)})},
messageSends: []}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "addStroke",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stroke"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"addStroke",{},smalltalk.AthensTigerShape)})},
messageSends: []}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "capStyle:",
fn: function (cap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@capStyle"]=cap;
return self}, function($ctx1) {$ctx1.fill(self,"capStyle:",{cap:cap},smalltalk.AthensTigerShape)})},
messageSends: []}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fillPaint:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fillPaint"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"fillPaint:",{aColor:aColor},smalltalk.AthensTigerShape)})},
messageSends: []}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRule",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fillRule"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fillRule",{},smalltalk.AthensTigerShape)})},
messageSends: []}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRule:",
fn: function (rule){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fillRule"]=rule;
return self}, function($ctx1) {$ctx1.fill(self,"fillRule:",{rule:rule},smalltalk.AthensTigerShape)})},
messageSends: []}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stroke"]=false;
self["@fill"]=self["@stroke"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensTigerShape)})},
messageSends: []}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "joinStyle:",
fn: function (join){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@joinStyle"]=join;
return self}, function($ctx1) {$ctx1.fill(self,"joinStyle:",{join:join},smalltalk.AthensTigerShape)})},
messageSends: []}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "miterLimit:",
fn: function (lim){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@miterLimit"]=lim;
return self}, function($ctx1) {$ctx1.fill(self,"miterLimit:",{lim:lim},smalltalk.AthensTigerShape)})},
messageSends: []}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareFor:",
fn: function (surface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@fill"];
if(smalltalk.assert($1)){
self["@fillPaint"]=_st(surface)._createSolidColorPaint_(self["@fillPaint"]);
self["@fillPaint"];
};
$2=self["@stroke"];
if(smalltalk.assert($2)){
self["@strokePaint"]=_st(surface)._createStrokePaintFor_(_st(surface)._createSolidColorPaint_(self["@strokePaint"]));
self["@strokePaint"];
};
return self}, function($ctx1) {$ctx1.fill(self,"prepareFor:",{surface:surface},smalltalk.AthensTigerShape)})},
messageSends: ["ifTrue:", "createSolidColorPaint:", "createStrokePaintFor:"]}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (can){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@fill"];
if(smalltalk.assert($1)){
_st(can)._setPaint_(self["@fillPaint"]);
_st(can)._drawShape_(self["@path"]);
};
$2=self["@stroke"];
if(smalltalk.assert($2)){
_st(can)._setStrokePaint_(self["@strokePaint"]);
_st(can)._drawShape_(self["@path"]);
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{can:can},smalltalk.AthensTigerShape)})},
messageSends: ["ifTrue:", "setPaint:", "drawShape:", "setStrokePaint:"]}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "setPath:",
fn: function (anAthensCairoPath){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@path"]=anAthensCairoPath;
return self}, function($ctx1) {$ctx1.fill(self,"setPath:",{anAthensCairoPath:anAthensCairoPath},smalltalk.AthensTigerShape)})},
messageSends: []}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "strokePaint:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@strokePaint"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"strokePaint:",{aColor:aColor},smalltalk.AthensTigerShape)})},
messageSends: []}),
smalltalk.AthensTigerShape);

smalltalk.addMethod(
smalltalk.method({
selector: "strokeWidth:",
fn: function (w){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@strokeWidth"]=w;
return self}, function($ctx1) {$ctx1.fill(self,"strokeWidth:",{w:w},smalltalk.AthensTigerShape)})},
messageSends: []}),
smalltalk.AthensTigerShape);



smalltalk.addClass('AthensTutorial', smalltalk.Object, ['surface'], 'Athens-HTML-Tutorial');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensTutorial)})},
messageSends: []}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step1",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"step1",{},smalltalk.AthensTutorial)})},
messageSends: []}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step10",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@surface"])._drawDuring_((function(canvas){
var m;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setShape_(_st((0).__at((0)))._corner_((100).__at((100))));
_st(canvas)._setPaint_(_st($Color())._blue());
$1=_st(canvas)._pathTransform();
_st($1)._scaleBy_((4));
_st($1)._translateX_Y_((50),(50));
_st($1)._rotateByDegrees_((35));
$2=_st($1)._translateX_Y_((-50),(-50));
$2;
m=_st(_st(canvas)._pathTransform())._getMatrix();
m;
_st(canvas)._draw();
_st(_st(canvas)._pathTransform())._loadIdentity();
_st(canvas)._setPaint_(_st($Color())._yellow());
_st(canvas)._draw();
$3=_st(canvas)._pathTransform();
_st($3)._loadAffineTransform_(m);
$4=_st($3)._translateX_Y_((2),(2));
$4;
_st(canvas)._setPaint_(_st(_st($Color())._gray())._alpha_((0.8)));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,m:m},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step10",{},smalltalk.AthensTutorial)})},
messageSends: ["drawDuring:", "clear:", "gray", "setShape:", "corner:", "@", "setPaint:", "blue", "scaleBy:", "pathTransform", "translateX:Y:", "rotateByDegrees:", "getMatrix", "draw", "loadIdentity", "yellow", "loadAffineTransform:", "alpha:"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step11",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"step11",{},smalltalk.AthensTutorial)})},
messageSends: []}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step12",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self["@surface"])._drawDuring_((function(canvas){
var path;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(_st(canvas)._pathTransform())._translateX_Y_(_st(_st(self["@surface"])._width()).__slash((2)),_st(_st(self["@surface"])._height()).__slash((2)));
path=_st(canvas)._createPath_((function(builder){
return smalltalk.withContext(function($ctx3) {
$1=builder;
_st($1)._absolute();
_st($1)._lineTo_((-50).__at((-50)));
_st($1)._lineTo_((60).__at((-60)));
_st($1)._lineTo_((150).__at((50)));
$2=_st($1)._lineTo_((0).__at((0)));
return $2;
}, function($ctx3) {$ctx3.fillBlock({builder:builder},$ctx2)})}));
path;
_st(canvas)._setShape_(path);
_st(_st(canvas)._setStrokePaint_(_st($Color())._white()))._width_((4));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,path:path},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step12",{},smalltalk.AthensTutorial)})},
messageSends: ["drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "createPath:", "absolute", "lineTo:", "@", "setShape:", "width:", "setStrokePaint:", "white", "draw"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step13",
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._absolute();
_st($1)._lineTo_((-50).__at((-50)));
_st($1)._lineTo_((60).__at((-60)));
_st($1)._lineTo_((150).__at((50)));
$2=_st($1)._lineTo_((0).__at((0)));
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(_st(canvas)._pathTransform())._translateX_Y_(_st(_st(self["@surface"])._width()).__slash((2)),_st(_st(self["@surface"])._height()).__slash((2)));
_st(canvas)._setShape_(path);
_st(_st(canvas)._setStrokePaint_(_st($Color())._yellow()))._width_((4));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step13",{path:path},smalltalk.AthensTutorial)})},
messageSends: ["createPath:", "absolute", "lineTo:", "@", "drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "setShape:", "width:", "setStrokePaint:", "yellow", "draw"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step14",
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._absolute();
_st($1)._lineTo_((-50).__at((-50)));
_st($1)._curveVia_to_((0).__at((-80)),(50).__at((-50)));
_st($1)._curveVia_and_to_((100).__at((-20)),(-50).__at((20)),(50).__at((50)));
_st($1)._cwArcTo_angle_((50).__at((100)),(45));
$2=_st($1)._ccwArcTo_angle_((-50).__at((100)),(45));
$2;
return _st(builder)._close();
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
$3=_st(canvas)._pathTransform();
_st($3)._translateX_Y_(_st(_st(self["@surface"])._width()).__slash((2)),_st(_st(self["@surface"])._height()).__slash((2)));
$4=_st($3)._scaleBy_((2));
$4;
_st(canvas)._setShape_(path);
_st(_st(canvas)._setStrokePaint_(_st($Color())._yellow()))._width_((4));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step14",{path:path},smalltalk.AthensTutorial)})},
messageSends: ["createPath:", "absolute", "lineTo:", "@", "curveVia:to:", "curveVia:and:to:", "cwArcTo:angle:", "ccwArcTo:angle:", "close", "drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "scaleBy:", "setShape:", "width:", "setStrokePaint:", "yellow", "draw"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step14a",
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._absolute();
_st($1)._lineTo_((-50).__at((-50)));
_st($1)._curveVia_to_((0).__at((-80)),(50).__at((-50)));
$2=_st($1)._curveVia_and_to_((100).__at((-20)),(-50).__at((20)),(50).__at((50)));
$2;
return _st(builder)._close();
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
$3=_st(canvas)._pathTransform();
_st($3)._translateX_Y_(_st(_st(self["@surface"])._width()).__slash((2)),_st(_st(self["@surface"])._height()).__slash((2)));
$4=_st($3)._scaleBy_((2));
$4;
_st(canvas)._setShape_(path);
_st(_st(canvas)._setStrokePaint_(_st($Color())._yellow()))._width_((4));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step14a",{path:path},smalltalk.AthensTutorial)})},
messageSends: ["createPath:", "absolute", "lineTo:", "@", "curveVia:to:", "curveVia:and:to:", "close", "drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "scaleBy:", "setShape:", "width:", "setStrokePaint:", "yellow", "draw"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step14b",
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._absolute();
_st($1)._cwArcTo_angle_((50).__at((100)),(45));
$2=_st($1)._ccwArcTo_angle_((-50).__at((100)),(45));
$2;
return _st(builder)._close();
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
$3=_st(canvas)._pathTransform();
_st($3)._translateX_Y_(_st(_st(self["@surface"])._width()).__slash((2)),_st(_st(self["@surface"])._height()).__slash((5)));
$4=_st($3)._scaleBy_((1));
$4;
_st(canvas)._setShape_(path);
_st(_st(canvas)._setStrokePaint_(_st($Color())._yellow()))._width_((4));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step14b",{path:path},smalltalk.AthensTutorial)})},
messageSends: ["createPath:", "absolute", "cwArcTo:angle:", "@", "ccwArcTo:angle:", "close", "drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "scaleBy:", "setShape:", "width:", "setStrokePaint:", "yellow", "draw"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step15",
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._absolute();
_st($1)._moveTo_((-50).__at((-50)));
_st($1)._curveVia_to_((0).__at((-80)),(50).__at((-50)));
_st($1)._curveVia_and_to_((100).__at((-20)),(-50).__at((20)),(50).__at((50)));
_st($1)._cwArcTo_angle_((50).__at((100)),(45));
$2=_st($1)._ccwArcTo_angle_((-50).__at((100)),(45));
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
$3=_st(canvas)._pathTransform();
_st($3)._translateX_Y_(_st(_st(self["@surface"])._width()).__slash((2)),_st(_st(self["@surface"])._height()).__slash((2)));
$4=_st($3)._scaleBy_((2));
$4;
_st(canvas)._setShape_(path);
_st(_st(canvas)._setStrokePaint_(_st($Color())._yellow()))._width_((4));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step15",{path:path},smalltalk.AthensTutorial)})},
messageSends: ["createPath:", "absolute", "moveTo:", "@", "curveVia:to:", "curveVia:and:to:", "cwArcTo:angle:", "ccwArcTo:angle:", "drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "scaleBy:", "setShape:", "width:", "setStrokePaint:", "yellow", "draw"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step16",
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._relative();
_st($1)._moveTo_((-50).__at((-50)));
_st($1)._lineTo_((50).__at((0)));
_st($1)._lineTo_((0).__at((50)));
$2=_st($1)._lineTo_((-50).__at((0)));
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
$3=_st(canvas)._pathTransform();
_st($3)._translateX_Y_(_st(_st(self["@surface"])._width()).__slash((2)),_st(_st(self["@surface"])._height()).__slash((2)));
$4=_st($3)._scaleBy_((2));
$4;
_st(canvas)._setShape_(path);
_st(_st(canvas)._setStrokePaint_(_st($Color())._yellow()))._width_((4));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step16",{path:path},smalltalk.AthensTutorial)})},
messageSends: ["createPath:", "relative", "moveTo:", "@", "lineTo:", "drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "scaleBy:", "setShape:", "width:", "setStrokePaint:", "yellow", "draw"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step17",
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._moveTo_((-50).__at((-50)));
_st($1)._lineTo_((50).__at((0)));
_st($1)._lineTo_((0).__at((50)));
_st($1)._lineTo_((-50).__at((0)));
_st($1)._lineTo_((80).__at((-30)));
$2=_st($1)._close();
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
$3=_st(canvas)._pathTransform();
_st($3)._translateX_Y_(_st(_st(self["@surface"])._width()).__slash((2)),_st(_st(self["@surface"])._height()).__slash((2)));
$4=_st($3)._scaleBy_((3));
$4;
_st(canvas)._setShape_(path);
_st(canvas)._setPaint_(_st($Color())._yellow());
_st(canvas)._draw();
_st(_st(canvas)._pathTransform())._loadIdentity();
_st(canvas)._setStrokePaint_(_st($Color())._blue());
return _st(canvas)._drawShape_(_st(canvas)._createPath_((function(b){
return smalltalk.withContext(function($ctx3) {
return _st(b)._lineTo_((300).__at((300)));
}, function($ctx3) {$ctx3.fillBlock({b:b},$ctx2)})})));
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step17",{path:path},smalltalk.AthensTutorial)})},
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "close", "drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "scaleBy:", "setShape:", "setPaint:", "yellow", "draw", "loadIdentity", "setStrokePaint:", "blue", "drawShape:"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step18",
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._moveTo_((-50).__at((-50)));
_st($1)._lineTo_((50).__at((0)));
_st($1)._lineTo_((0).__at((50)));
_st($1)._lineTo_((-50).__at((0)));
_st($1)._close();
_st($1)._moveTo_((10).__at((10)));
_st($1)._lineTo_((0).__at((30)));
_st($1)._lineTo_((30).__at((0)));
_st($1)._lineTo_((0).__at((-30)));
$2=_st($1)._close();
$2;
$3=builder;
_st($3)._moveTo_((25).__at((10)));
_st($3)._lineTo_((0).__at((10)));
_st($3)._lineTo_((10).__at((0)));
_st($3)._lineTo_((0).__at((-10)));
$4=_st($3)._close();
return $4;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
$5=_st(canvas)._pathTransform();
_st($5)._translateX_Y_(_st(_st(self["@surface"])._width()).__slash((2)),_st(_st(self["@surface"])._height()).__slash((2)));
$6=_st($5)._scaleBy_((3));
$6;
_st(canvas)._setShape_(path);
_st(canvas)._setPaint_(_st($Color())._yellow());
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step18",{path:path},smalltalk.AthensTutorial)})},
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "close", "drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "scaleBy:", "setShape:", "setPaint:", "yellow", "draw"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step19",
fn: function (){
var self=this;
var linearGradient;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
linearGradient=_st(self["@surface"])._createLinearGradient_start_stop_([(0).__minus_gt(_st($Color())._blue()),(0.25).__minus_gt(_st($Color())._red()),(0.5).__minus_gt(_st($Color())._white()),(0.75).__minus_gt(_st($Color())._yellow()),(1).__minus_gt(_st($Color())._green())],(0).__at((0)),(100).__at((100)));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(_st(canvas)._pathTransform())._translateX_Y_((10),(10));
_st(canvas)._setShape_(_st((0).__at((0)))._corner_((100).__at((100))));
_st(canvas)._setPaint_(linearGradient);
_st(canvas)._draw();
_st(_st(canvas)._pathTransform())._translateX_Y_((150),(0));
$1=_st(canvas)._paintTransform();
_st($1)._rotateByDegrees_((45));
$2=_st($1)._scaleBy_((0.7));
$2;
_st(canvas)._draw();
_st(_st(canvas)._pathTransform())._translateX_Y_((150),(0));
$3=_st(canvas)._paintTransform();
_st($3)._translateX_Y_((0),(80));
$4=_st($3)._scaleBy_((0.2));
$4;
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step19",{linearGradient:linearGradient},smalltalk.AthensTutorial)})},
messageSends: ["createLinearGradient:start:stop:", "->", "blue", "red", "white", "yellow", "green", "@", "drawDuring:", "clear:", "gray", "translateX:Y:", "pathTransform", "setShape:", "corner:", "setPaint:", "draw", "rotateByDegrees:", "paintTransform", "scaleBy:"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step2",
fn: function (){
var self=this;
var container;
function $AthensHTMLSurface(){return smalltalk.AthensHTMLSurface||(typeof AthensHTMLSurface=="undefined"?nil:AthensHTMLSurface)}
return smalltalk.withContext(function($ctx1) { 
container="#canvas-container"._asJQuery();
_st(container)._empty();
self["@surface"]=_st($AthensHTMLSurface())._extent_((500).__at((400)));
_st(self["@surface"])._appendToJQuery_("#canvas-container"._asJQuery());
_st(_st(_st(self["@surface"])._canvasTag())._asJQuery())._css_with_("border","1px #aaa solid");
return self}, function($ctx1) {$ctx1.fill(self,"step2",{container:container},smalltalk.AthensTutorial)})},
messageSends: ["asJQuery", "empty", "extent:", "@", "appendToJQuery:", "css:with:", "canvasTag"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step20",
fn: function (){
var self=this;
var ramp,perfectRadial,radialWithCustomFocus;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
ramp=[(0).__minus_gt(_st($Color())._blue()),(0.25).__minus_gt(_st($Color())._red()),(0.5).__minus_gt(_st($Color())._white()),(0.75).__minus_gt(_st($Color())._yellow()),(1).__minus_gt(_st(_st($Color())._blue())._alpha_((0)))];
perfectRadial=_st(self["@surface"])._createRadialGradient_center_radius_(ramp,(50).__at((50)),(50));
radialWithCustomFocus=_st(self["@surface"])._createRadialGradient_center_radius_focalPoint_(ramp,(50).__at((50)),(50),(20).__at((20)));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(_st(canvas)._pathTransform())._translateX_Y_((10),(10));
_st(canvas)._setShape_(_st((0).__at((0)))._corner_((100).__at((100))));
_st(canvas)._setPaint_(perfectRadial);
_st(canvas)._draw();
_st(_st(canvas)._pathTransform())._translateX_Y_((150),(0));
_st(canvas)._setPaint_(radialWithCustomFocus);
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step20",{ramp:ramp,perfectRadial:perfectRadial,radialWithCustomFocus:radialWithCustomFocus},smalltalk.AthensTutorial)})},
messageSends: ["->", "blue", "red", "white", "yellow", "alpha:", "createRadialGradient:center:radius:", "@", "createRadialGradient:center:radius:focalPoint:", "drawDuring:", "clear:", "gray", "translateX:Y:", "pathTransform", "setShape:", "corner:", "setPaint:", "draw"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step21",
fn: function (){
var self=this;
function $Bitmap(){return smalltalk.Bitmap||(typeof Bitmap=="undefined"?nil:Bitmap)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._createBitmapPaint_afterLoading_(_st($Bitmap())._fromUrl_("http://amber-lang.net/images/amber.png"),(function(bitmapPaint){
return smalltalk.withContext(function($ctx2) {
_st(bitmapPaint)._repeat();
return _st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx3) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setPaint_(bitmapPaint);
_st(_st(canvas)._paintTransform())._scaleBy_((0.5));
return _st(canvas)._drawShape_(_st((0).__at((0)))._corner_(_st(self["@surface"])._extent()));
}, function($ctx3) {$ctx3.fillBlock({canvas:canvas},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({bitmapPaint:bitmapPaint},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step21",{},smalltalk.AthensTutorial)})},
messageSends: ["createBitmapPaint:afterLoading:", "fromUrl:", "repeat", "drawDuring:", "clear:", "gray", "setPaint:", "scaleBy:", "paintTransform", "drawShape:", "corner:", "extent", "@"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step21a",
fn: function (){
var self=this;
var bitmapPaint;
function $Bitmap(){return smalltalk.Bitmap||(typeof Bitmap=="undefined"?nil:Bitmap)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
bitmapPaint=_st(self["@surface"])._createBitmapPaint_(_st($Bitmap())._fromUrl_("http://amber-lang.net/images/amber.png"));
_st(bitmapPaint)._repeat();
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setPaint_(bitmapPaint);
_st(_st(canvas)._paintTransform())._scaleBy_((0.5));
return _st(canvas)._drawShape_(_st((0).__at((0)))._corner_(_st(self["@surface"])._extent()));
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step21a",{bitmapPaint:bitmapPaint},smalltalk.AthensTutorial)})},
messageSends: ["createBitmapPaint:", "fromUrl:", "repeat", "drawDuring:", "clear:", "gray", "setPaint:", "scaleBy:", "paintTransform", "drawShape:", "corner:", "extent", "@"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step22",
fn: function (){
var self=this;
var surface2;
function $AthensHTMLSurface(){return smalltalk.AthensHTMLSurface||(typeof AthensHTMLSurface=="undefined"?nil:AthensHTMLSurface)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
surface2=_st($AthensHTMLSurface())._extent_((10).__at((10)));
_st(surface2)._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(surface2)._clear();
_st(canvas)._setPaint_(_st($Color())._white());
$1=canvas;
_st($1)._drawShape_(_st((0).__at((0)))._corner_((5).__at((5))));
$2=_st($1)._drawShape_(_st((5).__at((5)))._corner_((10).__at((10))));
return $2;
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(_st(canvas)._setPaint_(surface2))._repeat();
return _st(canvas)._drawShape_(_st((0).__at((0)))._corner_(_st(self["@surface"])._extent()));
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step22",{surface2:surface2},smalltalk.AthensTutorial)})},
messageSends: ["extent:", "@", "drawDuring:", "clear", "setPaint:", "white", "drawShape:", "corner:", "clear:", "gray", "repeat", "extent"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step23",
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._moveTo_((-50).__at((-50)));
_st($1)._lineTo_((50).__at((0)));
_st($1)._lineTo_((0).__at((50)));
_st($1)._lineTo_((-50).__at((0)));
_st($1)._lineTo_((80).__at((-30)));
$2=_st($1)._close();
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
var stroke;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
stroke=_st(canvas)._setStrokePaint_(_st($Color())._white());
stroke;
_st(stroke)._width_((5));
$3=_st(canvas)._pathTransform();
_st($3)._translateX_Y_((400),(400));
$4=_st($3)._scaleBy_((4));
$4;
return _st(canvas)._drawShape_(path);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,stroke:stroke},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step23",{path:path},smalltalk.AthensTutorial)})},
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "close", "drawDuring:", "clear:", "gray", "setStrokePaint:", "white", "width:", "translateX:Y:", "pathTransform", "scaleBy:", "drawShape:"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step24",
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._moveTo_((-50).__at((-50)));
_st($1)._lineTo_((50).__at((0)));
_st($1)._lineTo_((0).__at((50)));
_st($1)._lineTo_((-50).__at((0)));
_st($1)._lineTo_((80).__at((-30)));
$2=_st($1)._close();
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
var stroke;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
stroke=_st(canvas)._setStrokePaint_(_st($Color())._white());
stroke;
_st(stroke)._width_((5));
_st(stroke)._joinBevel();
$3=_st(canvas)._pathTransform();
_st($3)._translateX_Y_((400),(400));
$4=_st($3)._scaleBy_((4));
$4;
return _st(canvas)._drawShape_(path);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,stroke:stroke},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step24",{path:path},smalltalk.AthensTutorial)})},
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "close", "drawDuring:", "clear:", "gray", "setStrokePaint:", "white", "width:", "joinBevel", "translateX:Y:", "pathTransform", "scaleBy:", "drawShape:"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step25",
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._moveTo_((-50).__at((-50)));
_st($1)._lineTo_((50).__at((0)));
_st($1)._lineTo_((0).__at((50)));
_st($1)._lineTo_((-50).__at((0)));
$2=_st($1)._lineTo_((80).__at((-30)));
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
var stroke;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
stroke=_st(canvas)._setStrokePaint_(_st($Color())._white());
stroke;
_st(stroke)._width_((5));
_st(stroke)._joinRound();
_st(stroke)._capRound();
$3=_st(canvas)._pathTransform();
_st($3)._translateX_Y_((400),(400));
$4=_st($3)._scaleBy_((4));
$4;
return _st(canvas)._drawShape_(path);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,stroke:stroke},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step25",{path:path},smalltalk.AthensTutorial)})},
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "drawDuring:", "clear:", "gray", "setStrokePaint:", "white", "width:", "joinRound", "capRound", "translateX:Y:", "pathTransform", "scaleBy:", "drawShape:"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step26",
fn: function (){
var self=this;
var path;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
path=_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._moveTo_((-50).__at((-50)));
_st($1)._lineTo_((50).__at((0)));
_st($1)._lineTo_((0).__at((50)));
_st($1)._lineTo_((-50).__at((0)));
$2=_st($1)._lineTo_((80).__at((-30)));
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(self["@surface"])._drawDuring_((function(canvas){
var stroke;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
stroke=_st(canvas)._setStrokePaint_(_st($Color())._white());
stroke;
_st(stroke)._width_((5));
_st(stroke)._joinRound();
_st(stroke)._capRound();
_st(stroke)._dashes_offset_([(20), (10), (35), (30)],(0));
$3=_st(canvas)._pathTransform();
_st($3)._translateX_Y_((400),(400));
$4=_st($3)._scaleBy_((4));
$4;
return _st(canvas)._drawShape_(path);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,stroke:stroke},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step26",{path:path},smalltalk.AthensTutorial)})},
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "drawDuring:", "clear:", "gray", "setStrokePaint:", "white", "width:", "joinRound", "capRound", "dashes:offset:", "translateX:Y:", "pathTransform", "scaleBy:", "drawShape:"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step27",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
var stroke;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setPaint_(_st($Color())._blue());
_st(canvas)._drawShape_(_st((0).__at((0)))._corner_((300).__at((300))));
_st(_st(canvas)._paintMode())._over();
_st(canvas)._setPaint_(_st(_st($Color())._yellow())._alpha_((0.5)));
return _st(canvas)._drawShape_(_st((150).__at((150)))._corner_((450).__at((450))));
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,stroke:stroke},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step27",{},smalltalk.AthensTutorial)})},
messageSends: ["drawDuring:", "clear:", "gray", "setPaint:", "blue", "drawShape:", "corner:", "@", "over", "paintMode", "alpha:", "yellow"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step28",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
var stroke;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setPaint_(_st($Color())._blue());
_st(canvas)._drawShape_(_st((0).__at((0)))._corner_((300).__at((300))));
_st(_st(canvas)._paintMode())._restoreAfter_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(canvas)._paintMode())._xor();
_st(canvas)._setPaint_(_st(_st($Color())._yellow())._alpha_((0.5)));
return _st(canvas)._drawShape_(_st((150).__at((150)))._corner_((450).__at((450))));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st(canvas)._setPaint_(_st($Color())._red());
return _st(canvas)._drawShape_(_st((200).__at((200)))._corner_((500).__at((500))));
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,stroke:stroke},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step28",{},smalltalk.AthensTutorial)})},
messageSends: ["drawDuring:", "clear:", "gray", "setPaint:", "blue", "drawShape:", "corner:", "@", "restoreAfter:", "xor", "paintMode", "alpha:", "yellow", "red"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step29",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
var stroke;
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setPaint_(_st($Color())._blue());
return _st(canvas)._clipBy_during_(_st((100).__at((100)))._corner_((200).__at((200))),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(canvas)._drawShape_(_st((0).__at((0)))._corner_(_st(self["@surface"])._extent()));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,stroke:stroke},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step29",{},smalltalk.AthensTutorial)})},
messageSends: ["drawDuring:", "clear:", "gray", "setPaint:", "blue", "clipBy:during:", "corner:", "@", "drawShape:", "extent"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step3",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear();
_st(canvas)._setPaint_(_st($Color())._green());
_st(canvas)._setShape_(_st((40).__at((40)))._corner_((100).__at((100))));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step3",{},smalltalk.AthensTutorial)})},
messageSends: ["drawDuring:", "clear", "setPaint:", "green", "setShape:", "corner:", "@", "draw"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step30",
fn: function (){
var self=this;
var font;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
font=_st($LogicalFont())._familyName_pointSize_("Arial",(20));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._black());
_st(canvas)._setFont_(font);
_st(canvas)._setPaint_(_st($Color())._red());
_st(_st(canvas)._pathTransform())._scaleBy_((4));
_st(_st(canvas)._pathTransform())._translateX_Y_((0),(20));
return _st(canvas)._drawString_("Hello Athens!");
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step30",{font:font},smalltalk.AthensTutorial)})},
messageSends: ["familyName:pointSize:", "drawDuring:", "clear:", "black", "setFont:", "setPaint:", "red", "scaleBy:", "pathTransform", "translateX:Y:", "drawString:"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step31",
fn: function (){
var self=this;
var font;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
font=_st($LogicalFont())._familyName_pointSize_("Arial",(20));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._black());
_st(canvas)._setFont_(font);
_st(canvas)._setPaint_(_st($Color())._red());
_st(_st(canvas)._pathTransform())._scaleBy_((4));
_st(_st(canvas)._pathTransform())._translateX_Y_((0),(40));
return _st(canvas)._drawString_("The End!");
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step31",{font:font},smalltalk.AthensTutorial)})},
messageSends: ["familyName:pointSize:", "drawDuring:", "clear:", "black", "setFont:", "setPaint:", "red", "scaleBy:", "pathTransform", "translateX:Y:", "drawString:"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step32",
fn: function (){
var self=this;
function $AthensVGTigerDemo(){return smalltalk.AthensVGTigerDemo||(typeof AthensVGTigerDemo=="undefined"?nil:AthensVGTigerDemo)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($AthensVGTigerDemo())._instance())._surface_(self["@surface"]);
_st(_st($AthensVGTigerDemo())._instance())._toggle();
return self}, function($ctx1) {$ctx1.fill(self,"step32",{},smalltalk.AthensTutorial)})},
messageSends: ["surface:", "instance", "toggle"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step33",
fn: function (){
var self=this;
var container;
function $AthensHTMLMorphicSurface(){return smalltalk.AthensHTMLMorphicSurface||(typeof AthensHTMLMorphicSurface=="undefined"?nil:AthensHTMLMorphicSurface)}
return smalltalk.withContext(function($ctx1) { 
container="#canvas-container"._asJQuery();
_st(container)._empty();
self["@surface"]=_st($AthensHTMLMorphicSurface())._extent_((500).__at((400)));
_st(self["@surface"])._appendToJQuery_("#canvas-container"._asJQuery());
_st(_st(_st(self["@surface"])._canvasTag())._asJQuery())._css_with_("border","1px #aaa solid");
return self}, function($ctx1) {$ctx1.fill(self,"step33",{container:container},smalltalk.AthensTutorial)})},
messageSends: ["asJQuery", "empty", "extent:", "@", "appendToJQuery:", "css:with:", "canvasTag"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step34",
fn: function (){
var self=this;
var path,poly,font;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
font=_st($LogicalFont())._familyName_pointSize_("Arial",(20));
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setPaint_(_st($Color())._white());
_st(canvas)._setFont_(font);
_st(_st(canvas)._pathTransform())._translateX_Y_((100),(200));
_st(canvas)._drawString_("Move the mouse cursor.");
path=_st(canvas)._createPath_((function(builder){
return smalltalk.withContext(function($ctx3) {
$1=builder;
_st($1)._absolute();
_st($1)._lineTo_((15).__at((50)));
_st($1)._lineTo_((60).__at((60)));
_st($1)._lineTo_((150).__at((50)));
$2=_st($1)._lineTo_((0).__at((0)));
return $2;
}, function($ctx3) {$ctx3.fillBlock({builder:builder},$ctx2)})}));
path;
poly=_st(path)._asPolygon();
return poly;
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
_st(self["@surface"])._onMouseMove_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx3) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(_st(canvas)._pathTransform())._translateX_Y_((0),(0));
_st(canvas)._setShape_(path);
$3=_st(poly)._includesPoint_(_st(_st(e)._offsetX()).__at(_st(e)._offsetY()));
if(smalltalk.assert($3)){
_st(canvas)._setPaint_(_st($Color())._blue());
} else {
_st(canvas)._setPaint_(_st($Color())._green());
};
_st(canvas)._draw();
_st(canvas)._setFont_(font);
_st(canvas)._setPaint_(_st($Color())._red());
_st(_st(canvas)._pathTransform())._translateX_Y_((100),(20));
return _st(canvas)._drawString_(_st(_st(_st("(".__comma(_st(_st(e)._offsetX())._asString())).__comma(", ")).__comma(_st(_st(e)._offsetY())._asString())).__comma(")"));
}, function($ctx3) {$ctx3.fillBlock({canvas:canvas},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step34",{path:path,poly:poly,font:font},smalltalk.AthensTutorial)})},
messageSends: ["familyName:pointSize:", "drawDuring:", "clear:", "gray", "setPaint:", "white", "setFont:", "translateX:Y:", "pathTransform", "drawString:", "createPath:", "absolute", "lineTo:", "@", "asPolygon", "onMouseMove:", "setShape:", "ifTrue:ifFalse:", "blue", "green", "includesPoint:", "offsetY", "offsetX", "draw", "red", ",", "asString"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step35",
fn: function (){
var self=this;
var morph;
function $AthensMorph(){return smalltalk.AthensMorph||(typeof AthensMorph=="undefined"?nil:AthensMorph)}
return smalltalk.withContext(function($ctx1) { 
morph=_st($AthensMorph())._new();
_st(_st(self["@surface"])._world())._addMorph_(morph);
return self}, function($ctx1) {$ctx1.fill(self,"step35",{morph:morph},smalltalk.AthensTutorial)})},
messageSends: ["new", "addMorph:", "world"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step36",
fn: function (){
var self=this;
var morph,innerMorph;
function $AthensMorph(){return smalltalk.AthensMorph||(typeof AthensMorph=="undefined"?nil:AthensMorph)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
morph=_st($AthensMorph())._new();
_st(_st(self["@surface"])._world())._addMorph_(morph);
_st(morph)._position_((200).__at((50)));
_st(morph)._rotation_((0.785));
innerMorph=_st($AthensMorph())._new();
_st(innerMorph)._color_(_st($Color())._red());
_st(innerMorph)._position_((20).__at((0)));
_st(innerMorph)._rotation_((-0.785));
_st(innerMorph)._scaling_((0.25));
_st(morph)._addMorph_(innerMorph);
return self}, function($ctx1) {$ctx1.fill(self,"step36",{morph:morph,innerMorph:innerMorph},smalltalk.AthensTutorial)})},
messageSends: ["new", "addMorph:", "world", "position:", "@", "rotation:", "color:", "red", "scaling:"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step4",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._black());
_st(canvas)._setPaint_(_st($Color())._green());
_st(canvas)._setShape_(_st((40).__at((40)))._corner_((100).__at((100))));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step4",{},smalltalk.AthensTutorial)})},
messageSends: ["drawDuring:", "clear:", "black", "setPaint:", "green", "setShape:", "corner:", "@", "draw"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step5",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._black());
_st(canvas)._setPaint_(_st($Color())._red());
_st(canvas)._drawShape_(_st((0).__at((0)))._corner_(_st(_st(self["@surface"])._width()).__at((5))));
_st(canvas)._setPaint_(_st($Color())._blue());
return _st(canvas)._drawShape_(_st((0).__at((0)))._corner_((5).__at(_st(self["@surface"])._height())));
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step5",{},smalltalk.AthensTutorial)})},
messageSends: ["drawDuring:", "clear:", "black", "setPaint:", "red", "drawShape:", "corner:", "@", "width", "blue", "height"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step6",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._black());
_st(_st(canvas)._pathTransform())._translateX_Y_((100),(50));
_st(canvas)._setPaint_(_st($Color())._red());
_st(canvas)._drawShape_(_st((0).__at((0)))._corner_(_st(_st(self["@surface"])._width()).__at((5))));
_st(canvas)._setPaint_(_st($Color())._blue());
return _st(canvas)._drawShape_(_st((0).__at((0)))._corner_((5).__at(_st(self["@surface"])._height())));
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step6",{},smalltalk.AthensTutorial)})},
messageSends: ["drawDuring:", "clear:", "black", "translateX:Y:", "pathTransform", "setPaint:", "red", "drawShape:", "corner:", "@", "width", "blue", "height"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step7",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setShape_(_st((0).__at((0)))._corner_((100).__at((100))));
_st(canvas)._setPaint_(_st($Color())._white());
_st(canvas)._draw();
_st(_st(canvas)._pathTransform())._scaleBy_((2));
_st(canvas)._setPaint_(_st(_st($Color())._yellow())._alpha_((0.3)));
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step7",{},smalltalk.AthensTutorial)})},
messageSends: ["drawDuring:", "clear:", "gray", "setShape:", "corner:", "@", "setPaint:", "white", "draw", "scaleBy:", "pathTransform", "alpha:", "yellow"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step8",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setShape_(_st((0).__at((0)))._corner_((100).__at((100))));
_st(canvas)._setPaint_(_st($Color())._blue());
$1=_st(canvas)._pathTransform();
_st($1)._scaleBy_((3));
$2=_st($1)._translateX_Y_((50),(50));
$2;
_st(canvas)._draw();
_st(canvas)._setPaint_(_st($Color())._yellow());
$3=_st(canvas)._pathTransform();
_st($3)._translateX_Y_((50),(50));
_st($3)._scaleBy_((0.7).__at((0.5)));
_st($3)._rotateByDegrees_((45));
$4=_st($3)._translateX_Y_((-50),(-50));
$4;
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step8",{},smalltalk.AthensTutorial)})},
messageSends: ["drawDuring:", "clear:", "gray", "setShape:", "corner:", "@", "setPaint:", "blue", "scaleBy:", "pathTransform", "translateX:Y:", "draw", "yellow", "rotateByDegrees:"]}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step9",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@surface"])._drawDuring_((function(canvas){
return smalltalk.withContext(function($ctx2) {
_st(self["@surface"])._clear_(_st($Color())._gray());
_st(canvas)._setShape_(_st((0).__at((0)))._corner_((100).__at((100))));
$1=_st(canvas)._pathTransform();
_st($1)._scaleBy_((3));
$2=_st($1)._translateX_Y_((50),(50));
$2;
_st(_st(canvas)._pathTransform())._restoreAfter_((function(){
return smalltalk.withContext(function($ctx3) {
_st(canvas)._setPaint_(_st($Color())._blue());
$3=_st(canvas)._pathTransform();
_st($3)._translateX_Y_((50),(50));
_st($3)._rotateByDegrees_((45));
$4=_st($3)._translateX_Y_((-50),(-50));
$4;
return _st(canvas)._draw();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st(canvas)._setPaint_(_st($Color())._yellow());
return _st(canvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step9",{},smalltalk.AthensTutorial)})},
messageSends: ["drawDuring:", "clear:", "gray", "setShape:", "corner:", "@", "scaleBy:", "pathTransform", "translateX:Y:", "restoreAfter:", "setPaint:", "blue", "rotateByDegrees:", "draw", "yellow"]}),
smalltalk.AthensTutorial);


smalltalk.addMethod(
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
var html;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $AthensTutorialWidget(){return smalltalk.AthensTutorialWidget||(typeof AthensTutorialWidget=="undefined"?nil:AthensTutorialWidget)}
return smalltalk.withContext(function($ctx1) { 
html=_st($HTMLCanvas())._onJQuery_("#workspace"._asJQuery());
_st(html)._with_(_st($AthensTutorialWidget())._new());
return self}, function($ctx1) {$ctx1.fill(self,"open",{html:html},smalltalk.AthensTutorial.klass)})},
messageSends: ["onJQuery:", "asJQuery", "with:", "new"]}),
smalltalk.AthensTutorial.klass);


smalltalk.addClass('AthensTutorialWidget', smalltalk.Widget, ['canvasContainer', 'step', 'codeArea', 'tutorial'], 'Athens-HTML-Tutorial');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $AthensTutorial(){return smalltalk.AthensTutorial||(typeof AthensTutorial=="undefined"?nil:AthensTutorial)}
return smalltalk.withContext(function($ctx1) { 
self["@step"]=(1);
self["@tutorial"]=_st($AthensTutorial())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensTutorialWidget)})},
messageSends: ["new"]}),
smalltalk.AthensTutorialWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "nextStep",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@step"]=_st(self["@step"]).__plus((1));
$1=_st(self["@step"]).__gt((36));
if(smalltalk.assert($1)){
self["@step"]=(36);
self["@step"];
};
self._showStep_(self["@step"]);
return self}, function($ctx1) {$ctx1.fill(self,"nextStep",{},smalltalk.AthensTutorialWidget)})},
messageSends: ["+", "ifTrue:", ">", "showStep:"]}),
smalltalk.AthensTutorialWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previousStep",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@step"]=_st(self["@step"]).__minus((1));
$1=_st(self["@step"]).__lt((1));
if(smalltalk.assert($1)){
self["@step"]=(1);
self["@step"];
};
self._showStep_(self["@step"]);
return self}, function($ctx1) {$ctx1.fill(self,"previousStep",{},smalltalk.AthensTutorialWidget)})},
messageSends: ["-", "ifTrue:", "<", "showStep:"]}),
smalltalk.AthensTutorialWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$6,$7,$8,$9,$10,$4;
$1=_st(html)._div();
_st($1)._style_("height: 100%; float: left; margin: 50px;");
$2=_st($1)._id_("canvas-container");
self["@canvasContainer"]=$2;
$3=_st(html)._div();
_st($3)._style_("height: 100%;; margin: 50px; display: inline-block;");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@codeArea"]=_st(_st(html)._textarea())._style_("width: 100%; height: 350px;");
self["@codeArea"];
$5=_st(html)._input();
_st($5)._type_("button");
_st($5)._class_("btn btn-primary");
_st($5)._style_("margin-right: 10px;");
_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._stepDoIt();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$6=_st($5)._value_("Do it");
$6;
$7=_st(html)._input();
_st($7)._type_("button");
_st($7)._class_("btn btn-primary");
_st($7)._style_("margin-right: 10px;");
_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._previousStep();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$8=_st($7)._value_("Previous step");
$8;
$9=_st(html)._input();
_st($9)._type_("button");
_st($9)._class_("btn btn-primary");
_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._nextStep();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$10=_st($9)._value_("Next step");
return $10;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._showStep_((1));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.AthensTutorialWidget)})},
messageSends: ["style:", "div", "id:", "with:", "textarea", "type:", "input", "class:", "onClick:", "stepDoIt", "value:", "previousStep", "nextStep", "showStep:"]}),
smalltalk.AthensTutorialWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showStep:",
fn: function (anInteger){
var self=this;
var selector;
function $AthensTutorial(){return smalltalk.AthensTutorial||(typeof AthensTutorial=="undefined"?nil:AthensTutorial)}
return smalltalk.withContext(function($ctx1) { 
selector=_st("step".__comma(_st(anInteger)._asString()))._asSymbol();
_st(_st(self["@codeArea"])._asJQuery())._val_(_st(_st($AthensTutorial())._methodAt_(selector))._source());
return self}, function($ctx1) {$ctx1.fill(self,"showStep:",{anInteger:anInteger,selector:selector},smalltalk.AthensTutorialWidget)})},
messageSends: ["asSymbol", ",", "asString", "val:", "source", "methodAt:", "asJQuery"]}),
smalltalk.AthensTutorialWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "stepDoIt",
fn: function (){
var self=this;
var selector;
function $AthensTutorial(){return smalltalk.AthensTutorial||(typeof AthensTutorial=="undefined"?nil:AthensTutorial)}
return smalltalk.withContext(function($ctx1) { 
selector=_st("doItstep".__comma(_st(self["@step"])._asString()))._asSymbol();
_st($AthensTutorial())._compile_("doIt".__comma(_st(_st(self["@codeArea"])._asJQuery())._val()));
_st(self["@tutorial"])._perform_(selector);
_st($AthensTutorial())._removeCompiledMethod_(_st($AthensTutorial())._methodAt_(selector));
return self}, function($ctx1) {$ctx1.fill(self,"stepDoIt",{selector:selector},smalltalk.AthensTutorialWidget)})},
messageSends: ["asSymbol", ",", "asString", "compile:", "val", "asJQuery", "perform:", "removeCompiledMethod:", "methodAt:"]}),
smalltalk.AthensTutorialWidget);



smalltalk.addClass('AthensVGTigerDemo', smalltalk.Object, ['surface', 'renderInterval', 'looping', 'frames', 'time'], 'Athens-HTML-Tutorial');
smalltalk.addMethod(
smalltalk.method({
selector: "assert:",
fn: function (aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBool).__tild_tild(true);
if(smalltalk.assert($1)){
self._error_("assertion failed");
};
return self}, function($ctx1) {$ctx1.fill(self,"assert:",{aBool:aBool},smalltalk.AthensVGTigerDemo)})},
messageSends: ["ifTrue:", "error:", "~~"]}),
smalltalk.AthensVGTigerDemo);

smalltalk.addMethod(
smalltalk.method({
selector: "clearLoop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 clearInterval(self['@renderInterval']); ;
return self}, function($ctx1) {$ctx1.fill(self,"clearLoop",{},smalltalk.AthensVGTigerDemo)})},
messageSends: []}),
smalltalk.AthensVGTigerDemo);

smalltalk.addMethod(
smalltalk.method({
selector: "convertPathData2",
fn: function (){
var self=this;
var paths,pathData,cmdStream,ptStream,fillBlocks,strokeBlocks,capBlocks,joinBlocks,cmdBlocks,ctr;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $AthensTigerShape(){return smalltalk.AthensTigerShape||(typeof AthensTigerShape=="undefined"?nil:AthensTigerShape)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
paths=_st($OrderedCollection())._new();
cmdStream=_st(_st(self._class())._commands())._readStream();
ptStream=_st(_st(self._class())._tigerPoints())._readStream();
pathData=nil;
ctr=(0);
fillBlocks=[(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(pathData)._addFill();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$1=pathData;
_st($1)._addFill();
$2=_st($1)._fillRule_("VGEVENODD");
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})];
strokeBlocks=[(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(pathData)._addStroke();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})];
capBlocks=[(function(){
return smalltalk.withContext(function($ctx2) {
return _st(pathData)._capStyle_("VGCAPBUTT");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(pathData)._capStyle_("VGCAPROUND");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(pathData)._capStyle_("VGCAPSQUARE");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})];
joinBlocks=[(function(){
return smalltalk.withContext(function($ctx2) {
return _st(pathData)._joinStyle_("VGJOINMITER");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(pathData)._joinStyle_("VGJOINROUND");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(pathData)._joinStyle_("VGJOINBEVEL");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})];
cmdBlocks=[(function(s){
return smalltalk.withContext(function($ctx2) {
return _st(s)._moveTo_(_st(_st(ptStream)._next()).__at(_st(ptStream)._next()));
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1)})}),(function(s){
return smalltalk.withContext(function($ctx2) {
return _st(s)._lineTo_(_st(_st(ptStream)._next()).__at(_st(ptStream)._next()));
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1)})}),(function(s){
return smalltalk.withContext(function($ctx2) {
return _st(s)._curveVia_and_to_(_st(_st(ptStream)._next()).__at(_st(ptStream)._next()),_st(_st(ptStream)._next()).__at(_st(ptStream)._next()),_st(_st(ptStream)._next()).__at(_st(ptStream)._next()));
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1)})}),(function(s){
return smalltalk.withContext(function($ctx2) {
return _st(s)._close();
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1)})})];
_st((function(){
return smalltalk.withContext(function($ctx2) {
pathData=_st($AthensTigerShape())._new();
pathData;
fillBlocks=[(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
$3=pathData;
_st($3)._addFill();
$4=_st($3)._fillRule_("VGNONZERO");
return $4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
$5=pathData;
_st($5)._addFill();
$6=_st($5)._fillRule_("VGEVENODD");
return $6;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})})];
fillBlocks;
strokeBlocks=[(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(pathData)._addStroke();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})})];
strokeBlocks;
_st(pathData)._fillRule_("VGNONZERO");
_st(_st(fillBlocks)._at_("NFE"._indexOf_(_st(cmdStream)._next())))._value();
_st(_st(strokeBlocks)._at_("NS"._indexOf_(_st(cmdStream)._next())))._value();
_st(_st(capBlocks)._at_("BRS"._indexOf_(_st(cmdStream)._next())))._value();
_st(_st(joinBlocks)._at_("MRB"._indexOf_(_st(cmdStream)._next())))._value();
_st(pathData)._miterLimit_(_st(ptStream)._next());
_st(pathData)._strokeWidth_(_st(ptStream)._next());
_st(pathData)._strokePaint_(_st($Color())._r_g_b_(_st(ptStream)._next(),_st(ptStream)._next(),_st(ptStream)._next()));
_st(pathData)._fillPaint_(_st($Color())._r_g_b_(_st(ptStream)._next(),_st(ptStream)._next(),_st(ptStream)._next()));
_st(pathData)._setPath_(_st(self["@surface"])._createPath_((function(builder){
return smalltalk.withContext(function($ctx3) {
_st(builder)._absolute();
return _st(_st(ptStream)._next())._timesRepeat_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(cmdBlocks)._at_("MLCE"._indexOf_(_st(cmdStream)._next())))._value_(builder);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({builder:builder},$ctx2)})})));
_st(paths)._add_(pathData);
ctr=_st(ctr).__plus((1));
ctr;
return _st(cmdStream)._atEnd();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse();
_st(paths)._do_((function(ea){
return smalltalk.withContext(function($ctx2) {
self._assert_(_st(_st(ea)._fillRule()).__eq("VGNONZERO"));
return _st(ea)._prepareFor_(self["@surface"]);
}, function($ctx2) {$ctx2.fillBlock({ea:ea},$ctx1)})}));
self._assert_(_st(ptStream)._atEnd());
$7=paths;
return $7;
}, function($ctx1) {$ctx1.fill(self,"convertPathData2",{paths:paths,pathData:pathData,cmdStream:cmdStream,ptStream:ptStream,fillBlocks:fillBlocks,strokeBlocks:strokeBlocks,capBlocks:capBlocks,joinBlocks:joinBlocks,cmdBlocks:cmdBlocks,ctr:ctr},smalltalk.AthensVGTigerDemo)})},
messageSends: ["new", "readStream", "commands", "class", "tigerPoints", "addFill", "fillRule:", "addStroke", "capStyle:", "joinStyle:", "moveTo:", "@", "next", "lineTo:", "curveVia:and:to:", "close", "whileFalse", "value", "at:", "indexOf:", "miterLimit:", "strokeWidth:", "strokePaint:", "r:g:b:", "fillPaint:", "setPath:", "createPath:", "absolute", "timesRepeat:", "value:", "add:", "+", "atEnd", "do:", "assert:", "=", "fillRule", "prepareFor:"]}),
smalltalk.AthensVGTigerDemo);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@looping"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensVGTigerDemo)})},
messageSends: []}),
smalltalk.AthensVGTigerDemo);

smalltalk.addMethod(
smalltalk.method({
selector: "runDemo",
fn: function (){
var self=this;
var paths,extent,rotation,scale,translation,rotationSpeed,zoom;
function $Time(){return smalltalk.Time||(typeof Time=="undefined"?nil:Time)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
paths=self._convertPathData2();
rotationSpeed=(1);
rotation=(0);
extent=_st(self["@surface"])._extent();
scale=_st(_st(extent)._x()).__slash(_st(self._class())._tigerMaxY());
translation=(0).__at((0));
self["@frames"]=(0);
self["@looping"]=true;
self["@time"]=_st($Time())._millisecondClockValue();
self._startLoop_((function(){
return smalltalk.withContext(function($ctx2) {
rotation=_st(rotation).__plus(rotationSpeed);
rotation;
self["@frames"]=_st(self["@frames"]).__plus((1));
self["@frames"];
zoom=_st(_st(_st(self["@frames"]).__slash((100)))._sin())._abs();
zoom;
return _st(self["@surface"])._drawDuring_((function(can){
return smalltalk.withContext(function($ctx3) {
_st(_st(can)._pathTransform())._loadIdentity();
$1=can;
_st($1)._setPaint_(_st($Color())._white());
$2=_st($1)._drawShape_(_st((0).__at((0)))._corner_(_st(self["@surface"])._extent()));
$2;
$3=_st(can)._pathTransform();
_st($3)._translateX_Y_((0.5).__star(_st(_st(extent)._x()).__minus(_st(_st(_st(self._class())._tigerMaxX()).__star(scale)).__star(zoom))),_st(_st(extent)._y()).__slash((-12)));
_st($3)._scaleBy_(_st(scale).__star(zoom));
_st($3)._translateX_Y_(_st(_st(self._class())._tigerMaxX()).__star((0.5)),_st(_st(self._class())._tigerMaxY()).__star((0.5)));
_st($3)._scaleBy_((0.8));
_st($3)._rotateByDegrees_(rotation);
$4=_st($3)._translateX_Y_(_st(_st(self._class())._tigerMaxX()).__star((-0.5)),_st(_st(self._class())._tigerMaxY()).__star((-0.5)));
$4;
return _st(paths)._do_((function(each){
return smalltalk.withContext(function($ctx4) {
return _st(each)._renderOn_(can);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({can:can},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"runDemo",{paths:paths,extent:extent,rotation:rotation,scale:scale,translation:translation,rotationSpeed:rotationSpeed,zoom:zoom},smalltalk.AthensVGTigerDemo)})},
messageSends: ["convertPathData2", "extent", "/", "tigerMaxY", "class", "x", "@", "millisecondClockValue", "startLoop:", "+", "abs", "sin", "drawDuring:", "loadIdentity", "pathTransform", "setPaint:", "white", "drawShape:", "corner:", "translateX:Y:", "*", "-", "tigerMaxX", "y", "scaleBy:", "rotateByDegrees:", "do:", "renderOn:"]}),
smalltalk.AthensVGTigerDemo);

smalltalk.addMethod(
smalltalk.method({
selector: "startLoop:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 clearInterval(self['@renderInterval']);
	self['@renderInterval'] = setInterval(function(){aBlock._value()}, 0); ;
return self}, function($ctx1) {$ctx1.fill(self,"startLoop:",{aBlock:aBlock},smalltalk.AthensVGTigerDemo)})},
messageSends: []}),
smalltalk.AthensVGTigerDemo);

smalltalk.addMethod(
smalltalk.method({
selector: "stopDemo",
fn: function (){
var self=this;
function $Time(){return smalltalk.Time||(typeof Time=="undefined"?nil:Time)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._clearLoop();
self["@looping"]=false;
self["@time"]=_st(_st($Time())._millisecondClockValue()).__minus(self["@time"]);
$1=$Transcript();
_st($1)._show_(_st(_st(_st(_st("Total rendering time: ".__comma(_st(self["@time"])._asString())).__comma(" ms, total frames: ")).__comma(_st(self["@frames"])._asString())).__comma(", FPS: ")).__comma(_st(_st((1000).__star(self["@frames"])).__slash(self["@time"]))._asString()));
$2=_st($1)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"stopDemo",{},smalltalk.AthensVGTigerDemo)})},
messageSends: ["clearLoop", "-", "millisecondClockValue", "show:", ",", "asString", "/", "*", "cr"]}),
smalltalk.AthensVGTigerDemo);

smalltalk.addMethod(
smalltalk.method({
selector: "surface:",
fn: function (anHTMLSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=anHTMLSurface;
return self}, function($ctx1) {$ctx1.fill(self,"surface:",{anHTMLSurface:anHTMLSurface},smalltalk.AthensVGTigerDemo)})},
messageSends: []}),
smalltalk.AthensVGTigerDemo);

smalltalk.addMethod(
smalltalk.method({
selector: "toggle",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@looping"];
if(smalltalk.assert($1)){
self._stopDemo();
} else {
self._runDemo();
};
return self}, function($ctx1) {$ctx1.fill(self,"toggle",{},smalltalk.AthensVGTigerDemo)})},
messageSends: ["ifTrue:ifFalse:", "stopDemo", "runDemo"]}),
smalltalk.AthensVGTigerDemo);


smalltalk.AthensVGTigerDemo.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "checkDataSizes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self._commands())._size()).__eq(self._tigerCommandCount()));
self._assert_(_st(self._tigerPointsCount()).__eq(_st(self._tigerPoints())._size()));
return self}, function($ctx1) {$ctx1.fill(self,"checkDataSizes",{},smalltalk.AthensVGTigerDemo.klass)})},
messageSends: ["assert:", "=", "tigerCommandCount", "size", "commands", "tigerPoints", "tigerPointsCount"]}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "commands",
fn: function (){
var self=this;
var str;
return smalltalk.withContext(function($ctx1) { 
var $1;
str="";
_st(self._tigerCommands())._do_((function(sub){
return smalltalk.withContext(function($ctx2) {
str=_st(str).__comma(sub);
return str;
}, function($ctx2) {$ctx2.fillBlock({sub:sub},$ctx1)})}));
$1=str;
return $1;
}, function($ctx1) {$ctx1.fill(self,"commands",{str:str},smalltalk.AthensVGTigerDemo.klass)})},
messageSends: ["do:", ",", "tigerCommands"]}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "instance",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@instance"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@instance"]=self._new();
self["@instance"];
} else {
$1;
};
$2=self["@instance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"instance",{},smalltalk.AthensVGTigerDemo.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "runDemo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instance())._runDemo();
return $1;
}, function($ctx1) {$ctx1.fill(self,"runDemo",{},smalltalk.AthensVGTigerDemo.klass)})},
messageSends: ["runDemo", "instance"]}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stopDemo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instance())._stopDemo();
return $1;
}, function($ctx1) {$ctx1.fill(self,"stopDemo",{},smalltalk.AthensVGTigerDemo.klass)})},
messageSends: ["stopDemo", "instance"]}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tigerCommandCount",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (4142);
}, function($ctx1) {$ctx1.fill(self,"tigerCommandCount",{},smalltalk.AthensVGTigerDemo.klass)})},
messageSends: []}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tigerCommands",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["FNBMMCCCENS", "BMMCCCEFNBMMCCCENSBM", "MCCCEFNBMMCCCENSBMMC", "CCEFNBMMCCCENSBMMCCC", "EFNBMMCCCENSBMMCCCEF", "NBMMCCCENSBMMCCCEFNB", "MMCCCENSBMMCCCEFNBMM", "CCCENSBMMCCCEFNBMMCC", "CENSBMMCCCEFNBMMCCCE", "NSBMMCCCEFNBMMCCCENS", "BMMCCCEFNBMMCCCENSBM", "MCCCEFNBMMCCCCCCCCLC", "LCLCCCCCLCCLCCCCCCCL", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCLLCCLCCCC", "LCCCCCCCCCCCCCCCLNSB", "MMCCCCCCCCLCLCLCCCCC", "LCCLCCCCCCCLCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCLLCCLCCCCLCCCCCCC", "CCCCCCCCLFNBMMCCCCCC", "LCLCCCCCCCCCCCCLCCCC", "CCCCCCCCCCCCCCCCENSB", "MMCCCCCCLCLCCCCCCCCC", "CCCLCCCCCCCCCCCCCCCC", "CCCCEFNBMMCCCCLCCCCC", "CCCCCCLFNBMMCCCCCCCC", "LCCCCLCCCEFNBMMCCCCC", "CCCLCCCCLCCCEFNBMMCC", "CCCCCCLCCCCLCCCEFNBM", "MCCCCCCCCLCCCCLCCCEF", "NBMMCCCCCCCCLCCCCLCC", "CEFNBMMCCCCCCCCLCCCC", "LCCCEFNBMMCCCCCCCCLC", "CCCLCCCEFNBMMCCCCCCC", "CLCCCCLCCCEFNBMMCCCC", "CCCCLCCCCLCCCEFNBMMC", "CCCCCCCLCCCCLCCCEFNB", "MMCCCCLCCCCCCCCCCCLF", "NBMMCCCCCEFNBMMCCCCC", "CEFNRMMCLCLCCCCLCLCC", "EFNRMMCCCEFNRMMCCCEF", "NRMMCCCEFNRMMCCCEFNR", "MMCCCEFNRMMLCCCCCCCC", "CCCCCCCCCCCCCLFNBMMC", "CCLLCCCCCCCCEFNBMMCC", "CCCCEFNBMMCCCCLFNBMM", "CCCCCCCCCCCEFNBMMCCC", "LCCCCCCENSBMMCCCLCCC", "CCCEFNBMMCCCCCENSBMM", "CCCCCEFNBMMCCCCCCCEN", "SBMMCCFNBMMCCCENSBMM", "CCCEFNBMMCCCENSBMMCC", "CEFNBMMCCCENSBMMCCCE", "FNBMMCCCENSBMMCCCEFN", "BMMCCCENSBMMCCCEFNBM", "MCCCENSBMMCCCENSBMMC", "CCNSBMMCCCFNBMMCCCCC", "ENSBMMCCCCCENSBMMCNS", "BMMCFNBMMCCCCEFNBMMC", "CCCCENSBMMCCCCCEFNBM", "MCCCCCENSBMMCCCCCEFN", "BMMCCCCENSBMMCCCCEFN", "BMMCCCCCCCCEFNBMMCCC", "CENSBMMCCCCEFNBMMCCC", "ENSBMMCCCEFNBMMCCCEN", "SBMMCCCEFNBMMCCCENSB", "MMCCCEFNBMMCCCENSBMM", "CCCEFNBMMLCCCLFNBMMC", "CCCCEFNBMMCCCCCCCCEF", "NBMMCCCCCCCCEFNBMMCC", "CCCCCCEFNBMMCCCCCCCC", "EFNBMMCCCCCCCCEFNBMM", "CCCCCCCCEFNBMMCCCCEF", "NBMMCCCCLCCCCEFNBMMC", "CCCEFNBMMCCCCEFNBMMC", "CEFNBMMCCCCEFNBMMCCC", "CCLCCCCLCCEFNBMMCCCC", "CLCCCCLCCEFNBMMCCLCC", "CCLCCCCCEFNBMMCCLCCC", "CLCCCCCEFNBMMCCLCCCC", "LCCCCCEFNBMMCCCCCLCC", "CCLCCEFNBMMCCCEFNBMM", "CCCEFNBMMCCCEFNBMMCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "EFNBMMCCCCLCCCCCLFNB", "MMCCCCCCEFNBMMCCCCCC", "EFNBMMCCCCCCEFNBMMCC", "CCCCEFNBMMCCCCCCEFNB", "MMCCCCCCEFNBMMCCCCCL", "CCCCCCCCCCCCCCCCLFNR", "MMCCCEFNRMMCCLLCEFNR", "MMCCCEFNRMMCCCCEFNRM", "MCCCEFNBMMCLLLCCCCCC", "CCCCCCCCCLCCCCCLCCCC", "CCCCLCCCLLCLCCCCCCCC", "CCCCCCCCLCCEFNBMMCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCEFNBMMCCCCC", "CCCCCCEFNBMMCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCEFNBMMCCCCCC", "CCCCCCCCCCCCCCCEFNBM", "MCCCCCCCCCCCCCCCCCCC", "CCCCEFNBMMCCCCCCCCEF", "NBMMCCCCEFNBMMCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCLCCCCCCCCLLLCCCCC", "CLLCCCCCCLLLLNSRMMCC", "NSRMMCCNSRMMCCCNSRMM", "CCCFNBMMCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCLCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCLCCCCCCCCCCCCCCCCL", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCEFNRM", "MCCCCCEFNBMMCCCCEFNB", "MMCCCCEFNBMMCCCCEFNB", "MMCCCCCCCCCCCLCCCEFN", "BMMCCCCCCCCCCCCEFNBM", "MCCCCCCCCCCCCFNBMMCC", "CCCCCCCCCCCCCCCCLFNB", "MMCCCCLFNBMMCLCCCCCC", "CCCEFNBMMCCCCCCCCCCC", "CCCCCCCCCCCCCCCEFNBM", "MCCCCCCCCCCCCCCCCCEF", "NBMMCCCCCCCCCCCCCCCC", "CCCEFNBMMCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCC", "EFNBMMCCCLCCCCCCCCCL", "LCCCCLLCCCCCCLCFNBMM", "CLCCEFNBMMCCCCCEFNBM", "MCCCLCCCCLFNBMMCCCCC", "CEFNBMMCCCCCCCCCCCCC", "CCCCCCCCCEFNBMMCCCCC", "CCCCEFNBMMCCCCCCCCCC", "CCCEFNBMMCCCCCCCCCEF", "NBMMCCCCCCCCCEFNBMMC", "CCCCCCCCEFNBMMCCLFNB", "MMCCLFNBMMCCLFNBMMCC", "LFNBMMCCLFNBMMCCLFNB", "MMCCLFNBMMCCLFNBMMCC", "LFNBMMCCLFNBMMCCLFNB", "MMCCLFNBMMCCLFNBMMCC", "LFNBMMCCLFNBMMCCLFNB", "MMCCCEFNBMMCCCEFNBMM", "LLCCEFNBMMCCCCCCCCCC", "CCCCCCCCCCCCCCCCEFNB", "MMCCCCCCCCCEFNRMMCCC", "ENSRMMCCCEFNRMMCCCEN", "SRMMCCCEFNRMMCCCENSR", "MMCCCEFNRMMCCCENSRMM", "CCCEFNRMMCCCENSRMMCC", "CEFNRMMCCCENSRMMCCCE", "FNRMMCCCENSRMMCCCEFN", "RMMCCCENSRMMCCCEFNBM", "MCCCCCCCCCEFNBMMCCCC", "CCCCCEFNBMMCCLFNBMMC", "CLFNBMMCCLFNBMMCCLFN", "BMMCCLFNBMMCCLFNBMMC", "CLFNBMMCCLFNBMMCCLFN", "RMMCCCENSRMMCCCEFNBM", "MCCCCCCCCEFNRMMCCCEN", "SRMMCCCEFNRMMCCCENSR", "MMCCCEFNRMMCCCENSRMM", "CCCEFNRMMCCCENSRMMCC", "CEFNRMMCCCENSRMMCCCE", "FNRMMCCCENSRMMCCCEFN", "RMMCCCENSRMMCCCEFNRM", "MCCCENSRMMCCCEFNRMMC", "CCENSRMMCCCEFNRMMCCC", "ENSRMMCCCEFNRMMCCCEN", "SRMMCCCEFNRMMCCCENSR", "MMCCCEFNRMMCCCENSRMM", "CCCEFNRMMCCCENSRMMCC", "CEFNRMMCCCENSRMMCCCE", "FNRMMCCCENSRMMCCCEFN", "RMMCCCENSRMMCCCEFNRM", "MCCCENSRMMCCCEFNRMMC", "CCENSRMMCCCEFNRMMCCC", "ENSRMMCCCEFNRMMCCCEN", "SRMMCCCEFNRMMCCCENSR", "MMCCCEFNRMMCCCENSRMM", "CCCEFNRMMCCCENSRMMCC", "CEFNRMMCCCENSRMMCCCE", "FNBMMCCLFNBMMCCLFNBM", "MCCLFNBMMCCLFNBMMCCL", "FNBMMCCLFNRMMCCCEFNR", "MMCCCCCCCEFNRMMCCCCC", "CCEFNRMMCCCCCCCCCEFN", "RMMCCCCCEFNRMMCCCCCC", "CCEFNRMMCCCCEFNRMMCC", "CCCCCCCCCCCCCCCEFNRM", "MCCCCEFNRMMCCCEFNRMM", "CCCEFNRMMCCCEFNRMMCC", "CCCCEFNRMMCCCEFNRMMC", "CCCEFNRMMCCCCEFNRMMC", "CEFNRMMCCCCEFNRMMCCC", "EFNRMMCCCEFNRMMCCCEF", "NRMMLCLNSRMMLNSRMMCN", "SRMMCNSRMMC"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"tigerCommands",{},smalltalk.AthensVGTigerDemo.klass)})},
messageSends: []}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tigerMaxX",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (612);
}, function($ctx1) {$ctx1.fill(self,"tigerMaxX",{},smalltalk.AthensVGTigerDemo.klass)})},
messageSends: []}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tigerMaxY",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (792);
}, function($ctx1) {$ctx1.fill(self,"tigerMaxY",{},smalltalk.AthensVGTigerDemo.klass)})},
messageSends: []}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tigerMinX",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"tigerMinX",{},smalltalk.AthensVGTigerDemo.klass)})},
messageSends: []}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tigerMinY",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"tigerMinY",{},smalltalk.AthensVGTigerDemo.klass)})},
messageSends: []}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tigerPoints",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[(10), (0), (1), (1), (1), (1), (1), (1), (5), (85.25), (487.75), (85.25), (487.75), (85.5742), (485.199), (84.25), (484.746), (83.7617), (485.242), (65.6641), (538.125), (43.2461), (535.746), (43.2422), (535.746), (62.6445), (543.746), (85.25), (487.75), (10), (0.1892), (0), (0), (0), (0), (0), (0), (5), (85.25), (487.75), (85.25), (487.75), (85.5742), (485.199), (84.25), (484.746), (83.7617), (485.242), (65.6641), (538.125), (43.2461), (535.746), (43.2422), (535.746), (62.6445), (543.746), (85.25), (487.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (89.2461), (490.75), (89.2461), (490.75), (88.7422), (488.613), (88.2461), (488.746), (87.0508), (489.27), (88.0234), (545.156), (66.2461), (550.746), (66.2461), (550.742), (87.0977), (551.469), (89.2461), (490.75), (10), (0.1892), (0), (0), (0), (0), (0), (0), (5), (89.2461), (490.75), (89.2461), (490.75), (88.7422), (488.613), (88.2461), (488.746), (87.0508), (489.27), (88.0234), (545.156), (66.2461), (550.746), (66.2461), (550.742), (87.0977), (551.469), (89.2461), (490.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (119.25), (443.75), (119.25), (443.75), (121.387), (442.992), (121.246), (442.746), (120.352), (441.504), (66.2578), (455.586), (56.25), (435.75), (56.25), (435.75), (59.9062), (456.168), (119.25), (443.75), (10), (0.1892), (0), (0), (0), (0), (0), (0), (5), (119.25), (443.75), (119.25), (443.75), (121.387), (442.992), (121.246), (442.746), (120.352), (441.504), (66.2578), (455.586), (56.25), (435.75), (56.25), (435.75), (59.9062), (456.168), (119.25), (443.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (116.246), (432.75), (116.246), (432.75), (118.539), (432.383), (118.25), (431.746), (118.023), (430.641), (62.25), (426.965), (58.25), (404.75), (58.25), (404.75), (56.0391), (425.516), (116.246), (432.75), (10), (0.1892), (0), (0), (0), (0), (0), (0), (5), (116.246), (432.75), (116.246), (432.75), (118.539), (432.383), (118.25), (431.746), (118.023), (430.641), (62.25), (426.965), (58.25), (404.75), (58.25), (404.75), (56.0391), (425.516), (116.246), (432.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (112.25), (438.746), (112.25), (438.742), (113.82), (438.164), (113.25), (437.75), (113.059), (436.52), (57.3437), (441.016), (50.2461), (419.75), (50.2461), (419.75), (50.9883), (440.492), (112.25), (438.746), (10), (0.1892), (0), (0), (0), (0), (0), (0), (5), (112.25), (438.746), (112.25), (438.742), (113.82), (438.164), (113.25), (437.75), (113.059), (436.52), (57.3437), (441.016), (50.2461), (419.75), (50.2461), (419.75), (50.9883), (440.492), (112.25), (438.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (100.246), (458.746), (100.246), (458.746), (101.527), (457.406), (101.25), (456.746), (100.121), (456.262), (52.0039), (484.699), (36.25), (467.746), (36.25), (467.746), (46.0586), (487.012), (100.246), (458.746), (10), (0.1892), (0), (0), (0), (0), (0), (0), (5), (100.246), (458.746), (100.246), (458.746), (101.527), (457.406), (101.25), (456.746), (100.121), (456.262), (52.0039), (484.699), (36.25), (467.746), (36.25), (467.746), (46.0586), (487.012), (100.246), (458.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (92.2461), (454.75), (92.2422), (454.75), (93.3906), (452.969), (93.2461), (452.75), (92.125), (451.672), (41.0976), (474.484), (27.25), (456.746), (27.25), (456.746), (34.9258), (476.105), (92.2461), (454.75), (10), (0.1892), (0), (0), (0), (0), (0), (0), (5), (92.2461), (454.75), (92.2422), (454.75), (93.3906), (452.969), (93.2461), (452.75), (92.125), (451.672), (41.0976), (474.484), (27.25), (456.746), (27.25), (456.746), (34.9258), (476.105), (92.2461), (454.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (89.2461), (449.746), (89.2461), (449.742), (90.6992), (448.723), (90.25), (447.746), (89.6211), (447.262), (35.9609), (462.906), (25.25), (442.746), (25.25), (442.742), (29.625), (463.676), (89.2461), (449.746), (10), (0.1892), (0), (0), (0), (0), (0), (0), (5), (89.2461), (449.746), (89.2461), (449.742), (90.6992), (448.723), (90.25), (447.746), (89.6211), (447.262), (35.9609), (462.906), (25.25), (442.746), (25.25), (442.742), (29.625), (463.676), (89.2461), (449.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (100.246), (448.75), (100.246), (448.75), (101.969), (447.469), (101.25), (446.75), (100.43), (446.512), (56.3516), (480.887), (39.2461), (466.746), (39.2461), (466.742), (50.75), (483.941), (100.246), (448.75), (10), (0.1892), (0), (0), (0), (0), (0), (0), (5), (100.246), (448.75), (100.246), (448.75), (101.969), (447.469), (101.25), (446.75), (100.43), (446.512), (56.3516), (480.887), (39.2461), (466.746), (39.2461), (466.742), (50.75), (483.941), (100.246), (448.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (79.25), (480.746), (79.25), (480.746), (79.6367), (479.02), (79.25), (478.746), (77.8789), (478.578), (46.418), (524.777), (25.25), (516.75), (25.25), (516.75), (42.0195), (529.398), (79.25), (480.746), (10), (0.1892), (0), (0), (0), (0), (0), (0), (5), (79.25), (480.746), (79.25), (480.746), (79.6367), (479.02), (79.25), (478.746), (77.8789), (478.578), (46.418), (524.777), (25.25), (516.75), (25.25), (516.75), (42.0195), (529.398), (79.25), (480.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (79.25), (473.746), (79.25), (473.742), (80.8164), (471.527), (80.25), (470.75), (79.1914), (470.723), (38.5078), (509.051), (19.25), (496.75), (19.25), (496.75), (33.2148), (512.609), (79.25), (473.746), (10), (0.1892), (0), (0), (0), (0), (0), (0), (5), (79.25), (473.746), (79.25), (473.742), (80.8164), (471.527), (80.25), (470.75), (79.1914), (470.723), (38.5078), (509.051), (19.25), (496.75), (19.25), (496.75), (33.2148), (512.609), (79.25), (473.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (79.25), (468.75), (79.25), (468.75), (80.8516), (466.828), (80.25), (466.746), (79.3086), (465.875), (35.2305), (500.246), (17.25), (485.75), (17.25), (485.75), (29.6289), (503.301), (79.25), (468.75), (10), (0.1892), (0), (0), (0), (0), (0), (0), (5), (79.25), (468.75), (79.25), (468.75), (80.8516), (466.828), (80.25), (466.746), (79.3086), (465.875), (35.2305), (500.246), (17.25), (485.75), (17.25), (485.75), (29.6289), (503.301), (79.25), (468.75), (10), (0), (1), (1), (1), (1), (1), (1), (88), (77.2461), (466.746), (77.7383), (459.973), (78.8242), (452.746), (80.25), (449.746), (80.25), (449.742), (76.7773), (435.676), (86.25), (420.746), (86.25), (420.742), (86.0195), (413.238), (88.2461), (409.746), (88.2461), (409.742), (92.1797), (400.477), (97.25), (399.75), (101.73), (398.887), (111.324), (395.508), (122.246), (393.75), (122.246), (393.75), (141.02), (378.477), (137.246), (364.75), (137.242), (364.75), (137.059), (346.355), (133.246), (344.75), (133.246), (344.75), (145.859), (356.918), (135.25), (338.75), (130.25), (317.746), (130.25), (317.742), (158.617), (341.516), (141.25), (321.746), (130.25), (292.75), (130.25), (292.75), (152.02), (312.918), (144.246), (303.75), (140.25), (293.746), (140.25), (293.746), (188.098), (323.918), (154.246), (291.746), (154.242), (291.746), (163.02), (295.316), (168.25), (291.746), (168.25), (291.746), (175.34), (293.559), (174.25), (291.746), (174.25), (291.746), (151.578), (280.355), (147.25), (259.746), (147.25), (259.746), (156.859), (271.117), (153.246), (258.746), (154.246), (246.746), (154.242), (246.746), (158.18), (270.238), (157.25), (228.746), (157.25), (228.742), (178.859), (248.676), (166.246), (225.746), (166.246), (207.75), (166.246), (207.75), (182.816), (225.355), (176.246), (211.75), (176.246), (211.75), (186.777), (220.957), (182.25), (203.746), (182.25), (203.746), (181.5), (192.797), (186.25), (204.746), (186.25), (204.746), (203.938), (238.777), (197.25), (209.75), (197.25), (209.75), (196.457), (188.836), (201.246), (204.746), (201.246), (204.746), (202.18), (193.676), (212.246), (185.75), (212.246), (185.75), (210.977), (241.637), (225.25), (201.746), (229.25), (183.746), (229.25), (183.742), (232.539), (194.117), (232.246), (199.75), (232.246), (199.75), (248.379), (217.879), (241.25), (190.746), (241.25), (190.746), (257.617), (216.117), (254.246), (201.746), (254.246), (201.746), (245.738), (183.996), (247.246), (178.75), (247.242), (178.75), (265.977), (216.996), (267.246), (218.75), (267.246), (218.75), (265.098), (172.117), (277.246), (211.75), (277.246), (211.75), (283.137), (198.516), (280.246), (193.746), (280.242), (193.746), (288.859), (202.477), (288.246), (205.746), (288.246), (205.742), (293.039), (215.016), (296.25), (199.75), (296.25), (199.75), (298.098), (189.719), (300.246), (192.746), (300.246), (192.746), (304.258), (166.836), (305.25), (191.746), (305.25), (191.746), (307.34), (206.879), (299.246), (219.75), (299.246), (219.75), (300.297), (223.156), (297.246), (227.746), (297.246), (227.742), (312.18), (203.797), (304.25), (235.746), (304.25), (235.746), (316.578), (226.676), (318.25), (226.746), (318.25), (226.746), (302.937), (252.195), (312.246), (246.746), (312.242), (246.746), (306.898), (258.355), (326.25), (244.75), (326.25), (244.75), (309.098), (262.758), (328.25), (251.75), (328.25), (251.75), (337.258), (245.156), (329.25), (255.75), (329.25), (255.75), (313.059), (273.758), (337.25), (253.75), (337.25), (253.75), (350.02), (235.918), (351.25), (232.75), (351.25), (232.75), (339.898), (264.957), (335.246), (267.75), (335.242), (267.75), (344.301), (308.078), (389.246), (290.75), (389.246), (290.75), (397.098), (271.996), (402.246), (291.746), (402.242), (291.746), (416.02), (299.277), (428.25), (268.75), (428.25), (268.75), (432.738), (283.879), (432.246), (286.746), (432.246), (286.742), (439.34), (285.637), (438.25), (286.746), (438.25), (286.742), (452.98), (282.117), (454.246), (282.746), (454.246), (282.746), (461.777), (275.516), (462.246), (279.75), (462.242), (279.75), (472.34), (276.398), (470.25), (280.746), (470.25), (280.746), (479.82), (263.195), (480.246), (258.746), (483.25), (274.75), (485.25), (271.746), (485.25), (271.746), (486.859), (279.918), (486.25), (280.746), (485.098), (282.559), (507.98), (273.758), (513.246), (250.746), (515.246), (241.75), (515.242), (241.75), (522.059), (257.918), (520.246), (262.75), (520.246), (262.75), (526.02), (261.438), (526.246), (256.746), (526.242), (256.746), (530.859), (282.117), (525.25), (288.746), (525.25), (288.742), (530.418), (289.598), (531.246), (285.75), (531.246), (293.746), (531.246), (293.746), (539.66), (292.676), (539.246), (295.746), (539.242), (295.742), (544.5), (299.719), (546.246), (294.75), (546.242), (294.75), (533.059), (333.156), (553.246), (311.75), (553.246), (311.75), (561.219), (300.156), (557.246), (320.75), (553.301), (341.516), (548.898), (343.277), (554.25), (343.746), (554.25), (343.742), (555.059), (347.676), (553.246), (349.75), (550.66), (351.195), (554.25), (349.75), (554.25), (349.75), (554.25), (349.75), (559.461), (345.035), (553.246), (368.746), (553.246), (368.746), (560.777), (367.477), (547.25), (399.75), (547.25), (399.75), (550.66), (402.238), (546.246), (411.746), (546.242), (411.742), (555.059), (406.637), (558.25), (408.75), (558.25), (408.75), (557.699), (410.156), (554.25), (414.746), (554.25), (414.746), (530.418), (474.84), (553.246), (450.75), (553.246), (450.75), (565.895), (435.73), (559.246), (460.746), (559.242), (460.742), (548.832), (487.223), (549.25), (491.746), (77.2461), (466.746), (10), (1.1), (0), (0), (0), (0), (0), (0), (88), (77.2461), (466.746), (77.7383), (459.973), (78.8242), (452.746), (80.25), (449.746), (80.25), (449.742), (76.7773), (435.676), (86.25), (420.746), (86.25), (420.742), (86.0195), (413.238), (88.2461), (409.746), (88.2461), (409.742), (92.1797), (400.477), (97.25), (399.75), (101.73), (398.887), (111.324), (395.508), (122.246), (393.75), (122.246), (393.75), (141.02), (378.477), (137.246), (364.75), (137.242), (364.75), (137.059), (346.355), (133.246), (344.75), (133.246), (344.75), (145.859), (356.918), (135.25), (338.75), (130.25), (317.746), (130.25), (317.742), (158.617), (341.516), (141.25), (321.746), (130.25), (292.75), (130.25), (292.75), (152.02), (312.918), (144.246), (303.75), (140.25), (293.746), (140.25), (293.746), (188.098), (323.918), (154.246), (291.746), (154.242), (291.746), (163.02), (295.316), (168.25), (291.746), (168.25), (291.746), (175.34), (293.559), (174.25), (291.746), (174.25), (291.746), (151.578), (280.355), (147.25), (259.746), (147.25), (259.746), (156.859), (271.117), (153.246), (258.746), (154.246), (246.746), (154.242), (246.746), (158.18), (270.238), (157.25), (228.746), (157.25), (228.742), (178.859), (248.676), (166.246), (225.746), (166.246), (207.75), (166.246), (207.75), (182.816), (225.355), (176.246), (211.75), (176.246), (211.75), (186.777), (220.957), (182.25), (203.746), (182.25), (203.746), (181.5), (192.797), (186.25), (204.746), (186.25), (204.746), (203.938), (238.777), (197.25), (209.75), (197.25), (209.75), (196.457), (188.836), (201.246), (204.746), (201.246), (204.746), (202.18), (193.676), (212.246), (185.75), (212.246), (185.75), (210.977), (241.637), (225.25), (201.746), (229.25), (183.746), (229.25), (183.742), (232.539), (194.117), (232.246), (199.75), (232.246), (199.75), (248.379), (217.879), (241.25), (190.746), (241.25), (190.746), (257.617), (216.117), (254.246), (201.746), (254.246), (201.746), (245.738), (183.996), (247.246), (178.75), (247.242), (178.75), (265.977), (216.996), (267.246), (218.75), (267.246), (218.75), (265.098), (172.117), (277.246), (211.75), (277.246), (211.75), (283.137), (198.516), (280.246), (193.746), (280.242), (193.746), (288.859), (202.477), (288.246), (205.746), (288.246), (205.742), (293.039), (215.016), (296.25), (199.75), (296.25), (199.75), (298.098), (189.719), (300.246), (192.746), (300.246), (192.746), (304.258), (166.836), (305.25), (191.746), (305.25), (191.746), (307.34), (206.879), (299.246), (219.75), (299.246), (219.75), (300.297), (223.156), (297.246), (227.746), (297.246), (227.742), (312.18), (203.797), (304.25), (235.746), (304.25), (235.746), (316.578), (226.676), (318.25), (226.746), (318.25), (226.746), (302.937), (252.195), (312.246), (246.746), (312.242), (246.746), (306.898), (258.355), (326.25), (244.75), (326.25), (244.75), (309.098), (262.758), (328.25), (251.75), (328.25), (251.75), (337.258), (245.156), (329.25), (255.75), (329.25), (255.75), (313.059), (273.758), (337.25), (253.75), (337.25), (253.75), (350.02), (235.918), (351.25), (232.75), (351.25), (232.75), (339.898), (264.957), (335.246), (267.75), (335.242), (267.75), (344.301), (308.078), (389.246), (290.75), (389.246), (290.75), (397.098), (271.996), (402.246), (291.746), (402.242), (291.746), (416.02), (299.277), (428.25), (268.75), (428.25), (268.75), (432.738), (283.879), (432.246), (286.746), (432.246), (286.742), (439.34), (285.637), (438.25), (286.746), (438.25), (286.742), (452.98), (282.117), (454.246), (282.746), (454.246), (282.746), (461.777), (275.516), (462.246), (279.75), (462.242), (279.75), (472.34), (276.398), (470.25), (280.746), (470.25), (280.746), (479.82), (263.195), (480.246), (258.746), (483.25), (274.75), (485.25), (271.746), (485.25), (271.746), (486.859), (279.918), (486.25), (280.746), (485.098), (282.559), (507.98), (273.758), (513.246), (250.746), (515.246), (241.75), (515.242), (241.75), (522.059), (257.918), (520.246), (262.75), (520.246), (262.75), (526.02), (261.438), (526.246), (256.746), (526.242), (256.746), (530.859), (282.117), (525.25), (288.746), (525.25), (288.742), (530.418), (289.598), (531.246), (285.75), (531.246), (293.746), (531.246), (293.746), (539.66), (292.676), (539.246), (295.746), (539.242), (295.742), (544.5), (299.719), (546.246), (294.75), (546.242), (294.75), (533.059), (333.156), (553.246), (311.75), (553.246), (311.75), (561.219), (300.156), (557.246), (320.75), (553.301), (341.516), (548.898), (343.277), (554.25), (343.746), (554.25), (343.742), (555.059), (347.676), (553.246), (349.75), (550.66), (351.195), (554.25), (349.75), (554.25), (349.75), (554.25), (349.75), (559.461), (345.035), (553.246), (368.746), (553.246), (368.746), (560.777), (367.477), (547.25), (399.75), (547.25), (399.75), (550.66), (402.238), (546.246), (411.746), (546.242), (411.742), (555.059), (406.637), (558.25), (408.75), (558.25), (408.75), (557.699), (410.156), (554.25), (414.746), (554.25), (414.746), (530.418), (474.84), (553.246), (450.75), (553.246), (450.75), (565.895), (435.73), (559.246), (460.746), (559.242), (460.742), (548.832), (487.223), (549.25), (491.746), (77.2461), (466.746), (10), (0), (0.8), (0.45), (0.15), (0.8), (0.45), (0.15), (44), (549.25), (491.746), (550.379), (491.531), (552.805), (490.293), (554.25), (488.746), (554.25), (488.742), (561.66), (476.598), (556.25), (496.75), (556.25), (496.75), (545.82), (528.52), (555.246), (515.746), (555.246), (515.742), (562.098), (508.277), (558.25), (522.746), (554.328), (541.309), (551.25), (548.746), (551.25), (548.746), (551.25), (548.746), (564.301), (543.039), (535.246), (586.75), (544.246), (582.75), (544.246), (582.75), (522.938), (626.199), (499.25), (631.746), (490.25), (638.746), (490.25), (638.742), (532.621), (680.316), (518.25), (720.75), (518.25), (720.75), (511.059), (726.52), (500.246), (716.75), (500.246), (716.75), (493.461), (711.117), (487.246), (712.75), (487.246), (712.75), (452.98), (711.559), (451.25), (711.746), (448.578), (711.559), (410.301), (752.477), (338.25), (732.746), (338.25), (732.742), (332.418), (730.918), (327.25), (731.75), (327.25), (731.75), (307.34), (749.84), (253.246), (724.746), (253.246), (724.746), (242.656), (722.559), (241.25), (722.746), (239.137), (722.559), (236.059), (722.559), (227.25), (715.746), (218.457), (708.477), (218.02), (707.598), (216.25), (705.75), (216.25), (705.75), (197.777), (693.52), (192.25), (692.75), (192.25), (692.75), (179.738), (685.598), (175.25), (674.75), (171.246), (673.746), (171.246), (673.742), (169.18), (665.359), (168.25), (663.75), (168.25), (663.75), (163.457), (660.078), (162.25), (653.746), (162.25), (653.742), (152.898), (647.316), (153.246), (642.746), (153.242), (642.742), (151.578), (636.758), (150.246), (631.746), (150.246), (631.742), (142.777), (626.199), (143.246), (622.75), (143.242), (622.75), (135.297), (607.719), (136.25), (599.75), (136.25), (599.75), (129.578), (600.68), (126.246), (597.75), (126.242), (597.75), (125.617), (592.758), (124.25), (592.746), (124.25), (592.746), (120.777), (591), (123.25), (586.75), (123.25), (586.75), (121.656), (583.52), (121.246), (581.746), (121.246), (581.746), (122.098), (578.68), (117.25), (572.746), (117.25), (572.742), (110.219), (551.84), (112.25), (545.75), (112.25), (545.75), (112.859), (540.84), (110.246), (538.75), (110.246), (538.75), (105.816), (539.52), (115.246), (526.746), (115.242), (526.742), (115.938), (525), (112.25), (522.746), (112.25), (522.746), (93.5), (518.398), (91.25), (500.746), (91.25), (500.746), (75.8984), (484.078), (76.2461), (478.746), (75.8984), (475.824), (76.1953), (472.359), (77.2461), (467.746), (77.2461), (467.746), (76.3398), (458.117), (106.25), (456.746), (137.059), (456.355), (549.25), (491.746), (549.25), (491.746), (10), (1.1), (0), (0), (0), (0), (0), (0), (44), (549.25), (491.746), (550.379), (491.531), (552.805), (490.293), (554.25), (488.746), (554.25), (488.742), (561.66), (476.598), (556.25), (496.75), (556.25), (496.75), (545.82), (528.52), (555.246), (515.746), (555.246), (515.742), (562.098), (508.277), (558.25), (522.746), (554.328), (541.309), (551.25), (548.746), (551.25), (548.746), (551.25), (548.746), (564.301), (543.039), (535.246), (586.75), (544.246), (582.75), (544.246), (582.75), (522.938), (626.199), (499.25), (631.746), (490.25), (638.746), (490.25), (638.742), (532.621), (680.316), (518.25), (720.75), (518.25), (720.75), (511.059), (726.52), (500.246), (716.75), (500.246), (716.75), (493.461), (711.117), (487.246), (712.75), (487.246), (712.75), (452.98), (711.559), (451.25), (711.746), (448.578), (711.559), (410.301), (752.477), (338.25), (732.746), (338.25), (732.742), (332.418), (730.918), (327.25), (731.75), (327.25), (731.75), (307.34), (749.84), (253.246), (724.746), (253.246), (724.746), (242.656), (722.559), (241.25), (722.746), (239.137), (722.559), (236.059), (722.559), (227.25), (715.746), (218.457), (708.477), (218.02), (707.598), (216.25), (705.75), (216.25), (705.75), (197.777), (693.52), (192.25), (692.75), (192.25), (692.75), (179.738), (685.598), (175.25), (674.75), (171.246), (673.746), (171.246), (673.742), (169.18), (665.359), (168.25), (663.75), (168.25), (663.75), (163.457), (660.078), (162.25), (653.746), (162.25), (653.742), (152.898), (647.316), (153.246), (642.746), (153.242), (642.742), (151.578), (636.758), (150.246), (631.746), (150.246), (631.742), (142.777), (626.199), (143.246), (622.75), (143.242), (622.75), (135.297), (607.719), (136.25), (599.75), (136.25), (599.75), (129.578), (600.68), (126.246), (597.75), (126.242), (597.75), (125.617), (592.758), (124.25), (592.746), (124.25), (592.746), (120.777), (591), (123.25), (586.75), (123.25), (586.75), (121.656), (583.52), (121.246), (581.746), (121.246), (581.746), (122.098), (578.68), (117.25), (572.746), (117.25), (572.742), (110.219), (551.84), (112.25), (545.75), (112.25), (545.75), (112.859), (540.84), (110.246), (538.75), (110.246), (538.75), (105.816), (539.52), (115.246), (526.746), (115.242), (526.742), (115.938), (525), (112.25), (522.746), (112.25), (522.746), (93.5), (518.398), (91.25), (500.746), (91.25), (500.746), (75.8984), (484.078), (76.2461), (478.746), (75.8984), (475.824), (76.1953), (472.359), (77.2461), (467.746), (77.2461), (467.746), (76.3398), (458.117), (106.25), (456.746), (137.059), (456.355), (549.25), (491.746), (549.25), (491.746), (10), (0), (0.8), (0.45), (0.15), (0.8), (0.45), (0.15), (18), (93.2461), (466.746), (65.3398), (510.477), (81.2461), (448.75), (81.2461), (448.75), (90.8594), (410.598), (233.246), (451.746), (233.246), (451.746), (233.246), (451.742), (419.098), (485.398), (431.246), (489.746), (443.738), (494.199), (548.246), (486.746), (548.246), (486.746), (542.246), (505.75), (471.02), (556.68), (449.898), (531.156), (435.246), (535.746), (419.98), (539.957), (422.621), (529.398), (419.246), (528.746), (415.578), (527.637), (372.461), (554.918), (365.246), (553.75), (358.379), (553.156), (330.504), (579.285), (347.25), (544.746), (364.539), (506.957), (282.699), (501.238), (264.246), (513.746), (245.738), (525.879), (272.25), (493.746), (272.25), (493.746), (292.379), (471.316), (254.246), (489.746), (254.246), (489.746), (216.699), (503.879), (190.297), (475.719), (187.246), (474.75), (183.258), (473.957), (177.977), (470.438), (177.246), (477.746), (176.219), (484.52), (167.957), (502.891), (133.246), (473.746), (111.098), (455.695), (96.25), (479.75), (96.25), (479.75), (93.2461), (466.746), (10), (0), (0.91), (0.5), (0.228), (0.91), (0.5), (0.228), (19), (367.246), (551.75), (359.82), (551.238), (331.914), (577.352), (348.25), (542.75), (366.641), (503.719), (284.141), (499.316), (265.246), (511.746), (247.18), (523.957), (273.25), (491.746), (273.25), (491.746), (293.82), (469.398), (256.246), (487.75), (256.246), (487.75), (218.137), (501.957), (191.738), (473.797), (188.246), (472.75), (184.699), (472.039), (179.418), (468.516), (178.246), (475.746), (177.656), (482.598), (169.543), (500.785), (134.25), (471.746), (111.18), (452.957), (96.25), (476.75), (96.25), (476.75), (93.2461), (465.75), (65.3164), (509.219), (82.2461), (444.746), (82.2461), (444.746), (91.5781), (407.238), (235.246), (449.746), (235.246), (449.746), (235.242), (449.742), (420.539), (483.477), (433.246), (487.75), (445.18), (492.277), (549.25), (485.75), (549.25), (485.75), (543.25), (504.746), (471.578), (555.398), (451.34), (529.238), (436.25), (533.746), (421.418), (538.039), (424.059), (527.477), (420.246), (526.746), (417.02), (525.719), (373.898), (552.996), (367.246), (551.75), (10), (0), (0.919), (0.55), (0.305), (0.919), (0.55), (0.305), (19), (368.246), (549.75), (361.258), (549.316), (334.051), (575.75), (350.25), (540.75), (367.641), (500.695), (285.578), (497.398), (267.246), (509.75), (248.617), (522.035), (275.246), (489.746), (275.246), (489.746), (295.258), (467.477), (257.246), (485.75), (257.246), (485.75), (219.578), (500.035), (193.18), (471.875), (189.246), (470.75), (186.137), (470.117), (180.859), (466.598), (180.246), (473.746), (179.098), (480.676), (171.125), (498.68), (136.25), (469.746), (111.258), (450.215), (97.25), (472.75), (97.25), (472.75), (93.2461), (463.75), (66.6172), (506.637), (82.2461), (441.75), (82.2461), (441.75), (92.2969), (403.879), (236.25), (447.746), (236.25), (447.746), (236.25), (447.746), (421.98), (481.559), (434.246), (485.75), (446.617), (490.355), (549.25), (483.75), (549.25), (483.75), (543.25), (502.746), (472.141), (554.117), (452.777), (527.316), (438.25), (531.75), (422.859), (536.117), (425.5), (525.559), (422.246), (524.746), (418.457), (523.797), (375.34), (551.078), (368.246), (549.75), (10), (0), (0.928), (0.6), (0.382), (0.928), (0.6), (0.382), (19), (369.25), (548.746), (362.699), (547.398), (335.496), (573.832), (351.25), (538.75), (369.738), (497.285), (286.43), (495.867), (268.246), (507.75), (250.059), (520.117), (276.246), (487.75), (276.246), (487.75), (296.699), (465.559), (259.25), (483.75), (259.25), (483.75), (221.02), (498.117), (194.617), (469.957), (191.246), (468.75), (187.578), (468.199), (182.301), (464.676), (181.25), (471.746), (180.539), (478.758), (172.711), (496.574), (137.246), (467.746), (111.336), (447.477), (97.25), (469.746), (97.25), (469.746), (93.2461), (461.75), (68.7969), (502.516), (83.2461), (438.746), (83.2461), (438.746), (93.0195), (400.516), (237.25), (445.746), (237.25), (445.746), (237.25), (445.746), (423.418), (479.637), (435.246), (483.75), (448.059), (488.438), (550.246), (481.75), (550.246), (481.75), (544.246), (501.75), (472.699), (552.84), (454.219), (525.398), (439.25), (529.75), (424.301), (534.199), (426.938), (523.637), (423.246), (522.746), (419.898), (521.879), (376.777), (549.156), (369.25), (548.746), (10), (0), (0.937), (0.65), (0.46), (0.937), (0.65), (0.46), (19), (371.25), (546.746), (364.141), (545.477), (337.492), (572.156), (352.25), (536.75), (371.18), (493.559), (288.457), (493.559), (270.25), (505.75), (251.5), (518.195), (278.246), (485.75), (278.246), (485.75), (298.141), (463.637), (260.25), (481.75), (260.25), (481.75), (222.457), (496.195), (196.059), (468.035), (192.25), (466.746), (189.02), (466.277), (183.738), (462.758), (183.25), (469.746), (181.98), (476.836), (174.297), (494.473), (139.246), (466.746), (111.418), (444.738), (97.25), (466.746), (97.25), (466.746), (93.2461), (460.746), (70.9766), (498.617), (84.25), (434.746), (84.25), (434.746), (93.7383), (397.156), (239.25), (444.746), (239.25), (444.746), (239.25), (444.742), (424.859), (477.715), (437.25), (481.75), (449.5), (486.516), (550.246), (479.75), (550.246), (479.75), (544.246), (500.746), (473.262), (551.559), (455.66), (523.477), (440.25), (527.75), (425.738), (532.277), (428.379), (521.715), (425.25), (520.75), (421.34), (519.957), (378.219), (547.238), (371.25), (546.746), (10), (0), (0.946), (0.7), (0.537), (0.946), (0.7), (0.537), (19), (372.25), (544.746), (365.578), (543.559), (337.02), (569.352), (354.246), (534.75), (375.258), (492.078), (289.898), (491.637), (271.25), (503.75), (252.938), (516.277), (279.246), (483.75), (279.246), (483.75), (299.578), (461.719), (261.25), (479.75), (261.25), (479.75), (223.898), (494.277), (197.5), (466.117), (194.25), (464.746), (190.457), (464.355), (185.18), (460.836), (184.25), (467.746), (183.418), (474.918), (175.879), (492.367), (140.25), (464.746), (111.5), (441.996), (98.2461), (462.746), (98.2461), (462.746), (92.2461), (458.746), (72.9375), (495.156), (85.25), (431.746), (85.25), (431.746), (94.457), (393.797), (240.25), (442.746), (240.25), (442.746), (240.25), (442.742), (426.301), (475.797), (438.25), (479.75), (450.941), (484.598), (551.25), (477.746), (551.25), (477.746), (545.25), (498.75), (473.82), (550.277), (457.102), (521.559), (442.246), (525.75), (427.18), (530.355), (429.82), (519.797), (426.25), (518.75), (422.781), (518.039), (379.66), (545.316), (372.25), (544.746), (10), (0), (0.955), (0.75), (0.614), (0.955), (0.75), (0.614), (19), (374.25), (542.75), (367.02), (541.637), (338.043), (567.223), (355.246), (532.746), (378.02), (488.836), (291.34), (489.715), (273.25), (501.75), (254.379), (514.355), (281.25), (481.75), (281.25), (481.75), (301.02), (459.797), (263.25), (478.746), (263.25), (478.746), (225.34), (492.355), (198.938), (464.195), (195.25), (463.75), (191.898), (462.438), (186.617), (458.918), (185.25), (465.75), (184.859), (472.996), (177.465), (490.262), (141.25), (462.746), (111.578), (439.258), (98.2461), (459.75), (98.2461), (459.75), (92.2461), (456.746), (75.1172), (490.156), (85.25), (428.75), (85.25), (428.75), (95.1797), (390.438), (242.246), (440.746), (242.246), (440.746), (242.246), (440.742), (427.738), (473.875), (440.25), (478.746), (452.379), (482.676), (551.25), (475.746), (551.25), (475.746), (545.25), (497.746), (474.379), (548.996), (458.539), (519.637), (443.246), (523.75), (428.621), (528.438), (431.258), (517.875), (427.25), (516.75), (424.219), (516.117), (381.102), (543.398), (374.25), (542.75), (10), (0), (0.964), (0.8), (0.691), (0.964), (0.8), (0.691), (19), (375.246), (540.75), (368.461), (539.719), (338.273), (564.66), (357.246), (530.746), (381.219), (487.355), (292.777), (487.797), (274.25), (499.746), (255.82), (512.438), (282.25), (479.75), (282.25), (479.75), (302.457), (457.879), (264.246), (476.75), (264.246), (476.75), (226.777), (490.438), (200.379), (462.277), (197.25), (461.75), (193.34), (460.516), (188.059), (456.996), (187.246), (463.75), (186.297), (471.078), (179.047), (488.156), (143.246), (460.746), (111.656), (436.516), (99.2461), (456.746), (99.2461), (456.746), (92.2461), (454.75), (76.8555), (486.477), (86.25), (424.75), (86.25), (424.75), (95.8984), (387.074), (243.246), (438.746), (243.246), (438.746), (243.246), (438.742), (429.18), (471.957), (441.246), (476.75), (453.82), (480.758), (552.25), (474.75), (552.25), (474.75), (546.246), (496.75), (474.941), (547.719), (459.98), (517.719), (445.246), (521.746), (430.059), (526.516), (432.699), (515.957), (429.25), (514.75), (425.66), (514.195), (382.539), (541.477), (375.246), (540.75), (10), (0), (0.973), (0.85), (0.769), (0.973), (0.85), (0.769), (19), (377.246), (538.75), (369.898), (537.797), (339.715), (562.738), (358.25), (528.746), (382.66), (485.437), (294.219), (485.875), (275.246), (497.746), (257.258), (510.516), (283.25), (477.746), (283.25), (477.746), (303.898), (455.957), (266.246), (474.75), (266.246), (474.75), (228.219), (488.516), (201.816), (460.355), (198.246), (459.75), (194.777), (458.598), (189.5), (455.078), (188.246), (461.75), (187.738), (469.156), (180.633), (486.051), (144.246), (458.746), (111.738), (433.777), (99.2461), (452.75), (99.2461), (452.75), (92.2461), (453.746), (77.7188), (482.578), (87.2461), (421.75), (87.2461), (421.75), (96.6172), (383.715), (245.246), (436.746), (245.246), (436.746), (245.246), (436.746), (430.621), (470.035), (443.246), (474.75), (455.258), (478.836), (552.25), (472.75), (552.25), (472.75), (547.25), (495.746), (475.5), (546.438), (461.418), (515.797), (446.246), (519.746), (431.5), (524.598), (434.141), (514.035), (430.246), (512.75), (427.098), (512.277), (383.98), (539.555), (377.246), (538.75), (10), (0), (0.982), (0.9), (0.846), (0.982), (0.9), (0.846), (19), (378.246), (536.75), (371.34), (535.879), (341.578), (561.055), (360.25), (526.746), (384.098), (482.195), (295.66), (483.957), (277.246), (496.75), (258.699), (508.598), (285.25), (475.746), (285.25), (475.746), (305.34), (454.035), (267.246), (472.75), (267.246), (472.75), (229.66), (486.598), (203.258), (458.438), (199.246), (457.75), (196.219), (456.676), (190.937), (453.156), (190.246), (459.75), (189.18), (467.238), (182.219), (483.949), (146.25), (456.746), (111.82), (431.035), (99.2461), (449.746), (99.2461), (449.746), (92.2461), (451.746), (78.3594), (478.238), (87.2461), (417.75), (87.2461), (417.75), (97.3399), (380.355), (246.246), (434.746), (246.246), (434.746), (246.242), (434.746), (432.059), (468.117), (444.246), (472.75), (456.699), (476.918), (553.246), (470.75), (553.246), (470.75), (547.25), (493.746), (476.059), (545.156), (462.859), (513.879), (448.25), (518.75), (432.938), (522.676), (435.578), (512.117), (432.246), (510.746), (428.539), (510.355), (385.418), (537.637), (378.246), (536.75), (10), (0), (0.991), (0.95), (0.923), (0.991), (0.95), (0.923), (19), (380.25), (534.75), (372.777), (533.957), (344.207), (559.746), (361.25), (524.746), (384.66), (478.078), (297.098), (482.035), (278.246), (494.75), (260.141), (506.676), (286.246), (473.746), (286.246), (473.746), (306.777), (452.117), (269.246), (470.75), (269.246), (470.75), (231.098), (484.676), (204.699), (456.516), (201.246), (455.746), (197.66), (454.758), (192.379), (451.238), (191.246), (458.746), (190.621), (465.316), (183.801), (481.844), (147.25), (454.75), (111.898), (428.297), (100.246), (446.75), (100.246), (446.75), (92.2461), (449.746), (78.5586), (475.656), (88.2461), (414.746), (88.2461), (414.746), (98.0586), (376.996), (248.25), (432.75), (248.25), (432.75), (248.25), (432.75), (433.5), (466.195), (446.246), (470.75), (458.141), (474.996), (553.246), (468.75), (553.246), (468.75), (548.246), (492.75), (476.621), (543.879), (464.301), (511.957), (449.25), (516.75), (434.379), (520.758), (437.02), (510.195), (433.246), (509.75), (429.98), (508.438), (386.859), (535.719), (380.25), (534.75), (10), (0), (1), (1), (1), (1), (1), (1), (18), (92.2461), (448.75), (78.5391), (472.637), (89.2461), (411.746), (89.2461), (411.746), (98.7773), (373.637), (249.25), (430.75), (249.25), (430.75), (249.25), (430.75), (434.938), (464.277), (447.25), (468.75), (459.578), (473.078), (553.246), (466.746), (553.246), (466.746), (548.246), (491.746), (477.18), (542.598), (465.738), (510.039), (451.25), (514.75), (435.82), (518.84), (438.461), (508.277), (435.246), (507.75), (431.418), (506.52), (388.301), (533.797), (381.25), (532.746), (374.219), (532.039), (346.477), (558.227), (363.25), (522.746), (387.23), (470.762), (295.941), (481.848), (280.246), (492.75), (261.578), (504.758), (288.246), (471.746), (288.246), (471.746), (308.219), (450.195), (270.25), (468.75), (270.25), (468.75), (232.539), (482.758), (206.137), (454.598), (202.246), (453.746), (199.098), (452.836), (193.816), (449.316), (193.25), (456.746), (192.059), (463.398), (185.387), (479.738), (149.246), (452.75), (111.977), (425.559), (100.246), (442.746), (100.246), (442.746), (92.2461), (448.75), (10), (0), (0), (0), (0), (0), (0), (0), (7), (138.246), (415.75), (138.246), (415.75), (130.457), (402.676), (153.246), (387.746), (153.242), (387.742), (154.879), (386.617), (135.25), (390.746), (135.25), (390.746), (128.258), (393.438), (126.246), (404.75), (126.242), (404.75), (121.219), (409.719), (116.246), (415.75), (110.656), (422.035), (138.246), (415.75), (138.246), (415.75), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (8), (292.25), (467.746), (292.25), (467.746), (311.848), (438.297), (311.246), (432.75), (309.758), (421.598), (309.539), (411.035), (313.246), (406.75), (316.578), (402.238), (326.25), (365.746), (326.25), (365.746), (326.25), (365.742), (325.82), (364.398), (339.25), (405.746), (339.25), (405.742), (352.219), (423.797), (330.25), (443.75), (330.25), (443.75), (291.5), (475.719), (292.25), (467.746), (10), (0), (0), (0), (0), (0), (0), (0), (15), (160.246), (385.746), (160.246), (385.742), (172.699), (378.035), (157.25), (343.746), (164.246), (346.746), (164.242), (346.746), (163.02), (334.035), (159.246), (331.75), (167.25), (334.75), (167.25), (334.75), (172.699), (326.117), (168.25), (320.75), (168.25), (320.75), (186.777), (312.035), (186.25), (304.746), (186.25), (304.746), (192.938), (313.797), (188.246), (320.75), (184.137), (327.879), (176.219), (323.477), (177.246), (343.746), (167.25), (339.746), (167.25), (339.742), (173.578), (349.879), (173.25), (356.75), (165.246), (354.746), (165.242), (354.742), (181.793), (383.512), (170.246), (384.75), (163.457), (385.957), (160.246), (385.746), (160.246), (385.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (5), (196.25), (367.75), (196.25), (367.75), (199.098), (372.316), (196.25), (371.75), (192.938), (370.559), (158.617), (354.277), (152.25), (343.746), (152.25), (343.742), (189.859), (370.559), (196.25), (367.75), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (5), (207.25), (358.75), (207.25), (358.75), (210.539), (363.516), (207.25), (362.75), (204.379), (361.758), (170.059), (345.477), (163.25), (334.75), (163.25), (334.75), (201.297), (361.758), (207.25), (358.75), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (5), (222.246), (375.75), (222.246), (375.75), (225.059), (380.238), (222.246), (379.746), (218.898), (378.477), (184.578), (362.195), (178.246), (351.75), (178.246), (351.75), (215.816), (378.477), (222.246), (375.75), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (5), (196.25), (327.75), (196.25), (327.75), (196.457), (334.035), (193.25), (332.746), (190.297), (332.277), (150.699), (312.918), (144.246), (302.746), (144.246), (302.746), (190.297), (330.516), (196.25), (327.75), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (5), (198.246), (339.746), (198.246), (339.742), (199.098), (344.598), (196.25), (343.746), (193.816), (343.719), (164.777), (330.957), (158.25), (320.75), (158.25), (320.75), (190.738), (344.156), (198.246), (339.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (24), (182.25), (286.746), (171.246), (278.75), (171.246), (278.75), (182.379), (286.957), (186.25), (285.75), (186.25), (285.75), (178.859), (273.316), (178.246), (267.75), (178.246), (267.75), (189.418), (281.676), (195.25), (280.746), (195.25), (280.746), (203.938), (280.797), (204.25), (268.75), (204.25), (268.75), (210.098), (280.355), (213.246), (279.75), (213.242), (279.75), (214.938), (272.879), (213.246), (265.75), (213.242), (265.75), (218.02), (273.758), (222.246), (271.746), (222.246), (271.746), (229.457), (274.195), (228.25), (261.746), (228.25), (261.742), (228.578), (249.996), (227.25), (246.746), (227.25), (246.746), (233.859), (275.957), (236.25), (276.75), (236.25), (276.75), (245.297), (277.719), (250.25), (267.75), (250.25), (267.75), (246.18), (276.398), (251.25), (273.746), (251.25), (273.742), (263.34), (272.438), (267.246), (264.746), (267.246), (264.742), (259.379), (278.156), (265.246), (274.75), (265.246), (274.75), (273.02), (274.637), (274.25), (267.75), (274.25), (267.75), (283.578), (244.277), (286.246), (242.75), (286.246), (242.75), (277.418), (266.277), (279.246), (266.746), (279.242), (266.742), (276.977), (279.477), (282.25), (262.75), (282.25), (262.75), (279.18), (278.598), (285.25), (277.746), (291.5), (276.836), (296.34), (265.836), (305.25), (268.75), (305.25), (268.75), (316.141), (262.316), (318.25), (338.75), (182.25), (286.746), (10), (0), (0), (0), (0), (0), (0), (0), (15), (187.246), (388.75), (187.246), (388.75), (203.5), (395.637), (247.246), (388.75), (247.242), (388.75), (255.418), (388.598), (263.25), (398.746), (270.379), (407.957), (299.859), (415.879), (307.25), (413.75), (317.25), (406.75), (318.25), (405.746), (318.25), (405.742), (331.98), (393.879), (332.246), (385.746), (332.859), (377.156), (316.578), (324.355), (306.25), (306.746), (295.457), (289.156), (284.898), (275.516), (264.246), (277.746), (264.246), (277.742), (240.898), (282.559), (212.246), (277.746), (212.246), (277.742), (180.617), (279.918), (177.246), (288.746), (174.457), (297.516), (190.246), (313.746), (190.246), (313.746), (190.246), (313.746), (194.699), (323.477), (193.25), (339.746), (192.059), (355.156), (192.5), (385.957), (187.246), (388.75), (10), (0), (0.9), (0.4), (0.55), (0.9), (0.4), (0.55), (8), (211.246), (386.75), (220.656), (366.598), (188.246), (294.75), (188.246), (294.75), (185.898), (293.117), (202.023), (286.469), (213.246), (288.746), (225.219), (292.059), (269.246), (287.75), (269.246), (287.75), (295.457), (304.559), (309.246), (353.75), (309.246), (353.75), (309.246), (353.75), (320.98), (379.797), (301.246), (383.746), (282.258), (386.836), (211.246), (386.75), (211.246), (386.75), (10), (0), (0.7), (0.2), (0.35), (0.7), (0.2), (0.35), (6), (209.246), (352.746), (212.844), (366.922), (214.586), (379.902), (211.246), (386.75), (211.246), (386.75), (280.059), (379.797), (292.25), (402.75), (297.043), (411.34), (313.277), (377.598), (313.246), (366.75), (313.242), (366.75), (243.539), (351.195), (227.25), (363.746), (209.246), (352.746), (10), (0), (0.65), (0.15), (0.3), (0.65), (0.15), (0.3), (13), (214.25), (334.75), (214.25), (334.75), (216.258), (326.996), (213.246), (322.75), (213.242), (322.75), (211.859), (321.719), (210.246), (321.746), (210.246), (321.742), (211.859), (317.316), (218.25), (315.746), (218.25), (315.746), (220.656), (310.719), (223.246), (310.746), (225.938), (309.836), (231.219), (303.676), (235.246), (304.746), (240.02), (306.316), (252.25), (310.746), (252.25), (310.746), (252.25), (310.742), (258.5), (314.238), (268.246), (310.746), (268.242), (310.742), (270.789), (311.16), (271.25), (315.746), (271.809), (320.727), (275.219), (324.797), (277.246), (326.746), (279.617), (329.195), (290.18), (343.277), (289.246), (343.746), (287.539), (344.156), (214.25), (334.75), (214.25), (334.75), (10), (0), (1), (0.45), (0.5), (1), (0.45), (0.5), (12), (209.246), (387.746), (209.246), (387.742), (206.137), (363.516), (209.246), (354.746), (213.18), (345.035), (212.297), (342.836), (211.246), (338.75), (210.539), (334.035), (215.379), (323.035), (221.246), (316.75), (234.246), (314.75), (234.246), (314.75), (251.457), (318.637), (261.25), (315.746), (261.25), (315.746), (271.473), (314.078), (275.246), (330.746), (275.246), (330.742), (280.5), (337.559), (288.246), (340.75), (296.34), (343.719), (304.258), (389.477), (300.246), (398.746), (295.457), (407.078), (279.617), (411.918), (262.25), (394.746), (244.418), (377.598), (242.219), (396.078), (209.246), (387.746), (10), (1.1), (0), (0), (0), (0), (0), (0), (12), (209.246), (387.746), (209.246), (387.742), (206.137), (363.516), (209.246), (354.746), (213.18), (345.035), (212.297), (342.836), (211.246), (338.75), (210.539), (334.035), (215.379), (323.035), (221.246), (316.75), (234.246), (314.75), (234.246), (314.75), (251.457), (318.637), (261.25), (315.746), (261.25), (315.746), (271.473), (314.078), (275.246), (330.746), (275.246), (330.742), (280.5), (337.559), (288.246), (340.75), (296.34), (343.719), (304.258), (389.477), (300.246), (398.746), (295.457), (407.078), (279.617), (411.918), (262.25), (394.746), (244.418), (377.598), (242.219), (396.078), (209.246), (387.746), (10), (0), (1), (1), (0.8), (1), (1), (0.8), (7), (211.246), (305.75), (211.246), (305.75), (210.098), (308.078), (205.25), (308.746), (205.25), (308.742), (180.617), (312.477), (171.246), (325.75), (171.246), (325.75), (163.898), (332.277), (168.25), (319.746), (168.25), (319.742), (180.18), (297.078), (187.246), (293.746), (187.246), (293.746), (205.699), (289.598), (211.246), (305.75), (10), (0.55), (0), (0), (0), (0), (0), (0), (7), (211.246), (305.75), (211.246), (305.75), (210.098), (308.078), (205.25), (308.746), (205.25), (308.742), (180.617), (312.477), (171.246), (325.75), (171.246), (325.75), (163.898), (332.277), (168.25), (319.746), (168.25), (319.742), (180.18), (297.078), (187.246), (293.746), (187.246), (293.746), (205.699), (289.598), (211.246), (305.75), (10), (0), (0.8), (0.25), (0.3), (0.8), (0.25), (0.3), (9), (299.246), (375.75), (299.641), (384.941), (301.789), (394.418), (300.246), (398.746), (292.766), (412.461), (274.098), (406.535), (262.25), (394.746), (244.418), (377.598), (242.219), (396.078), (209.246), (387.746), (209.246), (387.742), (207.297), (372.797), (208.25), (361.746), (208.25), (361.742), (249.258), (374.516), (250.25), (368.746), (250.25), (368.746), (251.898), (371.879), (262.25), (371.75), (272.137), (371.879), (297.152), (373.168), (299.246), (375.75), (10), (2.2), (0.65), (0.1), (0.15), (0.65), (0.1), (0.15), (3), (251.25), (387.746), (251.25), (387.742), (256.738), (381.996), (253.246), (371.75), (253.246), (371.75), (236.938), (353.836), (239.25), (338.75), (10), (0), (1), (1), (0.8), (1), (1), (0.8), (5), (198.246), (293.746), (198.246), (293.746), (193.816), (308.078), (203.25), (300.75), (203.25), (300.75), (208.777), (298.398), (207.25), (296.75), (206.137), (294.879), (199.977), (290.477), (198.246), (293.746), (10), (0.55), (0), (0), (0), (0), (0), (0), (5), (198.246), (293.746), (198.246), (293.746), (193.816), (308.078), (203.25), (300.75), (203.25), (300.75), (208.777), (298.398), (207.25), (296.75), (206.137), (294.879), (199.977), (290.477), (198.246), (293.746), (10), (0), (1), (1), (0.8), (1), (1), (0.8), (5), (204.25), (292.75), (204.25), (292.75), (200.328), (303.941), (208.25), (297.746), (208.25), (297.742), (212.937), (295.266), (211.246), (294.75), (206.227), (293.383), (211.242), (290.566), (204.25), (292.75), (10), (0.55), (0), (0), (0), (0), (0), (0), (5), (204.25), (292.75), (204.25), (292.75), (200.328), (303.941), (208.25), (297.746), (208.25), (297.742), (212.937), (295.266), (211.246), (294.75), (206.227), (293.383), (211.242), (290.566), (204.25), (292.75), (10), (0), (1), (1), (0.8), (1), (1), (0.8), (5), (209.246), (292.75), (209.246), (292.75), (205.609), (303.941), (213.246), (297.746), (213.242), (297.742), (218.168), (295.414), (216.25), (294.75), (212.824), (293.383), (216.523), (290.566), (209.246), (292.75), (10), (0.55), (0), (0), (0), (0), (0), (0), (5), (209.246), (292.75), (209.246), (292.75), (205.609), (303.941), (213.246), (297.746), (213.242), (297.742), (218.168), (295.414), (216.25), (294.75), (212.824), (293.383), (216.523), (290.566), (209.246), (292.75), (10), (0), (1), (1), (0.8), (1), (1), (0.8), (5), (216.25), (292.75), (216.25), (292.75), (212.871), (303.723), (220.246), (297.746), (220.246), (297.742), (225.434), (295.172), (224.246), (294.75), (220.527), (293.383), (223.781), (290.344), (216.25), (292.75), (10), (0.55), (0), (0), (0), (0), (0), (0), (5), (216.25), (292.75), (216.25), (292.75), (212.871), (303.723), (220.246), (297.746), (220.246), (297.742), (225.434), (295.172), (224.246), (294.75), (220.527), (293.383), (223.781), (290.344), (216.25), (292.75), (10), (0), (1), (1), (0.8), (1), (1), (0.8), (5), (224.246), (292.75), (224.242), (292.75), (220), (303.809), (227.25), (297.746), (227.25), (297.742), (231.969), (296.066), (231.246), (294.75), (229.855), (293.25), (230.91), (290.434), (224.246), (292.75), (10), (0.55), (0), (0), (0), (0), (0), (0), (5), (224.246), (292.75), (224.242), (292.75), (220), (303.809), (227.25), (297.746), (227.25), (297.742), (231.969), (296.066), (231.246), (294.75), (229.855), (293.25), (230.91), (290.434), (224.246), (292.75), (10), (0), (1), (1), (0.8), (1), (1), (0.8), (5), (231.246), (291.746), (231.246), (291.746), (225.938), (305.438), (236.25), (298.75), (236.25), (298.75), (241.34), (296.195), (240.25), (294.75), (238.699), (292.676), (240.02), (289.156), (231.246), (291.746), (10), (0.55), (0), (0), (0), (0), (0), (0), (5), (231.246), (291.746), (231.246), (291.746), (225.938), (305.438), (236.25), (298.75), (236.25), (298.75), (241.34), (296.195), (240.25), (294.75), (238.699), (292.676), (240.02), (289.156), (231.246), (291.746), (10), (2.2), (0.65), (0.15), (0.3), (0.65), (0.15), (0.3), (4), (200.246), (310.746), (200.246), (310.742), (214.5), (313.797), (221.246), (310.746), (221.246), (310.742), (227.699), (308.957), (229.25), (309.75), (230.34), (309.836), (234.246), (310.746), (234.246), (310.746), (10), (2.2), (0.65), (0.15), (0.3), (0.65), (0.15), (0.3), (4), (237.25), (300.75), (237.25), (300.75), (250.578), (315.996), (264.246), (310.746), (271.496), (308.328), (270.379), (312.035), (271.25), (314.75), (272.137), (318.195), (272.359), (322.816), (278.246), (325.75), (10), (0), (1), (1), (0.8), (1), (1), (0.8), (7), (256.246), (318.75), (256.246), (318.75), (251.898), (330.516), (249.25), (316.75), (245.738), (302.355), (242.219), (298.398), (240.25), (295.746), (240.25), (295.742), (240.457), (289.598), (249.25), (289.75), (249.25), (289.75), (261.578), (290.477), (262.25), (293.746), (262.457), (296.637), (260.699), (309.398), (256.246), (318.75), (10), (0.55), (0), (0), (0), (0), (0), (0), (7), (256.246), (318.75), (256.246), (318.75), (251.898), (330.516), (249.25), (316.75), (245.738), (302.355), (242.219), (298.398), (240.25), (295.746), (240.25), (295.742), (240.457), (289.598), (249.25), (289.75), (249.25), (289.75), (261.578), (290.477), (262.25), (293.746), (262.457), (296.637), (260.699), (309.398), (256.246), (318.75), (10), (2.2), (0.65), (0.15), (0.3), (0.65), (0.15), (0.3), (2), (271.25), (310.746), (271.25), (310.742), (275.656), (313.355), (278.246), (311.75), (10), (2.2), (0.65), (0.15), (0.3), (0.65), (0.15), (0.3), (2), (279.246), (328.746), (279.242), (328.742), (282.039), (334.148), (287.246), (334.75), (10), (0), (0.7), (0.7), (0.7), (0.7), (0.7), (0.7), (6), (191.246), (288.746), (191.242), (288.742), (211.418), (284.758), (216.25), (286.746), (216.25), (286.742), (225.938), (286.516), (216.25), (284.746), (216.25), (284.742), (202.617), (284.316), (194.25), (285.75), (194.25), (285.75), (181.059), (291.797), (191.246), (288.746), (10), (0), (1), (1), (0.8), (1), (1), (0.8), (7), (207.25), (390.746), (207.25), (390.746), (226.379), (390.797), (228.25), (389.75), (228.25), (389.75), (236.5), (356.035), (232.246), (347.75), (232.246), (347.75), (231.219), (344.598), (228.25), (350.746), (228.25), (350.742), (207.898), (386.836), (204.25), (388.75), (200.859), (391.238), (205.699), (390.797), (207.25), (390.746), (10), (0.55), (0), (0), (0), (0), (0), (0), (7), (207.25), (390.746), (207.25), (390.746), (226.379), (390.797), (228.25), (389.75), (228.25), (389.75), (236.5), (356.035), (232.246), (347.75), (232.246), (347.75), (231.219), (344.598), (228.25), (350.746), (228.25), (350.742), (207.898), (386.836), (204.25), (388.75), (200.859), (391.238), (205.699), (390.797), (207.25), (390.746), (10), (0), (1), (1), (0.8), (1), (1), (0.8), (7), (122.246), (393.75), (122.246), (393.75), (132), (391.898), (146.25), (388.75), (146.25), (388.75), (151.137), (364.398), (154.246), (358.75), (158.18), (353.836), (154.219), (353.836), (150.246), (356.75), (146.297), (359.996), (130.02), (375.398), (128.25), (379.746), (125.617), (385.078), (122.246), (393.75), (122.246), (393.75), (10), (0.55), (0), (0), (0), (0), (0), (0), (7), (122.246), (393.75), (122.246), (393.75), (132), (391.898), (146.25), (388.75), (146.25), (388.75), (151.137), (364.398), (154.246), (358.75), (158.18), (353.836), (154.219), (353.836), (150.246), (356.75), (146.297), (359.996), (130.02), (375.398), (128.25), (379.746), (125.617), (385.078), (122.246), (393.75), (122.246), (393.75), (10), (0), (1), (1), (0.8), (1), (1), (0.8), (6), (146.25), (388.75), (146.25), (388.75), (152.637), (387.094), (153.246), (384.75), (154.855), (382.223), (152.25), (378.75), (152.25), (378.75), (152.25), (378.75), (151.324), (374.961), (150.246), (377.75), (148.68), (379.719), (145.52), (388.145), (146.25), (388.75), (10), (0.55), (0), (0), (0), (0), (0), (0), (6), (146.25), (388.75), (146.25), (388.75), (152.637), (387.094), (153.246), (384.75), (154.855), (382.223), (152.25), (378.75), (152.25), (378.75), (152.25), (378.75), (151.324), (374.961), (150.246), (377.75), (148.68), (379.719), (145.52), (388.145), (146.25), (388.75), (10), (0), (0), (0), (0), (0), (0), (0), (10), (146.25), (388.75), (146.25), (388.75), (150.258), (383.316), (154.246), (383.746), (158.18), (383.316), (158.598), (383.77), (161.246), (382.75), (166.758), (381.996), (166.316), (384.195), (173.25), (382.75), (176.48), (382.348), (179.297), (383.316), (182.25), (381.746), (185.457), (380.676), (188.977), (381.559), (190.246), (383.746), (191.617), (385.957), (197.25), (390.746), (197.25), (390.746), (197.25), (390.746), (182.816), (388.598), (179.246), (387.746), (179.246), (387.742), (155.098), (386.398), (146.25), (388.75), (10), (0), (1), (1), (0.8), (1), (1), (0.8), (6), (195.25), (388.75), (195.25), (388.75), (188.262), (384.969), (188.246), (382.75), (187.383), (379.688), (193.25), (375.75), (193.25), (375.75), (193.25), (375.75), (196.625), (370.559), (197.25), (372.746), (197.941), (375.836), (196.238), (388.379), (195.25), (388.75), (10), (0.55), (0), (0), (0), (0), (0), (0), (6), (195.25), (388.75), (195.25), (388.75), (188.262), (384.969), (188.246), (382.75), (187.383), (379.688), (193.25), (375.75), (193.25), (375.75), (193.25), (375.75), (196.625), (370.559), (197.25), (372.746), (197.941), (375.836), (196.238), (388.379), (195.25), (388.75), (10), (0), (1), (1), (0.8), (1), (1), (0.8), (5), (154.246), (382.75), (154.242), (382.75), (161.832), (370.5), (162.25), (382.75), (162.25), (382.75), (162.684), (384.215), (160.246), (383.746), (154.066), (384.324), (155.738), (388.836), (154.246), (382.75), (10), (0.55), (0), (0), (0), (0), (0), (0), (5), (154.246), (382.75), (154.242), (382.75), (161.832), (370.5), (162.25), (382.75), (162.25), (382.75), (162.684), (384.215), (160.246), (383.746), (154.066), (384.324), (155.738), (388.836), (154.246), (382.75), (10), (0), (1), (1), (0.8), (1), (1), (0.8), (5), (162.25), (382.75), (162.25), (382.75), (170.734), (370.227), (170.246), (382.75), (170.242), (382.75), (170.043), (383), (168.25), (382.75), (162.891), (383.625), (163.27), (388.594), (162.25), (382.75), (10), (0.55), (0), (0), (0), (0), (0), (0), (5), (162.25), (382.75), (162.25), (382.75), (170.734), (370.227), (170.246), (382.75), (170.242), (382.75), (170.043), (383), (168.25), (382.75), (162.891), (383.625), (163.27), (388.594), (162.25), (382.75), (10), (0), (1), (1), (0.8), (1), (1), (0.8), (5), (170.246), (382.75), (170.242), (382.75), (178.711), (370.832), (178.246), (381.746), (178.246), (381.746), (178.105), (382.82), (176.246), (382.75), (172.004), (383.93), (171.773), (387.504), (170.246), (382.75), (10), (0.55), (0), (0), (0), (0), (0), (0), (5), (170.246), (382.75), (170.242), (382.75), (178.711), (370.832), (178.246), (381.746), (178.246), (381.746), (178.105), (382.82), (176.246), (382.75), (172.004), (383.93), (171.773), (387.504), (170.246), (382.75), (10), (0), (1), (1), (0.8), (1), (1), (0.8), (5), (177.246), (382.75), (177.246), (382.75), (186.207), (369.719), (186.25), (380.75), (186.25), (380.75), (188.398), (381.992), (186.25), (381.746), (180.078), (383.051), (180.957), (387.953), (177.246), (382.75), (10), (0.55), (0), (0), (0), (0), (0), (0), (5), (177.246), (382.75), (177.246), (382.75), (186.207), (369.719), (186.25), (380.75), (186.25), (380.75), (188.398), (381.992), (186.25), (381.746), (180.078), (383.051), (180.957), (387.953), (177.246), (382.75), (10), (0), (0.9), (0.9), (0.7), (0.9), (0.9), (0.7), (6), (137.246), (378.75), (129.25), (379.746), (126.441), (385.738), (124.25), (392.746), (124.25), (392.746), (124.25), (392.746), (131.117), (391.402), (145.25), (388.75), (145.25), (388.75), (145.832), (384.672), (147.25), (378.75), (137.246), (378.75), (10), (0), (0.9), (0.9), (0.7), (0.9), (0.9), (0.7), (7), (209.246), (383.746), (207.469), (386.437), (206.02), (388.371), (205.25), (388.75), (201.992), (390.891), (206.547), (390.477), (208.25), (390.746), (208.25), (390.746), (226.02), (390.477), (228.25), (389.75), (228.25), (389.75), (228.668), (387.18), (229.25), (383.746), (229.25), (383.742), (218.32), (385.66), (209.246), (383.746), (10), (0), (0.8), (0.45), (0.15), (0.8), (0.45), (0.15), (10), (268.246), (535.746), (298.758), (531.289), (326.832), (570.492), (329.25), (580.75), (330.703), (591.789), (319.25), (604.75), (319.25), (604.75), (321.023), (608.246), (315.699), (623.734), (310.246), (633.75), (304.082), (644.063), (286.594), (642.992), (267.246), (643.75), (249.875), (645.031), (229.547), (619.379), (228.25), (617.75), (226.641), (615.508), (233.418), (573.398), (235.246), (566.75), (236.32), (560.813), (233.246), (531.75), (233.246), (531.75), (271.082), (541.781), (237.773), (540), (268.246), (535.746), (10), (0), (0.92), (0.56), (0.32), (0.92), (0.56), (0.32), (10), (229.25), (616.746), (227.469), (614.828), (234.121), (573.484), (235.246), (567.75), (236.973), (561.129), (234.246), (532.746), (234.246), (532.746), (270.063), (542.387), (238.398), (540.695), (268.246), (536.75), (298.273), (532.141), (325.836), (570.633), (327.25), (580.75), (329.637), (591.543), (318.25), (604.75), (318.25), (604.75), (320.133), (607.699), (314.906), (622.906), (309.246), (632.75), (303.504), (642.867), (286.332), (641.813), (267.246), (642.746), (250.277), (643.816), (230.32), (618.629), (229.25), (616.746), (10), (0), (0.94), (0.67), (0.49), (0.94), (0.67), (0.49), (10), (229.25), (615.75), (228.297), (614.152), (234.824), (573.574), (236.25), (567.75), (237.625), (561.445), (235.246), (533.746), (235.246), (533.746), (269.371), (543.539), (239.023), (541.391), (268.246), (536.75), (297.793), (532.996), (324.844), (570.773), (326.25), (580.75), (328.574), (591.297), (318.25), (603.746), (318.25), (603.746), (319.246), (607.156), (314.113), (622.078), (308.246), (631.746), (302.922), (641.668), (286.066), (640.637), (267.246), (641.75), (250.684), (642.602), (231.094), (617.883), (229.25), (615.75), (10), (0), (0.96), (0.78), (0.66), (0.96), (0.78), (0.66), (10), (230.25), (615.75), (229.125), (613.473), (235.531), (573.66), (237.25), (567.75), (238.277), (561.762), (235.246), (534.75), (235.246), (534.75), (267.91), (544.25), (239.648), (542.086), (268.246), (537.746), (297.309), (533.852), (323.848), (570.914), (325.25), (580.75), (327.508), (591.051), (317.25), (603.746), (317.25), (603.746), (318.355), (606.609), (313.324), (621.254), (308.246), (630.75), (302.34), (640.473), (285.805), (639.457), (267.246), (640.746), (251.09), (641.387), (231.871), (617.133), (230.25), (615.75), (10), (0), (0.98), (0.89), (0.83), (0.98), (0.89), (0.83), (10), (231.246), (614.746), (229.949), (612.797), (236.234), (573.75), (237.25), (567.75), (238.926), (562.082), (236.25), (534.75), (236.25), (534.75), (266.891), (544.965), (240.273), (542.781), (268.246), (538.75), (296.824), (534.703), (322.855), (571.055), (324.246), (580.75), (326.445), (590.805), (316.25), (602.75), (316.25), (602.75), (317.469), (606.063), (312.531), (620.426), (307.25), (629.746), (301.762), (639.273), (285.543), (638.281), (267.246), (639.75), (251.492), (640.172), (232.645), (616.387), (231.246), (614.746), (10), (0), (1), (1), (1), (1), (1), (1), (10), (268.246), (539.746), (296.34), (535.559), (321.859), (571.199), (323.246), (580.75), (325.379), (590.559), (315.25), (602.75), (315.25), (602.75), (316.578), (605.52), (311.738), (619.598), (306.25), (628.75), (301.18), (638.078), (285.277), (637.102), (267.246), (637.75), (251.898), (638.957), (233.418), (615.637), (232.246), (613.75), (230.777), (612.117), (236.938), (573.84), (238.25), (567.75), (239.578), (562.398), (237.25), (535.746), (237.25), (535.746), (264.988), (545.457), (240.898), (543.477), (268.246), (539.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (6), (319.25), (576.746), (319.25), (576.742), (289.078), (568.559), (276.246), (570.746), (276.246), (570.746), (258.937), (577.578), (249.25), (553.75), (249.25), (553.75), (245.297), (545.68), (243.246), (543.746), (240.898), (541.277), (319.25), (576.746), (319.25), (576.746), (10), (0), (0), (0), (0), (0), (0), (0), (11), (324.246), (579.746), (324.242), (579.746), (291.937), (565.918), (281.25), (566.75), (281.25), (566.75), (262.898), (571.418), (253.246), (555.75), (253.246), (555.75), (244.418), (545.238), (241.25), (543.746), (241.25), (543.742), (240.457), (541.719), (247.246), (545.75), (259.25), (540.75), (259.25), (540.75), (275.219), (529.84), (286.246), (547.75), (286.246), (547.75), (290.18), (559.758), (290.246), (561.746), (290.18), (564.156), (313.5), (570.316), (315.25), (570.746), (317.02), (571.199), (324.277), (575.816), (324.246), (579.746), (10), (0), (0.6), (0.8), (0.2), (0.6), (0.8), (0.2), (6), (271.25), (539.746), (264.141), (539.832), (254.93), (544.086), (255.246), (550.746), (254.93), (557.832), (264.141), (564.723), (271.25), (564.75), (279.258), (564.723), (285.387), (559.152), (285.25), (552.746), (285.387), (545.402), (279.258), (539.832), (271.25), (539.746), (10), (0), (0.4), (0.6), (0), (0.4), (0.6), (0), (6), (267.246), (557.746), (262.383), (557.391), (256.785), (555.738), (257.246), (555.75), (258.559), (561.055), (265.555), (564.723), (271.25), (564.75), (276.422), (564.723), (280.59), (562.547), (283.25), (558.75), (283.25), (558.75), (277.203), (559.598), (267.246), (557.746), (10), (0), (1), (1), (1), (1), (1), (1), (4), (281.25), (558.75), (281.25), (558.75), (276.098), (561.957), (276.246), (559.746), (276.246), (559.746), (280.059), (554.699), (281.25), (558.75), (10), (0), (0), (0), (0), (0), (0), (0), (6), (270.25), (549.75), (267.187), (549.5), (264.961), (551.727), (265.246), (554.746), (264.961), (557.227), (267.187), (559.457), (270.25), (559.746), (272.687), (559.457), (274.918), (557.227), (275.246), (554.746), (274.918), (551.727), (272.687), (549.5), (270.25), (549.75), (10), (0), (0.8), (0.45), (0.15), (0.8), (0.45), (0.15), (15), (155.246), (563.746), (155.246), (563.742), (152.02), (587.477), (154.246), (592.746), (154.242), (592.746), (166.539), (603.316), (166.246), (607.746), (166.246), (607.742), (165.656), (627.078), (164.246), (627.746), (163.02), (628.84), (154.656), (635.438), (148.246), (628.75), (148.242), (628.75), (136.617), (608.598), (137.246), (601.746), (137.246), (599.75), (137.242), (599.75), (129.137), (599.797), (127.246), (597.75), (127.246), (597.75), (126.059), (591.879), (124.25), (591.75), (124.25), (591.75), (121.656), (588.797), (124.25), (585.746), (124.25), (585.742), (121.656), (583.078), (122.246), (578.75), (130.25), (574.746), (130.25), (574.742), (132.656), (558.438), (144.246), (552.746), (149.859), (550.156), (153.34), (557.559), (155.246), (563.746), (10), (0), (1), (1), (1), (1), (1), (1), (15), (154.246), (565.746), (154.242), (565.742), (151.27), (587.172), (153.246), (591.75), (153.242), (591.75), (164.34), (601.426), (164.246), (604.75), (164.242), (604.75), (163.547), (622.809), (162.25), (623.746), (161.172), (624.395), (153.645), (630.336), (147.25), (623.746), (147.25), (623.746), (137.41), (606.18), (138.246), (599.75), (138.246), (597.75), (138.246), (597.75), (130.68), (598.258), (129.25), (596.746), (129.25), (596.742), (127.906), (591.129), (126.246), (590.746), (126.242), (590.746), (123.945), (588.359), (126.246), (585.746), (126.242), (585.742), (123.945), (583.211), (124.25), (579.746), (132.246), (575.75), (132.246), (575.75), (133.848), (561.035), (144.246), (555.75), (149.324), (553.582), (152.457), (560.242), (154.246), (565.746), (10), (0), (0.925), (0.588), (0.363), (0.925), (0.588), (0.363), (15), (164.246), (626.75), (162.645), (627.816), (154.406), (634.16), (148.246), (627.746), (148.242), (627.742), (136.816), (607.992), (137.246), (600.75), (137.246), (598.746), (137.242), (598.742), (129.523), (599.414), (128.25), (597.75), (128.25), (597.75), (126.52), (591.691), (125.25), (591.75), (125.25), (591.75), (122.23), (588.688), (124.25), (585.746), (124.25), (585.742), (122.23), (583.109), (122.246), (578.75), (131.246), (574.746), (131.242), (574.742), (132.953), (559.086), (144.246), (553.75), (149.723), (551.012), (153.117), (558.23), (155.246), (564.75), (155.246), (564.75), (151.832), (587.402), (154.246), (591.75), (154.242), (591.75), (165.988), (602.844), (165.246), (606.75), (165.242), (606.75), (165.129), (626.012), (164.246), (626.75), (10), (0), (0.95), (0.725), (0.575), (0.95), (0.725), (0.575), (15), (163.25), (625.746), (162.27), (626.793), (154.152), (632.887), (148.246), (625.746), (148.242), (625.746), (137.016), (607.387), (138.246), (600.75), (138.246), (598.746), (138.246), (598.742), (129.906), (599.027), (128.25), (596.746), (128.25), (596.742), (126.98), (591.504), (125.25), (590.746), (125.25), (590.746), (122.801), (588.578), (125.25), (585.746), (125.25), (585.742), (122.801), (583.145), (123.25), (578.75), (131.246), (574.746), (131.242), (574.742), (133.254), (559.734), (144.246), (554.746), (149.59), (551.867), (152.898), (558.898), (155.246), (564.75), (155.246), (564.75), (151.645), (587.324), (154.246), (591.75), (154.242), (591.75), (165.438), (602.371), (165.246), (605.746), (165.242), (605.742), (164.602), (624.945), (163.25), (625.746), (10), (0), (0.975), (0.863), (0.788), (0.975), (0.863), (0.788), (15), (163.25), (624.75), (161.895), (625.77), (153.898), (631.609), (148.246), (624.75), (148.242), (624.75), (137.211), (606.781), (138.246), (600.75), (138.246), (597.75), (138.246), (597.75), (130.293), (598.645), (128.25), (596.746), (128.25), (596.742), (127.445), (591.316), (126.246), (590.746), (126.242), (590.746), (123.375), (588.469), (125.25), (585.746), (125.25), (585.742), (123.375), (583.176), (124.25), (578.75), (131.246), (574.746), (131.242), (574.742), (133.551), (560.387), (144.246), (554.746), (149.457), (552.727), (152.68), (559.57), (154.246), (565.746), (154.242), (565.742), (151.457), (587.246), (154.246), (591.75), (154.242), (591.75), (164.887), (601.898), (164.246), (605.746), (164.242), (605.742), (164.074), (623.879), (163.25), (624.75), (10), (0), (1), (1), (1), (1), (1), (1), (15), (154.246), (566.75), (154.242), (566.75), (151.27), (587.172), (153.246), (591.75), (153.242), (591.75), (164.34), (601.426), (164.246), (604.75), (164.242), (604.75), (163.547), (622.809), (162.25), (623.746), (161.523), (624.746), (153.645), (630.336), (147.25), (623.746), (147.25), (623.746), (137.41), (606.18), (138.246), (599.75), (138.246), (597.75), (138.246), (597.75), (130.68), (598.258), (129.25), (596.746), (129.25), (596.742), (127.906), (591.129), (126.246), (590.746), (126.242), (590.746), (123.945), (588.359), (126.246), (585.746), (126.242), (585.742), (123.945), (583.211), (124.25), (579.746), (132.246), (575.75), (132.246), (575.75), (133.848), (561.035), (144.246), (555.75), (149.324), (553.582), (152.457), (560.352), (154.246), (566.75), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (5), (151.25), (572.746), (151.25), (572.742), (127.27), (584.398), (126.246), (585.746), (126.242), (585.742), (136.289), (576.258), (137.246), (576.746), (138.047), (576.258), (151.25), (572.746), (151.25), (572.746), (10), (0), (0), (0), (0), (0), (0), (0), (5), (132.246), (579.746), (132.246), (579.746), (152.457), (576.039), (152.25), (570.746), (152.457), (567.996), (152.191), (553.234), (146.25), (554.746), (137.059), (557.559), (141.02), (573.398), (132.246), (579.746), (10), (0), (0.6), (0.8), (0.2), (0.6), (0.8), (0.2), (5), (141.25), (575.75), (141.25), (575.75), (151.332), (574.195), (152.25), (570.746), (153.117), (569.438), (153.848), (560.301), (148.246), (558.75), (142.832), (558.098), (140.379), (569.34), (141.25), (575.75), (10), (0), (0), (0), (0), (0), (0), (0), (44), (236.25), (528.746), (235.504), (530.93), (236.949), (530.785), (239.25), (531.75), (241.117), (532.039), (254.539), (536.219), (255.246), (538.75), (256.297), (541.938), (271.25), (536.75), (271.25), (536.75), (272.797), (536.219), (277.246), (533.746), (277.246), (533.746), (282.918), (532.039), (290.246), (531.75), (290.246), (531.75), (292.816), (530.5), (296.25), (527.75), (296.25), (527.75), (312.617), (516.199), (326.25), (523.75), (326.25), (523.75), (348.258), (531.379), (341.25), (550.746), (341.25), (550.746), (338.359), (560.199), (342.246), (563.746), (342.246), (563.746), (342.098), (568.117), (350.25), (560.75), (350.25), (560.75), (352.879), (556.457), (354.246), (550.746), (354.246), (550.746), (362.559), (538.637), (359.25), (557.746), (359.25), (557.746), (359.039), (559.316), (355.961), (563.277), (356.246), (564.75), (355.961), (565.918), (354.246), (569.75), (354.246), (569.75), (350.68), (573.398), (353.246), (580.75), (353.246), (580.75), (355.301), (596.277), (353.246), (594.746), (353.246), (594.746), (351.559), (596.277), (341.25), (585.746), (341.25), (585.746), (339.02), (581.539), (332.246), (579.746), (332.246), (579.746), (329.34), (577.797), (325.25), (579.746), (325.25), (579.746), (322.738), (579.777), (316.25), (571.75), (316.25), (571.75), (319.66), (572.297), (322.301), (567.457), (325.25), (566.75), (327.578), (567.02), (329.559), (569.879), (331.246), (570.746), (333.078), (571.199), (336.25), (564.75), (336.25), (564.75), (336.598), (561.957), (330.25), (556.75), (330.25), (556.75), (330), (551.617), (328.25), (553.75), (328.25), (553.75), (324.938), (554.039), (323.621), (549.859), (322.246), (544.746), (321.418), (539.738), (317.25), (539.746), (317.25), (539.746), (315.039), (531.156), (313.246), (534.75), (313.246), (534.75), (313.5), (540.617), (307.25), (533.746), (307.25), (533.746), (305.578), (532.039), (300.246), (534.75), (300.246), (534.75), (293.039), (536.656), (295.25), (538.75), (295.25), (538.75), (297.656), (541.277), (310.246), (538.75), (310.246), (538.75), (312.398), (540.617), (303.25), (544.746), (303.25), (544.746), (302.937), (547), (304.25), (551.75), (304.25), (551.75), (305.359), (555.359), (313.246), (561.746), (313.246), (561.746), (323.18), (562.84), (320.246), (564.75), (320.246), (564.75), (313.277), (570.316), (307.25), (561.746), (307.25), (561.746), (304.477), (555.137), (285.25), (538.75), (285.25), (538.75), (280.059), (534.898), (282.918), (542.379), (278.246), (538.75), (274.117), (534.898), (251.25), (544.746), (251.25), (544.746), (238.738), (546.109), (235.734), (528.793), (232.246), (531.75), (232.246), (531.75), (237.813), (522.855), (236.25), (528.746), (10), (0), (0), (0), (0), (0), (0), (0), (12), (450.25), (711.746), (450.25), (711.746), (422.18), (703.199), (419.246), (682.746), (419.246), (682.742), (416.461), (657.438), (439.25), (637.75), (439.25), (637.75), (439.34), (631.039), (441.246), (627.746), (441.246), (627.742), (439.777), (622.238), (460.246), (630.75), (490.25), (639.75), (490.25), (639.75), (497.418), (642.477), (503.25), (651.746), (508.859), (661.84), (525.578), (682.52), (521.25), (709.75), (521.25), (709.75), (522.938), (722.559), (516.25), (722.746), (516.25), (722.746), (507.098), (724.758), (499.25), (716.75), (499.25), (716.75), (491.699), (712.879), (489.246), (713.746), (450.25), (711.746), (10), (0), (0), (0), (0), (0), (0), (0), (8), (510.25), (712.75), (510.25), (712.75), (512.73), (722.91), (507.25), (717.746), (507.25), (717.742), (499.664), (711.293), (491.246), (711.746), (491.242), (711.746), (475.465), (708.875), (470.25), (694.75), (470.25), (694.75), (466.266), (664.828), (475.25), (658.746), (475.25), (658.746), (480.305), (650.309), (488.25), (657.75), (495.793), (664.828), (512.844), (698.082), (510.25), (712.75), (10), (0), (0.2), (0.2), (0.2), (0.2), (0.2), (0.2), (8), (510.25), (712.75), (510.25), (712.75), (512.309), (722.313), (507.25), (716.75), (507.25), (716.75), (499.48), (710.906), (491.246), (710.746), (491.242), (710.742), (475.719), (708.531), (471.246), (694.75), (471.242), (694.75), (466.691), (665.289), (475.25), (658.746), (475.25), (658.746), (480.469), (651.031), (488.25), (657.75), (495.68), (665.289), (512.387), (697.961), (510.25), (712.75), (10), (0), (0.4), (0.4), (0.4), (0.4), (0.4), (0.4), (8), (509.246), (712.75), (509.246), (712.75), (511.887), (721.715), (507.25), (716.75), (507.25), (716.75), (499.293), (710.52), (491.246), (710.746), (491.242), (710.742), (475.973), (708.188), (471.246), (693.746), (471.242), (693.742), (467.113), (665.746), (475.25), (659.75), (475.25), (659.75), (480.637), (651.754), (488.25), (658.746), (495.563), (665.746), (511.93), (697.84), (509.246), (712.75), (10), (0), (0.6), (0.6), (0.6), (0.6), (0.6), (0.6), (8), (509.246), (711.746), (509.246), (711.746), (511.465), (721.113), (506.246), (715.746), (506.242), (715.742), (499.109), (710.133), (491.246), (709.75), (491.242), (709.75), (476.23), (707.844), (471.246), (693.746), (471.242), (693.742), (467.535), (666.203), (476.246), (660.746), (476.246), (660.742), (480.805), (652.477), (488.25), (659.75), (495.449), (666.203), (511.477), (697.719), (509.246), (711.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (8), (509.246), (711.746), (509.246), (711.746), (511.043), (720.516), (506.246), (715.746), (506.242), (715.742), (498.926), (709.746), (491.246), (709.75), (491.242), (709.75), (476.484), (707.5), (472.25), (693.746), (472.25), (693.742), (467.957), (666.66), (476.246), (660.746), (476.246), (660.742), (480.973), (653.195), (488.25), (659.75), (495.332), (666.66), (511.02), (697.598), (509.246), (711.746), (10), (0), (1), (1), (1), (1), (1), (1), (8), (508.25), (710.746), (508.25), (710.742), (510.621), (719.918), (506.246), (714.75), (506.242), (714.75), (498.738), (709.359), (491.246), (709.75), (491.242), (709.75), (476.738), (707.156), (472.25), (693.746), (472.25), (693.742), (468.379), (667.117), (476.246), (661.75), (476.246), (661.75), (481.141), (653.918), (488.25), (660.746), (495.219), (667.117), (510.563), (697.477), (508.25), (710.746), (10), (0), (0.6), (0.15), (0), (0.6), (0.15), (0), (24), (275.246), (487.75), (275.246), (487.75), (253.219), (508.719), (244.246), (509.75), (244.246), (509.75), (206.578), (514), (190.246), (493.746), (190.246), (493.742), (209.656), (516.637), (240.25), (510.746), (240.25), (510.742), (216.258), (515.316), (202.246), (511.746), (202.242), (511.746), (184.137), (511.797), (173.25), (496.75), (170.246), (490.75), (170.242), (490.75), (174.898), (507.398), (195.25), (513.746), (195.25), (513.746), (220.219), (519.277), (232.246), (513.746), (232.246), (513.746), (208.34), (521.477), (197.25), (519.746), (197.25), (519.742), (163.898), (521.918), (150.246), (492.75), (150.246), (492.75), (154.219), (508.719), (170.246), (516.75), (170.242), (516.75), (185.457), (526.316), (208.25), (522.746), (208.25), (522.746), (223.738), (519.719), (229.25), (516.75), (235.18), (514.438), (233.859), (517.52), (224.246), (522.746), (224.242), (522.746), (218.457), (533.797), (203.25), (533.746), (203.25), (533.746), (155.977), (529.398), (144.246), (515.746), (144.246), (515.742), (159.5), (528.52), (171.246), (531.75), (171.246), (531.75), (195.578), (540.398), (205.25), (539.746), (205.25), (539.742), (232.098), (538.418), (240.25), (542.75), (240.25), (542.75), (228.137), (537.316), (231.246), (533.746), (235.18), (530.277), (242.656), (521.918), (242.246), (520.75), (242.656), (519.277), (269.277), (494.969), (273.25), (489.746), (275.246), (487.75), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (5), (428.25), (273.746), (428.25), (273.742), (410.848), (314.348), (397.246), (324.746), (397.246), (324.746), (425.699), (307.199), (429.25), (287.75), (429.25), (287.75), (429.547), (276.398), (428.25), (273.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (7), (479.25), (265.75), (479.25), (265.75), (450.449), (326.449), (430.246), (352.746), (430.246), (352.742), (477.949), (311.598), (483.25), (282.746), (484.246), (276.75), (480.246), (278.75), (480.242), (278.75), (480.148), (269.25), (479.25), (265.75), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (5), (542.246), (319.746), (542.246), (319.742), (473), (384.75), (471.246), (387.746), (471.242), (387.742), (537.898), (314.898), (541.25), (306.746), (541.25), (306.742), (539), (316.547), (542.246), (319.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (6), (334.246), (271.746), (334.246), (271.746), (355.848), (328.648), (377.246), (303.75), (377.246), (303.75), (393.25), (292.898), (392.25), (289.75), (392.25), (289.75), (388.297), (296.75), (368.246), (295.746), (368.242), (295.742), (347.598), (299.5), (334.246), (271.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (5), (544.246), (411.746), (544.246), (411.742), (494.449), (443.047), (486.25), (444.746), (473.211), (447.297), (540.648), (412.797), (546.246), (400.75), (546.242), (400.75), (548.348), (404), (544.246), (411.746), (10), (0), (0), (0), (0), (0), (0), (0), (63), (378.246), (294.75), (378.246), (294.75), (400.621), (296.637), (408.246), (303.75), (413.246), (299.746), (432.246), (342.75), (436.25), (336.75), (436.25), (336.75), (452.098), (352.957), (451.25), (361.746), (450.34), (370.559), (465.246), (354.746), (465.246), (354.746), (465.246), (354.742), (464.418), (367.918), (472.25), (360.75), (472.25), (360.75), (469.699), (377.598), (479.25), (368.746), (479.25), (368.746), (467.348), (401.969), (492.25), (373.75), (498.301), (366.598), (493.246), (373.75), (493.246), (373.75), (493.242), (373.75), (464.859), (426.879), (488.25), (410.75), (488.25), (410.75), (490.82), (436.117), (489.246), (440.746), (488.18), (445.797), (485.98), (470.438), (480.246), (475.746), (475.418), (481.879), (481.141), (483.637), (487.246), (477.746), (487.246), (477.742), (474.98), (504.316), (489.246), (490.75), (489.246), (490.75), (485.539), (507.84), (480.246), (510.746), (480.242), (510.742), (474.539), (529.84), (491.246), (517.746), (491.242), (517.742), (486.418), (531.598), (483.25), (534.75), (483.25), (534.75), (470.141), (565.477), (478.246), (559.746), (483.25), (555.75), (483.25), (555.75), (475.418), (571.637), (482.246), (566.75), (489.5), (561.957), (489.246), (562.75), (489.246), (562.75), (489.246), (562.75), (466.18), (598.918), (488.25), (579.746), (488.25), (579.746), (479.645), (594.867), (476.246), (602.75), (476.246), (602.75), (455.18), (624.879), (471.246), (617.75), (476.246), (615.75), (476.246), (615.75), (466.621), (627.078), (458.246), (628.75), (449.02), (630.598), (460.461), (637.637), (467.246), (635.75), (474.539), (633.238), (491.246), (624.75), (491.246), (624.75), (491.242), (624.75), (505.777), (604.199), (510.25), (603.746), (510.25), (603.746), (488.18), (612.117), (495.246), (603.746), (495.242), (603.746), (510.621), (587.918), (502.246), (588.75), (502.242), (588.75), (496.098), (580.438), (501.25), (570.746), (501.25), (570.746), (481.074), (590.988), (497.25), (562.75), (505.25), (544.746), (505.25), (544.746), (478.059), (572.078), (490.25), (547.75), (490.25), (547.75), (509.301), (521.918), (511.246), (521.746), (513.699), (521.039), (518.25), (511.746), (518.25), (511.746), (513.246), (513.746), (519.25), (503.75), (519.25), (503.75), (507.098), (517.078), (513.246), (502.746), (520.246), (486.746), (520.246), (486.742), (497.418), (510.918), (512.25), (478.746), (512.25), (478.746), (494.34), (484.078), (504.246), (464.746), (504.242), (464.742), (502.258), (447.559), (502.246), (441.75), (503.141), (436.117), (504.461), (404.879), (499.25), (395.75), (494.777), (387.277), (506.219), (366.156), (508.25), (361.746), (510.621), (357.355), (514.578), (345.477), (505.25), (355.75), (495.219), (365.719), (500.059), (359.559), (502.246), (349.75), (504.461), (340.195), (511.059), (323.035), (510.25), (316.75), (510.25), (316.75), (508.859), (315.559), (505.25), (319.746), (505.25), (319.742), (489.059), (344.598), (491.246), (328.746), (491.242), (328.742), (489.5), (319.957), (486.25), (310.746), (486.25), (310.742), (482.461), (298.398), (482.246), (307.75), (482.242), (307.75), (478.938), (326.559), (476.246), (317.746), (472.777), (309.836), (468.82), (303.238), (465.246), (300.75), (462.66), (297.957), (456.938), (323.035), (455.25), (311.75), (455.25), (311.75), (442.418), (325.238), (437.25), (306.746), (424.246), (288.746), (424.242), (288.742), (423.938), (302.797), (422.246), (295.746), (422.246), (295.742), (389.621), (289.598), (378.246), (294.75), (10), (0), (0), (0), (0), (0), (0), (0), (34), (340.25), (686.746), (340.25), (686.742), (327.578), (695.719), (323.246), (695.746), (318.777), (694.84), (353.539), (704.957), (399.246), (674.75), (399.246), (674.75), (404.141), (671.52), (408.246), (671.746), (408.246), (671.742), (411.621), (669.316), (408.246), (665.75), (408.246), (665.75), (398.859), (654.797), (411.246), (642.746), (411.246), (642.742), (431.418), (635), (425.25), (644.75), (425.25), (644.75), (437.141), (640.277), (440.25), (635.75), (442.418), (631.477), (441.246), (635.75), (441.246), (635.75), (441.246), (635.75), (434.059), (643.797), (427.25), (649.746), (427.25), (649.742), (421.738), (651.719), (418.25), (660.746), (415.578), (670.199), (412.938), (681.199), (418.25), (684.746), (418.25), (684.742), (413.379), (679.879), (414.25), (684.746), (415.141), (688.68), (419.098), (692.637), (421.246), (692.75), (422.621), (693.52), (440.66), (710.898), (448.25), (711.746), (448.25), (711.746), (438.02), (709.797), (434.246), (710.746), (431.418), (712), (402.16), (724.539), (395.25), (725.75), (395.25), (725.75), (377.078), (733.117), (390.246), (730.746), (390.242), (730.742), (429.66), (726.738), (449.25), (711.746), (449.25), (711.746), (441.758), (721.457), (421.246), (728.746), (421.246), (728.742), (397.098), (743.02), (358.25), (737.746), (358.25), (737.742), (338.801), (734), (330.25), (731.75), (330.25), (731.75), (327.359), (732.68), (326.25), (732.746), (326.039), (733.559), (313.059), (743.457), (282.25), (735.746), (282.25), (735.746), (264), (730.699), (254.246), (725.75), (254.246), (725.75), (237.816), (724.098), (234.246), (720.75), (234.246), (720.75), (213.398), (704.52), (211.246), (703.75), (209), (702.758), (196.457), (694.398), (195.25), (693.746), (195.25), (693.742), (222.637), (701.219), (225.25), (703.75), (227.918), (706.5), (247.059), (709.359), (249.25), (707.75), (252.34), (706.277), (261.578), (706.938), (251.25), (706.746), (251.25), (706.742), (334.18), (690), (335.246), (687.75), (335.938), (685.598), (340.25), (686.746), (340.25), (686.746), (10), (0), (0.8), (0.45), (0.15), (0.8), (0.45), (0.15), (13), (419.246), (696.75), (419.246), (696.75), (407.66), (705.18), (405.25), (704.746), (403.258), (705.18), (389.621), (716.398), (385.25), (715.746), (380.379), (715.52), (366.961), (726.52), (337.25), (717.746), (337.25), (717.742), (336.16), (719.699), (340.25), (720.75), (340.25), (720.75), (347.16), (723), (347.25), (723.75), (347.25), (723.75), (369.82), (728.277), (377.246), (724.746), (377.246), (724.746), (387.859), (721.457), (394.25), (714.75), (394.25), (714.75), (407), (711.117), (410.246), (711.746), (410.246), (711.746), (420.199), (709.797), (420.246), (707.75), (420.246), (707.75), (427.02), (704.52), (425.25), (701.75), (425.25), (701.75), (425.48), (699.898), (419.246), (696.75), (10), (0), (0.8), (0.45), (0.15), (0.8), (0.45), (0.15), (38), (405.25), (699.746), (406.047), (698.664), (407.168), (698.555), (408.246), (697.746), (408.094), (697.32), (407.773), (696.961), (407.25), (696.75), (406.281), (696.504), (405.121), (697.133), (404.25), (696.75), (403.422), (696.258), (402.715), (696.457), (402.246), (696.75), (400.313), (697.105), (398.301), (697.137), (396.25), (696.75), (394.254), (697.621), (391.66), (696.977), (389.246), (697.746), (389.309), (698.109), (389.063), (697.727), (389.246), (697.746), (385.629), (699.016), (381.512), (698.707), (379.246), (700.746), (376.168), (701.672), (373.574), (702.18), (371.25), (702.746), (368.906), (703.488), (367.355), (704.574), (365.246), (705.75), (364.059), (706.27), (362.457), (706.844), (361.25), (707.75), (358.719), (707.75), (356.703), (707.625), (354.246), (707.75), (354.52), (708.227), (354.309), (707.848), (354.246), (707.75), (353.863), (707.996), (353.543), (708.637), (353.246), (708.746), (351.508), (708.004), (349.871), (709.074), (348.25), (708.746), (346.742), (710.043), (344.844), (709.773), (343.246), (710.746), (339.883), (711.195), (336.414), (709.797), (333.246), (710.746), (337.602), (712.926), (342.758), (711.57), (347.25), (713.746), (349.789), (715.148), (352.715), (713.938), (355.246), (714.75), (356.078), (714.934), (356.84), (715.152), (357.246), (714.75), (357.426), (714.566), (357.625), (714.828), (357.246), (714.75), (360.387), (713.527), (362.934), (712.125), (365.246), (710.746), (366.039), (710.793), (366.621), (711.047), (367.246), (710.746), (368.57), (709.488), (370.711), (709.602), (372.25), (708.746), (374.105), (708.809), (376.078), (708.391), (378.246), (708.746), (378.066), (709.109), (378.324), (708.734), (378.246), (708.746), (379.602), (709.582), (380.875), (709.281), (382.25), (708.746), (382.227), (708.82), (382.957), (708.551), (383.25), (708.746), (384.531), (708.164), (385.473), (707.637), (387.246), (707.75), (386.895), (707.414), (387.098), (707.789), (387.246), (707.75), (388.41), (707.277), (389.559), (707.34), (390.246), (705.75), (390.426), (706.207), (390.609), (706.469), (390.246), (706.746), (391.828), (706.066), (392.543), (705.238), (394.25), (704.746), (394.289), (704.855), (394.961), (704.168), (395.25), (703.75), (398.227), (703.168), (400.254), (701.488), (402.246), (700.746), (403.5), (700.16), (404.465), (699.902), (405.25), (699.746), (10), (0), (0.8), (0.45), (0.15), (0.8), (0.45), (0.15), (23), (321.246), (714.75), (318.094), (716.91), (315.488), (718.125), (313.246), (719.746), (312.605), (720.234), (312.207), (720.051), (312.246), (719.746), (310.879), (720.852), (309.902), (721.492), (309.246), (722.746), (308.227), (722.68), (307.324), (722.664), (307.25), (722.746), (303.969), (724.371), (301.074), (724.984), (298.246), (726.746), (299.066), (727), (300.301), (726.73), (301.246), (727.75), (301.172), (727.309), (301.434), (726.996), (302.246), (726.746), (303.668), (728.203), (305.703), (728.371), (307.25), (728.746), (309.422), (728.172), (311.313), (727.836), (313.246), (727.75), (313.605), (727.484), (313.824), (726.91), (314.25), (726.746), (316.629), (726.074), (319.258), (726.648), (321.246), (725.75), (323.336), (725.035), (325.066), (724.133), (326.25), (722.746), (326.703), (722.441), (326.348), (722.113), (326.25), (721.746), (326.465), (722.02), (326.766), (721.793), (327.25), (721.746), (326.98), (721.184), (326.98), (720.852), (327.25), (720.75), (326.766), (720.246), (326.457), (720.133), (326.25), (719.746), (324.5), (719.871), (326.449), (721.387), (325.25), (720.75), (324.277), (720), (325.098), (718.453), (324.246), (716.75), (323.973), (717.27), (323.719), (717.512), (324.246), (717.746), (324.098), (717.363), (323.434), (717.043), (323.246), (716.75), (322.824), (715.898), (321.836), (714.344), (321.246), (714.75), (10), (0), (0.8), (0.45), (0.15), (0.8), (0.45), (0.15), (25), (285.25), (706.746), (281.645), (707.801), (278.293), (707.676), (275.246), (708.746), (274.898), (709.109), (274.656), (708.727), (274.25), (708.746), (273.082), (709.41), (272.07), (710.473), (271.25), (711.746), (269.883), (712.602), (268.059), (712.176), (266.246), (712.75), (266.301), (712.848), (266.078), (713.41), (266.246), (713.746), (264.406), (713.625), (263.387), (714.672), (262.25), (715.746), (264.809), (716.172), (267.461), (716.137), (270.25), (716.75), (270.293), (716.582), (270.453), (716.227), (270.25), (715.746), (270.746), (716.227), (270.891), (716.469), (271.25), (716.75), (271.254), (716.309), (271.586), (715.953), (272.25), (715.746), (272.469), (716.824), (273.082), (716.617), (273.25), (716.75), (273.836), (716.563), (273.973), (716.227), (274.25), (715.746), (274.27), (716.227), (274.41), (716.57), (274.25), (716.75), (274.707), (716.57), (274.852), (716.227), (275.246), (715.746), (275.148), (716.227), (275.289), (716.469), (275.246), (716.75), (276.199), (715.758), (277.172), (716.367), (278.246), (715.746), (279.219), (715.922), (279.512), (714.656), (280.246), (714.75), (285.879), (712.895), (290.43), (710.535), (295.25), (707.75), (295.566), (708.078), (295.801), (707.805), (295.25), (707.75), (295.973), (707.379), (296.316), (707.477), (296.25), (707.75), (297.688), (706.523), (298.832), (705.922), (299.246), (704.746), (299.84), (704.34), (299.477), (703.895), (299.246), (703.75), (294.348), (705.047), (289.941), (705.715), (285.25), (706.746), (10), (0), (0.8), (0.45), (0.15), (0.8), (0.45), (0.15), (10), (270.25), (658.746), (268.117), (659.637), (267.477), (661.871), (266.246), (663.75), (266), (664.215), (266.301), (664.563), (266.246), (664.746), (267.266), (664.832), (267.863), (664.309), (268.246), (663.75), (270.234), (663.137), (271.922), (661.77), (274.25), (661.75), (276.309), (659.16), (280.992), (658.738), (281.25), (654.75), (281), (654.074), (279.43), (655.082), (279.246), (653.746), (276.262), (655.242), (273.633), (655.129), (271.25), (656.746), (270.336), (657.16), (270.699), (657.66), (270.25), (658.746), (10), (0), (0.8), (0.45), (0.15), (0.8), (0.45), (0.15), (6), (239.25), (715.746), (239.727), (716.129), (247.461), (715.871), (247.246), (715.746), (247.391), (715.406), (238.891), (714.254), (238.25), (714.75), (238.309), (714.523), (230.047), (711.852), (230.25), (711.746), (230.191), (712.148), (239.285), (716.129), (239.25), (715.746), (10), (0), (0), (0), (0), (0), (0), (0), (80), (256.246), (705.75), (256.246), (705.75), (240.238), (703.418), (235.246), (701.75), (230.559), (700.777), (210.098), (692.418), (207.25), (689.746), (207.25), (689.746), (192.059), (684.277), (173.25), (662.746), (173.25), (662.742), (181.719), (666.02), (184.25), (668.75), (184.25), (668.75), (199.098), (682.957), (199.246), (679.75), (199.246), (679.75), (212.297), (689.559), (211.246), (686.746), (211.246), (686.742), (238.477), (699.457), (236.25), (695.746), (236.25), (695.742), (260.039), (701), (259.25), (698.75), (259.25), (698.75), (279.617), (693.957), (276.246), (693.746), (276.246), (693.742), (270.156), (692.418), (277.246), (688.746), (277.246), (688.742), (273.457), (683.617), (267.246), (687.75), (261.578), (692.418), (264.879), (690), (259.25), (688.746), (259.25), (688.742), (256.52), (688.02), (251.25), (692.75), (251.25), (692.75), (245.297), (697.477), (235.246), (693.746), (235.242), (693.742), (201.957), (679.656), (200.246), (678.746), (200.246), (678.746), (195.797), (675.918), (193.25), (671.746), (193.25), (671.742), (186.777), (667.117), (183.25), (665.75), (183.25), (665.75), (169.398), (652.816), (168.25), (651.746), (168.25), (651.742), (164.34), (645.559), (163.25), (644.75), (163.25), (644.75), (170.5), (649.297), (172.25), (651.746), (172.25), (651.742), (188.098), (662.5), (194.25), (663.75), (194.25), (663.75), (198.879), (666.68), (200.246), (667.746), (200.246), (667.746), (215.598), (678.34), (220.246), (678.746), (220.246), (678.746), (230.34), (672.617), (233.246), (680.746), (233.246), (680.746), (239.359), (682.297), (245.246), (680.746), (245.246), (680.746), (249.039), (683.84), (248.25), (686.746), (248.25), (686.742), (249.918), (688.238), (251.25), (683.75), (251.25), (683.75), (254.758), (680.098), (260.25), (682.746), (260.25), (682.742), (264.437), (682.52), (262.25), (679.75), (262.25), (679.75), (257.398), (675.699), (244.246), (675.746), (244.246), (675.742), (230.777), (674.816), (212.246), (666.75), (212.246), (666.75), (179.957), (655.02), (170.246), (643.75), (170.242), (643.75), (162.797), (633.898), (157.25), (632.75), (157.25), (632.75), (150.477), (631.699), (144.246), (623.746), (144.246), (623.746), (154.656), (629.938), (164.246), (629.746), (164.242), (629.742), (168.957), (632.578), (165.246), (628.75), (165.242), (628.75), (160.816), (620.258), (162.25), (614.746), (162.25), (614.746), (161.918), (608.598), (161.246), (606.75), (161.246), (606.75), (152.457), (592.758), (152.25), (589.75), (152.457), (587.477), (153.777), (576.699), (154.246), (575.75), (154.656), (575.379), (153.117), (577.797), (157.25), (574.746), (161.477), (572.52), (164.559), (570.758), (165.246), (567.75), (166.316), (564.598), (163.238), (573.617), (163.25), (575.75), (162.797), (577.578), (158.18), (585.5), (159.246), (587.746), (159.242), (587.742), (160.156), (587.039), (161.246), (585.746), (161.246), (585.742), (160.379), (586.156), (161.246), (589.75), (161.246), (589.75), (161.918), (595.84), (163.25), (599.75), (165), (602.879), (167.199), (607.059), (167.25), (607.746), (168.078), (608.816), (168.078), (615.199), (169.25), (612.746), (173.25), (609.746), (173.25), (609.742), (170.277), (612.34), (172.25), (614.746), (172.25), (614.746), (171.598), (620.918), (173.25), (623.746), (173.25), (623.746), (181.277), (633.02), (183.25), (633.75), (184.797), (635.219), (183.25), (634.746), (183.25), (634.746), (183.25), (634.746), (189.859), (639.398), (183.25), (637.75), (183.25), (637.75), (179.078), (635.879), (176.246), (635.75), (176.246), (635.75), (167.418), (633.68), (172.25), (638.746), (176.219), (642.918), (187.219), (648.859), (191.246), (648.75), (192.25), (646.75), (204.25), (649.746), (203.25), (648.75), (203.25), (648.75), (203.059), (648.859), (207.25), (649.746), (212.297), (649.738), (218.68), (648.199), (220.246), (649.746), (221.758), (652.156), (225.5), (653.258), (225.25), (651.746), (224.617), (650.18), (224.246), (647.746), (224.246), (647.746), (224.242), (647.746), (229.898), (654.359), (229.25), (651.746), (228.578), (649.52), (219.559), (643.797), (218.25), (636.746), (229.25), (645.746), (233.246), (649.746), (233.246), (649.742), (237.379), (646.879), (237.25), (648.75), (237.816), (650.398), (242.879), (656.777), (244.246), (656.746), (245.52), (656.34), (247.719), (659.418), (247.246), (656.746), (247.277), (653.699), (255.246), (647.746), (255.246), (647.746), (255.246), (647.746), (259.156), (649.738), (260.25), (647.746), (262.238), (646.656), (267.246), (669.746), (267.246), (669.746), (294.25), (681.75), (342.246), (685.75), (323.246), (692.75), (256.246), (705.75), (10), (2.2), (0.3), (0), (0), (0.3), (0), (0), (3), (276.246), (486.746), (276.246), (486.742), (260.039), (504.977), (251.25), (507.75), (251.25), (507.75), (236.059), (515.316), (209.246), (506.746), (10), (2.2), (0.3), (0), (0), (0.3), (0), (0), (3), (247.246), (509.75), (247.242), (509.75), (219.559), (518.18), (202.246), (513.746), (202.242), (513.746), (182.379), (511.359), (173.25), (495.746), (10), (2.2), (0.3), (0), (0), (0.3), (0), (0), (4), (243.246), (510.746), (243.246), (510.742), (224.617), (518.617), (208.25), (520.75), (208.25), (520.75), (190.078), (523.898), (172.25), (515.746), (172.25), (515.742), (158.398), (509.379), (152.25), (497.746), (10), (2.2), (0.3), (0), (0), (0.3), (0), (0), (4), (244.246), (510.746), (244.246), (510.742), (227.477), (522.359), (226.25), (523.75), (226.25), (523.75), (218.68), (536), (204.25), (536.75), (204.25), (536.75), (180.84), (535.559), (162.25), (526.746), (10), (0), (0), (0), (0), (0), (0), (0), (169), (243.246), (519.746), (244.68), (518.543), (274.25), (486.746), (274.25), (486.746), (313.059), (446.457), (282.25), (483.75), (282.25), (483.75), (273.898), (489.359), (264.246), (509.75), (264.246), (509.75), (262.457), (513.117), (279.246), (501.75), (279.246), (501.75), (283.578), (501.238), (298.246), (479.75), (298.246), (479.75), (291.059), (482.758), (296.25), (474.75), (296.25), (474.75), (299.418), (472.637), (322.246), (455.746), (322.246), (455.746), (325.82), (451.078), (330.25), (449.746), (330.25), (449.746), (345.621), (455.035), (338.25), (440.746), (338.25), (440.746), (341.219), (433.035), (347.25), (445.746), (347.25), (445.746), (359.699), (464.277), (341.25), (461.75), (341.25), (461.75), (308.656), (458.559), (301.246), (475.746), (301.246), (475.746), (298.539), (478.797), (308.246), (475.746), (308.246), (475.746), (317.461), (473.957), (300.246), (489.746), (300.246), (489.746), (302.937), (489.797), (313.246), (482.746), (313.246), (482.746), (324.5), (472.199), (326.25), (474.75), (326.25), (474.75), (346.5), (484.078), (358.25), (475.746), (358.25), (475.746), (360.141), (473.957), (353.98), (466.477), (355.246), (460.746), (357.5), (455.035), (363.25), (441.75), (363.25), (441.75), (360.141), (439.637), (360.25), (427.746), (360.25), (427.746), (379.059), (402.238), (368.246), (404.75), (368.246), (404.75), (351.34), (404.879), (367.246), (396.746), (367.246), (396.746), (371.141), (394.316), (381.25), (386.75), (381.25), (386.75), (377.738), (387.719), (376.246), (381.746), (376.246), (381.746), (381.258), (377.598), (378.246), (372.746), (378.246), (372.746), (371.578), (370.996), (370.25), (366.75), (370.25), (366.75), (377.738), (357.797), (366.246), (357.746), (366.246), (357.746), (370.699), (352.516), (365.246), (339.746), (365.246), (339.746), (360.141), (339.316), (353.246), (332.746), (353.246), (332.746), (355.738), (327.879), (344.246), (321.746), (344.246), (321.746), (335.059), (319.957), (338.25), (312.75), (338.25), (312.75), (329.34), (305.879), (326.25), (288.746), (326.25), (288.746), (325.82), (276.836), (323.18), (273.316), (329.25), (275.746), (334.621), (277.719), (333.246), (291.746), (333.246), (291.746), (328.461), (308.516), (375.246), (325.75), (375.246), (325.75), (379.938), (327.879), (381.25), (333.75), (381.25), (333.75), (383.02), (333.156), (392.25), (324.746), (392.25), (324.746), (401.059), (312.477), (401.246), (322.75), (401.246), (322.75), (402.82), (326.559), (401.246), (332.746), (401.246), (332.746), (407.66), (356.918), (392.25), (363.746), (392.25), (363.746), (381.258), (400.918), (396.25), (391.75), (396.25), (391.75), (399.738), (385.516), (411.246), (379.746), (411.246), (379.746), (415.25), (382.75), (413.82), (387.719), (423.246), (394.746), (423.246), (394.746), (426.141), (387.277), (432.246), (395.75), (432.246), (395.75), (436.699), (422.918), (450.25), (406.75), (450.25), (406.75), (454.738), (405.758), (456.246), (412.746), (456.246), (412.746), (460.02), (424.676), (456.246), (439.75), (456.246), (439.75), (460.02), (440.078), (470.25), (433.746), (470.25), (433.746), (473.66), (437.438), (463.539), (455.918), (468.25), (453.746), (472.34), (450.637), (477.25), (448.75), (477.25), (448.75), (478.059), (451.078), (467.246), (464.746), (467.246), (464.746), (462.219), (467.797), (456.246), (489.746), (456.246), (489.746), (464.418), (486.277), (453.25), (502.746), (453.25), (502.746), (453.418), (506.52), (460.246), (518.75), (460.246), (518.75), (459.141), (526.316), (460.246), (525.75), (460.246), (525.75), (463.098), (524.559), (471.898), (522.797), (464.25), (529.75), (456.938), (536.879), (465.246), (541.746), (465.246), (541.746), (470.141), (545.238), (455.25), (544.746), (455.25), (544.746), (449.461), (549.637), (450.25), (553.75), (450.25), (553.75), (458.699), (551.84), (442.859), (567.68), (440.25), (571.75), (437.578), (575.598), (448.25), (581.746), (448.25), (581.746), (462.66), (585.277), (450.25), (588.75), (450.25), (588.75), (428.34), (588.359), (440.25), (599.75), (440.25), (599.75), (446.82), (599.797), (445.246), (602.75), (445.246), (602.75), (439.34), (603.758), (429.25), (610.75), (429.25), (610.75), (424.379), (614.758), (428.25), (613.75), (428.25), (613.75), (446.82), (612.559), (415.25), (624.75), (415.25), (624.75), (423.938), (624.879), (404.25), (636.746), (404.25), (636.746), (401.938), (638.078), (398.246), (646.75), (398.246), (646.75), (391.82), (652.156), (386.246), (659.75), (386.246), (659.75), (386.098), (664.477), (381.25), (669.746), (381.25), (669.746), (368.059), (684.719), (362.25), (684.746), (362.25), (684.746), (345.621), (688.238), (340.25), (687.75), (340.25), (687.75), (282.25), (682.746), (252.777), (668.438), (261.25), (645.746), (261.25), (645.746), (268.398), (636.098), (278.246), (640.746), (278.246), (640.746), (283.578), (647.098), (296.25), (644.75), (296.25), (644.75), (318.777), (641.156), (316.25), (644.75), (316.25), (644.75), (313.277), (650.18), (295.457), (657), (295.25), (657.75), (295.02), (658.316), (285.25), (661.75), (285.25), (661.75), (282.039), (663.379), (277.246), (673.746), (277.246), (673.746), (273.68), (677.238), (291.246), (670.75), (291.246), (670.75), (289.738), (669.758), (298.246), (665.75), (298.246), (665.75), (317.02), (666.457), (328.25), (654.75), (328.25), (654.75), (340.559), (636.316), (341.25), (645.746), (341.25), (645.746), (343.859), (655.68), (331.246), (678.746), (331.246), (678.746), (331.32), (681.199), (340.25), (673.746), (340.25), (673.746), (341.879), (676.137), (343.246), (669.746), (343.246), (669.746), (342.98), (667.117), (347.25), (658.746), (347.25), (658.746), (350.238), (644.02), (354.246), (651.746), (354.246), (651.746), (359.25), (641.75), (360.801), (638.957), (354.246), (630.75), (354.246), (630.75), (353.98), (627.52), (354.859), (627.738), (348.25), (619.75), (342.539), (611.02), (346.246), (605.746), (346.246), (605.746), (344.738), (598.918), (354.246), (599.75), (354.246), (599.75), (357.277), (596.938), (361.25), (596.746), (361.25), (596.746), (363), (594.738), (365.246), (595.75), (365.246), (595.75), (367.398), (599.578), (374.25), (597.75), (374.25), (597.75), (375.758), (600.02), (385.25), (600.75), (385.25), (600.75), (385.879), (603.316), (386.32), (605.078), (390.246), (605.746), (393.801), (606.398), (366.246), (653.746), (366.246), (653.746), (373.777), (654.578), (365.246), (667.746), (365.246), (667.746), (362.34), (675.477), (374.879), (659.418), (377.246), (657.75), (379.719), (656.34), (380.82), (653.918), (379.246), (653.746), (377.301), (654.359), (375.32), (651.938), (377.246), (651.746), (378.398), (651.5), (392.699), (635), (396.25), (623.746), (400.18), (612.559), (406.777), (608.156), (413.246), (601.746), (420.418), (594.957), (419.246), (568.746), (419.246), (568.746), (419.098), (558.656), (425.25), (546.746), (425.25), (546.746), (427.898), (542.816), (423.246), (522.746), (423.246), (522.746), (421.078), (520.379), (422.246), (519.746), (422.246), (519.746), (423.719), (518.18), (431.246), (503.75), (431.246), (503.75), (429.219), (503.879), (433.246), (499.746), (433.246), (499.746), (438.898), (493.316), (432.246), (496.75), (432.246), (496.75), (425.258), (498.379), (433.246), (487.75), (433.246), (487.75), (434.277), (485.617), (424.246), (490.75), (424.246), (490.75), (414.258), (491.34), (427.25), (483.75), (427.25), (483.75), (436.48), (475.5), (424.246), (480.746), (424.246), (480.746), (418.879), (482.316), (422.246), (474.75), (422.246), (474.75), (425.918), (473.078), (445.246), (465.75), (445.246), (465.75), (445.277), (461.195), (442.246), (455.746), (442.246), (455.746), (442.418), (451.297), (440.25), (447.746), (440.25), (447.746), (438.68), (438.535), (438.25), (437.75), (438.25), (437.75), (433.398), (437.438), (425.25), (422.746), (425.25), (422.746), (423.277), (419.398), (412.246), (405.746), (412.246), (405.746), (409.859), (398.496), (390.246), (406.75), (390.246), (406.75), (382.801), (402.676), (385.25), (406.75), (385.25), (406.75), (384.559), (408.836), (390.246), (415.75), (390.246), (415.75), (397.539), (418.297), (394.25), (429.746), (394.25), (429.746), (399.078), (431.719), (386.758), (434.797), (387.246), (435.75), (387.199), (437.438), (393.25), (438.746), (393.25), (438.746), (402.379), (441.176), (397.246), (443.75), (397.246), (443.75), (396.879), (448.219), (400.246), (454.75), (400.246), (454.75), (412.938), (455.258), (400.246), (472.75), (400.246), (472.75), (388.301), (481.438), (387.246), (487.75), (387.246), (487.75), (401.059), (496.84), (392.039), (510.477), (392.25), (514.75), (392.48), (518.398), (394.25), (541.746), (394.25), (541.746), (391.598), (548.977), (388.246), (563.746), (388.246), (563.746), (390.719), (569.656), (399.246), (583.746), (399.246), (583.746), (401.938), (588.137), (411.621), (593.418), (409.246), (596.746), (406.777), (600.02), (398.246), (597.75), (398.246), (597.75), (389.621), (599.578), (390.246), (593.75), (390.246), (593.75), (388.52), (592.758), (387.246), (587.746), (387.246), (587.746), (386.848), (578.531), (377.246), (571.75), (377.246), (571.75), (364.758), (564.816), (375.246), (560.75), (375.246), (560.75), (381.48), (553.156), (370.25), (552.746), (370.25), (552.746), (358.598), (554.918), (367.246), (543.746), (367.246), (543.746), (379.5), (529.617), (376.246), (526.746), (376.246), (526.746), (364.98), (525.438), (379.246), (515.746), (379.246), (515.746), (379.242), (515.742), (377.961), (517.52), (378.246), (515.746), (378.398), (513.559), (381.699), (508.938), (382.25), (506.746), (383.461), (504.539), (379.246), (504.746), (379.246), (504.746), (379.719), (493.758), (363.25), (498.75), (363.25), (498.75), (363.25), (498.75), (362.777), (498.379), (361.25), (497.746), (359.258), (497.938), (346.938), (498.816), (340.25), (500.746), (334.18), (503.656), (326.25), (503.75), (326.25), (503.75), (326.25), (503.75), (322.301), (501.68), (314.25), (501.75), (305.578), (502.117), (297.246), (498.75), (297.246), (498.75), (291.937), (499.477), (301.398), (504.316), (301.246), (503.75), (301.84), (503.879), (308), (510.039), (299.246), (509.75), (275.223), (507.578), (263.25), (518.75), (263.25), (518.75), (261.137), (520.379), (258.246), (523.75), (258.246), (523.75), (247.277), (525.656), (260.25), (509.75), (260.25), (509.75), (261.137), (508.277), (259.25), (506.746), (259.25), (506.746), (258.719), (508.938), (250.25), (514.75), (250.25), (514.75), (247.047), (515.949), (245.547), (517.414), (243.246), (519.746), (10), (0), (0.3), (0), (0), (0.3), (0), (0), (7), (216.25), (532.746), (216.25), (532.742), (229.457), (526.758), (232.246), (523.75), (235.18), (520.598), (250.25), (507.75), (250.25), (507.75), (250.25), (507.75), (244.637), (510.258), (242.246), (511.746), (238.918), (514.219), (227.25), (522.746), (227.25), (522.746), (227.25), (522.746), (222.859), (529.84), (216.25), (532.746), (10), (0), (0.6), (0.8), (0.2), (0.6), (0.8), (0.2), (6), (153.246), (566.75), (153.258), (567.398), (152.684), (570.379), (152.25), (570.746), (151.332), (573.977), (141.25), (575.75), (141.25), (575.75), (141.207), (574.098), (141.148), (572.34), (141.25), (570.746), (141.25), (570.746), (146.621), (564.469), (153.246), (566.75), (10), (0), (0.4), (0.6), (0), (0.4), (0.6), (0), (6), (153.246), (567.75), (152.395), (567.281), (152.871), (570.461), (152.25), (570.746), (151.555), (573.977), (141.25), (575.75), (141.25), (575.75), (141.207), (574.207), (141.148), (572.449), (141.25), (570.746), (141.25), (570.746), (145.961), (565.02), (153.246), (567.75), (10), (0), (0), (0), (0), (0), (0), (0), (6), (148.246), (567.75), (147.371), (567.297), (146.812), (568.551), (147.25), (569.75), (146.812), (571.645), (147.371), (572.898), (148.246), (572.746), (148.746), (572.898), (149.305), (571.645), (149.246), (569.75), (149.305), (568.551), (148.746), (567.297), (148.246), (567.75), (10), (0), (0), (0), (0), (0), (0), (0), (17), (98.2461), (459.75), (98.2422), (459.75), (91.7383), (448.438), (119.25), (454.75), (119.25), (454.75), (134.418), (456.355), (137.246), (458.746), (138.379), (458.117), (147.582), (454.891), (150.246), (453.746), (158.18), (452.398), (167.25), (463.75), (167.25), (463.75), (167.25), (463.75), (172.477), (474.949), (175.25), (474.75), (178.637), (474.949), (175.25), (472.75), (175.25), (472.75), (175.25), (472.75), (167.859), (462.078), (168.25), (460.746), (168.25), (460.742), (162.578), (438.316), (145.25), (437.75), (145.25), (437.75), (127.215), (436.391), (128.25), (429.746), (128.25), (429.742), (138.379), (432.598), (141.25), (429.746), (141.25), (429.742), (152.898), (430.398), (144.246), (423.746), (136.25), (410.75), (136.25), (410.75), (136.773), (406.289), (125.25), (409.746), (114.84), (413.898), (103.25), (427.746), (103.25), (427.746), (103.25), (427.742), (85.9648), (444.094), (98.2461), (459.75), (10), (0), (0.9), (0.6), (0.6), (0.9), (0.6), (0.6), (14), (96.25), (454.75), (96.25), (454.75), (94.3789), (444.477), (135.25), (455.746), (135.25), (455.742), (139.699), (455.918), (142.246), (454.75), (144.977), (454.156), (158.18), (451.078), (160.246), (452.75), (160.246), (452.75), (152.457), (437.438), (139.246), (438.746), (139.246), (438.742), (125.18), (437.438), (125.25), (431.746), (125.25), (431.742), (130.02), (424.238), (135.25), (421.75), (135.25), (421.75), (138.379), (418.957), (138.246), (415.75), (137.5), (411.918), (134.418), (410.156), (132.246), (409.746), (130.02), (408.398), (126.5), (411.918), (124.25), (411.746), (122.977), (411.918), (113.738), (418.957), (109.246), (423.746), (104.059), (429.516), (94.8164), (442.719), (95.25), (445.746), (95.6992), (448.879), (96.25), (454.75), (96.25), (454.75), (10), (0), (0.7), (0.4), (0.4), (0.7), (0.4), (0.4), (13), (100.246), (435.75), (102.957), (431.496), (106.477), (426.879), (109.246), (423.746), (113.738), (418.957), (122.977), (411.918), (124.25), (411.746), (126.5), (411.918), (130.02), (408.398), (132.246), (409.746), (134.418), (410.156), (137.5), (411.918), (138.246), (415.75), (138.379), (418.957), (135.25), (421.75), (135.25), (421.75), (131.926), (423.285), (128.91), (427.125), (127.246), (429.746), (127.246), (429.742), (127.379), (426.879), (121.246), (427.746), (115.938), (428.637), (110.219), (431.719), (108.25), (434.746), (106.699), (438.758), (104.059), (441.398), (106.25), (437.75), (107.578), (433.477), (110.219), (429.516), (112.25), (428.75), (113.738), (428.637), (113.297), (427.316), (110.246), (427.746), (108.02), (428.195), (104.938), (428.637), (100.246), (434.746), (10), (0), (0.6), (0.15), (0), (0.6), (0.15), (0), (20), (97.25), (458.746), (97.25), (458.746), (99.2187), (473.957), (100.246), (478.746), (100.246), (478.746), (99.6563), (485.84), (102.25), (490.75), (104.938), (495.078), (107.137), (501.898), (110.246), (507.75), (113.738), (513.777), (113.957), (518.18), (118.25), (519.746), (122.758), (521.699), (129.359), (531.156), (132.246), (532.746), (135.52), (533.359), (135.25), (532.746), (135.25), (532.746), (135.25), (532.742), (142.777), (548.758), (157.25), (544.746), (157.25), (544.746), (139.918), (547.438), (157.25), (557.746), (157.25), (557.746), (152.02), (556.566), (155.246), (564.75), (158.07), (569.402), (157.52), (561.957), (145.25), (548.746), (145.25), (548.746), (139.918), (539.52), (134.25), (535.746), (128.477), (532.918), (115.277), (525.219), (114.25), (520.75), (112.637), (516.859), (109.117), (510.477), (107.25), (508.746), (104.719), (506.957), (101.637), (502.34), (101.25), (498.75), (101.25), (498.75), (99.8789), (494.199), (98.2461), (492.75), (96.7969), (491.559), (96.5781), (488.039), (96.25), (485.75), (96.5781), (483.637), (94.3789), (480.559), (94.2461), (477.746), (94.2461), (477.742), (95.4766), (457.016), (95.25), (454.75), (97.25), (458.746), (10), (0), (1), (1), (1), (1), (1), (1), (6), (88.2461), (453.746), (88.2461), (453.742), (85.5781), (455.477), (80.25), (448.75), (80.25), (448.75), (88.7695), (412.578), (89.2461), (410.75), (89.2461), (410.75), (89.9766), (413.348), (88.2461), (421.75), (87.1172), (429.188), (86.25), (442.746), (86.25), (442.746), (88.2461), (453.746), (10), (0), (0.6), (0.15), (0), (0.6), (0.15), (0), (13), (111.246), (520.75), (111.246), (520.75), (92.1797), (517.078), (92.2461), (484.746), (91.25), (457.75), (91.25), (457.75), (90.418), (485.84), (89.2461), (487.75), (87.7773), (489.359), (92.1797), (501.68), (88.2461), (494.75), (88.2461), (494.75), (73.2578), (479.68), (82.2461), (456.746), (82.2422), (456.746), (83.707), (452.727), (80.25), (457.75), (80.25), (457.75), (75.3477), (471.648), (76.2461), (478.746), (76.2422), (478.746), (76.7773), (481.109), (79.25), (483.75), (79.25), (483.75), (88.3281), (497.059), (91.25), (499.746), (91.25), (499.742), (93.2773), (515.43), (110.246), (520.75), (110.246), (520.75), (116.488), (523.68), (111.246), (520.75), (10), (0), (0), (0), (0), (0), (0), (0), (28), (265.246), (593.75), (265.605), (593.809), (265.594), (594.875), (266.246), (594.746), (267.496), (595.441), (267.676), (596.617), (268.246), (597.75), (269.207), (598.93), (269.418), (600.617), (270.25), (602.75), (270.359), (603.027), (270.387), (604.078), (270.25), (604.75), (268.754), (607.531), (267.98), (610.227), (266.246), (612.746), (266.098), (613.391), (265.812), (614.262), (265.246), (614.746), (265.082), (616.441), (263.699), (617.535), (263.25), (618.746), (262.434), (619.469), (263.012), (620.488), (262.25), (620.746), (261.238), (620.695), (259.645), (621.332), (259.25), (619.75), (258.742), (617.359), (259.852), (614.586), (261.25), (611.75), (260.059), (611.137), (260.426), (610.125), (260.25), (609.746), (261.375), (605.313), (260.055), (601.625), (259.25), (597.75), (259.191), (597.691), (259.57), (597.473), (259.25), (597.75), (258.195), (594.449), (256.598), (591.762), (254.246), (588.75), (253.762), (588.051), (252.805), (587.043), (252.25), (585.746), (251.852), (585.008), (251.402), (583.945), (251.25), (582.75), (247.898), (579.801), (245.426), (575.57), (242.246), (571.75), (242.043), (570.594), (242.363), (569.262), (243.246), (568.746), (243.863), (568.527), (244.918), (569.656), (245.246), (570.746), (245.859), (571.352), (246.25), (572.066), (247.246), (572.746), (246.937), (572.969), (246.738), (573.43), (247.246), (573.75), (249.785), (576.145), (251.621), (579.375), (254.246), (581.746), (256.465), (582.34), (258.152), (583.438), (260.25), (584.75), (260.414), (584.75), (260.992), (584.477), (261.25), (584.75), (263.238), (585.984), (263.238), (588.223), (263.25), (590.746), (263.41), (591.297), (263.625), (592.746), (265.246), (593.75), (10), (0), (0), (0), (0), (0), (0), (0), (19), (255.246), (598.746), (255.289), (598.414), (255.117), (598.879), (255.246), (598.746), (255.418), (599.477), (255.859), (599.68), (256.246), (599.75), (256.16), (600.277), (255.98), (600.695), (256.246), (600.75), (258.695), (603.543), (258.977), (606.867), (258.246), (609.746), (258.965), (610.82), (259.031), (612.207), (258.246), (612.746), (257.625), (615.012), (257.414), (617.129), (256.246), (618.746), (255.457), (620.223), (253.723), (621.59), (252.25), (619.75), (251.75), (619.719), (251.398), (618.852), (251.25), (617.75), (251.773), (617.887), (252.09), (617.727), (252.25), (617.75), (251.941), (617.281), (251.34), (617.035), (251.25), (616.746), (251.301), (615.09), (250.25), (613.43), (251.25), (611.75), (251.793), (610.176), (252.695), (608.133), (253.246), (605.746), (252.082), (603.852), (253.219), (601.156), (251.25), (598.746), (251.141), (598.93), (251.148), (598.508), (251.25), (598.746), (251.605), (597.75), (252.051), (597.305), (252.25), (596.746), (252.809), (596.848), (253.191), (596.848), (253.246), (596.746), (254.047), (597.383), (254.484), (597.918), (255.246), (598.746), (10), (0), (0), (0), (0), (0), (0), (0), (21), (324.246), (609.746), (325.773), (607.703), (326.094), (604.629), (324.246), (602.75), (324.445), (599.457), (328.129), (601.637), (330.25), (601.746), (330.32), (602.645), (330.57), (603.023), (331.246), (602.75), (332.043), (603.047), (332.789), (604.18), (334.246), (603.746), (334.438), (605.691), (336.238), (606.465), (337.25), (607.746), (338.844), (612.047), (338.195), (616.746), (335.246), (620.746), (335.129), (620.598), (335.371), (621.164), (335.246), (621.75), (334.402), (623.996), (332.125), (624.34), (330.25), (624.75), (328.703), (629.359), (327.977), (633.793), (326.25), (637.75), (324.266), (638.133), (323.496), (640.047), (322.246), (640.746), (320.559), (641.629), (319.934), (639.891), (320.246), (638.746), (319.988), (638.516), (320.484), (638.27), (320.246), (637.75), (320.215), (637.688), (319.926), (637.566), (320.246), (637.75), (319.93), (637.27), (320.172), (637.125), (320.246), (636.746), (319.309), (636.074), (317.742), (635.551), (317.25), (634.746), (316.371), (630.211), (319.199), (626.773), (321.246), (623.746), (321.684), (622.004), (320.875), (620.605), (320.246), (619.75), (319.559), (618.512), (319.676), (617.273), (320.246), (616.746), (320.809), (613.766), (322.559), (611.855), (324.246), (609.746), (10), (0), (0), (0), (0), (0), (0), (0), (73), (283.25), (589.75), (281.734), (587.41), (277.98), (584.586), (281.25), (582.75), (281.402), (582.324), (281.809), (582.32), (282.25), (582.75), (284.223), (584.188), (286.426), (585.18), (289.246), (585.746), (289.242), (585.852), (289.543), (585.34), (290.246), (585.746), (291.727), (586.289), (293.938), (586.227), (295.25), (587.746), (299.383), (587.453), (303.305), (588.68), (307.25), (589.75), (308.309), (590.609), (309.707), (591.227), (311.246), (591.75), (312.543), (592.41), (313.867), (593.434), (315.25), (594.746), (315.234), (594.836), (315.625), (594.738), (316.25), (594.746), (315.875), (595.688), (316.934), (595.828), (317.25), (596.746), (317.305), (596.766), (317.141), (597.203), (317.25), (597.75), (319.641), (599.105), (320.652), (601.328), (319.25), (603.746), (319.051), (604.578), (318.777), (605.258), (318.25), (605.746), (316.961), (606.781), (315.75), (605.844), (314.25), (605.746), (314.422), (605.488), (313.621), (605.676), (313.246), (605.746), (312.25), (604.977), (310.785), (605.621), (310.246), (604.75), (308.344), (604.371), (306.977), (604.188), (305.25), (603.746), (305.07), (603.684), (304.215), (603.789), (304.25), (602.75), (303.891), (603.246), (303.727), (603.504), (303.25), (603.746), (301.512), (603.043), (300.125), (602.809), (298.246), (600.75), (298.582), (600.801), (298.098), (600.996), (298.246), (600.75), (296.867), (599.961), (296.422), (598.602), (295.25), (597.75), (294.992), (597.727), (294.602), (597.914), (294.25), (597.75), (293.68), (597.297), (293.277), (596.59), (292.25), (595.75), (292.207), (595.848), (291.766), (596.207), (292.25), (596.746), (292.07), (598.629), (292.789), (600.594), (292.25), (602.75), (294.441), (605.43), (297.211), (607.574), (299.246), (610.75), (299.215), (612.961), (299.977), (615.32), (300.246), (617.75), (299.84), (617.816), (299.523), (618.625), (299.246), (618.746), (299.043), (619.945), (300.039), (621.117), (299.246), (621.75), (297.566), (623.238), (296.145), (622.273), (295.25), (620.746), (293.215), (620.27), (290.945), (619.508), (289.246), (620.746), (288.102), (621.73), (287.465), (622.727), (286.246), (623.746), (285.504), (625.32), (285.871), (626.898), (286.246), (628.75), (285.953), (628.762), (285.609), (628.91), (285.25), (628.75), (285.609), (629.207), (285.852), (629.352), (286.246), (629.746), (285.223), (630.188), (284.918), (631.352), (284.25), (631.746), (284.133), (632.898), (283.391), (633.871), (282.25), (633.75), (280.238), (634.965), (278.395), (632.859), (276.246), (632.75), (275.746), (632.758), (275.23), (633.902), (274.25), (634.746), (274.043), (634.496), (273.27), (634.531), (273.25), (633.75), (272.113), (633.688), (271.465), (633.559), (270.25), (633.75), (268.852), (632.855), (267.449), (631.652), (266.246), (630.75), (264.188), (629.77), (263.137), (628.188), (262.25), (626.75), (260.914), (625.469), (260.762), (622.813), (262.25), (622.75), (264.352), (621.547), (265.785), (624.523), (268.246), (623.746), (268.293), (624.105), (268.52), (623.766), (268.246), (623.746), (268.824), (623.219), (269.066), (623.469), (269.246), (623.746), (270.223), (622.656), (271.504), (622.285), (272.25), (621.75), (273.602), (620.332), (275.523), (620.793), (276.246), (619.75), (278.32), (618.043), (277.707), (615.094), (280.246), (613.75), (279.195), (612.215), (278.527), (610.809), (278.246), (608.75), (277.848), (607.914), (278.941), (606.598), (280.246), (606.75), (281.656), (606.801), (281.945), (607.633), (282.25), (608.75), (282.773), (608.523), (283.289), (608.199), (283.25), (607.746), (282.738), (605.336), (281.609), (603.141), (281.25), (600.75), (281.043), (600.121), (280.707), (599.898), (280.246), (599.75), (279.762), (595.453), (275.305), (592.82), (272.25), (589.75), (272.063), (588.785), (272.059), (587.414), (272.25), (586.75), (274.051), (585.445), (276.207), (587.145), (278.246), (587.746), (278.313), (589.023), (279.258), (590.063), (280.246), (589.75), (281.004), (589.988), (281.262), (590.586), (281.25), (590.746), (282), (590.879), (282.555), (590.633), (283.25), (590.746), (284.77), (592.164), (286.32), (593.383), (288.246), (594.746), (288.441), (594.832), (288.82), (594.66), (289.246), (594.746), (289.414), (594.957), (289.621), (595.383), (290.246), (595.75), (290.359), (595.805), (290.625), (595.484), (291.246), (594.746), (290.129), (594.793), (290.125), (593.742), (289.246), (593.75), (288.629), (593.223), (288.012), (592.66), (287.246), (591.75), (286.949), (591.957), (286.227), (592.23), (286.246), (591.75), (285.453), (590.902), (284.152), (590.418), (283.25), (589.75), (10), (0), (0), (0), (0), (0), (0), (0), (30), (222.246), (643.75), (222.246), (643.75), (212.258), (646.957), (200.246), (618.746), (200.246), (618.742), (197.34), (613), (194.25), (610.75), (192.059), (608.598), (179.738), (604.637), (177.246), (599.75), (166.246), (582.75), (166.246), (582.75), (182.379), (600.238), (186.25), (602.75), (186.25), (602.75), (194.699), (612.117), (191.246), (604.75), (191.242), (604.75), (175.777), (592.758), (177.246), (582.75), (177.246), (582.75), (170.938), (566.797), (170.246), (564.75), (170.242), (564.75), (187.656), (599.797), (190.246), (600.75), (192.938), (602.438), (194.258), (602.438), (193.25), (598.746), (191.617), (594.52), (191.18), (576.477), (188.246), (574.746), (188.246), (574.742), (196.898), (596.719), (196.25), (599.75), (196.25), (599.75), (199.539), (604.199), (202.246), (598.746), (201.246), (580.75), (205.25), (567.75), (205.25), (567.75), (203.059), (580), (205.25), (596.746), (205.25), (596.742), (202.617), (608.598), (207.25), (602.75), (211.418), (596.277), (221.977), (589.68), (222.246), (584.75), (222.246), (584.75), (216.258), (603.758), (206.25), (608.75), (201.246), (602.75), (200.246), (604.75), (200.246), (604.75), (196.457), (605.52), (201.246), (612.746), (206.137), (620.477), (205.25), (621.75), (205.25), (621.75), (205.25), (621.75), (212.738), (613.438), (214.25), (613.75), (214.25), (613.75), (229.02), (621.797), (230.25), (594.746), (230.25), (594.742), (237.816), (610.797), (227.25), (618.746), (227.25), (618.742), (211.418), (620.477), (212.246), (625.746), (220.246), (639.75), (224.617), (645.559), (223.246), (642.746), (223.246), (642.746), (10), (0), (0), (0), (0), (0), (0), (0), (6), (200.246), (625.746), (200.246), (625.746), (186.34), (625.758), (183.25), (619.75), (175.25), (609.746), (175.25), (609.742), (193.816), (620.477), (198.246), (621.75), (202.617), (623.117), (200.246), (625.746), (200.246), (625.746), (10), (0), (0), (0), (0), (0), (0), (0), (7), (156.25), (618.746), (156.25), (618.742), (154.219), (617.398), (154.246), (614.746), (153.34), (611.238), (150.699), (610.797), (151.25), (607.746), (152.457), (604.637), (154.656), (602), (154.246), (606.75), (154.656), (610.797), (156.418), (613), (157.25), (614.746), (158.18), (615.637), (159.938), (620.477), (156.25), (618.746), (10), (0), (0), (0), (0), (0), (0), (0), (10), (146.25), (551.75), (146.25), (551.75), (137.5), (555.797), (134.25), (559.746), (130.457), (563.719), (130.957), (558.035), (125.25), (558.75), (119.187), (558.922), (120.246), (576.746), (120.246), (576.746), (116.246), (567.75), (116.246), (567.75), (114.617), (552.277), (123.25), (554.746), (127.715), (556.207), (129.137), (554.477), (127.246), (553.75), (125.617), (552.719), (133.539), (552.277), (130.25), (550.746), (127.379), (548.758), (143.219), (554.477), (140.25), (542.75), (146.25), (551.75), (10), (0), (0), (0), (0), (0), (0), (0), (8), (133.246), (535.746), (133.246), (535.746), (115.938), (530.719), (112.25), (541.746), (112.25), (541.742), (106.699), (538.637), (109.246), (535.746), (111.539), (532.039), (113.25), (531.75), (113.25), (531.75), (113.25), (531.75), (118.797), (530.277), (118.25), (529.75), (117.477), (528.52), (115.246), (524.746), (115.246), (524.746), (115.242), (524.746), (126.059), (531.379), (133.246), (535.746), (10), (0), (1), (1), (1), (1), (1), (1), (24), (384.25), (449.746), (383.648), (447.191), (381.813), (446.309), (379.246), (445.746), (377.609), (446.629), (374.754), (450.047), (372.25), (447.746), (372.156), (448.305), (371.301), (448.371), (371.25), (448.75), (370.41), (450.086), (370.711), (451.238), (370.25), (451.746), (369.734), (453.516), (368.953), (455.016), (369.25), (456.746), (371.145), (457.359), (371.801), (459.457), (371.25), (461.75), (371.203), (461.68), (370.73), (461.895), (371.25), (462.746), (371.156), (462.633), (371.504), (462.883), (372.25), (462.746), (371.652), (463.031), (371.492), (462.773), (371.25), (462.746), (370.699), (462.91), (370.836), (463.613), (371.25), (463.75), (371.621), (465.957), (373.836), (466.25), (375.246), (464.746), (375.602), (465.559), (376.16), (465.348), (376.246), (465.75), (376.586), (466.016), (377.031), (466.594), (377.246), (466.746), (377.82), (468.266), (379.613), (467.047), (380.25), (467.746), (381.672), (468.629), (382.844), (469.398), (384.25), (468.75), (386.02), (467.621), (387.898), (466.285), (389.246), (464.746), (389.848), (463.453), (390.113), (462.047), (390.246), (460.746), (390.008), (460.281), (388.488), (460.668), (388.246), (459.75), (387.402), (457.723), (389.414), (457.152), (390.246), (455.746), (390.465), (455.297), (390.176), (454.961), (390.246), (454.75), (389.375), (454.711), (388.516), (454.922), (388.246), (454.75), (389.734), (450.91), (386.703), (450.164), (384.25), (449.746), (10), (0), (1), (1), (1), (1), (1), (1), (11), (373.25), (427.746), (373.551), (429.891), (371.789), (431.82), (373.25), (433.746), (373.27), (433.551), (373.41), (433.305), (373.25), (433.746), (373.707), (433.305), (373.852), (433.551), (374.25), (433.746), (375.645), (431.258), (379.66), (430.238), (379.246), (426.75), (379.48), (426.617), (378.285), (425.605), (379.246), (424.75), (377.285), (423.414), (377.223), (420.809), (376.246), (418.746), (374.836), (419.051), (373.504), (419.449), (372.25), (419.75), (372.625), (421.691), (372.496), (423.543), (373.25), (424.75), (373.879), (425.766), (373.563), (426.949), (373.25), (427.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (15), (190.246), (437.75), (190.246), (437.75), (172.195), (426.727), (187.246), (443.75), (197.34), (454.156), (208.25), (460.746), (208.25), (460.746), (208.25), (460.742), (219.777), (465.156), (223.246), (466.746), (227.699), (467.797), (244.418), (473.52), (248.25), (473.746), (251.457), (474.398), (262.02), (478.797), (269.246), (474.75), (276.977), (470), (286.246), (464.746), (286.246), (464.746), (286.246), (464.742), (267.738), (474.398), (264.246), (471.746), (259.816), (469.117), (251.898), (469.559), (245.246), (465.75), (245.246), (465.75), (229.02), (461.195), (225.25), (458.746), (221.977), (456.797), (210.539), (444.035), (209.246), (444.746), (207.02), (445.797), (209.219), (446.238), (210.246), (449.746), (211.859), (452.398), (209.656), (454.156), (201.246), (446.75), (192.059), (440.078), (190.246), (437.75), (190.246), (437.75), (10), (0), (0), (0), (0), (0), (0), (0), (11), (199.246), (444.746), (199.246), (444.742), (200.434), (458.785), (210.246), (456.746), (210.246), (456.746), (218.809), (461.539), (222.246), (463.75), (222.246), (463.75), (230.758), (465.578), (232.246), (466.746), (252.523), (475.824), (268.715), (470.855), (269.246), (471.746), (269.918), (473.316), (291.504), (465.488), (295.25), (460.746), (295.906), (460.508), (284.219), (467.152), (273.25), (468.75), (264.453), (471.008), (240.691), (468.961), (228.25), (462.746), (225.422), (461.211), (215.582), (454.848), (213.246), (454.75), (210.016), (455.094), (199.246), (444.746), (199.246), (444.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (11), (194.25), (416.746), (194.25), (416.742), (177.977), (418.957), (196.25), (420.746), (196.25), (420.742), (216.258), (422.918), (220.246), (428.75), (220.246), (428.75), (235.617), (438.758), (238.25), (438.746), (241.777), (439.637), (274.777), (447.559), (275.246), (449.746), (275.656), (452.836), (281.816), (452.836), (283.25), (451.746), (285.34), (451.078), (284.457), (449.758), (281.25), (448.75), (278.297), (447.996), (243.977), (429.957), (237.25), (428.75), (229.898), (427.316), (217.137), (418.957), (212.246), (417.75), (206.578), (416.316), (194.25), (416.746), (194.25), (416.746), (10), (0), (0), (0), (0), (0), (0), (0), (11), (216.25), (424.75), (216.25), (424.75), (206.73), (425.367), (216.25), (426.75), (216.25), (426.75), (225.887), (430.035), (228.25), (432.75), (228.25), (432.75), (235.801), (438.145), (237.25), (438.746), (238.957), (438.594), (254.313), (442.652), (254.246), (443.75), (254.762), (445.355), (292.234), (459.191), (297.246), (455.746), (300.301), (453.371), (289.406), (455.219), (279.246), (450.75), (277.32), (449.684), (240.082), (433.637), (236.25), (432.75), (232.871), (432.285), (226.34), (428.008), (223.246), (427.746), (220.934), (426.656), (216.25), (424.75), (216.25), (424.75), (10), (0), (0), (0), (0), (0), (0), (0), (4), (207.25), (421.75), (207.25), (421.75), (213.18), (422.477), (212.246), (420.746), (210.539), (418.957), (208.25), (419.75), (208.25), (419.75), (207.25), (421.75), (10), (0), (0), (0), (0), (0), (0), (0), (4), (199.246), (420.746), (199.246), (420.742), (205.258), (420.719), (204.25), (418.746), (202.617), (417.195), (200.246), (417.75), (200.246), (417.75), (199.246), (420.746), (10), (0), (0), (0), (0), (0), (0), (0), (4), (188.246), (418.746), (188.246), (418.742), (193.816), (418.957), (192.25), (416.746), (191.18), (415.438), (188.246), (416.746), (188.246), (416.746), (188.246), (418.746), (10), (0), (0), (0), (0), (0), (0), (0), (4), (179.246), (417.75), (179.246), (417.75), (185.457), (418.078), (184.25), (416.746), (182.816), (414.559), (180.246), (415.75), (180.246), (415.75), (179.246), (417.75), (10), (0), (0), (0), (0), (0), (0), (0), (4), (222.246), (460.746), (222.246), (460.742), (226.816), (461.195), (225.25), (459.75), (224.18), (457.676), (220.246), (457.75), (220.246), (457.75), (222.246), (460.746), (10), (0), (0), (0), (0), (0), (0), (0), (4), (211.246), (454.75), (211.246), (454.75), (218.133), (457.391), (215.25), (453.746), (214.059), (451.957), (211.246), (452.75), (211.246), (452.75), (211.246), (454.75), (10), (0), (0), (0), (0), (0), (0), (0), (4), (198.246), (449.746), (198.246), (449.742), (204.379), (450.195), (203.25), (448.75), (201.738), (446.676), (199.246), (447.746), (199.246), (447.746), (198.246), (449.746), (10), (0), (0), (0), (0), (0), (0), (0), (4), (190.246), (442.746), (190.246), (442.742), (196.02), (443.598), (194.25), (441.75), (193.379), (440.078), (190.246), (440.746), (190.246), (440.746), (190.246), (442.746), (10), (0), (0), (0), (0), (0), (0), (0), (4), (183.25), (437.75), (183.25), (437.75), (188.539), (438.316), (187.246), (436.746), (185.898), (434.797), (183.25), (435.75), (183.25), (435.75), (183.25), (437.75), (10), (0), (0), (0), (0), (0), (0), (0), (4), (226.25), (430.75), (226.25), (430.75), (233.422), (431.426), (231.246), (428.75), (229.906), (426.742), (226.25), (427.746), (226.25), (427.746), (226.25), (430.75), (10), (0), (0), (0), (0), (0), (0), (0), (4), (237.25), (435.75), (237.25), (435.75), (244.863), (436.707), (243.246), (434.746), (241.348), (432.02), (238.25), (432.75), (238.25), (432.75), (237.25), (435.75), (10), (0), (0), (0), (0), (0), (0), (0), (4), (249.25), (440.746), (249.25), (440.742), (256.742), (441.547), (255.246), (438.746), (253.227), (436.859), (249.25), (437.75), (249.25), (437.75), (249.25), (440.746), (10), (0), (0), (0), (0), (0), (0), (0), (4), (260.25), (445.746), (260.25), (445.746), (268.18), (446.824), (266.246), (444.746), (264.668), (442.141), (261.25), (443.75), (261.25), (443.75), (260.25), (445.746), (10), (0), (0), (0), (0), (0), (0), (0), (4), (230.25), (465.75), (230.25), (465.75), (237.82), (466.625), (236.25), (464.746), (234.309), (461.941), (230.25), (461.75), (230.25), (461.75), (230.25), (465.75), (10), (0), (0), (0), (0), (0), (0), (0), (4), (241.25), (469.746), (241.25), (469.746), (248.82), (470.145), (247.246), (467.746), (245.309), (465.461), (240.25), (465.75), (240.25), (465.75), (241.25), (469.746), (10), (0), (0), (0), (0), (0), (0), (0), (4), (216.25), (425.746), (216.25), (425.746), (221.977), (425.996), (220.246), (423.746), (219.34), (422.477), (216.25), (423.746), (216.25), (423.746), (216.25), (425.746), (10), (0), (0.6), (0.15), (0), (0.6), (0.15), (0), (5), (135.25), (534.75), (135.25), (534.75), (130.898), (525), (130.25), (521.746), (130.25), (521.742), (131.34), (531.156), (132.246), (533.746), (133.977), (535.559), (135.25), (534.75), (135.25), (534.75), (10), (0), (0.6), (0.15), (0), (0.6), (0.15), (0), (5), (115.246), (519.746), (115.242), (519.742), (111.977), (503.438), (112.25), (500.746), (112.25), (500.746), (111.098), (513.117), (111.246), (514.75), (111.977), (515.758), (115.246), (519.746), (115.246), (519.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (6), (138.246), (601.746), (138.246), (597.75), (135.25), (597.75), (135.25), (597.75), (151.359), (583.738), (152.25), (575.75), (152.25), (575.75), (152.898), (584.398), (138.246), (601.746), (10), (0), (0), (0), (0), (0), (0), (0), (28), (143.246), (599.75), (142.285), (600.402), (142.527), (601.223), (142.246), (601.746), (141.188), (602.078), (143.508), (602.141), (143.246), (602.75), (142.836), (604.254), (143.039), (604.277), (143.246), (605.746), (142.844), (606.34), (143.488), (608.031), (144.246), (608.75), (145.504), (610.332), (144.047), (613.559), (146.25), (615.75), (146.188), (615.582), (146.598), (616.191), (147.25), (616.746), (147.637), (617.711), (148.941), (618.246), (150.246), (618.746), (150.336), (619.461), (150.113), (620.371), (150.246), (620.746), (151.523), (620.141), (152.891), (620.285), (153.246), (619.75), (152.715), (617.027), (151.254), (615.137), (150.246), (613.75), (150.344), (612.527), (149.84), (611.828), (149.246), (610.75), (148.059), (608.336), (148.266), (605.207), (148.246), (601.746), (148.07), (601.992), (147.73), (601.906), (147.25), (601.746), (148.129), (599.277), (148.77), (596.859), (149.246), (594.746), (150.141), (593.387), (150.66), (592.402), (151.25), (591.75), (150.945), (590.625), (151.059), (589.711), (150.246), (588.75), (152.848), (585.754), (151.41), (582.84), (152.25), (578.75), (152.922), (578.27), (154.785), (576.164), (154.246), (576.746), (151.512), (577.297), (151.387), (577.734), (151.25), (578.75), (151.031), (579.25), (150.668), (580.762), (150.246), (581.746), (150.336), (581.605), (150.148), (583.68), (150.246), (583.746), (148.398), (586.434), (149.895), (586.238), (148.246), (588.75), (146.816), (589.582), (145.754), (590.797), (144.246), (591.75), (144.301), (592.297), (145.559), (593.094), (145.25), (593.75), (144.156), (594.746), (142.887), (595.59), (143.246), (596.746), (143.43), (597.992), (143.578), (599.156), (143.246), (599.75), (10), (0), (0), (0), (0), (0), (0), (0), (11), (139.246), (597.75), (139.246), (597.75), (139.258), (590.559), (142.246), (588.75), (144.539), (587.039), (143.219), (587.918), (139.246), (588.75), (136.18), (590.559), (137.246), (591.75), (137.246), (591.75), (137.242), (591.75), (134.418), (591), (137.246), (588.75), (139.699), (586.598), (143.656), (583.957), (142.246), (583.746), (140.137), (583.957), (131.777), (588.359), (132.246), (591.75), (131.777), (594.52), (130.25), (598.746), (130.25), (598.746), (130.25), (598.742), (131.887), (599.906), (137.246), (599.75), (137.242), (599.75), (138.707), (599.027), (139.246), (597.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (138.246), (577.75), (138.246), (577.75), (128.566), (580.648), (108.25), (576.746), (108.25), (576.742), (118.172), (579.203), (139.246), (576.746), (150.148), (575.324), (138.246), (577.75), (138.246), (577.75), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (138.246), (577.75), (138.246), (577.75), (128.566), (580.648), (108.25), (576.746), (108.25), (576.742), (118.172), (579.203), (139.246), (576.746), (150.148), (575.324), (138.246), (577.75), (138.246), (577.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (140.25), (577.75), (140.25), (577.75), (131.176), (581.527), (110.246), (579.746), (110.246), (579.746), (120.695), (580.984), (141.25), (576.746), (152.215), (574.355), (140.25), (577.75), (140.25), (577.75), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (140.25), (577.75), (140.25), (577.75), (131.176), (581.527), (110.246), (579.746), (110.246), (579.746), (120.695), (580.984), (141.25), (576.746), (152.215), (574.355), (140.25), (577.75), (140.25), (577.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (142.246), (577.75), (142.242), (577.75), (133.453), (582.086), (113.25), (581.746), (113.25), (581.746), (122.965), (582.328), (143.246), (576.746), (153.902), (573.371), (142.246), (577.75), (142.246), (577.75), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (142.246), (577.75), (142.242), (577.75), (133.453), (582.086), (113.25), (581.746), (113.25), (581.746), (122.965), (582.328), (143.246), (576.746), (153.902), (573.371), (142.246), (577.75), (142.246), (577.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (143.246), (577.75), (143.242), (577.75), (136.102), (582.047), (117.25), (583.746), (117.25), (583.742), (126.715), (583.066), (144.246), (576.746), (153.77), (572.66), (143.246), (577.75), (143.246), (577.75), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (143.246), (577.75), (143.242), (577.75), (136.102), (582.047), (117.25), (583.746), (117.25), (583.742), (126.715), (583.066), (144.246), (576.746), (153.77), (572.66), (143.246), (577.75), (143.246), (577.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (270.25), (565.746), (270.25), (565.742), (269.398), (565.031), (269.246), (566.75), (269.871), (567.629), (300.898), (582.117), (305.25), (581.746), (305.25), (581.746), (271.602), (567.316), (270.25), (565.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (270.25), (565.746), (270.25), (565.742), (269.398), (565.031), (269.246), (566.75), (269.871), (567.629), (300.898), (582.117), (305.25), (581.746), (305.25), (581.746), (271.602), (567.316), (270.25), (565.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (266.246), (564.75), (266.246), (564.75), (265.727), (564.25), (266.246), (565.746), (265.992), (566.879), (295.785), (583.758), (300.246), (583.746), (300.246), (583.742), (267.742), (566.699), (266.246), (564.75), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (266.246), (564.75), (266.246), (564.75), (265.727), (564.25), (266.246), (565.746), (265.992), (566.879), (295.785), (583.758), (300.246), (583.746), (300.246), (583.742), (267.742), (566.699), (266.246), (564.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (263.25), (563.746), (263.25), (563.742), (262.164), (562.676), (262.25), (563.746), (262.254), (565.316), (284.055), (582.363), (295.25), (584.75), (295.25), (584.75), (275.016), (575.484), (263.25), (563.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (263.25), (563.746), (263.25), (563.742), (262.164), (562.676), (262.25), (563.746), (262.254), (565.316), (284.055), (582.363), (295.25), (584.75), (295.25), (584.75), (275.016), (575.484), (263.25), (563.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (260.25), (561.746), (260.25), (561.742), (259.09), (560.711), (259.25), (561.746), (259.176), (563.086), (278.793), (578.43), (288.246), (580.75), (288.246), (580.75), (270.656), (572.238), (260.25), (561.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (260.25), (561.746), (260.25), (561.742), (259.09), (560.711), (259.25), (561.746), (259.176), (563.086), (278.793), (578.43), (288.246), (580.75), (288.246), (580.75), (270.656), (572.238), (260.25), (561.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (11), (225.25), (398.746), (225.25), (398.742), (208.34), (401.355), (227.25), (402.75), (227.25), (402.75), (246.617), (405.316), (251.25), (410.75), (251.25), (410.75), (265.977), (421.156), (269.246), (421.75), (272.137), (422.035), (290.18), (425.996), (290.246), (428.75), (291.059), (431.277), (297.656), (433.918), (299.246), (432.75), (301.18), (432.156), (301.18), (422.035), (298.246), (420.746), (295.02), (420.277), (274.34), (412.355), (267.246), (410.75), (260.258), (409.719), (247.5), (401.355), (242.246), (399.75), (236.938), (398.719), (225.25), (398.746), (225.25), (398.746), (10), (0), (0), (0), (0), (0), (0), (0), (11), (305.25), (439.75), (305.25), (439.75), (302.059), (438.098), (300.246), (434.746), (300.246), (434.746), (293.699), (423.578), (278.246), (419.75), (278.246), (419.75), (252.777), (410.156), (244.246), (407.746), (244.246), (407.742), (229.457), (402.457), (221.246), (403.746), (221.246), (403.746), (213.617), (403.117), (220.246), (401.746), (220.246), (401.746), (242.656), (403.559), (246.246), (405.746), (246.242), (405.742), (263.559), (411.258), (267.246), (413.75), (270.156), (416.977), (290.18), (422.477), (292.25), (424.75), (295.02), (426.879), (305.797), (436.117), (305.25), (439.75), (10), (0), (0), (0), (0), (0), (0), (0), (4), (241.25), (404.75), (241.25), (404.75), (246.52), (405.445), (245.246), (403.746), (243.984), (402.035), (241.25), (402.75), (241.25), (402.75), (241.25), (404.75), (10), (0), (0), (0), (0), (0), (0), (0), (4), (233.246), (403.746), (233.246), (403.746), (238.598), (403.957), (237.25), (402.75), (236.063), (400.547), (233.246), (401.746), (233.246), (401.746), (233.246), (403.746), (10), (0), (0), (0), (0), (0), (0), (0), (4), (221.246), (402.75), (221.246), (402.75), (227.125), (402.586), (226.25), (400.75), (224.59), (399.176), (222.246), (399.75), (222.246), (399.75), (221.246), (402.75), (10), (0), (0), (0), (0), (0), (0), (0), (4), (213.246), (401.746), (213.242), (401.746), (218.73), (401.984), (217.25), (400.75), (216.191), (398.578), (213.246), (399.75), (213.246), (399.75), (213.246), (401.746), (10), (0), (0), (0), (0), (0), (0), (0), (4), (259.25), (413.75), (259.25), (413.75), (266.609), (413.664), (265.246), (411.746), (263.234), (409.129), (259.25), (410.75), (259.25), (410.75), (259.25), (413.75), (10), (0), (0), (0), (0), (0), (0), (0), (4), (270.25), (417.75), (270.25), (417.75), (276.855), (421.832), (276.246), (416.746), (275.973), (413.453), (271.25), (415.75), (271.25), (415.75), (270.25), (417.75), (10), (0), (0), (0), (0), (0), (0), (0), (4), (280.246), (421.75), (280.242), (421.75), (288.223), (425.367), (286.246), (419.75), (285.457), (416.664), (281.25), (418.746), (281.25), (418.746), (280.246), (421.75), (10), (0), (0), (0), (0), (0), (0), (0), (4), (291.246), (426.75), (291.242), (426.75), (295.605), (431.996), (297.246), (424.75), (297.227), (421.875), (291.246), (423.746), (291.246), (423.746), (291.246), (426.75), (10), (0), (0), (0), (0), (0), (0), (0), (4), (249.25), (408.75), (249.25), (408.75), (255.266), (408.652), (254.246), (406.75), (252.73), (405.242), (250.25), (405.746), (250.25), (405.746), (249.25), (408.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (288.246), (541.746), (288.246), (541.742), (287.875), (541.203), (288.246), (542.75), (287.875), (543.559), (307.109), (558.148), (317.25), (559.746), (317.25), (559.746), (299.125), (552.27), (288.246), (541.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (288.246), (541.746), (288.246), (541.742), (287.875), (541.203), (288.246), (542.75), (287.875), (543.559), (307.109), (558.148), (317.25), (559.746), (317.25), (559.746), (299.125), (552.27), (288.246), (541.746), (10), (0), (0), (0), (0), (0), (0), (0), (10), (292.25), (471.746), (292.25), (471.742), (316.141), (447.117), (326.25), (442.746), (326.25), (442.742), (336.379), (430.836), (332.246), (401.746), (332.246), (401.746), (328.461), (393.879), (325.25), (416.746), (325.25), (416.742), (328.461), (444.477), (316.25), (426.75), (316.25), (426.75), (306.898), (437.766), (314.25), (437.75), (314.25), (437.75), (317.461), (435.238), (318.25), (436.746), (318.34), (438.758), (309.539), (453.719), (290.246), (469.746), (271.699), (485.398), (292.25), (471.746), (292.25), (471.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (227.25), (428.75), (227.25), (428.75), (227.477), (431.059), (229.25), (429.746), (231.438), (429.297), (335.059), (422.477), (370.25), (395.75), (370.25), (395.75), (320.098), (421.598), (227.25), (428.75), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (227.25), (428.75), (227.25), (428.75), (227.477), (431.059), (229.25), (429.746), (231.438), (429.297), (335.059), (422.477), (370.25), (395.75), (370.25), (395.75), (320.098), (421.598), (227.25), (428.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (239.25), (433.746), (239.25), (433.742), (238.918), (435.898), (241.25), (434.746), (242.879), (434.137), (393.141), (435.238), (419.246), (399.75), (419.246), (399.75), (394.898), (427.316), (239.25), (433.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (239.25), (433.746), (239.25), (433.742), (238.918), (435.898), (241.25), (434.746), (242.879), (434.137), (393.141), (435.238), (419.246), (399.75), (419.246), (399.75), (394.898), (427.316), (239.25), (433.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (252.25), (438.746), (252.25), (438.742), (251.68), (440.297), (253.246), (439.75), (255.637), (438.535), (446.379), (452.836), (472.25), (416.746), (472.25), (416.742), (461.777), (445.355), (252.25), (438.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (252.25), (438.746), (252.25), (438.742), (251.68), (440.297), (253.246), (439.75), (255.637), (438.535), (446.379), (452.836), (472.25), (416.746), (472.25), (416.742), (461.777), (445.355), (252.25), (438.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (263.25), (443.75), (263.25), (443.75), (262.68), (445.578), (264.246), (444.746), (266.637), (443.816), (401.059), (486.277), (427.25), (450.75), (427.25), (450.75), (412.277), (477.699), (263.25), (443.75), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (263.25), (443.75), (263.25), (443.75), (262.68), (445.578), (264.246), (444.746), (266.637), (443.816), (401.059), (486.277), (427.25), (450.75), (427.25), (450.75), (412.277), (477.699), (263.25), (443.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (199.246), (418.746), (199.246), (418.742), (198.879), (420.496), (201.246), (419.75), (202.84), (418.738), (222.418), (416.316), (224.246), (373.75), (224.242), (373.75), (216.699), (419.836), (199.246), (418.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (199.246), (418.746), (199.246), (418.742), (198.879), (420.496), (201.246), (419.75), (202.84), (418.738), (222.418), (416.316), (224.246), (373.75), (224.242), (373.75), (216.699), (419.836), (199.246), (418.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (189.246), (416.746), (189.246), (416.742), (189.199), (418.738), (191.246), (417.75), (193.156), (416.977), (208.777), (422.035), (205.25), (379.746), (205.25), (379.746), (207.02), (418.078), (189.246), (416.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (189.246), (416.746), (189.246), (416.742), (189.199), (418.738), (191.246), (417.75), (193.156), (416.977), (208.777), (422.035), (205.25), (379.746), (205.25), (379.746), (207.02), (418.078), (189.246), (416.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (180.246), (416.746), (180.242), (416.742), (180.398), (418.297), (182.25), (417.75), (184.359), (416.535), (201.297), (415.879), (187.246), (390.746), (187.246), (390.746), (198.219), (417.637), (180.246), (416.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (180.246), (416.746), (180.242), (416.742), (180.398), (418.297), (182.25), (417.75), (184.359), (416.535), (201.297), (415.879), (187.246), (390.746), (187.246), (390.746), (198.219), (417.637), (180.246), (416.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (232.246), (464.746), (232.246), (464.742), (232.187), (462.887), (234.246), (463.75), (251.566), (478.113), (287.254), (542.906), (348.25), (548.746), (348.25), (548.746), (306.367), (562.426), (232.246), (464.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (232.246), (464.746), (232.246), (464.742), (232.187), (462.887), (234.246), (463.75), (251.566), (478.113), (287.254), (542.906), (348.25), (548.746), (348.25), (548.746), (306.367), (562.426), (232.246), (464.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (245.246), (466.746), (245.246), (466.742), (243.496), (468.379), (245.246), (468.75), (247.605), (469.754), (371.293), (549.508), (414.25), (540.75), (414.25), (540.75), (384.688), (549.004), (245.246), (466.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (245.246), (466.746), (245.246), (466.742), (243.496), (468.379), (245.246), (468.75), (247.605), (469.754), (371.293), (549.508), (414.25), (540.75), (414.25), (540.75), (384.688), (549.004), (245.246), (466.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (222.246), (460.746), (222.246), (460.742), (221.512), (458.594), (223.246), (459.75), (233.266), (465.301), (237.242), (528.234), (285.25), (529.75), (285.25), (529.75), (249.523), (545.801), (222.246), (460.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (222.246), (460.746), (222.246), (460.742), (221.512), (458.594), (223.246), (459.75), (233.266), (465.301), (237.242), (528.234), (285.25), (529.75), (285.25), (529.75), (249.523), (545.801), (222.246), (460.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (200.246), (447.746), (200.246), (447.746), (198.973), (446.812), (201.246), (446.75), (212.391), (448.555), (235.937), (493.953), (285.25), (488.746), (285.25), (488.742), (249.656), (504.148), (200.246), (447.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (200.246), (447.746), (200.246), (447.746), (198.973), (446.812), (201.246), (446.75), (212.391), (448.555), (235.937), (493.953), (285.25), (488.746), (285.25), (488.742), (249.656), (504.148), (200.246), (447.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (212.246), (454.75), (212.246), (454.75), (211.625), (453.348), (213.246), (453.746), (224.461), (457.637), (238.852), (506.711), (288.246), (510.746), (288.246), (510.742), (250.363), (519.348), (212.246), (454.75), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (212.246), (454.75), (212.246), (454.75), (211.625), (453.348), (213.246), (453.746), (224.461), (457.637), (238.852), (506.711), (288.246), (510.746), (288.246), (510.742), (250.363), (519.348), (212.246), (454.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (192.25), (442.746), (192.25), (442.742), (191.453), (441.449), (193.25), (441.75), (202.32), (442.863), (221.395), (479.633), (261.25), (474.75), (261.25), (474.75), (232.508), (487.891), (192.25), (442.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (192.25), (442.746), (192.25), (442.742), (191.453), (441.449), (193.25), (441.75), (202.32), (442.863), (221.395), (479.633), (261.25), (474.75), (261.25), (474.75), (232.508), (487.891), (192.25), (442.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (184.25), (435.75), (184.25), (435.75), (182.949), (434.945), (184.25), (434.746), (189.281), (435.414), (222.984), (471.801), (243.246), (454.75), (243.246), (454.75), (230.082), (475.344), (184.25), (435.75), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (184.25), (435.75), (184.25), (435.75), (182.949), (434.945), (184.25), (434.746), (189.281), (435.414), (222.984), (471.801), (243.246), (454.75), (243.246), (454.75), (230.082), (475.344), (184.25), (435.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (260.25), (470.75), (260.25), (470.75), (259.219), (472.699), (261.25), (472.75), (263.469), (473.547), (396.242), (537.031), (438.25), (522.746), (438.25), (522.746), (409.465), (534.84), (260.25), (470.75), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (260.25), (470.75), (260.25), (470.75), (259.219), (472.699), (261.25), (472.75), (263.469), (473.547), (396.242), (537.031), (438.25), (522.746), (438.25), (522.746), (409.465), (534.84), (260.25), (470.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (223.246), (400.75), (223.246), (400.75), (223.52), (402.457), (225.25), (401.746), (227.477), (400.695), (244.418), (400.035), (231.246), (375.75), (231.246), (375.75), (241.34), (401.797), (223.246), (400.75), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (223.246), (400.75), (223.246), (400.75), (223.52), (402.457), (225.25), (401.746), (227.477), (400.695), (244.418), (400.035), (231.246), (375.75), (231.246), (375.75), (241.34), (401.797), (223.246), (400.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (235.246), (401.746), (235.242), (401.746), (234.957), (404.219), (237.25), (403.746), (238.918), (402.457), (258.5), (400.035), (260.25), (357.746), (260.25), (357.746), (252.777), (403.559), (235.246), (401.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (235.246), (401.746), (235.242), (401.746), (234.957), (404.219), (237.25), (403.746), (238.918), (402.457), (258.5), (400.035), (260.25), (357.746), (260.25), (357.746), (252.777), (403.559), (235.246), (401.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (242.246), (403.746), (242.246), (403.746), (242.437), (405.977), (244.246), (404.75), (246.398), (404.219), (273.457), (400.477), (299.246), (364.75), (299.246), (364.75), (260.258), (405.316), (242.246), (403.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (242.246), (403.746), (242.246), (403.746), (242.437), (405.977), (244.246), (404.75), (246.398), (404.219), (273.457), (400.477), (299.246), (364.75), (299.246), (364.75), (260.258), (405.316), (242.246), (403.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (251.25), (405.746), (251.25), (405.742), (250.566), (408.164), (252.25), (407.746), (254.723), (406.945), (277.199), (409.031), (319.25), (371.75), (319.25), (371.75), (268.316), (409.875), (251.25), (405.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (251.25), (405.746), (251.25), (405.742), (250.566), (408.164), (252.25), (407.746), (254.723), (406.945), (277.199), (409.031), (319.25), (371.75), (319.25), (371.75), (268.316), (409.875), (251.25), (405.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (262.25), (410.75), (262.25), (410.75), (262.004), (413.004), (264.246), (412.746), (266.164), (411.785), (304.48), (406.832), (361.25), (368.746), (361.25), (368.746), (279.754), (414.715), (262.25), (410.75), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (262.25), (410.75), (262.25), (410.75), (262.004), (413.004), (264.246), (412.746), (266.164), (411.785), (304.48), (406.832), (361.25), (368.746), (361.25), (368.746), (279.754), (414.715), (262.25), (410.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (218.25), (423.746), (218.25), (423.746), (217.797), (425.777), (220.246), (424.75), (221.758), (424.016), (280.5), (421.156), (314.25), (391.75), (314.25), (391.75), (275.547), (418.93), (218.25), (423.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (218.25), (423.746), (218.25), (423.746), (217.797), (425.777), (220.246), (424.75), (221.758), (424.016), (280.5), (421.156), (314.25), (391.75), (314.25), (391.75), (275.547), (418.93), (218.25), (423.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (207.25), (419.75), (207.25), (419.75), (206.797), (421.379), (209.246), (420.746), (210.758), (419.617), (237.816), (415.879), (264.246), (379.746), (264.246), (379.746), (224.617), (420.719), (207.25), (419.75), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (207.25), (419.75), (207.25), (419.75), (206.797), (421.379), (209.246), (420.746), (210.758), (419.617), (237.816), (415.879), (264.246), (379.746), (264.246), (379.746), (224.617), (420.719), (207.25), (419.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (274.25), (415.75), (274.25), (415.75), (273.828), (418.031), (276.246), (417.75), (278.066), (417.125), (316.645), (414.992), (376.246), (380.75), (376.246), (380.75), (290.746), (418.625), (274.25), (415.75), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (274.25), (415.75), (274.25), (415.75), (273.828), (418.031), (276.246), (417.75), (278.066), (417.125), (316.645), (414.992), (376.246), (380.75), (376.246), (380.75), (290.746), (418.625), (274.25), (415.75), (10), (0), (1), (1), (1), (1), (1), (1), (5), (283.25), (418.746), (283.25), (418.742), (283.07), (420.672), (285.25), (419.75), (287.309), (419.762), (325.883), (417.633), (385.25), (383.746), (385.25), (383.742), (300.648), (421.703), (283.25), (418.746), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (283.25), (418.746), (283.25), (418.742), (283.07), (420.672), (285.25), (419.75), (287.309), (419.762), (325.883), (417.633), (385.25), (383.746), (385.25), (383.742), (300.648), (421.703), (283.25), (418.746), (10), (0), (1), (1), (1), (1), (1), (1), (5), (294.25), (424.75), (294.25), (424.75), (293.629), (426.172), (296.25), (425.746), (297.867), (425.262), (345.242), (420.492), (444.246), (382.75), (444.246), (382.75), (311.207), (427.203), (294.25), (424.75), (10), (0.11), (0), (0), (0), (0), (0), (0), (5), (294.25), (424.75), (294.25), (424.75), (293.629), (426.172), (296.25), (425.746), (297.867), (425.262), (345.242), (420.492), (444.246), (382.75), (444.246), (382.75), (311.207), (427.203), (294.25), (424.75), (10), (0), (0), (0), (0), (0), (0), (0), (4), (172.25), (416.746), (172.25), (416.742), (177.539), (417.195), (176.246), (415.75), (174.898), (413.676), (172.25), (414.746), (172.25), (414.746), (172.25), (416.746), (10), (0), (0), (0), (0), (0), (0), (0), (4), (205.25), (401.746), (205.25), (401.746), (211.418), (401.797), (210.246), (399.75), (208.777), (398.277), (206.25), (398.746), (206.25), (398.746), (205.25), (401.746), (10), (0), (0), (0), (0), (0), (0), (0), (4), (196.25), (401.746), (196.25), (401.746), (201.738), (402.238), (200.246), (400.75), (199.098), (398.719), (196.25), (399.75), (196.25), (399.75), (196.25), (401.746), (10), (0), (0), (0), (0), (0), (0), (0), (4), (91.25), (414.746), (91.25), (414.746), (96.6602), (413.344), (95.25), (411.746), (93.0156), (410.879), (91.25), (412.746), (91.25), (412.746), (91.25), (414.746), (10), (0), (0), (0), (0), (0), (0), (0), (4), (93.2461), (425.746), (93.2422), (425.746), (98.8633), (423.902), (97.25), (422.746), (95.2148), (421.441), (93.2461), (422.746), (93.2461), (422.746), (93.2461), (425.746), (10), (0), (0), (0), (0), (0), (0), (0), (4), (85.25), (429.746), (85.25), (429.742), (90.9414), (428.742), (89.2461), (427.746), (87.2969), (426.281), (85.25), (427.746), (85.25), (427.746), (85.25), (429.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (5), (173.25), (347.75), (173.25), (347.75), (171.379), (347.676), (167.25), (345.75), (164.777), (345.477), (152.457), (341.516), (146.25), (330.746), (146.25), (330.742), (159.938), (341.078), (173.25), (347.75), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (9), (269.246), (245.746), (269.781), (245.484), (269.84), (245.02), (270.25), (244.75), (270.887), (244.957), (272.242), (244.625), (272.25), (245.746), (271.172), (250.063), (270.211), (255.492), (265.246), (257.746), (264.961), (257.789), (263.375), (257.332), (263.25), (256.746), (263.156), (254.684), (263.027), (253.203), (263.25), (251.75), (263.695), (250.027), (266.07), (250.016), (267.246), (251.75), (268.109), (249.699), (268.582), (247.672), (269.246), (245.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (9), (257.246), (240.75), (258.262), (239.004), (258.121), (236.961), (259.25), (236.746), (260.492), (236.016), (262.527), (237.09), (262.25), (238.746), (261.188), (240.539), (260.758), (243), (259.25), (244.75), (259.012), (245.281), (259.277), (245.867), (259.25), (245.746), (258.445), (247.57), (257.188), (248.379), (255.246), (247.746), (254.41), (245.594), (255.676), (243.25), (257.246), (241.75), (257.5), (241.203), (257.316), (240.793), (257.246), (240.75), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (11), (214.25), (246.746), (213.758), (246.684), (213.719), (247.191), (214.25), (247.746), (214.484), (248.68), (215.355), (249.914), (215.25), (250.746), (214.602), (252.203), (213.375), (252), (212.246), (251.75), (211.41), (250.281), (211.355), (248.273), (210.246), (246.746), (210.379), (246.355), (210.438), (245.723), (210.246), (245.746), (209.43), (244.832), (208.945), (243.152), (209.246), (242.75), (209.109), (242.18), (208.91), (231.281), (209.246), (231.75), (209.836), (232.379), (213.188), (243.086), (213.246), (243.75), (213.328), (244.871), (214.133), (245.383), (214.25), (246.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (7), (185.25), (253.75), (188.574), (256.488), (191.641), (259.746), (191.246), (263.75), (191.027), (264.902), (189.074), (264.32), (189.246), (263.75), (187.988), (259.402), (185.746), (256.477), (183.25), (253.75), (180.504), (251.594), (178.457), (244.617), (178.246), (243.75), (182.266), (249.84), (184.746), (252.859), (185.25), (253.75), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (10), (170.246), (260.746), (171.32), (260.707), (170.988), (261.246), (171.246), (261.746), (172.273), (263.215), (173.707), (264.586), (173.25), (266.746), (173.73), (266.805), (173.313), (267.145), (173.25), (266.746), (172.641), (266.695), (172.262), (266.551), (172.25), (266.746), (169.91), (263.715), (168.371), (260.777), (167.25), (257.746), (166.582), (257.289), (165.324), (252.352), (165.246), (251.75), (165.934), (252.133), (167.824), (256.734), (168.25), (256.746), (169.445), (257.613), (169.457), (259.391), (170.246), (260.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (6), (189.246), (238.746), (189.641), (239.758), (191.371), (241.078), (191.246), (241.75), (191.117), (243.078), (191.633), (244.664), (190.246), (243.75), (189.246), (242.867), (185.453), (241.383), (185.25), (234.746), (185.129), (234.363), (188.398), (237.328), (189.246), (238.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (19), (205.25), (257.746), (205.477), (258.434), (206.258), (257.91), (207.25), (257.746), (207.473), (258.609), (208.148), (259.223), (208.25), (259.746), (209.535), (262.301), (211.48), (264.305), (211.246), (266.746), (209.996), (268.484), (209.25), (266.238), (208.25), (264.746), (207.102), (266.988), (206.004), (264.926), (204.25), (264.746), (204.496), (264.324), (204.262), (264.707), (204.25), (264.746), (202.887), (264.195), (202.137), (263.004), (201.246), (261.746), (200.852), (261.996), (200.406), (262.195), (200.246), (261.746), (199.527), (261.383), (198.457), (261.027), (198.246), (260.746), (196.93), (257.297), (193.473), (254.992), (191.246), (246.746), (191.816), (245.695), (196.359), (254.004), (197.25), (254.75), (197.816), (256.086), (197.945), (252.945), (199.246), (253.75), (199.406), (253.707), (199.609), (253.445), (200.246), (253.75), (199.973), (253.605), (200.211), (253.855), (200.246), (253.75), (200.637), (254.176), (200.492), (254.789), (200.246), (254.75), (202.074), (256.039), (201.98), (257.215), (203.25), (258.746), (203.344), (257.711), (204.508), (258.5), (205.25), (257.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (6), (271.25), (197.75), (271.25), (197.75), (278.957), (220.297), (274.25), (232.75), (274.25), (232.75), (286.656), (208.855), (281.25), (196.75), (281.25), (196.75), (281.156), (207.977), (277.246), (213.746), (277.246), (213.746), (272.359), (199.398), (271.25), (197.75), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (5), (254.246), (200.75), (254.246), (200.75), (260.477), (210.398), (251.25), (230.75), (251.25), (230.75), (250.797), (208.195), (243.246), (195.746), (243.246), (195.742), (258.937), (218.316), (254.246), (200.75), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (5), (243.246), (202.746), (243.246), (202.746), (243.316), (224.918), (244.246), (227.746), (244.246), (227.742), (239.578), (209.957), (228.25), (199.75), (228.25), (199.75), (244.199), (212.598), (243.246), (202.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (5), (233.246), (237.746), (233.246), (237.746), (239.578), (223.156), (228.25), (202.746), (228.25), (202.746), (235.617), (216.336), (230.25), (223.746), (230.25), (223.746), (233.199), (227.777), (233.246), (237.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (8), (212.246), (203.746), (212.246), (203.746), (210.758), (220.516), (212.246), (222.75), (212.246), (222.75), (212.957), (229.977), (212.246), (230.75), (212.246), (230.75), (216.918), (237.898), (217.25), (229.75), (217.25), (229.75), (218.68), (221.176), (222.246), (215.746), (222.246), (215.746), (225.719), (210.176), (225.25), (202.746), (225.25), (202.746), (214.5), (236.355), (212.246), (203.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (5), (208.25), (233.75), (208.25), (233.75), (200.637), (221.836), (198.246), (200.75), (198.246), (200.75), (197.117), (207.758), (201.246), (223.746), (201.246), (223.746), (205.918), (240.535), (208.25), (233.75), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (6), (184.25), (211.75), (184.25), (211.75), (189.418), (217.879), (191.246), (223.746), (191.242), (223.746), (194.918), (240.758), (188.246), (231.75), (188.246), (231.75), (188.098), (222.496), (179.246), (214.746), (179.246), (214.746), (184.359), (216.996), (184.25), (211.75), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (6), (177.246), (217.746), (177.246), (217.742), (181.277), (236.578), (182.25), (237.746), (182.25), (237.746), (184.137), (241.195), (181.25), (237.746), (181.25), (237.746), (171.379), (216.559), (167.25), (209.75), (167.25), (209.75), (175.777), (219.418), (177.246), (217.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (4), (171.246), (235.746), (171.246), (235.746), (183.918), (260.336), (160.246), (231.75), (160.246), (231.75), (172.039), (242.738), (171.246), (235.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (6), (154.246), (251.75), (154.242), (251.75), (159.5), (272.438), (162.25), (271.746), (162.25), (271.746), (171.379), (282.117), (164.246), (270.75), (164.242), (270.75), (157.52), (259.898), (158.25), (248.746), (158.25), (248.746), (157.52), (259.676), (154.246), (251.75), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (5), (517.246), (264.746), (517.242), (264.742), (504.348), (275.297), (501.25), (278.75), (501.25), (278.75), (516.449), (258.797), (516.25), (250.746), (516.25), (250.742), (519.199), (259.348), (517.246), (264.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (5), (523.25), (288.746), (523.25), (288.742), (500.5), (305), (496.25), (312.75), (496.25), (312.75), (525.797), (280.797), (526.246), (275.746), (526.242), (275.742), (526.348), (285.75), (523.25), (288.746), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (5), (542.246), (457.75), (542.246), (457.75), (529.098), (466.699), (527.25), (464.746), (527.25), (464.742), (539), (457.348), (542.246), (447.746), (542.246), (447.746), (540.098), (457.898), (542.246), (457.75), (10), (0), (0.8), (0.8), (0.8), (0.8), (0.8), (0.8), (4), (551.25), (369.75), (532.25), (382.75), (532.25), (382.75), (553.297), (363.848), (554.25), (359.746), (551.25), (369.75), (10), (1.1), (0), (0), (0), (0), (0), (0), (2), (122.246), (393.75), (146.25), (388.75), (10), (1.1), (0), (0), (0), (0), (0), (0), (2), (177.246), (215.746), (177.246), (215.746), (176.547), (219.75), (166.246), (207.75), (10), (1.1), (0), (0), (0), (0), (0), (0), (2), (183.25), (210.75), (183.25), (210.75), (185.348), (217.547), (178.246), (212.746), (10), (1.1), (0), (0), (0), (0), (0), (0), (2), (242.246), (200.75), (242.246), (200.75), (244.199), (213.148), (231.246), (198.75)];
return $1;
}, function($ctx1) {$ctx1.fill(self,"tigerPoints",{},smalltalk.AthensVGTigerDemo.klass)})},
messageSends: []}),
smalltalk.AthensVGTigerDemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tigerPointsCount",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (16988);
}, function($ctx1) {$ctx1.fill(self,"tigerPointsCount",{},smalltalk.AthensVGTigerDemo.klass)})},
messageSends: []}),
smalltalk.AthensVGTigerDemo.klass);



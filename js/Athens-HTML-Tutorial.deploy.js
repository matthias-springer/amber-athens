smalltalk.addPackage('Athens-HTML-Tutorial');
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
selector: "step2",
fn: function (){
var self=this;
function $AthensHTMLSurface(){return smalltalk.AthensHTMLSurface||(typeof AthensHTMLSurface=="undefined"?nil:AthensHTMLSurface)}
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=_st($AthensHTMLSurface())._extent_((500).__at((400)));
return self}, function($ctx1) {$ctx1.fill(self,"step2",{},smalltalk.AthensTutorial)})},
messageSends: ["extent:", "@"]}),
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




smalltalk.addPackage('Athens-HTML-Tutorial');
smalltalk.addClass('AthensTutorial', smalltalk.Object, ['surface'], 'Athens-HTML-Tutorial');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensTutorial)})},
args: [],
source: "initialize",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step1",
category: 'steps',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"step1",{},smalltalk.AthensTutorial)})},
args: [],
source: "step1\x0a\x09\x22Step 1: Get Athens into your image. \x22\x0a\x09\x22Does not apply for Athens-HTML.\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step10",
category: 'steps',
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
args: [],
source: "step10\x0a\x22Step 10: Loading matrix/using identity matrix.\x0a\x0a\x22\x0a\x0asurface drawDuring: [:canvas |  | m |\x0a\x09surface clear: Color gray. \x0a\x0a\x09canvas setShape: (0@0 corner: 100@100).\x0a\x09canvas setPaint: (Color blue).\x0a\x0a\x09canvas pathTransform\x0a\x09\x09scaleBy: 4;\x0a\x09\x09translateX: 50 Y: 50;\x0a\x09\x09rotateByDegrees: 35;\x0a\x09\x09translateX: -50 Y: -50.\x0a\x09\x0a\x09\x22obtaining a current transformation matrix\x22\x0a\x09m := canvas pathTransform getMatrix.\x09\x0a\x09\x09\x0a\x09canvas draw.\x0a\x0a\x0a\x09\x22The following statement resets coordinate transformation to match surface's coordinate space\x22\x0a\x09canvas pathTransform loadIdentity.\x0a\x09\x0a\x09canvas setPaint: (Color yellow).\x0a\x09canvas draw.\x0a\x0a\x09\x22Now load the matrix back\x22\x0a\x09\x0a\x09canvas pathTransform \x0a\x09\x09loadAffineTransform: m;\x0a\x09\x0a\x09\x22Offset it a bit\x22\x0a\x09\x09translateX: 2 Y: 2.\x0a\x09\x09\x0a\x09canvas setPaint: (Color gray alpha:0.8).\x0a\x0a\x09canvas draw.\x0a\x09\x09\x0a\x09]",
messageSends: ["drawDuring:", "clear:", "gray", "setShape:", "corner:", "@", "setPaint:", "blue", "scaleBy:", "pathTransform", "translateX:Y:", "rotateByDegrees:", "getMatrix", "draw", "loadIdentity", "yellow", "loadAffineTransform:", "alpha:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step11",
category: 'steps',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"step11",{},smalltalk.AthensTutorial)})},
args: [],
source: "step11\x0a\x22Step 11: Some important aspects of transforms:\x0a\x0a\x0a  * the transformation matrix is not accessible for direct manipulation,\x0a\x09instead you can only modify the current transformation, by using different manipulation methods \x0a\x0a  * remember that the order of transformation is important, e.g. translate then scale is not the same than\x0a\x09scale then translate, even if you using very same values.\x0a\x0a  * all transformations are conform to AthensTransform protocol. (we're not covering full protocol in this tutorial)\x0a\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step12",
category: 'steps',
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
args: [],
source: "step12\x0a\x0a\x22Step 12: Building complex shapes using paths.\x0a\x0aSo far, we used only rectangles as shapes, now time to create something more interesting.\x0a\x0a\x22\x0a\x0a\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09| path |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x0a\x09\x09canvas pathTransform translateX: surface width/2.0 Y: surface height / 2.0 .\x0a\x09\x0a\x09\x09\x22To create a path, use #createPath: protocol.\x0a\x09\x09The block should accept a single argument, where AthensPathBuilder instance will be passed\x22\x09\x0a\x09\x09path := canvas createPath: [:builder |\x0a\x09\x09\x09\x0a\x09\x09\x09\x22A simple polygon\x22\x0a\x09\x09\x09builder \x0a\x09\x09\x09\x09absolute;\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x22The path consists from a list of connected segments connected with each other\x22 \x0a\x09\x09\x09\x09lineTo: -50@ -50;\x0a\x09\x09\x09\x09lineTo: 60@ -60;\x0a\x09\x09\x09\x09lineTo: 150@50;\x0a\x09\x09\x09\x09lineTo: 0@0\x0a\x09\x09\x09].\x0a\x09\x0a\x09\x09canvas setShape: path.\x0a\x09\x09\x0a\x09\x09\x22Here we're using stroke paint to show the edges of path (more on stroke paints later)\x22\x0a\x09\x09(canvas setStrokePaint: Color white) width:4.\x0a\x09\x09\x0a\x09\x09\x22If you want to fill the path instead, uncomment the line below\x22\x0a\x09\x09\x22canvas setPaint: Color white.\x22\x0a\x09\x09\x0a\x09\x09\x0a\x09\x09canvas draw.\x0a\x09].",
messageSends: ["drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "createPath:", "absolute", "lineTo:", "@", "setShape:", "width:", "setStrokePaint:", "white", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step13",
category: 'steps',
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
args: [],
source: "step13\x0a\x0a\x22Step 13: Building complex shapes using paths.\x0a\x0aFor complex and large paths, building it every time could be ineffective and computationally intensive. \x0aInstead you can use surface factory method (#createPath:) to create a path object\x0aat any point, and use it later, whenever you see fit.\x0a\x0aNote, that since we're not using canvas, it is not necessary to put path creation inside #drawDuring: method.\x0a\x22\x0a\x09| path |\x0a\x0a\x09path := surface createPath: [:builder |\x0a\x09\x09\x09\x0a\x09\x09\x09\x22A simple polygon\x22\x0a\x09\x09builder \x0a\x09\x09\x09absolute;\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x22The path consists from a list of connected segments connected with each other\x22 \x09\x09\x09\x09\x0a\x09\x09\x09lineTo: -50@ -50;\x0a\x09\x09\x09lineTo: 60@ -60;\x0a\x09\x09\x09lineTo: 150@50;\x0a\x09\x09\x09lineTo: 0@0\x0a\x09\x09].\x0a\x0a\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x0a\x09\x09canvas pathTransform translateX: surface width/2.0 Y: surface height / 2.0 .\x0a\x09\x0a\x09\x09canvas setShape: path.\x0a\x0a\x09\x09(canvas setStrokePaint: Color yellow) width:4.\x0a\x09\x09\x0a\x09\x09canvas draw.\x0a\x09].",
messageSends: ["createPath:", "absolute", "lineTo:", "@", "drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "setShape:", "width:", "setStrokePaint:", "yellow", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step14",
category: 'steps',
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
args: [],
source: "step14\x0a\x22Step 14: Various path segment types.\x0a\x0a\x0a\x22\x0a\x09| path |\x0a\x0a\x09path := surface createPath: [:builder |\x0a\x09\x09\x09\x0a\x09\x09builder \x0a\x09\x09\x09absolute;\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x22The path consists from a list of segments connected with each other, e.g.\x0a\x09\x09\x09the starting point of next segment is always an end point of previous one\x22\x0a\x09\x09\x09 \x09\x09\x09\x09\x0a\x09\x09\x09lineTo: -50@ -50;\x0a\x09\x09\x09\x0a\x09\x09\x09\x22quadric Bezier curve\x22\x0a\x09\x09\x09\x0a\x09\x09\x09curveVia: 0@ -80 to: 50@ -50;\x0a\x09\x09\x09\x0a\x09\x09\x09\x22cubic Bezier curve\x22 \x0a\x09\x09\x09\x0a\x09\x09\x09curveVia: 100@ -20 and: -50@20 to: 50@ 50;\x0a\x0a\x09\x09\x09 \x22clockwise arc\x22\x0a\x09\x09\x09\x0a\x09\x09\x09cwArcTo: 50@100 angle: 45; \x0a\x09\x09\x09\x0a\x09\x09\x09\x22counter-clockwise arc\x22\x0a\x0a\x09\x09\x09ccwArcTo: -50@100 angle: 45.\x0a\x09\x09\x09\x0a\x09\x09\x09\x22close segment. Simply connects endpoint of previous segment with path starting point.\x0a\x09\x09\x09Try to comment following line to see the difference\x22 \x0a\x09\x09\x09builder close.\x0a\x09\x09].\x0a\x0a\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x0a\x09\x09canvas pathTransform\x0a\x09\x09\x09translateX: surface width/2.0 Y: surface height / 2.0 ;\x0a\x09\x09\x09scaleBy:2.\x0a\x09\x0a\x09\x09canvas setShape: path.\x0a\x09\x09\x0a\x09\x09(canvas setStrokePaint: Color yellow) width:4.\x0a\x09\x09\x0a\x09\x09canvas draw.\x0a\x09].",
messageSends: ["createPath:", "absolute", "lineTo:", "@", "curveVia:to:", "curveVia:and:to:", "cwArcTo:angle:", "ccwArcTo:angle:", "close", "drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "scaleBy:", "setShape:", "width:", "setStrokePaint:", "yellow", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step14a",
category: 'steps',
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
args: [],
source: "step14a\x0a\x22Step 14a: Various path segment types.\x0a\x0a\x0a\x22\x0a\x09| path |\x0a\x0a\x09path := surface createPath: [:builder |\x0a\x09\x09\x09\x0a\x09\x09builder \x0a\x09\x09\x09absolute;\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x22The path consists from a list of segments connected with each other, e.g.\x0a\x09\x09\x09the starting point of next segment is always an end point of previous one\x22\x0a\x09\x09\x09 \x09\x09\x09\x09\x0a\x09\x09\x09lineTo: -50@ -50;\x0a\x09\x09\x09\x0a\x09\x09\x09\x22quadric Bezier curve\x22\x0a\x09\x09\x09\x0a\x09\x09\x09curveVia: 0@ -80 to: 50@ -50;\x0a\x09\x09\x09\x0a\x09\x09\x09\x22cubic Bezier curve\x22 \x0a\x09\x09\x09\x0a\x09\x09\x09curveVia: 100@ -20 and: -50@20 to: 50@ 50.\x0a\x0a\x09\x09\x09 \x22clockwise arc\x22\x0a\x09\x09\x09\x0a\x09\x09\x09\x22cwArcTo: 50@100 angle: 45; \x22\x0a\x09\x09\x09\x0a\x09\x09\x09\x22counter-clockwise arc\x22\x0a\x0a\x09\x09\x09\x22ccwArcTo: -50@100 angle: 45.\x22\x0a\x09\x09\x09\x0a\x09\x09\x09\x22close segment. Simply connects endpoint of previous segment with path starting point.\x0a\x09\x09\x09Try to comment following line to see the difference\x22 \x0a\x09\x09\x09builder close.\x0a\x09\x09].\x0a\x0a\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x0a\x09\x09canvas pathTransform\x0a\x09\x09\x09translateX: surface width/2.0 Y: surface height / 2.0 ;\x0a\x09\x09\x09scaleBy:2.\x0a\x09\x0a\x09\x09canvas setShape: path.\x0a\x09\x09\x0a\x09\x09(canvas setStrokePaint: Color yellow) width:4.\x0a\x09\x09\x0a\x09\x09canvas draw.\x0a\x09].",
messageSends: ["createPath:", "absolute", "lineTo:", "@", "curveVia:to:", "curveVia:and:to:", "close", "drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "scaleBy:", "setShape:", "width:", "setStrokePaint:", "yellow", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step14b",
category: 'steps',
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
args: [],
source: "step14b\x0a\x22Step 14b: Various path segment types.\x0a\x0a\x0a\x22\x0a\x09| path |\x0a\x0a\x09path := surface createPath: [:builder |\x0a\x09\x09\x09\x0a\x09\x09builder \x0a\x09\x09\x09absolute;\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x22The path consists from a list of segments connected with each other, e.g.\x0a\x09\x09\x09the starting point of next segment is always an end point of previous one\x22\x0a\x09\x09\x09 \x09\x09\x09\x09\x0a\x09\x09\x09\x22lineTo: -50@ -50;\x22\x0a\x09\x09\x09\x0a\x09\x09\x09\x22quadric Bezier curve\x22\x0a\x09\x09\x09\x0a\x09\x09\x09\x22curveVia: 0@ -80 to: 50@ -50;\x22\x0a\x09\x09\x09\x0a\x09\x09\x09\x22cubic Bezier curve\x22 \x0a\x09\x09\x09\x0a\x09\x09\x09\x22curveVia: 100@ -20 and: -50@20 to: 50@ 50;\x22\x0a\x0a\x09\x09\x09 \x22clockwise arc\x22\x0a\x09\x09\x09\x0a\x09\x09\x09cwArcTo: 50@100 angle: 45;\x0a\x09\x09\x09\x0a\x09\x09\x09\x22counter-clockwise arc\x22\x0a\x0a\x09\x09\x09ccwArcTo: -50@100 angle: 45.\x0a\x09\x09\x09\x0a\x09\x09\x09\x22close segment. Simply connects endpoint of previous segment with path starting point.\x0a\x09\x09\x09Try to comment following line to see the difference\x22 \x0a\x09\x09\x09builder close.\x0a\x09\x09].\x0a\x0a\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x0a\x09\x09canvas pathTransform\x0a\x09\x09\x09translateX: surface width/2.0 Y: surface height / 5.0 ;\x0a\x09\x09\x09scaleBy:1.\x0a\x09\x0a\x09\x09canvas setShape: path.\x0a\x09\x09\x0a\x09\x09(canvas setStrokePaint: Color yellow) width:4.\x0a\x09\x09\x0a\x09\x09canvas draw.\x0a\x09].",
messageSends: ["createPath:", "absolute", "cwArcTo:angle:", "@", "ccwArcTo:angle:", "close", "drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "scaleBy:", "setShape:", "width:", "setStrokePaint:", "yellow", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step15",
category: 'steps',
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
args: [],
source: "step15\x0a\x22Step 15: Path origin and moveTo: segment.\x0a\x0a\x0a\x22\x0a\x09| path |\x0a\x0a\x09path := surface createPath: [:builder |\x0a\x09\x09\x09\x0a\x09\x09builder \x0a\x09\x09\x09absolute;\x0a\x0a\x09\x09\x09\x22All paths always having same origin, which is (0@0) point.\x0a\x09\x09\x09To use different origin, use #moveTo: as initial command.\x0a\x09\x09\x09Try to change moveTo: parameter to see the difference\x22\x0a\x0a\x09\x09\x09 \x09\x09\x09\x09\x0a\x09\x09\x09moveTo: -50@ -50;\x0a\x09\x09\x09\x0a\x09\x09\x09\x22quadric Bezier curve\x22\x0a\x09\x09\x09\x0a\x09\x09\x09curveVia: 0@ -80 to: 50@ -50;\x0a\x09\x09\x09\x0a\x09\x09\x09\x22cubic Bezier curve\x22 \x0a\x09\x09\x09\x0a\x09\x09\x09curveVia: 100@ -20 and: -50@20 to: 50@ 50;\x0a\x0a\x09\x09\x09 \x22clockwise arc\x22\x0a\x09\x09\x09\x0a\x09\x09\x09cwArcTo: 50@100 angle: 45; \x0a\x09\x09\x09\x0a\x09\x09\x09\x22counter-clockwise arc\x22\x0a\x0a\x09\x09\x09ccwArcTo: -50@100 angle: 45.\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09].\x0a\x0a\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x0a\x09\x09canvas pathTransform\x0a\x09\x09\x09translateX: surface width/2.0 Y: surface height / 2.0 ;\x0a\x09\x09\x09scaleBy:2.\x0a\x09\x0a\x09\x09canvas setShape: path.\x0a\x09\x09(canvas setStrokePaint: Color yellow) width:4.\x0a\x09\x09\x0a\x09\x09canvas draw.\x0a\x09].",
messageSends: ["createPath:", "absolute", "moveTo:", "@", "curveVia:to:", "curveVia:and:to:", "cwArcTo:angle:", "ccwArcTo:angle:", "drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "scaleBy:", "setShape:", "width:", "setStrokePaint:", "yellow", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step16",
category: 'steps',
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
args: [],
source: "step16\x0a\x22Step 16: Absolute versus relative path building mode.\x0a\x0a\x0a\x22\x0a\x09| path |\x0a\x0a\x09path := surface createPath: [:builder |\x0a\x0a\x09\x22In absolute path building mode, all segment coordinates is absolute (relative to coordinate system origin which is 0@0).\x0a\x09\x0a\x09In relative path building mode, the coordinates of next segment computed relative\x0a\x09to the end point of previous segment\x22\x0a\x09\x0a\x09\x09\x09\x0a\x09\x09builder \x0a\x09\x09\x09relative;  \x22actually, relative is default. You can simply delete this line without any effect\x22\x0a\x0a\x09\x09\x09moveTo: -50@ -50;\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09lineTo: 50@0;\x0a\x09\x09\x09\x0a\x09\x09\x09\x22The building mode can be switched at any moment. \x0a\x09\x09\x09Try to uncomment line below to see the difference\x22\x0a\x09\x09\x09\x22absolute;\x22\x0a\x09\x09\x09\x0a\x09\x09\x09lineTo: 0@50;\x0a\x09\x09\x09lineTo: -50@0\x0a\x09\x09].\x0a\x0a\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x0a\x09\x09canvas pathTransform\x0a\x09\x09\x09translateX: surface width/2.0 Y: surface height / 2.0 ;\x0a\x09\x09\x09scaleBy:2.\x0a\x09\x0a\x09\x09canvas setShape: path.\x0a\x09\x09(canvas setStrokePaint: Color yellow) width:4.\x0a\x09\x09\x0a\x09\x09canvas draw.\x0a\x09].",
messageSends: ["createPath:", "relative", "moveTo:", "@", "lineTo:", "drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "scaleBy:", "setShape:", "width:", "setStrokePaint:", "yellow", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step2",
category: 'steps',
fn: function (){
var self=this;
function $AthensHTMLSurface(){return smalltalk.AthensHTMLSurface||(typeof AthensHTMLSurface=="undefined"?nil:AthensHTMLSurface)}
return smalltalk.withContext(function($ctx1) { 
self["@surface"]=_st($AthensHTMLSurface())._extent_((500).__at((400)));
return self}, function($ctx1) {$ctx1.fill(self,"step2",{},smalltalk.AthensTutorial)})},
args: [],
source: "step2\x0a\x22Step 2:\x0a\x0aCreating a surface.\x0a\x0aProtocol:\x0a\x0a<SurfaceClass> extent: x@y\x0a\x0awill create a surface using specific class.\x0a\x0aAll surfaces is conformant to AthensSurface protocol.\x0a\x0aExample: \x0a\x22\x0a\x0asurface := AthensHTMLSurface extent: 500@400.\x0a\x0a\x22surface := AthensCairoSurface extent: self extent asIntegerPoint.\x22\x0a\x0a\x22IMPORTANT NOTE:\x0a\x09the surface which we will create at this step will be used in later steps.\x0a\x09This means that if you resize the window (changing the view size), you may need to recreate surface.\x0a\x09Also, since surface uses external resources, quitting an image and restarting it, will also require to \x0a\x09create a new surface, because the one from previous session will be no longer accessible.\x0a\x22",
messageSends: ["extent:", "@"],
referencedClasses: ["AthensHTMLSurface"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step3",
category: 'steps',
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
args: [],
source: "step3\x0a\x22Step 3: Start drawing.\x0a\x0aAny drawing operations on surface is performed within #drawDuring: block.\x0aThere is no other (valid) way of obtaining canvas instance. \x0a\x22\x0a\x0asurface drawDuring: [:canvas |\x0a\x09\x0a\x09\x22First, we clear the surface\x22\x0a\x09surface clear. \x0a\x09\x0a\x09\x22we can use \x0a\x09\x0a\x09surface clear: Color black.  \x0a\x09\x0a\x09as well. A #clear is equivalent to: (surface clear: Color transparent).   \x22\x0a\x09\x0a\x09\x22Let''s draw a simple green rectangle\x22\x0a\x09canvas setPaint: Color green.\x0a\x09canvas setShape: (40@40 corner: 100@100).\x0a\x09canvas draw.\x0a\x0a\x09]\x0a\x0a\x22Important to note:\x0a\x0a- canvas instance should be used only within #drawDuring: scope.\x0a\x0a\x22\x0a",
messageSends: ["drawDuring:", "clear", "setPaint:", "green", "setShape:", "corner:", "@", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step4",
category: 'steps',
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
args: [],
source: "step4\x0a\x22Step 4: Shapes and paints.\x0a\x0a\x22\x0a\x0asurface drawDuring: [:canvas |\x0a\x09surface clear: Color black. \x0a\x09\x0a\x09\x22There's two objects involved in any draw operation: \x0a\x09\x09- paint\x0a\x09\x09- shape\x0a\x09\x09\x0a\x09The #draw API method simply fills current shape with current paint.\x0a\x09\x22\x0a\x09\x0a\x09\x22To set current paint, use #setPaint: method \x22\x0a\x0a\x09canvas setPaint: Color green.\x0a\x0a\x09\x22To set current shape use #setShape: method \x22\x0a\x0a\x09canvas setShape: (40@40 corner: 100@100).\x0a\x0a\x09\x22Nothing will be drawn until #draw command will be issued: \x22\x0a\x09canvas draw.\x0a\x0a\x09]\x0a",
messageSends: ["drawDuring:", "clear:", "black", "setPaint:", "green", "setShape:", "corner:", "@", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step5",
category: 'steps',
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
args: [],
source: "step5\x0a\x22Step 5: Coordinates. \x0a\x0aThe initial coordinate space set up to cover entire surface using its dimensions. \x22\x0a\x0asurface drawDuring: [:canvas |\x0a\x09surface clear: Color black. \x0a\x0a\x0a\x09\x22x axis: goes from left to right\x22\x0a\x0a\x09canvas setPaint: Color red.\x0a\x09\x0a\x09\x22here we're using #drawShape: convenience method, which is simply\x0a\x09  setShape: + draw \x22\x0a\x09\x0a\x09canvas drawShape: (0@0 corner: surface width@5).\x0a\x09\x0a\x0a\x09\x22y axis: goes from top to bottom\x22\x0a\x09canvas setPaint: Color blue.\x0a\x0a\x09canvas drawShape: (0@0 corner: 5@surface height).\x0a\x0a\x09\x09\x0a\x0a\x09]",
messageSends: ["drawDuring:", "clear:", "black", "setPaint:", "red", "drawShape:", "corner:", "@", "width", "blue", "height"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step6",
category: 'steps',
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
args: [],
source: "step6\x0a\x09\x22Step 6: Transforming coordinate space.\x0a\x09\x0a\x09There are two transformation matrices which control coordinate space:\x0a\x09   - path transform\x0a\x09   - paint transform\x0a\x09\x0a\x09Both transformations represented by affine transformation matrices.\x0a\x09(See AthensAffineTransform class for details).\x0a\x09\x0a\x09Accessing path transform:\x0a\x09\x0a\x09  <canvas> pathTransform\x0a\x09\x0a\x09Accessing paint transform:\x0a\x09\x0a\x09  <canvas> paintTransform\x0a\x22\x0a\x0asurface drawDuring: [:canvas |\x0a\x09surface clear: Color black. \x0a\x0a\x09\x22Here, we're translating the canvas coordinate system origin, \x0a\x09so now it will be at 100@50 in surface's coordinate system\x22\x0a\x09\x0a\x09canvas pathTransform translateX: 100 Y: 50.\x0a\x09\x22x axis\x22\x0a\x0a\x09canvas setPaint: Color red.\x0a\x09\x0a\x09canvas drawShape: (0@0 corner: surface width@5).\x0a\x09\x0a\x0a\x09\x22y axis\x22\x0a\x09canvas setPaint: Color blue.\x0a\x0a\x09canvas drawShape: (0@0 corner: 5@surface height).\x0a\x0a\x09\x0a\x09]\x0a",
messageSends: ["drawDuring:", "clear:", "black", "translateX:Y:", "pathTransform", "setPaint:", "red", "drawShape:", "corner:", "@", "width", "blue", "height"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step7",
category: 'steps',
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
args: [],
source: "step7\x0a\x09\x22Step 7: Scaling.\x0a\x09\x0a\x0a\x09Protocol: \x0a\x09<transform> scaleBy: <scalar/point>\x0a\x09\x0a\x09or:\x0a\x09\x0a\x09<transform> scaleX: <x scale> Y: <y scale>\x0a\x09\x09\x0a\x22\x0a\x0asurface drawDuring: [:canvas |\x0a\x09surface clear: Color gray. \x0a\x0a\x09canvas setShape: (0@0 corner: 100@100).\x0a\x09\x0a\x09canvas setPaint: Color white.\x0a\x0a\x09canvas draw.\x0a\x09\x0a\x09\x22try to vary the scale argument to see the difference\x22\x0a\x09canvas pathTransform scaleBy: 2.\x0a\x0a\x09canvas setPaint: (Color yellow alpha: 0.3).\x0a\x09canvas draw.\x0a\x0a\x09]\x0a",
messageSends: ["drawDuring:", "clear:", "gray", "setShape:", "corner:", "@", "setPaint:", "white", "draw", "scaleBy:", "pathTransform", "alpha:", "yellow"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step8",
category: 'steps',
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
args: [],
source: "step8\x0a\x0a\x22Step 8: Rotating.\x0a\x09\x0a\x0a\x09Protocol: \x0a\x09<transform> rotateByDegrees: <scalar>\x0a\x09\x0a\x09or:\x0a\x09\x0a\x09<transform> rotateByRadians: <scalar>\x0a\x09\x09\x0a\x22\x0a\x0asurface drawDuring: [:canvas |\x0a\x09surface clear: Color gray. \x0a\x0a\x09canvas setShape: (0@0 corner: 100@100).\x0a\x09canvas setPaint: (Color blue).\x0a\x0a\x09canvas pathTransform\x0a\x09\x09scaleBy:3;\x0a\x09\x09translateX: 50 Y: 50.\x0a\x0a\x09canvas draw.\x0a\x09\x09\x0a\x09canvas setPaint: Color yellow.\x0a\x09\x0a\x09canvas pathTransform\x0a\x09\x09translateX: 50 Y: 50;\x0a\x09\x09scaleBy: 0.7@0.5;\x0a\x09\x09\x0a\x09\x09rotateByDegrees: 45;\x0a\x09\x09\x22You can also use #rotateByRadians: if it fits better for you. \x0a\x09\x09There is no #rotate: because it ambiguous\x22\x0a\x09\x0a\x09\x09translateX: -50 Y: -50.\x0a\x0a\x09canvas draw.\x0a\x0a\x09]",
messageSends: ["drawDuring:", "clear:", "gray", "setShape:", "corner:", "@", "setPaint:", "blue", "scaleBy:", "pathTransform", "translateX:Y:", "draw", "yellow", "rotateByDegrees:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step9",
category: 'steps',
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
args: [],
source: "step9\x0a\x22Step 9: Saving & restoring transformation.\x0a\x09\x0a\x09Protocol: \x0a\x09<transform> restoreAfter: [ block ]\x0a\x09\x0a\x22\x0a\x0asurface drawDuring: [:canvas |\x0a\x09surface clear: Color gray. \x0a\x0a\x09canvas setShape: (0@0 corner: 100@100).\x0a\x0a\x09canvas pathTransform \x0a\x09\x09scaleBy:3;\x0a\x09\x09translateX: 50 Y: 50.\x0a\x0a\x22Try to comment #restoreAfter: , to run the code inside without it\x0aand see the difference\x22\x0a\x0a\x09canvas pathTransform restoreAfter: [\x0a\x09\x09\x0a\x09\x09canvas setPaint: (Color blue).\x0a\x09\x0a\x09\x09canvas pathTransform\x0a\x09\x09\x09translateX: 50 Y: 50;\x0a\x09\x09\x09rotateByDegrees: 45;\x0a\x09\x09\x09translateX: -50 Y: -50.\x0a\x0a\x09\x09canvas draw.\x0a\x09].\x0a\x0a\x09canvas setPaint: (Color yellow).\x0a\x09canvas draw.\x0a\x09]",
messageSends: ["drawDuring:", "clear:", "gray", "setShape:", "corner:", "@", "scaleBy:", "pathTransform", "translateX:Y:", "restoreAfter:", "setPaint:", "blue", "rotateByDegrees:", "draw", "yellow"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);




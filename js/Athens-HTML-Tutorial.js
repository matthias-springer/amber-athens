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
source: "step16\x0a\x22Step 16: Absolute versus relative path building mode.\x0a\x0a\x0a\x22\x0a\x09| path |\x0a\x0a\x09path := surface createPath: [:builder |\x0a\x0a\x09\x22In absolute path building mode, all segment coordinates is absolute (relative to coordinate system origin which is 0@0).\x0a\x09\x0a\x09In relative path building mode, the coordinates of next segment computed relative\x0a\x09to the end point of previous segment\x22\x0a\x09\x0a\x09\x09\x09\x0a\x09\x09builder \x0a\x09\x09\x09relative;  \x22actually, relative is default. You can simply delete this line without any effect\x22\x0a\x0a\x09\x09\x09moveTo: -50@ -50;\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09lineTo: 50@0;\x0a\x09\x09\x09\x0a\x09\x09\x09\x22The building mode can be switched at any moment. \x0a\x09\x09\x09Try to uncomment line below to see the difference\x22\x0a\x09\x09\x09\x22absolute;\x22\x0a\x09\x09\x09\x0a\x09\x09\x09lineTo: 0@50;\x0a\x09\x09\x09lineTo: -50@0.\x0a\x09\x09].\x0a\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x0a\x09\x09canvas pathTransform\x0a\x09\x09\x09translateX: surface width/2.0 Y: surface height / 2.0 ;\x0a\x09\x09\x09scaleBy:2.\x0a\x09\x0a\x09\x09canvas setShape: path.\x0a\x09\x09(canvas setStrokePaint: Color yellow) width:4.\x0a\x09\x09\x0a\x09\x09canvas draw.\x0a\x09].",
messageSends: ["createPath:", "relative", "moveTo:", "@", "lineTo:", "drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "scaleBy:", "setShape:", "width:", "setStrokePaint:", "yellow", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step17",
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
args: [],
source: "step17\x0a\x22Step 17: Self-intersecting paths and how they are filled.\x0a\x0a\x0aThere is a simple algorithm to determine whether given point will be filled or not: \x0a - take an arbitrary point, infinitely distant from path interior and connect it with a point under the question.\x0a - count how many times the resulting ray intersects with path segments\x0a - if number of intersections is odd, then given point will be filled\x0a - if number of intersections is even, then given point will NOT be filled \x0a\x22\x0a\x09| path |\x0a\x0a\x09path := surface createPath: [:builder |\x0a\x09\x09\x09\x0a\x09\x09builder \x0a\x09\x09\x09moveTo: -50@ -50;\x0a\x09\x09\x09lineTo: 50@0;\x0a\x09\x09\x09lineTo: 0@50;\x0a\x09\x09\x09lineTo: -50@0;\x0a\x09\x09\x09lineTo: 80@ -30;\x0a\x09\x09\x09close\x0a\x09\x09].\x0a\x0a\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x0a\x09\x09canvas pathTransform\x0a\x09\x09\x09translateX: surface width/2.0 Y: surface height / 2.0 ;\x0a\x09\x09\x09scaleBy:3.\x0a\x09\x0a\x09\x09canvas setShape: path.\x0a\x09\x09canvas setPaint: Color yellow.\x0a\x09\x09canvas draw.\x0a\x09\x09\x0a\x09\x09canvas pathTransform loadIdentity.\x0a\x09\x09\x22draw a line to demonstrate imaginery ray\x22\x0a\x09\x09\x0a\x09\x09canvas setStrokePaint: Color blue.\x0a\x09\x09\x0a\x09\x09canvas drawShape: (canvas createPath: [:b | b lineTo:300@300 ])\x0a\x09].",
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "close", "drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "scaleBy:", "setShape:", "setPaint:", "yellow", "draw", "loadIdentity", "setStrokePaint:", "blue", "drawShape:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step18",
category: 'steps',
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
args: [],
source: "step18\x0a\x22Step 18: Creating hollow shapes using multiple contours.\x0a\x0a\x22\x0a\x09| path |\x0a\x0a\x09path := surface createPath: [:builder |\x0a\x09\x09\x09\x0a\x09\x09builder \x0a\x09\x09\x0a\x09\x09\x09\x22The first contour is a rectangle\x22\x0a\x0a\x09\x09\x09moveTo: -50@ -50;\x0a\x09\x09\x09lineTo: 50@0;\x09\x09\x09\x0a\x09\x09\x09lineTo: 0@50;\x0a\x09\x09\x09lineTo: -50@0;\x0a\x09\x09\x09close;\x0a\x09\x09\x09\x0a\x09\x09\x09\x22A second contour is a rectangle, embedded into previous one. \x22\x0a\x09\x09\x09\x0a\x09\x09\x09\x22Important to note here: a close and moveTo: commands are ones \x0a\x09\x09\x09which starting new contour. If there is no #close segment, but\x0a\x09\x09\x09moveTo: , it is counted as if implicit #close segment were added. \x0a\x09\x09\x09This is of course relevant only for filled paths, not stoked ones\x22\x0a\x09\x09\x09\x09\x0a\x09\x09\x09moveTo: 10@10;\x0a\x09\x09\x09lineTo: 0@30;\x0a\x09\x09\x09lineTo: 30@0;\x0a\x09\x09\x09lineTo: 0@ -30;\x0a\x09\x09\x09close.\x0a\x09\x09\x09\x0a\x09\x09\x09\x22An important note here: the winding of contours must be different in order \x0a\x09\x09\x09to exclude the area inside one contour from another.\x0a\x09\x09\x09If contours having same winding (both clockwise or both counter-clockwise,\x0a\x09\x09\x09they will be both filled.\x22\x0a\x0a\x0a\x09\x09\x09\x22The third rectangle intersecting with both contours, try to change the initial moveTo: \x0a\x09\x09\x09segment coordinates to draw it outside or inside and see the difference\x22\x0a\x09\x09\x09builder\x0a\x09\x09\x09moveTo: 25@10;\x0a\x09\x09\x09lineTo: 0@10;\x0a\x09\x09\x09lineTo: 10@0;\x0a\x09\x09\x09lineTo: 0@ -10;\x0a\x09\x09\x09close.\x0a\x0a\x09\x09].\x0a\x0a\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x0a\x09\x09canvas pathTransform\x0a\x09\x09\x09translateX: surface width/2.0 Y: surface height / 2.0 ;\x0a\x09\x09\x09scaleBy:3.\x0a\x09\x0a\x09\x09canvas setShape: path.\x0a\x09\x09canvas setPaint: Color yellow.\x0a\x09\x09\x0a\x09\x09canvas draw.\x0a\x09].",
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "close", "drawDuring:", "clear:", "gray", "translateX:Y:", "/", "width", "height", "pathTransform", "scaleBy:", "setShape:", "setPaint:", "yellow", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step19",
category: 'steps',
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
args: [],
source: "step19\x0a\x22Step 19: Using gradient paints.\x0a\x0a\x0aSo far we're use a simplest kind of paint: just a solid color.\x0aNow let's play with gradients.\x0a\x22\x0a\x09| linearGradient |\x0a\x0a\x0a\x09\x22A linear gradient defined used 3 parameters:\x0a\x09 - a color ramp (a points in range from 0 to 1 with associated colors)\x0a\x09- origin (starting) point\x0a\x09- end (stop) point\x0a\x09\x0a\x09A vector connecting start and stop defines the direction which gradient will be facing,\x0a\x09as well as its dimensions. \x22\x09\x0a\x09linearGradient := surface createLinearGradient: {\x0a\x09\x09\x090 -> Color blue .\x0a\x09\x09\x090.25 -> Color red.\x0a\x09\x09\x090.5 -> Color white.\x0a\x09\x09\x090.75 -> Color yellow.\x0a\x09\x09\x091 -> Color green\x09\x0a\x09\x09}\x0a\x09\x09start: 0@0  \x0a\x09\x09stop: 100@100.\x0a\x0a\x0a\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09canvas pathTransform translateX: 10 Y: 10.\x0a\x09\x09\x0a\x09\x09canvas setShape: (0@0 corner:100@100).\x0a\x09\x09canvas setPaint: linearGradient.\x0a\x09\x09\x0a\x09\x09canvas draw.\x0a\x0a\x0a\x09\x09canvas pathTransform translateX: 150 Y: 0.\x0a\x09\x09\x0a\x09\x09\x22Here we are using a paint tranform to change the gradient's direction and scale\x22\x0a\x09\x09canvas paintTransform rotateByDegrees: 45; scaleBy: 0.7.\x0a\x09\x09canvas draw.\x0a\x0a\x09\x09canvas pathTransform translateX: 150 Y: 0.\x0a\x09\x09\x0a\x09\x09\x22The areas outside the ramp boundary filled by extending the colors defined for 0 and 1 points of ramp respectively. \x0a\x09\x09(blue for top, green for bottom, in our case)\x22\x0a\x09\x09canvas paintTransform translateX: 0 Y: 80; scaleBy: 0.2.\x0a\x09\x09canvas draw.\x0a\x0a\x09].",
messageSends: ["createLinearGradient:start:stop:", "->", "blue", "red", "white", "yellow", "green", "@", "drawDuring:", "clear:", "gray", "translateX:Y:", "pathTransform", "setShape:", "corner:", "setPaint:", "draw", "rotateByDegrees:", "paintTransform", "scaleBy:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step2",
category: 'steps',
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
args: [],
source: "step2\x0a\x22Step 2:\x0a\x0aCreating a surface.\x0a\x0aProtocol:\x0a\x0a<SurfaceClass> extent: x@y\x0a\x0awill create a surface using specific class.\x0a\x0aAll surfaces is conformant to AthensSurface protocol.\x0a\x0aExample: \x0a\x22\x0a\x0a|container|\x0acontainer := '#canvas-container' asJQuery.\x0a\x0a\x22Clear previous canvases\x22\x0acontainer empty.\x0a\x0asurface := AthensHTMLSurface extent: 500@400.\x0asurface appendToJQuery: '#canvas-container' asJQuery.\x0a\x0a\x22Render border around canvas.\x22\x0asurface canvasTag asJQuery \x0a\x09css: 'border' with: '1px #aaa solid'.\x0a\x0a\x22IMPORTANT NOTE:\x0a\x09the surface which we will create at this step will be used in later steps.\x0a\x09This means that if you resize the window (changing the view size), you may need to recreate surface.\x0a\x09Also, since surface uses external resources, quitting an image and restarting it, will also require to \x0a\x09create a new surface, because the one from previous session will be no longer accessible.\x0a\x22",
messageSends: ["asJQuery", "empty", "extent:", "@", "appendToJQuery:", "css:with:", "canvasTag"],
referencedClasses: ["AthensHTMLSurface"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step20",
category: 'steps',
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
args: [],
source: "step20\x0a\x22Step 20: Radial gradients.\x0a\x0a\x22\x0a\x09| ramp perfectRadial radialWithCustomFocus |\x0a\x0a\x0a\x09\x22A radial gradient defined using following parameters:\x0a\x09 - a color ramp (a points in range from 0 to 1 with associated colors)\x0a\x09- center point\x0a\x09- radius\x0a\x09- focal point (can be omited if focus is at center)\x0a\x09\x22\x09\x0a\x09ramp :=  {\x0a\x09\x09\x090 -> Color blue .\x0a\x09\x09\x090.25 -> Color red.\x0a\x09\x09\x090.5 -> Color white.\x0a\x09\x09\x090.75 -> Color yellow.\x0a\x09\x09\x091 -> (Color blue alpha: 0)\x0a\x09\x09}.\x0a\x09\x09\x0a\x09perfectRadial := surface createRadialGradient: ramp\x0a\x09\x09center: 50@50  radius: 50 .\x0a\x09\x0a\x09radialWithCustomFocus := surface createRadialGradient: ramp\x0a\x09\x09center: 50@50  radius: 50\x09focalPoint: 20@20. \x0a\x09\x0a\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09canvas pathTransform translateX: 10 Y: 10.\x0a\x09\x09\x0a\x09\x09canvas setShape: (0@0 corner:100@100).\x0a\x09\x09canvas setPaint: perfectRadial.\x0a\x09\x09\x0a\x09\x09canvas draw.\x0a\x0a\x0a\x09\x09canvas pathTransform translateX: 150 Y: 0.\x0a\x09\x09canvas setPaint: radialWithCustomFocus.\x0a\x09\x09\x0a\x09\x09canvas draw.\x0a\x0a\x09].",
messageSends: ["->", "blue", "red", "white", "yellow", "alpha:", "createRadialGradient:center:radius:", "@", "createRadialGradient:center:radius:focalPoint:", "drawDuring:", "clear:", "gray", "translateX:Y:", "pathTransform", "setShape:", "corner:", "setPaint:", "draw"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step21",
category: 'steps',
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
return self}, function($ctx1) {$ctx1.fill(self,"step21",{bitmapPaint:bitmapPaint},smalltalk.AthensTutorial)})},
args: [],
source: "step21\x0a\x22Step 21: Pattern paints (bitmap paints).\x0a\x0a\x22\x0a\x09| bitmapPaint  |\x0a\x0a\x09bitmapPaint := surface createBitmapPaint: (Bitmap fromUrl: 'http://amber-lang.net/images/amber.png'). \x0a\x09bitmapPaint repeat. \x22use #repeat to repeat the fill ad infinitum using tiling effect \x22\x0a\x09\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x09\x0a\x09\x09canvas setPaint: bitmapPaint.\x0a\x09\x09\x0a\x09\x09\x22And of course, using the paint transform we can affect the result\x22\x0a\x09\x09\x0a\x09\x09canvas paintTransform scaleBy: 0.5.\x0a\x09\x09canvas drawShape: (0@0 corner: surface extent).\x0a\x0a\x09].",
messageSends: ["createBitmapPaint:", "fromUrl:", "repeat", "drawDuring:", "clear:", "gray", "setPaint:", "scaleBy:", "paintTransform", "drawShape:", "corner:", "extent", "@"],
referencedClasses: ["Bitmap", "Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step22",
category: 'steps',
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
args: [],
source: "step22\x0a\x22Step 22: Using another surface as paint.\x0a\x0aSimply pass surface as an argument to #setPaint: method.\x0a\x0a\x22\x0a\x09| surface2  |\x0a\x0a\x09surface2 := AthensHTMLSurface extent: 10@10.\x0a\x09\x0a\x09\x22checker board\x22\x0a\x09surface2 drawDuring: [:canvas |\x0a\x09\x09surface2 clear.\x0a\x09\x09canvas setPaint: Color white.\x0a\x09\x09\x0a\x09\x09canvas \x0a\x09\x09\x09drawShape: (0@0 corner: 5@5);\x0a\x09\x09\x09drawShape: (5@5 corner: 10@10)\x0a\x09\x09].\x0a\x0a\x09\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x09\x0a\x09\x09(canvas setPaint: surface2) repeat.\x0a\x09\x09\x0a\x09\x09\x22And of course, using the paint transform we can affect the result.\x0a\x09\x09Uncomment the line below to see the difference\x22\x0a\x09\x09\x22canvas paintTransform scaleX: 3 Y:1; rotateByDegrees: 45 .\x22\x0a\x09\x09canvas drawShape: (0@0 corner: surface extent).\x0a\x0a\x09].",
messageSends: ["extent:", "@", "drawDuring:", "clear", "setPaint:", "white", "drawShape:", "corner:", "clear:", "gray", "repeat", "extent"],
referencedClasses: ["AthensHTMLSurface", "Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step23",
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
args: [],
source: "step23\x0a\x22Step 23: Stroke paints.\x0a\x0aStroke paint is a special kind of paint, which instead of filling the shape,\x0a drawing a connected contour of certain width following the path.\x0a\x22\x0a\x09| path |\x0a\x0a\x09path := surface createPath: [:builder |\x0a\x09\x09\x09\x0a\x09\x09builder \x0a\x09\x09\x09moveTo: -50@ -50;\x0a\x09\x09\x09lineTo: 50@0;\x0a\x09\x09\x09lineTo: 0@50;\x0a\x09\x09\x09lineTo: -50@0;\x0a\x09\x09\x09lineTo: 80@ -30;\x0a\x09\x09\x09close\x0a\x09\x09].\x0a\x09\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09| stroke |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x09\x0a\x09\x09\x22A stroke paint uses another paint for fills\x22\x0a\x09\x09\x0a\x09\x09stroke := canvas setStrokePaint: Color white.\x0a\x09\x09\x0a\x09\x09\x22You can control the width of stroke by setting width parameter\x22\x0a\x09\x09stroke width: 5.\x0a\x09\x09\x0a\x09\x09canvas pathTransform \x0a\x09\x09\x09translateX: 400 Y:400;\x0a\x09\x09\x09scaleBy: 4.\x0a\x09\x09canvas drawShape: path.\x0a\x0a\x09].",
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "close", "drawDuring:", "clear:", "gray", "setStrokePaint:", "white", "width:", "translateX:Y:", "pathTransform", "scaleBy:", "drawShape:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step24",
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
args: [],
source: "step24\x0a\x0a\x22Step 24: Stroke paints: Join type.\x0a\x0aThe stroke join type affects how to connect the segments.\x0a\x0a\x22\x0a\x09| path |\x0a\x0a\x09path := surface createPath: [:builder |\x0a\x09\x09\x09\x0a\x09\x09builder \x0a\x09\x09\x09moveTo: -50@ -50;\x0a\x09\x09\x09lineTo: 50@0;\x0a\x09\x09\x09lineTo: 0@50;\x0a\x09\x09\x09lineTo: -50@0;\x0a\x09\x09\x09lineTo: 80@ -30;\x0a\x09\x09\x09close\x0a\x09\x09].\x0a\x09\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09| stroke |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x09\x0a\x09\x09stroke := canvas setStrokePaint: Color white.\x0a\x09\x09stroke width: 5.\x0a\x0a\x09\x22There are 3 kinds of joins: bevel, miter and round (uncomment to see the difference)\x22\x0a\x09\x0a\x09\x09stroke joinBevel. \x0a\x22\x09\x09stroke joinRound.\x0a\x09\x09stroke joinMiter.  \x0a\x22\x09\x09\x0a\x09\x09 \x09\x09\x0a\x09\x09canvas pathTransform \x0a\x09\x09\x09translateX: 400 Y:400;\x0a\x09\x09\x09scaleBy: 4.\x0a\x09\x09canvas drawShape: path.\x0a\x0a\x09].",
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "close", "drawDuring:", "clear:", "gray", "setStrokePaint:", "white", "width:", "joinBevel", "translateX:Y:", "pathTransform", "scaleBy:", "drawShape:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step25",
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
args: [],
source: "step25\x0a\x22Step 25: Stroke paints: Cap style\x0a\x0aThe cap style affects drawing the end segments (what kind of 'cap' to use).\x0a\x0a\x22\x0a\x09| path |\x0a\x0a\x09path := surface createPath: [:builder |\x0a\x09\x09\x09\x0a\x09\x09builder \x0a\x09\x09\x09moveTo: -50@ -50;\x0a\x09\x09\x09lineTo: 50@0;\x0a\x09\x09\x09lineTo: 0@50;\x0a\x09\x09\x09lineTo: -50@0;\x0a\x09\x09\x09lineTo: 80@ -30 \x0a\x09\x09\x09\x0a\x09\x09\x09].\x0a\x09\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09| stroke |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x09\x0a\x09\x09stroke := canvas setStrokePaint: Color white.\x0a\x09\x09stroke width: 5.\x0a\x0a\x09\x09stroke joinRound.\x0a\x09\x09\x0a\x09\x09\x22There are 3 kinds of cap: \x0a\x09\x09  - round\x0a\x09\x09  - square\x0a\x09\x09  - and butt\x0a\x09\x09\x0a\x09\x09(uncomment to see the difference)\x0a\x09\x09\x22\x0a\x09\x09\x0a\x09\x09stroke capRound. \x0a\x09\x09\x22stroke capButt.\x22\x0a\x09\x09\x22stroke capSquare. \x22\x0a\x09\x09\x0a\x09\x09canvas pathTransform \x0a\x09\x09\x09translateX: 400 Y:400;\x0a\x09\x09\x09scaleBy: 4.\x0a\x09\x09canvas drawShape: path.\x0a\x0a\x09].",
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "drawDuring:", "clear:", "gray", "setStrokePaint:", "white", "width:", "joinRound", "capRound", "translateX:Y:", "pathTransform", "scaleBy:", "drawShape:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step26",
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
args: [],
source: "step26\x0a\x22Step 26: Stroke paints: Dashing\x0a\x0a\x22\x0a\x09| path |\x0a\x0a\x09path := surface createPath: [:builder |\x0a\x09\x09\x09\x0a\x09\x09builder \x0a\x09\x09\x09moveTo: -50@ -50;\x0a\x09\x09\x09lineTo: 50@0;\x0a\x09\x09\x09lineTo: 0@50;\x0a\x09\x09\x09lineTo: -50@0;\x0a\x09\x09\x09lineTo: 80@ -30 \x0a\x09\x09\x09\x0a\x09\x09\x09].\x0a\x09\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09| stroke |\x0a\x09\x09surface clear: Color gray.\x0a\x09\x09\x09\x0a\x09\x09stroke := canvas setStrokePaint: Color white.\x0a\x09\x09stroke width: 5.\x0a\x0a\x09\x09stroke joinRound.\x0a\x09\x09\x0a\x09\x09\x22There are 3 kinds of cap: \x0a\x09\x09  - round\x0a\x09\x09  - square\x0a\x09\x09  - and butt\x0a\x09\x09\x0a\x09\x09(uncomment to see the difference)\x0a\x09\x09\x22\x0a\x09\x09\x0a\x09\x09stroke capRound. \x0a\x0a\x09\x09stroke dashes: #( \x22fill\x2220  \x22gap\x2210 \x22fill\x22 35 \x22gap\x22 30) offset: 0.\x0a\x09\x09\x0a\x09\x09canvas pathTransform \x0a\x09\x09\x09translateX: 400 Y:400;\x0a\x09\x09\x09scaleBy: 4.\x0a\x09\x09canvas drawShape: path.\x0a\x0a\x09].",
messageSends: ["createPath:", "moveTo:", "@", "lineTo:", "drawDuring:", "clear:", "gray", "setStrokePaint:", "white", "width:", "joinRound", "capRound", "dashes:offset:", "translateX:Y:", "pathTransform", "scaleBy:", "drawShape:"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step27",
category: 'steps',
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
args: [],
source: "step27\x0a\x0a\x22Step 27: Paint modes\x0a\x0aThe paint mode controls how incoming (source) fragments will be combined with what is already on surface (destination).\x0a\x22\x0a\x09\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09| stroke |\x0a\x09\x09surface clear: Color gray.\x0a\x0a\x09\x09\x09\x0a\x09\x09\x22Draw a blue rectangle to use it as background \x22\x0a\x09\x09canvas setPaint: Color blue.\x09\x0a\x09\x09canvas drawShape: (0@0 corner: 300@300).\x0a\x09\x09\x0a\x09\x09canvas paintMode over.\x0a\x09\x22Try one of following paint modes, and see the result: \x09\x0a\x09\x0a\x09\x09clear\x0a\x09\x09source\x0a\x09\x09over    <=== this is default mode\x0a\x09\x09in\x0a\x09\x09out \x0a\x09\x09atop\x0a\x09\x09dest\x0a\x09\x09destOver\x0a\x09\x09destIn\x0a\x09\x09destOut\x0a\x09\x09destAtop\x0a\x09\x09xor\x0a\x09\x09add\x0a\x09\x09saturate\x0a\x09\x09multiply\x0a\x09\x09screen\x0a\x09\x09overlay\x0a\x09\x09darken\x0a\x09\x09lighten\x0a\x09\x09colorDodge\x0a\x09\x09colorBurn\x0a\x09\x09hardLight\x0a\x09\x09softLight\x0a\x09\x09difference\x0a\x09\x09exclusion\x0a\x09\x09hslHue\x0a\x09\x09hslSaturation\x0a\x09\x09hslColor\x0a\x09\x09hslLuminosity\x0a\x09\x0a\x09You can check if given mode is supported by sending: \x0a\x09\x0a\x09\x09canvas paintMode availableModes \x0a\x09\x09\x0a\x09\x22\x09\x0a\x09\x09\x22Draw a semi-transparent yellow rectangle to combine it with background \x22\x0a\x09\x09canvas setPaint: (Color yellow alpha: 0.5).\x09\x0a\x09\x09canvas drawShape: (150@150 corner: 450@450).\x0a\x0a\x09].",
messageSends: ["drawDuring:", "clear:", "gray", "setPaint:", "blue", "drawShape:", "corner:", "@", "over", "paintMode", "alpha:", "yellow"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step28",
category: 'steps',
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
_st(_st(canvas)._paintMode())._source();
_st(canvas)._setPaint_(_st(_st($Color())._yellow())._alpha_((0.5)));
return _st(canvas)._drawShape_(_st((150).__at((150)))._corner_((450).__at((450))));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st(canvas)._setPaint_(_st($Color())._red());
return _st(canvas)._drawShape_(_st((200).__at((200)))._corner_((500).__at((500))));
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas,stroke:stroke},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step28",{},smalltalk.AthensTutorial)})},
args: [],
source: "step28\x0a\x0a\x22Step 28: Paint modes. Preserving the modes.\x0a\x0a\x22\x0a\x09\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09| stroke |\x0a\x09\x09surface clear: Color gray.\x0a\x0a\x09\x09\x09\x0a\x09\x09\x22Draw a blue rectangle to use it as background \x22\x0a\x09\x09canvas setPaint: Color blue.\x09\x0a\x09\x09canvas drawShape: (0@0 corner: 300@300).\x0a\x0a\x09\x22Try to comment #restoreAfter: to see the difference \x22\x0a\x09\x09canvas paintMode restoreAfter: [\x09\x09\x0a\x0a\x09\x09\x09canvas paintMode source.\x0a\x09\x09\x09canvas setPaint: (Color yellow alpha: 0.5).\x09\x0a\x09\x09\x09canvas drawShape: (150@150 corner: 450@450).\x0a\x09\x09].\x0a\x09\x0a\x09\x0a\x09\x09canvas setPaint: (Color red).\x09\x0a\x09\x09canvas drawShape: (200@200 corner: 500@500).\x0a\x09].",
messageSends: ["drawDuring:", "clear:", "gray", "setPaint:", "blue", "drawShape:", "corner:", "@", "restoreAfter:", "source", "paintMode", "alpha:", "yellow", "red"],
referencedClasses: ["Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step29",
category: 'steps',
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
args: [],
source: "step29\x0a\x0a\x22Step 29: Clipping.\x0a\x0a\x22\x0a\x09\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09| stroke |\x0a\x09\x09surface clear: Color gray.\x0a\x0a\x09\x09\x09\x0a\x09\x09\x22Draw a blue rectangle to use it as background \x22\x0a\x09\x09canvas setPaint: Color blue.\x09\x0a\x0a\x09\x09canvas clipBy:  (100@100 corner: 200@200) during: [ \x09\x0a\x0a\x09\x09\x09canvas drawShape: (0@0 corner: surface extent).\x0a\x09\x09].\x0a\x09].",
messageSends: ["drawDuring:", "clear:", "gray", "setPaint:", "blue", "clipBy:during:", "corner:", "@", "drawShape:", "extent"],
referencedClasses: ["Color"]
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
selector: "step30",
category: 'steps',
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
_st(_st(canvas)._pathTransform())._translateX_Y_((0),_st(font)._getPreciseAscent());
return _st(canvas)._drawString_("Hello Athens!");
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step30",{font:font},smalltalk.AthensTutorial)})},
args: [],
source: "step30\x0a\x0a\x22Step 30: drawing text.\x0a\x0aPlease note that this step requires Freetype enabled. \x0aCheck if you enabled it in settings.\x0aFrom world menu, go System->Settings\x0aAnd then look for Appearance -> Use freetype in settings browser.\x0a\x0a\x22\x0a\x09| font |\x0a\x09\x0a\x09font := LogicalFont familyName: 'Arial' pointSize: 20.\x0a\x0a\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09surface clear: Color black.\x0a\x0a\x09\x09\x22set font and color\x22\x0a\x09\x09canvas setFont: font.\x0a\x09\x09canvas setPaint: Color red.\x0a\x09\x09\x0a\x09\x09\x22translate an origin by font's ascent, otherwise \x0a\x09\x09we will see only things below baseline\x22\x0a\x09\x09\x0a\x09\x09canvas pathTransform scaleBy: 4.\x0a\x09\x09canvas pathTransform translateX: 0 Y: (font getPreciseAscent).\x0a\x09\x09canvas drawString: 'Hello Athens!'.\x0a\x09].",
messageSends: ["familyName:pointSize:", "drawDuring:", "clear:", "black", "setFont:", "setPaint:", "red", "scaleBy:", "pathTransform", "translateX:Y:", "getPreciseAscent", "drawString:"],
referencedClasses: ["LogicalFont", "Color"]
}),
smalltalk.AthensTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step31",
category: 'steps',
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
_st(_st(canvas)._pathTransform())._translateX_Y_((0),_st(font)._getPreciseAscent());
return _st(canvas)._drawString_("The End!");
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step31",{font:font},smalltalk.AthensTutorial)})},
args: [],
source: "step31\x0a\x22The End!\x22\x0a\x0a\x09| font |\x09\x0a\x09font := LogicalFont familyName: 'Arial' pointSize: 20.\x0a\x0a\x09surface drawDuring: [:canvas |\x0a\x09\x09surface clear: Color black.\x0a\x0a\x09\x09canvas setFont: font.\x0a\x09\x09canvas setPaint: Color red.\x0a\x09\x09\x0a\x09\x09canvas pathTransform scaleBy: 4.\x0a\x09\x09canvas pathTransform translateX: 0 Y: (font getPreciseAscent).\x0a\x09\x09canvas drawString: 'The End!'.\x0a\x09].",
messageSends: ["familyName:pointSize:", "drawDuring:", "clear:", "black", "setFont:", "setPaint:", "red", "scaleBy:", "pathTransform", "translateX:Y:", "getPreciseAscent", "drawString:"],
referencedClasses: ["LogicalFont", "Color"]
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


smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'starting',
fn: function (){
var self=this;
var html;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $AthensTutorialWidget(){return smalltalk.AthensTutorialWidget||(typeof AthensTutorialWidget=="undefined"?nil:AthensTutorialWidget)}
return smalltalk.withContext(function($ctx1) { 
html=_st($HTMLCanvas())._onJQuery_("#workspace"._asJQuery());
_st(html)._with_(_st($AthensTutorialWidget())._new());
return self}, function($ctx1) {$ctx1.fill(self,"open",{html:html},smalltalk.AthensTutorial.klass)})},
args: [],
source: "open\x0a\x09|html|\x0a\x09html := HTMLCanvas onJQuery: '#workspace' asJQuery.\x0a\x09html with: AthensTutorialWidget new.",
messageSends: ["onJQuery:", "asJQuery", "with:", "new"],
referencedClasses: ["HTMLCanvas", "AthensTutorialWidget"]
}),
smalltalk.AthensTutorial.klass);


smalltalk.addClass('AthensTutorialWidget', smalltalk.Widget, ['canvasContainer', 'step', 'codeArea', 'tutorial'], 'Athens-HTML-Tutorial');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $AthensTutorial(){return smalltalk.AthensTutorial||(typeof AthensTutorial=="undefined"?nil:AthensTutorial)}
return smalltalk.withContext(function($ctx1) { 
self["@step"]=(1);
self["@tutorial"]=_st($AthensTutorial())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensTutorialWidget)})},
args: [],
source: "initialize\x0a\x09step := 1.\x0a\x09tutorial := AthensTutorial new.",
messageSends: ["new"],
referencedClasses: ["AthensTutorial"]
}),
smalltalk.AthensTutorialWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "nextStep",
category: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@step"]=_st(self["@step"]).__plus((1));
$1=_st(self["@step"]).__gt((31));
if(smalltalk.assert($1)){
self["@step"]=(31);
self["@step"];
};
self._showStep_(self["@step"]);
return self}, function($ctx1) {$ctx1.fill(self,"nextStep",{},smalltalk.AthensTutorialWidget)})},
args: [],
source: "nextStep\x0a\x09step := step + 1.\x0a\x09step > 31\x0a\x09\x09ifTrue: [step := 31].\x0a\x09self showStep: step.",
messageSends: ["+", "ifTrue:", ">", "showStep:"],
referencedClasses: []
}),
smalltalk.AthensTutorialWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previousStep",
category: 'interactions',
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
args: [],
source: "previousStep\x0a\x09step := step - 1.\x0a\x09step < 1\x0a\x09\x09ifTrue: [step := 1].\x0a\x09self showStep: step.",
messageSends: ["-", "ifTrue:", "<", "showStep:"],
referencedClasses: []
}),
smalltalk.AthensTutorialWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
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
args: ["html"],
source: "renderOn: html\x0a\x09canvasContainer := html div\x0a\x09\x09style: 'height: 100%; float: left; margin: 50px;';\x0a\x09\x09id: 'canvas-container'.\x0a\x09html div\x0a\x09\x09style: 'height: 100%;; margin: 50px; display: inline-block;';\x0a\x09\x09with: [\x0a\x09\x09\x09codeArea := html textarea\x0a\x09\x09\x09\x09style: 'width: 100%; height: 350px;'.\x0a\x09\x09\x09html input\x0a\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-primary';\x0a\x09\x09\x09\x09style: 'margin-right: 10px;';\x0a\x09\x09\x09\x09onClick: [self stepDoIt];\x0a\x09\x09\x09\x09value: 'Do it'.\x0a\x09\x09\x09html input\x0a\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-primary';\x0a\x09\x09\x09\x09style: 'margin-right: 10px;';\x0a\x09\x09\x09\x09onClick: [self previousStep];\x0a\x09\x09\x09\x09value: 'Previous step'.\x0a\x09\x09\x09html input\x0a\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-primary';\x0a\x09\x09\x09\x09onClick: [self nextStep];\x0a\x09\x09\x09\x09value: 'Next step'].\x0a\x09self showStep: 1.",
messageSends: ["style:", "div", "id:", "with:", "textarea", "type:", "input", "class:", "onClick:", "stepDoIt", "value:", "previousStep", "nextStep", "showStep:"],
referencedClasses: []
}),
smalltalk.AthensTutorialWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showStep:",
category: 'interactions',
fn: function (anInteger){
var self=this;
var selector;
function $AthensTutorial(){return smalltalk.AthensTutorial||(typeof AthensTutorial=="undefined"?nil:AthensTutorial)}
return smalltalk.withContext(function($ctx1) { 
selector=_st("step".__comma(_st(anInteger)._asString()))._asSymbol();
_st(_st(self["@codeArea"])._asJQuery())._val_(_st(_st($AthensTutorial())._methodAt_(selector))._source());
return self}, function($ctx1) {$ctx1.fill(self,"showStep:",{anInteger:anInteger,selector:selector},smalltalk.AthensTutorialWidget)})},
args: ["anInteger"],
source: "showStep: anInteger\x0a\x09|selector|\x0a\x09selector := ('step', anInteger asString) asSymbol.\x0a\x09codeArea asJQuery\x0a\x09\x09val: (AthensTutorial methodAt: selector) source.",
messageSends: ["asSymbol", ",", "asString", "val:", "source", "methodAt:", "asJQuery"],
referencedClasses: ["AthensTutorial"]
}),
smalltalk.AthensTutorialWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "stepDoIt",
category: 'interactions',
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
args: [],
source: "stepDoIt\x0a\x09|selector|\x0a\x09selector := ('doItstep', step asString) asSymbol.\x0a\x09AthensTutorial compile: 'doIt', codeArea asJQuery val.\x0a\x09tutorial perform: selector.\x0a\x09AthensTutorial removeCompiledMethod: (AthensTutorial methodAt: selector)",
messageSends: ["asSymbol", ",", "asString", "compile:", "val", "asJQuery", "perform:", "removeCompiledMethod:", "methodAt:"],
referencedClasses: ["AthensTutorial"]
}),
smalltalk.AthensTutorialWidget);




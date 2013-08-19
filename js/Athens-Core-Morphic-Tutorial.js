smalltalk.addPackage('Athens-Core-Morphic-Tutorial');
smalltalk.addClass('AthensMorphicTutorial', smalltalk.Object, ['world', 'btnPrev', 'btnNext', 'btnDoit', 'btnCode', 'txtCode', 'step'], 'Athens-Core-Morphic-Tutorial');
smalltalk.addMethod(
smalltalk.method({
selector: "doStep",
category: 'interactions',
fn: function (){
var self=this;
var selector;
return smalltalk.withContext(function($ctx1) { 
selector=_st("doItstep".__comma(_st(self["@step"])._asString()))._asSymbol();
_st(self._class())._compile_("doIt".__comma(_st(self["@txtCode"])._text()));
self._perform_(selector);
_st(self._class())._removeCompiledMethod_(_st(self._class())._methodAt_(selector));
return self}, function($ctx1) {$ctx1.fill(self,"doStep",{selector:selector},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "doStep\x0a\x09|selector|\x0a\x09selector := ('doItstep', step asString) asSymbol.\x0a\x09self class compile: 'doIt', txtCode text.\x0a\x09self perform: selector.\x0a\x09self class removeCompiledMethod: (self class methodAt: selector).",
messageSends: ["asSymbol", ",", "asString", "compile:", "text", "class", "perform:", "removeCompiledMethod:", "methodAt:"],
referencedClasses: []
}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._initializeWindow();
self._initializeAmberLogo();
self._showStep_((1));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "initialize\x0a\x09self initializeWindow.\x0a\x09self initializeAmberLogo.\x0a\x09self showStep: 1.",
messageSends: ["initializeWindow", "initializeAmberLogo", "showStep:"],
referencedClasses: []
}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeAmberLogo",
category: 'initialization',
fn: function (){
var self=this;
var amberLogo;
function $AthensImageMorph(){return smalltalk.AthensImageMorph||(typeof AthensImageMorph=="undefined"?nil:AthensImageMorph)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($AthensImageMorph())._new();
_st($1)._url_("images/amber_transparent.png");
_st($1)._translateByX_Y_(_st(_st(_st(self["@world"])._width()).__minus((421))).__minus((15)),(15));
_st($1)._mouseFocusFillColor_(_st($Color())._white());
_st($1)._mouseDownFillColor_(_st($Color())._cosmoLightGray());
_st($1)._mouseFocusBorderColor_(_st($Color())._cosmoGray());
_st($1)._mouseDownBorderColor_(_st($Color())._cosmoDarkGray());
_st($1)._onMouseClick_((function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(document)._location_("http://www.amber-lang.net/");
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
$2=_st($1)._yourself();
amberLogo=$2;
_st(self["@world"])._addMorph_(amberLogo);
return self}, function($ctx1) {$ctx1.fill(self,"initializeAmberLogo",{amberLogo:amberLogo},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "initializeAmberLogo\x0a\x09|amberLogo|\x0a\x09amberLogo := AthensImageMorph new\x0a\x09\x09url: 'images/amber_transparent.png';\x0a\x09\x09translateByX: world width - 421 - 15 Y: 15;\x0a\x09\x09mouseFocusFillColor: Color white;\x0a\x09\x09mouseDownFillColor: Color cosmoLightGray;\x0a\x09\x09mouseFocusBorderColor: Color cosmoGray;\x0a\x09\x09mouseDownBorderColor: Color cosmoDarkGray;\x0a\x09\x09onMouseClick: [:evt | document location: 'http://www.amber-lang.net/'];\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09world addMorph: amberLogo.",
messageSends: ["url:", "new", "translateByX:Y:", "-", "width", "mouseFocusFillColor:", "white", "mouseDownFillColor:", "cosmoLightGray", "mouseFocusBorderColor:", "cosmoGray", "mouseDownBorderColor:", "cosmoDarkGray", "onMouseClick:", "location:", "yourself", "addMorph:"],
referencedClasses: ["AthensImageMorph", "Color"]
}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWindow",
category: 'initialization',
fn: function (){
var self=this;
var window;
function $AthensWindowMorph(){return smalltalk.AthensWindowMorph||(typeof AthensWindowMorph=="undefined"?nil:AthensWindowMorph)}
function $AthensButtonMorph(){return smalltalk.AthensButtonMorph||(typeof AthensButtonMorph=="undefined"?nil:AthensButtonMorph)}
function $AthensTextAreaMorph(){return smalltalk.AthensTextAreaMorph||(typeof AthensTextAreaMorph=="undefined"?nil:AthensTextAreaMorph)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14;
window=_st($AthensWindowMorph())._new();
$1=window;
_st($1)._title_("Athens Morphic Tutorial");
_st($1)._width_((640));
_st($1)._height_((400));
$2=_st($1)._translateByX_Y_((40),(20));
$3=_st($AthensButtonMorph())._new();
_st($3)._text_("Previous step");
_st($3)._width_((100));
_st($3)._height_((25));
_st($3)._translateByX_Y_((5),(370));
_st($3)._onMouseClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._previousStep();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=_st($3)._yourself();
self["@btnPrev"]=$4;
$5=_st($AthensButtonMorph())._new();
_st($5)._text_("Next step");
_st($5)._width_((100));
_st($5)._height_((25));
_st($5)._translateByX_Y_((110),(370));
_st($5)._onMouseClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._nextStep();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$6=_st($5)._yourself();
self["@btnNext"]=$6;
$7=_st($AthensButtonMorph())._new();
_st($7)._text_("Do it");
_st($7)._width_((100));
_st($7)._height_((25));
_st($7)._translateByX_Y_((215),(370));
_st($7)._onMouseClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._doStep();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$8=_st($7)._yourself();
self["@btnDoit"]=$8;
$9=_st($AthensButtonMorph())._new();
_st($9)._text_("IDE (Helios)");
_st($9)._width_((100));
_st($9)._height_((25));
_st($9)._translateByX_Y_((320),(370));
_st($9)._onMouseClick_((function(){
return smalltalk.withContext(function($ctx2) {
_st(amber)._loadHelios();
return _st(self["@btnCode"])._delete();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$10=_st($9)._yourself();
self["@btnCode"]=$10;
$11=_st($AthensTextAreaMorph())._new();
_st($11)._width_((630));
_st($11)._height_((330));
_st($11)._translateByX_Y_((5),(35));
$12=_st($11)._yourself();
self["@txtCode"]=$12;
$13=window;
_st($13)._addMorph_(self["@btnPrev"]);
_st($13)._addMorph_(self["@btnNext"]);
_st($13)._addMorph_(self["@btnDoit"]);
_st($13)._addMorph_(self["@btnCode"]);
$14=_st($13)._addMorph_(self["@txtCode"]);
_st(self["@world"])._addMorph_(window);
return self}, function($ctx1) {$ctx1.fill(self,"initializeWindow",{window:window},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "initializeWindow\x0a\x09|window|\x0a\x09window := AthensWindowMorph new.\x0a\x09window \x0a\x09\x09title: 'Athens Morphic Tutorial';\x0a\x09\x09width: 640;\x0a\x09\x09height: 400;\x0a\x09\x09translateByX: 40 Y: 20.\x0a\x09\x09\x0a\x09btnPrev := AthensButtonMorph new\x0a\x09\x09text: 'Previous step';\x0a\x09\x09width: 100; height: 25;\x0a\x09\x09translateByX: 5 Y: 370;\x0a\x09\x09onMouseClick: [self previousStep];\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09btnNext := AthensButtonMorph new\x0a\x09\x09text: 'Next step';\x0a\x09\x09width: 100; height: 25;\x0a\x09\x09translateByX: 110 Y: 370;\x0a\x09\x09onMouseClick: [self nextStep];\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09btnDoit := AthensButtonMorph new\x0a\x09\x09text: 'Do it';\x0a\x09\x09width: 100; height: 25;\x0a\x09\x09translateByX: 215 Y: 370;\x0a\x09\x09onMouseClick: [self doStep];\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09btnCode := AthensButtonMorph new\x0a\x09\x09text: 'IDE (Helios)';\x0a\x09\x09width: 100; height: 25;\x0a\x09\x09translateByX: 320 Y: 370;\x0a\x09\x09onMouseClick: [\x0a\x09\x09\x09amber loadHelios.\x0a\x09\x09\x09btnCode delete];\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09txtCode := AthensTextAreaMorph new\x0a\x09\x09width: 630; height: 330;\x0a\x09\x09translateByX: 5 Y: 35;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09window \x0a\x09\x09addMorph: btnPrev;\x0a\x09\x09addMorph: btnNext;\x0a\x09\x09addMorph: btnDoit;\x0a\x09\x09addMorph: btnCode;\x0a\x09\x09addMorph: txtCode.\x0a\x09\x09\x0a\x09world addMorph: window.",
messageSends: ["new", "title:", "width:", "height:", "translateByX:Y:", "text:", "onMouseClick:", "previousStep", "yourself", "nextStep", "doStep", "loadHelios", "delete", "addMorph:"],
referencedClasses: ["AthensWindowMorph", "AthensButtonMorph", "AthensTextAreaMorph"]
}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "nextStep",
category: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@step"]=_st(self["@step"]).__plus((1));
self["@step"]=_st(self["@step"])._min_((8));
self._showStep_(self["@step"]);
return self}, function($ctx1) {$ctx1.fill(self,"nextStep",{},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "nextStep\x0a\x09step := step + 1.\x0a\x09step := step min: 8.\x0a\x09self showStep: step.",
messageSends: ["+", "min:", "showStep:"],
referencedClasses: []
}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "previousStep",
category: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@step"]=_st(self["@step"]).__minus((1));
self["@step"]=_st(self["@step"])._max_((1));
self._showStep_(self["@step"]);
return self}, function($ctx1) {$ctx1.fill(self,"previousStep",{},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "previousStep\x0a\x09step := step - 1.\x0a\x09step := step max: 1.\x0a\x09self showStep: step.",
messageSends: ["-", "max:", "showStep:"],
referencedClasses: []
}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "showStep:",
category: 'interactions',
fn: function (anInteger){
var self=this;
var selector;
return smalltalk.withContext(function($ctx1) { 
selector=_st("step".__comma(_st(anInteger)._asString()))._asSymbol();
_st(self["@txtCode"])._text_(_st(_st(self._class())._methodAt_(selector))._source());
self["@step"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"showStep:",{anInteger:anInteger,selector:selector},smalltalk.AthensMorphicTutorial)})},
args: ["anInteger"],
source: "showStep: anInteger\x0a\x09|selector|\x0a\x09selector := ('step', anInteger asString) asSymbol.\x0a\x09txtCode text: (self class methodAt: selector) source.\x0a\x09step := anInteger.",
messageSends: ["asSymbol", ",", "asString", "text:", "source", "methodAt:", "class"],
referencedClasses: []
}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step1",
category: 'steps',
fn: function (){
var self=this;
var window;
function $AthensWindowMorph(){return smalltalk.AthensWindowMorph||(typeof AthensWindowMorph=="undefined"?nil:AthensWindowMorph)}
return smalltalk.withContext(function($ctx1) { 
window=_st($AthensWindowMorph())._new();
_st(self["@world"])._addMorph_(window);
_st(window)._title_("Step1 Demo Window");
return self}, function($ctx1) {$ctx1.fill(self,"step1",{window:window},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "step1\x0a\x09\x22Create a window\x22\x0a\x09\x0a\x09\x22A window morph is a container for other morphs that can be moved around.\x22\x0a\x09\x0a\x09|window|\x0a\x09window := AthensWindowMorph new.\x0a\x09\x0a\x09\x22Add the morph to the world. The world is the topmost container morph.\x22\x0a\x09world addMorph: window.\x0a\x09\x0a\x09\x22Change the title of the window.\x22\x0a\x09window title: 'Step1 Demo Window'.",
messageSends: ["new", "addMorph:", "title:"],
referencedClasses: ["AthensWindowMorph"]
}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step2",
category: 'steps',
fn: function (){
var self=this;
var window,morph;
function $AthensWindowMorph(){return smalltalk.AthensWindowMorph||(typeof AthensWindowMorph=="undefined"?nil:AthensWindowMorph)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st($AthensWindowMorph())._new();
_st($1)._title_("Step 2: Rectangle Morphs");
$2=_st($1)._yourself();
window=$2;
$3=window;
_st($3)._height_((400));
$4=_st($3)._width_((500));
_st(self["@world"])._addMorph_(window);
return self}, function($ctx1) {$ctx1.fill(self,"step2",{window:window,morph:morph},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "step2\x0a\x09\x22Rectangle Morphs\x22\x0a\x09\x0a\x09|window morph|\x0a\x09window := AthensWindowMorph new\x0a\x09\x09title: 'Step 2: Rectangle Morphs';\x0a\x09\x09yourself.\x0a\x09\x0a\x09\x22AthensWindow is a (kind of) rectangle morph. We can set its width and height directly. Morphs can also have other shapes than rectangles (see Morph>>outerShape:).\x22\x0a\x09window \x0a\x09\x09height: 400;\x0a\x09\x09width: 500.\x0a\x09\x09\x0a\x09world addMorph: window.",
messageSends: ["title:", "new", "yourself", "height:", "width:", "addMorph:"],
referencedClasses: ["AthensWindowMorph"]
}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step3",
category: 'steps',
fn: function (){
var self=this;
var window;
function $AthensWindowMorph(){return smalltalk.AthensWindowMorph||(typeof AthensWindowMorph=="undefined"?nil:AthensWindowMorph)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st($AthensWindowMorph())._new();
_st($1)._title_("Step 3: Transformations");
$2=_st($1)._yourself();
window=$2;
$3=window;
_st($3)._translateByX_Y_((40),(80));
_st($3)._rotateByDegrees_((45));
$4=_st($3)._scaleByX_Y_((2),(0.75));
_st(window)._translateByX_Y_((10),(10));
_st(self["@world"])._addMorph_(window);
return self}, function($ctx1) {$ctx1.fill(self,"step3",{window:window},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "step3\x0a\x09\x22Transformations\x22\x0a\x09\x0a\x09|window|\x0a\x09window := AthensWindowMorph new\x0a\x09\x09title: 'Step 3: Transformations';\x0a\x09\x09yourself.\x0a\x09\x0a\x09\x22We can transform every morph (and automatically its submorphs).\x22\x0a\x09window\x0a\x09\x09translateByX: 40 Y: 80;\x0a\x09\x09rotateByDegrees: 45;\x0a\x09\x09scaleByX: 2 Y: 0.75.\x0a\x09\x0a\x09\x22Transformations always operate on the current transformation matrix and stack.\x22\x0a\x09window \x0a\x09\x09translateByX: 10 Y: 10.\x0a\x09\x09\x0a\x09\x22Morphs do not have a position but a transformation matrix that has the translation encoded in its values. To change the position of a morph to a specific value, we have to reset the transformation and translate the morph.\x22\x0a\x09\x22window\x0a\x09\x09resetTransformation;\x0a\x09\x09translateByX: 100 Y: 10.\x22\x0a\x09\x09\x0a\x09world addMorph: window.",
messageSends: ["title:", "new", "yourself", "translateByX:Y:", "rotateByDegrees:", "scaleByX:Y:", "addMorph:"],
referencedClasses: ["AthensWindowMorph"]
}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step4",
category: 'steps',
fn: function (){
var self=this;
var window,morph;
function $AthensWindowMorph(){return smalltalk.AthensWindowMorph||(typeof AthensWindowMorph=="undefined"?nil:AthensWindowMorph)}
function $AthensMorph(){return smalltalk.AthensMorph||(typeof AthensMorph=="undefined"?nil:AthensMorph)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st($AthensWindowMorph())._new();
_st($1)._title_("Step 4: Submorphs");
_st($1)._width_((400));
_st($1)._height_((400));
$2=_st($1)._yourself();
window=$2;
$3=_st($AthensMorph())._new();
_st($3)._translateByX_Y_((10),(40));
$4=_st($3)._yourself();
morph=$4;
_st(window)._addMorph_(morph);
_st(self["@world"])._addMorph_(window);
return self}, function($ctx1) {$ctx1.fill(self,"step4",{window:window,morph:morph},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "step4\x0a\x09\x22Submorphs\x22\x0a\x09\x0a\x09|window morph|\x0a\x09window := AthensWindowMorph new\x0a\x09\x09title: 'Step 4: Submorphs';\x0a\x09\x09width: 400; height: 400;\x0a\x09\x09yourself.\x0a\x09\x0a\x09morph := AthensMorph new\x0a\x09\x09translateByX: 10 Y: 40;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09\x22Morph>>addMorph: adds a submorph to the morph and removes it from its original owner.\x22\x0a\x09window addMorph: morph.\x0a\x09\x09\x0a\x09\x22We can remove the morph from its owner by calling delete.\x22\x0a\x09\x22morph delete.\x22\x0a\x09\x0a\x09world addMorph: window.",
messageSends: ["title:", "new", "width:", "height:", "yourself", "translateByX:Y:", "addMorph:"],
referencedClasses: ["AthensWindowMorph", "AthensMorph"]
}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step5",
category: 'steps',
fn: function (){
var self=this;
var window,morph;
function $AthensWindowMorph(){return smalltalk.AthensWindowMorph||(typeof AthensWindowMorph=="undefined"?nil:AthensWindowMorph)}
function $AthensMorph(){return smalltalk.AthensMorph||(typeof AthensMorph=="undefined"?nil:AthensMorph)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st($AthensWindowMorph())._new();
_st($1)._title_("Step 5: Mouse Events");
_st($1)._width_((400));
_st($1)._height_((400));
$2=_st($1)._yourself();
window=$2;
$3=_st($AthensMorph())._new();
_st($3)._translateByX_Y_((10),(40));
_st($3)._onMouseDown_((function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(morph)._color_(_st($Color())._red());
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st($3)._onMouseUp_((function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(morph)._color_(_st($Color())._blue());
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
$4=_st($3)._yourself();
morph=$4;
_st(morph)._onMouseMove_((function(evt){
return smalltalk.withContext(function($ctx2) {
$5=_st(_st(_st(evt)._position())._y()).__lt((100));
if(smalltalk.assert($5)){
return _st(morph)._color_(_st($Color())._yellow());
};
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(window)._addMorph_(morph);
_st(self["@world"])._addMorph_(window);
return self}, function($ctx1) {$ctx1.fill(self,"step5",{window:window,morph:morph},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "step5\x0a\x09\x22Mouse Events\x22\x0a\x09\x0a\x09|window morph|\x0a\x09window := AthensWindowMorph new\x0a\x09\x09title: 'Step 5: Mouse Events';\x0a\x09\x09width: 400; height: 400;\x0a\x09\x09yourself.\x0a\x09\x0a\x09morph := AthensMorph new\x0a\x09\x09translateByX: 10 Y: 40;\x0a\x09\x09\x22We can attach event handlers to any morph by with on...: aBlock.\x22\x0a\x09\x09onMouseDown: [:evt | morph color: Color red];\x0a\x09\x09onMouseUp: [:evt | morph color: Color blue];\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09\x22evt position is the mouse position relative to the morph's origin (and regarding its transformation).\x22\x0a\x09morph onMouseMove: [:evt | \x0a\x09\x09\x09evt position y < 100\x0a\x09\x09\x09\x09ifTrue: [morph color: Color yellow]].\x0a\x0a\x09\x22The mouse click event also provides the position with 'evt position'.\x22\x0a\x09\x22morph onMouseClick: [:evt |\x0a\x09\x09morph delete].\x22\x0a\x09\x09\x0a\x09window addMorph: morph.\x0a\x09\x0a\x09world addMorph: window.",
messageSends: ["title:", "new", "width:", "height:", "yourself", "translateByX:Y:", "onMouseDown:", "color:", "red", "onMouseUp:", "blue", "onMouseMove:", "ifTrue:", "yellow", "<", "y", "position", "addMorph:"],
referencedClasses: ["AthensWindowMorph", "AthensMorph", "Color"]
}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step6",
category: 'steps',
fn: function (){
var self=this;
var window;
function $AthensWindowMorph(){return smalltalk.AthensWindowMorph||(typeof AthensWindowMorph=="undefined"?nil:AthensWindowMorph)}
function $AthensRectangleMorph(){return smalltalk.AthensRectangleMorph||(typeof AthensRectangleMorph=="undefined"?nil:AthensRectangleMorph)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st($AthensWindowMorph())._new();
_st($1)._title_("Step 6: Rectangle Morphs");
_st($1)._width_((200));
_st($1)._height_((100));
$2=_st($1)._yourself();
window=$2;
$3=_st($AthensRectangleMorph())._new();
_st($3)._width_((20));
_st($3)._height_((20));
_st($3)._translateByX_Y_((5),(35));
_st($3)._hasSharpBorder_(false);
$4=_st($3)._yourself();
_st(window)._addMorph_($4);
$5=_st($AthensRectangleMorph())._new();
_st($5)._width_((20));
_st($5)._height_((20));
_st($5)._translateByX_Y_((30),(35));
_st($5)._hasSharpBorder_(true);
$6=_st($5)._yourself();
_st(window)._addMorph_($6);
$7=_st($AthensRectangleMorph())._new();
_st($7)._width_((20));
_st($7)._height_((20));
_st($7)._translateByX_Y_((55),(35));
_st($7)._fillColor_(_st($Color())._black());
_st($7)._mouseFocusFillColor_(_st($Color())._blue());
_st($7)._mouseDownFillColor_(_st($Color())._red());
_st($7)._borderColor_(_st($Color())._green());
_st($7)._mouseFocusBorderColor_(_st($Color())._yellow());
_st($7)._mouseDownBorderColor_(_st($Color())._blue());
$8=_st($7)._yourself();
_st(window)._addMorph_($8);
_st(self["@world"])._addMorph_(window);
return self}, function($ctx1) {$ctx1.fill(self,"step6",{window:window},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "step6\x0a\x09\x22Rectangle Morphs\x22\x0a\x09\x0a\x09|window|\x0a\x09window := AthensWindowMorph new\x0a\x09\x09title: 'Step 6: Rectangle Morphs';\x0a\x09\x09width: 200; height: 100;\x0a\x09\x09yourself.\x0a\x09\x0a\x09\x22By default, rectangle morphs do not have a sharp border.\x22\x0a\x09window addMorph: (AthensRectangleMorph new\x0a\x09\x09width: 20; height: 20;\x0a\x09\x09translateByX: 5 Y: 35;\x0a\x09\x09hasSharpBorder: false;\x0a\x09\x09yourself).\x0a\x09\x09\x0a\x09\x22But we can change this.\x22\x0a\x09window addMorph: (AthensRectangleMorph new\x0a\x09\x09width: 20; height: 20;\x0a\x09\x09translateByX: 30 Y: 35;\x0a\x09\x09hasSharpBorder: true;\x0a\x09\x09yourself).\x0a\x09\x09\x0a\x09\x22Rectangle morphs support a variety of color changes for the fill color and border color.\x22\x0a\x09window addMorph: (AthensRectangleMorph new\x0a\x09\x09width: 20; height: 20;\x0a\x09\x09translateByX: 55 Y: 35;\x0a\x09\x09fillColor: Color black;\x09\x09\x09\x09\x09\x22default fill color\x22\x0a\x09\x09mouseFocusFillColor: Color blue;\x09\x09\x22fill color if mouse is over\x22\x0a\x09\x09mouseDownFillColor: Color red;\x09\x09\x09\x22fill color if mouse button is pressed\x22\x0a\x09\x09borderColor: Color green;\x09\x09\x09\x09\x22default border color\x22\x0a\x09\x09mouseFocusBorderColor: Color yellow;\x09\x22border color if mouse is over\x22\x0a\x09\x09mouseDownBorderColor: Color blue;\x09\x09\x09\x22borderc color if mouse button is pressed\x22\x0a\x09\x09yourself).\x0a\x09\x0a\x09world addMorph: window.",
messageSends: ["title:", "new", "width:", "height:", "yourself", "addMorph:", "translateByX:Y:", "hasSharpBorder:", "fillColor:", "black", "mouseFocusFillColor:", "blue", "mouseDownFillColor:", "red", "borderColor:", "green", "mouseFocusBorderColor:", "yellow", "mouseDownBorderColor:"],
referencedClasses: ["AthensWindowMorph", "AthensRectangleMorph", "Color"]
}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step7",
category: 'steps',
fn: function (){
var self=this;
var window,button,check,radio;
function $AthensWindowMorph(){return smalltalk.AthensWindowMorph||(typeof AthensWindowMorph=="undefined"?nil:AthensWindowMorph)}
function $AthensButtonMorph(){return smalltalk.AthensButtonMorph||(typeof AthensButtonMorph=="undefined"?nil:AthensButtonMorph)}
function $AthensRadioButtonMorph(){return smalltalk.AthensRadioButtonMorph||(typeof AthensRadioButtonMorph=="undefined"?nil:AthensRadioButtonMorph)}
function $AthensCheckBoxMorph(){return smalltalk.AthensCheckBoxMorph||(typeof AthensCheckBoxMorph=="undefined"?nil:AthensCheckBoxMorph)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st($AthensWindowMorph())._new();
_st($1)._title_("Step 7: Button Morphs");
_st($1)._width_((280));
_st($1)._height_((70));
$2=_st($1)._yourself();
window=$2;
$3=_st($AthensButtonMorph())._new();
_st($3)._width_((100));
_st($3)._height_((25));
_st($3)._translateByX_Y_((5),(35));
_st($3)._text_("Button Morph");
_st($3)._onMouseClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(radio)._checked_(_st(_st(radio)._isChecked())._not());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=_st($3)._yourself();
button=$4;
_st(window)._addMorph_(button);
$5=_st($AthensRadioButtonMorph())._new();
_st($5)._translateByX_Y_((110),(35));
_st($5)._text_("Radio Button Morph");
_st($5)._onChange_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(check)._checked_(_st(_st(check)._isChecked())._not());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$6=_st($5)._yourself();
radio=$6;
_st(window)._addMorph_(radio);
$7=_st($AthensCheckBoxMorph())._new();
_st($7)._translateByX_Y_((110),(50));
_st($7)._text_("Check Box Morph");
_st($7)._onChange_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$8=_st($7)._yourself();
check=$8;
_st(window)._addMorph_(check);
_st(self["@world"])._addMorph_(window);
return self}, function($ctx1) {$ctx1.fill(self,"step7",{window:window,button:button,check:check,radio:radio},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "step7\x0a\x09\x22Button Morphs\x22\x0a\x09\x0a\x09|window button check radio|\x0a\x09window := AthensWindowMorph new\x0a\x09\x09title: 'Step 7: Button Morphs';\x0a\x09\x09width: 280; height: 70;\x0a\x09\x09yourself.\x0a\x09\x0a\x09\x22This is a button.\x22\x0a\x09window addMorph: (button := AthensButtonMorph new\x0a\x09\x09width: 100; height: 25;\x0a\x09\x09translateByX: 5 Y: 35;\x0a\x09\x09text: 'Button Morph';\x0a\x09\x09onMouseClick: [radio checked: radio isChecked not];\x0a\x09\x09yourself).\x0a\x09\x09\x0a\x09\x22Radio buttons can be activated, but not deactivated by clicking them.\x22\x0a\x09window addMorph: (radio := AthensRadioButtonMorph new\x0a\x09\x09translateByX: 110 Y: 35;\x0a\x09\x09text: 'Radio Button Morph';\x0a\x09\x09onChange: [check checked: check isChecked not];\x0a\x09\x09yourself).\x0a\x0a\x09\x22Check boxes can be activated and deactivated by clicking them.\x22\x0a\x09window addMorph: (check := AthensCheckBoxMorph new\x0a\x09\x09translateByX: 110 Y: 50;\x0a\x09\x09text: 'Check Box Morph';\x0a\x09\x09onChange: [\x22value changed\x22];\x0a\x09\x09yourself).\x0a\x09\x0a\x09world addMorph: window.",
messageSends: ["title:", "new", "width:", "height:", "yourself", "addMorph:", "translateByX:Y:", "text:", "onMouseClick:", "checked:", "not", "isChecked", "onChange:"],
referencedClasses: ["AthensWindowMorph", "AthensButtonMorph", "AthensRadioButtonMorph", "AthensCheckBoxMorph"]
}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step8",
category: 'steps',
fn: function (){
var self=this;
var window,img;
function $AthensWindowMorph(){return smalltalk.AthensWindowMorph||(typeof AthensWindowMorph=="undefined"?nil:AthensWindowMorph)}
function $AthensImageMorph(){return smalltalk.AthensImageMorph||(typeof AthensImageMorph=="undefined"?nil:AthensImageMorph)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st($AthensWindowMorph())._new();
_st($1)._title_("Step 8: Image Morph");
_st($1)._width_((450));
_st($1)._height_((350));
$2=_st($1)._yourself();
window=$2;
$3=_st($AthensImageMorph())._new();
_st($3)._translateByX_Y_((5),(35));
_st($3)._url_("images/amber_transparent.png");
_st($3)._hasSharpBorder_(false);
_st($3)._onMouseClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(img)._mouseFocusBorderColor_(_st($Color())._gray());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=_st($3)._yourself();
img=$4;
_st(window)._addMorph_(img);
_st(self["@world"])._addMorph_(window);
return self}, function($ctx1) {$ctx1.fill(self,"step8",{window:window,img:img},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "step8\x0a\x09\x22Image Morph\x22\x0a\x09\x0a\x09|window img|\x0a\x09window := AthensWindowMorph new\x0a\x09\x09title: 'Step 8: Image Morph';\x0a\x09\x09width: 450; height: 350;\x0a\x09\x09yourself.\x0a\x09\x0a\x09\x22The image morph is a rectangle morph.\x22\x0a\x09window addMorph: (img := AthensImageMorph new\x0a\x09\x09translateByX: 5 Y: 35;\x0a\x09\x09url: 'images/amber_transparent.png';\x0a\x09\x09hasSharpBorder: false;\x0a\x09\x09onMouseClick: [img mouseFocusBorderColor: Color gray];\x0a\x09\x09yourself).\x0a\x09\x0a\x09world addMorph: window.",
messageSends: ["title:", "new", "width:", "height:", "yourself", "addMorph:", "translateByX:Y:", "url:", "hasSharpBorder:", "onMouseClick:", "mouseFocusBorderColor:", "gray"],
referencedClasses: ["AthensWindowMorph", "AthensImageMorph", "Color"]
}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "world:",
category: 'accessing',
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@world"]=aMorph;
return self}, function($ctx1) {$ctx1.fill(self,"world:",{aMorph:aMorph},smalltalk.AthensMorphicTutorial)})},
args: ["aMorph"],
source: "world: aMorph\x0a\x09world := aMorph.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AthensMorphicTutorial);


smalltalk.addMethod(
smalltalk.method({
selector: "forWorld:",
category: 'instance creation',
fn: function (worldMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._world_(worldMorph);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forWorld:",{worldMorph:worldMorph},smalltalk.AthensMorphicTutorial.klass)})},
args: ["worldMorph"],
source: "forWorld: worldMorph\x0a\x09^ self basicNew\x0a\x09\x09world: worldMorph;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["world:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.AthensMorphicTutorial.klass);



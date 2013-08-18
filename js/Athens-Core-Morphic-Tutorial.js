smalltalk.addPackage('Athens-Core-Morphic-Tutorial');
smalltalk.addClass('AthensMorphicTutorial', smalltalk.Object, ['world', 'btnPrev', 'btnNext', 'btnDoit', 'txtCode', 'step'], 'Athens-Core-Morphic-Tutorial');
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
self._showStep_((1));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "initialize\x0a\x09self initializeWindow.\x0a\x09self showStep: 1.",
messageSends: ["initializeWindow", "showStep:"],
referencedClasses: []
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
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12;
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
$9=_st($AthensTextAreaMorph())._new();
_st($9)._width_((630));
_st($9)._height_((330));
_st($9)._translateByX_Y_((5),(35));
$10=_st($9)._yourself();
self["@txtCode"]=$10;
$11=window;
_st($11)._addMorph_(self["@btnPrev"]);
_st($11)._addMorph_(self["@btnNext"]);
_st($11)._addMorph_(self["@btnDoit"]);
$12=_st($11)._addMorph_(self["@txtCode"]);
_st(self["@world"])._addMorph_(window);
return self}, function($ctx1) {$ctx1.fill(self,"initializeWindow",{window:window},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "initializeWindow\x0a\x09|window|\x0a\x09window := AthensWindowMorph new.\x0a\x09window \x0a\x09\x09title: 'Athens Morphic Tutorial';\x0a\x09\x09width: 640;\x0a\x09\x09height: 400;\x0a\x09\x09translateByX: 40 Y: 20.\x0a\x09\x09\x0a\x09btnPrev := AthensButtonMorph new\x0a\x09\x09text: 'Previous step';\x0a\x09\x09width: 100; height: 25;\x0a\x09\x09translateByX: 5 Y: 370;\x0a\x09\x09onMouseClick: [self previousStep];\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09btnNext := AthensButtonMorph new\x0a\x09\x09text: 'Next step';\x0a\x09\x09width: 100; height: 25;\x0a\x09\x09translateByX: 110 Y: 370;\x0a\x09\x09onMouseClick: [self nextStep];\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09btnDoit := AthensButtonMorph new\x0a\x09\x09text: 'Do it';\x0a\x09\x09width: 100; height: 25;\x0a\x09\x09translateByX: 215 Y: 370;\x0a\x09\x09onMouseClick: [self doStep];\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09txtCode := AthensTextAreaMorph new\x0a\x09\x09width: 630; height: 330;\x0a\x09\x09translateByX: 5 Y: 35;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09window \x0a\x09\x09addMorph: btnPrev;\x0a\x09\x09addMorph: btnNext;\x0a\x09\x09addMorph: btnDoit;\x0a\x09\x09addMorph: txtCode.\x0a\x09\x09\x0a\x09world addMorph: window.",
messageSends: ["new", "title:", "width:", "height:", "translateByX:Y:", "text:", "onMouseClick:", "previousStep", "yourself", "nextStep", "doStep", "addMorph:"],
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
self["@step"]=_st(self["@step"])._min_((2));
self._showStep_(self["@step"]);
return self}, function($ctx1) {$ctx1.fill(self,"nextStep",{},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "nextStep\x0a\x09step := step + 1.\x0a\x09step := step min: 2.\x0a\x09self showStep: step.",
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
function $AthensMorph(){return smalltalk.AthensMorph||(typeof AthensMorph=="undefined"?nil:AthensMorph)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($AthensWindowMorph())._new();
_st($1)._title_("Step 2: Adding/removing submorphs");
$2=_st($1)._yourself();
window=$2;
_st(self["@world"])._addMorph_(window);
morph=_st($AthensMorph())._new();
_st(window)._addMorph_(morph);
return self}, function($ctx1) {$ctx1.fill(self,"step2",{window:window,morph:morph},smalltalk.AthensMorphicTutorial)})},
args: [],
source: "step2\x0a\x09\x22Add/remove morphs\x22\x0a\x09\x0a\x09\x22You can add submorphs to morph and remove them later. When you add a morph to another morph it is automatically removed from its former owner.\x22\x0a\x09\x0a\x09|window morph|\x0a\x09window := AthensWindowMorph new\x0a\x09\x09title: 'Step 2: Adding/removing submorphs';\x0a\x09\x09yourself.\x0a\x09\x0a\x09\x22Add the morph to the world. The world is the topmost container morph.\x22\x0a\x09world addMorph: window.\x0a\x09\x0a\x09\x22Create a morph.\x22\x0a\x09morph := AthensMorph new.\x0a\x09\x0a\x09\x22Add a morph.\x22\x0a\x09window addMorph: morph.\x0a\x0a\x09\x22Uncomment the next line to remove the morph again.\x22\x0a\x09\x22morph delete.\x22",
messageSends: ["title:", "new", "yourself", "addMorph:"],
referencedClasses: ["AthensWindowMorph", "AthensMorph"]
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



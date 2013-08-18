smalltalk.addPackage('Athens-Core-Morphic-Tutorial');
smalltalk.addClass('AthensMorphicTutorial', smalltalk.Object, ['world', 'btnPrev', 'btnNext', 'btnDoit', 'txtCode', 'step'], 'Athens-Core-Morphic-Tutorial');
smalltalk.addMethod(
smalltalk.method({
selector: "doStep",
fn: function (){
var self=this;
var selector;
return smalltalk.withContext(function($ctx1) { 
selector=_st("doItstep".__comma(_st(self["@step"])._asString()))._asSymbol();
_st(self._class())._compile_("doIt".__comma(_st(self["@txtCode"])._text()));
self._perform_(selector);
_st(self._class())._removeCompiledMethod_(_st(self._class())._methodAt_(selector));
return self}, function($ctx1) {$ctx1.fill(self,"doStep",{selector:selector},smalltalk.AthensMorphicTutorial)})},
messageSends: ["asSymbol", ",", "asString", "compile:", "text", "class", "perform:", "removeCompiledMethod:", "methodAt:"]}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._initializeWindow();
self._showStep_((1));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensMorphicTutorial)})},
messageSends: ["initializeWindow", "showStep:"]}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWindow",
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
messageSends: ["new", "title:", "width:", "height:", "translateByX:Y:", "text:", "onMouseClick:", "previousStep", "yourself", "nextStep", "doStep", "addMorph:"]}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "nextStep",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@step"]=_st(self["@step"]).__plus((1));
self["@step"]=_st(self["@step"])._min_((2));
self._showStep_(self["@step"]);
return self}, function($ctx1) {$ctx1.fill(self,"nextStep",{},smalltalk.AthensMorphicTutorial)})},
messageSends: ["+", "min:", "showStep:"]}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "previousStep",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@step"]=_st(self["@step"]).__minus((1));
self["@step"]=_st(self["@step"])._max_((1));
self._showStep_(self["@step"]);
return self}, function($ctx1) {$ctx1.fill(self,"previousStep",{},smalltalk.AthensMorphicTutorial)})},
messageSends: ["-", "max:", "showStep:"]}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "showStep:",
fn: function (anInteger){
var self=this;
var selector;
return smalltalk.withContext(function($ctx1) { 
selector=_st("step".__comma(_st(anInteger)._asString()))._asSymbol();
_st(self["@txtCode"])._text_(_st(_st(self._class())._methodAt_(selector))._source());
self["@step"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"showStep:",{anInteger:anInteger,selector:selector},smalltalk.AthensMorphicTutorial)})},
messageSends: ["asSymbol", ",", "asString", "text:", "source", "methodAt:", "class"]}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step1",
fn: function (){
var self=this;
var window;
function $AthensWindowMorph(){return smalltalk.AthensWindowMorph||(typeof AthensWindowMorph=="undefined"?nil:AthensWindowMorph)}
return smalltalk.withContext(function($ctx1) { 
window=_st($AthensWindowMorph())._new();
_st(self["@world"])._addMorph_(window);
_st(window)._title_("Step1 Demo Window");
return self}, function($ctx1) {$ctx1.fill(self,"step1",{window:window},smalltalk.AthensMorphicTutorial)})},
messageSends: ["new", "addMorph:", "title:"]}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step2",
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
messageSends: ["title:", "new", "yourself", "addMorph:"]}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "world:",
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@world"]=aMorph;
return self}, function($ctx1) {$ctx1.fill(self,"world:",{aMorph:aMorph},smalltalk.AthensMorphicTutorial)})},
messageSends: []}),
smalltalk.AthensMorphicTutorial);


smalltalk.addMethod(
smalltalk.method({
selector: "forWorld:",
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
messageSends: ["world:", "basicNew", "initialize", "yourself"]}),
smalltalk.AthensMorphicTutorial.klass);



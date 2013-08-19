smalltalk.addPackage('Athens-Core-Morphic-Tutorial');
smalltalk.addClass('AthensMorphicTutorial', smalltalk.Object, ['world', 'btnPrev', 'btnNext', 'btnDoit', 'btnCode', 'txtCode', 'step'], 'Athens-Core-Morphic-Tutorial');
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
self._initializeAmberLogo();
self._showStep_((1));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AthensMorphicTutorial)})},
messageSends: ["initializeWindow", "initializeAmberLogo", "showStep:"]}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeAmberLogo",
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
messageSends: ["url:", "new", "translateByX:Y:", "-", "width", "mouseFocusFillColor:", "white", "mouseDownFillColor:", "cosmoLightGray", "mouseFocusBorderColor:", "cosmoGray", "mouseDownBorderColor:", "cosmoDarkGray", "onMouseClick:", "location:", "yourself", "addMorph:"]}),
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
messageSends: ["new", "title:", "width:", "height:", "translateByX:Y:", "text:", "onMouseClick:", "previousStep", "yourself", "nextStep", "doStep", "loadHelios", "delete", "addMorph:"]}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "nextStep",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@step"]=_st(self["@step"]).__plus((1));
self["@step"]=_st(self["@step"])._min_((6));
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
messageSends: ["title:", "new", "yourself", "height:", "width:", "addMorph:"]}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step3",
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
messageSends: ["title:", "new", "yourself", "translateByX:Y:", "rotateByDegrees:", "scaleByX:Y:", "addMorph:"]}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step4",
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
messageSends: ["title:", "new", "width:", "height:", "yourself", "translateByX:Y:", "addMorph:"]}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step5",
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
messageSends: ["title:", "new", "width:", "height:", "yourself", "translateByX:Y:", "onMouseDown:", "color:", "red", "onMouseUp:", "blue", "onMouseMove:", "ifTrue:", "yellow", "<", "y", "position", "addMorph:"]}),
smalltalk.AthensMorphicTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "step6",
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
messageSends: ["title:", "new", "width:", "height:", "yourself", "addMorph:", "translateByX:Y:", "hasSharpBorder:", "fillColor:", "black", "mouseFocusFillColor:", "blue", "mouseDownFillColor:", "red", "borderColor:", "green", "mouseFocusBorderColor:", "yellow", "mouseDownBorderColor:"]}),
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



Smalltalk current createPackage: 'Athens-Core-Morphic-Tutorial'!
Object subclass: #AthensMorphicTutorial
	instanceVariableNames: 'world btnPrev btnNext btnDoit btnCode txtCode step'
	package: 'Athens-Core-Morphic-Tutorial'!

!AthensMorphicTutorial methodsFor: 'accessing'!

world: aMorph
	world := aMorph.
! !

!AthensMorphicTutorial methodsFor: 'initialization'!

initialize
	self initializeWindow.
	self initializeAmberLogo.
	self showStep: 1.
!

initializeAmberLogo
	|amberLogo|
	amberLogo := AthensImageMorph new
		url: 'images/amber_transparent.png';
		translateByX: world width - 421 - 15 Y: 15;
		mouseFocusFillColor: Color white;
		mouseDownFillColor: Color cosmoLightGray;
		mouseFocusBorderColor: Color cosmoGray;
		mouseDownBorderColor: Color cosmoDarkGray;
		onMouseClick: [:evt | document location: 'http://www.amber-lang.net/'];
		yourself.
		
	world addMorph: amberLogo.
!

initializeWindow
	|window|
	window := AthensWindowMorph new.
	window 
		title: 'Athens Morphic Tutorial';
		width: 640;
		height: 400;
		translateByX: 40 Y: 20.
		
	btnPrev := AthensButtonMorph new
		text: 'Previous step';
		width: 100; height: 25;
		translateByX: 5 Y: 370;
		onMouseClick: [self previousStep];
		yourself.
		
	btnNext := AthensButtonMorph new
		text: 'Next step';
		width: 100; height: 25;
		translateByX: 110 Y: 370;
		onMouseClick: [self nextStep];
		yourself.
		
	btnDoit := AthensButtonMorph new
		text: 'Do it';
		width: 100; height: 25;
		translateByX: 215 Y: 370;
		onMouseClick: [self doStep];
		yourself.
		
	btnCode := AthensButtonMorph new
		text: 'IDE (Helios)';
		width: 100; height: 25;
		translateByX: 320 Y: 370;
		onMouseClick: [
			amber loadHelios.
			btnCode delete];
		yourself.
		
	txtCode := AthensTextAreaMorph new
		width: 630; height: 330;
		translateByX: 5 Y: 35;
		yourself.
		
	window 
		addMorph: btnPrev;
		addMorph: btnNext;
		addMorph: btnDoit;
		addMorph: btnCode;
		addMorph: txtCode.
		
	world addMorph: window.
! !

!AthensMorphicTutorial methodsFor: 'interactions'!

doStep
	|selector|
	selector := ('doItstep', step asString) asSymbol.
	self class compile: 'doIt', txtCode text.
	self perform: selector.
	self class removeCompiledMethod: (self class methodAt: selector).
!

nextStep
	step := step + 1.
	step := step min: 4.
	self showStep: step.
!

previousStep
	step := step - 1.
	step := step max: 1.
	self showStep: step.
!

showStep: anInteger
	|selector|
	selector := ('step', anInteger asString) asSymbol.
	txtCode text: (self class methodAt: selector) source.
	step := anInteger.
! !

!AthensMorphicTutorial methodsFor: 'steps'!

step1
	"Create a window"
	
	"A window morph is a container for other morphs that can be moved around."
	
	|window|
	window := AthensWindowMorph new.
	
	"Add the morph to the world. The world is the topmost container morph."
	world addMorph: window.
	
	"Change the title of the window."
	window title: 'Step1 Demo Window'.
!

step2
	"Rectangle Morphs"
	
	|window morph|
	window := AthensWindowMorph new
		title: 'Step 2: Rectangle Morphs';
		yourself.
	
	"AthensWindow is a (kind of) rectangle morph. We can set its width and height directly. Morphs can also have other shapes than rectangles (see Morph>>outerShape:)."
	window 
		height: 400;
		width: 500.
		
	world addMorph: window.
!

step3
	"Transformations"
	
	|window|
	window := AthensWindowMorph new
		title: 'Step 3: Transformations';
		yourself.
	
	"We can transform every morph (and automatically its submorphs)."
	window
		translateByX: 40 Y: 80;
		rotateByDegrees: 45;
		scaleByX: 2 Y: 0.75.
	
	"Transformations always operate on the current transformation matrix and stack."
	window 
		translateByX: 10 Y: 10.
		
	"Morphs do not have a position but a transformation matrix that has the translation encoded in its values. To change the position of a morph to a specific value, we have to reset the transformation and translate the morph."
	"window
		resetTransformation;
		translateByX: 100 Y: 10."
		
	world addMorph: window.
!

step4
	"Submorphs"
	
	|window morph|
	window := AthensWindowMorph new
		title: 'Step 4: Submorphs';
		width: 400; height: 400;
		yourself.
	
	morph := AthensMorph new
		translateByX: 10 Y: 40;
		yourself.
		
	"Morph>>addMorph: adds a submorph to the morph and removes it from its original owner."
	window addMorph: morph.
		
	"We can remove the morph from its owner by calling delete."
	"morph delete."
	
	world addMorph: window.
! !

!AthensMorphicTutorial class methodsFor: 'instance creation'!

forWorld: worldMorph
	^ self basicNew
		world: worldMorph;
		initialize;
		yourself
! !


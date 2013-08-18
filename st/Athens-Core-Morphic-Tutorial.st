Smalltalk current createPackage: 'Athens-Core-Morphic-Tutorial'!
Object subclass: #AthensMorphicTutorial
	instanceVariableNames: 'world btnPrev btnNext btnDoit txtCode step'
	package: 'Athens-Core-Morphic-Tutorial'!

!AthensMorphicTutorial methodsFor: 'accessing'!

world: aMorph
	world := aMorph.
! !

!AthensMorphicTutorial methodsFor: 'initialization'!

initialize
	self initializeWindow.
	self showStep: 1.
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
		
	txtCode := AthensTextAreaMorph new
		width: 630; height: 330;
		translateByX: 5 Y: 35;
		yourself.
		
	window 
		addMorph: btnPrev;
		addMorph: btnNext;
		addMorph: btnDoit;
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
	step := step min: 2.
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
	"Add/remove morphs"
	
	"You can add submorphs to morph and remove them later. When you add a morph to another morph it is automatically removed from its former owner."
	
	|window morph|
	window := AthensWindowMorph new
		title: 'Step 2: Adding/removing submorphs';
		yourself.
	
	"Add the morph to the world. The world is the topmost container morph."
	world addMorph: window.
	
	"Create a morph."
	morph := AthensMorph new.
	
	"Add a morph."
	window addMorph: morph.

	"Uncomment the next line to remove the morph again."
	"morph delete."
! !

!AthensMorphicTutorial class methodsFor: 'instance creation'!

forWorld: worldMorph
	^ self basicNew
		world: worldMorph;
		initialize;
		yourself
! !


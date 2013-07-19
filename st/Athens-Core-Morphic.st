Smalltalk current createPackage: 'Athens-Core-Morphic'!
Object subclass: #AthensMorph
	instanceVariableNames: 'transformation outerShape owner submorphs color'
	package: 'Athens-Core-Morphic'!

!AthensMorph methodsFor: 'accessing'!

color: aColor
	color := aColor.
!

outerShape: shapeOrPolygon
	outerShape := shapeOrPolygon asPolygon.
!

owner
	^ owner
!

owner: aMorph
	owner := aMorph.
!

submorphs
	^ submorphs
!

transformation
	^ transformation
! !

!AthensMorph methodsFor: 'drawing'!

drawOn: canvas
	|path|
	path := canvas createPath: [:builder |
		builder
			absolute;
			lineTo: 200@0;
			lineTo: 200@200;
			lineTo: 0@200;
			lineTo: 0@0].
	self outerShape: path.
	
	canvas setPaint: color.
	canvas setShape: path.
	canvas draw.
! !

!AthensMorph methodsFor: 'geometry'!

rotateBy: aNumber
	transformation rotateByRadians: aNumber.
	self redraw.
!

scaleByX: x Y: y
	transformation scaleX: x Y: y.
	self redraw.
!

translateByX: x Y: y
	transformation translateX: x Y: y.
	self redraw.
! !

!AthensMorph methodsFor: 'initialization'!

initialize
	color := Color blue.
	owner := AthensDummyWorldMorph instance.
	transformation := AthensAffineTransform new.
	submorphs := OrderedCollection new.
	
	self createSurfacePaint.
! !

!AthensMorph methodsFor: 'morph handling'!

addMorph: aMorph
	self submorphs add: aMorph.
	aMorph owner: self.
	aMorph redraw.
! !

!AthensMorph methodsFor: 'private'!

createSurfacePaint
	"TODO: surface class variable, extent variable"
	self initializeSurface.

	surface drawDuring: [:canvas | 
		canvas implicitTransformation: transformation.
		canvas pathTransform loadIdentity.
		canvas paintTransform loadIdentity.
		self drawOn: canvas.
		canvas pathTransform loadIdentity.
		canvas paintTransform loadIdentity.
		
		submorphs do: [:morph | 
			canvas setPaint: morph surface.
			canvas drawShape: (0@0 corner: 500@400)]].
! !

!AthensMorph methodsFor: 'testing'!

isWorldMorph
	^ false
! !

AthensMorph subclass: #AthensButtonMorph
	instanceVariableNames: 'text extent font'
	package: 'Athens-Core-Morphic'!

!AthensButtonMorph methodsFor: 'drawing'!

drawOn: canvas
	|textX textY shape|
	shape := 0@0 corner: extent.
	outerShape := shape asPolygon.
	canvas setStrokePaint: Color black.
	canvas drawShape: shape
	canvas setPaint: Color white.
	canvas drawShape: shape.
	canvas setFont: font.
	textX := (canvas measureStringWidth: text) / 2.
	textY := (extent y + (font pointSize*0.6)) / 2.
	canvas pathTransform translateX: textX Y: textY.
	canvas setPaint: Color black.
	canvas drawString: text.
! !

!AthensButtonMorph methodsFor: 'initialization'!

initialize
	super initialize.
	extent := 200@25.
	text := 'ButtonMorph'.
	font := LogicalFont familyName: 'Verdana' pointSize: 15.
! !

AthensMorph subclass: #AthensWorldMorph
	instanceVariableNames: 'backgroundPaint'
	package: 'Athens-Core-Morphic'!

!AthensWorldMorph methodsFor: 'accessing'!

surface
	^ surface
!

surface: aSurface
	surface := aSurface.
! !

!AthensWorldMorph methodsFor: 'initialization'!

drawOn: canvas
	surface clear: Color gray.
	
	(canvas setPaint: backgroundPaint) repeat.
	canvas drawShape: (0@0 corner: surface extent).
!

initialize
	super initialize.
	self initializeBackgroundPaint.
!

initializeBackgroundPaint
	backgroundPaint := AthensHTMLSurface extent: 10@10.
	
	"checker board"
	backgroundPaint drawDuring: [:canvas |
		backgroundPaint clear.
		canvas setPaint: Color white.
		canvas 
			drawShape: (0@0 corner: 5@5);
			drawShape: (5@5 corner: 10@10)].
!

initializeSurface
! !

!AthensWorldMorph methodsFor: 'testing'!

isWorldMorph
	^ true
! !

!AthensWorldMorph class methodsFor: 'instance creation'!

forSurface: aSurface
	^ self basicNew
		surface: aSurface;
		initialize;
		yourself
! !

AthensWorldMorph subclass: #AthensDummyWorldMorph
	instanceVariableNames: ''
	package: 'Athens-Core-Morphic'!

!AthensDummyWorldMorph methodsFor: 'drawing'!

drawDuring: aBlock
! !

!AthensDummyWorldMorph methodsFor: 'initialization'!

initialize
! !

AthensDummyWorldMorph class instanceVariableNames: 'instance'!

!AthensDummyWorldMorph class methodsFor: ' singleton'!

instance
	instance ifNil: [instance := self new].
	^ instance
! !

Object subclass: #DamageRecorder
	instanceVariableNames: 'invalidRects'
	package: 'Athens-Core-Morphic'!

!DamageRecorder methodsFor: 'recording'!

recordInvalidRect: newRect
	invalidRects add: newRect.
! !

!DamageRecorder methodsFor: 'testing'!

initialize
	invalidRects := OrderedCollection new.
!

updateIsNeeded
	^ invalidRects notEmpty
! !

Object subclass: #WorldState
	instanceVariableNames: 'damageRecorder'
	package: 'Athens-Core-Morphic'!

!WorldState methodsFor: 'drawing'!

drawWorld
	damageRecorder updateIsNeeded
		ifTrue: [].
!

startDrawLoop
	< function drawWorldLoop() {
		self._drawWorld();
		requestAnimationFrame(drawWorldLoop);
	}
	drawWorldLoop();>
! !

!WorldState methodsFor: 'initialization'!

initialize
	damageRecorder := DamageRecorder new.
! !


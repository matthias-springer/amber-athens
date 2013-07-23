Smalltalk current createPackage: 'Athens-Core-Morphic'!
Object subclass: #AthensMorph
	instanceVariableNames: 'transformation outerShape owner submorphs color globalPathTransform globalOuterShape'
	package: 'Athens-Core-Morphic'!

!AthensMorph methodsFor: 'accessing'!

color: aColor
	color := aColor.
	self redraw.
!

globalPathTransform
	^ globalPathTransform
!

outerShape: shapeOrPolygon
	outerShape := shapeOrPolygon asPolygon.
	globalOuterShape := outerShape deepCopy.
	globalOuterShape multiplyBy: globalPathTransform.
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
!

world
	|m|
	m := self.
	[m isWorldMorph] whileFalse: [m := m owner].
	^ m
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
!

redraw
	"Causes Morph to be redrawn."
	self world redraw.
!

redrawEverythingOn: canvas
	globalPathTransform := AthensAffineTransform new.
	globalPathTransform loadAffineTransform: owner globalPathTransform.
	globalPathTransform multiplyBy: transformation.
	canvas pathTransform loadAffineTransform: globalPathTransform.
	canvas pathTransform setIdentity.
	canvas pathTransform set.
	self drawOn: canvas.
	submorphs do: [:morph | morph redrawEverythingOn: canvas].
! !

!AthensMorph methodsFor: 'events'!

handleMouseClick: evt
	self color: Color green.
!

handleMouseDown: evt
!

handleMouseMove: evt
!

handleMouseUp: evt
!

morphAtPosition: aPoint
	submorphs reverseDo: [:morph | |ret|
		ret := morph morphAtPosition: aPoint.
		ret ifNotNil: [^ ret]].
		
	((globalOuterShape includesPoint: aPoint) or: [self isWorldMorph])
		ifTrue: [^ self]
		ifFalse: [^ nil].
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
	globalPathTransform := AthensAffineTransform new.
	submorphs := OrderedCollection new.
! !

!AthensMorph methodsFor: 'morph handling'!

addMorph: aMorph
	self submorphs add: aMorph.
	aMorph owner: self.
	aMorph redraw.
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
	canvas drawShape: shape.
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
	instanceVariableNames: 'backgroundPaint surface morphBelowHand'
	package: 'Athens-Core-Morphic'!

!AthensWorldMorph methodsFor: 'accessing'!

surface
	^ surface
!

surface: aSurface
	surface := aSurface.
	self outerShape: (0@0 corner: surface extent) asPolygon.
! !

!AthensWorldMorph methodsFor: 'drawing'!

drawOn: canvas
	surface clear: Color gray.
	
	(canvas setPaint: backgroundPaint) repeat.
	canvas drawShape: (0@0 corner: surface extent).
!

redraw
	surface drawDuring: [:canvas |
		self redrawEverythingOn: canvas].
! !

!AthensWorldMorph methodsFor: 'initialization'!

initialize
	super initialize.
	self initializeBackgroundPaint.
	morphBelowHand := self.
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
! !

!AthensWorldMorph methodsFor: 'testing'!

isWorldMorph
	^ true
! !

!AthensWorldMorph class methodsFor: 'instance creation'!

forSurface: aSurface
	^ self new
		surface: aSurface;
		yourself
! !

AthensWorldMorph subclass: #AthensDummyWorldMorph
	instanceVariableNames: ''
	package: 'Athens-Core-Morphic'!

!AthensDummyWorldMorph methodsFor: 'drawing'!

redraw
! !

!AthensDummyWorldMorph methodsFor: 'initialization'!

initialize
	globalPathTransform := AthensAffineTransform new.
! !

AthensDummyWorldMorph class instanceVariableNames: 'instance'!

!AthensDummyWorldMorph class methodsFor: ' singleton'!

instance
	instance ifNil: [instance := self new].
	^ instance
! !


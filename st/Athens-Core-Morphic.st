Smalltalk current createPackage: 'Athens-Core-Morphic'!
Object subclass: #AthensMorph
	instanceVariableNames: 'transformation outerShape owner submorphs color globalPathTransform globalOuterShape visible eventCallbacks'
	package: 'Athens-Core-Morphic'!

!AthensMorph methodsFor: 'accessing'!

color: aColor
	color := aColor.
	self redraw.
!

globalOuterShape
	^ globalOuterShape
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
	visible ifTrue: [
		canvas pathTransform loadAffineTransform: globalPathTransform.
		canvas pathTransform setIdentity.
		canvas pathTransform set.
		self drawOn: canvas.
		submorphs do: [:morph | morph redrawEverythingOn: canvas]].
! !

!AthensMorph methodsFor: 'events'!

handleMouseClick: evt
	(eventCallbacks at: #mouseClick ifAbsent: []) value.
!

handleMouseDown: evt
	(eventCallbacks at: #mouseDown ifAbsent: []) value.
!

handleMouseEnter
	(eventCallbacks at: #mouseEnter ifAbsent: []) value.
!

handleMouseLeave
	(eventCallbacks at: #mouseLeave ifAbsent: []) value.
!

handleMouseMove: evt
	(eventCallbacks at: #mouseMove ifAbsent: [[:ev | ]]) value: evt.
!

handleMouseUp: evt
	(eventCallbacks at: #mouseUp ifAbsent: []) value.
!

morphAtPosition: aPoint
	submorphs reverseDo: [:morph | |ret|
		morph isVisible ifTrue: [
			ret := morph morphAtPosition: aPoint.
			ret ifNotNil: [^ ret]]].
		
	((globalOuterShape includesPoint: aPoint) or: [self isWorldMorph])
		ifTrue: [^ self]
		ifFalse: [^ nil].
!

onMouseClick: aBlock
	eventCallbacks at: #mouseClick put: aBlock.
!

onMouseDown: aBlock
	eventCallbacks at: #mouseDown put: aBlock.
!

onMouseEnter: aBlock
	eventCallbacks at: #mouseEnter put: aBlock.
!

onMouseLeave: aBlock
	eventCallbacks at: #mouseLeave put: aBlock.
!

onMouseMove: aBlock
	eventCallbacks at: #mouseMove put: aBlock.
!

onMouseUp: aBlock
	eventCallbacks at: #mouseUp put: aBlock.
! !

!AthensMorph methodsFor: 'geometry'!

resetTransformation
	transformation loadIdentity.
	self redraw.
!

rotateBy: aNumber
	transformation rotateByRadians: aNumber.
	self redraw.
!

scaleByX: x Y: y
	transformation scaleX: x Y: y.
	self redraw.
!

translateBy: aPoint
	self translateByX: aPoint x Y: aPoint y.
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
	visible := true.
	eventCallbacks := Dictionary new.
! !

!AthensMorph methodsFor: 'morph handling'!

addMorph: aMorph
	self submorphs add: aMorph.
	aMorph owner: self.
	aMorph isVisible ifTrue: [aMorph redraw].
!

delete
	owner removeMorph: self.
	owner := nil.
!

hide
	visible := false.
	self redraw.
!

removeMorph: aMorph
	submorphs remove: aMorph.
	self redraw.
!

show
	visible := true.
	self redraw.
! !

!AthensMorph methodsFor: 'testing'!

isHaloMorph
	^ false
!

isVisible
	^ visible
!

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

AthensMorph subclass: #AthensHaloMorph
	instanceVariableNames: 'attachedTo font rectPath'
	package: 'Athens-Core-Morphic'!

!AthensHaloMorph methodsFor: 'accessing'!

attachedTo: aMorph
	attachedTo := aMorph.
! !

!AthensHaloMorph methodsFor: 'drawing'!

drawOn: canvas
	|shape|
	shape := 0@0 corner: 15@15.
	canvas setPaint: color.
	rectPath ifNil: [rectPath := self generatePathWith: canvas].
	canvas drawShape: rectPath.
	canvas setStrokePaint: Color black.
	canvas drawShape: rectPath.
	canvas setFont: font.
	canvas setPaint: Color white.
	canvas pathTransform translateX: 2 Y: 11.
	canvas drawString: self haloText.
	self outerShape: shape asPolygon.
!

generatePathWith: canvas
	^ canvas createPath: [:builder |
		builder
			absolute;
			moveTo: 5@0;
			lineTo: 10@0;
			curveVia: 15@0 to: 15@5;
			lineTo: 15@10;
			curveVia: 15@15 to: 10@15;
			lineTo: 5@15;
			curveVia: 0@15 to: 0@10;
			lineTo: 0@5;
			curveVia: 0@0 to: 5@0].
! !

!AthensHaloMorph methodsFor: 'events'!

handleMouseEnter
	self color: self highlightColor.
!

handleMouseLeave
	self color: self basicColor.
! !

!AthensHaloMorph methodsFor: 'initialization'!

initialize
	super initialize.
	visible := false.
	font := LogicalFont familyName: 'FontAwesome' pointSize: '12'.
	color := self basicColor.
! !

!AthensHaloMorph methodsFor: 'testing'!

isHaloMorph
	^ true
! !

AthensHaloMorph subclass: #AthensCloseHaloMorph
	instanceVariableNames: ''
	package: 'Athens-Core-Morphic'!

!AthensCloseHaloMorph methodsFor: 'events'!

handleMouseClick: evt
	attachedTo delete.
	self world hideHalos.
! !

!AthensCloseHaloMorph methodsFor: 'halo'!

basicColor
	^ Color r: 0.6 g: 0.13 b: 0.47
!

haloPosition
	^ -20 @ 0
!

haloText
	^ ''
!

highlightColor
	^ Color r: 0.2 g: 0 b: 0.14
! !

AthensHaloMorph subclass: #AthensInspectHaloMorph
	instanceVariableNames: ''
	package: 'Athens-Core-Morphic'!

!AthensInspectHaloMorph methodsFor: 'events'!

handleMouseClick: evt
	attachedTo inspect.
	self world hideHalos.
! !

!AthensInspectHaloMorph methodsFor: 'halo'!

basicColor
	^ Color r: 0 g: 0.9 b: 0.19
!

haloPosition
	^ -20 @ 20
!

haloText
	^ ''
!

highlightColor
	^ Color r: 0 g: 0.2 b: 0.04
! !

AthensHaloMorph subclass: #AthensMoveHaloMorph
	instanceVariableNames: 'globalMoveHandler globalUpHandler globalDownHandler lastPosition'
	package: 'Athens-Core-Morphic'!

!AthensMoveHaloMorph methodsFor: 'events'!

handleMouseDown: evt
	lastPosition := nil.
	self world registerGlobalMouseMoveCallback: globalMoveHandler.
	self world registerGlobalMouseUpCallback: globalUpHandler.
!

handleMouseUp: evt
	self world unregisterGlobalMouseMoveCallback: globalMoveHandler.
	self world unregisterGlobalMouseUpCallback: globalUpHandler.
!

processMouseMove: evt
	lastPosition ifNil: [lastPosition := evt offsetX @ evt offsetY].
	attachedTo translateBy: (evt offsetX @ evt offsetY) - lastPosition.
	lastPosition := evt offsetX @ evt offsetY.
!

processMouseUp: evt
	self handleMouseUp: evt.
! !

!AthensMoveHaloMorph methodsFor: 'halo'!

basicColor
	^ Color r: 0.6 g: 0.13 b: 0.47
!

haloPosition
	^ -20 @ 40
!

haloText
	^ ''
!

highlightColor
	^ Color r: 0 g: 0.2 b: 0.04
! !

!AthensMoveHaloMorph methodsFor: 'initialization'!

initialize
	super initialize.
	globalMoveHandler := [:evt | self processMouseMove: evt].
	globalUpHandler := [:evt | self processMouseUp: evt].
! !

AthensMorph subclass: #AthensWorldMorph
	instanceVariableNames: 'backgroundPaint surface morphBelowHand halos globalEventCallbacks'
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
		self redrawEverythingOn: canvas.
		self redrawHalosOn: canvas].
!

redrawHalosOn: canvas
	halos do: [:halo | halo redrawEverythingOn: canvas].
! !

!AthensWorldMorph methodsFor: 'events'!

handleGlobalMouseClick: evt
	(globalEventCallbacks at: #mouseClick ifAbsent: [{}])
		do: [:handler | handler value].
!

handleGlobalMouseDown: evt
	(globalEventCallbacks at: #mouseDown ifAbsent: [{}])
		do: [:handler | handler value: evt].
!

handleGlobalMouseMove: evt
	(globalEventCallbacks at: #mouseMove ifAbsent: [{}])
		do: [:handler | handler value: evt].
!

handleGlobalMouseUp: evt
	(globalEventCallbacks at: #mouseUp ifAbsent: [{}])
		do: [:handler | handler value].
!

morphAtPosition: aPoint
	halos reverseDo: [:morph | |ret|
		morph isVisible ifTrue: [
			ret := morph morphAtPosition: aPoint.
			ret ifNotNil: [^ ret]]].
	
	^ super morphAtPosition: aPoint
!

registerGlobalMouseClickCallback: aBlock
	|handlers|
	handlers := globalEventCallbacks at: #mouseClick ifAbsent: [globalEventCallbacks at: #mouseClick put: OrderedCollection new].
	handlers add: aBlock.
!

registerGlobalMouseMoveCallback: aBlock
	|handlers|
	handlers := globalEventCallbacks at: #mouseMove ifAbsent: [globalEventCallbacks at: #mouseMove put: OrderedCollection new].
	handlers add: aBlock.
!

registerGlobalMouseUpCallback: aBlock
	|handlers|
	handlers := globalEventCallbacks at: #mouseUp ifAbsent: [globalEventCallbacks at: #mouseUp put: OrderedCollection new].
	handlers add: aBlock.
!

unregisterGlobalMouseClickCallback: aBlock
	|handlers|
	handlers := globalEventCallbacks at: #mouseClick ifAbsent: [globalEventCallbacks at: #mouseClick put: OrderedCollection new].
	handlers remove: aBlock.
!

unregisterGlobalMouseMoveCallback: aBlock
	|handlers|
	handlers := globalEventCallbacks at: #mouseMove ifAbsent: [globalEventCallbacks at: #mouseMove put: OrderedCollection new].
	handlers remove: aBlock.
!

unregisterGlobalMouseUpCallback: aBlock
	|handlers|
	handlers := globalEventCallbacks at: #mouseUp ifAbsent: [globalEventCallbacks at: #mouseUp put: OrderedCollection new].
	handlers remove: aBlock.
! !

!AthensWorldMorph methodsFor: 'halos'!

addHalosTo: aMorph
	aMorph isHaloMorph ifFalse: [
		halos do: [:halo | 
			halo resetTransformation.
			halo translateBy: aMorph globalOuterShape boundingBox origin + halo haloPosition.
			halo attachedTo: aMorph.
			halo show]].
!

hideHalos
	self addHalosTo: self.
! !

!AthensWorldMorph methodsFor: 'initialization'!

initialize
	super initialize.
	self initializeBackgroundPaint.
	self initializeHalos.
	morphBelowHand := self.
	globalEventCallbacks := Dictionary new.
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

initializeHalos
	halos := OrderedCollection new.
	halos add: AthensCloseHaloMorph new.
	halos add: AthensInspectHaloMorph new.
	halos add: AthensMoveHaloMorph new.
	halos do: [:halo | self addMorph: halo].
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


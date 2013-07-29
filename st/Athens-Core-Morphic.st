Smalltalk current createPackage: 'Athens-Core-Morphic'!
Object subclass: #AthensMorph
	instanceVariableNames: 'transformation outerShape outerPolygon owner submorphs color globalPathTransform globalOuterPolygon visible eventCallbacks'
	package: 'Athens-Core-Morphic'!

!AthensMorph methodsFor: 'accessing'!

color: aColor
	color := aColor.
	self redraw.
!

globalBounds
	^ globalOuterPolygon boundingBox
!

globalPathTransform
	^ globalPathTransform
!

outerShape: aShape
	outerShape := aShape.
	outerPolygon := aShape asPolygon.
	globalOuterPolygon := outerPolygon deepCopy.
	globalOuterPolygon multiplyBy: globalPathTransform.
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
		canvas pathTransform restoreAfter: [
			canvas pathTransform multiplyBy: transformation.
			canvas pathTransform setIdentity.

			self drawOn: canvas.
			outerShape ifNil: [self outerShape: (0@0 corner: 50@50)].
			
			canvas clipBy: outerShape during: [
				submorphs do: [:morph | morph redrawEverythingOn: canvas]]]].
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
	(globalOuterPolygon includesPoint: aPoint)
		ifTrue: [submorphs reverseDo: [:morph |
			morph isVisible ifTrue: [
				(morph morphAtPosition: aPoint) ifNotNil: [:m | ^ m]]]]
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
	instanceVariableNames: 'text extent font backgroundColor'
	package: 'Athens-Core-Morphic'!

!AthensButtonMorph methodsFor: 'accessing'!

color: aColor
	super color: aColor.
	backgroundColor := aColor.
	self redraw.
! !

!AthensButtonMorph methodsFor: 'drawing'!

drawOn: canvas
	|textX textY shape|
	shape := 0@0 corner: extent.
	self outerShape: shape.
	canvas setStrokePaint: Color black.
	canvas drawShape: shape.
	canvas setPaint: backgroundColor.
	canvas drawShape: shape.
	canvas setFont: font.
	textX := (canvas measureStringWidth: text) / 2.
	textY := (extent y + (font pointSize*0.6)) / 2.
	canvas pathTransform translateX: textX Y: textY.
	canvas setPaint: Color black.
	canvas drawString: text.
! !

!AthensButtonMorph methodsFor: 'events'!

handleMouseEnter
	super handleMouseEnter.
	backgroundColor := Color gray.
	self redraw.
!

handleMouseLeave
	super handleMouseLeave.
	backgroundColor := color.
	self redraw.
! !

!AthensButtonMorph methodsFor: 'initialization'!

initialize
	super initialize.
	extent := 200@25.
	text := 'ButtonMorph'.
	font := LogicalFont familyName: 'Verdana' pointSize: 15.
	color := backgroundColor := Color white.
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
	self outerShape: shape.
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
	instanceVariableNames: 'globalMoveHandler globalUpHandler globalDownHandler'
	package: 'Athens-Core-Morphic'!

!AthensMoveHaloMorph methodsFor: 'events'!

handleMouseDown: evt
	self world registerGlobalEvent: #mouseMove withCallback: globalMoveHandler.
	self world registerGlobalEvent: #mouseUp withCallback: globalUpHandler.
!

handleMouseUp: evt
	self world unregisterGlobalEvent: #mouseMove withCallback: globalMoveHandler.
	self world unregisterGlobalEvent: #mouseUp withCallback: globalUpHandler.
!

processMouseMove: evt
	attachedTo translateBy: (attachedTo globalPathTransform inverseTransform: evt offsetX @ evt offsetY).
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

AthensMorph subclass: #AthensRectangleMorph
	instanceVariableNames: 'width height borderColor fillColor'
	package: 'Athens-Core-Morphic'!

!AthensRectangleMorph methodsFor: 'accessing'!

borderColor: aColor
	borderColor := aColor.
	self redraw.
!

fillColor: aColor
	fillColor := aColor.
	self redraw.
!

height: aNumber
	height := aNumber.
	self redraw.
!

width: aNumber
	width := aNumber.
	self redraw.
! !

!AthensRectangleMorph methodsFor: 'drawing'!

drawOn: canvas
	|shape|
	shape := 0@0 corner: width@height.
	canvas setPaint: fillColor.
	canvas drawShape: shape.
	canvas setStrokePaint: borderColor.
	canvas drawShape: shape.
	self outerShape: shape.
! !

!AthensRectangleMorph methodsFor: 'initialization'!

initialize
	super initialize.
	width := height := 50.
	borderColor := Color black.
	fillColor := Color white.
! !

!AthensRectangleMorph class methodsFor: 'instance creation'!

extent: aPoint
	^ self new
		width: aPoint x;
		height: aPoint y;
		yourself
! !

AthensRectangleMorph subclass: #AthensTextMorph
	instanceVariableNames: 'text font fontColor highlightFontColor highlighted'
	package: 'Athens-Core-Morphic'!

!AthensTextMorph methodsFor: 'accessing'!

font: aFont
	font := aFont.
	self redraw.
!

fontColor: aColor
	fontColor := highlightFontColor := aColor.
	self redraw.
!

highlightFontColor: aColor
	highlightFontColor := aColor.
!

text: aString
	text := aString.
	self redraw.
! !

!AthensTextMorph methodsFor: 'drawing'!

drawOn: canvas
	super drawOn: canvas.
	canvas setFont: font.
	highlighted 
		ifTrue: [canvas setPaint: highlightFontColor]
		ifFalse: [canvas setPaint: fontColor].
	canvas pathTransform translateX: 0 Y: 15.
	canvas drawString: text.
! !

!AthensTextMorph methodsFor: 'events'!

handleMouseEnter
	super handleMouseEnter.
	highlighted := true.
	self redraw.
!

handleMouseLeave
	super handleMouseLeave.
	highlighted := false.
	self redraw.
! !

!AthensTextMorph methodsFor: 'initialization'!

initialize
	super initialize.
	borderColor := fillColor := Color transparent.
	text := 'a TextMorph'.
	font := LogicalFont familyName: 'Verdana' pointSize: 15.
	fontColor := highlightFontColor := Color black.
	highlighted := false.
! !

AthensTextMorph subclass: #AthensIconMorph
	instanceVariableNames: ''
	package: 'Athens-Core-Morphic'!

!AthensIconMorph methodsFor: ' accessing'!

font: aFont
	self notAllowed.
!

size: aNumber
	font := LogicalFont familyName: 'FontAwesome' pointSize: aNumber asString.
	self redraw.
! !

!AthensIconMorph methodsFor: 'initialization'!

initialize
	super initialize.
	self size: 12.
! !

!AthensIconMorph class methodsFor: 'instance creation'!

remove
	^ self new
		text: '';
		yourself
! !

AthensMorph subclass: #AthensWindowMorph
	instanceVariableNames: 'width height title font titleBarMorph titleTextMorph windowMoveHandler windowUpHandler'
	package: 'Athens-Core-Morphic'!

!AthensWindowMorph methodsFor: 'accessing'!

height: aNumber
	height := aNumber.
	self redraw.
!

width: aNumber
	width := aNumber.
	self redraw.
! !

!AthensWindowMorph methodsFor: 'drawing'!

drawOn: canvas
	|shape|
	shape := 0@0 corner: width@height.
	canvas setPaint: Color white.
	canvas drawShape: shape.
	canvas setStrokePaint: Color black.
	canvas drawShape: shape.
	self outerShape: shape.
!

redraw
	titleBarMorph width: width - 10.
	super redraw.
! !

!AthensWindowMorph methodsFor: 'events'!

windowMouseMove: evt
	self translateBy: (globalPathTransform inverseTransform: evt offsetX @ evt offsetY).
!

windowMouseUp: evt
	self world unregisterGlobalEvent: #mouseMove withCallback: windowMoveHandler.
	self world unregisterGlobalEvent: #mouseUp withCallback: windowUpHandler.
!

windowUpHandler: evt
	self world unregisterGlobalEvent: #mouseMove withCallback: windowMoveHandler.
	self world unregisterGlobalEvent: #mouseUp withCallback: windowUpHandler.
! !

!AthensWindowMorph methodsFor: 'initialization'!

initialize
	super initialize.
	width := height := 200.
	self initializeTitleBar.
	self initializeEvents.
	font := LogicalFont familyName: 'Arial' pointSize: '14'.
!

initializeEvents
	|mouseDownHandler|
	windowMoveHandler := [:evt | self windowMouseMove: evt].
	windowUpHandler := [:evt | self windowMouseUp: evt].
	mouseDownHandler := [:evt | 	
		self world registerGlobalEvent: #mouseMove withCallback: windowMoveHandler.
		self world registerGlobalEvent: #mouseUp withCallback: windowUpHandler].
	titleBarMorph onMouseDown: mouseDownHandler.
	titleTextMorph onMouseDown: mouseDownHandler.
!

initializeTitleBar
	|closeButton|
	title := 'Window Title'.
	titleBarMorph := AthensRectangleMorph extent: width - 10 @ 25.
	titleBarMorph fillColor: Color black.
	titleBarMorph borderColor: Color transparent.
	titleBarMorph translateByX: 5 Y: 5.
	self addMorph: titleBarMorph.
	titleTextMorph := AthensTextMorph extent: width - 16 @ 19.
	titleTextMorph translateByX: 3 Y: 3.
	titleTextMorph fontColor: Color white.
	titleTextMorph text: title.
	titleBarMorph addMorph: titleTextMorph.
	closeButton := AthensIconMorph remove.
	closeButton fontColor: Color white.
	closeButton highlightFontColor: Color gray.
	closeButton translateByX: width - 25 Y: 2.
	closeButton onMouseClick: [self delete].
	titleBarMorph addMorph: closeButton.
! !

!AthensWindowMorph class methodsFor: 'instance creation'!

extent: aPoint
	^ self new
		width: aPoint x;
		height: aPoint y;
		yourself
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
	self outerShape: (0@0 corner: surface extent).
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

handleEvent: aSymbol with: evt
	(globalEventCallbacks at: aSymbol ifAbsent: [{}])
		do: [:handler | handler value: evt].
!

registerGlobalEvent: aSymbol withCallback: aBlock
	|handlers|
	handlers := globalEventCallbacks at: aSymbol ifAbsent: [globalEventCallbacks at: aSymbol put: OrderedCollection new].
	handlers add: aBlock.
!

unregisterGlobalEvent: aSymbol withCallback: aBlock
	|handlers|
	handlers := globalEventCallbacks at: aSymbol ifAbsent: [globalEventCallbacks at: aSymbol put: OrderedCollection new].
	handlers remove: aBlock.
! !

!AthensWorldMorph methodsFor: 'halos'!

addHalosTo: aMorph
	aMorph isHaloMorph ifFalse: [
		halos do: [:halo | 
			halo resetTransformation.
			halo translateBy: aMorph globalBounds origin + halo haloPosition.
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
	self initializeCallbacks.
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

initializeCallbacks
	globalEventCallbacks := Dictionary new.
	self registerGlobalEvent: #mouseMove withCallback: [:evt | self updateMorphBelowHandAt: evt offsetX @ evt offsetY].
	self registerGlobalEvent: #mouseMove withCallback: [:evt | morphBelowHand handleMouseMove: evt].
	self registerGlobalEvent: #mouseDown withCallback: [:evt | morphBelowHand handleMouseDown: evt].
	self registerGlobalEvent: #mouseUp withCallback: [:evt | morphBelowHand handleMouseUp: evt].
	self registerGlobalEvent: #mouseClick withCallback: [:evt | morphBelowHand handleMouseClick: evt].
	self registerGlobalEvent: #mouseClick withCallback: [:evt | self addHalosTo: morphBelowHand].
!

initializeHalos
	halos := OrderedCollection new.
	halos add: AthensCloseHaloMorph new.
	halos add: AthensInspectHaloMorph new.
	halos add: AthensMoveHaloMorph new.
	halos do: [:halo | self addMorph: halo].
! !

!AthensWorldMorph methodsFor: 'morph handling'!

morphAtPosition: aPoint
	halos reverseDo: [:morph | |ret|
		morph isVisible ifTrue: [
			ret := morph morphAtPosition: aPoint.
			ret ifNotNil: [^ ret]]].
	
	(super morphAtPosition: aPoint) ifNotNil: [:m | ^ m].
	^ self
!

updateMorphBelowHandAt: aPoint
	|oldMorph|
	oldMorph := morphBelowHand.
	morphBelowHand := self morphAtPosition: aPoint.
	morphBelowHand ~~ oldMorph ifTrue: [
		oldMorph ifNotNil: [oldMorph handleMouseLeave].
		morphBelowHand handleMouseEnter].
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


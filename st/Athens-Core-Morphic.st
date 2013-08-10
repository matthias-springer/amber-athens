Smalltalk current createPackage: 'Athens-Core-Morphic'!
Object subclass: #AthensMorph
	instanceVariableNames: 'transformation outerShape outerPolygon owner submorphs color globalPathTransform globalOuterPolygon visible eventCallbacks hasMouseFocus isMouseDown zIndex'
	package: 'Athens-Core-Morphic'!

!AthensMorph methodsFor: 'accessing'!

color: aColor
	color := aColor.
	self redraw.
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

zIndex
	^ zIndex
!

zIndex: aNumber
	zIndex := aNumber.
	owner submorphsZIndicesChanged.
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

			canvas pathTransform restoreAfter: [
				self drawOn: canvas].
				
			outerShape ifNil: [self outerShape: (0@0 corner: 50@50)].
			
			canvas clipBy: outerShape during: [
				submorphs do: [:morph | morph redrawEverythingOn: canvas]]]].
! !

!AthensMorph methodsFor: 'events'!

handleChange: evt
	(eventCallbacks at: #change ifAbsent: [[:ev |]]) value: evt.
!

handleMouseClick: evt
	(eventCallbacks at: #mouseClick ifAbsent: [[:ev | ]]) value: evt.
!

handleMouseDown: evt
	isMouseDown := true.
	(eventCallbacks at: #mouseDown ifAbsent: [[:ev |]]) value: evt.
!

handleMouseEnter
	hasMouseFocus := true.
	(eventCallbacks at: #mouseEnter ifAbsent: []) value.
!

handleMouseLeave
	hasMouseFocus := false.
	isMouseDown := false.
	(eventCallbacks at: #mouseLeave ifAbsent: []) value.
!

handleMouseMove: evt
	(eventCallbacks at: #mouseMove ifAbsent: [[:ev | ]]) value: evt.
!

handleMouseUp: evt
	isMouseDown := false.
	(eventCallbacks at: #mouseUp ifAbsent: [[:ev |]]) value: evt.
!

handleMouseWheel: evt
	(eventCallbacks at: #mouseWheel ifAbsent: [[:ev | ]]) value: evt.
!

morphsAtPosition: aPoint
	(globalOuterPolygon includesPoint: aPoint)
		ifTrue: [submorphs reverseDo: [:morph |
			morph isVisible ifTrue: [
				(morph morphsAtPosition: aPoint) ifNotNil: [:m | 
					^ m
						add: self;
						yourself]]]]
		ifFalse: [^ nil].
	^ {self}
!

onChange: aBlock
	eventCallbacks at: #change put: aBlock.
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
!

onMouseWheel: aBlock
	eventCallbacks at: #mouseWheel put: aBlock.
!

signalChange: evt
	self handleChange: evt.
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

rotateByDegrees: aNumber
	transformation rotateByDegrees: aNumber.
	self redraw.
!

rotateByRadians: aNumber
	transformation rotateByRadians: aNumber.
	self redraw.
!

scaleBy: aPoint
	self scaleByX: aPoint x Y: aPoint y.
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
	hasMouseFocus := isMouseDown := false.
	zIndex := 0.
	self outerShape: (0@0 corner: 200@200).
! !

!AthensMorph methodsFor: 'internals'!

bounds
	^ outerPolygon boundingBox
!

globalBounds
	^ globalOuterPolygon boundingBox
!

globalPathTransform
	^ globalPathTransform
!

maxZIndex
	|index|
	index := 0.
	submorphs do: [:morph | index := index max: morph zIndex].
	^ index
!

outerShape: aShape
	outerShape := aShape.
	outerPolygon := aShape asPolygon.
	globalOuterPolygon := outerPolygon deepCopy.
	globalOuterPolygon multiplyBy: globalPathTransform.
!

transformation
	^ transformation
!

transformedBounds
	^  (outerPolygon deepCopy
		multiplyBy: transformation) boundingBox
!

world
	|m|
	m := self.
	[m isWorldMorph] whileFalse: [m := m owner].
	^ m
! !

!AthensMorph methodsFor: 'morph handling'!

addMorph: aMorph
	self submorphs add: aMorph.
	aMorph owner: self.
	aMorph isVisible ifTrue: [aMorph redraw].
!

bringToFront
	self zIndex: owner maxZIndex + 1.
!

delete
	owner removeMorph: self.
	owner := AthensDummyWorldMorph instance.
!

hide
	visible := false.
	self redraw.
!

layoutChanged
	"Morph does not respond to layout changes."
!

removeMorph: aMorph
	submorphs remove: aMorph.
	self redraw.
!

show
	visible := true.
	self redraw.
!

submorphsZIndicesChanged
	submorphs sort: [:m1 :m2 | m1 zIndex < m2 zIndex].
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

AthensMorph subclass: #AthensBinaryStatusButtonMorph
	instanceVariableNames: 'textMorph isChecked'
	package: 'Athens-Core-Morphic'!

!AthensBinaryStatusButtonMorph methodsFor: 'accessing'!

checked: aBoolean
	|changed|
	changed := isChecked == aBoolean not.
	isChecked := aBoolean.
	changed ifTrue: [self signalChange: isChecked].
	self redraw.
!

isChecked
	^ isChecked
!

text: aString
	textMorph text: aString.
	self layoutChanged.
! !

!AthensBinaryStatusButtonMorph methodsFor: 'drawing'!

drawOn: canvas
	self drawStatusOn: canvas.
	self outerShape: (0@0 corner: 15 + textMorph width @15).
! !

!AthensBinaryStatusButtonMorph methodsFor: 'events'!

handleMouseDown: evt
	super handleMouseDown: evt.
	self redraw.
!

handleMouseEnter
	super handleMouseEnter.
	self redraw.
!

handleMouseLeave
	super handleMouseLeave.
	self redraw.
!

handleMouseUp: evt
	super handleMouseUp: evt.
	self redraw.
! !

!AthensBinaryStatusButtonMorph methodsFor: 'initialization'!

initialize
	super initialize.
	self initializeText.
	isChecked := false.
!

initializeText
	textMorph := AthensTextMorph new.
	textMorph translateByX: 15 Y: -4.
	textMorph text: 'BinaryStatusButtonMorph'.
	self addMorph: textMorph.
! !

AthensBinaryStatusButtonMorph subclass: #AthensCheckBoxMorph
	instanceVariableNames: ''
	package: 'Athens-Core-Morphic'!

!AthensCheckBoxMorph methodsFor: 'drawing'!

drawStatusOn: canvas
	canvas pathTransform translateBy: 0@1.
	canvas setShape: (0@0 corner: 10@10).
	canvas setPaint: Color cosmoGray.
	isMouseDown ifTrue: [canvas setPaint: Color cosmoDarkGray].
	canvas draw.

	canvas pathTransform translateBy: 0.25@0.25. 
	canvas setShape: (1@1 corner: 9@9).
	hasMouseFocus
		ifTrue: [canvas setPaint: Color cosmoLightGray]
		ifFalse: [canvas setPaint: Color white].
	canvas draw.

	isChecked ifTrue: [
		canvas pathTransform translateBy: 0@0.
		canvas setShape: (2@2 corner: 8@8).
		canvas setPaint: Color black.
		canvas draw].
! !

!AthensCheckBoxMorph methodsFor: 'events'!

handleMouseClick: evt
	self checked: isChecked not.
	super handleMouseClick: evt.
! !

AthensBinaryStatusButtonMorph subclass: #AthensRadioButtonMorph
	instanceVariableNames: ''
	package: 'Athens-Core-Morphic'!

!AthensRadioButtonMorph methodsFor: 'drawing'!

drawStatusOn: canvas
	|circle|
	canvas pathTransform translateBy: 0@3.
	circle := canvas createPath: [:builder | 
		builder 
			absolute;
			moveTo: 0@5;
			cwArcTo: 10@5 angle: 180;
			cwArcTo: 0@5 angle: 90 ] .
	canvas setShape: circle.
	canvas setPaint: Color cosmoGray.
	isMouseDown ifTrue: [canvas setPaint: Color cosmoDarkGray].
	canvas draw.

	canvas pathTransform translateBy: 0@0.5.
	circle := canvas createPath: [:builder | 
		builder 
			absolute;
			moveTo: 1@4;
			cwArcTo: 9@4 angle: 180;
			cwArcTo: 1@4 angle: 90].
	canvas setShape: circle.
	hasMouseFocus
		ifTrue: [canvas setPaint: Color cosmoLightGray]
		ifFalse: [canvas setPaint: Color white].
	canvas draw.

	isChecked ifTrue: [
		canvas pathTransform translateBy: 0@0.5.
		circle := canvas createPath: [:builder | 
			builder 
				absolute;
				moveTo: 2@3;
				cwArcTo: 8@3 angle: 180;
				cwArcTo: 2@3 angle: 90 ] .
		canvas setShape: circle.
		canvas setPaint: Color black.
		canvas draw].
! !

!AthensRadioButtonMorph methodsFor: 'events'!

handleMouseClick: evt
	self checked: true.
	super handleMouseClick: evt.
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
	instanceVariableNames: 'width height borderColor fillColor mouseDownFillColor mouseFocusFillColor hasSharpBorder'
	package: 'Athens-Core-Morphic'!

!AthensRectangleMorph methodsFor: 'accessing'!

borderColor: aColor
	borderColor := aColor.
	self redraw.
!

fillColor: aColor
	fillColor := mouseDownFillColor := mouseFocusFillColor := aColor.
	self redraw.
!

height
	^ height
!

height: aNumber
	height := aNumber.
	self outerShape: (0@0 corner: self width@height).
	self layoutChanged.
	self redraw.
!

mouseDownFillColor: aColor
	mouseDownFillColor := aColor.
!

mouseFocusFillColor: aColor
	mouseFocusFillColor := aColor.
!

width
	^ width
!

width: aNumber
	width := aNumber.
	self outerShape: (0@0 corner: self width@height).
	self layoutChanged.
	self redraw.
! !

!AthensRectangleMorph methodsFor: 'drawing'!

drawOn: canvas
	|shape currentFillColor|
	"Use method width instead of instance variable to ensure that width is calculated."
	shape := 0@0 corner: self width@height.
	hasMouseFocus 
		ifTrue: [currentFillColor := mouseFocusFillColor]
		ifFalse: [currentFillColor := fillColor].
	isMouseDown ifTrue: [currentFillColor := mouseDownFillColor].
	
	hasSharpBorder
		ifTrue: [
			canvas setPaint: borderColor.
			canvas drawShape: shape.
			canvas setPaint: currentFillColor.
			canvas drawShape: (1@1 corner: width - 1 @ (height - 1))]
		ifFalse: [
			canvas setPaint: currentFillColor.
			canvas drawShape: shape.
			canvas setStrokePaint: borderColor.
			canvas drawShape: shape].
			
	self outerShape: shape.
! !

!AthensRectangleMorph methodsFor: 'events'!

handleMouseDown: evt
	super handleMouseDown: evt.
	self redraw.
!

handleMouseEnter
	super handleMouseEnter.
	self redraw.
!

handleMouseLeave
	super handleMouseLeave.
	self redraw.
!

handleMouseUp: evt
	super handleMouseUp: evt.
	self redraw.
! !

!AthensRectangleMorph methodsFor: 'initialization'!

initialize
	super initialize.
	width := height := 50.
	borderColor := Color black.
	fillColor := mouseDownFillColor := mouseFocusFillColor := Color white.
	hasSharpBorder := false.
! !

!AthensRectangleMorph class methodsFor: 'instance creation'!

extent: aPoint
	^ self new
		width: aPoint x;
		height: aPoint y;
		yourself
! !

AthensRectangleMorph subclass: #AthensButtonMorph
	instanceVariableNames: 'textMorph'
	package: 'Athens-Core-Morphic'!

!AthensButtonMorph methodsFor: 'accessing'!

text: aString
	textMorph text: aString.
	self layoutChanged.
! !

!AthensButtonMorph methodsFor: 'initialization'!

initialize
	super initialize.
	self initializeTextMorph.
	self initializeColors.
	hasSharpBorder := true.
	self layoutChanged.
!

initializeColors
	fillColor := Color cosmoBlue.
	mouseFocusFillColor := Color cosmoMiddleBlue.
	borderColor := mouseDownFillColor := Color cosmoDarkBlue.
	textMorph fontColor: Color white.
!

initializeTextMorph
	textMorph := AthensTextMorph new.
	textMorph text: 'ButtonMorph'.
	self addMorph: textMorph.
! !

!AthensButtonMorph methodsFor: 'morph handling'!

layoutChanged
	super layoutChanged.
	textMorph
		resetTransformation;
		translateByX: width - textMorph width / 2 Y: height - textMorph height / 2.
! !

AthensButtonMorph subclass: #AthensIconButtonMorph
	instanceVariableNames: 'iconMorph'
	package: 'Athens-Core-Morphic'!

!AthensIconButtonMorph methodsFor: 'accessing'!

icon: anIconMorph
	iconMorph ifNotNil: [iconMorph delete].
	iconMorph := anIconMorph.
	iconMorph fontColor: textMorph fontColor.
	self addMorph: iconMorph.
	self layoutChanged.
! !

!AthensIconButtonMorph methodsFor: 'morph handling'!

layoutChanged
	super layoutChanged.
	
	iconMorph ifNotNil: [
		textMorph translateByX: iconMorph width / 2 + 3.5 Y: 0.
		iconMorph
			resetTransformation;
			translateByX: width - textMorph width - iconMorph width / 2 - 0.5 Y: height - textMorph height / 2 - 1].
! !

AthensRectangleMorph subclass: #AthensListItemMorph
	instanceVariableNames: 'textMorph item'
	package: 'Athens-Core-Morphic'!

!AthensListItemMorph methodsFor: 'accessing'!

item
	^ item
!

item: anItem
	item := anItem.
	textMorph text: anItem asString.
! !

!AthensListItemMorph methodsFor: 'initialization'!

initialize
	super initialize.
	hasSharpBorder := true.
	self initializeTextMorph.
	self height: 20.
	self unselect.
!

initializeTextMorph
	textMorph := AthensTextMorph new
		translateByX: 5 Y: 0;
		yourself.
	self addMorph: textMorph.
! !

!AthensListItemMorph methodsFor: 'item handling'!

select
	mouseFocusFillColor := Color cosmoMiddleBlue.
	mouseDownFillColor := Color cosmoDarkBlue.
	fillColor := Color cosmoDarkBlue.
	borderColor := Color cosmoDarkGray.
	textMorph fontColor: Color white.
	self redraw.
!

unselect
	mouseFocusFillColor := Color cosmoLightGray.
	mouseDownFillColor := Color cosmoGray.
	fillColor := Color white.
	borderColor := Color cosmoDarkGray.
	textMorph fontColor: Color black.
	self redraw.
! !

!AthensListItemMorph class methodsFor: 'instance creation'!

for: anObject
	^ self new
		item: anObject;
		yourself
! !

AthensRectangleMorph subclass: #AthensScrollAreaMorph
	instanceVariableNames: 'xScrollBar yScrollBar hasXScrollBar hasYScrollBar innerContainer outerContainer needsContentExtentUpdate'
	package: 'Athens-Core-Morphic'!

!AthensScrollAreaMorph methodsFor: 'accessing'!

hasXScrollBar
	^ hasXScrollBar
!

hasXScrollBar: aBoolean
	hasXScrollBar := aBoolean.
	self
		layoutChanged;
		updateVisibleArea.
!

hasYScrollBar
	^ hasYScrollBar
!

hasYScrollBar: aBoolean
	hasYScrollBar := aBoolean.
	self
		layoutChanged;
		updateVisibleArea.
!

valueX
	^ xScrollBar value
!

valueX: aNumber
	xScrollBar value: aNumber.
!

valueY
	^ yScrollBar value
!

valueY: aNumber
	yScrollBar value: aNumber.
! !

!AthensScrollAreaMorph methodsFor: 'drawing'!

redrawEverythingOn: canvas
	super redrawEverythingOn: canvas.
	needsContentExtentUpdate ifTrue: [self updateContentExtent].
! !

!AthensScrollAreaMorph methodsFor: 'events'!

handleChangeX: evt
	self updateVisibleArea.
!

handleChangeY: evt
	self updateVisibleArea.
!

handleMouseWheel: evt
	xScrollBar value: xScrollBar buttonStepSize * evt x + xScrollBar value.
	yScrollBar value: yScrollBar buttonStepSize * evt y + yScrollBar value.
	super handleMouseWheel: evt.
!

updateVisibleArea
	innerContainer
		resetTransformation;
		translateByX: xScrollBar value * (outerContainer width - innerContainer width)
			Y: yScrollBar value * (outerContainer height - innerContainer height).
! !

!AthensScrollAreaMorph methodsFor: 'initialization'!

initialize
	super initialize.
	hasXScrollBar := hasYScrollBar := true.
	self initializeContainer.
	self initializeScrollBars.
	self layoutChanged.
	self updateContentExtent.
!

initializeContainer
	outerContainer := AthensRectangleMorph new
		borderColor: Color transparent;
		fillColor: Color transparent;
		mouseDownFillColor: Color transparent;
		mouseFocusFillColor: Color transparent;
		translateByX: 1 Y: 1.		"ensure that upper and left border is always visible"
	super addMorph: outerContainer.
	innerContainer := AthensRectangleMorph new
		borderColor: Color transparent;
		fillColor: Color transparent;
		mouseDownFillColor: Color transparent;
		mouseFocusFillColor: Color transparent.
	outerContainer addMorph: innerContainer.
!

initializeScrollBars
	yScrollBar := AthensScrollBarMorph new.
	xScrollBar := AthensScrollBarMorph new.
	yScrollBar onChange: [:evt | self handleChangeY: evt].
	xScrollBar onChange: [:evt | self handleChangeX: evt].
	super addMorph: yScrollBar.
	super addMorph: xScrollBar.
! !

!AthensScrollAreaMorph methodsFor: 'morph handling'!

addMorph: aMorph
	innerContainer addMorph: aMorph.
	self updateContentExtent.
	needsContentExtentUpdate := true.
!

layoutChanged
	|barWidth barHeight|
	hasXScrollBar 
		ifTrue: [
			barHeight := 10.
			xScrollBar show]
		ifFalse: [
			barHeight := 0.
			xScrollBar hide].
	hasYScrollBar 
		ifTrue: [
			barWidth := 10.
			yScrollBar show]
		ifFalse: [
			barWidth := 0.
			yScrollBar hide].

	yScrollBar
		resetTransformation;
		height: height - barHeight;
		width: 10;
		translateByX:  width - 10 Y: 0.
	xScrollBar
		resetTransformation;
		height: width - barWidth;
		width: 10;
		translateByX: 0 Y: height;
		rotateByDegrees: -90.
	outerContainer
		height: height - barWidth;
		width: width - barWidth.
!

updateContentExtent
	|maxX maxY|
	maxX := maxY := 1.
	innerContainer submorphs do: [:morph | |bounds|
		bounds := morph transformedBounds.
		maxX := maxX max: bounds width + bounds origin x.
		maxY := maxY max: bounds height + bounds origin y].
	innerContainer width: maxX.
	innerContainer height: maxY.
	xScrollBar sliderRange: outerContainer width / maxX.
	yScrollBar sliderRange: outerContainer height / maxY.
	needsContentExtentUpdate := false.
! !

AthensScrollAreaMorph subclass: #AthensListBoxMorph
	instanceVariableNames: 'nextPositionY selectedItem'
	package: 'Athens-Core-Morphic'!

!AthensListBoxMorph methodsFor: 'accessing'!

width: aNumber
	super width: aNumber.
	innerContainer submorphs do: [:morph | morph width: outerContainer width + 1].
! !

!AthensListBoxMorph methodsFor: 'initialization'!

initialize
	super initialize.
	nextPositionY := -1.		"avoid double border"
	hasSharpBorder := true.
! !

!AthensListBoxMorph methodsFor: 'item handling'!

addItem: anObject
	|itemMorph|
	itemMorph := AthensListItemMorph for: anObject.
	itemMorph 
		translateByX: -1 Y: nextPositionY;	"avoid double border"
		width: outerContainer width + 1;
		onMouseClick: [self selectedItem: itemMorph].
	self addMorph: itemMorph.
	nextPositionY := nextPositionY + itemMorph height - 1.
!

selectedItem
	^ selectedItem
!

selectedItem: anItem
	selectedItem ifNotNil: [selectedItem unselect].
	selectedItem := anItem.
	selectedItem select.
	self signalChange: selectedItem item.
! !

AthensRectangleMorph subclass: #AthensScrollBarMorph
	instanceVariableNames: 'decreaseButton increaseButton sliderButton value sliderRange sliderMoveHandler sliderUpHandler buttonStepSize'
	package: 'Athens-Core-Morphic'!

!AthensScrollBarMorph methodsFor: 'accessing'!

buttonStepSize
	^ buttonStepSize
!

buttonStepSize: aNumber
	buttonStepSize := aNumber.
!

sliderRange
	^ sliderRange
!

sliderRange: aNumber
	|newRange|
	newRange := (aNumber min: 1) max: 0.
	sliderRange := newRange.
	self layoutSliderButton.
!

value
	^ value
!

value: aNumber
	|changed newNumber|
	newNumber := (aNumber min: 1) max: 0.
	changed := value ~~ newNumber.
	value := newNumber.
	self layoutSliderButton.
	changed ifTrue: [self signalChange: newNumber].
! !

!AthensScrollBarMorph methodsFor: 'events'!

handleDecrease
	self value: value - buttonStepSize.
!

handleIncrease
	self value: value + buttonStepSize.
!

sliderMouseMove: evt
	self value: (globalPathTransform inverseTransform: evt position) y - 10 / (height - 20).
!

sliderMouseUp: evt
	self world unregisterGlobalEvent: #mouseMove withCallback: sliderMoveHandler.
	self world unregisterGlobalEvent: #mouseUp withCallback: sliderUpHandler.
! !

!AthensScrollBarMorph methodsFor: 'initialization'!

initialize
	super initialize.
	borderColor := Color cosmoDarkGray.
	fillColor := Color white.
	mouseDownFillColor := Color cosmoLightGray.
	mouseFocusFillColor := Color cosmoLightGray.
	hasSharpBorder := true.
	value := 0.
	sliderRange := 0.2.
	buttonStepSize := 0.1.
	self initializeButtons.
	self initializeEvents.
	self layoutChanged.
!

initializeButtons
	decreaseButton := AthensIconButtonMorph new
		icon: AthensIconMorph arrowUp;
		text: '';
		onMouseClick: [self handleDecrease];
		yourself.
	increaseButton := AthensIconButtonMorph new
		icon: AthensIconMorph arrowDown;
		text: '';
		onMouseClick: [self handleIncrease];
		yourself.
	sliderButton := AthensIconButtonMorph new
		icon: (AthensIconMorph reorder size: 9);
		text: '';
		yourself.
	self addMorph: decreaseButton.
	self addMorph: increaseButton.
	self addMorph: sliderButton.
!

initializeEvents
	|sliderDownHandler|
	sliderMoveHandler := [:evt | self sliderMouseMove: evt].
	sliderUpHandler := [:evt | self sliderMouseUp: evt].
	sliderDownHandler := [:evt | 
		self world registerGlobalEvent: #mouseMove withCallback: sliderMoveHandler.
		self world registerGlobalEvent: #mouseUp withCallback: sliderUpHandler].
	sliderButton onMouseDown: sliderDownHandler.
! !

!AthensScrollBarMorph methodsFor: 'morph handling'!

layoutChanged
	decreaseButton
		width: width;
		height: 10;
		borderColor: Color cosmoDarkPurple;
		fillColor: Color cosmoPurple;
		mouseFocusFillColor: Color cosmoMiddlePurple;
		mouseDownFillColor: Color cosmoDarkPurple;
		resetTransformation.
	increaseButton
		width: width;
		height: 10;
		borderColor: Color cosmoDarkPurple;
		fillColor: Color cosmoPurple;
		mouseFocusFillColor: Color cosmoMiddlePurple;
		mouseDownFillColor: Color cosmoDarkPurple;
		resetTransformation;
		translateByX: 0 Y: height - 10.
	sliderButton
		width: width;
		borderColor: Color cosmoDarkPurple;
		fillColor: Color cosmoLightPurple;
		mouseFocusFillColor: Color cosmoMiddlePurple;
		mouseDownFillColor: Color cosmoDarkPurple.
	self layoutSliderButton.
!

layoutSliderButton
	sliderButton
		height: (sliderRange * (height - 20) max: 7);
		resetTransformation;
		translateByX: 0 Y: (1 - sliderRange) * value * (height - 20) + 10.
! !

AthensRectangleMorph subclass: #AthensTextMorph
	instanceVariableNames: 'text font fontColor highlightFontColor'
	package: 'Athens-Core-Morphic'!

!AthensTextMorph methodsFor: 'accessing'!

font: aFont
	font := aFont.
	height := font pointSize * 1.25.
	self redraw.
!

fontColor
	^ fontColor
!

fontColor: aColor
	fontColor := highlightFontColor := aColor.
	self redraw.
!

highlightFontColor: aColor
	highlightFontColor := aColor.
!

text
	^ text
!

text: aString
	text := aString.
	width := nil.
	self redraw.
!

width
	width ifNil: [width := self calculateWidth].
	^ width
! !

!AthensTextMorph methodsFor: 'drawing'!

calculateWidth
	|surface|
	surface := AthensHTMLSurface extent: 0@0.
	surface drawDuring: [:canvas |
		canvas setFont: font.
		^ canvas measureStringWidth: text].
!

drawOn: canvas
	super drawOn: canvas.
	canvas setFont: font.
	hasMouseFocus 
		ifTrue: [canvas setPaint: highlightFontColor]
		ifFalse: [canvas setPaint: fontColor].
	canvas pathTransform translateX: 0 Y: 15.
	canvas drawString: text.
	
	width := canvas measureStringWidth: text.
	
	self outerShape: (0@0 corner: width@height).
! !

!AthensTextMorph methodsFor: 'events'!

handleMouseEnter
	super handleMouseEnter.
	self redraw.
!

handleMouseLeave
	super handleMouseLeave.
	self redraw.
! !

!AthensTextMorph methodsFor: 'initialization'!

initialize
	super initialize.
	borderColor := fillColor := mouseDownFillColor := mouseFocusFillColor := Color transparent.
	text := 'a TextMorph'.
	font := LogicalFont familyName: 'Arial' pointSize: 15.
	height := font pointSize * 1.25.
	fontColor := highlightFontColor := Color black.
! !

AthensTextMorph subclass: #AthensIconMorph
	instanceVariableNames: ''
	package: 'Athens-Core-Morphic'!

!AthensIconMorph methodsFor: ' accessing'!

font: aFont
	self notAllowed.
!

size: aNumber
	font := LogicalFont familyName: 'FontAwesome' pointSize: aNumber.
	self redraw.
! !

!AthensIconMorph methodsFor: 'initialization'!

initialize
	super initialize.
	self size: 12.
! !

!AthensIconMorph class methodsFor: 'instance creation'!

arrowDown
	^ self new
		text: '';
		yourself
!

arrowUp
	^ self new
		text: '';
		yourself
!

remove
	^ self new
		text: '';
		yourself
!

reorder
	^ self new
		text: '';
		yourself
!

resizeFull
	^ self new
		text: '';
		yourself
!

resizeSmall
	^ self new
		text: '';
		yourself
!

rotateCcw
	^ self new
		text: '';
		yourself
!

rotateCw
	^ self new
		text: '';
		yourself
! !

AthensIconMorph subclass: #AthensResizeMorph
	instanceVariableNames: 'globalMoveHandler globalUpHandler'
	package: 'Athens-Core-Morphic'!

!AthensResizeMorph methodsFor: 'events'!

handleMouseDown: evt
	self world registerGlobalEvent: #mouseMove withCallback: globalMoveHandler.
	self world registerGlobalEvent: #mouseUp withCallback: globalUpHandler.
!

handleMouseUp: evt
	self world unregisterGlobalEvent: #mouseMove withCallback: globalMoveHandler.
	self world unregisterGlobalEvent: #mouseUp withCallback: globalUpHandler.
!

processMouseMove: evt
	|newPos|
	newPos := owner globalPathTransform inverseTransform: evt globalPosition.
	owner width: newPos x.
	owner height: newPos y.
!

processMouseUp: evt
	self handleMouseUp: evt.
! !

!AthensResizeMorph methodsFor: 'initialization'!

drawOn: canvas
	canvas pathTransform translateBy: 16@0.
	canvas pathTransform rotateByDegrees: 90.
	super drawOn: canvas.
!

initialize
	super initialize.
	text := ''.
	fontColor := Color cosmoDarkGray.
	highlightFontColor := Color black.
	globalMoveHandler := [:evt | self processMouseMove: evt].
	globalUpHandler := [:evt | self processMouseUp: evt].
! !

AthensRectangleMorph subclass: #AthensWindowMorph
	instanceVariableNames: 'title titleBarMorph titleTextMorph resizeMorph windowMoveHandler windowMoveOffset windowUpHandler closeButton'
	package: 'Athens-Core-Morphic'!

!AthensWindowMorph methodsFor: 'accessing'!

title
	^ title
!

title: aString
	title := aString.
	titleTextMorph text: aString.
	self redraw.
! !

!AthensWindowMorph methodsFor: 'events'!

handleMouseClick: evt
	self bringToFront.
	super handleMouseClick: evt.
!

handleMouseDown: evt
	windowMoveOffset := evt position.
	self bringToFront.
	super handleMouseDown: evt.
!

windowMouseMove: evt
	self translateBy: (globalPathTransform inverseTransform: evt offsetX @ evt offsetY) - windowMoveOffset.
!

windowMouseUp: evt
	self world unregisterGlobalEvent: #mouseMove withCallback: windowMoveHandler.
	self world unregisterGlobalEvent: #mouseUp withCallback: windowUpHandler.
! !

!AthensWindowMorph methodsFor: 'initialization'!

initialize
	super initialize.
	width := height := 200.
	hasSharpBorder := true.
	self initializeTitleBar.
	self initializeEvents.
	self initializeResizeIcon.
!

initializeEvents
	|mouseDownHandler|
	windowMoveHandler := [:evt | self windowMouseMove: evt].
	windowUpHandler := [:evt | self windowMouseUp: evt].
	mouseDownHandler := [:evt | 
		self world registerGlobalEvent: #mouseMove withCallback: windowMoveHandler.
		self world registerGlobalEvent: #mouseUp withCallback: windowUpHandler].
	titleBarMorph onMouseDown: mouseDownHandler.
!

initializeResizeIcon
	resizeMorph := AthensResizeMorph new.
	resizeMorph translateByX: width - 15 Y: height - 15.
	self addMorph: resizeMorph.
!

initializeTitleBar
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

!AthensWindowMorph methodsFor: 'morph handling'!

layoutChanged
	submorphs do: [:morph | morph layoutChanged].
	titleBarMorph width: width - 10.
	closeButton resetTransformation.
	closeButton translateByX: width - 25 Y: 2.
	resizeMorph resetTransformation.
	resizeMorph translateByX: width - 15 Y: height - 15.
! !

!AthensWindowMorph class methodsFor: 'instance creation'!

extent: aPoint
	^ self new
		width: aPoint x;
		height: aPoint y;
		yourself
! !

AthensMorph subclass: #AthensWorldMorph
	instanceVariableNames: 'backgroundPaint surface morphsUnderHand halos globalEventCallbacks handPosition worldState'
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

privateRedraw
	surface drawDuring: [:canvas |
		self redrawEverythingOn: canvas.
		self redrawHalosOn: canvas].
!

redraw
	worldState damageWorld.
!

redrawHalosOn: canvas
	halos do: [:halo | halo redrawEverythingOn: canvas].
! !

!AthensWorldMorph methodsFor: 'events'!

delegateEvent: aSymbol with: evt
	morphsUnderHand do: [:morph |
		morph == morphsUnderHand last
			ifTrue: [evt basicAt: #topMost put: true]
			ifFalse: [evt basicAt: #topMost put: false].
				
		aSymbol == #mouseMove | (aSymbol == #mouseClick) | (aSymbol == #mouseDown) | (aSymbol == #mouseUp)
			ifTrue: [
				evt at: #position put: (morph globalPathTransform inverseTransform: handPosition).
				evt at: #globalPosition put: handPosition].
		
		aSymbol == #mouseClick ifTrue: [morph handleMouseClick: evt].
		aSymbol == #mouseMove ifTrue: [morph handleMouseMove: evt].
		aSymbol == #mouseDown ifTrue: [morph handleMouseDown: evt].
		aSymbol == #mouseUp ifTrue: [morph handleMouseUp: evt].
		aSymbol == #mouseWheel ifTrue: [morph handleMouseWheel: evt]].
!

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
	worldState := WorldState for: self.
	super initialize.
	self initializeBackgroundPaint.
	self initializeHalos.
	morphsUnderHand := {self}.
	handPosition := 0@0.
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
	self registerGlobalEvent: #mouseMove withCallback: [:evt | 
		self updateMorphsUnderHandAt: evt offsetX @ evt offsetY.
		handPosition := evt offsetX @ evt offsetY].
	{#mouseMove. #mouseDown. #mouseUp. #mouseClick. #mouseWheel} do: [:sym |
		self registerGlobalEvent: sym withCallback: [:evt | self delegateEvent: sym with: evt]].
	"self registerGlobalEvent: #mouseClick withCallback: [:evt | self addHalosTo: morphBelowHand]."
!

initializeHalos
	halos := OrderedCollection new.
	halos add: AthensCloseHaloMorph new.
	halos add: AthensInspectHaloMorph new.
	halos add: AthensMoveHaloMorph new.
	halos do: [:halo | self addMorph: halo].
! !

!AthensWorldMorph methodsFor: 'morph handling'!

morphsAtPosition: aPoint
	halos reverseDo: [:morph | |ret|
		morph isVisible ifTrue: [
			ret := morph morphsAtPosition: aPoint.
			ret ifNotNil: [^ ret
				add: self;
				yourself]]].
	
	(super morphsAtPosition: aPoint) ifNotNil: [:m | ^ m].
	^ {self}
!

updateMorphsUnderHandAt: aPoint
	|oldMorphs|
	oldMorphs := morphsUnderHand.
	morphsUnderHand := self morphsAtPosition: aPoint.
	oldMorphs do: [:m |
		(morphsUnderHand includes: m) ifFalse: [m handleMouseLeave]].
	morphsUnderHand do: [:m |
		(oldMorphs includes: m) ifFalse: [m handleMouseEnter]].
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

!AthensDummyWorldMorph methodsFor: 'morph handling'!

maxZIndex
	^ 0
!

submorphsZIndicesChanged
! !

AthensDummyWorldMorph class instanceVariableNames: 'instance'!

!AthensDummyWorldMorph class methodsFor: ' singleton'!

instance
	instance ifNil: [instance := self new].
	^ instance
! !

Object subclass: #WorldState
	instanceVariableNames: 'needsRedraw world'
	package: 'Athens-Core-Morphic'!

!WorldState methodsFor: 'accessing'!

world: aWorld
	world := aWorld.
	self initializeRenderLoop.
! !

!WorldState methodsFor: 'drawing'!

damageWorld
	needsRedraw := true.
! !

!WorldState methodsFor: 'initialization'!

initialize
	needsRedraw := false.
!

initializeRenderLoop
	< setInterval(function() {
		if (self['@needsRedraw']) {
			self['@needsRedraw'] = false;
			self['@world']._privateRedraw();
		}
	}, 0); >
! !

!WorldState class methodsFor: 'instance creation'!

for: aWorld
	^ self new
		world: aWorld;
		yourself
! !


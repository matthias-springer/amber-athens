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
		"canvas pathTransform restoreAfter: ["
			canvas pathTransform setIdentity: globalPathTransform.
			canvas pathTransform loadIdentity.
			
			canvas pathTransform restoreAfter: [
				self drawOn: canvas].
				
			outerShape ifNil: [self outerShape: (0@0 corner: 50@50)].
			
			canvas clipBy: outerShape during: [
				submorphs do: [:morph | morph redrawEverythingOn: canvas]]"]"].
! !

!AthensMorph methodsFor: 'events'!

handleChange: evt
	(eventCallbacks at: #change ifAbsent: [[:ev |]]) value: evt.
!

handleKeyDown: evt
	(eventCallbacks at: #keyDown ifAbsent: [[:ev | ]]) value: evt.
!

handleKeyPress: evt
	(eventCallbacks at: #keyPress ifAbsent: [[:ev | ]]) value: evt.
!

handleKeyUp: evt
	(eventCallbacks at: #keyUp ifAbsent: [[:ev | ]]) value: evt.
!

handleMouseClick: evt
	evt ctrlKeyPressed & (evt topMost)
		ifTrue: [self world addHalosTo: self]
		ifFalse: [(eventCallbacks at: #mouseClick ifAbsent: [[:ev | ]]) value: evt].
	evt ctrlKeyPressed not & evt topMost
		ifTrue: [self world hideHalos].
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

onKeyDown: aBlock
	eventCallbacks at: #keyDown put: aBlock.
!

onKeyPress: aBlock
	eventCallbacks at: #keyPress put: aBlock.
!

onKeyUp: aBlock
	eventCallbacks at: #keyUp put: aBlock.
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

!AthensHaloMorph methodsFor: 'halo'!

basicColor
	^ Color black
!

highlightColor
	^ Color cosmoDarkGray
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

haloPosition
	^ -20 @ 0
!

haloText
	^ ''
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

haloPosition
	^ -20 @ 20
!

haloText
	^ ''
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
	attachedTo translateBy: (attachedTo globalPathTransform inverseTransform: evt globalPosition).
	self world addHalosTo: attachedTo.	"causes halos to move as well"
!

processMouseUp: evt
	self handleMouseUp: evt.
! !

!AthensMoveHaloMorph methodsFor: 'halo'!

haloPosition
	^ -20 @ 40
!

haloText
	^ ''
! !

!AthensMoveHaloMorph methodsFor: 'initialization'!

initialize
	super initialize.
	globalMoveHandler := [:evt | self processMouseMove: evt].
	globalUpHandler := [:evt | self processMouseUp: evt].
! !

AthensMorph subclass: #AthensRectangleMorph
	instanceVariableNames: 'width height borderColor mouseDownBorderColor mouseFocusBorderColor fillColor mouseDownFillColor mouseFocusFillColor hasSharpBorder'
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

height
	^ height
!

height: aNumber
	height := aNumber.
	self outerShape: (0@0 corner: self width@height).
	self layoutChanged.
	self redraw.
!

mouseDownBorderColor: aColor
	mouseDownBorderColor := aColor.
!

mouseDownFillColor: aColor
	mouseDownFillColor := aColor.
!

mouseFocusBorderColor: aColor
	mouseFocusBorderColor := aColor.
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
	|shape currentFillColor currentBorderColor|
	"Use method width instead of instance variable to ensure that width is calculated."
	shape := 0@0 corner: self width@height.
	hasMouseFocus & mouseFocusFillColor notNil
		ifTrue: [currentFillColor := mouseFocusFillColor]
		ifFalse: [currentFillColor := fillColor].
	isMouseDown & mouseDownFillColor notNil ifTrue: [currentFillColor := mouseDownFillColor].
	
	hasMouseFocus & mouseFocusBorderColor notNil
		ifTrue: [currentBorderColor := mouseFocusBorderColor]
		ifFalse: [currentBorderColor := borderColor].
	isMouseDown & mouseDownBorderColor notNil ifTrue: [currentBorderColor := mouseDownBorderColor].
	
	hasSharpBorder
		ifTrue: [
			canvas setPaint: currentBorderColor.
			canvas drawShape: shape.
			canvas setPaint: currentFillColor.
			canvas drawShape: (1@1 corner: width - 1 @ (height - 1))]
		ifFalse: [
			canvas setPaint: currentFillColor.
			canvas drawShape: shape.
			canvas setStrokePaint: currentBorderColor.
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
	fillColor := Color white.
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

AthensRectangleMorph subclass: #AthensEditableTextMorph
	instanceVariableNames: 'lines selectionStart selectionLength keyHandlers font virtualLines virtualSurface virtualCanvas maxWidth isInSelectionMode selectionStartOffset lineHeight'
	package: 'Athens-Core-Morphic'!

!AthensEditableTextMorph methodsFor: 'accessing'!

maxWidth
	^ maxWidth
!

size
	^ self text size
!

text
	|text|
	text := ''.
	virtualLines do: [:line | text := text , line text].
	^ text
!

text: aString
	self generateVirtualLines: aString.
!

virtualCanvas
	^ virtualCanvas
!

width: aNumber
	super width: aNumber.
	maxWidth := aNumber.
	self text: self text.
	self redraw.
! !

!AthensEditableTextMorph methodsFor: 'drawing'!

drawCursorOn: canvas
	|shape pixelPosition|
	canvas pathTransform loadIdentity.
	canvas setPaint: Color black.
	pixelPosition := self pixelBeforePosition: selectionStart + selectionLength.
	shape := pixelPosition corner: pixelPosition + (1 @ lineHeight).
	canvas drawShape: shape.
!

drawOn: canvas
	super drawOn: canvas.
	self drawSelectionOn: canvas.

	canvas setFont: font.
	canvas setPaint: Color black.
	
	virtualLines do: [:line |
		canvas pathTransform translateX: 0 Y: lineHeight.
		canvas drawString: line text].
		
	self drawCursorOn: canvas.
!

drawSelectionOn: canvas
	|x y selOffsets selStart selStop|
	selOffsets := self selectionStartStop.
	selStart := selOffsets first. selStop := selOffsets last.
	x := selStart x. y := selStart y.
	[y == selStop y] whileFalse: [
		self drawSelectionOn: canvas from: x to: maxWidth in: y.
		y := y + lineHeight.
		x := 0].
	self drawSelectionOn: canvas from: x to: selStop x in: y.
!

drawSelectionOn: canvas from: x1 to: x2 in: y
	canvas setPaint: Color cosmoBlue.
	canvas drawShape: (x1 @ y corner: x2 @ (y + lineHeight)).
! !

!AthensEditableTextMorph methodsFor: 'events'!

handleKeyBackspace: evt
	selectionLength == 0
		ifTrue: [
			self removeCharAt: selectionStart - 1.
			self moveCursorBy: -1]
		ifFalse: [self removeSelection].
	self redraw.
!

handleKeyDelete: evt
	selectionLength == 0
		ifTrue: [self removeCharAt: selectionStart]
		ifFalse: [self removeSelection].
	self redraw.
!

handleKeyDown: evt
	|handler|
	super handleKeyDown: evt.
	handler := keyHandlers at: evt keyCode ifAbsent: [[:ev | "self handleKeyOther: ev"]].
	handler value: evt.
!

handleKeyDownArrow: evt
	|line lineIndex nextLine nextLineIndex lineOffset positionOffset|
	lineIndex := self lineForPosition: selectionStart.
	line := virtualLines at: lineIndex.
	lineOffset := self charsBeforeLine: lineIndex.
	positionOffset := line pixelOffsetBefore: selectionStart - lineOffset.
	nextLineIndex := (lineIndex + 1) min: virtualLines size.
	nextLine := virtualLines at: nextLineIndex.
	self select: (self charsBeforeLine: nextLineIndex) + (nextLine positionForPixelOffset: positionOffset).
!

handleKeyInput: evt
	self insertString: (String fromCharCode: evt keyCode) at: selectionStart.
	self moveCursorBy: 1.
	self redraw.
!

handleKeyLeftArrow: evt
	self select: selectionStart - 1.
!

handleKeyPress: evt
	super handleKeyPress: evt.
	self handleKeyInput: evt.
!

handleKeyRightArrow: evt
	self select: selectionStart + selectionLength + 1.
!

handleKeyUpArrow: evt
	|line lineIndex nextLine nextLineIndex lineOffset positionOffset|
	lineIndex := self lineForPosition: selectionStart.
	line := virtualLines at: lineIndex.
	lineOffset := self charsBeforeLine: lineIndex.
	positionOffset := line pixelOffsetBefore: selectionStart - lineOffset.
	nextLineIndex := (lineIndex - 1) max: 1.
	nextLine := virtualLines at: nextLineIndex.
	self select: (self charsBeforeLine: nextLineIndex) + (nextLine positionForPixelOffset: positionOffset).
!

handleMouseDown: evt
	super handleMouseDown: evt.
	isInSelectionMode := true.
	selectionStart := self positionForPixel: evt position.
	selectionLength := 0.
	self redraw.
!

handleMouseLeave
	super handleMouseLeave.
	self handleMouseUp: AthensMorphicEvent new.
!

handleMouseMove: evt
	super handleMouseMove: evt.
	isInSelectionMode ifTrue: [|selectionStop|
		selectionStop := self positionForPixel: evt position.
		selectionLength := selectionStop - selectionStart.
		self redraw].
!

handleMouseUp: evt
	super handleMouseUp: evt.
	isInSelectionMode := false.
! !

!AthensEditableTextMorph methodsFor: 'initialization'!

bindKeyHandlers
	keyHandlers := Dictionary new
		at: 8 put: [:evt | self handleKeyBackspace: evt];
		at: 46 put: [:evt | self handleKeyDelete: evt];
		at: 37 put: [:evt | self handleKeyLeftArrow: evt];
		at: 38 put: [:evt | self handleKeyUpArrow: evt];
		at: 39 put: [:evt | self handleKeyRightArrow: evt];
		at: 40 put: [:evt | self handleKeyDownArrow: evt];
		yourself
!

initialize
	super initialize.
	self initializeVariables.
	self initializeVirtualSurface.
	self bindKeyHandlers.
	self text: ''.
!

initializeVariables
	font := LogicalFont familyName: 'Arial' pointSize: 15.
	virtualLines := OrderedCollection new.
	maxWidth := 100.
	lineHeight := 15.
	isInSelectionMode := false.
	hasSharpBorder := true.
	borderColor := fillColor := Color transparent.
	selectionStart := 1.
	selectionLength := 0.
!

initializeVirtualSurface
	virtualSurface := AthensHTMLSurface extent: 0@0.
	virtualSurface drawDuring: [:canvas | 
		virtualCanvas := canvas.
		canvas setFont: font].
! !

!AthensEditableTextMorph methodsFor: 'text manipulation'!

generateVirtualLines: aString
	|text|
	virtualLines := OrderedCollection new.
	text := aString.
	text lines do: [:lineText | |line remainingText emptyLine|
		remainingText := lineText.
		emptyLine := lineText size == 0. "run loop at least once even if line is empty"
		[remainingText size > 0 | emptyLine] whileTrue: [
			line := AthensVirtualTextAreaLine forTextAreaMorph: self.
			remainingText := remainingText copyFrom: (line populateWith: remainingText) + 1 to: remainingText size.
			virtualLines size > 0 ifTrue: [
				virtualLines last nextLine: line].
			virtualLines add: line.
			emptyLine := false].
		virtualLines ifEmpty: [virtualLines add: (AthensVirtualTextAreaLine forTextAreaMorph: self)].
		virtualLines last hasLineBreak: true].
	"Last virtual line must have line break."
	virtualLines ifEmpty: [
		virtualLines add: (AthensVirtualTextAreaLine forTextAreaMorph: self).
		virtualLines last hasLineBreak: true].
!

insertString: aString at: position
	|content|
	content := self text.
	self text: (content copyFrom: 1 to: position - 1), 
		aString,
		(content copyFrom: position to: content size).
!

removeCharAt: position
	|content|
	content := self text.
	self text: (content copyFrom: 1 to: position - 1),
		(content copyFrom: position + 1 to: content size).
!

removeFrom: start to: stop
	|content|
	content := self text.
	self text: (content copyFrom: 1 to: start - 1),
		(content copyFrom: stop + 1 to: content size).
!

removeSelection
	|selStart selStop|
	selectionLength > 0
		ifTrue: [
			selStart := selectionStart.
			selStop := selectionStart + selectionLength - 1]
		ifFalse: [
			selStart := selectionStart + selectionLength.
			selStop := selectionStart - 1].
	self removeFrom: selStart to: selStop.
	self select: selStart.
! !

!AthensEditableTextMorph methodsFor: 'text positioning'!

charsBeforeLine: aNumber
	|sum|
	sum := 0.
	(1 to: aNumber - 1) do: [:lineIndex |
		sum := sum + (virtualLines at: lineIndex) size].
	^ sum
!

lineForPixelOffset: aNumber
	^ (aNumber / lineHeight) floor + 1 min: virtualLines size
!

lineForPosition: aNumber
	|currentPosition|
	"TODO: create index for line offsets"
	currentPosition := 0.
	(1 to: virtualLines size) do: [:lineIndex | |line|
		line := virtualLines at: lineIndex.
		currentPosition + line size + 1 > aNumber ifTrue: [
			^ lineIndex].
		currentPosition := currentPosition + line size].
	self error: 'line not found'.
!

pixelAfterPosition: aNumber
	|currentPosition|
	"TODO: create index for line offsets"
	currentPosition := 0.
	virtualLines do: [:line | |previousLine|
		currentPosition > aNumber ifTrue: [
			^ previousLine pixelOffsetAfter: aNumber - currentPosition + line size].
		currentPosition := currentPosition + line size.
		previousLine := line.
	].
!

pixelBeforePosition: aNumber
	|currentPosition|
	"TODO: create index for line offsets"
	currentPosition := 0.
	(1 to: virtualLines size) do: [:lineIndex | |line|
		line := virtualLines at: lineIndex.
		currentPosition + line size + 1 > aNumber ifTrue: [
			^ (line pixelOffsetBefore: aNumber - currentPosition) @ (self pixelOffsetForLine: lineIndex)].
		currentPosition := currentPosition + line size].
	self error: 'pixel not found'.
!

pixelOffsetForLine: aNumber
	^ (aNumber - 1) * lineHeight
!

positionForPixel: aPoint
	|lineIndex lineOffset|
	lineIndex := self lineForPixelOffset: aPoint y.
	lineOffset := (virtualLines at: lineIndex) positionForPixelOffset: aPoint x.
	lineOffset == -1
		ifTrue: ["outside line (right border)" ^ (self charsBeforeLine: lineIndex + 1) + 1]
		ifFalse: [^ lineOffset + (self charsBeforeLine: lineIndex)].
! !

!AthensEditableTextMorph methodsFor: 'text selection'!

moveCursorBy: aNumber
	selectionStart := ((selectionStart + aNumber) max: 1) min: self size.
	selectionLength := 0.
	self redraw.
!

select: aNumber
	selectionStart := (aNumber max: 1) min: self size.
	selectionLength := 0.
	self redraw.
!

selectionStartStop
	|selStart selStop|
	selStart := self pixelBeforePosition: selectionStart.
	selStop := self pixelBeforePosition: selectionStart + selectionLength.
	selectionLength < 0	ifTrue: [|tmp|
		tmp := selStart.
		selStart := selStop.
		selStop := tmp].
	^ {selStart. selStop}
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
	xScrollBar value: xScrollBar buttonStepSize * (evt at: #wheelDelta) x + xScrollBar value.
	yScrollBar value: yScrollBar buttonStepSize * (evt at: #wheelDelta) y + yScrollBar value.
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
	self value: (globalPathTransform inverseTransform: (evt at: #position)) y - 10 / (height - 20).
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

AthensRectangleMorph subclass: #AthensTextAreaMorph
	instanceVariableNames: 'textMorph'
	package: 'Athens-Core-Morphic'!

!AthensTextAreaMorph methodsFor: 'decorator'!

doesNotUnderstand: aMessage
	^ textMorph perform: aMessage selector withArguments: aMessage arguments
! !

!AthensTextAreaMorph methodsFor: 'initialization'!

initialize
	super initialize.
	textMorph := AthensEditableTextMorph new.
	hasSharpBorder := true.
	borderColor := Color cosmoGray.
	mouseFocusFillColor := Color cosmoLightGray.
	mouseDownBorderColor := Color cosmoDarkGray.
	self addMorph: textMorph.
	self layoutChanged.
! !

!AthensTextAreaMorph methodsFor: 'morph handling'!

layoutChanged
	super layoutChanged.
	textMorph
		resetTransformation;
		translateByX: 3 Y: 3;
		height: height - 6;
		width: width - 6.
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
	windowMoveOffset := evt at: #position.
	self bringToFront.
	super handleMouseDown: evt.
!

windowMouseMove: evt
	self translateBy: (globalPathTransform inverseTransform: (evt at: #globalPosition)) - windowMoveOffset.
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
		morph == morphsUnderHand first
			ifTrue: [evt at: #topMost put: true]
			ifFalse: [evt at: #topMost put: false].
				
		aSymbol == #mouseMove | (aSymbol == #mouseClick) | (aSymbol == #mouseDown) | (aSymbol == #mouseUp)
			ifTrue: [
				evt at: #position put: (morph globalPathTransform inverseTransform: handPosition).
				evt at: #globalPosition put: handPosition].
		
		aSymbol == #mouseClick ifTrue: [morph handleMouseClick: evt].
		aSymbol == #mouseMove ifTrue: [morph handleMouseMove: evt].
		aSymbol == #mouseDown ifTrue: [morph handleMouseDown: evt].
		aSymbol == #mouseUp ifTrue: [morph handleMouseUp: evt].
		aSymbol == #mouseWheel ifTrue: [morph handleMouseWheel: evt].
		aSymbol == #keyDown ifTrue: [morph handleKeyDown: evt].
		aSymbol == #keyUp ifTrue: [morph handleKeyUp: evt].
		aSymbol == #keyPress ifTrue: [morph handleKeyPress: evt]].
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
		handPosition := evt at: #globalPosition.
		self updateMorphsUnderHandAt: handPosition].
	{#mouseMove. #mouseDown. #mouseUp. #mouseClick. #mouseWheel. #keyDown. #keyUp. #keyPress} do: [:sym |
		self registerGlobalEvent: sym withCallback: [:evt | self delegateEvent: sym with: evt]].
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

addHalosTo: aMorph
!

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

Dictionary subclass: #AthensMorphicEvent
	instanceVariableNames: ''
	package: 'Athens-Core-Morphic'!

!AthensMorphicEvent methodsFor: 'method wrapper'!

doesNotUnderstand: aMessage
	^ self at: aMessage selector
! !

Object subclass: #AthensVirtualTextAreaLine
	instanceVariableNames: 'morph text hasLineBreak nextLine'
	package: 'Athens-Core-Morphic'!

!AthensVirtualTextAreaLine methodsFor: 'accessing'!

hasLineBreak
	^ hasLineBreak
!

hasLineBreak: aBoolean
	hasLineBreak := aBoolean.
!

morph: aMorph
	morph := aMorph
!

nextLine: aLine
	nextLine := aLine.
!

size
	hasLineBreak
		ifTrue: [^ text size + 1]
		ifFalse: [^ text size].
!

text
	hasLineBreak 
		ifTrue: [^ text, (String fromCharCode: 13)]
		ifFalse: [^ text].
! !

!AthensVirtualTextAreaLine methodsFor: 'initialization'!

assert: aBoolean
	aBoolean ifFalse: [aBoolean halt].
!

initialize
	hasLineBreak := false.
	text := ''.
! !

!AthensVirtualTextAreaLine methodsFor: 'text layout'!

measureStringWidth: aString
	^ morph virtualCanvas measureStringWidth: aString
! !

!AthensVirtualTextAreaLine methodsFor: 'text manipulation'!

populateWith: aString
	|maxWidth|
	maxWidth := morph maxWidth.
	(self measureStringWidth: aString) <= maxWidth
		ifTrue: [text := aString. ^ aString size]
		ifFalse: [|stringLen|
			stringLen := 1.
			[(self measureStringWidth: (aString copyFrom: 1 to: stringLen)) < maxWidth] 
				whileTrue: [stringLen := stringLen + 1].
			text := aString copyFrom: 1 to: stringLen - 1.
			^ stringLen - 1].
! !

!AthensVirtualTextAreaLine methodsFor: 'text positioning'!

pixelOffsetAfter: anOffset
	"ASSERTION"
	self assert: anOffset > 0.
	self assert: anOffset <=  self size.
	^ self measureStringWidth: (text copyFrom: 1 to: anOffset)
!

pixelOffsetBefore: anOffset
	"ASSERTION"
	self assert: anOffset > 0.
	anOffset == 1
		ifTrue: [^ 0]
		ifFalse: [^ self pixelOffsetAfter: anOffset - 1].
!

positionForPixelOffset: aNumber
	|lastOffset|
	lastOffset := 0.
	(1 to: text size) do: [:charIndex | |offset midChar|
		offset := self measureStringWidth: (text copyFrom: 1 to: charIndex).
		midChar := offset - (offset - lastOffset / 2).
		lastOffset := offset.
		aNumber <= midChar 
			ifTrue: [^ charIndex]].
	hasLineBreak
		ifTrue: [^ self size]
		ifFalse: ["outside -> position 1 in next line" ^ -1].
! !

!AthensVirtualTextAreaLine class methodsFor: 'instance creation'!

forTextAreaMorph: aMorph
	^ self new
		morph: aMorph;
		yourself
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


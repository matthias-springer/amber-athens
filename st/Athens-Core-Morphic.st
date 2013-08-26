Smalltalk current createPackage: 'Athens-Core-Morphic'!
Object subclass: #AthensGlobalMorphSettings
	instanceVariableNames: 'showDamageArea'
	package: 'Athens-Core-Morphic'!

!AthensGlobalMorphSettings methodsFor: 'accessing'!

showDamageArea
	^ showDamageArea
!

showDamageArea: aBoolean
	showDamageArea := aBoolean.
! !

!AthensGlobalMorphSettings methodsFor: 'initialization'!

initialize
	showDamageArea := true.
! !

AthensGlobalMorphSettings class instanceVariableNames: 'instance'!

!AthensGlobalMorphSettings class methodsFor: 'singleton'!

instance
	instance ifNil: [instance := self new].
	^ instance
! !

Object subclass: #AthensMorph
	instanceVariableNames: 'transformation outerShape outerPolygon owner submorphs color globalPathTransform visible eventCallbacks hasMouseFocus isMouseDown zIndex'
	package: 'Athens-Core-Morphic'!
!AthensMorph commentStamp!
I am an Athens morph. I can be drawn onto an Athens surface.

I have a list of submorphs (`#submorphs`) and can be added to another morph (`#addMorph:`).

I do not have a fixed shape, but I have an outer shape that is used for mouse events and focus, and for clipping my submorphs.

## API

The method `#color:` is used to set my color in case the default drawing routine was not overridden. 

The method `#owner` returns my owner and `#submorphs` return my submorphs. 

The method `#zIndex:` sets my z-index that is used to determine the drawing order of my owner's submorphs.

## Drawing

The method `#drawOn:` is used for drawing myself using an Athens canvas.

The method `#redraw:` schedules a redraw of myself and all of my morphs. When the scheduler decides to redraw me, the method `#redrawNow:on:` is called.

## Events

All methods starting with `on` are used to bind event handlers. An event handler is a block closure that takes an event argument containing specific information about the event.

`#onKeyDown:` is triggered when a key is pressed down.

`#onKeyUp:` is triggered when a key is released.

`#onKeyPress:` is triggered when a key is pressed and provides a case-sensitive ASCII character code. Is not triggered on special keys such as backspace, delete and arrow keys.

`#onMouseClick:` is triggered when I or one of my submorphs is clicked.

`#onMouseDown:` is triggered when the mouse button is pressed down while I or one of my submorphs has mouse focus.

`#onMouseUp:` is triggered when the mouse is released while I or one of my submorphs has mouse focus.

`#onMouseEnter:` is triggered when I receive mouse focus.

`#onMouseLeave:` is triggered when I loose mouse focus. Mouse focus is not lost when one of my submorphs receives mouse focus.

`#onMouseWheel:` is triggered when the mouse scroll wheel is used while I or one of my submorphs has mouse focus.

## Geometry

The method `#translateBy:` is used to change my position. 

The method `#scaleBy:` is used to scale myself. Non-uniform scaling is supported.

The methods `#rotateByDegrees:` and `#rotateByRadians:` are used to rotate myself.

My position, rotation and scaling cannot be determined. Instead, these transformations are stored internally in a transformation matrix and subsequent transformations stack.

The method `#resetTransformation` resets all my transformations. This method can be used to position myself at given coordinates by first resetting my transformation and translating myself afterwards.

## Usage example:

    aMorph 
        resetTransformation;
        rotateByDegrees: 45;
        scaleBy: 1.5 @ 2;
        addMorph: AthensMorph new.!

!AthensMorph methodsFor: 'accessing'!

color: aColor
	< self['@color'] = aColor;
	self._redraw(); >
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
	< self['@zIndex'] = aNumber;
	self['@owner']._submorphsZIndicesChanged(); >
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
	< self._world()._redraw_(self['@outerPolygon']._deepCopy()._multiplyBy_(self['@globalPathTransform'])._boundingBox()); 
	//._deepCopy()._multiplyBy_(self['@globalPathTransform'])._boundingBox(); >
!

redrawNow: rects on: canvas
	< self['@globalPathTransform']._loadAffineTransform_(self['@owner']['@globalPathTransform']);
	self['@globalPathTransform']._multiplyBy_(self['@transformation']);
	
	if (self['@visible']) {
		canvas['@pathTransform']._setIdentity_(self['@globalPathTransform']);
		canvas['@pathTransform']._loadIdentity();
		
		canvas['@pathTransform']._restoreAfter_(function() {
			self._drawOn_(canvas);
		});
		
		if (self['@outerShape'] === undefined || self['@outerShape']._isNil()) {
			self._outerShape_(self._class()._defaultOuterShape_());
		}
		
		canvas._clipBy_during_(self['@outerShape'], function() {
			for (var index = 0; index < self['@submorphs'].length; index++) {
				var submorph = self['@submorphs'][index];
				var submorphGlobalOuterBounds = submorph['@outerPolygon']._boundingBox()._boundsAfterMultiplicationWith_(submorph['@globalPathTransform']);
//				var submorphGlobalOuterBounds = submorph['@outerPolygon']._deepCopy()._multiplyBy_(submorph['@globalPathTransform'])._boundingBox();
				var intersectRects = [];
				for (var i = 0; i < rects.length; i++) {
					if (submorphGlobalOuterBounds._intersectsWith_(rects[i])) {
						intersectRects.push(rects[i]);
					}
				}
				
				if (0 < intersectRects.length) {
					submorph._redrawNow_on_(intersectRects, canvas);
				}
				
				if (smalltalk.AthensGlobalMorphSettings['@instance']['@showDamageArea']) {
					// debug: show damage area
					if (0 < intersectRects.length) {
						canvas._setPaint_(smalltalk.Color._r_g_b_a_(0,1,0,0.25));
					}
					else {
						canvas._setPaint_(smalltalk.Color._r_g_b_a_(1,0,0,0.25));
					}

					canvas['@pathTransform']._loadAffineTransform_(self['@submorphs'][index]['@globalPathTransform']);
					canvas._drawShape_(self['@submorphs'][index]['@outerShape']);
				}

			}
		});
	} >
! !

!AthensMorph methodsFor: 'events'!

handleChange: evt
	< self['@eventCallbacks']._at_ifAbsent_('change', function(){return function(ev) {}; })(evt); >
!

handleKeyDown: evt
	< self['@eventCallbacks']._at_ifAbsent_('keyDown', function(){return function(ev) {}; })(evt); >
!

handleKeyPress: evt
	< self['@eventCallbacks']._at_ifAbsent_('keyPress', function(){return function(ev) {}; })(evt); >
!

handleKeyUp: evt
	< self['@eventCallbacks']._at_ifAbsent_('keyUp', function(){return function(ev) {}; })(evt); >
!

handleMouseClick: evt
	evt ctrlKeyPressed & (evt topMost)
		ifTrue: [self world addHalosTo: self]
		ifFalse: [(eventCallbacks at: #mouseClick ifAbsent: [[:ev | ]]) value: evt].
	evt ctrlKeyPressed not & evt topMost
		ifTrue: [self world hideHalos].
!

handleMouseDown: evt
	< self['@isMouseDown'] = true; 
	self['@eventCallbacks']._at_ifAbsent_('mouseDown', function(){return function(ev) {}; })(evt); >
!

handleMouseEnter
	< self['@hasMouseFocus'] = true; 
	self['@eventCallbacks']._at_ifAbsent_('mouseEnter', function(){return function() {}; })(); >
!

handleMouseLeave
	< self['@hasMouseFocus'] = self['@isMouseDown'] = false;
	self['@eventCallbacks']._at_ifAbsent_('mouseLeave', function(){return function() {}; })(); >
!

handleMouseMove: evt
	< self['@eventCallbacks']._at_ifAbsent_('mouseMove', function(){return function(ev) {}; })(evt); >
!

handleMouseUp: evt
	< self['@isMouseDown'] = false;
	self['@eventCallbacks']._at_ifAbsent_('mouseUp', function(){return function(ev) {}; })(evt); >
!

handleMouseWheel: evt
	< self['@eventCallbacks']._at_ifAbsent_('mouseWheel', function(){return function(ev) {}; })(evt); >
!

morphsAtPosition: aPoint
	< if (self['@outerPolygon']._includesPoint_(self['@globalPathTransform']._inverseTransform_(aPoint))) {
		for (var morphIndex = self['@submorphs'].length - 1; -1 < morphIndex; morphIndex--) {
			var morph = self['@submorphs'][morphIndex];
			if (morph._isVisible) {
				var morphsAtPos = morph._morphsAtPosition_(aPoint);
				if (morphsAtPos !!== undefined) {
					morphsAtPos._add_(self);
					return morphsAtPos;
				}
			}
		}
	}
	else {
		return undefined;
	}
	
	return [self]; >
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
	< self['@transformation']._loadIdentity();
	self['@owner']._redraw(); >
!

rotateBy: aNumber
	< self['@transformation']._rotateByRadians_(aNumber);
	self['@owner']._redraw(); >
!

rotateByDegrees: aNumber
	< self['@transformation']._rotateByDegrees_(aNumber); 
	self['@owner']._redraw(); >
!

rotateByRadians: aNumber
	< self['@transformation']._rotateByRadians_(aNumber);
	self['@owner']._redraw(); >
!

scaleBy: aPoint
	< self['@transformation']._scaleX_Y_(aPoint['@x'], aPoint['@y']);
	self['@owner']._redraw(); >
!

scaleByX: x Y: y
	< self['@transformation']._scaleX_Y_(x, y);
	self['@owner']._redraw(); >
!

translateBy: aPoint
	< self['@transformation']._translateX_Y_(aPoint['@x'], aPoint['@y']);
	self['@owner']._redraw(); >
!

translateByX: x Y: y
	< self['@transformation']._translateX_Y_(x, y);
	self['@owner']._redraw(); >
! !

!AthensMorph methodsFor: 'initialization'!

initialize
	< self['@color'] = smalltalk.Color._blue();
	self['@owner'] = smalltalk.AthensDummyWorldMorph._instance();
	self['@transformation'] = smalltalk.AthensAffineTransform._new();
	self['@globalPathTransform'] = smalltalk.AthensAffineTransform._new();
	self['@submorphs'] = smalltalk.OrderedCollection._new();
	self['@visible'] = true;
	self['@eventCallbacks'] = smalltalk.Dictionary._new(); 
	self['@hasMouseFocus'] = self['@isMouseDown'] = false;
	self['@zIndex'] = 0;
	var zero = 0;
	self._outerShape_(zero.__at(zero)._corner_(zero.__at(zero))); >
! !

!AthensMorph methodsFor: 'internals'!

bounds
	< return self['@outerPolygon']._boundingBox(); >
!

globalBounds
	< var globalOuterPolygon = self['@outerPolygon']._deepCopy();
	globalOuterPolygon._multiplyBy_(self['@globalPathTransform']);
	return globalOuterPolygon._boundingBox(); >
!

globalPathTransform
	< return self['@globalPathTransform']; >
!

maxZIndex
	< var maxIndex = 0;
	for (var morphIndex = 0; morphIndex < self['@submorphs'].length; morphIndex++) {
		maxIndex = Math.max(maxIndex, self['@submorphs'][morphIndex]['@zIndex']);
	}
	return maxIndex; >
!

outerShape: aShape
	< self['@outerShape'] = aShape;
	self['@outerPolygon'] = aShape._asPolygon(); >
!

transformation
	^ transformation
!

transformedBounds
	< return self['@outerPolygon']._deepCopy()._multiplyBy_(self['@transformation'])._boundingBox(); >
!

world
	< var morph = self;
	while (!!morph._isWorldMorph()) {
		morph = morph['@owner'];
	}
	return morph; >
! !

!AthensMorph methodsFor: 'morph handling'!

addMorph: aMorph
	< self['@submorphs']._add_(aMorph);
	aMorph['@owner'] = self;
	if (aMorph['@visible']) {
		aMorph._redraw();
	}
	// bring to front
	aMorph._zIndex_(self._maxZIndex() + 1);	>
!

bringToFront
	< var maxZIndex = self['@owner']._maxZIndex();
	if (self['@zIndex'] < maxZIndex) {
		self._zIndex_(maxZIndex + 1);
	} >
!

delete
	< self['@owner']._removeMorph_(self);
	self['@owner'] = smalltalk.AthensDummyWorldMorph._instance(); >
!

hide
	< self['@visible'] = false;
	self._redraw(); >
!

layoutChanged
	"Morph does not respond to layout changes."
!

removeMorph: aMorph
	< self['@submorphs']._remove_(aMorph);
	self._redraw(); >
!

show
	< self['@visible'] = true;
	self._redraw(); >
!

submorphsZIndicesChanged
	< self['@submorphs'].sort(function(m1, m2) {
		return m2['@zIndex'] < m1['@zIndex'];
	});
	self._redraw(); >
! !

!AthensMorph methodsFor: 'testing'!

isHaloMorph
	< return false; >
!

isVisible
	< return self['@visible']; >
!

isWorldMorph
	< return false; >
! !

!AthensMorph class methodsFor: 'constants'!

defaultOuterShape
	^ 0@0 corner: 50@50
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

attachedTo
	^ attachedTo
!

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
	instanceVariableNames: 'width height borderColor mouseDownBorderColor mouseFocusBorderColor fillColor mouseDownFillColor mouseFocusFillColor hasSharpBorder shapeInner shapeOuter'
	package: 'Athens-Core-Morphic'!

!AthensRectangleMorph methodsFor: 'accessing'!

borderColor: aColor
	< self['@borderColor'] = aColor;
	self._redraw(); >
!

fillColor: aColor
	< self['@fillColor'] = aColor;
	self._redraw(); >
!

hasSharpBorder
	^ hasSharpBorder
!

hasSharpBorder: aBoolean
	< self['@hasSharpBorder'] = aBoolean;
	self._redraw(); >
!

height
	^ height
!

height: aNumber
	< self['@height'] = aNumber;
	self._layoutChanged();
	self._outerShapeChanged();
	self._redraw(); >
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
	< self['@width'] = aNumber;
	self._layoutChanged();
	self._outerShapeChanged();
	self._redraw(); >
! !

!AthensRectangleMorph methodsFor: 'drawing'!

drawOn: canvas
	< var currentFillColor = self['@fillColor'];
	var currentBorderColor = self['@borderColor'];
	
	if (self['@isMouseDown']) {
		if (!!self['@mouseDownFillColor']._isNil()) {
			currentFillColor = self['@mouseDownFillColor'];
		}
		
		if (!!self['@mouseDownBorderColor']._isNil()) {
			currentBorderColor = self['@mouseDownBorderColor'];
		}
	}
	else if (self['@hasMouseFocus']) {
		if (!!self['@mouseFocusFillColor']._isNil()) {
			currentFillColor = self['@mouseFocusFillColor'];
		}
		
		if (!!self['@mouseFocusBorderColor']._isNil()) {
			currentBorderColor = self['@mouseFocusBorderColor'];
		}
	}
	
	if (self['@hasSharpBorder']) {
		canvas._setPaint_(currentBorderColor);
		canvas._drawShape_(self['@shapeOuter']);
		canvas._setPaint_(currentFillColor);
		canvas._drawShape_(self['@shapeInner']);
	}
	else {
		canvas._setPaint_(currentFillColor);
		canvas._drawShape_(self['@shapeOuter']);
		canvas._setStrokePaint_(currentBorderColor);
		canvas._drawShape_(self['@shapeOuter']);
	} >
! !

!AthensRectangleMorph methodsFor: 'events'!

handleMouseDown: evt
	super handleMouseDown: evt.
	self needsRedrawOnMouseDown 
		ifTrue: [self redraw].
!

handleMouseEnter
	super handleMouseEnter.
	self needsRedrawOnMouseFocus 
		ifTrue: [self redraw].
!

handleMouseLeave
	super handleMouseLeave.
	self needsRedrawOnMouseFocus 
		ifTrue: [self redraw].
!

handleMouseUp: evt
	super handleMouseUp: evt.
	self needsRedrawOnMouseDown 
		ifTrue: [self redraw].
! !

!AthensRectangleMorph methodsFor: 'initialization'!

initialize
	super initialize.
	width := height := 50.
	borderColor := Color black.
	fillColor := Color white.
	mouseDownBorderColor := mouseFocusBorderColor := mouseDownFillColor := mouseFocusFillColor := nil.
	hasSharpBorder := false.
	self outerShapeChanged.
	self redraw.
! !

!AthensRectangleMorph methodsFor: 'morph handling'!

outerShapeChanged
	< var zero = 0, one = 1, width = self._width();
	var innerWidth = width - 1;
	self['@shapeOuter'] = zero.__at(zero)._corner_(width.__at(self['@height']));
	self['@shapeInner'] = one.__at(one)._corner_(innerWidth.__at(self['@height'] - 1));
	self._outerShape_(self['@shapeOuter']); >
! !

!AthensRectangleMorph methodsFor: 'testing'!

needsRedrawOnMouseDown
	< return self['@mouseDownFillColor']._notNil() || self['@mouseDownBorderColor']._notNil(); >
!

needsRedrawOnMouseFocus
	< return self['@mouseFocusFillColor']._notNil() || self['@mouseFocusBorderColor']._notNil(); >
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
	borderColor := mouseDownFillColor := mouseDownBorderColor := mouseFocusBorderColor := Color cosmoDarkBlue.
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
	selectionStart > aString size
		ifTrue: [self select: 1].
	self signalChange: aString.
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
	selectionLength == 0
		ifFalse: [self removeSelection].
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

!AthensEditableTextMorph methodsFor: 'morph handling'!

updateHeight
	"TODO: add a more generic way to ensure that text is not cut in the last line."
	self height: virtualLines size * lineHeight + 3.
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
	self updateHeight.
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

AthensRectangleMorph subclass: #AthensImageMorph
	instanceVariableNames: 'bitmapPaint url'
	package: 'Athens-Core-Morphic'!

!AthensImageMorph methodsFor: 'accessing'!

url
	^ url
!

url: aString
	url := aString.
	self createBitmapPaint.
! !

!AthensImageMorph methodsFor: 'drawing'!

drawOn: canvas
	super drawOn: canvas.
	bitmapPaint notNil
		ifTrue: [canvas setPaint: bitmapPaint]
		ifFalse: [canvas setPaint: Color transparent].
		
	canvas drawShape: (0 @ 0 corner: width @ height).
! !

!AthensImageMorph methodsFor: 'image loading'!

createBitmapPaint
	|virtualSurface|
	virtualSurface := AthensHTMLSurface extent: 0@0.
	virtualSurface
		createBitmapPaint: (Image fromUrl: url)
		afterLoading: [:paint | 
			bitmapPaint := paint.
			self height: bitmapPaint height.
			self width: bitmapPaint width.
			self redraw].
! !

!AthensImageMorph methodsFor: 'initialization'!

initialize
	super initialize.
	fillColor := mouseDownFillColor := mouseFocusFillColor := borderColor := mouseDownBorderColor := mouseFocusBorderColor := Color transparent.
	hasSharpBorder := true.
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

AthensScrollAreaMorph subclass: #AthensTextAreaMorph
	instanceVariableNames: 'textMorph'
	package: 'Athens-Core-Morphic'!

!AthensTextAreaMorph methodsFor: 'decorator'!

doesNotUnderstand: aMessage
	^ textMorph perform: aMessage selector withArguments: aMessage arguments
! !

!AthensTextAreaMorph methodsFor: 'initialization'!

initialize
	textMorph := AthensEditableTextMorph new.
	super initialize.
	self hasXScrollBar: false.
	hasSharpBorder := true.
	borderColor := Color cosmoGray.
	mouseFocusFillColor := Color cosmoLightGray.
	mouseDownBorderColor := Color cosmoDarkGray.
	self addMorph: textMorph.
	textMorph onChange: [:evt |
		self updateContentExtent.
		self signalChange: evt].
	self layoutChanged.
! !

!AthensTextAreaMorph methodsFor: 'morph handling'!

layoutChanged
	super layoutChanged.
	textMorph
		resetTransformation;
		translateByX: 3 Y: 3;
		height: height - 6;
		width: width - 16.
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
	hasSharpBorder := true.
	self initializeTitleBar.
	self initializeEvents.
	self initializeResizeIcon.
	self height: 200.
	self width: 200.
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

AthensRectangleMorph subclass: #AthensWorldMorph
	instanceVariableNames: 'surface morphsUnderHand halos globalEventCallbacks handPosition worldState'
	package: 'Athens-Core-Morphic'!

!AthensWorldMorph methodsFor: 'accessing'!

surface
	^ surface
!

surface: aSurface
	surface := aSurface.
	self width: surface extent x.
	self height: surface extent y.
! !

!AthensWorldMorph methodsFor: 'drawing'!

drawOn: canvas
	surface clear: Color cosmoGray.
!

redraw: aRect
	worldState damageArea: aRect.
!

redrawHalosOn: canvas
	halos do: [:halo | halo redrawNow: (0@0 corner: self width @ self height) on: canvas].
!

redrawNow: rects
	< var rectsPath = smalltalk.AthensHTMLPath._segment_(smalltalk.AthensSimplePathBuilder._fromRectangles_(rects));
	
	self['@surface']._drawDuring_(function(canvas) {
		if (smalltalk.AthensGlobalMorphSettings['@instance']['@showDamageArea']) {
			// debug: show damage area
			canvas['@pathTransform']._loadAffineTransform_(smalltalk.AthensAffineTransform._new());
			canvas._setStrokePaint_(smalltalk.Color._red());
			canvas._drawShape_(rectsPath);
		}
		
		canvas._clipBy_during_(rectsPath, function() {
			self._redrawNow_on_(rects, canvas);
		});
		
		self._redrawHalosOn_(canvas);
	}); >
! !

!AthensWorldMorph methodsFor: 'events'!

delegateEvent: aSymbol with: evt
	< for (var morphIndex = 0; morphIndex < self['@morphsUnderHand'].length; morphIndex++) {
		var morph = self['@morphsUnderHand'][morphIndex];
		evt._at_put_('topMost', morphIndex == 0);
		
		if (-1 < ['mouseMove', 'mouseClick', 'mouseDown', 'mouseUp'].indexOf(aSymbol)) {
			evt._at_put_('position', morph['@globalPathTransform']._inverseTransform_(self['@handPosition']));
			// force copy of globalPosition
			evt._at_put_('globalPosition', self['@handPosition']['@x'].__at(self['@handPosition']['@y']));
		}
		
		morph['_handle' + aSymbol.charAt(0).toUpperCase() + aSymbol.slice(1) + '_'](evt);
	} >
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
	(halos notEmpty and: [halos first attachedTo ~~ self])
		ifTrue: [self addHalosTo: self].
		"ifFalse: halos already hidden"
! !

!AthensWorldMorph methodsFor: 'initialization'!

initialize
	worldState := WorldState for: self.
	AthensGlobalMorphSettings instance.	"ensure that singleton exists"
	super initialize.
	self initializeHalos.
	morphsUnderHand := {self}.
	handPosition := 0@0.
	self initializeCallbacks.
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
!

redraw: aRect
! !

!AthensDummyWorldMorph methodsFor: 'halos'!

addHalosTo: aMorph
!

hideHalos
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
	instanceVariableNames: 'needsRedraw world damageRects'
	package: 'Athens-Core-Morphic'!

!WorldState methodsFor: 'accessing'!

world: aWorld
	world := aWorld.
	self initializeRenderLoop.
! !

!WorldState methodsFor: 'drawing'!

damageArea: aRect
	< self['@damageRects'].push(aRect); 
	self['@needsRedraw'] = true; >
!

damageWorld
	< var zero = 0;
	console.log('damaging world');
	self['@damageRects'] = [];
	self._damageArea_(zero.__at(zero)._corner_(self['@world']._width().__at(self['@world']._height()))); >
! !

!WorldState methodsFor: 'initialization'!

initialize
	< self['@needsRedraw'] = false;
	self['@damageRects'] = []; >
!

initializeRenderLoop
	< setInterval(function() {
		if (self['@needsRedraw']) {
			self['@needsRedraw'] = false;
			self['@world']._redrawNow_(self['@damageRects']);
			self['@damageRects'] = [];
		}
	}, 0); >
! !

!WorldState class methodsFor: 'instance creation'!

for: aWorld
	^ self new
		world: aWorld;
		yourself
! !


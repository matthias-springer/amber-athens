Smalltalk current createPackage: 'Athens-HTML-Morphic'!
AthensHTMLCanvas subclass: #AthensHTMLMorphicCanvas
	instanceVariableNames: ''
	package: 'Athens-HTML-Morphic'!

!AthensHTMLMorphicCanvas methodsFor: 'initialization'!

surface: anHTMLSurface
	surface := anHTMLSurface.
	pathTransform := AthensHTMLMorphicTransformation on: surface.
	paintTransform := AthensAffineTransform new.
	paintMode := AthensHTMLPaintMode on: surface.
! !

AthensHTMLSurface subclass: #AthensHTMLMorphicSurface
	instanceVariableNames: 'world morphBelowHand isMouseDown'
	package: 'Athens-HTML-Morphic'!

!AthensHTMLMorphicSurface methodsFor: 'accessing'!

world
	^ world
! !

!AthensHTMLMorphicSurface methodsFor: 'events'!

bindEvents
	< var canvasJ = $(self['@canvasTag']); 
	var documentJ = $(document); 
	var events = {
		'dblclick': ['mouseDoubleClick', true, canvasJ],
		'click': ['mouseClick', true, canvasJ],
		'mousedown': ['mouseDown', true, canvasJ],
		'mousemove': ['mouseMove', true, canvasJ],
		'mouseup': ['mouseUp', true, canvasJ],
		'mousewheel DOMMouseScroll': ['mouseWheel', true, canvasJ],
		'keydown': ['keyDown', false, documentJ],
		'keyup': ['keyUp', false, documentJ],
		'keypress': ['keyPress', false, documentJ]};
		
	for (event in events) {
		var eventTarget = events[event][2];
		
		eventTarget.bind(event, function(evt) {
			var eventName = events[evt.type][0];
			self['@world']._handleEvent_with_(eventName, self['_' + eventName + 'EventDataFor_'](evt));
			if (events[event.type][1]) {
				evt.preventDefault();
			}
		});
	}
	
	canvasJ.bind('mouseenter', function(evt) {self._handleMouseEnter_(evt);});
	canvasJ.bind('mouseleave', function(evt) {self._handleMouseLeave_(evt);}); >
!

handleMouseEnter: evt
	canvasTag asJQuery attr: 'tabindex' data: 0.
	canvasTag focus.
!

handleMouseLeave: evt
	"Trigger mouse up if canvas loses mouse focus."
	isMouseDown ifTrue: [
		world handleEvent: #mouseUp with: AthensMorphicEvent new.
		isMouseDown := false].
!

keyDownEventDataFor: evt
	< var eventObject = smalltalk.AthensMorphicEvent._new();
	eventObject._at_put_('keyCode', evt.keyCode);
	return eventObject; >
!

keyPressEventDataFor: evt
	< var eventObject = smalltalk.AthensMorphicEvent._new();
	eventObject._at_put_('keyCode', evt.keyCode);
	return eventObject; >
!

keyUpEventDataFor: evt
	< var eventObject = smalltalk.AthensMorphicEvent._new();
	eventObject._at_put_('keyCode', evt.keyCode);
	return eventObject; >
!

mouseClickEventDataFor: evt
	< var eventObject = smalltalk.AthensMorphicEvent._new();
	eventObject._at_put_('ctrlKeyPressed', evt.ctrlKey);
	eventObject._at_put_('globalPosition', evt.offsetX.__at(evt.offsetY));
	return eventObject; >
!

mouseDoubleClickEventDataFor: evt
	^ AthensMorphicEvent new
!

mouseDownEventDataFor: evt
	isMouseDown := true.
	^ AthensMorphicEvent new
!

mouseMoveEventDataFor: evt
	< var eventObject = smalltalk.AthensMorphicEvent._new();
	eventObject._at_put_('globalPosition', evt.offsetX.__at(evt.offsetY));
	return eventObject; >
!

mouseUpEventDataFor: evt
	isMouseDown := false.
	^ AthensMorphicEvent new
!

mouseWheelEventDataFor: evt
	|evtData|
	evtData := AthensMorphicEvent new.
	
	"This probably works only in Chrome."
	evtData at: #wheelDelta put: evt originalEvent wheelDeltaX/30 @ (evt originalEvent wheelDeltaY/30).
	^ evtData
! !

!AthensHTMLMorphicSurface methodsFor: 'initialization'!

initialize
	super initialize.
	world := AthensWorldMorph forSurface: self.
	isMouseDown := true.
	self bindEvents.
! !

!AthensHTMLMorphicSurface methodsFor: 'private'!

newCanvas
	^ AthensHTMLMorphicCanvas on: self
! !

!AthensHTMLMorphicSurface methodsFor: 'rendering'!

renderOn: html
	super renderOn: html.
	world redraw.
! !

!AthensHTMLMorphicSurface class methodsFor: 'browser compatibility'!

browser
	^ 'generic'
!

userAgent
	((navigator at: #userAgent) includesSubString: 'Firefox')
		ifTrue: [^ 'Firefox'].
	((navigator at: #userAgent) includesSubString: 'Chrome')
		ifTrue: [^ 'Chromium'].
	((navigator at: #userAgent) includesSubString: 'Chromium')
		ifTrue: [^ 'Chromium'].
	^ 'unknown'
! !

!AthensHTMLMorphicSurface class methodsFor: 'instance creation'!

basicNew
	self subclasses do: [:class | 
		class browser == self userAgent
			ifTrue: [^ class basicNew]].
	^ super basicNew
! !

AthensHTMLMorphicSurface subclass: #AthensHTMLMorphicMozillaSurface
	instanceVariableNames: ''
	package: 'Athens-HTML-Morphic'!

!AthensHTMLMorphicMozillaSurface methodsFor: 'events'!

mouseClickEventDataFor: evt
	^ AthensMorphicEvent new
		at: #ctrlKeyPressed put: evt ctrlKey;
		at: #globalPosition put: (evt pageX - canvasTag asJQuery offset left) @ (evt pageY - canvasTag asJQuery offset top);
		yourself.
!

mouseMoveEventDataFor: evt
	^ AthensMorphicEvent new
		at: #globalPosition put: (evt pageX - canvasTag asJQuery offset left) @ (evt pageY - canvasTag asJQuery offset top);
		yourself
!

mouseWheelEventDataFor: evt
	^ AthensMorphicEvent new
		at: #wheelDelta put: 0 @ (evt originalEvent detail * -1.5);
		yourself
! !

!AthensHTMLMorphicMozillaSurface class methodsFor: 'browser compatibility'!

browser
	^ 'Firefox'
! !

AthensHTMLTransformation subclass: #AthensHTMLMorphicTransformation
	instanceVariableNames: 'relativeIdentity'
	package: 'Athens-HTML-Morphic'!

!AthensHTMLMorphicTransformation methodsFor: 'initialization'!

initialize
	relativeIdentity := AthensAffineTransform new.
	super initialize.
!

loadIdentity
	< self._loadAffineTransform_(self['@relativeIdentity']); >
!

setIdentity: aMatrix
	< self['@relativeIdentity']._loadAffineTransform_(aMatrix); >
! !


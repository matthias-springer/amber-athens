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
	canvasTag asJQuery 
		bind: 'dblclick' 
		do: [:evt | world handleEvent: #mouseDoubleClick with: (self mouseDoubleClickEventDataFor: evt). evt preventDefault].
	canvasTag asJQuery 
		bind: 'click' 
		do: [:evt | world handleEvent: #mouseClick with: (self mouseClickEventDataFor: evt). evt preventDefault].
	canvasTag asJQuery 
		bind: 'mousedown' 
		do: [:evt | isMouseDown := true. world handleEvent: #mouseDown with: (self mouseDownEventDataFor: evt). evt preventDefault].
	canvasTag asJQuery 
		bind: 'mousemove' 
		do: [:evt | world handleEvent: #mouseMove with: (self mouseMoveEventDataFor: evt). evt preventDefault].
	canvasTag asJQuery 
		bind: 'mouseup' 
		do: [:evt | world handleEvent: #mouseUp with: (self mouseUpEventDataFor: evt). evt preventDefault].
	canvasTag asJQuery
		bind: 'mousewheel DOMMouseScroll'
		do: [:evt | world handleEvent: #mouseWheel with: (self mouseWheelEventDataFor: evt). evt preventDefault].
	canvasTag asJQuery
		bind: 'mouseenter'
		do: [:evt | self handleMouseEnter: evt].
	canvasTag asJQuery
		bind: 'mouseleave'
		do: [:evt | self handleMouseLeave: evt].
	document 
		addEventListener: 'keydown'
		do: [:evt | world handleEvent: #keyDown with: (self keyDownEventDataFor: evt)]
		initiateCapture: false.
	document 
		addEventListener: 'keyup'
		do: [:evt | world handleEvent: #keyUp with: (self keyUpEventDataFor: evt)]
		initiateCapture: false.
	document 
		addEventListener: 'keypress'
		do: [:evt | world handleEvent: #keyPress with: (self keyPressEventDataFor: evt)]
		initiateCapture: false.
!

handleMouseEnter: evt
	canvasTag asJQuery attr: 'tabindex' data: 0.
	canvasTag focus.
!

handleMouseLeave: evt
	"Trigger mouse up if canvas loses mouse focus."
	isMouseDown ifTrue: [
		world handleEvent: #mouseUp with: evt.
		isMouseDown := false].
!

keyDownEventDataFor: evt
	^ AthensMorphicEvent new
		at: #keyCode put: evt keyCode;
		yourself
!

keyPressEventDataFor: evt
	^ AthensMorphicEvent new
		at: #keyCode put: evt keyCode;
		yourself
!

keyUpEventDataFor: evt
	^ AthensMorphicEvent new
		at: #keyCode put: evt keyCode;
		yourself
!

mouseClickEventDataFor: evt
	^ AthensMorphicEvent new
		at: #ctrlKeyPressed put: evt ctrlKey;
		at: #globalPosition put: evt offsetX @ evt offsetY;
		yourself.
!

mouseDoubleClickEventDataFor: evt
	^ AthensMorphicEvent new
!

mouseDownEventDataFor: evt
	^ AthensMorphicEvent new
!

mouseMoveEventDataFor: evt
	^ AthensMorphicEvent new
		at: #globalPosition put: evt offsetX @ evt offsetY;
		yourself
!

mouseUpEventDataFor: evt
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
	self loadAffineTransform: relativeIdentity.
!

setIdentity: aMatrix
	relativeIdentity loadAffineTransform: aMatrix.
! !


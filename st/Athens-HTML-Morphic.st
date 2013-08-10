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
		do: [:evt | world handleEvent: #mouseDoubleClick with: evt. evt preventDefault].
	canvasTag asJQuery 
		bind: 'click' 
		do: [:evt | world handleEvent: #mouseClick with: evt. evt preventDefault].
	canvasTag asJQuery 
		bind: 'mousedown' 
		do: [:evt | isMouseDown := true. world handleEvent: #mouseDown with: evt. evt preventDefault].
	canvasTag asJQuery 
		bind: 'mousemove' 
		do: [:evt | world handleEvent: #mouseMove with: evt. evt preventDefault].
	canvasTag asJQuery 
		bind: 'mouseup' 
		do: [:evt | world handleEvent: #mouseUp with: evt. evt preventDefault].
	canvasTag asJQuery
		bind: 'mousewheel DOMMouseScroll'
		do: [:evt | world handleEvent: #mouseWheel with: (self wheelDeltaFrom: evt). evt preventDefault].
	canvasTag asJQuery
		bind: 'mouseleave'
		do: [:evt | self handleMouseLeave: evt].
!

handleMouseLeave: evt
	"Trigger mouse up if canvas loses mouse focus."
	isMouseDown ifTrue: [
		world handleEvent: #mouseUp with: evt.
		isMouseDown := false].
!

wheelDeltaFrom: evt
	"This probably works only in Chrome."
	(evt originalEvent at: #wheelDeltaX)
		ifNotNil: [^ evt originalEvent wheelDeltaX/30 @ (evt originalEvent wheelDeltaY/30)].
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

setIdentity
	relativeIdentity loadAffineTransform: self.
! !


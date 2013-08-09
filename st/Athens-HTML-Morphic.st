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
	instanceVariableNames: 'world morphBelowHand'
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
		do: [:evt | world handleEvent: #mouseDown with: evt. evt preventDefault].
	canvasTag asJQuery 
		bind: 'mousemove' 
		do: [:evt | world handleEvent: #mouseMove with: evt. evt preventDefault].
	canvasTag asJQuery 
		bind: 'mouseup' 
		do: [:evt | world handleEvent: #mouseUp with: evt. evt preventDefault].
! !

!AthensHTMLMorphicSurface methodsFor: 'initialization'!

initialize
	super initialize.
	world := AthensWorldMorph forSurface: self.
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


Smalltalk current createPackage: 'Athens-HTML-Morphic'!
AthensHTMLCanvas subclass: #AthensHTMLMorphicCanvas
	instanceVariableNames: ''
	package: 'Athens-HTML-Morphic'!

!AthensHTMLMorphicCanvas methodsFor: 'initialization'!

surface: anHTMLSurface
	surface := anHTMLSurface.
	pathTransform := AthensHTMLMorphicMatrix on: surface.
	paintTransform := AthensHTMLMorphicMatrix on: surface.
	paintMode := AthensHTMLPaintMode on: surface.
! !

AthensHTMLMatrix subclass: #AthensHTMLMorphicMatrix
	instanceVariableNames: 'relativeIdentity'
	package: 'Athens-HTML-Morphic'!

!AthensHTMLMorphicMatrix methodsFor: 'initialization'!

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
		bind: 'click' 
		do: [:evt | morphBelowHand handleMouseClick: evt].
	canvasTag asJQuery 
		bind: 'mousedown' 
		do: [:evt | morphBelowHand handleMouseDown: evt].
	canvasTag asJQuery 
		bind: 'mousemove' 
		do: [:evt | morphBelowHand := world morphAtPosition: evt offsetX @ evt offsetY.
			morphBelowHand handleMouseMove: evt].
	canvasTag asJQuery 
		bind: 'mouseup' 
		do: [:evt | morphBelowHand handleMouseUp: evt].
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


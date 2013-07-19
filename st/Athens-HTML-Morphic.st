Smalltalk current createPackage: 'Athens-HTML-Morphic'!
AthensHTMLCanvas subclass: #AthensHTMLMorphicCanvas
	instanceVariableNames: 'implicitTransformation'
	package: 'Athens-HTML-Morphic'!

!AthensHTMLMorphicCanvas methodsFor: 'accessing'!

implicitTransformation: aMatrix
	implicitTransformation := aMatrix.
! !

!AthensHTMLMorphicCanvas methodsFor: 'drawing'!

draw
	"Apply implicit transformation, draw scene, undo implicit transformation."
	
	|result matrixBefore|
	matrixBefore := pathTransform copy.
	pathTransform loadAffineTransform: implicitTransformation.
	pathTransform multiplyBy: matrixBefore.
	[result := shape paintFillsUsing: paint on: self]
		ensure: [pathTransform loadAffineTransform: matrixBefore].
	^ result
! !

!AthensHTMLMorphicCanvas methodsFor: 'initialization'!

initialize
	super initialize.
	implicitTransformation := AthensAffineTransform new.
! !

AthensHTMLSurface subclass: #AthensHTMLMorphicSurface
	instanceVariableNames: 'world'
	package: 'Athens-HTML-Morphic'!

!AthensHTMLMorphicSurface methodsFor: 'accessing'!

world
	^ world
! !

!AthensHTMLMorphicSurface methodsFor: 'events'!

onMouseDown: aBlock
	canvasTag asJQuery bind: 'mousedown' do: aBlock.
!

onMouseMove: aBlock
	canvasTag asJQuery bind: 'mousemove' do: aBlock.
!

onMouseUp: aBlock
	canvasTag asJQuery bind: 'mouseup' do: aBlock.
! !

!AthensHTMLMorphicSurface methodsFor: 'initialization'!

initialize
	super initialize.
	world := AthensWorldMorph forSurface: self.
! !

!AthensHTMLMorphicSurface methodsFor: 'private'!

newCanvas
	^ AthensHTMLMorphicCanvas on: self
! !

!AthensHTMLMorphicSurface methodsFor: 'rendering'!

renderOn: html
	super renderOn: html.
	world drawAll.
! !


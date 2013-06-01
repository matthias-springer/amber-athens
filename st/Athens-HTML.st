Smalltalk current createPackage: 'Athens-HTML'!
AthensCanvas subclass: #AthensHTMLCanvas
	instanceVariableNames: 'pathTransform paintTransform currentClipRect'
	package: 'Athens-HTML'!

!AthensHTMLCanvas methodsFor: 'accessing'!

paintTransform
	^ paintTransform
!

pathTransform
	^ pathTransform
!

surface: anHTMLSurface
	surface := anHTMLSurface.
	pathTransform := AthensHTMLMatrix on: surface.
	paintTransform := AthensHTMLMatrix on: surface.
! !

!AthensHTMLCanvas methodsFor: 'private'!

newPath
	surface context2D beginPath.
!

rectangleX: x y: y width: aWidth height: aHeight
	surface context2D fillRect: x a: y a: aWidth a: aHeight.
!

setSourceR: red g: green b: blue a: alpha
	surface context2D fillStyle: 'rgba(', red asString, ', ', green asString, ', ', blue asString, ', ', alpha asString, ')'.
! !

!AthensHTMLCanvas class methodsFor: 'instance creation'!

on: anHTMLSurface
	^ self basicNew
		surface: anHTMLSurface;
		initialize;
		yourself
! !

AthensSurface subclass: #AthensHTMLSurface
	instanceVariableNames: 'extent canvasTag context2D athensCanvas'
	package: 'Athens-HTML'!

!AthensHTMLSurface methodsFor: 'accessing'!

canvasTag
	^ canvasTag
!

canvasTag: aTagBrush
	canvasTag := aTagBrush
!

clear
	self clear: nil.
!

clear: clearPaint
	context2D clearRect: 0 a: 0 a: self width a: self height.
	clearPaint ifNotNil: [
		self drawDuring: [:canvas |
			canvas 
				setPaint: clearPaint;
				setShape: (0@0 corner: (self width) @ (self height));
				draw]].
!

context2D
	^ context2D
!

extent
	^ extent
!

extent: anExtent
	extent := anExtent.
!

height
	^ extent y
!

width
	^ extent x
! !

!AthensHTMLSurface methodsFor: 'creation'!

createPath: aPathCreatingBlock
	^ AthensHTMLPathBuilder on: self with: aPathCreatingBlock
! !

!AthensHTMLSurface methodsFor: 'drawing'!

attemptToRecurseDrawing
	^ self
!

drawDuring: aBlock

	"You may draw on receiver only when inside a block and only using provided canvas object.
	This ensures releasing system resources used after finishing drawing"

	currentCanvas ifNotNil: [self attemptToRecurseDrawing].
	[currentCanvas := athensCanvas.
		aBlock value: currentCanvas.
	] ensure: [currentCanvas := nil].
! !

!AthensHTMLSurface methodsFor: 'initializing'!

initialize
	|html|
	html := HTMLCanvas onJQuery: '#workspace' asJQuery.
	'#workspace' asJQuery empty.
	canvasTag := html canvas.
	canvasTag height: self height.
	canvasTag width: self width.
	canvasTag asJQuery css: 'background-color' with: '#000000'.
	context2D := canvasTag element getContext: '2d'.
	athensCanvas := self newCanvas.
! !

!AthensHTMLSurface methodsFor: 'paints'!

createSolidColorPaint: aColor 
	^ AthensHTMLSolidPaint new color: aColor
!

createStrokePaintFor: aPaint
	^ AthensHTMLStrokePaint new fillPaint: aPaint
! !

!AthensHTMLSurface methodsFor: 'private'!

newCanvas
	^ AthensHTMLCanvas on: self
! !

!AthensHTMLSurface class methodsFor: 'instance creation'!

extent: anExtent
	^ self basicNew
		extent: anExtent;
		initialize;
		yourself
! !


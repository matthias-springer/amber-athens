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

!AthensHTMLSurface methodsFor: 'adding'!

appendToBrush: aTagBrush
	self appendToJQuery: aTagBrush asJQuery
!

appendToJQuery: aJQuery
	self renderOn: (HTMLCanvas onJQuery: aJQuery)
! !

!AthensHTMLSurface methodsFor: 'creation'!

createPath: aPathCreatingBlock
	^ AthensHTMLPathBuilder on: self with: aPathCreatingBlock
! !

!AthensHTMLSurface methodsFor: 'drawing'!

drawDuring: aBlock

	"You may draw on receiver only when inside a block and only using provided canvas object.
	This ensures releasing system resources used after finishing drawing"

	[currentCanvas := athensCanvas.
		self setDefaults.
		aBlock value: currentCanvas.
	] ensure: [currentCanvas := nil].
! !

!AthensHTMLSurface methodsFor: 'paints'!

createLinearGradient: aColorRamp start: aStartPoint stop: aStopPoint
	^ AthensHTMLGradientPaint 
		createLinearGradient: aColorRamp 
		start: aStartPoint 
		stop: aStopPoint
		context: context2D
!

createRadialGradient: colorRamp center: aCenter radius: aRadius focalPoint: fp
	^AthensHTMLGradientPaint	
		radialBetween: fp
		extending: 0
		and: aCenter
		extending: aRadius
		withColorRamp: colorRamp
		context: context2D
!

createSolidColorPaint: aColor 
	^ AthensHTMLSolidPaint new 
		color: aColor;
		context: context2D;
		yourself
!

createStrokePaintFor: aPaint
	^ AthensHTMLStrokePaint new 
		fillPaint: aPaint;
		context: context2D;
		yourself
! !

!AthensHTMLSurface methodsFor: 'private'!

newCanvas
	^ AthensHTMLCanvas on: self
!

setDefaults
	currentCanvas pathTransform loadIdentity.
	currentCanvas paintTransform loadIdentity.
! !

!AthensHTMLSurface methodsFor: 'rendering'!

renderOn: html
	canvasTag := html canvas.
	canvasTag height: self height.
	canvasTag width: self width.
	context2D := canvasTag element getContext: '2d'.
	athensCanvas := self newCanvas.
! !

!AthensHTMLSurface class methodsFor: 'instance creation'!

extent: anExtent
	^ self basicNew
		extent: anExtent;
		initialize;
		yourself
! !


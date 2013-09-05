Smalltalk current createPackage: 'Athens-HTML'!
AthensCanvas subclass: #AthensHTMLCanvas
	instanceVariableNames: 'context2D pathTransform paintTransform currentClipRect font'
	package: 'Athens-HTML'!

!AthensHTMLCanvas methodsFor: 'accessing'!

context2D
	^ context2D
!

context2D: aContext
	context2D := aContext.
!

paintTransform
	^ paintTransform
!

pathTransform
	^ pathTransform
!

setFont: aFont
	font := aFont.
!

surface: anHTMLSurface
	surface := anHTMLSurface.
	pathTransform := AthensHTMLTransformation on: surface.
	paintTransform := AthensAffineTransform new.
	paintMode := AthensHTMLPaintMode on: surface.
! !

!AthensHTMLCanvas methodsFor: 'clipping'!

clipBy: aShape during: aBlock
	context2D push.
	context2D beginPath.
	aShape drawOn: self.
	context2D clip.
	context2D beginPath.
	aBlock ensure: [context2D pop].
! !

!AthensHTMLCanvas methodsFor: 'creation'!

createPath: aPathCreatingBlock
	^ AthensHTMLPath segment: (AthensSimplePathBuilder createPath: aPathCreatingBlock)
! !

!AthensHTMLCanvas methodsFor: 'drawing'!

drawString: aString
	context2D font: font asHTMLString.
	self drawShape: aString.
!

drawString: aString from: start to: end
	^ self drawString: (aString copyFrom: start to: end)
!

measureStringWidth: aString
	context2D font: font asHTMLString.
	^ context2D measureStringWidth: aString
! !

!AthensHTMLCanvas methodsFor: 'private'!

newPath
	< self['@surface']['@context2D'].beginPath(); >
! !

!AthensHTMLCanvas class methodsFor: 'instance creation'!

on: anHTMLSurface
	^ self basicNew
		surface: anHTMLSurface;
		context2D: anHTMLSurface context2D;
		initialize;
		yourself
! !

AthensPaintMode subclass: #AthensHTMLPaintMode
	instanceVariableNames: 'context2D surface'
	package: 'Athens-HTML'!

!AthensHTMLPaintMode methodsFor: 'accessing'!

availableModes
	^ #(atop darken destAtop destIn destOut destOver in lighten out over xor)
!

surface: aSurface
	surface := aSurface.
	context2D := aSurface context2D.
! !

!AthensHTMLPaintMode methodsFor: 'convenience'!

restoreAfter: aBlock
	|previous|
	previous := context2D globalCompositeOperation.
	aBlock ensure: [context2D globalCompositeOperation: previous].
! !

!AthensHTMLPaintMode methodsFor: 'modes'!

atop
	context2D globalCompositeOperation: 'source-atop'.
!

darken
	context2D globalCompositeOperation: 'darker'.
!

destAtop
	context2D globalCompositeOperation: 'destination-atop'.
!

destIn
	context2D globalCompositeOperation: 'destination-in'.
!

destOut
	context2D globalCompositeOperation: 'destination-out'.
!

destOver
	context2D globalCompositeOperation: 'destination-over'.
!

in
	context2D globalCompositeOperation: 'source-in'.
!

lighten
	context2D globalCompositeOperation: 'lighter'.
!

out
	context2D globalCompositeOperation: 'source-out'.
!

over
	context2D globalCompositeOperation: 'source-over'.
!

xor
	context2D globalCompositeOperation: 'xor'.
! !

!AthensHTMLPaintMode class methodsFor: 'instance creation'!

on: aSurface
	^ self new
		surface: aSurface;
		yourself
! !

AthensSurface subclass: #AthensHTMLSurface
	instanceVariableNames: 'extent canvasTag context2D athensCanvas boundsRect transparentColor'
	package: 'Athens-HTML'!

!AthensHTMLSurface methodsFor: 'accessing'!

canvasTag
	^ canvasTag
!

canvasTag: aTagBrush
	canvasTag := aTagBrush
!

context2D
	^ context2D
!

extent
	^ extent
!

extent: anExtent
	extent := anExtent.
	boundsRect := 0@0 corner: anExtent.
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

!AthensHTMLSurface methodsFor: 'converting'!

asAthensPaintOn: aCanvas
	^ AthensHTMLPatternSurfacePaint forSurface: self
! !

!AthensHTMLSurface methodsFor: 'creation'!

createPath: aPathCreatingBlock
	^ AthensHTMLPath segment: (AthensSimplePathBuilder createPath: aPathCreatingBlock)
! !

!AthensHTMLSurface methodsFor: 'drawing'!

clear
	self clear: transparentColor.
!

clear: clearPaint
	|canvas|
	canvas := currentCanvas.
	canvas pathTransform restoreAfter: [
		canvas pathTransform loadIdentity.
		canvas paintMode restoreAfter: [
			context2D globalCompositeOperation: 'source-over'.
			context2D clearRect: (0@0 corner: extent).
			canvas setPaint: clearPaint.
			canvas drawShape: boundsRect]].
!

drawDuring: aBlock
	currentCanvas := athensCanvas.
	self setDefaults.
	[aBlock value: currentCanvas] ensure: [currentCanvas := nil].
! !

!AthensHTMLSurface methodsFor: 'initialization'!

initialize
	transparentColor := Color transparent.
	super initialize.
	self initializeCanvas.
	canvasTag height: self height.
	canvasTag width: self width.
	context2D := canvasTag getContext: '2d'.
	athensCanvas := self newCanvas.
!

initializeCanvas
	< self['@canvasTag'] = document.createElement('canvas'); >
! !

!AthensHTMLSurface methodsFor: 'paints'!

createBitmapPaint: aBitmap
	^ AthensHTMLBitmapPaint fromImage: aBitmap
!

createBitmapPaint: aBitmap afterLoading: aBlock
	^ AthensHTMLBitmapPaint fromImage: aBitmap afterLoading: aBlock
!

createLinearGradient: aColorRamp start: aStartPoint stop: aStopPoint
	^ AthensHTMLGradientPaint 
		createLinearGradient: aColorRamp 
		start: aStartPoint 
		stop: aStopPoint
!

createRadialGradient: colorRamp center: aCenter radius: aRadius focalPoint: fp
	^AthensHTMLGradientPaint	
		radialBetween: fp
		extending: 0
		and: aCenter
		extending: aRadius
		withColorRamp: colorRamp
!

createSolidColorPaint: aColor 
	^ AthensHTMLSolidPaint new 
		color: aColor;
		yourself
!

createStrokePaintFor: aPaint
	^ AthensHTMLStrokePaint new 
		fillPaint: aPaint;
		yourself
! !

!AthensHTMLSurface methodsFor: 'private'!

newCanvas
	^ AthensHTMLCanvas on: self
!

setDefaults
	currentCanvas paintMode over.
	currentCanvas pathTransform loadIdentity.
	currentCanvas paintTransform loadIdentity.
	
	context2D lineJoin: 'miter'.
	context2D miterLimit: 10.
	context2D lineCap: 'butt'.
! !

!AthensHTMLSurface methodsFor: 'rendering'!

renderOn: html
	html with: (TagBrush fromJQuery: canvasTag asJQuery canvas: html).
! !

!AthensHTMLSurface class methodsFor: 'instance creation'!

extent: anExtent
	^ self basicNew
		extent: anExtent;
		initialize;
		yourself
! !

!String methodsFor: '*Athens-HTML'!

paintFillsUsing: aPaint on: anAthensCanvas
	aPaint drawString: self on: anAthensCanvas.
! !


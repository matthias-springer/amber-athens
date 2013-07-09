Smalltalk current createPackage: 'Athens-HTML'!
AthensCanvas subclass: #AthensHTMLCanvas
	instanceVariableNames: 'pathTransform paintTransform currentClipRect font'
	package: 'Athens-HTML'!

!AthensHTMLCanvas methodsFor: 'accessing'!

context2D
	^ surface context2D
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
	pathTransform := AthensHTMLMatrix on: surface.
	paintTransform := AthensHTMLMatrix on: surface.
	paintMode := AthensHTMLPaintMode on: surface.
! !

!AthensHTMLCanvas methodsFor: 'clipping'!

clipBy: aRectangle during: aBlock
	self context2D save.
	self context2D beginPath.
	pathTransform set.
	self context2D rect: aRectangle left a: aRectangle top a: aRectangle width a: aRectangle height.
	self context2D clip.
	[aBlock value] ensure: [
		self context2D restore.].
! !

!AthensHTMLCanvas methodsFor: 'drawing'!

drawString: aString
	surface context2D font: font asHTMLString.
	paint drawString: aString on: self.
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

AthensPaintMode subclass: #AthensHTMLPaintMode
	instanceVariableNames: 'surface'
	package: 'Athens-HTML'!

!AthensHTMLPaintMode methodsFor: 'accessing'!

availableModes
	^ #(atop darken destAtop destIn destOut destOver in lighten out over xor)
!

surface: aSurface
	surface := aSurface.
! !

!AthensHTMLPaintMode methodsFor: 'convenience'!

restoreAfter: aBlock
	|op|
	op := surface context2D globalCompositeOperation.
	aBlock ensure: [surface context2D globalCompositeOperation: op].
! !

!AthensHTMLPaintMode methodsFor: 'modes'!

atop
	surface context2D globalCompositeOperation: 'source-atop'.
!

darken
	surface context2D globalCompositeOperation: 'darker'.
!

destAtop
	surface context2D globalCompositeOperation: 'destination-atop'.
!

destIn
	surface context2D globalCompositeOperation: 'destination-in'.
!

destOut
	surface context2D globalCompositeOperation: 'destination-out'.
!

destOver
	surface context2D globalCompositeOperation: 'destination-over'.
!

in
	surface context2D globalCompositeOperation: 'source-in'.
!

lighten
	surface context2D globalCompositeOperation: 'lighter'.
!

out
	surface context2D globalCompositeOperation: 'source-out'.
!

over
	surface context2D globalCompositeOperation: 'source-over'.
!

xor
	surface context2D globalCompositeOperation: 'xor'.
! !

!AthensHTMLPaintMode class methodsFor: 'instance creation'!

on: aSurface
	^ self new
		surface: aSurface;
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
	self clear: Color transparent.
!

clear: clearPaint
	currentCanvas pathTransform restoreAfter: [
		currentCanvas pathTransform loadIdentity.
		currentCanvas paintMode restoreAfter: [
			currentCanvas paintMode over.
			currentCanvas context2D clearRect: 0 a: 0 a: self width a: self height.
			currentCanvas 
				setPaint: clearPaint;
				drawShape: (0@0 corner: (self width) @ (self height)).
        ]].
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

!AthensHTMLSurface methodsFor: 'converting'!

asAthensPaintOn: aCanvas
	^ AthensHTMLPatternSurfacePaint forSurface: self
! !

!AthensHTMLSurface methodsFor: 'creation'!

createPath: aPathCreatingBlock
	^ AthensHTMLPath segment: (AthensSimplePathBuilder createPath: aPathCreatingBlock)
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

createBitmapPaint: aBitmap
	^ AthensHTMLBitmapPaint forBitmap: aBitmap
!

createBitmapPaint: aBitmap afterLoading: aBlock
	^ AthensHTMLBitmapPaint forBitmap: aBitmap afterLoading: aBlock
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
	
	currentCanvas context2D lineJoin: 'miter'.
	"changing meter limit not supported by Athens"
	currentCanvas context2D miterLimit: 10.
	currentCanvas context2D lineCap: 'butt'.
! !

!AthensHTMLSurface methodsFor: 'rendering'!

initialize
	super initialize.
	self initializeCanvas.
	canvasTag height: self height.
	canvasTag width: self width.
	context2D := canvasTag getContext: '2d'.
	athensCanvas := self newCanvas.
!

initializeCanvas
	< self['@canvasTag'] = document.createElement('canvas'); >
!

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


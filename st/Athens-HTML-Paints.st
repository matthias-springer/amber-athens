Smalltalk current createPackage: 'Athens-HTML-Paints'!
AthensPaint subclass: #AthensHTMLPaint
	instanceVariableNames: 'fillStyle'
	package: 'Athens-HTML-Paints'!

!AthensHTMLPaint methodsFor: 'accessing'!

fillStyle
	^ fillStyle
! !

!AthensHTMLPaint methodsFor: 'converting'!

asAthensPaintOn: anAthensCanvas	
	^ self
! !

!AthensHTMLPaint methodsFor: 'drawing'!

drawString: aString on: anAthensCanvas
	|context2D|
	context2D := anAthensCanvas context2D.
	self preparePaintFor: context2D.
	context2D beginPath.
	"TODO: apply paint transform, but how?"
	context2D fillStyle: fillStyle.
	context2D fillText: aString X: 0 Y: 0.
!

fillPath: aPath on: anAthensCanvas
	|context2D|
	context2D := anAthensCanvas context2D.
	self preparePaintFor: context2D.
	context2D beginPath.
	aPath drawOn: anAthensCanvas.
	context2D push.
	anAthensCanvas pathTransform multiplyBy: anAthensCanvas paintTransform.
	context2D fillStyle: fillStyle.
	context2D fill.
	context2D pop.
!

fillRectangle: rect on: anAthensCanvas
	|context2D|
	context2D := anAthensCanvas context2D.
	self preparePaintFor: context2D.
	context2D beginPath.
	context2D rect: rect.
	context2D push.
	anAthensCanvas pathTransform multiplyBy: anAthensCanvas paintTransform.
	context2D fillStyle: fillStyle.
	context2D fill.
	context2D pop.
!

preparePaintFor: context2D
	self subclassResponsibility.
! !

AthensHTMLPaint subclass: #AthensHTMLGradientPaint
	instanceVariableNames: 'start stop innerRadius outerRadius colorRamp'
	package: 'Athens-HTML-Paints'!

!AthensHTMLGradientPaint methodsFor: 'accessing'!

colorRamp: aColorRamp
	colorRamp := aColorRamp.
!

innerRadius: aNumber
	innerRadius := aNumber.
!

outerRadius: aNumber
	outerRadius := aNumber.
!

start: aPoint
	start := aPoint.
!

stop: aPoint
	stop := aPoint.
! !

!AthensHTMLGradientPaint methodsFor: 'drawing'!

preparePaintFor: context2D
	innerRadius == nil
		ifTrue: [fillStyle := context2D createLinearGradientFrom: start to: stop]
		ifFalse: [fillStyle := context2D createRadialGradientFrom: start with: innerRadius to: stop with: outerRadius].
		
	colorRamp keysAndValuesDo: [:pos :color |
		fillStyle addColorStopAt: pos color: color rgbaString].
! !

!AthensHTMLGradientPaint class methodsFor: 'instance creation'!

createLinearGradient: aColorRamp start: aStartPoint stop: aStopPoint
	^ self basicNew
		start: aStartPoint;
		stop: aStopPoint;
		initialize;
		colorRamp: aColorRamp;
		yourself
!

radialBetween: origin extending: innerRadius and: outerOrigin  extending: outerRadius withColorRamp: aColorRamp
	^ self basicNew
		start: origin;
		stop: outerOrigin;
		innerRadius: innerRadius;
		outerRadius: outerRadius;
		initialize;
		colorRamp: aColorRamp;
		yourself
! !

AthensHTMLPaint subclass: #AthensHTMLPatternPaint
	instanceVariableNames: 'repeatMode anAthensCanvas patternSource'
	package: 'Athens-HTML-Paints'!

!AthensHTMLPatternPaint methodsFor: 'drawing'!

noRepeat
	repeatMode := 'no-repeat'.
!

preparePaintFor: context2D
	fillStyle := context2D createPattern: patternSource repeat: repeatMode.
!

repeat
	repeatMode := 'repeat'.
! !

!AthensHTMLPatternPaint methodsFor: 'initialize-release'!

initialize
	repeatMode := 'no-repeat'.
! !

AthensHTMLPatternPaint subclass: #AthensHTMLBitmapPaint
	instanceVariableNames: ''
	package: 'Athens-HTML-Paints'!

!AthensHTMLBitmapPaint methodsFor: 'accessing'!

bitmap: aBitmap
	patternSource := aBitmap.
!

height
	^ patternSource height
!

loadingCallback: aBlock
	patternSource complete
		ifTrue: [aBlock value: self]
		ifFalse: [patternSource onLoad: [aBlock value: self]].
!

width
	^ patternSource width
! !

!AthensHTMLBitmapPaint class methodsFor: 'instance creation'!

fromImage: aBitmap
	^ self new
		bitmap: aBitmap;
		yourself
!

fromImage: aBitmap afterLoading: aBlock
	^ self new
		bitmap: aBitmap;
		loadingCallback: aBlock;
		yourself
! !

AthensHTMLPatternPaint subclass: #AthensHTMLPatternSurfacePaint
	instanceVariableNames: 'surface'
	package: 'Athens-HTML-Paints'!

!AthensHTMLPatternSurfacePaint methodsFor: 'accessing'!

surface: aSurface
	patternSource := aSurface canvasTag.
! !

!AthensHTMLPatternSurfacePaint class methodsFor: 'instance creation'!

forSurface: aSurface
	^ self new
		surface: aSurface;
		yourself
! !

AthensHTMLPaint subclass: #AthensHTMLSolidPaint
	instanceVariableNames: 'color'
	package: 'Athens-HTML-Paints'!

!AthensHTMLSolidPaint methodsFor: 'accessing'!

color: aColor
	fillStyle := aColor rgbaString.
! !

!AthensHTMLSolidPaint methodsFor: 'drawing'!

drawString: aString on: anAthensCanvas
	anAthensCanvas context2D
		fillStyle: fillStyle;
		fillText: aString X: 0 Y: 0.
!

fillPath: aPath on: anAthensCanvas
	|context2D|
	context2D := anAthensCanvas context2D.
	context2D fillStyle: fillStyle.
	aPath drawOn: anAthensCanvas.
	context2D fill.
!

fillRectangle: aRect on: anAthensCanvas
	anAthensCanvas context2D
		fillStyle: fillStyle;
		fillRect: aRect.
!

preparePaintFor: context2D
	"nothing to do"
! !

AthensStrokePaint subclass: #AthensHTMLStrokePaint
	instanceVariableNames: 'dashOffset dashLengths'
	package: 'Athens-HTML-Paints'!

!AthensHTMLStrokePaint methodsFor: 'accessing'!

dashes: anAlternateCollectionOfLenghts offset: anOffset
	dashLengths := anAlternateCollectionOfLenghts.
	dashOffset := anOffset.
! !

!AthensHTMLStrokePaint methodsFor: 'drawing'!

fillPath: aPath on: anAthensCanvas
	anAthensCanvas context2D
		strokeStyle: fillPaint fillStyle;
		lineWidth: width;
		lineJoin: joinStyle;
		lineCap: capStyle;
		lineDash: dashLengths;
		lineDashOffset: dashOffset.
	aPath drawOn: anAthensCanvas.
	anAthensCanvas context2D stroke.
!

fillRectangle: aRect on: anAthensCanvas
	anAthensCanvas context2D
		strokeStyle: fillPaint fillStyle;
		lineWidth: width;
		lineJoin: joinStyle;
		lineCap: capStyle;
		lineDash: dashLengths;
		lineDashOffset: dashOffset;
		strokeRect: aRect.
! !

!AthensHTMLStrokePaint methodsFor: 'initialize-release'!

initialize
	super initialize.
	dashLengths := OrderedCollection new.
	width := 1.
	capStyle := joinStyle := nil.
! !

!AthensHTMLStrokePaint methodsFor: 'setting cap styles'!

capButt
	capStyle := 'butt'.
!

capRound
	capStyle := 'round'.
!

capSquare
	capStyle := 'square'.
! !

!AthensHTMLStrokePaint methodsFor: 'setting join styles'!

joinBevel
	joinStyle := 'bevel'.
!

joinMiter
	joinStyle := 'miter'.
!

joinRound
	joinStyle := 'round'.
! !


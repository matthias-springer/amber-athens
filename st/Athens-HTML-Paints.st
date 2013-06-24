Smalltalk current createPackage: 'Athens-HTML-Paints'!
Object subclass: #AthensHTMLGradientPaint
	instanceVariableNames: 'start stop gradient innerRadius outerRadius colorRamp'
	package: 'Athens-HTML-Paints'!

!AthensHTMLGradientPaint methodsFor: 'accessing'!

colorRamp: aColorRamp
	colorRamp := aColorRamp.
!

gradient
	^ gradient
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

!AthensHTMLGradientPaint methodsFor: 'converting'!

asAthensPaintOn: anAthensCanvas	
	^ self
! !

!AthensHTMLGradientPaint methodsFor: 'drawing'!

createGradient: context2D
	innerRadius 
		ifNil: [gradient := context2D createLinearGradient: start x a: start y a: stop x a: stop y]
		ifNotNil: [gradient := context2D createRadialGradient: start x a: start y a: innerRadius a: stop x a: stop y a: outerRadius].
!

fillRectangle: aRect on: anAthensCanvas
	|context2D|
	context2D := anAthensCanvas context2D.
	self createGradient: context2D.
	self populateRamp: colorRamp.
	context2D beginPath.
	anAthensCanvas pathTransform set.
	context2D rect: aRect left a: aRect top a: aRect width a: aRect height.
	anAthensCanvas paintTransform apply.
	context2D fillStyle: gradient.
	context2D fill.
!

populateRamp: aRamp
	aRamp do: [:assoc |
		gradient addColorStop: assoc key a: assoc value rgbaString].
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

Object subclass: #AthensHTMLPatternPaint
	instanceVariableNames: 'repeatMode'
	package: 'Athens-HTML-Paints'!

!AthensHTMLPatternPaint methodsFor: 'converting'!

asAthensPaintOn: anAthensCanvas	
	^ self
! !

!AthensHTMLPatternPaint methodsFor: 'drawing'!

fillRectangle: aRect on: anAthensCanvas
	|context2D|
	context2D := anAthensCanvas context2D.
	context2D beginPath.
	anAthensCanvas pathTransform set.
	context2D rect: aRect left a: aRect top a: aRect width a: aRect height.
	anAthensCanvas paintTransform apply.
	context2D fillStyle: (context2D createPattern: self patternSource a: repeatMode).
	context2D fill.
!

noRepeat
	repeatMode := 'no-repeat'.
!

patternSource
	self subclassResponsibility.
!

repeat
	repeatMode := 'repeat'.
! !

!AthensHTMLPatternPaint methodsFor: 'initialize-release'!

initialize
	self noRepeat.
! !

AthensHTMLPatternPaint subclass: #AthensHTMLBitmapPaint
	instanceVariableNames: 'bitmap'
	package: 'Athens-HTML-Paints'!

!AthensHTMLBitmapPaint methodsFor: 'accessing'!

bitmap: aBitmap
	bitmap := aBitmap.
! !

!AthensHTMLBitmapPaint methodsFor: 'drawing'!

patternSource
	bitmap image complete
		ifFalse: [self error: 'image not preloaded.'].
	^ bitmap image
! !

!AthensHTMLBitmapPaint class methodsFor: 'instance creation'!

forBitmap: aBitmap
	^ self new
		bitmap: aBitmap;
		yourself
! !

AthensHTMLPatternPaint subclass: #AthensHTMLPatternSurfacePaint
	instanceVariableNames: 'surface'
	package: 'Athens-HTML-Paints'!

!AthensHTMLPatternSurfacePaint methodsFor: 'accessing'!

patternSource
	^ surface canvasTag
!

surface: aSurface
	surface := aSurface.
! !

!AthensHTMLPatternSurfacePaint class methodsFor: 'instance creation'!

forSurface: aSurface
	^ self new
		surface: aSurface;
		yourself
! !

AthensPaint subclass: #AthensHTMLSolidPaint
	instanceVariableNames: 'color'
	package: 'Athens-HTML-Paints'!

!AthensHTMLSolidPaint methodsFor: 'accessing'!

color: aColor
	color := aColor
! !

!AthensHTMLSolidPaint methodsFor: 'drawing'!

fillPath: aPath on: anAthensCanvas
	|context2D|
	context2D := anAthensCanvas context2D.
	anAthensCanvas pathTransform set.
	context2D fillStyle: self rgbaString.
	aPath draw.
	context2D fill.
!

fillRectangle: aRect on: anAthensCanvas
	|context2D|
	context2D := anAthensCanvas context2D.
	anAthensCanvas pathTransform set.
	context2D fillStyle: self rgbaString.
	context2D fillRect: aRect left a: aRect top a: aRect width a: aRect height.
!

rgbaString
	^ color rgbaString
! !

AthensStrokePaint subclass: #AthensHTMLStrokePaint
	instanceVariableNames: 'dashLenghts dashOffset'
	package: 'Athens-HTML-Paints'!

!AthensHTMLStrokePaint methodsFor: 'accessing'!

dashes: anAlternateCollectionOfLenghts offset: anOffset
	dashLenghts := anAlternateCollectionOfLenghts.
	dashOffset := anOffset.
! !

!AthensHTMLStrokePaint methodsFor: 'drawing'!

fillPath: aPath on: anAthensCanvas
	|context2D|
	context2D := anAthensCanvas context2D.
	anAthensCanvas pathTransform set.
	context2D strokeStyle: fillPaint rgbaString.
	context2D lineWidth: width.
	context2D lineJoin: joinStyle.
	context2D lineCap: capStyle.
	self setDashStyleOn: context2D.
	aPath draw.
	context2D stroke.
!

setDashStyleOn: context2D
	"TODO: this only works in Chrome, see http://www.rgraph.net/blog/2013/january/html5-canvas-dashed-lines.html"
	context2D setLineDash: dashLenghts.
	context2D lineDashOffset: dashOffset.
! !

!AthensHTMLStrokePaint methodsFor: 'initialize-release'!

context: aContext
	context2D := aContext.
!

initialize
	super initialize.

	width := 1.
	capStyle := joinStyle := nil.
! !

!AthensHTMLStrokePaint methodsFor: 'setting cap styles'!

capButt
	self capStyle: 'butt'.
!

capRound
	self capStyle: 'round'.
!

capSquare
	self capStyle: 'square'.
! !

!AthensHTMLStrokePaint methodsFor: 'setting join styles'!

joinBevel
	self joinStyle: 'bevel'.
!

joinMiter
	self joinStyle: 'miter'.
!

joinRound
	self joinStyle: 'round'.
! !


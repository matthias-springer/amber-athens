Smalltalk current createPackage: 'Athens-HTML-Paints'!
Object subclass: #AthensHTMLPatternPaint
	instanceVariableNames: ''
	package: 'Athens-HTML-Paints'!

!AthensHTMLPatternPaint methodsFor: 'converting'!

asAthensPaintOn: anAthensCanvas	
	^ self
! !

AthensHTMLPatternPaint subclass: #AthensHTMLGradientPaint
	instanceVariableNames: 'start stop gradient context2D'
	package: 'Athens-HTML-Paints'!

!AthensHTMLGradientPaint methodsFor: 'accessing'!

context: aContext
	context2D := aContext.
!

gradient
	^ gradient
!

start: aPoint
	start := aPoint.
!

stop: aPoint
	stop := aPoint.
! !

!AthensHTMLGradientPaint methodsFor: 'initialize-release'!

fillRectangle: aRect on: anAthensCanvas
	context2D beginPath.
	anAthensCanvas pathTransform applyToContext.
	context2D rect: aRect left a: aRect top a: aRect width a: aRect height.
	anAthensCanvas paintTransform applyToContext.
	context2D fillStyle: gradient.
	context2D fill.
!

initialize
	gradient := context2D createLinearGradient: start x a: start y a: stop x a: stop y.
!

populateRamp: aRamp
	aRamp do: [:assoc |
		gradient addColorStop: assoc key a: assoc value hexString].
! !

!AthensHTMLGradientPaint class methodsFor: 'instance creation'!

createLinearGradient: aColorRamp start: aStartPoint stop: aStopPoint on: aContext
	^ self basicNew
		start: aStartPoint;
		stop: aStopPoint;
		context: aContext;
		initialize;
		populateRamp: aColorRamp;
		yourself
! !

AthensPaint subclass: #AthensHTMLSolidPaint
	instanceVariableNames: 'r g b a context2D'
	package: 'Athens-HTML-Paints'!

!AthensHTMLSolidPaint methodsFor: 'accessing'!

alpha
	^ a
!

blue
	^ b
!

color: aColor
	r := aColor red * 255.
	g := aColor green * 255.
	b := aColor blue * 255.
	a := aColor alpha.
!

context: aContext
	context2D := aContext.
!

green
	^ g
!

red
	^ r
! !

!AthensHTMLSolidPaint methodsFor: 'drawing'!

fillPath: aPath on: anAthensCanvas
	anAthensCanvas pathTransform applyToContext.
	context2D fillStyle: 'rgba(', r, ', ', g, ', ', b, ', ', a, ')'.
	aPath draw.
	context2D fill.
!

fillRectangle: aRect on: anAthensCanvas
	anAthensCanvas pathTransform applyToContext.
	context2D fillStyle: 'rgba(', r asString, ', ', g asString, ', ', b asString, ', ', a asString, ')'.
	context2D fillRect: aRect left a: aRect top a: aRect width a: aRect height.
! !

AthensStrokePaint subclass: #AthensHTMLStrokePaint
	instanceVariableNames: 'dashLenghts dashOffset context2D'
	package: 'Athens-HTML-Paints'!

!AthensHTMLStrokePaint methodsFor: 'drawing'!

fillPath: aPath on: anAthensCanvas
	anAthensCanvas pathTransform applyToContext.
	context2D strokeStyle: 'rgba(', fillPaint red, ', ', fillPaint green, ', ', fillPaint blue, ', ', fillPaint alpha, ')'.
	context2D lineWidth: width.
	aPath draw.
	context2D stroke.
!

loadOn: aCanvas
	self fillPaint loadOn: aCanvas.
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


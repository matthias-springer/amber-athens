Smalltalk current createPackage: 'Athens-HTML-Paints'!
Object subclass: #AthensHTMLPatternPaint
	instanceVariableNames: ''
	package: 'Athens-HTML-Paints'!

!AthensHTMLPatternPaint methodsFor: 'converting'!

asAthensPaintOn: anAthensCanvas	
	^ self
! !

AthensHTMLPatternPaint subclass: #AthensHTMLGradientPaint
	instanceVariableNames: 'start stop gradient context2D innerRadius outerRadius'
	package: 'Athens-HTML-Paints'!

!AthensHTMLGradientPaint methodsFor: 'accessing'!

context: aContext
	context2D := aContext.
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

!AthensHTMLGradientPaint methodsFor: 'initialize-release'!

fillRectangle: aRect on: anAthensCanvas
	context2D beginPath.
	anAthensCanvas pathTransform set.
	context2D rect: aRect left a: aRect top a: aRect width a: aRect height.
	anAthensCanvas paintTransform apply.
	context2D fillStyle: gradient.
	context2D fill.
!

initialize
	innerRadius 
		ifNil: [gradient := context2D createLinearGradient: start x a: start y a: stop x a: stop y]
		ifNotNil: [gradient := context2D createRadialGradient: start x a: start y a: innerRadius a: stop x a: stop y a: outerRadius].
!

populateRamp: aRamp
	aRamp do: [:assoc |
		gradient addColorStop: assoc key a: assoc value rgbaString].
! !

!AthensHTMLGradientPaint class methodsFor: 'instance creation'!

createLinearGradient: aColorRamp start: aStartPoint stop: aStopPoint context: aContext
	^ self basicNew
		start: aStartPoint;
		stop: aStopPoint;
		context: aContext;
		initialize;
		populateRamp: aColorRamp;
		yourself
!

radialBetween: origin extending: innerRadius and: outerOrigin  extending: outerRadius withColorRamp: aColorRamp context: aContext
	^ self basicNew
		start: origin;
		stop: outerOrigin;
		innerRadius: innerRadius;
		outerRadius: outerRadius;
		context: aContext;
		initialize;
		populateRamp: aColorRamp;
		yourself
! !

AthensPaint subclass: #AthensHTMLSolidPaint
	instanceVariableNames: 'color context2D'
	package: 'Athens-HTML-Paints'!

!AthensHTMLSolidPaint methodsFor: 'accessing'!

color: aColor
	color := aColor
!

context: aContext
	context2D := aContext.
! !

!AthensHTMLSolidPaint methodsFor: 'drawing'!

fillPath: aPath on: anAthensCanvas
	anAthensCanvas pathTransform set.
	context2D fillStyle: self rgbaString.
	aPath draw.
	context2D fill.
!

fillRectangle: aRect on: anAthensCanvas
	anAthensCanvas pathTransform set.
	context2D fillStyle: self rgbaString.
	context2D fillRect: aRect left a: aRect top a: aRect width a: aRect height.
!

rgbaString
	^ color rgbaString
! !

AthensStrokePaint subclass: #AthensHTMLStrokePaint
	instanceVariableNames: 'dashLenghts dashOffset context2D'
	package: 'Athens-HTML-Paints'!

!AthensHTMLStrokePaint methodsFor: 'drawing'!

fillPath: aPath on: anAthensCanvas
	anAthensCanvas pathTransform set.
	context2D strokeStyle: fillPaint rgbaString.
	context2D lineWidth: width.
	aPath draw.
	context2D stroke.
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


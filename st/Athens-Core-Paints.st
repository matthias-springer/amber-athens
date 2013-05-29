Smalltalk current createPackage: 'Athens-Core-Paints'!
Object subclass: #AthensAbstractPaint
	instanceVariableNames: ''
	package: 'Athens-Core-Paints'!

!AthensAbstractPaint methodsFor: 'converting'!

asAthensPaintOn: anAthensCanvas	
	^ self
! !

AthensAbstractPaint subclass: #AthensPaint
	instanceVariableNames: ''
	package: 'Athens-Core-Paints'!

!AthensPaint methodsFor: 'converting'!

asStrokePaintOn: aCanvas
	"default implementation"
	^ aCanvas surface createStrokePaintFor: self
! !

!AthensPaint methodsFor: 'rendering'!

fillPath: athensBalloonPath on: anAthensCanvas 

	"This is a terminal method in rendering dispatch scheme
	canvas->shape->paint. See AthensCanvas>>fillShape: "
	
	self subclassResponsibility
!

fillRectangle: aRect on: anAthensCanvas
	"This is a terminal method in rendering dispatch scheme
	canvas->shape->paint. See AthensCanvas>>fillShape: "
	
	self subclassResponsibility
! !

AthensPaint subclass: #AthensStrokePaint
	instanceVariableNames: 'fillPaint width capStyle joinStyle innerJoinStyle miterLimit'
	package: 'Athens-Core-Paints'!

!AthensStrokePaint methodsFor: 'accessing'!

capStyle

	^ capStyle
!

capStyle: anObject

	capStyle := anObject
!

fillPaint

	^ fillPaint
!

fillPaint: anObject

	fillPaint := anObject
!

innerJoinStyle

	^ innerJoinStyle
!

innerJoinStyle: anObject

	innerJoinStyle := anObject
!

joinStyle

	^ joinStyle
!

joinStyle: anObject

	joinStyle := anObject
!

miterLimit

	^ miterLimit
!

miterLimit: anObject

	miterLimit := anObject
!

width

	^ width
!

width: anObject

	width := anObject
! !

!AthensStrokePaint methodsFor: 'converting'!

asStrokePaintOn: aCanvas
	"receiver is stroke paint already"
	^ self
! !

!AthensStrokePaint methodsFor: 'initialize-release'!

initialize
	super initialize.
	width := 1.
	capStyle := #butt.
	joinStyle := #bevel.
	innerJoinStyle := #bevel.
	miterLimit := 4.0.
! !

AthensAbstractPaint subclass: #GradientPaint
	instanceVariableNames: 'stops colorRamp'
	package: 'Athens-Core-Paints'!

!GradientPaint methodsFor: 'accessing'!

atStop: anOffset put: aColor

	colorRamp add: (anOffset -> aColor).
!

colorRamp
	^ colorRamp
!

colorRamp: aRamp
"The color ramp is a collection of associations with keys - floating point values between 0 and 1
and values with Colors, for example:

{  0 -> Color white. 1 -> Color black }.
"
	colorRamp := aRamp copy.
! !

!GradientPaint methodsFor: 'initialize-release'!

initialize
	super initialize.
	colorRamp := OrderedCollection new.
! !

!GradientPaint methodsFor: 'testing'!

is: aSymbol
	^ aSymbol = #pattern or:[ super is: aSymbol]
! !

GradientPaint subclass: #LinearGradientPaint
	instanceVariableNames: 'start stop'
	package: 'Athens-Core-Paints'!

!LinearGradientPaint methodsFor: 'accessing'!

start

	^ start
!

start: anObject
	
	start := anObject
!

stop

	^ stop
!

stop: anObject
	
	stop := anObject
! !

!LinearGradientPaint methodsFor: 'converting'!

asAthensPaintOn: aCanvas
	^ aCanvas surface
			createLinearGradient: self colorRamp
				start: self start 
				stop: self stop
! !

!LinearGradientPaint class methodsFor: 'instance creation'!

from: aStartPoint  to: aStopPoint
	| p |
	p := self new.
	p initializeFrom: aStartPoint  to: aStopPoint.
	^ p
! !

GradientPaint subclass: #RadialGradientPaint
	instanceVariableNames: 'center radius focalPoint'
	package: 'Athens-Core-Paints'!

!RadialGradientPaint methodsFor: 'accessing'!

center
	
	^ center
!

center: aPoint

	center := aPoint
!

focalPoint
	
	^ focalPoint
!

focalPoint: aPoint

	focalPoint := aPoint
!

radius
	
	^ radius
!

radius: aNumber

	radius := aNumber
! !

!RadialGradientPaint methodsFor: 'converting'!

asAthensPaintOn: aCanvas
	^ aCanvas surface
		createRadialGradient:  colorRamp
		center: center
		radius: radius
		focalPoint: focalPoint
! !


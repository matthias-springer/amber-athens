Smalltalk current createPackage: 'Athens-Core-Paths'!
Object subclass: #AthensPathBuilder
	instanceVariableNames: ''
	package: 'Athens-Core-Paths'!

!AthensPathBuilder methodsFor: 'creating path'!

createPath:	aBlock

		"aBlock value: self ...."	
	self subclassResponsibility
! !

!AthensPathBuilder methodsFor: 'path commands'!

absolute
	"next commands will use absolute coordinates for all segment points"
	self subclassResponsibility
!

ccwArcTo: endPt angle: rot
	" Add a counter-clockwise arc segment, starting from current path endpoint and
	ending at andPt. Angle should be specified in radians "
	

	self subclassResponsibility
!

close
	"close the current path controur"
	self subclassResponsibility
!

curveVia: cp1 and: cp2 to: aPoint
	"Add a cubic bezier curve,
	starting from current path endpoint, using control points cp1, cp2
	and ending at aPoint "
	
	self subclassResponsibility
!

curveVia: cp1 to: aPoint

	"Add a quadric bezier curve,
	starting from current path endpoint, using control point cp1, 
	and ending at aPoint "
	
	self subclassResponsibility
!

cwArcTo: endPt angle: rot
	" Add a clockwise arc segment, starting from current path endpoint and
	ending at andPt. Angle should be specified in radians "
	

	self subclassResponsibility
!

lineTo: aPoint
	"add a line segment, starting from current path endpoint to aPoint"
	
	self subclassResponsibility
!

moveTo: aPoint
	" move command always starts a new contour "
	self subclassResponsibility
!

relative

	"next commands will use relative coordinates for all segment points"
	self subclassResponsibility
! !

AthensPathBuilder class instanceVariableNames: 'zeroPoint'!

!AthensPathBuilder class methodsFor: 'accessing'!

zeroPoint
	^ 0@0
! !

!AthensPathBuilder class methodsFor: 'initializing'!

initialize
	zeroPoint := 0@0
! !

!AthensPathBuilder class methodsFor: 'instance creation'!

createPath: aBlock

	^ self new createPath: aBlock
! !

AthensPathBuilder subclass: #AthensSimplePathBuilder
	instanceVariableNames: 'absolute open contourStartPt xMin yMin xMax yMax pathStart lastSegment'
	package: 'Athens-Core-Paths'!

!AthensSimplePathBuilder methodsFor: 'accessing'!

pathBounds
	^ xMin@yMin corner: xMax@yMax
!

pathStart
	^ pathStart
! !

!AthensSimplePathBuilder methodsFor: 'creating path'!

createPath:	aBlock

		"aBlock value: self ...."	

	aBlock value: self.
	
	^ pathStart
! !

!AthensSimplePathBuilder methodsFor: 'initialize-release'!

initialize
	"A new path always starts from implicit (moveTo:0@0) segment.
	If next segment is moveTo: , the point of already existing move segment will be changed,
	avoiding creating extra move segments.
	
	"
	absolute := false.
	contourStartPt := ZeroPoint.
	pathStart := lastSegment := (AthensMoveSegment new  point: ZeroPoint).
! !

!AthensSimplePathBuilder methodsFor: 'path commands'!

absolute
	absolute := true.
!

ccwArcTo: endPt angle: rot
	" angle should be specified in radians "
	^ self addSegment: (AthensCCWArcSegment new endPoint: (self toAbsolute: endPt) angle: rot).
!

close
	"close the current contour"
	self addSegment: (AthensCloseSegment new point: contourStartPt).

	contourStartPt := nil.
	open := false
!

curveVia: cp1 and: cp2 to: aPoint
	"Cubic bezier curve"
	
	| pt1 pt2 pt3 |
	"Quad bezier curve"

	pt1 := self toAbsolute: cp1.
	pt2 := self toAbsolute: cp2.
	pt3 := self toAbsolute: aPoint.
	^ self addSegment: (
		AthensCubicSegment new 
			from: lastSegment endPoint 
			via: pt1
			and: pt2
			to: pt3)
!

curveVia: cp1 to: aPoint
	| pt1 pt2 |
	"Quad bezier curve"

	pt1 := self toAbsolute: cp1.
	pt2 := self toAbsolute: aPoint.
	^ self addSegment: (
		AthensQuadSegment new 
			from: lastSegment endPoint 
			via: pt1 
			to: pt2)
!

cwArcTo: endPt angle: rot
	" angle should be specified in radians "
	^ self addSegment: (AthensCWArcSegment new endPoint: (self toAbsolute: endPt) angle: rot).
!

lineTo: aPoint

	^ self addSegment: (AthensLineSegment new point: (self toAbsolute: aPoint)).
!

moveTo: aPoint
	" move command always starts a new contour "
	contourStartPt := self toAbsolute: aPoint.
	
	"collapse multiple moves to a single one"
	lastSegment isMove ifTrue: [
		lastSegment point: contourStartPt.
		^ self
	].

	self addSegment: (AthensMoveSegment new point: contourStartPt; reopen: open).
	open := true.
!

relative
	absolute := false.
! !

Object subclass: #AthensPathConverter
	instanceVariableNames: 'sourcePath dest endPoint'
	package: 'Athens-Core-Paths'!

!AthensPathConverter methodsFor: 'accessing'!

dest: anObject
	dest := anObject
!

source: aSource dest: aDest

	sourcePath := aSource.
	dest := aDest
! !

!AthensPathConverter methodsFor: 'actions'!

convert: aSourcePath
	
	" iterate over segments and do conversion "
	
	| segment |
	
	segment := aSourcePath.
	
	[ segment notNil ] whileTrue: [
		segment convertWith: self.
		endPoint := segment endPoint.
		segment := segment next.
	].

	^ dest finish
!

finish
	^ dest finish
! !

!AthensPathConverter methodsFor: 'converting path commands'!

close: aPoint 
	^ dest close: aPoint
!

curveVia: pt1 to: pt2

	^ dest curveVia: pt1 to: pt2
!

lineTo: aPoint 
	^ dest lineTo: aPoint
!

moveTo: aPoint 
	^ dest moveTo: aPoint
! !

!AthensPathConverter class methodsFor: 'instance creation'!

dest: aDest

	^ self new dest: aDest
!

source: aSource dest: aDest
	" answer a converted path from source to dest, using my instance as a converter"
	
	^ self new source: aSource dest: aDest
! !

AthensPathConverter subclass: #AthensBezierConverter
	instanceVariableNames: 'distanceTolerance angleTolerance'
	package: 'Athens-Core-Paths'!

!AthensBezierConverter methodsFor: 'converting path commands'!

curveVia: pt1 to: pt2


	self	 recursiveBezier2X1: endPoint x y1: endPoint y
		x2: pt1 x y2: pt1 y
		x3: pt2 x y3: pt2 y
! !

!AthensBezierConverter methodsFor: 'helpers'!

angleBetween: p1 and: p2 ifDegenerate: aBlock

" Calculate an angle (in radians) between two vectors. 
Evaluate a block, in case if calculation not possible because one of the vectors has zero length "

	| x1 y1 x2 y2 dot2 n2 |
	x1 := p1 x.
	y1 := p1 y.
	x2 := p2 x.
	y2 := p2 y.
	
	dot2 := x1 * x2 + (y1 * y2).
	dot2 := dot2 * dot2.
	
	n2 := (x1*x1 + (y1*y1)) * (x2*x2 + (y2*y2)).
	
	n2 = 0 ifTrue: [ ^ aBlock value ].
	
	^ (dot2 / n2) arcCos
!

recursiveBezier2X1: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3

	"recursively subdive bezier curve as long as #isFlatBezier2.. answers false "

	(self isFlatBezier2X1: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3) ifTrue: [
		
		dest 
			lineTo: x2 @ y2;
			lineTo: x3 @ y3
	] ifFalse: [
		| x12 y12 x23 y23 x123 y123 |	
	"calculate midpoints of line segments "
		x12 := (x1 + x2) * 0.5.
		y12 := (y1 + y2) * 0.5 .

		x23 := (x2 + x3) * 0.5 .
		y23 := (y2 + y3) * 0.5 .

		x123 := (x12 + x23) * 0.5.
		y123 := (y12 + y23) * 0.5.
		
		self recursiveBezier2X1: x1 y1: y1 
			x2: x12 
			y2: y12 
			x3: x123 
			y3: y123.
			
		self recursiveBezier2X1: x123 
			y1: y123
			x2: x23
			y2: y23 
			x3: x3 
			y3: y3.
	]
! !

!AthensBezierConverter methodsFor: 'initialize-release'!

initialize

	distanceTolerance := 0.5.
	angleTolerance := 0.1 .
! !

!AthensBezierConverter methodsFor: 'testing'!

isFlatBezier2X1: x1 y1: y1 x2: x2 y2: y2 x3: x3 y3: y3

	| dx dy d da angle |
	
	dx := x3-x1.
	dy := y3-y1.
	
 	d := (((x2 - x3) * dy) - ((y2 - y3) * dx)) abs.

	d > CollinearityEps ifTrue: [
		
		"regular case"

		d*d <= (distanceTolerance * ( dx*dx + (dy*dy))) ifTrue: [
			
			angleTolerance < CurveAngleTolerance ifTrue: [ ^ true ].
			
			angle := self angleBetween: x2-x1 @ (y2-y1) and: x3-x2 @ (y3-y2)
				ifDegenerate: [ 0.0 ].
			
			"parallel. no need to proceed further"
			angle <= angleTolerance ifTrue: [ ^ true ]					
		]
	]
	ifFalse: [ 
		"collinear"
		da := dx*dx + (dy*dy).
		
		da = 0 
			ifTrue: [ d := (x1-x2) squared + (y1-y2) squared ]
			ifFalse: [
				d = ((x2 - x1)*dx + ((y2 - y1)*dy)) / da.

				(d > 0.0 and: [ d < 1.0 ] ) ifTrue: [ 
					"Simple collinear case, 1---2---3" 
					^ true
     				].
				d <= 0.0 
					ifTrue: [ d := (x1-x2) squared + (y1-y2) squared ]
					ifFalse: [
						d >= 1.0 
							ifTrue: [ d:= (x2-x3) squared + (y2-y3) squared ]
							ifFalse: [ d:= (x2 - x1 - (d*dx)) squared + (y2 - y1 - (d*dy)) squared ]
					].
			].

			d < self distanceToleranceSquared ifTrue: [ ^ true ]		
	].

	^ false
! !

AthensBezierConverter class instanceVariableNames: 'collinearityEps curveAngleTolerance distanceEps'!

!AthensBezierConverter class methodsFor: 'initialize-release'!

initialize

	"collinearityEps := 1e-30."
	"distanceEps := 1e-30."
	"curveAngleTolerance := 0.01."
	
	< self['@curveAngleTolerance'] = 0.01;
	self['@collinearityEps'] = 1e-30;
	self['@distanceEps'] = 1e-30; >
! !

Object subclass: #AthensPathSegment
	instanceVariableNames: 'next'
	package: 'Athens-Core-Paths'!

!AthensPathSegment methodsFor: 'accessing'!

next

	^ next
!

next: anObject

	next := anObject
!

size
	"answer 1 + the number of segments next to receiver"
	
	| segment count |
	segment := self.
	count := 0.
	[ segment notNil ] whileTrue: [  count := count + 1. segment := segment next ].

	^ count.
! !

!AthensPathSegment methodsFor: 'iterating'!

do: aBlock
	| segment |
	
	segment := self.
	
	[  aBlock value: segment. segment := segment next. segment notNil ] whileTrue.
!

sendCommandsTo: aBuilder

	self do: [ :segment |
		segment sendCommandTo: aBuilder
	]
! !

!AthensPathSegment methodsFor: 'testing'!

isMove
	^ false
! !

!AthensPathSegment methodsFor: 'visitor'!

accept: aVisitor
	self subclassResponsibility
!

convertWith: anObject
	self subclassResponsibility
! !

AthensPathSegment subclass: #AthensArcSegment
	instanceVariableNames: 'endPoint angle'
	package: 'Athens-Core-Paths'!

!AthensArcSegment methodsFor: 'accessors'!

angle
	^ angle
!

endPoint
	^ endPoint
!

endPoint: pt angle: a

	endPoint := pt.
	angle := a
! !

AthensArcSegment subclass: #AthensCCWArcSegment
	instanceVariableNames: ''
	package: 'Athens-Core-Paths'!

!AthensCCWArcSegment methodsFor: 'visitor'!

accept: aVisitor
	^ aVisitor ccwArcSegment: self
!

sendCommandTo: aBuilder
	^ aBuilder ccwArcTo: endPoint angle: angle
! !

AthensArcSegment subclass: #AthensCWArcSegment
	instanceVariableNames: ''
	package: 'Athens-Core-Paths'!

!AthensCWArcSegment methodsFor: 'visitor'!

accept: aVisitor
	^ aVisitor cwArcSegment: self
!

sendCommandTo: aBuilder
	^ aBuilder cwArcTo: endPoint angle: angle
! !

AthensPathSegment subclass: #AthensCubicSegment
	instanceVariableNames: 'via1 via2 to'
	package: 'Athens-Core-Paths'!

!AthensCubicSegment methodsFor: 'accessing'!

endPoint
	^ to
!

from: origin
	via: controlPoint
	and: secondControlPoint
	to: destination
	
	
	via1:= controlPoint.
	via2 := secondControlPoint.
	to := destination.
!

to

	^ to
!

via1
	^ via1
!

via2
	^ via2
! !

!AthensCubicSegment methodsFor: 'visitor'!

accept: aVisitor
	^ aVisitor cubicBezierSegment: self
!

sendCommandTo: aBuilder
	^ aBuilder curveVia: via1 and: via2  to: to
! !

AthensPathSegment subclass: #AthensEllipticalArcSegment
	instanceVariableNames: 'radii phi large sweep endPoint'
	package: 'Athens-Core-Paths'!

!AthensEllipticalArcSegment methodsFor: 'visitor'!

accept: aVisitor
	^ aVisitor ellipticalArcSegment: self
! !

AthensPathSegment subclass: #AthensLineSegment
	instanceVariableNames: 'point'
	package: 'Athens-Core-Paths'!

!AthensLineSegment methodsFor: 'accessing'!

endPoint
	^ point
!

point

	^ point
!

point: anObject

	point := anObject
! !

!AthensLineSegment methodsFor: 'visitor'!

accept: aVisitor
	^ aVisitor lineSegment: self
!

sendCommandTo: aBuilder
	^ aBuilder lineTo: point
! !

AthensLineSegment subclass: #AthensCloseSegment
	instanceVariableNames: ''
	package: 'Athens-Core-Paths'!

!AthensCloseSegment methodsFor: 'visitor'!

accept: aVisitor
	^ aVisitor closeSegment: self
!

sendCommandTo: aBuilder
	^ aBuilder close
! !

AthensLineSegment subclass: #AthensMoveSegment
	instanceVariableNames: 'closed'
	package: 'Athens-Core-Paths'!

!AthensMoveSegment methodsFor: 'accessing'!

closed: aBoolean
	closed := aBoolean
!

reopen: aBoolean
	closed := aBoolean
! !

!AthensMoveSegment methodsFor: 'testing'!

isClosed
	^ closed == true
!

isMove
	^ true
! !

!AthensMoveSegment methodsFor: 'visitor'!

accept: aVisitor
	^ aVisitor moveSegment: self
!

sendCommandTo: aBuilder
	^ aBuilder moveTo: point
! !

AthensPathSegment subclass: #AthensQuadSegment
	instanceVariableNames: 'via to'
	package: 'Athens-Core-Paths'!

!AthensQuadSegment methodsFor: 'accessing'!

endPoint
	^ to
!

to

	^ to
!

via

	^ via
! !

!AthensQuadSegment methodsFor: 'initialize-release'!

from: pt0 via: pt1 to: p

	via := pt1.
	to := p.
! !

!AthensQuadSegment methodsFor: 'visitor'!

accept: aVisitor
	^ aVisitor quadricBezierSegment: self
!

sendCommandTo: aBuilder
	^ aBuilder curveVia: via to: to
! !

Object subclass: #AthensPathSegmentConverter
	instanceVariableNames: 'dest endPoint contourStartPt'
	package: 'Athens-Core-Paths'!

!AthensPathSegmentConverter methodsFor: 'accessing'!

dest: aDest
	dest := aDest
! !

!AthensPathSegmentConverter methodsFor: 'converting'!

convert: aPath
	"pipe the path segments to destination, converting
	segments on the way"
	
	contourStartPt := endPoint := 0@0.
	
	aPath sendCommandsTo: self.
! !

Object subclass: #AthensPolygon
	instanceVariableNames: 'contours currentContour'
	package: 'Athens-Core-Paths'!

!AthensPolygon methodsFor: 'conversion'!

finish
	"Finally convert contours to arrays"
	
	contours := contours collect: [:ea | ea asArray ]
!

lineTo: aPoint 
	currentContour add: aPoint
!

moveTo: aPoint 
	" create a new contour "
	
	self newContour.
	currentContour add: aPoint.
!

newContour
	contours ifNil: [ contours := OrderedCollection new ].
	
	currentContour := contours add: OrderedCollection new.
! !

!AthensPolygon methodsFor: 'drawing'!

paintFillsUsing: aPaint on: anAthensCanvas 
	
	"This method is a part of rendering dispatch  Canvas->receiver->paint"
	
	^ aPaint fillPolygon: self on: anAthensCanvas
! !

Object subclass: #AthensPolygonTester
	instanceVariableNames: 'polygon'
	package: 'Athens-Core-Paths'!

!AthensPolygonTester methodsFor: 'accessing'!

polygon: poly

	polygon := poly
! !

!AthensPolygonTester methodsFor: 'testing'!

includesPoint: aPoint
"
Thanks to Google and Randolph Franklin i don't have to reinvent this very simple algorithm.
See [ 1 ] for details, copyrights etc.

[1] http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

"
	| inside testX testY i j size |
	
	inside := false.
	
	i := 1.
	size := polygon size.
	j := size.
	testX := aPoint x.
	testY := aPoint y.
	
	[ i <= size ] whileTrue: [  | pi pj |
		pi := polygon at: i.
		pj := polygon at: j. 
	
		(((pi y > testY) ~= (pj y > testY)) and: [ 
			testX < 
			(
				pj x - pi x
				* (testY - pi y) 
				/ ( pj y - pi y )
				+ pi x 
			)
			 ]) ifTrue: [ inside := inside not ].
	
		j := i.
		i := i + 1.
	 ].
	^ inside
! !


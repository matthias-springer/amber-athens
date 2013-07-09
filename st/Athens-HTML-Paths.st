Smalltalk current createPackage: 'Athens-HTML-Paths'!
Object subclass: #AthensHTMLPath
	instanceVariableNames: 'segment context2D startPoint endPoint'
	package: 'Athens-HTML-Paths'!

!AthensHTMLPath methodsFor: 'accessing'!

segment: startSegment
	segment := startSegment.
! !

!AthensHTMLPath methodsFor: 'converting'!

asAthensShapeOn: anAthensCanvas
	^ self
! !

!AthensHTMLPath methodsFor: 'drawing'!

drawOn: anAthensCanvas
	"Replay saved path"
	[
		context2D := anAthensCanvas context2D.
		self newPath.
		segment sendCommandsTo: self
	] ensure: [context2D := nil].
!

paintFillsUsing: aPaint on: anAthensCanvas 
	"This method is a part of rendering dispatch  Canvas->receiver->paint"
	^ aPaint fillPath: self on: anAthensCanvas
! !

!AthensHTMLPath methodsFor: 'path commands'!

angleOfVector: v
	|acos|
	acos := v normalized x arcCos.
	^ v y < 0 ifTrue: [Number pi * 2 - acos] ifFalse: [acos]
!

arcCenterX: xc centerY: yc radius: radius startAngle: angle1 endAngle: angle2 ccw: aBool
	< self['@context2D'].arc(xc, yc, radius, angle1, angle2, aBool); >
!

arcTo: newEndPoint angle: angle cw: aBool

	" Add a clockwise arc segment, starting from current path endpoint and
	ending at andPt. Angle should be specified in radians 
	"

	| start end center v radius startAngle endAngle cwAngle |	
	start := endPoint.
	endPoint := end :=  newEndPoint.

	"we have to transform the input. because Cario expects 
	the center , radius, starting and ending angle,
	and we have the starting point, the ending point , and the angle.
	"
	aBool ifTrue: [cwAngle := angle] ifFalse: [cwAngle := angle negated].
	center := self calcCenter: start end: end  angle: cwAngle.
	v := (start - center).
	radius := v r.
	startAngle := self angleOfVector: v.
	endAngle := self angleOfVector: (end-center).
	
	self arcCenterX: center x centerY: center y  radius: radius  startAngle: startAngle endAngle: endAngle ccw: aBool not.
!

calcCenter: start end: end angle: angle

	| v  rot  center radius len sina cosa m |	

	v := end - start.
	
	m := AthensAffineTransform new rotateByRadians: (Number pi - angle   /2).

	v := m transform: v.		
	len := v r.
	radius := len / 2 / (angle /2) sin.
	
	center := v * (radius/len) + start.

	^ center
!

ccwArcTo: newEndPoint angle: angle
	" Add a counter-clockwise arc segment, starting from current path endpoint and
	ending at andPt. Angle should be specified in radians 
	"
	^ self arcTo: newEndPoint angle: angle cw: false
!

close
	context2D closePath.
	endPoint := startPoint.
!

curveVia: pt1 and: pt2 to: aPoint
	endPoint := aPoint.
	self curveViaX: pt1 x Y: pt1 y viaX: pt2 x Y: pt2 y toX: aPoint x Y: aPoint y.
!

curveVia: pt1 to: aPoint
	endPoint := aPoint.
	self curveViaX: pt1 x Y: pt1 y toX: endPoint x Y: aPoint y.
!

curveViaX: x1 Y: y1 toX: x2 Y: y2
	context2D quadraticCurveTo: x1 a: y1 a: x2 a: y2.
!

curveViaX: x1 Y: y1 viaX: x2 Y: y2 toX: x3 Y: y3
	context2D bezierCurveTo: x1 a: y1 a: x2 a: y2 a: x3 a: y3.
!

cwArcTo: newEndPoint angle: angle
	" Add a clockwise arc segment, starting from current path endpoint and
	ending at andPt. Angle should be specified in radians 
	"
	^ self arcTo: newEndPoint angle: angle cw: true
!

lineTo: aPoint
	endPoint := aPoint.
	^ self lineToX: endPoint x Y: endPoint y
!

lineToX: x Y: y
	context2D lineTo: x a: y.
!

moveTo: aPoint
	endPoint := aPoint.
	^ self moveToX: aPoint x Y: aPoint y
!

moveToX: x Y: y
	context2D moveTo: x a: y.
!

newPath
	endPoint := 0@0.
	startPoint := 0@0.
	context2D beginPath.
	self moveToX: 0 Y: 0.
! !

!AthensHTMLPath class methodsFor: 'instance creation'!

segment: startSegment
	^ self new
		segment: startSegment;
		yourself
! !

AthensPathBuilder subclass: #AthensHTMLPathBuilder
	instanceVariableNames: 'surface absolute endPoint startPoint pathCreatingBlock'
	package: 'Athens-HTML-Paths'!

!AthensHTMLPathBuilder methodsFor: 'accessing'!

surface
	^ surface
!

surface: anObject
	surface := anObject.
! !

!AthensHTMLPathBuilder methodsFor: 'drawing'!

createPath: aPathCreatingBlock
	pathCreatingBlock := aPathCreatingBlock.
	absolute := false.
	endPoint := self class zeroPoint.
! !

!AthensHTMLPathBuilder methodsFor: 'path commands'!

absolute
	absolute := true.
!

ccwArcTo: newEndPoint angle: angle
	" Add a counter-clockwise arc segment, starting from current path endpoint and
	ending at andPt. Angle should be specified in radians 
	"
	^ self arcTo: newEndPoint angle: angle cw: false
!

close
	self closePath.
	"endPoint := startPoint."
!

curveVia: p1 and: p2 to: aPoint
	|pt1 pt2|
	pt1 := self toAbsolute: p1.
	pt2 := self toAbsolute: p2.
	endPoint := self toAbsolute: aPoint.
	self curveViaX: pt1 x Y: pt1 y viaX: pt2 x Y: pt2 y toX: endPoint x Y: endPoint y.
!

curveVia: p1 to: aPoint
	|pt1|
	pt1 := self toAbsolute: p1.
	endPoint := self toAbsolute: aPoint.
	self curveViaX: pt1 x Y: pt1 y toX: endPoint x Y: endPoint y.
!

cwArcTo: newEndPoint angle: angle
	" Add a clockwise arc segment, starting from current path endpoint and
	ending at andPt. Angle should be specified in radians 
	"
	^ self arcTo: newEndPoint angle: angle cw: true
!

draw
	self newPath.
	self moveToX: 0 Y: 0.
	
	pathCreatingBlock value: self.
!

lineTo: aPoint
	endPoint := self toAbsolute: aPoint.
	^ self lineToX: endPoint x Y: endPoint y
!

moveTo: aPoint
	endPoint := self toAbsolute: aPoint.
	"startPoint := endPoint."
	^ self moveToX: endPoint x Y: endPoint y
!

newPath
	absolute := false.
	endPoint := self class zeroPoint.
	surface context2D beginPath.
	startPoint := endPoint.
	self moveToX: 0 Y: 0.
!

paintFillsUsing: aPaint on: anAthensCanvas 
	^ aPaint fillPath: self on: anAthensCanvas
!

relative
	absolute := false.
!

toAbsolute: aPoint
	^ true 
			ifTrue: [aPoint] 
			ifFalse: [endPoint + aPoint]
! !

!AthensHTMLPathBuilder methodsFor: 'private'!

angleOfVector: v

	| n acos |
	
	n := v normalized.
	acos := n x arcCos.
	
	^ v y < 0 ifTrue: [ Number pi * 2 - acos ] ifFalse: [ acos ]
!

arcCenterX: xc centerY: yc radius: radius startAngle: angle1 endAngle: angle2 ccw: aBool
	surface context2D arc: xc a: yc a: radius a: angle1 a: angle2 a: aBool.
!

arcTo: newEndPoint angle: angle cw: aBool

	" Add a clockwise arc segment, starting from current path endpoint and
	ending at andPt. Angle should be specified in radians 
	"

	| start end center v radius startAngle endAngle cwAngle |	
	start := endPoint.
	endPoint := end := self toAbsolute: newEndPoint.

	"we have to transform the input. because Cario expects 
	the center , radius, starting and ending angle,
	and we have the starting point, the ending point , and the angle.
	"
	aBool ifTrue: [cwAngle := angle] ifFalse: [cwAngle := angle negated].
	center := self calcCenter: start end: end  angle: cwAngle.
	v := (start - center).
	radius := v r.
	startAngle := self angleOfVector: v.
	endAngle := self angleOfVector: (end-center).
	
	self arcCenterX: center x centerY: center y  radius: radius  startAngle: startAngle endAngle: endAngle ccw: aBool not.
!

calcCenter: start end: end angle: angle

	| v  rot  center radius len sina cosa m |	

	v := end - start.
	
	m := AthensAffineTransform new rotateByRadians: (Number pi - angle   /2).

	v := m transform: v.		
	len := v r.
	radius := len / 2 / (angle /2) sin.
	
	center := v * (radius/len) + start.

	^ center
!

closePath
	surface context2D closePath.
!

curveViaX: x1 Y: y1 toX: x2 Y: y2
	surface context2D quadraticCurveTo: x1 a: y1 a: x2 a: y2.
!

curveViaX: x1 Y: y1 viaX: x2 Y: y2 toX: x3 Y: y3
	surface context2D bezierCurveTo: x1 a: y1 a: x2 a: y2 a: x3 a: y3.
!

lineToX: x Y: y
	surface context2D lineTo: x a: y.
!

moveToX: x Y: y
	surface context2D moveTo: x a: y.
! !

!AthensHTMLPathBuilder class methodsFor: 'instance creation'!

on: anHTMLSurface
	^ self basicNew
		surface: anHTMLSurface;
		initialize;
		yourself
!

on: anHTMLSurface with: aPathCreatingBlock
	^ self basicNew
		surface: anHTMLSurface;
		initialize;
		createPath: aPathCreatingBlock;
		yourself
! !


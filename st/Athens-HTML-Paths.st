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
!

asPolygon
	|polygon|
	polygon := AthensPolygon new.
	segment sendCommandsTo: polygon.
	^ polygon
! !

!AthensHTMLPath methodsFor: 'drawing'!

drawOn: anAthensCanvas
	"Replay saved path."
	
	[
		context2D := anAthensCanvas context2D.
		self newPath.
		segment sendCommandsTo: self.
	] ensure: [
		context2D := nil].
!

paintFillsUsing: aPaint on: anAthensCanvas 
	aPaint fillPath: self on: anAthensCanvas.
! !

!AthensHTMLPath methodsFor: 'path commands'!

arcTo: newEndPoint angle: angle cw: aBool
	< var start = self['@endPoint'];
	var end = self['@endPoint'] = newEndPoint;
	var cwAngle = aBool ? angle : -angle;
	var center = self._calcCenter_end_angle_(start, end, cwAngle);
	var vX = start._x() - center._x();
	var vY = start._y() - center._y();
	var radius = Math.sqrt(vX * vX + vY * vY);
	
	var vXAcos = Math.acos(vX / Math.sqrt(vX * vX + vY * vY));
	var startAngle = vY < 0 ? Math.PI * 2 - vXAcos : vXAcos;
	
	var eX = end._x() - center._x();
	var eY = end._y() - center._y();
	var eXAcos = Math.acos(eX / Math.sqrt(eX * eX + eY * eY));
	var endAngle = eY < 0 ? Math.PI * 2 - eXAcos : eXAcos;
	
	self['@context2D'].arc(center._x(), center._y(), radius, startAngle, endAngle, !!aBool); >
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
	endPoint := startPoint.
	context2D closePath.
!

curveVia: pt1 and: pt2 to: aPoint
	endPoint := aPoint.
	context2D bezierCurveVia: pt1 and: pt2 to: aPoint.
!

curveVia: pt1 to: aPoint
	endPoint := aPoint.
	context2D quadraticCurveVia: pt1 to: aPoint.
!

curveViaX: x1 Y: y1 toX: x2 Y: y2
	self curveVia: x1 @ y1 to: x2 @ y2.
!

curveViaX: x1 Y: y1 viaX: x2 Y: y2 toX: x3 Y: y3
	self curveVia: x1 @ y1 and: x2 @ y2 to: x3 @ y3.
!

cwArcTo: newEndPoint angle: angle
	" Add a clockwise arc segment, starting from current path endpoint and
	ending at andPt. Angle should be specified in radians 
	"
	^ self arcTo: newEndPoint angle: angle cw: true
!

lineTo: aPoint
	endPoint := aPoint.
	context2D lineTo: aPoint.
!

lineToX: x Y: y
	self lineToX: x Y: y.
!

moveTo: aPoint
	endPoint := aPoint.
	context2D moveTo: aPoint.
!

moveToX: x Y: y
	self moveTo: x @ y.
!

newPath
	endPoint := startPoint := 0 @ 0.
	context2D beginPath.
	self moveTo: startPoint.
! !

AthensHTMLPath class instanceVariableNames: 'zeroPoint'!

!AthensHTMLPath class methodsFor: 'initialization'!

initialize
	zeroPoint := 0@0.
! !

!AthensHTMLPath class methodsFor: 'instance creation'!

segment: startSegment
	^ self new
		segment: startSegment;
		yourself
! !


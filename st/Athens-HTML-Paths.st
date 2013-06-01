Smalltalk current createPackage: 'Athens-HTML-Paths'!
AthensPathBuilder subclass: #AthensHTMLPathBuilder
	instanceVariableNames: 'surface absolute endPoint pathCreatingBlock'
	package: 'Athens-HTML-Paths'!

!AthensHTMLPathBuilder methodsFor: 'accessing'!

createPath: aBlock
	self newPath.
	
	absolute := false.
	endPoint := self class zeroPoint.
	
	"set the implicit path origin"
	self moveToX: 0 Y: 0.

	aBlock value: self.
!

pathCreatingBlock
	^ pathCreatingBlock
!

pathCreatingBlock: aBlock
	pathCreatingBlock := aBlock.
!

surface
	^ surface
!

surface: anObject
	surface := anObject.
! !

!AthensHTMLPathBuilder methodsFor: 'path commands'!

absolute
	absolute := true.
!

draw
	self moveToX: 0 Y: 0.
	pathCreatingBlock value: self.
!

lineTo: aPoint
	endPoint := self toAbsolute: aPoint.
	^ self lineToX: endPoint x Y: endPoint y
!

newPath
	"surface context2D beginPath."
!

paintFillsUsing: aPaint on: anAthensCanvas 
	^ aPaint fillPath: self on: anAthensCanvas
!

toAbsolute: aPoint
	^ absolute 
			ifTrue: [aPoint] 
			ifFalse: [endPoint + aPoint]
! !

!AthensHTMLPathBuilder methodsFor: 'private'!

lineToX: x Y: y
	surface context2D lineTo: x a: y.
!

moveToX: x Y: y
	surface context2D moveTo: x a: y.
! !

!AthensHTMLPathBuilder class methodsFor: 'instance creation'!

on: anHTMLSurface with: aPathCreatingBlock
	^ self basicNew
		surface: anHTMLSurface;
		pathCreatingBlock: aPathCreatingBlock;
		initialize;
		yourself
! !


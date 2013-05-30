Smalltalk current createPackage: 'Athens-HTML-Matrices'!
Object subclass: #AthensHTMLMatrix
	instanceVariableNames: 'sx shx x shy sy y surface'
	package: 'Athens-HTML-Matrices'!

!AthensHTMLMatrix methodsFor: 'accessing'!

surface
	^ surface
!

surface: aSurface
	surface := aSurface.
! !

!AthensHTMLMatrix methodsFor: 'initialize-release'!

initialize
	self loadIdentity
! !

!AthensHTMLMatrix methodsFor: 'transformations'!

loadIdentity
	"initialize with identity transform"
	sx := sy := 1.0.
	shx := shy := x := y := 0.0.
!

rotateByDegrees: angle
	^ self rotateByRadians: angle degreesToRadians
!

rotateByRadians: angle
	surface context2D rotate: angle
!

scaleBy: factor
	"Do a uniform scale if factor is a number."
	
	factor isPoint 
		ifTrue: [self scaleX: factor x Y: factor y] 
		ifFalse: [self scaleX: factor Y: factor].
!

scaleX: fx Y: fy
	surface context2D scale: fx a: fy.
!

translateX: px Y: py
	surface context2D translate: px a: py.
! !

!AthensHTMLMatrix class methodsFor: 'instance creation'!

on: anHTMLSurface
	^ self basicNew
		surface: anHTMLSurface;
		yourself
! !


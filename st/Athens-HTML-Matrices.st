Smalltalk current createPackage: 'Athens-HTML-Matrices'!
AthensAffineTransform subclass: #AthensHTMLTransformation
	instanceVariableNames: 'surface'
	package: 'Athens-HTML-Matrices'!

!AthensHTMLTransformation methodsFor: 'accessing'!

getMatrix
	self error: 'not allowed'.
!

surface: aSurface
	surface := aSurface.
! !

!AthensHTMLTransformation methodsFor: 'transformations'!

loadAffineTransform: m
	surface context2D transform: m sx a: m shy a: m shx a: m sy a: m x a: m y.
!

loadGlobalIdentity
	surface context2D transform: 1 a: 0 a: 0 a: 1 a: 0 a: 0.
!

loadIdentity
	surface context2D transform: 1 a: 0 a: 0 a: 1 a: 0 a: 0.
!

multiplyBy: m
	surface context2D transformBy: m sx a: m shy a: m shx a: m sy a: m x a: m y.
!

restoreAfter: aBlock
	surface context2D push.
	aBlock ensure: [surface context2D pop].
!

rotateByDegrees: angle
	surface context2D rotateByRadians: angle * Number pi /  180.
!

rotateByRadians: angle
	surface context2D rotateByRadians: angle.
!

scaleBy: factor
	factor isNumber
		ifTrue: [surface context2D scaleByX: factor Y: factor]
		ifFalse: [surface context2D scaleByX: factor x Y: factor y].
!

scaleX: fx Y: fy
	surface context2D scaleByX: fx Y: fy.
!

translateBy: aPoint
	surface context2D translateByX: aPoint x Y: aPoint y.
!

translateX: px Y: py
	surface context2D translateByX: px Y: py.
! !

!AthensHTMLTransformation class methodsFor: 'instance creation'!

on: anHTMLSurface
	^ self basicNew
		surface: anHTMLSurface;
		initialize;
		yourself
! !


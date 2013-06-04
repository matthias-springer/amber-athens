Smalltalk current createPackage: 'Athens-HTML-Matrices'!
AthensAffineTransform subclass: #AthensHTMLMatrix
	instanceVariableNames: 'surface'
	package: 'Athens-HTML-Matrices'!

!AthensHTMLMatrix methodsFor: 'accessing'!

surface
	^ surface
!

surface: aSurface
	surface := aSurface.
! !

!AthensHTMLMatrix methodsFor: 'applying transformations'!

apply
	"Applies this matrix to the current transformation (multiplication)."
	surface ifNotNil: [
		surface context2D transform: sx a: shy a: shx a: sy a: x a: y].
!

set
	"Overwrites the current transformation."
	surface ifNotNil: [
		surface context2D setTransform: sx a: shy a: shx a: sy a: x a: y].
! !

!AthensHTMLMatrix methodsFor: 'transformations'!

loadAffineTransform: m
	super loadAffineTransform: m.
	self set.
!

loadIdentity
	super loadIdentity.
	self set.
!

restoreAfter: aBlock
	|matrixBefore|
	matrixBefore := self copy.
	aBlock ensure: [self loadAffineTransform: matrixBefore].
! !

!AthensHTMLMatrix class methodsFor: 'instance creation'!

on: anHTMLSurface
	^ self basicNew
		surface: anHTMLSurface;
		initialize;
		yourself
! !


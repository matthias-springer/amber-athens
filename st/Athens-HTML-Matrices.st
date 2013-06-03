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

!AthensHTMLMatrix methodsFor: 'transformations'!

applyToContext
	surface ifNotNil: [
		surface context2D setTransform: sx a: shy a: shx a: sy a: x a: y].
!

loadAffineTransform: m
	super loadAffineTransform: m.
	self applyToContext.
!

loadIdentity
	super loadIdentity.
	self applyToContext.
!

restoreAfter: aBlock
	surface context2D save.
	aBlock ensure: [surface context2D restore].
!

rotateByRadians: angle
	super rotateByRadians: angle.
	"surface context2D rotate: angle."
!

scaleBy: factor
	factor isPoint 
		ifTrue: [self scaleX: factor x Y: factor y] 
		ifFalse: [self scaleX: factor Y: factor].
!

scaleX: fx Y: fy
	super scaleX: fx Y: fy.
	"surface context2D scale: fx a: fy."
!

translateX: px Y: py
	super translateX: px Y: py.
	"surface context2D translate: px a: py."
! !

!AthensHTMLMatrix class methodsFor: 'instance creation'!

on: anHTMLSurface
	^ self basicNew
		surface: anHTMLSurface;
		initialize;
		yourself
! !


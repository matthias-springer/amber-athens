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
	< // Applies this matrix to the current transformation (multiplication)
	if (self['@surface'] !!== undefined) {
		self['@surface']['@context2D'].transform(self['@sx'], self['@shy'], self['@shx'], self['@sy'], self['@x'], self['@y']);
	} >
!

set
	< // Overwrites the current transformation
	if (self['@surface'] !!== undefined) {
		self['@surface']['@context2D'].setTransform(self['@sx'], self['@shy'], self['@shx'], self['@sy'], self['@x'], self['@y']);
	} >
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


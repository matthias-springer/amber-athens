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
	< self['@surface']['@context2D'].setTransform(m['@sx'], m['@shy'], m['@shx'], m['@sy'], m['@x'], m['@y']); >
!

loadIdentity
	< self['@surface']['@context2D'].setTransform(1, 0, 0, 1, 0, 0); >
!

multiplyBy: m
	< self['@surface']['@context2D'].transform(m['@sx'], m['@shy'], m['@shx'], m['@sy'], m['@x'], m['@y']); >
!

restoreAfter: aBlock
	< self['@surface']['@context2D'].save();
	
	aBlock._ensure_(function() {
		self['@surface']['@context2D'].restore();
	}); >
!

rotateByDegrees: angle
	< self['@surface']['@context2D'].rotate(angle * Math.PI/180); >
!

rotateByRadians: angle
	< self['@surface']['@context2D'].rotate(angle); >
!

scaleBy: factor
	< if (factor.constructor === Number) {
		self['@surface']['@context2D'].scale(factor, factor);
	}	
	else {
		self['@surface']['@context2D'].scale(factor['@x'], factor['@y']);
	} >
!

scaleX: fx Y: fy
	< self['@surface']['@context2D'].scale(fx, fy); >
!

translateBy: aPoint
	< self['@surface']['@context2D'].translate(aPoint['@x'], aPoint['@y']); >
!

translateX: px Y: py
	< self['@surface']['@context2D'].translate(px, py); >
! !

!AthensHTMLTransformation class methodsFor: 'instance creation'!

on: anHTMLSurface
	^ self basicNew
		surface: anHTMLSurface;
		initialize;
		yourself
! !


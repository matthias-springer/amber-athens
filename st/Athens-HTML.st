Smalltalk current createPackage: 'Athens-HTML'!
AthensSurface subclass: #AthensHTMLSurface
	instanceVariableNames: 'extent canvas context2D'
	package: 'Athens-HTML'!

!AthensHTMLSurface methodsFor: 'accessing'!

canvas
	^ canvas
!

canvas: aDomElement
	canvas := aDomElement
!

extent
	^ extent
!

extent: anExtent
	extent := anExtent.
!

height
	^ extent y
!

width
	^ extent x
! !

!AthensHTMLSurface methodsFor: 'initializing'!

backgroundColor: aString
	context2D fillStyle: aString.
	context2D fillRect: 0 a: 0 a: self width a: self height.
!

initialize
	|html|
	html := HTMLCanvas onJQuery: '#workspace' asJQuery.
	'#workspace' asJQuery empty.
	canvas := html canvas.
	canvas height: self height.
	canvas width: self width.
	context2D := canvas element getContext: '2d'.
	self backgroundColor: '#000000'.
! !

!AthensHTMLSurface class methodsFor: 'instance creation'!

extent: anExtent
	^ self basicNew
		extent: anExtent;
		initialize;
		yourself
! !


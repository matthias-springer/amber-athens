Smalltalk current createPackage: 'Athens-HTML-Paints'!
AthensPaint subclass: #AthensHTMLSolidPaint
	instanceVariableNames: 'r g b a'
	package: 'Athens-HTML-Paints'!

!AthensHTMLSolidPaint methodsFor: 'accessing'!

color: aColor
	r := aColor red * 255.
	g := aColor green * 255.
	b := aColor blue * 255.
	a := aColor alpha.
! !

!AthensHTMLSolidPaint methodsFor: 'drawing'!

fillPath: path on: anAthensCanvas 
	self loadOn: anAthensCanvas.
	anAthensCanvas
		newPath;
		loadPath: path.
		
	self fillOn: anAthensCanvas
!

fillRectangle: aRect on: anAthensCanvas
	"This is a terminal method in rendering dispatch scheme
	canvas->shape->paint. See AthensCanvas>>fillShape: "
	self loadOn: anAthensCanvas.
	anAthensCanvas rectangleX: aRect left y: aRect top width: aRect width height: aRect height.
!

loadOn: anAthensCanvas
	anAthensCanvas setSourceR: r g: g b: b a: a.
! !


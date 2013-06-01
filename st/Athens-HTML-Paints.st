Smalltalk current createPackage: 'Athens-HTML-Paints'!
AthensPaint subclass: #AthensHTMLSolidPaint
	instanceVariableNames: 'r g b a'
	package: 'Athens-HTML-Paints'!

!AthensHTMLSolidPaint methodsFor: 'accessing'!

alpha
	^ a
!

blue
	^ b
!

color: aColor
	r := aColor red * 255.
	g := aColor green * 255.
	b := aColor blue * 255.
	a := aColor alpha.
!

green
	^ g
!

red
	^ r
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

AthensStrokePaint subclass: #AthensHTMLStrokePaint
	instanceVariableNames: 'dashLenghts dashOffset'
	package: 'Athens-HTML-Paints'!

!AthensHTMLStrokePaint methodsFor: 'drawing'!

fillPath: aPath on: anAthensCanvas
	|context|
	context := anAthensCanvas surface context2D.
	context strokeStyle: 'rgba(', fillPaint red, ', ', fillPaint green, ', ', fillPaint blue, ', ', fillPaint alpha, ')'.
	context lineWidth: width.
	aPath draw.
	context stroke.
!

loadOn: aCanvas
	self fillPaint loadOn: aCanvas.
! !

!AthensHTMLStrokePaint methodsFor: 'initialize-release'!

initialize
	super initialize.

	width := 1.
	capStyle := joinStyle := nil.
! !


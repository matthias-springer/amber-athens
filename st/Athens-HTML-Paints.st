Smalltalk current createPackage: 'Athens-HTML-Paints'!
AthensPaint subclass: #AthensHTMLPaint
	instanceVariableNames: 'fillStyle'
	package: 'Athens-HTML-Paints'!

!AthensHTMLPaint methodsFor: 'converting'!

asAthensPaintOn: anAthensCanvas	
	^ self
! !

!AthensHTMLPaint methodsFor: 'drawing'!

drawString: aString on: anAthensCanvas
	< var context2D = anAthensCanvas._context2D();
	context2D.fillStyle = self['@fillStyle'];
	anAthensCanvas._pathTransform()._set();
	context2D.fillText(aString, 0, 0); >
!

fillPath: aPath on: anAthensCanvas
	< var context2D = anAthensCanvas['@surface']['@context2D'];
	context2D.beginPath();
	anAthensCanvas['@pathTransform']._set();
	aPath._drawOn_(anAthensCanvas);
	anAthensCanvas['@paintTransform']._apply();
	context2D.fillStyle = self['@fillStyle'];
	context2D.fill(); >
!

fillRectangle: aRect on: anAthensCanvas
	< var context2D = anAthensCanvas['@surface']['@context2D'];
	context2D.beginPath();
	anAthensCanvas['@pathTransform']._set();
	context2D.rect(aRect._left(), aRect._top(), aRect._width(), aRect._height());
	anAthensCanvas['@paintTransform']._apply();
	context2D.fillStyle = self['@fillStyle'];
	context2D.fill(); >
! !

AthensHTMLPaint subclass: #AthensHTMLGradientPaint
	instanceVariableNames: 'start stop innerRadius outerRadius colorRamp'
	package: 'Athens-HTML-Paints'!

!AthensHTMLGradientPaint methodsFor: 'accessing'!

colorRamp: aColorRamp
	colorRamp := aColorRamp.
!

innerRadius: aNumber
	innerRadius := aNumber.
!

outerRadius: aNumber
	outerRadius := aNumber.
!

start: aPoint
	start := aPoint.
!

stop: aPoint
	stop := aPoint.
! !

!AthensHTMLGradientPaint methodsFor: 'drawing'!

fillPath: aPath on: anAthensCanvas
	|context2D|
	context2D := anAthensCanvas context2D.
	self createGradient: context2D.
	self populateRamp: colorRamp.
	super fillPath: aPath on: anAthensCanvas.
!

fillRectangle: aRect on: anAthensCanvas
	|context2D|
	context2D := anAthensCanvas context2D.
	self createGradient: context2D.
	self populateRamp: colorRamp.
	super fillRectangle: aRect on: anAthensCanvas.
! !

!AthensHTMLGradientPaint methodsFor: 'initialization'!

createGradient: context2D
	innerRadius 
		ifNil: [fillStyle := context2D createLinearGradient: start x a: start y a: stop x a: stop y]
		ifNotNil: [fillStyle := context2D createRadialGradient: start x a: start y a: innerRadius a: stop x a: stop y a: outerRadius].
!

populateRamp: aRamp
	aRamp do: [:assoc |
		fillStyle addColorStop: assoc key a: assoc value rgbaString].
! !

!AthensHTMLGradientPaint class methodsFor: 'instance creation'!

createLinearGradient: aColorRamp start: aStartPoint stop: aStopPoint
	^ self basicNew
		start: aStartPoint;
		stop: aStopPoint;
		initialize;
		colorRamp: aColorRamp;
		yourself
!

radialBetween: origin extending: innerRadius and: outerOrigin  extending: outerRadius withColorRamp: aColorRamp
	^ self basicNew
		start: origin;
		stop: outerOrigin;
		innerRadius: innerRadius;
		outerRadius: outerRadius;
		initialize;
		colorRamp: aColorRamp;
		yourself
! !

AthensHTMLPaint subclass: #AthensHTMLPatternPaint
	instanceVariableNames: 'repeatMode'
	package: 'Athens-HTML-Paints'!

!AthensHTMLPatternPaint methodsFor: 'converting'!

asAthensPaintOn: anAthensCanvas	
	^ self
! !

!AthensHTMLPatternPaint methodsFor: 'drawing'!

fillPath: aPath on: anAthensCanvas
	|context2D|
	context2D := anAthensCanvas context2D.
	fillStyle := context2D createPattern: self patternSource a: repeatMode.
	super fillPath: aPath on: anAthensCanvas.
!

fillRectangle: aRect on: anAthensCanvas
	|context2D|
	context2D := anAthensCanvas context2D.
	fillStyle := context2D createPattern: self patternSource a: repeatMode.
	super fillRectangle: aRect on: anAthensCanvas.
!

noRepeat
	repeatMode := 'no-repeat'.
!

patternSource
	self subclassResponsibility.
!

repeat
	repeatMode := 'repeat'.
! !

!AthensHTMLPatternPaint methodsFor: 'initialize-release'!

initialize
	self noRepeat.
! !

AthensHTMLPatternPaint subclass: #AthensHTMLBitmapPaint
	instanceVariableNames: 'bitmap loadingCallback'
	package: 'Athens-HTML-Paints'!

!AthensHTMLBitmapPaint methodsFor: 'accessing'!

bitmap: aBitmap
	bitmap := aBitmap.
!

loadingCallback: aBlock
	loadingCallback := aBlock.
	bitmap image complete
		ifTrue: [aBlock value: self]
		ifFalse: [bitmap image onLoad: [aBlock value: self]].
! !

!AthensHTMLBitmapPaint methodsFor: 'drawing'!

patternSource
	bitmap image complete
		ifFalse: [self error: 'image not preloaded.'].
	^ bitmap image
! !

!AthensHTMLBitmapPaint class methodsFor: 'instance creation'!

forBitmap: aBitmap
	^ self new
		bitmap: aBitmap;
		yourself
!

forBitmap: aBitmap afterLoading: aBlock
	^ self new
		bitmap: aBitmap;
		loadingCallback: aBlock;
		yourself
! !

AthensHTMLPatternPaint subclass: #AthensHTMLPatternSurfacePaint
	instanceVariableNames: 'surface'
	package: 'Athens-HTML-Paints'!

!AthensHTMLPatternSurfacePaint methodsFor: 'accessing'!

patternSource
	^ surface canvasTag
!

surface: aSurface
	surface := aSurface.
! !

!AthensHTMLPatternSurfacePaint class methodsFor: 'instance creation'!

forSurface: aSurface
	^ self new
		surface: aSurface;
		yourself
! !

AthensHTMLPaint subclass: #AthensHTMLSolidPaint
	instanceVariableNames: 'color'
	package: 'Athens-HTML-Paints'!

!AthensHTMLSolidPaint methodsFor: 'accessing'!

color: aColor
	fillStyle := aColor rgbaString.
! !

!AthensHTMLSolidPaint methodsFor: 'drawing'!

drawString: aString on: anAthensCanvas
	< var context2D = anAthensCanvas['@surface']['@context2D'];
	context2D.fillStyle = self['@fillStyle'];
	anAthensCanvas._pathTransform()._set();
	context2D.fillText(aString, 0, 0); >
!

fillPath: aPath on: anAthensCanvas
	< var context2D = anAthensCanvas['@surface']['@context2D'];
	anAthensCanvas._pathTransform()._set();
	context2D.fillStyle = self['@fillStyle'];
	aPath._drawOn_(anAthensCanvas);
	context2D.fill(); >
!

fillRectangle: aRect on: anAthensCanvas
	< var context2D = anAthensCanvas['@surface']['@context2D'];
	anAthensCanvas._pathTransform()._set();
	context2D.fillStyle = self['@fillStyle'];
	context2D.fillRect(aRect._left(), aRect._top(), aRect._width(), aRect._height()); >
! !

AthensStrokePaint subclass: #AthensHTMLStrokePaint
	instanceVariableNames: 'dashLenghts dashOffset'
	package: 'Athens-HTML-Paints'!

!AthensHTMLStrokePaint methodsFor: 'accessing'!

dashes: anAlternateCollectionOfLenghts offset: anOffset
	dashLenghts := anAlternateCollectionOfLenghts.
	dashOffset := anOffset.
! !

!AthensHTMLStrokePaint methodsFor: 'drawing'!

fillPath: aPath on: anAthensCanvas
	< var context2D = anAthensCanvas['@surface']['@context2D'];
	anAthensCanvas['@pathTransform']._set();
	context2D.strokeStyle = self['@fillPaint']['@fillStyle'];
	context2D.lineWidth = self['@width'];
	context2D.lineJoin = self['@joinStyle'];
	context2D.lineCap = self['@capStyle'];
	// TODO: this only works in Chrome, see http://www.rgraph.net/blog/2013/january/html5-canvas-dashed-lines.html
	if (context2D.setLineDash !!== undefined) {
		context2D.setLineDash(self['@dashLenghts']);
		context2D.lineDashOffset = self['@dashOffset'];
	}
	aPath._drawOn_(anAthensCanvas);
	context2D.stroke(); >
! !

!AthensHTMLStrokePaint methodsFor: 'initialize-release'!

context: aContext
	context2D := aContext.
!

initialize
	super initialize.

	width := 1.
	capStyle := joinStyle := nil.
! !

!AthensHTMLStrokePaint methodsFor: 'setting cap styles'!

capButt
	< self['@capStyle'] = 'butt'; >
!

capRound
	< self['@capStyle'] = 'round'; >
!

capSquare
	< self['@capStyle'] = 'square'; >
! !

!AthensHTMLStrokePaint methodsFor: 'setting join styles'!

joinBevel
	< self['@joinStyle'] = 'bevel'; >
!

joinMiter
	< self['@joinStyle'] = 'miter'; >
!

joinRound
	< self['@joinStyle'] = 'round'; >
! !


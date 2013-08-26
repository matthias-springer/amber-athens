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
	< var context2D = anAthensCanvas['@surface']['@context2D'];
	self._preparePaintFor_(context2D);
	context2D.beginPath();
	//anAthensCanvas['@paintTransform']._apply();
	context2D.fillStyle = self['@fillStyle'];
	context2D.fillText(aString, 0, 0); >
!

fillPath: aPath on: anAthensCanvas
	< var context2D = anAthensCanvas['@surface']['@context2D'];
	self._preparePaintFor_(context2D);
	context2D.beginPath();
	aPath._drawOn_(anAthensCanvas);
	context2D.save();
	anAthensCanvas['@pathTransform']._multiplyBy_(anAthensCanvas['@paintTransform']);
	context2D.fillStyle = self['@fillStyle'];
	context2D.fill(); 
	context2D.restore();>
!

fillRectangle: aRect on: anAthensCanvas
	< var context2D = anAthensCanvas['@surface']['@context2D'];
	self._preparePaintFor_(context2D);
	context2D.beginPath();
	context2D.rect(aRect._left(), aRect._top(), aRect._width(), aRect._height());
	context2D.save();
	anAthensCanvas['@pathTransform']._multiplyBy_(anAthensCanvas['@paintTransform']);
	context2D.fillStyle = self['@fillStyle'];
	context2D.fill(); 
	context2D.restore(); >
!

preparePaintFor: context2D
	self subclassResponsibility.
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

preparePaintFor: context2D
	< if (self['@innerRadius'] === undefined) {
		self['@fillStyle'] = context2D.createLinearGradient(self['@start']._x(), self['@start']._y(), self['@stop']._x(), self['@stop']._y());
	}
	else {
		self['@fillStyle'] = context2D.createRadialGradient(self['@start']._x(), self['@start']._y(), self['@innerRadius'], self['@stop']._x(), self['@stop']._y(), self['@outerRadius']);
	}
	self['@colorRamp']._do_(function(assoc) {
		self['@fillStyle'].addColorStop(assoc['@key'], assoc['@value']._rgbaString());
	}); >
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
	instanceVariableNames: 'repeatMode anAthensCanvas patternSource'
	package: 'Athens-HTML-Paints'!

!AthensHTMLPatternPaint methodsFor: 'drawing'!

noRepeat
	repeatMode := 'no-repeat'.
!

preparePaintFor: context2D
	< self['@fillStyle'] = context2D.createPattern(self['@patternSource'], self['@repeatMode']); >
!

repeat
	repeatMode := 'repeat'.
! !

!AthensHTMLPatternPaint methodsFor: 'initialize-release'!

initialize
	repeatMode := 'no-repeat'.
! !

AthensHTMLPatternPaint subclass: #AthensHTMLBitmapPaint
	instanceVariableNames: ''
	package: 'Athens-HTML-Paints'!

!AthensHTMLBitmapPaint methodsFor: 'accessing'!

bitmap: aBitmap
	patternSource := aBitmap.
!

height
	< return self['@patternSource'].height; >
!

loadingCallback: aBlock
	< if (self['@patternSource'].complete) {
		aBlock._value_(self);
	}
	else {
		self['@patternSource'].onload = function() {aBlock._value_(self);};
	} >
!

width
	< return self['@patternSource'].width; >
! !

!AthensHTMLBitmapPaint class methodsFor: 'instance creation'!

fromImage: aBitmap
	^ self new
		bitmap: aBitmap;
		yourself
!

fromImage: aBitmap afterLoading: aBlock
	^ self new
		bitmap: aBitmap;
		loadingCallback: aBlock;
		yourself
! !

AthensHTMLPatternPaint subclass: #AthensHTMLPatternSurfacePaint
	instanceVariableNames: 'surface'
	package: 'Athens-HTML-Paints'!

!AthensHTMLPatternSurfacePaint methodsFor: 'accessing'!

surface: aSurface
	< self['@patternSource'] = aSurface['@canvasTag']; >
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
	< self['@fillStyle'] = aColor._rgbaString(); >
! !

!AthensHTMLSolidPaint methodsFor: 'drawing'!

drawString: aString on: anAthensCanvas
	< var context2D = anAthensCanvas['@surface']['@context2D'];
	context2D.fillStyle = self['@fillStyle'];
	context2D.fillText(aString, 0, 0); >
!

fillPath: aPath on: anAthensCanvas
	< var context2D = anAthensCanvas['@surface']['@context2D'];
	context2D.fillStyle = self['@fillStyle'];
	aPath._drawOn_(anAthensCanvas);
	context2D.fill(); >
!

fillRectangle: aRect on: anAthensCanvas
	< var context2D = anAthensCanvas['@surface']['@context2D'];
	context2D.fillStyle = self['@fillStyle'];
	context2D.fillRect(aRect._left(), aRect._top(), aRect._width(), aRect._height()); >
!

preparePaintFor: context2D
	"nothing to do"
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
!

fillRectangle: aRect on: anAthensCanvas
	< var context2D = anAthensCanvas['@surface']['@context2D'];
	context2D.strokeStyle = self['@fillPaint']['@fillStyle'];
	context2D.lineWidth = self['@width'];
	context2D.lineJoin = self['@joinStyle'];
	context2D.lineCap = self['@capStyle'];
	// TODO: this only works in Chrome, see http://www.rgraph.net/blog/2013/january/html5-canvas-dashed-lines.html
	if (context2D.setLineDash !!== undefined) {
		context2D.setLineDash(self['@dashLenghts']);
		context2D.lineDashOffset = self['@dashOffset'];
	}
	context2D.rect(aRect._left(), aRect._top(), aRect._width(), aRect._height());
	context2D.stroke(); >
! !

!AthensHTMLStrokePaint methodsFor: 'initialize-release'!

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


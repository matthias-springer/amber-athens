Smalltalk current createPackage: 'Athens-Amber'!
Object subclass: #CanvasContext2D
	instanceVariableNames: ''
	package: 'Athens-Amber'!
!CanvasContext2D commentStamp!
I am an HTML Canvas 2D drawing context. I am used internally by Athens-HTML and considered private.!

!CanvasContext2D methodsFor: 'compositing'!

globalCompositeOperation
	< return self.globalCompositeOperation; >
!

globalCompositeOperation: aString
	< self.globalCompositeOperation = aString; >
! !

!CanvasContext2D methodsFor: 'line styles'!

lineCap: aNumber
	< self.lineCap = aNumber; >
!

lineDash: anArray
	< if (self.setLineDash !!== undefined) {
		self.setLineDash(anArray);
	} >
!

lineDashOffset: aNumber
	< if (self.setLineDash !!== undefined) {
		self.lineDashOffset = aNumber;
	} >
!

lineJoin: aNumber
	< self.lineJoin = aNumber; >
!

lineWidth: aNumber
	< self.lineWidth = aNumber; >
!

miterLimit: aNumber
	< self.miterLimit = aNumber; >
! !

!CanvasContext2D methodsFor: 'paths'!

beginPath
	< self.beginPath(); >
!

bezierCurveVia: pt1 and: pt2 to: aPoint
	< self.bezierCurveTo(pt1._x(), pt1._y(), pt2._x(), pt2._y(), aPoint._x(), aPoint._y()); >
!

clip
	< self.clip(); >
!

closePath
	< self.closePath(); >
!

fill
	< self.fill(); >
!

lineTo: aPoint
	< self.lineTo(aPoint._x(), aPoint._y()); >
!

moveTo: aPoint
	< self.moveTo(aPoint._x(), aPoint._y()); >
!

quadraticCurveVia: pt1 to: aPoint
	< self.quadraticCurveTo(pt1._x(), pt1._y(), aPoint._x(), aPoint._y()); >
!

stroke
	< self.stroke(); >
! !

!CanvasContext2D methodsFor: 'private'!

clearRect: left a: top a: right a: bottom
	< self.clearRect(left, top, right, bottom); >
!

createLinearGradient: x1 a: y1 a: x2 a: y2
	< return self.createLinearGradient(x1, y1, x2, y2); >
!

createRadialGradient: x1 a: y1 a: innerRadius a: x2 a: y2 a: outerRadius
	< return self.createRadialGradient(x1, y1, innerRadius, x2, y2, outerRadius); >
!

fillRect: left a: top a: right a: bottom
	< self.fillRect(left, top, right, bottom); >
!

rect: left a: top a: right a: bottom
	< self.rect(left, top, right, bottom); >
!

strokeRect: left a: top a: right a: bottom
	< self.strokeRect(left, top, right, bottom); >
! !

!CanvasContext2D methodsFor: 'rectangles'!

clearRect: rect
	self clearRect: rect left a: rect top a: rect right a: rect bottom.
!

fillRect: rect
	self fillRect: rect left a: rect top a: rect right a: rect bottom.
!

rect: rect
	self rect: rect left a: rect top a: rect right a: rect bottom.
!

strokeRect: rect
	self strokeRect: rect left a: rect top a: rect right a: rect bottom.
! !

!CanvasContext2D methodsFor: 'save/restore context'!

pop
	< self.restore(); >
!

push
	< self.save(); >
! !

!CanvasContext2D methodsFor: 'styles'!

createLinearGradientFrom: start to: stop
	^ self createLinearGradient: start x a: start y a: stop x a: stop y
!

createPattern: source repeat: repeatMode
	< self.createPattern(source, repeatMode); >
!

createRadialGradientFrom: start with: innerRadius to: stop with: outerRadius
	^ self createRadialGradient: start x a: start y a: innerRadius a: stop x a: stop y a: outerRadius
!

fillStyle: anObject
	< self.fillStyle = anObject; >
!

strokeStyle: anObject
	< self.strokeStyle = anObject; >
! !

!CanvasContext2D methodsFor: 'text'!

fillText: aString X: x Y: y
	< self.fillText(aString, x, y); >
!

font: aString
	< self.font = aString; >
!

measureStringWidth: aString
	< return self.measureText(aString).width; >
! !

!CanvasContext2D methodsFor: 'transformations'!

rotateByRadians: angle
	< self.rotate(angle); >
!

scaleByX: x Y: y
	< self.scale(x, y); >
!

transform: sx a: shy a: shx a: sy a: x a: y
	< self.setTransform(sx, shy, shx, sy, x, y); >
!

transformBy: sx a: shy a: shx a: sy a: x a: y
	< self.transform(sx, shy, shx, sy, x, y); >
!

translateByX: x Y: y
	< self.translate(x, y); >
! !

Object subclass: #CanvasGradient
	instanceVariableNames: ''
	package: 'Athens-Amber'!
!CanvasGradient commentStamp!
I am an HTML Canvas gradient object. I am used internally by Athens-HTML and considered private.!

!CanvasGradient methodsFor: 'styles'!

addColorStopAt: pos color: color
	< self.addColorStop(pos, color); >
! !

Object subclass: #Color
	instanceVariableNames: 'rgbaString alpha r g b'
	package: 'Athens-Amber'!
!Color commentStamp!
I represent a color.

## API
The method `#r`, `#g`, `#b`, `#alpha` are used to retrieve my red, green, blue, and alpha component. Setters exist for modifying my color components.

The methods `self class>>#r:g:b:` and `self class>>#r:g:b:a:` are used to create new color instances.!

!Color methodsFor: 'accessing'!

alpha
	alpha ifNil: [alpha := 1].
	^ alpha
!

alpha: aNumber
	alpha := aNumber.
	rgbaString := nil.
!

b: blue
	b := blue.
	rgbaString := nil.
!

blue
	^ b
!

g: green
	g := green.
	rgbaString := nil.
!

green
	^ g
!

r: red
	r := red.
	rgbaString := nil.
!

red
	^ r
!

rgbaString
	< if (self['@rgbaString'] !!== undefined && !!self['@rgbaString']._isNil()) {
		return self['@rgbaString'];
	}
	else {
		if (self['@alpha'] === undefined) { 
			return self['@rgbaString'] = 'rgba(' + Math.round(self['@r']*255) + ',' + Math.round(self['@g']*255) + ',' + Math.round(self['@b']*255) + ',1)';
		}
		else {
			return self['@rgbaString'] = 'rgba(' + Math.round(self['@r']*255) + ',' + Math.round(self['@g']*255) + ',' + Math.round(self['@b']*255) + ',' + self['@alpha'] + ')';
		}
	} >
! !

!Color class methodsFor: 'instance creation'!

black
	< return self._r_g_b_rgba_(0, 0, 0, 'rgba(0,0,0,1)'); >
!

blue
	< return self._r_g_b_rgba_(0, 0, 1, 'rgba(0,0,255,1)'); >
!

cosmoBlue
	< return self._r_g_b_rgba_(0.06, 0.51, 0.96, 'rgba(15,130,245,1)'); >
!

cosmoDarkBlue
	< return self._r_g_b_rgba_(0, 0.3, 0.6, 'rgba(0,76,153,1)'); >
!

cosmoDarkGray
	< return self._r_g_b_rgba_(0.33, 0.33, 0.33, 'rgba(85,85,85,1)'); >
!

cosmoDarkPurple
	< return self._r_g_b_rgba_(0.38, 0.19, 0.48, 'rgba(97,48,121,1)'); >
!

cosmoGray
	< return self._r_g_b_rgba_(0.6, 0.6, 0.6, 'rgba(153,153,153,1)'); >
!

cosmoLightGray
	< return self._r_g_b_rgba_(0.87, 0.87, 0.87, 'rgba(223,223,223,1)'); >
!

cosmoLightPurple
	< return self._r_g_b_rgba_(0.69, 0.48, 0.8, 'rgba(177,123,203,1)'); >
!

cosmoMiddleBlue
	< return self._r_g_b_rgba_(0, 0.45, 0.9, 'rgba(0,114,230,1)'); >
!

cosmoMiddlePurple
	< return self._r_g_b_rgba_(0.55, 0.28, 0.69, 'rgba(141,70,176,1)'); >
!

cosmoPurple
	< return self._r_g_b_rgba_(0.61, 0.35, 0.73, 'rgba(155,89,187,1)'); >
!

gray
	< return self._r_g_b_rgba_(0.5, 0.5, 0.5, 'rgba(128, 128, 128, 1)'); >
!

green
	< return self._r_g_b_rgba_(0, 1, 0, 'rgba(0,255,0,1)'); >
!

r: red g: green b: blue
	< var instance = self._new();
	instance['@r'] = red;
	instance['@g'] = green;
	instance['@b'] = blue;
	return instance; >
!

r: red g: green b: blue a: alpha
	< var instance = self._new();
	instance['@r'] = red;
	instance['@g'] = green;
	instance['@b'] = blue;
	instance['@alpha'] = alpha;
	return instance; >
!

r: red g: green b: blue rgba: rgbaString
	< var instance = self._new();
	instance['@r'] = red;
	instance['@g'] = green;
	instance['@b'] = blue;
	instance['@rgbaString'] = rgbaString;
	return instance; >
!

red
	< return self._r_g_b_rgba_(1, 0, 0, 'rgba(255,0,0,1)'); >
!

transparent
	^ self new r: 0; g: 0; b: 0; alpha: 0; yourself
!

white
	< return self._r_g_b_rgba_(1, 1, 1, 'rgba(255,255,255,1)'); >
!

yellow
	< return self._r_g_b_rgba_(1, 1, 0, 'rgba(255,255,0,1)'); >
! !

Object subclass: #Image
	instanceVariableNames: ''
	package: 'Athens-Amber'!
!Image commentStamp!
I represent a DOM image element. I am loaded asynchronously from a URL.


## API

The `#onLoad:` method is used to bind a event that is triggered when the image was loaded by the browser. I provide a method `#complete` to determine the loading status at any time.!

!Image methodsFor: 'accessing'!

height
	< return self.height; >
!

onLoad: aBlock
 	< self.onload = aBlock; >
!

source: anUrl
	< self.src = anUrl; >
!

width
	< return self.width; >
!

yourself
	< return self; >
! !

!Image methodsFor: 'state'!

complete
	< return self.complete; >
! !

!Image class methodsFor: 'instance creation'!

fromUrl: anUrl
	^ Image new
		source: anUrl;
		yourself
! !

Object subclass: #LogicalFont
	instanceVariableNames: 'familyName size sizeUnit'
	package: 'Athens-Amber'!
!LogicalFont commentStamp!
I represent a text font with a specific size.

## API
The method `#familyName` returns my family name. The set of possible font families depends on your web browser. Web browsers typically support at least 'Arial', 'Courier', 'Helvetica', 'monospace' and 'Times'. Web fonts can be used as well after they are loaded.

The method `#size` returns my size. The default size measurement unit is pixels, but it can be changed with `#sizeUnit:`. Possible values are 'pt' and 'px'.!

!LogicalFont methodsFor: 'accessing'!

familyName
	^ familyName
!

familyName: aString
	familyName := aString.
!

size
	^ size
!

size: anInteger
	size := anInteger.
!

sizeUnit
	^ sizeUnit
!

sizeUnit: aString
	({'pt'. 'px'} includes: aString)
		ifFalse: [self error: 'Invalid size measurement unit']
		ifTrue: [sizeUnit := aString].
! !

!LogicalFont methodsFor: 'converting'!

asHTMLString
	^ size asString, sizeUnit asString, ' ', familyName
! !

!LogicalFont methodsFor: 'initialization'!

initialize
	super initialize.
	sizeUnit := 'px'.
! !

!LogicalFont class methodsFor: 'instance creation'!

familyName: aString pixelSize: anInteger
	^ self new
		familyName: aString;
		size: anInteger;
		sizeUnit: 'px';
		yourself
!

familyName: aString pointSize: anInteger
	^ self new
		familyName: aString;
		size: anInteger;
		sizeUnit: 'pt';
		yourself
!

familyName: aString size: anInteger
	^ self
		familyName: aString
		pixelSize: anInteger
! !

Object subclass: #Rectangle
	instanceVariableNames: 'origin corner'
	package: 'Athens-Amber'!
!Rectangle commentStamp!
I am a rectangle. I have a point of origin and a corner point.


## API

The `#insectsWith:` method is used to determine whether I intersect with another rectangle.

The `#boundsAfterMultiplicationWith:` method is used to calculate my bounding box after transforming myself with the argument matrix.!

!Rectangle methodsFor: 'accessing'!

bottom
	^ corner y
!

corner
	^ corner
!

corner: aPoint
	corner := aPoint.
!

height
	^ corner y - origin y
!

left
	^ origin x
!

origin
	^ origin
!

origin: aPoint
	origin := aPoint.
!

right
	^ corner x
!

top
	^ origin y
!

width
	^ corner x - origin x
! !

!Rectangle methodsFor: 'converting'!

asPolygon
	^ AthensPolygon new
		moveTo: origin;
		lineTo: corner x @ origin y;
		lineTo: corner;
		lineTo: origin x @ corner y;
		yourself
!

boundingBox
	^ self
!

boundsAfterMultiplicationWith: matrix
	< var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
	var x1 = matrix['@sx']*self['@origin']['@x'] + matrix['@shx']*self['@origin']['@y'] + matrix['@x'];
	var x2 = matrix['@sx']*self['@corner']['@x'] + matrix['@shx']*self['@corner']['@y'] + matrix['@x'];
	var y1 = matrix['@shy']*self['@origin']['@x'] + matrix['@sy']*self['@origin']['@y'] + matrix['@y'];
	var y2 = matrix['@shy']*self['@corner']['@x'] + matrix['@sy']*self['@corner']['@y'] + matrix['@y'];
	
	var points = [[x1, y1], [x1, y2], [x2, y1], [x2, y2]];
	
	for (var i = 0; i < 4; i++) {
		minX = Math.min(minX, points[i][0]);
		maxX = Math.max(maxX, points[i][0]);
		minY = Math.min(minY, points[i][1]);
		maxY = Math.max(maxY, points[i][1]);
	}
	
	return minX.__at(minY)._corner_(maxX.__at(maxY)); >
! !

!Rectangle methodsFor: 'drawing'!

drawOn: canvas
	canvas context2D rect: self.
! !

!Rectangle methodsFor: 'testing'!

intersectsWith: aRect
	^ (origin x <= aRect corner x) & (aRect origin x <= corner x) & (origin y < aRect corner y) & (aRect origin y <= corner y)
! !

!Rectangle class methodsFor: 'instance creation'!

origin: originPoint corner: cornerPoint
	^ self basicNew
		origin: originPoint;
		corner: cornerPoint;
		initialize;
		yourself
! !

!SequenceableCollection methodsFor: '*Athens-Amber'!

reverseDo: aBlock
	<for(var i=self.length-1;-1<i;i--){aBlock._value_(self[i]);}>
! !

!Date class methodsFor: '*Athens-Amber'!

millisecondClockValue
	< return new Date().getTime(); >
! !


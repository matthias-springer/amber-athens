Smalltalk current createPackage: 'Athens-Amber'!
Object subclass: #Bitmap
	instanceVariableNames: 'url'
	package: 'Athens-Amber'!

!Bitmap methodsFor: 'accessing'!

image
	^ Image fromUrl: url
!

url: anUrl
	url := anUrl.
! !

!Bitmap class methodsFor: 'instance creation'!

fromUrl: aString
	^ self new
		url: aString;
		yourself
! !

Object subclass: #Color
	instanceVariableNames: 'rgbaString alpha r g b'
	package: 'Athens-Amber'!

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
	instanceVariableNames: 'familyName pointSize'
	package: 'Athens-Amber'!

!LogicalFont methodsFor: 'accessing'!

familyName: aString
	familyName := aString.
!

pointSize
	^ pointSize
!

pointSize: anInteger
	pointSize := anInteger.
! !

!LogicalFont methodsFor: 'converting'!

asHTMLString
	< return self['@pointSize'].toString() + 'px ' + self['@familyName']; >
! !

!LogicalFont class methodsFor: 'instance creation'!

familyName: aString pointSize: anInteger
	^ self new
		familyName: aString;
		pointSize: anInteger;
		yourself
! !

Object subclass: #Rectangle
	instanceVariableNames: 'origin corner'
	package: 'Athens-Amber'!

!Rectangle methodsFor: 'accessing'!

bottom
	< return self['@corner']['@y']; >
!

corner
	^ corner
!

corner: aPoint
	corner := aPoint.
!

height
	< return self['@corner']['@y'] -  self['@origin']['@y']; >
!

left
	< return self['@origin']['@x']; >
!

origin
	^ origin
!

origin: aPoint
	origin := aPoint.
!

right
	< return self['@corner']['@x']; >
!

top
	< return self['@origin']['@y']; >
!

width
	< return self['@corner']['@x'] - self['@origin']['@x']; >
! !

!Rectangle methodsFor: 'converting'!

asPolygon
	< var polygon = smalltalk.AthensPolygon._new();
	polygon._moveTo_(self['@origin']);
	polygon._lineTo_(self['@corner']['@x'].__at(self['@origin']['@y']));
	polygon._lineTo_(self['@corner']['@x'].__at(self['@corner']['@y']));
	polygon._lineTo_(self['@origin']['@x'].__at(self['@corner']['@y']));
	return polygon; >
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
	< canvas['@surface']['@context2D'].rect(self._left(), self._top(), self._width(), self._height()); >
! !

!Rectangle methodsFor: 'testing'!

intersectsWith: aRect
	< return self['@origin']['@x'] <= aRect['@corner']['@x'] &&
		aRect['@origin']['@x'] <= self['@corner']['@x'] &&
		self['@origin']['@y'] <= aRect['@corner']['@y'] &&
		aRect['@origin']['@y'] <= self['@corner']['@y']; >
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


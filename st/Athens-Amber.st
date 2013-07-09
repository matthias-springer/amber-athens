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
	instanceVariableNames: 'hexString alpha r g b'
	package: 'Athens-Amber'!

!Color methodsFor: 'accessing'!

alpha
	alpha ifNil: [alpha := 1].
	^ alpha
!

alpha: aNumber
	alpha := aNumber
!

b: blue
	b := blue.
!

blue
	^ b
!

g: green
	g := green.
!

green
	^ g
!

r: red
	r := red.
!

red
	^ r
!

rgbaString
	< if (self['@alpha'] === undefined) { 
		return 'rgba(' + Math.round(self['@r']*255) + ',' + Math.round(self['@g']*255) + ',' + Math.round(self['@b']*255) + ',1)';
	}
	else {
		return 'rgba(' + Math.round(self['@r']*255) + ',' + Math.round(self['@g']*255) + ',' + Math.round(self['@b']*255) + ',' + self['@alpha'] + ')';
	} >
! !

!Color class methodsFor: 'instance creation'!

black
	^ self r: 0 g: 0 b: 0
!

blue
	^ self r: 0 g: 0 b: 1
!

gray
	^ self r: 0.5 g: 0.5 b: 0.5
!

green
	^ self r: 0 g: 1 b: 0
!

r: red g: green b: blue
	< var instance = self._new();
	instance['@r'] = red;
	instance['@g'] = green;
	instance['@b'] = blue;
	return instance; >
!

red
	^ self r: 1 g: 0 b: 0
!

transparent
	^ self new
		r: 0; g: 0; b: 0;
		alpha: 0;
		yourself
!

white
	^ self r: 1 g: 1 b: 1
!

yellow
	^ self r: 1 g: 1 b: 0
! !

Object subclass: #Image
	instanceVariableNames: ''
	package: 'Athens-Amber'!

!Image methodsFor: 'accessing'!

complete
	<return self.complete;>
!

onLoad: aBlock
 	<self.onload = aBlock;>
!

source: anUrl
	<self.src = anUrl;>
!

yourself
	<return self>
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

pointSize: anInteger
	pointSize := anInteger.
! !

!LogicalFont methodsFor: 'converting'!

asHTMLString
	^ pointSize asString, 'px ', familyName
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

!Rectangle class methodsFor: 'instance creation'!

origin: originPoint corner: cornerPoint
	^ self basicNew
		origin: originPoint;
		corner: cornerPoint;
		initialize;
		yourself
! !

!Date class methodsFor: '*Athens-Amber'!

millisecondClockValue
	< return new Date().getMilliseconds(); >
! !


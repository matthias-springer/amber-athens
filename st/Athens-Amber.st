Smalltalk current createPackage: 'Athens-Amber'!
Object subclass: #Color
	instanceVariableNames: 'hexString alpha'
	package: 'Athens-Amber'!

!Color methodsFor: 'accessing'!

alpha
	alpha ifNil: [alpha := 1].
	^ alpha
!

alpha: aNumber
	alpha := aNumber
!

blue
	< return parseInt(self['@hexString'].substr(4, 2), 16) / 255.0; >
!

green
	< return parseInt(self['@hexString'].substr(2, 2), 16) / 255.0; >
!

hexString
	^ hexString
!

hexString: aString
	hexString := aString.
!

red
	< return parseInt(self['@hexString'].substr(0, 2), 16) / 255.0; >
! !

!Color class methodsFor: 'instance creation'!

black
	^ self new
		hexString: '000000';
		yourself
!

blue
	^ self new
		hexString: '0000ff';
		yourself
!

gray
	^ self new
		hexString: '808080';
		yourself
!

green
	^ self new
		hexString: '00ff00';
		yourself
!

red
	^ self new
		hexString: 'ff0000';
		yourself
!

transparent
	^ self new
		hexString: '000000';
		alpha: 0;
		yourself
!

white
	^ self new
		hexString: 'ffffff';
		yourself
!

yellow
	^ self new
		hexString: 'ffff00';
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


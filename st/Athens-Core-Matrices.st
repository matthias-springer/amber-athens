Smalltalk current createPackage: 'Athens-Core-Matrices'!
AthensTransform subclass: #AthensAffineTransform
	instanceVariableNames: 'sx shx x shy sy y'
	package: 'Athens-Core-Matrices'!

!AthensAffineTransform methodsFor: 'accessing'!

inverted
	"answer an inverse transformation of receiver"
	self notYetImplemented
!

scale
	^ sx@sy
!

shx
	^ shx
!

shx: number
	shx := number
!

shy
	^ shy
!

shy: number
	shy := number
!

sx
	^ sx
!

sx: number
	sx := number
!

sy
	^ sy
!

sy: number
	sy := number
!

translation
	^ x@y
!

translation: aPoint
	x := aPoint x.
	y := aPoint y.
!

x
	^ x
!

x: number
	x := number
!

y
	^ y
!

y: number
	y := number
! !

!AthensAffineTransform methodsFor: 'initialize-release'!

initialize
	self loadIdentity
! !

!AthensAffineTransform methodsFor: 'transformations'!

clearTranslation
	"reset a translation from matrix, leaving only scale and rotation"
	
	x := y := 0.0
!

loadAffineTransform: m
	x := m x.
	y := m y.
	sx := m sx.
	sy := m sy.
	shx := m shx.
	shy := m shy.
!

loadIdentity
	< self['@sx'] = self['@sy'] = 1.0;
	self['@shx'] = self['@shy'] = self['@x'] = self['@y'] = 0.0; >
!

multiplyBy: m

	"multiply receiver by given affine matrix"
"
| sx   shx   x   |        | sx'   shx'   x'   | 
| shy sy     y    |   *    | shy' sy'     y'   |
|  0     0     1   |        | 0  	0   		1	|       

"	
	
	| nsx nshx nx nshy nsy ny |
	nsx := sx * m sx + (shx  * m shy).
	nshx := sx * m shx + (shx * m sy).
	nx := sx * m x + (shx * m y) + x.
	
	nshy := shy * m sx + (sy * m shy).
	nsy := shy * m shx  + (sy * m sy).
	ny := shy* m x + (sy * m y) + y.
	
	sx := nsx.
	sy := nsy.
	shx := nshx.
	shy := nshy.
	x := nx.
	y := ny.
!

restoreAfter: aBlock
	|previous|
	previous := self copy.
	aBlock ensure: [ 	self loadAffineTransform: previous ]
!

rotateByDegrees: angle
	< var cos = Math.cos(angle / 180.0 * Math.PI);
	var sin = Math.sin(angle / 180.0 * Math.PI);
	
	var newSx = self['@sx']*cos + self['@shx']*sin;
	var newSy = self['@sy']*cos - self['@shy']*sin;
	
	self['@shx'] = self['@shx']*cos - self['@sx']*sin;
	self['@shy'] = self['@shy']*cos + self['@sy']*sin;
	
	self['@sx'] = newSx;
	self['@sy'] = newSy; >
!

rotateByRadians: angle
	< var cos = Math.cos(angle);
	var sin = Math.sin(angle);
	
	var newSx = self['@sx']*cos + self['@shx']*sin;
	var newSy = self['@sy']*cos - self['@shy']*sin;
	
	self['@shx'] = self['@shx']*cos - self['@sx']*sin;
	self['@shy'] = self['@shy']*cos + self['@sy']*sin;
	
	self['@sx'] = newSx;
	self['@sy'] = newSy; >
!

scaleBy: factor
	< if (factor.constructor === Number) {
		self['@sx'] *= factor;
		self['@shx'] *= factor;
		self['@sy'] *= factor;
		self['@shy'] *= factor;
	}
	else {
		self['@sx'] *= factor._x();;
		self['@shx'] *= factor._y();
		self['@sy'] *= factor._y();
		self['@shy'] *= factor._x();
	} >
!

scaleX: fx Y: fy
	< self['@sx'] *= fx;
	self['@shx'] *= fx;
	self['@sy'] *= fy;
	self['@shy'] *= fy; >
!

translateBy: aPoint
	< var px = aPoint._x();
	var py = aPoint._y();
	self['@x'] += self['@sx']*px + self['@shx']*py;
	self['@y'] += self['@shy']*px + self['@sy']*py; >
!

translateX: px Y: py
	< self['@x'] += self['@sx']*px + self['@shx']*py;
	self['@y'] += self['@shy']*px + self['@sy']*py; >
!

transposed
	< var s = self['@shx'];
	self['@shx'] = self['@shy'];
	self['@shy'] = s; >
! !

!AthensAffineTransform methodsFor: 'vector-transform'!

inverseTransform: aPoint 
	| px py y0 x0 |

	px := aPoint x.
	py := aPoint y.

"  (we assume matrix is never degenerate)
	Given straight transformation formulae:
		
	px := x0*sx + y0*shx + x.
	py := x0*shy + y0*sy + y.
	
	we doing inverse one, trying to find x0,y0 for rest of given variables (px,py,x,y,sx,sy,shx,shy).
	
	x0 := px - x - (shx*y0) / sx.
	y0 := py - y - (shy*x0) / sy.
	
	y0 := py - y - (shy*(px - x - (shx*y0) / sx)) / sy.

	sy * y0  == py - y - (shy*(px - x - (shx*y0) / sx)).

	sx * sy * y0  == (sx*(py - y)) - (shy*(px - x - (shx*y0))).

	sx * sy * y0  == sx*py - (sx*y) - (shy*px) + (shy*x) + (shy*shx*y0).

	(sx * sy * y0) - (shy*shx*y0)  == sx*py - (sx*y) - (shy*px) + (shy*x) .
	
	y0* ((sx * sy) - (shy*shx))  == sx*py - (sx*y) - (shy*px) + (shy*x) .

"
	y0  := sx*py - (sx*y) - (shy*px) + (shy*x) / ((sx * sy) - (shy*shx)).
	x0 := px - x - (shx*y0) / sx.

	^ x0@y0
!

transform: aPoint 
	| px py |

	px := aPoint x.
	py := aPoint y.
	^ Point 
		x: (sx*px +(shx*py) + x)
		y: (shy*px + (sy*py) + y)
!

transformX: px Y: py
	" transform x and y coordinates by receiver. Answer a Point"
	^ Point 
		x: (sx*px +(shx*py) + x)
		y: (shy*px + (sy*py) + y)
! !

AthensAffineTransform subclass: #AthensGenericTransform
	instanceVariableNames: 'w0 w1 w2'
	package: 'Athens-Core-Matrices'!

!AthensGenericTransform methodsFor: 'transformations'!

loadIdentity
	"initialize with identity transform"
	super loadIdentity.
	w0 := w1 := 0.0.
	w2 := 1.0
! !


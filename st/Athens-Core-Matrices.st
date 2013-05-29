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
	"initialize with identity transform"
	sx := sy := 1.0.
	shx := shy := x := y := 0.0.
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


	^ self rotateByRadians: angle degreesToRadians
!

rotateByRadians: angle

	"multiply receiver by rotation matrix

| sx   shx   x   |        | cos -sin 0  |             | (sx*cos)+(shx*sin)   (-sx*sin+shx*cos)  x |
| shy sy     y   |   *   | sin   cos 0 |   ===> | (shy*cos)+(sy*sin)   (-shy*sin)+sy*cos) y |
|  0     0     1   |       | 0     0   1   |             |        0                                 0                1  |

"
	| cos sin newSx newSy |
	
	cos := angle cos.
	sin := angle sin.
	
	
	newSx := sx*cos + (shx*sin).
	newSy := sy*cos - (shy*sin).
	
	shx := shx*cos - (sx*sin).
	shy := shy*cos + (sy*sin).

	sx := newSx.
	sy := newSy.
!

scaleBy: factor

	"multiply receiver by uniform scale matrix

| sx   shx   x   |       | (f x) 0 0  |             | sx*(f x)    shx*(f y)  x |
| shy sy     y   |   *   | 0 (f y) 0  |    ===> | shy*(f x)     sy*(f y)    y |
|  0     0     1  |        | 0 0     1  |                |  0      0              1  |

"	
	factor isPoint ifTrue: [
		sx := sx*factor x.
		shx := shx*factor y.
		sy := sy*factor y.
		shy := shy*factor x. 		
	] ifFalse: [
		sx := sx*factor.
		shx := shx*factor.
		sy := sy*factor.
		shy := shy*factor. ]
!

scaleX: fx Y: fy

	"multiply receiver by scale matrix

| sx   shx   x   |        | fx 0 0  |              | sx*fx    shx*fx  x |
| shy sy     y   |   *   | 0 fy 0  |    ===> | shy*fy  sy*fy   y |
|  0     0     1   |       | 0 0  1  |              |  0          0        1  |

"
	sx := sx*fx.
	shx := shx*fx.
	sy := sy*fy.
	shy := shy*fy.
!

translateBy: aPoint

	^ self translateX: aPoint x Y: aPoint y
!

translateX: px Y: py


" multiply receiver by translation matrix :

| sx   shx   x   |        | 1  0  px |             |	sx  shx  (sx*px + shx*py + x) |
| shy sy     y   |   *   | 0  1  py |   ===> | shy  sy  (shy*px + sy*py + y)  |
|  0     0     1   |       | 0  0   1  |             |  0     0    1  |

"
	x := (sx*px) + (shx*py) + x.
	y := (shy*px) + (sy*py) + y.
!

translateX: px y: py

" multiply receiver by translation matrix :

| sx   shx   x   |        | 1  0  px |             |	sx  shx  (sx*px + shx*py + x) |
| shy sy     y   |   *   | 0  1  py |   ===> | shy  sy  (shy*px + sy*py + y)  |
|  0     0     1   |       | 0  0   1  |             |  0     0    1  |

"
	x := (sx*px) + (shx*py) + x.
	y := (shy*px) + (sy*py) + y.
!

transposed
	
	| s |
	s := shx.
	shx := shy.
	shy := s.
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


Smalltalk current createPackage: 'Athens-Core-Morphic'!
Object subclass: #AthensMorph
	instanceVariableNames: 'transformation globalTransformation outerShape owner submorphs position rotation scaling color'
	package: 'Athens-Core-Morphic'!

!AthensMorph methodsFor: 'accessing'!

color: aColor
	color := aColor.
!

outerShape: shapeOrPolygon
	outerShape := shapeOrPolygon asPolygon.
!

owner
	^ owner
!

owner: aMorph
	owner := aMorph.
!

submorphs
	^ submorphs
!

transformation
	^ transformation
!

world
	|morph|
	morph := self.
	[morph isWorldMorph] whileFalse: [morph := morph owner].
	^ morph
! !

!AthensMorph methodsFor: 'drawing'!

drawOn: canvas
	|path|
	path := canvas createPath: [:builder |
		builder
			absolute;
			lineTo: 200@0;
			lineTo: 200@200;
			lineTo: 0@200;
			lineTo: 0@0].
	self outerShape: path.
	
	canvas setPaint: color.
	canvas setShape: path.
	canvas draw.
! !

!AthensMorph methodsFor: 'geometry'!

calculateTransformation
	transformation := AthensAffineTransform new.
	transformation translateBy: position.
	transformation rotateByRadians: rotation.
	transformation scaleBy: scaling.
	self world drawAll.
!

position: aPoint
	position := aPoint.
	self calculateTransformation.
!

rotation: aNumber
	rotation := aNumber.
	self calculateTransformation.
!

scaling: aPoint
	scaling := aPoint.
	self calculateTransformation.
! !

!AthensMorph methodsFor: 'initialization'!

initialize
	position := 0@0.
	rotation := 0.
	scaling := 1@1.
	color := Color blue.
	owner := AthensDummyWorldMorph instance.
	transformation := AthensAffineTransform new.
	submorphs := OrderedCollection new.
! !

!AthensMorph methodsFor: 'morph handling'!

addMorph: aMorph
	self submorphs add: aMorph.
	aMorph owner: self.
	aMorph drawAll.
! !

!AthensMorph methodsFor: 'private'!

calculateGlobalTransformation
	globalTransformation := owner globalTransformation copy.
	globalTransformation multiplyBy: transformation.
!

drawAll
	self world drawDuring: [:canvas |
			self drawAllOn: canvas].
!

drawAllOn: canvas
	"Draws receiver and its submorphs."
	
	self calculateGlobalTransformation.
	canvas implicitTransformation: globalTransformation.
	self drawOn: canvas.
	
	submorphs do: [:morph | morph drawAllOn: canvas].
!

globalTransformation
	^ globalTransformation
! !

!AthensMorph methodsFor: 'testing'!

isWorldMorph
	^ false
! !

AthensMorph subclass: #AthensWorldMorph
	instanceVariableNames: 'surface backgroundPaint'
	package: 'Athens-Core-Morphic'!

!AthensWorldMorph methodsFor: 'accessing'!

surface
	^ surface
!

surface: aSurface
	surface := aSurface.
! !

!AthensWorldMorph methodsFor: 'drawing'!

drawDuring: aBlock
	surface drawDuring: aBlock.
! !

!AthensWorldMorph methodsFor: 'initialization'!

drawOn: canvas
	surface clear: Color gray.
	
	(canvas setPaint: backgroundPaint) repeat.
	canvas drawShape: (0@0 corner: surface extent).
!

initialize
	super initialize.
	self initializeBackgroundPaint.
!

initializeBackgroundPaint
	backgroundPaint := AthensHTMLSurface extent: 10@10.
	
	"checker board"
	backgroundPaint drawDuring: [:canvas |
		backgroundPaint clear.
		canvas setPaint: Color white.
		canvas 
			drawShape: (0@0 corner: 5@5);
			drawShape: (5@5 corner: 10@10)].
! !

!AthensWorldMorph methodsFor: 'private'!

calculateGlobalTransformation
	"WorldMorph is the overall owner. It has no transformation."
	globalTransformation := AthensAffineTransform new.
! !

!AthensWorldMorph methodsFor: 'testing'!

isWorldMorph
	^ true
! !

!AthensWorldMorph class methodsFor: 'instance creation'!

forSurface: aSurface
	^ self new
		surface: aSurface;
		yourself
! !

AthensWorldMorph subclass: #AthensDummyWorldMorph
	instanceVariableNames: ''
	package: 'Athens-Core-Morphic'!

!AthensDummyWorldMorph methodsFor: 'drawing'!

drawDuring: aBlock
! !

!AthensDummyWorldMorph methodsFor: 'initialization'!

initialize
! !

AthensDummyWorldMorph class instanceVariableNames: 'instance'!

!AthensDummyWorldMorph class methodsFor: ' singleton'!

instance
	instance ifNil: [instance := self new].
	^ instance
! !


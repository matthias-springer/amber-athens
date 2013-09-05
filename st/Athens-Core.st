Smalltalk current createPackage: 'Athens-Core'!
Object subclass: #AthensCanvas
	instanceVariableNames: 'paint surface shape fontRenderer paintMode'
	package: 'Athens-Core'!
!AthensCanvas commentStamp!
I am an abstract Athens canvas. I provide methods for drawing shapes and performing transformation operations. My concrete subclass `AthensHTMLCanvas` is used for drawing on Amber.

## Drawing
`#setShape:` sets the shape to be drawn and `#draw` draws this shape. `#drawShape:` is a convenience method that does both.

`#setFont:` sets the current font (must be an instance of `LogicalFont`). `#drawString:` drawing a string with the current font.

## Paints
`#setPaint:` and `#setStrokePaint:` are used to set the filling paint and the stroke paint for drawing shapes and strings. Only one of both paints can be used for drawing at one time. E.g. setting a stroke paint resets the filling paint.

## Paths
`#createPath:` takes a block with a path builder argument and returns a path that can used as a shape for drawing. See `AthensPathBuilder` documentation.

## Transformation
`#pathTransform` returns the path transformation object that is used to transform the drawing of the shape. `#paintTransform` returns the paint transformation object that is used to transform the paint of the drawing, relative to the path transformation. See `AthensTransform` documentation.!

!AthensCanvas methodsFor: 'accessing'!

paint
	^ paint
!

paintMode
	"Answer the current paint mode controller. The answered object should conform to AthensPaintMode public protocol."

	^ paintMode
!

setShape: anObject
	"Set the current shape of receiver."
	
	shape := anObject.
!

surface
	"Answer an Athens surface, to which receiver is bound to."
	
	^ surface
! !

!AthensCanvas methodsFor: 'caching'!

cacheAt: anObject ifAbsentPut: aBlock
	^ surface cacheAt: anObject ifAbsentPut: aBlock
!

flushCacheAt: anObject
	"Flush (delete) any cached value(s) identified by given object, anObject. A surface using identity comparison for object identifiers. Answer receiver."

	surface removeCacheAt: anObject.
! !

!AthensCanvas methodsFor: 'clipping'!

clipBy: aRectangle during: aBlock
	"Sets a clipping rectangle during drawing operations performed in a block. Note that clipping rectangles are intetersected with currently active clipping rectangle."
	
	 ^ surface clipBy: aRectangle during: aBlock
!

isVisible: aRectangle 
	"Check if the rectangles is not fully clipped by current clipping coordinates."
	
	^ true
! !

!AthensCanvas methodsFor: 'drawing'!

draw
	"Fills the shape (anObject) using the currently selected paint. anObject should implement double-dispatch to the currently selected paint."
	
	^ shape paintFillsUsing: paint on: self
!

draw: anObject
	"A generic dispatch method to draw anObject onto the receiver. The object should understand #drawOnAthensCanvas: message."
	
	^ anObject drawOnAthensCanvas: self
!

drawShape: anObject
	"A convenience method, which sets the current shape to anObject and then fills it with the currently selected paint." 
	
	self setShape: anObject.
	self draw.
! !

!AthensCanvas methodsFor: 'drawing text'!

drawString: aString
	"Draws a string using the currently selected font. Answers a total advance of rendered string."
	
	^ fontRenderer renderCharacters: aString from: 1 to: aString size
!

drawString: aString from: start to: end
	"Draws a portion of string using the currently selected font. Answers a total advance of rendered portion."
	
	^ fontRenderer renderCharacters: aString from: start to: end
!

setFont: aFont
	"Set the current font of receiver. Font object should answer a glyph renderer instance, compatible with glyph renderer protocol."
	
	fontRenderer := aFont glyphRendererOn: surface.
! !

!AthensCanvas methodsFor: 'initialization'!

initializeWithSurface: anAthensSurface	
	surface := anAthensSurface.
! !

!AthensCanvas methodsFor: 'masking'!

clearMask: aShape
	"Set mask pixels to 0 for all pixels covered by aShape."
	
	^ aShape paintFillsUsing: surface clearMaskPaint on: self
!

disableMask
	^ surface disableMask
!

enableMask
	^ surface enableMask
!

setMask: aShape
	"Set mask pixels to 1 for all pixels covered by shape, aShape."

	^ aShape paintFillsUsing: surface setMaskPaint on: self
! !

!AthensCanvas methodsFor: 'paint'!

setPaint: aPaint
	"Set the current paint of receiver."
	
	paint = aPaint ifTrue: [ ^ paint ].
	paint := aPaint asAthensPaintOn: self.
	^ paint
!

setStrokePaint: aPaint
	"Use paint as stroke paint, note conversion to #asStrokePaintOn:."
	
	paint := (aPaint asAthensPaintOn: self) asStrokePaintOn: self.
	^ paint
! !

!AthensCanvas methodsFor: 'paths'!

createPath: aPathCreatingBlock
	"Creates a new path. A path creating block should be a monadic block, which will get a path builder instance as argument. See AthensPathBuilder for the protocol. The resulting path object can be later used for drawing."
	
	^ surface createPath: aPathCreatingBlock
!

createRectanglePath: aRectangle 
	^ surface createRectanglePath: aRectangle
! !

!AthensCanvas methodsFor: 'transformation matrices'!

paintTransform
	"Answer the paint transformation matrix controller. The answered object should conform to AthensTransform public protocol."

	^ surface paintTransform
!

pathTransform
	"Answer the path transformation matrix controller. The answered object should conform to AthensTransform public protocol."
	
	^ surface pathTransform
! !

!AthensCanvas class methodsFor: 'private'!

new
	"use #on: instead"
	self shouldNotImplement
!

on: aSurface
	^ self basicNew initializeWithSurface: aSurface
! !

Object subclass: #AthensPaintMode
	instanceVariableNames: ''
	package: 'Athens-Core'!
!AthensPaintMode commentStamp!
I represent all Athens paint modes. Every drawing backend has its own concrete subclass of me.

## API
The methods in the protocol "modes", e.g. `#atop`, change the current paint mode. The method `#restoreAfter:` restores the original paint mode after the provided block was executed.!

!AthensPaintMode methodsFor: 'capabilities'!

availableModes
	"Answer a collection of paint mode names, currently supported by backend. 
	Different backends may support different sets of paint modes.
	
	You may need to structure your code depending on modes available."
	
	^ #()
! !

!AthensPaintMode methodsFor: 'convenience'!

restoreAfter: aBlock
	"Restore current paint mode after evaluating a block."
	
	self subclassResponsibility.
! !

!AthensPaintMode methodsFor: 'default mode'!

default
	"Set the default paint mode. The default paint mode in Athens, is 'over'."
	
	^ self over
! !

!AthensPaintMode methodsFor: 'errors'!

notAvailable
	^ self error: 'A requested paint mode is not supported by backend'
! !

!AthensPaintMode methodsFor: 'modes'!

add
	self notAvailable.
!

atop
	self notAvailable.
!

clear
	"Set 'clear' drawing mode.
	
	Drawing under this mode will clear the surface under the shape boundaries."
	
	self notAvailable.
!

colorBurn
	self notAvailable.
!

colorDodge
	self notAvailable.
!

darken
	self notAvailable.
!

dest
	"Set 'dest' drawing mode.
	
	Drawing under this mode will ignore the source, as if nothing drawn."
	
	self notAvailable.
!

destAtop
	self notAvailable.
!

destIn
	self notAvailable.
!

destOut
	self notAvailable.
!

destOver	
	self notAvailable.
!

difference
	self notAvailable.
!

exclusion
	self notAvailable.
!

hardLight
	self notAvailable.
!

hslColor
	self notAvailable.
!

hslHue
	self notAvailable.
!

hslLuminosity
	self notAvailable.
!

hslSaturation
	self notAvailable.
!

in
	self notAvailable.
!

lighten
	self notAvailable.
!

multiply
	self notAvailable.
!

out
	self notAvailable.
!

over
	"Set 'over' drawing mode. This is default paint mode.
	
	Drawing under this mode will blend source with destination color using source alpha component."
	
	self notAvailable.
!

overlay
	self notAvailable.
!

saturate
	self notAvailable.
!

screen
	self notAvailable.
!

softLight
	self notAvailable.
!

source
	"Set 'source' drawing mode.
	
	Drawing under this mode will replace the content with incoming source under the shape boundaries."
	
	self notAvailable.
!

xor
	self notAvailable.
! !

Object subclass: #AthensShape
	instanceVariableNames: ''
	package: 'Athens-Core'!
!AthensShape commentStamp!
I am an abstract Athens shape.!

!AthensShape methodsFor: 'drawing'!

paintFillsUsing: aPaint on: anAthensCanvas 
	"This method is a part of rendering dispatch Canvas->receiver->paint."
	
	self subclassResponsibility
! !

AthensShape subclass: #AthensPath
	instanceVariableNames: ''
	package: 'Athens-Core'!
!AthensPath commentStamp!
I am an abstract Athens path.!

Object subclass: #AthensSurface
	instanceVariableNames: 'currentCanvas'
	package: 'Athens-Core'!
!AthensSurface commentStamp!
I am an abstract Athens surface. I provide methods for creating paths, gradients, colors and clearing myself. My paths, gradients and colors can be reused in later drawings.

## API
The method `#drawDuring:` takes a block with an Athens canvas as an argument and is used for drawing onto the surface.

## Creating paints
The methods `#createSolidColorPaint:`, `#createRadialGrandient:center:radius:` and `#createLinearGradient:origin:corner:` create fill colors. The method `#createStrokePaintFor:` takes a paint and creates a stroke paint for it.

## Creating paths
The method `#createPath:` takes a block with a path builder argument and creates a path object.

## Clearing the surface
The method `#clear` is used to create the surface with transparent color. `#clear:` takes a color for clearing the canvas.!

!AthensSurface methodsFor: 'caching'!

cacheAt: anObject ifAbsentPut: aBlock
	"Answer an object from surface's cache identified by anObject, if there is no cached object under such identifier, evaluate a block and put it into cache. Then answer the result of evaluation. A surface using identity comparison for object identifiers."

	self subclassResponsibility.
!

flushCacheAt: anObject
	"Flush (delete) any cached value(s) identified by given object, anObject. A surface using identity comparison for object identifiers. Answer receiver."

	self subclassResponsibility.
! !

!AthensSurface methodsFor: 'clipping'!

clipBy: aRectangle during: aBlockClosure 
	self subclassResponsibility.
! !

!AthensSurface methodsFor: 'converting'!

asForm
	"Answer a Form, which contains a bits, converted from surface."
	
	self subclassResponsibility.
! !

!AthensSurface methodsFor: 'masking'!

disableMask
	self subclassResponsibility.
!

enableMask
	self subclassResponsibility.
!

maskEnabled
	self subclassResponsibility.
! !

!AthensSurface methodsFor: 'paints'!

createFormPaint: aForm 
	self subclassResponsibility.
!

createLinearGradient: colorRamp origin: pt1 corner: pt2
	self subclassResponsibility.
!

createLinearGradient: colorRamp start: pt1 stop: pt2
	"This protocol is deprecated. Use #createLinearGradient: start:stop: instead."
	
	self shouldNotImplement.
!

createRadialGradient: colorRamp center: aCenter radius: aRadius
	"By default, focal point coincede with center."
	
	^ self createRadialGradient: colorRamp center: aCenter radius: aRadius focalPoint: aCenter
!

createRadialGradient: colorRamp center: aCenter radius: aRadius focalPoint: fp
	self subclassResponsibility.
!

createSolidColorPaint: aColor 
	 "Answer an instance of AthensPaint, valid for use with given surface."
	
	self subclassResponsibility.
!

createStrokePaintFor: aPaint
	 "Answer an instance of AthensPaint, valid for use as stroke paint on receiver, using an argument, paint for fills."
	
	self subclassResponsibility.
! !

!AthensSurface methodsFor: 'paths'!

createPath: aPathBuilder
	"Create a path from provided path builder instance."
	
	self subclassResponsibility.
!

createRectanglePath: aRectangle 
	^ aRectangle
! !

!AthensSurface methodsFor: 'private'!

newCanvas
	"Answer a preinitialized instance of AthensCanvas. Private to receiver and its subclasses, override seldom."
	
	^ AthensCanvas on: self
!

releaseCanvas
	currentCanvas := nil.
! !

!AthensSurface methodsFor: 'public'!

clear
	"Clear the surface."
	
	self subclassResponsibility.
!

clear: clearColor
	"Clear the surface."
	
	self subclassResponsibility.
!

drawDuring: aBlock
	"You may draw on receiver only when inside a block and only using provided canvas object. This ensures releasing system resources used after finishing drawing."


	currentCanvas ifNotNil: [ self attemptToRecurseDrawing ].
	
	[
		currentCanvas := self newCanvas.
		aBlock value: currentCanvas.
	] ensure: [
		self releaseCanvas.
		currentCanvas := nil.
	].
! !

!AthensSurface class methodsFor: 'instance creation'!

extent: aPoint
	"Create a new surface with given extent. 
	Note that some surfaces may not support this method, since they may represent an infinite surface."
	
	self subclassResponsibility
! !

Object subclass: #AthensTransform
	instanceVariableNames: ''
	package: 'Athens-Core'!
!AthensTransform commentStamp!
I am an Athens transform object. I provide methods for transforming shapes.

## API
The methods `#scaleBy:`, `#translateBy:` and `#rotateByDegrees:`/`#rotateByRadians` are used to apply scalin (ununiform scaling possible), translation and rotation.

The method `#loadAffineTransform:` loads a transformation from another matrix and `#loadIdentity` loads the identity transformation.

The method `#restoreAfter:` restores the current transformation after the block argument was executed.!

!AthensTransform methodsFor: 'accessing'!

getMatrix
	"Answer an affine transformation matrix currently used by receiver.
	Note, that resulting matrix should be copied from receiver's data, i.e.
	no future modifications of receiver should affect the answered object.
	
	The default implementation is to answer a copy of receiver."
	
	^ self copy
! !

!AthensTransform methodsFor: 'transformations'!

invert
	self subclassResponsibility.
!

loadAffineTransform: anAthenTransform
	self subclassResponsibility.
!

loadIdentity
	"Load the identity matrix into receiver."
	
	self subclassResponsibility.
!

restoreAfter: aBlock
	"I should save the current transform state, evaluate the block, and then restore the saved transform state."
	
	self subclassResponsibility.
!

rotateByDegrees: angle
	self subclassResponsibility.
!

rotateByRadians: angle
	self subclassResponsibility.
!

scaleBy: factor
	self subclassResponsibility.
!

scaleByX: fx Y: fy
	self subclassResponsibility.
!

translateBy: aPoint
	self subclassResponsibility.
!

translateByX: px Y: py
	self subclassResponsibility.
! !

!AthensTransform methodsFor: 'vector-transform'!

transform: aPoint 
	self subclassResponsibility.
!

transformX: px Y: py 
	self subclassResponsibility.
! !

!Object methodsFor: '*Athens-Core'!

isPoint
	^ false
! !

!Color methodsFor: '*Athens-Core'!

asAthensPaintOn: anAthensCanvas
	< return anAthensCanvas['@surface']._createSolidColorPaint_(self); >
! !

!Number methodsFor: '*Athens-Core'!

arcCos
	< return Math.acos(self); >
!

arcSin
	< return Math.asin(self); >
!

arcTan
	< return Math.atan(self); >
!

asHexString
	< return self.toString(16); >
!

cos
	< return Math.cos(self); >
!

degreesToRadians
	< return self / 180.0 * Math.PI; >
!

sin
	< return Math.sin(self); >
!

tan
	< return Math.tan(self); >
! !

!Point methodsFor: '*Athens-Core'!

corner: cornerPoint
	^ Rectangle origin: self corner: cornerPoint
!

isPoint
	^ true
!

multiplyBy: matrix
	< var x = self['@x'];
	var y = self['@y'];
	self['@x'] = matrix['@sx']*x + matrix['@shx']*y + matrix['@x'];
	self['@y'] = matrix['@shy']*x + matrix['@sy']*y + matrix['@y'];	>
!

normalized
	| r |
	r := (x * x + (y * y)) sqrt.
	^ (x / r) @ (y / r)
!

r
	^ (x*x + (y*y)) sqrt
! !

!Rectangle methodsFor: '*Athens-Core'!

paintFillsUsing: aPaint on: anAthensCanvas 
	aPaint fillRectangle: self on: anAthensCanvas.
! !


Smalltalk current createPackage: 'Athens-HTML-Tutorial'!
Object subclass: #AthensTutorial
	instanceVariableNames: 'surface'
	package: 'Athens-HTML-Tutorial'!

!AthensTutorial methodsFor: 'initialize-release'!

initialize
! !

!AthensTutorial methodsFor: 'steps'!

step1
	"Step 1: Get Athens into your image. "
	"Does not apply for Athens-HTML."
!

step2
"Step 2:

Creating a surface.

Protocol:

<SurfaceClass> extent: x@y

will create a surface using specific class.

All surfaces is conformant to AthensSurface protocol.

Example: 
"

surface := AthensHTMLSurface extent: 500@400.

"surface := AthensCairoSurface extent: self extent asIntegerPoint."

"IMPORTANT NOTE:
	the surface which we will create at this step will be used in later steps.
	This means that if you resize the window (changing the view size), you may need to recreate surface.
	Also, since surface uses external resources, quitting an image and restarting it, will also require to 
	create a new surface, because the one from previous session will be no longer accessible.
"
!

step3
"Step 3: Start drawing.

Any drawing operations on surface is performed within #drawDuring: block.
There is no other (valid) way of obtaining canvas instance. 
"

surface drawDuring: [:canvas |
	
	"First, we clear the surface"
	surface clear. 
	
	"we can use 
	
	surface clear: Color black.  
	
	as well. A #clear is equivalent to: (surface clear: Color transparent).   "
	
	"Let''s draw a simple green rectangle"
	canvas setPaint: Color green.
	canvas setShape: (40@40 corner: 100@100).
	canvas draw.

	]

"Important to note:

- canvas instance should be used only within #drawDuring: scope.

"
!

step4
"Step 4: Shapes and paints.

"

surface drawDuring: [:canvas |
	surface clear: Color black. 
	
	"There's two objects involved in any draw operation: 
		- paint
		- shape
		
	The #draw API method simply fills current shape with current paint.
	"
	
	"To set current paint, use #setPaint: method "

	canvas setPaint: Color green.

	"To set current shape use #setShape: method "

	canvas setShape: (40@40 corner: 100@100).

	"Nothing will be drawn until #draw command will be issued: "
	canvas draw.

	]
!

step5
"Step 5: Coordinates. 

The initial coordinate space set up to cover entire surface using its dimensions. "

surface drawDuring: [:canvas |
	surface clear: Color black. 


	"x axis: goes from left to right"

	canvas setPaint: Color red.
	
	"here we're using #drawShape: convenience method, which is simply
	  setShape: + draw "
	
	canvas drawShape: (0@0 corner: surface width@5).
	

	"y axis: goes from top to bottom"
	canvas setPaint: Color blue.

	canvas drawShape: (0@0 corner: 5@surface height).

		

	]
!

step6
	"Step 6: Transforming coordinate space.
	
	There are two transformation matrices which control coordinate space:
	   - path transform
	   - paint transform
	
	Both transformations represented by affine transformation matrices.
	(See AthensAffineTransform class for details).
	
	Accessing path transform:
	
	  <canvas> pathTransform
	
	Accessing paint transform:
	
	  <canvas> paintTransform
"

surface drawDuring: [:canvas |
	surface clear: Color black. 

	"Here, we're translating the canvas coordinate system origin, 
	so now it will be at 100@50 in surface's coordinate system"
	
	canvas pathTransform translateX: 100 Y: 50.
	"x axis"

	canvas setPaint: Color red.
	
	canvas drawShape: (0@0 corner: surface width@5).
	

	"y axis"
	canvas setPaint: Color blue.

	canvas drawShape: (0@0 corner: 5@surface height).

	
	]
!

step7
	"Step 7: Scaling.
	

	Protocol: 
	<transform> scaleBy: <scalar/point>
	
	or:
	
	<transform> scaleX: <x scale> Y: <y scale>
		
"

surface drawDuring: [:canvas |
	surface clear: Color gray. 

	canvas setShape: (0@0 corner: 100@100).
	
	canvas setPaint: Color white.

	canvas draw.
	
	"try to vary the scale argument to see the difference"
	canvas pathTransform scaleBy: 2.

	canvas setPaint: (Color yellow alpha: 0.3).
	canvas draw.

	]
!

step8

"Step 8: Rotating.
	

	Protocol: 
	<transform> rotateByDegrees: <scalar>
	
	or:
	
	<transform> rotateByRadians: <scalar>
		
"

surface drawDuring: [:canvas |
	surface clear: Color gray. 

	canvas setShape: (0@0 corner: 100@100).
	canvas setPaint: (Color blue).

	canvas pathTransform
		scaleBy:3;
		translateX: 50 Y: 50.

	canvas draw.
		
	canvas setPaint: Color yellow.
	
	canvas pathTransform
		translateX: 50 Y: 50;
		scaleBy: 0.7@0.5;
		
		rotateByDegrees: 45;
		"You can also use #rotateByRadians: if it fits better for you. 
		There is no #rotate: because it ambiguous"
	
		translateX: -50 Y: -50.

	canvas draw.

	]
!

step9
"Step 9: Saving & restoring transformation.
	
	Protocol: 
	<transform> restoreAfter: [ block ]
	
"

surface drawDuring: [:canvas |
	surface clear: Color gray. 

	canvas setShape: (0@0 corner: 100@100).

	canvas pathTransform 
		scaleBy:3;
		translateX: 50 Y: 50.

"Try to comment #restoreAfter: , to run the code inside without it
and see the difference"

	canvas pathTransform restoreAfter: [
		
		canvas setPaint: (Color blue).
	
		canvas pathTransform
			translateX: 50 Y: 50;
			rotateByDegrees: 45;
			translateX: -50 Y: -50.

		canvas draw.
	].

	canvas setPaint: (Color yellow).
	canvas draw.
	]
! !


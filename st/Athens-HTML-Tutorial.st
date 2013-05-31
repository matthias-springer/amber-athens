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

step10
"Step 10: Loading matrix/using identity matrix.

"

surface drawDuring: [:canvas |  | m |
	surface clear: Color gray. 

	canvas setShape: (0@0 corner: 100@100).
	canvas setPaint: (Color blue).

	canvas pathTransform
		scaleBy: 4;
		translateX: 50 Y: 50;
		rotateByDegrees: 35;
		translateX: -50 Y: -50.
	
	"obtaining a current transformation matrix"
	m := canvas pathTransform getMatrix.	
		
	canvas draw.


	"The following statement resets coordinate transformation to match surface's coordinate space"
	canvas pathTransform loadIdentity.
	
	canvas setPaint: (Color yellow).
	canvas draw.

	"Now load the matrix back"
	
	canvas pathTransform 
		loadAffineTransform: m;
	
	"Offset it a bit"
		translateX: 2 Y: 2.
		
	canvas setPaint: (Color gray alpha:0.8).

	canvas draw.
		
	]
!

step11
"Step 11: Some important aspects of transforms:


  * the transformation matrix is not accessible for direct manipulation,
	instead you can only modify the current transformation, by using different manipulation methods 

  * remember that the order of transformation is important, e.g. translate then scale is not the same than
	scale then translate, even if you using very same values.

  * all transformations are conform to AthensTransform protocol. (we're not covering full protocol in this tutorial)
"
!

step12

"Step 12: Building complex shapes using paths.

So far, we used only rectangles as shapes, now time to create something more interesting.

"


	surface drawDuring: [:canvas |
		| path |
		surface clear: Color gray.
		
		canvas pathTransform translateX: surface width/2.0 Y: surface height / 2.0 .
	
		"To create a path, use #createPath: protocol.
		The block should accept a single argument, where AthensPathBuilder instance will be passed"	
		path := canvas createPath: [:builder |
			
			"A simple polygon"
			builder 
				absolute;
				
			"The path consists from a list of connected segments connected with each other" 
				lineTo: -50@ -50;
				lineTo: 60@ -60;
				lineTo: 150@50;
				lineTo: 0@0
			].
	
		canvas setShape: path.
		
		"Here we're using stroke paint to show the edges of path (more on stroke paints later)"
		(canvas setStrokePaint: Color white) width:4.
		
		"If you want to fill the path instead, uncomment the line below"
		"canvas setPaint: Color white."
		
		
		canvas draw.
	].
!

step13

"Step 13: Building complex shapes using paths.

For complex and large paths, building it every time could be ineffective and computationally intensive. 
Instead you can use surface factory method (#createPath:) to create a path object
at any point, and use it later, whenever you see fit.

Note, that since we're not using canvas, it is not necessary to put path creation inside #drawDuring: method.
"
	| path |

	path := surface createPath: [:builder |
			
			"A simple polygon"
		builder 
			absolute;
				
			"The path consists from a list of connected segments connected with each other" 				
			lineTo: -50@ -50;
			lineTo: 60@ -60;
			lineTo: 150@50;
			lineTo: 0@0
		].


	surface drawDuring: [:canvas |
		surface clear: Color gray.
		
		canvas pathTransform translateX: surface width/2.0 Y: surface height / 2.0 .
	
		canvas setShape: path.

		(canvas setStrokePaint: Color yellow) width:4.
		
		canvas draw.
	].
!

step14
"Step 14: Various path segment types.


"
	| path |

	path := surface createPath: [:builder |
			
		builder 
			absolute;
				
			"The path consists from a list of segments connected with each other, e.g.
			the starting point of next segment is always an end point of previous one"
			 				
			lineTo: -50@ -50;
			
			"quadric Bezier curve"
			
			curveVia: 0@ -80 to: 50@ -50;
			
			"cubic Bezier curve" 
			
			curveVia: 100@ -20 and: -50@20 to: 50@ 50;

			 "clockwise arc"
			
			cwArcTo: 50@100 angle: 45; 
			
			"counter-clockwise arc"

			ccwArcTo: -50@100 angle: 45.
			
			"close segment. Simply connects endpoint of previous segment with path starting point.
			Try to comment following line to see the difference" 
			builder close.
		].


	surface drawDuring: [:canvas |
		surface clear: Color gray.
		
		canvas pathTransform
			translateX: surface width/2.0 Y: surface height / 2.0 ;
			scaleBy:2.
	
		canvas setShape: path.
		
		(canvas setStrokePaint: Color yellow) width:4.
		
		canvas draw.
	].
!

step15
"Step 15: Path origin and moveTo: segment.


"
	| path |

	path := surface createPath: [:builder |
			
		builder 
			absolute;

			"All paths always having same origin, which is (0@0) point.
			To use different origin, use #moveTo: as initial command.
			Try to change moveTo: parameter to see the difference"

			 				
			moveTo: -50@ -50;
			
			"quadric Bezier curve"
			
			curveVia: 0@ -80 to: 50@ -50;
			
			"cubic Bezier curve" 
			
			curveVia: 100@ -20 and: -50@20 to: 50@ 50;

			 "clockwise arc"
			
			cwArcTo: 50@100 angle: 45; 
			
			"counter-clockwise arc"

			ccwArcTo: -50@100 angle: 45.
			
			
		].


	surface drawDuring: [:canvas |
		surface clear: Color gray.
		
		canvas pathTransform
			translateX: surface width/2.0 Y: surface height / 2.0 ;
			scaleBy:2.
	
		canvas setShape: path.
		(canvas setStrokePaint: Color yellow) width:4.
		
		canvas draw.
	].
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


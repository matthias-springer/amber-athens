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

step14a
"Step 14a: Various path segment types.


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
			
			curveVia: 100@ -20 and: -50@20 to: 50@ 50.

			 "clockwise arc"
			
			"cwArcTo: 50@100 angle: 45; "
			
			"counter-clockwise arc"

			"ccwArcTo: -50@100 angle: 45."
			
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

step14b
"Step 14b: Various path segment types.


"
	| path |

	path := surface createPath: [:builder |
			
		builder 
			absolute;
				
			"The path consists from a list of segments connected with each other, e.g.
			the starting point of next segment is always an end point of previous one"
			 				
			"lineTo: -50@ -50;"
			
			"quadric Bezier curve"
			
			"curveVia: 0@ -80 to: 50@ -50;"
			
			"cubic Bezier curve" 
			
			"curveVia: 100@ -20 and: -50@20 to: 50@ 50;"

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
			translateX: surface width/2.0 Y: surface height / 5.0 ;
			scaleBy:1.
	
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

step16
"Step 16: Absolute versus relative path building mode.


"
	| path |

	path := surface createPath: [:builder |

	"In absolute path building mode, all segment coordinates is absolute (relative to coordinate system origin which is 0@0).
	
	In relative path building mode, the coordinates of next segment computed relative
	to the end point of previous segment"
	
			
		builder 
			relative;  "actually, relative is default. You can simply delete this line without any effect"

			moveTo: -50@ -50;
			
			
			lineTo: 50@0;
			
			"The building mode can be switched at any moment. 
			Try to uncomment line below to see the difference"
			"absolute;"
			
			lineTo: 0@50;
			lineTo: -50@0.
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

step17
"Step 17: Self-intersecting paths and how they are filled.


There is a simple algorithm to determine whether given point will be filled or not: 
 - take an arbitrary point, infinitely distant from path interior and connect it with a point under the question.
 - count how many times the resulting ray intersects with path segments
 - if number of intersections is odd, then given point will be filled
 - if number of intersections is even, then given point will NOT be filled 
"
	| path |

	path := surface createPath: [:builder |
			
		builder 
			moveTo: -50@ -50;
			lineTo: 50@0;
			lineTo: 0@50;
			lineTo: -50@0;
			lineTo: 80@ -30;
			close
		].


	surface drawDuring: [:canvas |
		surface clear: Color gray.
		
		canvas pathTransform
			translateX: surface width/2.0 Y: surface height / 2.0 ;
			scaleBy:3.
	
		canvas setShape: path.
		canvas setPaint: Color yellow.
		canvas draw.
		
		canvas pathTransform loadIdentity.
		"draw a line to demonstrate imaginery ray"
		
		canvas setStrokePaint: Color blue.
		
		canvas drawShape: (canvas createPath: [:b | b lineTo:300@300 ])
	].
!

step18
"Step 18: Creating hollow shapes using multiple contours.

"
	| path |

	path := surface createPath: [:builder |
			
		builder 
		
			"The first contour is a rectangle"

			moveTo: -50@ -50;
			lineTo: 50@0;			
			lineTo: 0@50;
			lineTo: -50@0;
			close;
			
			"A second contour is a rectangle, embedded into previous one. "
			
			"Important to note here: a close and moveTo: commands are ones 
			which starting new contour. If there is no #close segment, but
			moveTo: , it is counted as if implicit #close segment were added. 
			This is of course relevant only for filled paths, not stoked ones"
				
			moveTo: 10@10;
			lineTo: 0@30;
			lineTo: 30@0;
			lineTo: 0@ -30;
			close.
			
			"An important note here: the winding of contours must be different in order 
			to exclude the area inside one contour from another.
			If contours having same winding (both clockwise or both counter-clockwise,
			they will be both filled."


			"The third rectangle intersecting with both contours, try to change the initial moveTo: 
			segment coordinates to draw it outside or inside and see the difference"
			builder
			moveTo: 25@10;
			lineTo: 0@10;
			lineTo: 10@0;
			lineTo: 0@ -10;
			close.

		].


	surface drawDuring: [:canvas |
		surface clear: Color gray.
		
		canvas pathTransform
			translateX: surface width/2.0 Y: surface height / 2.0 ;
			scaleBy:3.
	
		canvas setShape: path.
		canvas setPaint: Color yellow.
		
		canvas draw.
	].
!

step19
"Step 19: Using gradient paints.


So far we're use a simplest kind of paint: just a solid color.
Now let's play with gradients.
"
	| linearGradient |


	"A linear gradient defined used 3 parameters:
	 - a color ramp (a points in range from 0 to 1 with associated colors)
	- origin (starting) point
	- end (stop) point
	
	A vector connecting start and stop defines the direction which gradient will be facing,
	as well as its dimensions. "	
	linearGradient := surface createLinearGradient: {
			0 -> Color blue .
			0.25 -> Color red.
			0.5 -> Color white.
			0.75 -> Color yellow.
			1 -> Color green	
		}
		start: 0@0  
		stop: 100@100.



	surface drawDuring: [:canvas |
		surface clear: Color gray.
			
			
		canvas pathTransform translateX: 10 Y: 10.
		
		canvas setShape: (0@0 corner:100@100).
		canvas setPaint: linearGradient.
		
		canvas draw.


		canvas pathTransform translateX: 150 Y: 0.
		
		"Here we are using a paint tranform to change the gradient's direction and scale"
		canvas paintTransform rotateByDegrees: 45; scaleBy: 0.7.
		canvas draw.

		canvas pathTransform translateX: 150 Y: 0.
		
		"The areas outside the ramp boundary filled by extending the colors defined for 0 and 1 points of ramp respectively. 
		(blue for top, green for bottom, in our case)"
		canvas paintTransform translateX: 0 Y: 80; scaleBy: 0.2.
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

|container|
container := '#canvas-container' asJQuery.

"Clear previous canvases"
container empty.

surface := AthensHTMLSurface extent: 500@400.
surface appendToJQuery: '#canvas-container' asJQuery.

"Render border around canvas."
surface canvasTag asJQuery 
	css: 'border' with: '1px #aaa solid'.

"IMPORTANT NOTE:
	the surface which we will create at this step will be used in later steps.
	This means that if you resize the window (changing the view size), you may need to recreate surface.
	Also, since surface uses external resources, quitting an image and restarting it, will also require to 
	create a new surface, because the one from previous session will be no longer accessible.
"
!

step20
"Step 20: Radial gradients.

"
	| ramp perfectRadial radialWithCustomFocus |


	"A radial gradient defined using following parameters:
	 - a color ramp (a points in range from 0 to 1 with associated colors)
	- center point
	- radius
	- focal point (can be omited if focus is at center)
	"	
	ramp :=  {
			0 -> Color blue .
			0.25 -> Color red.
			0.5 -> Color white.
			0.75 -> Color yellow.
			1 -> (Color blue alpha: 0)
		}.
		
	perfectRadial := surface createRadialGradient: ramp
		center: 50@50  radius: 50 .
	
	radialWithCustomFocus := surface createRadialGradient: ramp
		center: 50@50  radius: 50	focalPoint: 20@20. 
	

	surface drawDuring: [:canvas |
		surface clear: Color gray.
			
			
		canvas pathTransform translateX: 10 Y: 10.
		
		canvas setShape: (0@0 corner:100@100).
		canvas setPaint: perfectRadial.
		
		canvas draw.


		canvas pathTransform translateX: 150 Y: 0.
		canvas setPaint: radialWithCustomFocus.
		
		canvas draw.

	].
!

step21
"Step 21: Pattern paints (bitmap paints).

"
	| bitmapPaint  |

	bitmapPaint := surface createBitmapPaint: (Bitmap fromUrl: 'http://amber-lang.net/images/amber.png'). 
	bitmapPaint repeat. "use #repeat to repeat the fill ad infinitum using tiling effect "
	
	surface drawDuring: [:canvas |
		surface clear: Color gray.
			
		canvas setPaint: bitmapPaint.
		
		"And of course, using the paint transform we can affect the result"
		
		canvas paintTransform scaleBy: 0.5.
		canvas drawShape: (0@0 corner: surface extent).

	].
!

step22
"Step 22: Using another surface as paint.

Simply pass surface as an argument to #setPaint: method.

"
	| surface2  |

	surface2 := AthensHTMLSurface extent: 10@10.
	
	"checker board"
	surface2 drawDuring: [:canvas |
		surface2 clear.
		canvas setPaint: Color white.
		
		canvas 
			drawShape: (0@0 corner: 5@5);
			drawShape: (5@5 corner: 10@10)
		].

	
	surface drawDuring: [:canvas |
		surface clear: Color gray.
			
		(canvas setPaint: surface2) repeat.
		
		"And of course, using the paint transform we can affect the result.
		Uncomment the line below to see the difference"
		"canvas paintTransform scaleX: 3 Y:1; rotateByDegrees: 45 ."
		canvas drawShape: (0@0 corner: surface extent).

	].
!

step23
"Step 23: Stroke paints.

Stroke paint is a special kind of paint, which instead of filling the shape,
 drawing a connected contour of certain width following the path.
"
	| path |

	path := surface createPath: [:builder |
			
		builder 
			moveTo: -50@ -50;
			lineTo: 50@0;
			lineTo: 0@50;
			lineTo: -50@0;
			lineTo: 80@ -30;
			close
		].
	
	surface drawDuring: [:canvas |
		| stroke |
		surface clear: Color gray.
			
		"A stroke paint uses another paint for fills"
		
		stroke := canvas setStrokePaint: Color white.
		
		"You can control the width of stroke by setting width parameter"
		stroke width: 5.
		
		canvas pathTransform 
			translateX: 400 Y:400;
			scaleBy: 4.
		canvas drawShape: path.

	].
!

step24

"Step 24: Stroke paints: Join type.

The stroke join type affects how to connect the segments.

"
	| path |

	path := surface createPath: [:builder |
			
		builder 
			moveTo: -50@ -50;
			lineTo: 50@0;
			lineTo: 0@50;
			lineTo: -50@0;
			lineTo: 80@ -30;
			close
		].
	
	surface drawDuring: [:canvas |
		| stroke |
		surface clear: Color gray.
			
		stroke := canvas setStrokePaint: Color white.
		stroke width: 5.

	"There are 3 kinds of joins: bevel, miter and round (uncomment to see the difference)"
	
		stroke joinBevel. 
"		stroke joinRound.
		stroke joinMiter.  
"		
		 		
		canvas pathTransform 
			translateX: 400 Y:400;
			scaleBy: 4.
		canvas drawShape: path.

	].
!

step25
"Step 25: Stroke paints: Cap style

The cap style affects drawing the end segments (what kind of 'cap' to use).

"
	| path |

	path := surface createPath: [:builder |
			
		builder 
			moveTo: -50@ -50;
			lineTo: 50@0;
			lineTo: 0@50;
			lineTo: -50@0;
			lineTo: 80@ -30 
			
			].
	
	surface drawDuring: [:canvas |
		| stroke |
		surface clear: Color gray.
			
		stroke := canvas setStrokePaint: Color white.
		stroke width: 5.

		stroke joinRound.
		
		"There are 3 kinds of cap: 
		  - round
		  - square
		  - and butt
		
		(uncomment to see the difference)
		"
		
		stroke capRound. 
		"stroke capButt."
		"stroke capSquare. "
		
		canvas pathTransform 
			translateX: 400 Y:400;
			scaleBy: 4.
		canvas drawShape: path.

	].
!

step26
"Step 26: Stroke paints: Dashing

"
	| path |

	path := surface createPath: [:builder |
			
		builder 
			moveTo: -50@ -50;
			lineTo: 50@0;
			lineTo: 0@50;
			lineTo: -50@0;
			lineTo: 80@ -30 
			
			].
	
	surface drawDuring: [:canvas |
		| stroke |
		surface clear: Color gray.
			
		stroke := canvas setStrokePaint: Color white.
		stroke width: 5.

		stroke joinRound.
		
		"There are 3 kinds of cap: 
		  - round
		  - square
		  - and butt
		
		(uncomment to see the difference)
		"
		
		stroke capRound. 

		stroke dashes: #( "fill"20  "gap"10 "fill" 35 "gap" 30) offset: 0.
		
		canvas pathTransform 
			translateX: 400 Y:400;
			scaleBy: 4.
		canvas drawShape: path.

	].
!

step27

"Step 27: Paint modes

The paint mode controls how incoming (source) fragments will be combined with what is already on surface (destination).
"
	
	surface drawDuring: [:canvas |
		| stroke |
		surface clear: Color gray.

			
		"Draw a blue rectangle to use it as background "
		canvas setPaint: Color blue.	
		canvas drawShape: (0@0 corner: 300@300).
		
		canvas paintMode over.
	"Try one of following paint modes, and see the result: 	
	
		clear
		source
		over    <=== this is default mode
		in
		out 
		atop
		dest
		destOver
		destIn
		destOut
		destAtop
		xor
		add
		saturate
		multiply
		screen
		overlay
		darken
		lighten
		colorDodge
		colorBurn
		hardLight
		softLight
		difference
		exclusion
		hslHue
		hslSaturation
		hslColor
		hslLuminosity
	
	You can check if given mode is supported by sending: 
	
		canvas paintMode availableModes 
		
	"	
		"Draw a semi-transparent yellow rectangle to combine it with background "
		canvas setPaint: (Color yellow alpha: 0.5).	
		canvas drawShape: (150@150 corner: 450@450).

	].
!

step28

"Step 28: Paint modes. Preserving the modes.

"
	
	surface drawDuring: [:canvas |
		| stroke |
		surface clear: Color gray.

			
		"Draw a blue rectangle to use it as background "
		canvas setPaint: Color blue.	
		canvas drawShape: (0@0 corner: 300@300).

	"Try to comment #restoreAfter: to see the difference "
		canvas paintMode restoreAfter: [		

			canvas paintMode source.
			canvas setPaint: (Color yellow alpha: 0.5).	
			canvas drawShape: (150@150 corner: 450@450).
		].
	
	
		canvas setPaint: (Color red).	
		canvas drawShape: (200@200 corner: 500@500).
	].
!

step29

"Step 29: Clipping.

"
	
	surface drawDuring: [:canvas |
		| stroke |
		surface clear: Color gray.

			
		"Draw a blue rectangle to use it as background "
		canvas setPaint: Color blue.	

		canvas clipBy:  (100@100 corner: 200@200) during: [ 	

			canvas drawShape: (0@0 corner: surface extent).
		].
	].
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

step30

"Step 30: drawing text.

Please note that this step requires Freetype enabled. 
Check if you enabled it in settings.
From world menu, go System->Settings
And then look for Appearance -> Use freetype in settings browser.

"
	| font |
	
	font := LogicalFont familyName: 'Arial' pointSize: 20.


	surface drawDuring: [:canvas |
		surface clear: Color black.

		"set font and color"
		canvas setFont: font.
		canvas setPaint: Color red.
		
		"translate an origin by font's ascent, otherwise 
		we will see only things below baseline"
		
		canvas pathTransform scaleBy: 4.
		canvas pathTransform translateX: 0 Y: 0.
		canvas drawString: 'Hello Athens!!'.
	].
!

step31
"The End!!"

	| font |	
	font := LogicalFont familyName: 'Arial' pointSize: 20.

	surface drawDuring: [:canvas |
		surface clear: Color black.

		canvas setFont: font.
		canvas setPaint: Color red.
		
		canvas pathTransform scaleBy: 4.
		canvas pathTransform translateX: 0 Y: (font getPreciseAscent).
		canvas drawString: 'The End!!'.
	].
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

!AthensTutorial class methodsFor: 'starting'!

open
	|html|
	html := HTMLCanvas onJQuery: '#workspace' asJQuery.
	html with: AthensTutorialWidget new.
! !

Widget subclass: #AthensTutorialWidget
	instanceVariableNames: 'canvasContainer step codeArea tutorial'
	package: 'Athens-HTML-Tutorial'!

!AthensTutorialWidget methodsFor: 'initialize-release'!

initialize
	step := 1.
	tutorial := AthensTutorial new.
! !

!AthensTutorialWidget methodsFor: 'interactions'!

nextStep
	step := step + 1.
	step > 31
		ifTrue: [step := 31].
	self showStep: step.
!

previousStep
	step := step - 1.
	step < 1
		ifTrue: [step := 1].
	self showStep: step.
!

showStep: anInteger
	|selector|
	selector := ('step', anInteger asString) asSymbol.
	codeArea asJQuery
		val: (AthensTutorial methodAt: selector) source.
!

stepDoIt
	|selector|
	selector := ('doItstep', step asString) asSymbol.
	AthensTutorial compile: 'doIt', codeArea asJQuery val.
	tutorial perform: selector.
	AthensTutorial removeCompiledMethod: (AthensTutorial methodAt: selector)
! !

!AthensTutorialWidget methodsFor: 'rendering'!

renderOn: html
	canvasContainer := html div
		style: 'height: 100%; float: left; margin: 50px;';
		id: 'canvas-container'.
	html div
		style: 'height: 100%;; margin: 50px; display: inline-block;';
		with: [
			codeArea := html textarea
				style: 'width: 100%; height: 350px;'.
			html input
				type: 'button';
				class: 'btn btn-primary';
				style: 'margin-right: 10px;';
				onClick: [self stepDoIt];
				value: 'Do it'.
			html input
				type: 'button';
				class: 'btn btn-primary';
				style: 'margin-right: 10px;';
				onClick: [self previousStep];
				value: 'Previous step'.
			html input
				type: 'button';
				class: 'btn btn-primary';
				onClick: [self nextStep];
				value: 'Next step'].
	self showStep: 1.
! !


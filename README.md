Amber-Athens
============

This version is outdated. Use [amber-athens-library](https://github.com/matthias-springer/amber-athens-library).

Athens is a vector graphics library for Pharo. This is a port of Athens for Amber. It is implemented with HTML Canvas.

**[Development Blog](http://amber-athens-blog.m-sp.org/)**

**[Interactive Athens tutorial](http://matthias-springer.github.io/amber-athens)**

**[Interactive Morphic tutorial](http://matthias-springer.github.io/amber-athens/morphic.html)**

*Note:* You have to run step2 before any you can run other steps since it creates the surface.

*Note:* This is work in progress!

*Project description:* [ESUG GSoC website](http://gsoc2013.esug.org/projects/athen's%20html5%20canvas/proposal-a)

Amber
=====

By Nicolas Petton <petton.nicolas@gmail.com> and [Amber contributors](https://github.com/NicolasPetton/amber/contributors)

Amber is an implementation of the Smalltalk language that runs on top of the JavaScript runtime. It is designed to make client-side development faster and easier.

Overview
--------

Amber is written in itself, including the parser and compiler. Amber compiles into efficient JavaScript, mapping one-to-one with the equivalent JavaScript. There is no interpretation at runtime.

Some highlights:

-    Amber features an IDE with a Class browser, Workspace, Transcript, a ReferencesBrowser supporting senders/implementors and class references, basic Inspector and even a beginning of a Debugger and a unit TestRunner.
-    [Pharo Smalltalk](http://www.pharo-project.org) is considered as the reference implementation.
-    Amber includes a canvas to generate HTML, like [Seaside](http://www.seaside.st)
-    Amber can use Javascript libraries and the current IDE is built on [jQuery](http://www.jquery.com)
-    You can inline Javascript code and there are many ways to interact between Amber and Javascript


License
-------

Amber is released under the MIT license. All contributions made for inclusion are considered to be under MIT.

Building Amber
--------------

Amber uses [Grunt.js](http://gruntjs.com/) as build system since version `0.10.0`.

If you already have Grunt.js v0.3.x installed locally run the following (otherwise ignore these lines):

    cd ${Amber_DIR}
    npm uninstall grunt

To install Grunt.js v0.4.x on the commandline execute the following commands:
    
    npm install -g grunt-cli grunt-init
    cd ${Amber_DIR}
    npm install

And finally, compile Amber using the following command:

    cd ${Amber_DIR}
    grunt

For Windows support check the [Grunt.js on Windows](http://gruntjs.com/frequently-asked-questions#does-grunt-work-on-windows) page.


More infos
----------

More on the [project page](http://amber-lang.net)

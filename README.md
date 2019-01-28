# Simple-slideshow
simple slideshow for websites (college project)

## Intent

The intent of this repository is to provide a simple, easy to use and modify slideshow element that can be used as part of the unit 3/13 website task.

## Limitations
Currently the code can only handle one style of slideshow, click through, and only uses one type of animation, fade out and in. Each slideshow is also set to a single 10 second timer and this cannot be changed for individual slideshows, the length of timer, however, can be changed by editing the global `slideTimer` variable in the Slideshow-JS file.

## Use

#### Setup

Firstly clone the repository and place the css and javascript (js) files inside the code folder into the relevant folder in your website's folder structure. Then link to both of the files in all relevant HTML files, the css file should be linked to in the header of your HTML document and the js document should be linked to just before the closing `</body>` tag, an example has been provided below.

```html
<head>
	<title>The Knights That Say Ni</title>
	<link rel="stylesheet" href="Slideshow-style.css">
</head>
<body>
	...
	...
	...
	<script type="text/javascript" src="Slideshow-JS.js"></script>
</body>
```
#### Creating the slideshow element

Once the files have been linked to you can start creating your slideshow elements. If you just want to quickly add in a slideshow element you can skip to the section below and copy and paste the example. Firstly create a `<slideshow>` element in your HTML document and add a `<div>` element inside the `<slideshow>` element with the class `slideshowControls`.

```html
<slideshow>
	<div class="slideshowControls">
		
	</div>
</slideshow>
```
Once these container elements have been created you can begin adding functionalliy to the slideshow controls. Firstly add two `<button>` elements to the slideshowControls div. Then add a `<div>` element with the class `slideshowBar`. The buttons will become your previous and next slide buttons and the slideshowBar div will display the number of slides in the slideshow and allow for unorderd navigation of the slideshow by the user. Your slideshow element sould now look like this:

```html
<slideshow>
	<div class="slideshowControls">
		<button></button>
		<button></button>
		<div class="slideshowBar">
			
		</div>
	</div>
</slideshow>
```
Lastly add an inline style to the slideshow element to set its width and height, width and height should be set in pixels (px) in order to contain the images. At this point your slideshow element is complete and you can start adding images.

#### Adding images

In order to add images simply add `<img>` elements to the slideshow element, when the webpage is loaded the extra `<img>` elements will be culled and their srcs added to the images attribute of the corresponding `Slideshow` object. Once you've added your images your slideshow element sould look something like this:
```html
<slideshow style="height: 300px; width: 600px;">
	<img src"images/tis but a scratch.jpg"/>
	<img src"images/she turned me into a newt.png"/>
	<img src"images/shrubbery.gif"/>
	<img src"images/he is the messiah.jpg"/>
	<div class="slideshowControls">
		<button></button>
		<button></button>
		<div class="slideshowBar">
			
		</div>
	</div>
</slideshow>
```

## TODO
The tasks below are listed in order of importance, however, this does not mean the tasks will be completed in order.
1. Add applicable webkit variations of css stylings.
1. change use of classes to use of custom elements
1. Add ability to enable, disable and customise timers on individual slideshows [in progress]
1. ~~Add pauseable timer~~
1. ~~Add scroll detection to pause a timer when slideshow elements are off screen~~
1. add functionality for slide captions
1. Add different styles of slideshow
1. Add different animation styles

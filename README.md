# Simple-slideshow
simple slideshow for websites (college project)

## Intent

The intent of this repository is to provide a simple, easy to use and modify slideshow element that can be used as part of the unit 3/13 website task.

## Limitations
Currently the code can only handle one style of slideshow, click through, and only uses one type of animation, fade out and in. Each slideshow is also set to a single 10 second timer and this cannot be change for individual slideshows, the length of timer, however, can be changed by editing the global 'slideTimer' variable in the Slideshow-JS file.

## Use

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
Once the files have been linked to you can start creating your slideshow elements

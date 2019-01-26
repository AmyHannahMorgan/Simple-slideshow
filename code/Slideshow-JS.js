// a working example of the code can be found here: https://jsfiddle.net/AmyHannahMorgan/hgbo6eu0/174/

var slideshowObjs = []; // array for storing Slideshow objects
var slideTimer = 10000; // global timer for slide changes, 1000 = 1 second & 10000 = 10 seconds

// TODO add pauseable timer object

function Slideshow(slideshowElem) { // function for creating slideshow objects

	/* 'this' refers to the object that is containing it, in this case 'this' is refering to the Slideshow 
	object that is being created. We create and set attributes and methods of objects by first calling
	'this.' followed by the name of the attribute or method and then the value */
  
	// TODO make slideshow elements customisable using element attributes
	
	this.parent = slideshowElem; // saves the parent slideshow element as an attripute
	
	this.images = buildImages(this.parent.querySelectorAll('img')); // creates an array for storeing image objects
	
	this.index = 0; // sets the slide index to 0, the first image/slide
	this.slide = this.parent.querySelector('img'); // sets the slide to the first img element for future use.
	
	this.inProg = false; // attribute to detect if the slideshow is changing slides
	
	// finds the first element with the class slideshow controls
	this.controls = this.parent.querySelector('.slideshowControls');
	var buttons = this.controls.querySelectorAll('button'); // finds all the buttons
	this.prevButt = buttons[0]; // sets the previous button to the first button element
	this.nextButt = buttons[buttons.length - 1]; // sets the next button to the last button element
	this.controlBar = this.controls.querySelector('.slideshowBar');
	this.dots = buildBarDots(this.controlBar, this.images.length, this);
	
	/* TODO add explenation of encapsulation and 'this' use*/
	
	var obj = this; // creates a variable referencing the object
	
	this.timer = setTimeout(function(){
		obj.changeSlide(false, obj.index + 1);
	}, slideTimer);
	
	this.prevButt.addEventListener('click', function(){ // listens for a click on the button
	
	/* we cannot use 'this' inside of event functions as 'this' refers to the object calling the function,
	in this case the prevButt element, so we use the above obj variable to refer to the Slideshow object*/
	
		if(!obj.inProg){ // checks if the slide is being changed already
			obj.changeSlide(true, obj.index - 1); // calls a method from the Slideshow object
		}
	});
	
	this.nextButt.addEventListener('click', function(){
		if(!obj.inProg){ 
			obj.changeSlide(true, obj.index + 1);
		}
	});
	
	// TODO add different slide transitions
	this.changeSlide = function(click, slide){
		this.inProg = true;
		if(click === true){
			clearTimeout(this.timer); // clear slide timer if button was clicked
		}
		
		/* checks if selected slide is above greater than the length of the array and loops the slide if so*/
		if(slide >= this.images.length){ 
			slide = 0;
		}
		/*loops the slide to the last index if it is less than 0*/
		else if(slide < 0){
			slide = this.images.length - 1;
		}
		var obj = this;
		this.slide.addEventListener('animationend', function foo(){
			this.style.opacity = '0';
			this.classList.remove('ssFadeOut');
			this.src = obj.images[slide].src; // sets the source of the img to the new slide
			void this.offsetWidth; // forces the browser to recalculate, ensures animations play;
			this.removeEventListener('animationend', foo); // removes the first event listener
			this.addEventListener('animationend', function bar(){
				this.style.opacity = '';
				this.classList.remove('ssFadeIn');
				this.removeEventListener('animationend', bar);
				obj.index = slide; // sets the new index to the slide index;
				obj.inProg = false; // sets in progress to false to allow the slides to be changed again
				obj.timer = setTimeout(function(){ // sets the timer recursivly
					obj.changeSlide(false, obj.index + 1);
				}, slideTimer);
			});
			this.classList.add('ssFadeIn');
			obj.dots[slide].classList.add('active');
		});
		this.slide.classList.add('ssFadeOut');
		this.dots[this.index].classList.remove('active');
	};
}

function buildImages(imageElems){
	var images = [];
	for(var i = 0; i < imageElems.length; i++){ // goes through every img element provided
		var currImg = new Image(); // creates a new image object
		currImg.src = imageElems[i].src; // sets the source of the image object to the source of the img elem
		images.push(currImg);// stores the image object in the images attribute
		if(i > 0){
			imageElems[i].parentNode.removeChild(imageElems[i]); // removes the image element if it is not the first element
		}
	}
	return images;
}

function buildBarDots(parent, count, obj){
	var dots = [];
	for(var i = 0; i < count; i++){ // repeats the code for as many images (count) as are present
		var elem = document.createElement('slideshowDot'); // creates a new slideshowDot element
		parent.appendChild(elem); // adds the element within the parent element, slideshowControls
		elem.style.width = elem.offsetHeight + 'px'; // sets the width of the element to the same as its height
		elem.setAttribute('index', i); // sets an attribute with the current i value
		if(i === 0){elem.classList.add('active')}
		elem.addEventListener('click', function(){ // creates an event to fire when the element is clicked
			obj.changeSlide(true, this.getAttribute('index')); // changes the slide to the side with the corrisponding index
		});
		dots.push(elem);
	}
	return dots;
}

function buildSlideshowObjs(){
	var slideshows = document.querySelectorAll('slideshow'); // finds all slideshow elements
	for(var i = 0; i < slideshows.length; i++){ // goes through every slideshow element
		var currObj = new Slideshow(slideshows[i]); // creates a slideshow object for each object
		slideshowObjs.push(currObj); // pushes the new object to the array for storage
	}
}

document.onLoad = buildSlideshowObjs();

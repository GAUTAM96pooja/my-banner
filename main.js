// 'js/mian.js'
// i have taken var slider img here anf added the function of the next and previous buttons.
var slider_img = document.querySelector('.slider-img');
var images = ['a.png', 'b.png', 'c.png', 'd.png', 'e.png'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}
// logic return in javascript here we used variable 
// all images so that we can save our time and less coding
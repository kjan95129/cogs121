/*
File: public/js/customize.js
Purpose: The corresponding JavaScript file to the Customize page that makes
the user inputs correspond to the responsiveness of the page. The user input
values on the sliders become lined up with the values of the cat photos
to see the cat representative's facial features change as well. After we
grab the values of each of the facial features the user wants, we make an
Ajax call to grab the best-matching photos from the SQLite database.
*/

const slider1 = document.getElementById("myRange");
const output1 = document.getElementById("demo");

const slider2 = document.getElementById("myRange2");
const output2 = document.getElementById("demo2");

const slider3 = document.getElementById("myRange3");
const output3 = document.getElementById("demo3");

let eyesApart = slider1.value;
let earsApart = slider2.value;
let nose_mouthApart = slider3.value;
let customizeOrResult = "customize";
let requestURL = '';
let color = 'black';
let mobile = false;
let ear_height = 7;
let ear_bottom = 70.75;

updateEyes = function(){
	let leftMove = -((eyesApart - 50));
	let rightMove = ((eyesApart - 50));

	if(mobile){
		leftMove = -((eyesApart - 50)) * .5;
		rightMove = ((eyesApart - 50)) * .5;
	}

	document.getElementById("leftEyeball").style.marginLeft = leftMove;
	document.getElementById("rightEyeball").style.marginLeft = rightMove;
}

updateEars = function(){
	let new_ears = ear_height + ((earsApart - 50) * .025);
	let new_bottom = ear_bottom + ((earsApart - 50) * .025);
	let slider_top = -95 - ((earsApart-50) * .025);

	if(mobile){
		new_ears = ear_height + ((earsApart - 50) * .1);
		new_bottom = ear_bottom + ((earsApart - 50) * .1);
		slider_top = -95 - ((earsApart-50) * .1);
		document.getElementById("_sliders").style.marginTop = slider_top + "vw";
	}
	else{
		document.getElementById("_sliders").style.marginTop = 0;
	}

	document.getElementById("catHead").style.height = new_ears + "vw";
	document.getElementById("catHead").style.bottom = new_bottom + "vw";
}

updateNoseMouth = function () {
	let leftEyeDown = -((nose_mouthApart - 50));
	let rightEyeDown = -((nose_mouthApart - 50) / 15);
	let mouthMove = 2 * ((nose_mouthApart - 50));
	let earMove = (-(mouthMove) / 2) - rightEyeDown;

	if(mobile){
		leftEyeDown = -((nose_mouthApart - 50) * .5);
		rightEyeDown = -((nose_mouthApart - 50) / 15) * .5;
		mouthMove = ((nose_mouthApart - 50));
		earMove = (-(mouthMove) / 2) - rightEyeDown;
	}

	document.getElementById("rightEyeball").style.marginTop = rightEyeDown;
	document.getElementById("leftEyeball").style.marginTop = leftEyeDown;
	document.getElementById("mouth").style.marginTop = mouthMove;
	document.getElementById("catHead").style.marginTop = earMove;
}


var x = window.matchMedia("(max-width: 768px)");
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function myFunction(x){
	if(x.matches){
		mobile = true;
		ear_height = 13;
		ear_bottom = 137.75;
		updateEars();
		updateEyes();
		updateNoseMouth();
	}
	else{
		mobile = false;
		ear_height = 7;
		ear_bottom = 70.75;
		updateEars();
		updateEyes();
		updateNoseMouth();
	}
}

// SLIDER 1
output1.innerHTML = slider1.value;

updateEyes();
slider1.oninput = function () {
	output1.innerHTML = this.value;
	eyesApart = this.value;
	updateEyes();
}


// SLIDER 2
output2.innerHTML = slider2.value;

updateEars();
slider2.oninput = function () {
	output2.innerHTML = this.value;
	earsApart = this.value;
	updateEars();
}


// SLIDER 3
output3.innerHTML = slider3.value;

updateNoseMouth();
slider3.oninput = function () {
	output3.innerHTML = this.value;
	nose_mouthApart = this.value;
	updateNoseMouth();
}


// TODO
// UPDATE THIS COLOR VARIABLE BASED ON INPUT
updateColor = function (c) {
	color = c;
	document.getElementById('colorName').innerHTML = color;
	if (color == 'black') {
		document.getElementById('face').src = "images/cathead_black.png";
		document.getElementById('catHead').src = "images/catears_black.png";
	}
	else if (color == 'brown') {
		document.getElementById('face').src = "images/cathead_brown.png";
		document.getElementById('catHead').src = "images/catears_brown.png";
	}
	else if (color == 'dark grey') {
		document.getElementById('face').src = "images/cathead_darkgrey.png";
		document.getElementById('catHead').src = "images/catears_darkgrey.png";
	}
	else if (color == 'light grey') {
		document.getElementById('face').src = "images/cathead_lightgrey.png";
		document.getElementById('catHead').src = "images/catears_lightgrey.png";
	}
	else if (color == 'white') {
		document.getElementById('face').src = "images/cathead_white.png";
		document.getElementById('catHead').src = "images/catears_white.png";
	}
	else if (color == 'orange') {
		document.getElementById('face').src = "images/cathead_orange.png";
		document.getElementById('catHead').src = "images/catears_orange.png";
	}
}

$('#backCustomize').click(() => {
	window.location = "index";
});

$('#doneCustomize').click(() => {

	document.getElementById('customizePage').style.display = "none";
	document.getElementById('resultsPage').style.display = "block";
	requestURL = 'customize/' + eyesApart + '+' + earsApart + '+' + nose_mouthApart + '+' + color;
	console.log('making ajax request to:', requestURL);

	$.ajax({
		// all relative to localhost:3000/
		url: requestURL,
		type: 'GET',
		dataType: 'json', 	// this URL returns data in JSON format
		success: (data) => {
			console.log("received cat data, mwahaha", data);

			// document.getElementById('catResults1').innerHTML = '';
			// document.getElementById('catResults2').innerHTML = '';
			document.getElementById('photos').innerHTML = '';

			if (data.length >= 0) {
				let pictureCount = 0;

				// loop through array of pictures
				for (const e of data) {
					pictureCount = pictureCount + 1;
					dataToDisplay = "<img src='" + e.picture + "'/>";
					document.getElementById('photos').innerHTML += dataToDisplay;
				}

			} else {
				console.log("Error: could not find cat at URL: ", requestURL);
			}
		}
	});

});

$('#homeResults').click(() => {
	window.location = "index";
});

$('#backResults').click(() => {
	document.getElementById('customizePage').style.display = "block";
	document.getElementById('resultsPage').style.display = "none";
});

$(document).ready(() => {
	document.getElementById('resultsPage').style.display = "none";
	console.log("ready function");
});

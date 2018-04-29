let eyesApart = 'medium';
let earsApart = 'medium';
let nose_mouthApart = 'medium';
let customizeOrResult = "customize";
let requestURL = '';

const slider1 = document.getElementById("myRange");
const output1 = document.getElementById("demo");
output1.innerHTML = slider1.value;

slider1.oninput = function () {
	output1.innerHTML = this.value;
	if (this.value <= 33) {
		eyesApart = 'small';
	}
	else if (this.value <= 67) {
		eyesApart = 'medium';
	}
	else {
		eyesApart = 'large';
	}
	console.log("eyes: " + eyesApart);
}

const slider2 = document.getElementById("myRange2");
const output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

slider2.oninput = function () {
	output2.innerHTML = this.value;
	if (this.value <= 33) {
		earsApart = 'small';
	}
	else if (this.value <= 67) {
		earsApart = 'medium';
	}
	else {
		earsApart = 'large';
	}
	console.log("ears: " + earsApart);
}

const slider3 = document.getElementById("myRange3");
const output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;

slider3.oninput = function () {
	output3.innerHTML = this.value;
	if (this.value <= 33) {
		nose_mouthApart = 'small';
	}
	else if (this.value <= 67) {
		nose_mouthApart = 'medium';
	}
	else {
		nose_mouthApart = 'large';
	}
	console.log("nose_mouth: " + nose_mouthApart);
}

$('#backCustomize').click(() => {
	window.location = "index";
});

$('#doneCustomize').click(() => {

	document.getElementById('customizePage').style.display = "none";
	document.getElementById('resultsPage').style.display = "block";
	requestURL = 'customize/' + eyesApart + '+' + earsApart + '+' + nose_mouthApart;
	console.log('making ajax request to:', requestURL);

	$.ajax({
		// all relative to localhost:3000/
		url: requestURL,
		type: 'GET',
		dataType: 'json', 	// this URL returns data in JSON format
		success: (data) => {
			console.log("received cat data, mwahaha", data);

			if (data.length >= 0) {
				let dataToDisplay = '';
				for (const e of data) {
					dataToDisplay = dataToDisplay + "<div class='row'><img src='https://res.cloudinary.com/dczoi0wxt/image/upload/" + e.picture + "'/></div>";
				}
				document.getElementById('catResults').innerHTML = dataToDisplay;
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

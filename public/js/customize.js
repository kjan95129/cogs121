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




output1.innerHTML = slider1.value;
slider1.oninput = function () {
	output1.innerHTML = this.value;
	eyesApart = this.value;
	console.log("eyes: " + eyesApart);

	let leftMove = -((eyesApart - 10));
	let rightMove = ((eyesApart - 10));

	/*
	let move = 0;
	if (eyesApart >= 50){
			move =-((eyesApart-10)/2);
		}
		else {
		move =-((eyesApart-60)/3);
		}
		*/

	document.getElementById("leftEyeball").style.marginLeft = leftMove;
	document.getElementById("rightEyeball").style.marginLeft = rightMove;

	//alert(document.getElementById("leftEyeball").style.margin);
	//	document.getElementById('leftEye').style.padding-right=10;
}

output2.innerHTML = slider2.value;
slider2.oninput = function () {
	output2.innerHTML = this.value;
	earsApart = this.value;
	console.log("ears: " + earsApart);
}

output3.innerHTML = slider3.value;
slider3.oninput = function () {
	output3.innerHTML = this.value;
	nose_mouthApart = this.value;
	console.log("nose_mouth: " + nose_mouthApart);

	let leftEyeDown = -((nose_mouthApart-10));
	let rightEyeDown = -((nose_mouthApart-10)/15);
	let mouthMove = ((nose_mouthApart));

	document.getElementById("rightEyeball").style.marginTop =  rightEyeDown;
	document.getElementById("leftEyeball").style.marginTop =  leftEyeDown;
	document.getElementById("mouth").style.marginTop = mouthMove;
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

			document.getElementById('catResults1').innerHTML = '';
			document.getElementById('catResults2').innerHTML = '';

			if (data.length >= 0) {
				let pictureCount = 0;

				// loop through array of pictures
				for (const e of data) {
					pictureCount = pictureCount + 1;
					dataToDisplay = "<img src='" + e.picture + "'/>";
					if (pictureCount <= 5) {
						document.getElementById('catResults1').innerHTML += dataToDisplay;
					}
					else {
						document.getElementById('catResults2').innerHTML += dataToDisplay;
					}
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

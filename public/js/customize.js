let eyesApart = 0;
let earsApart = 0;
let noseToMouth = 0;
let customizeOrResult = "customize";
let requestURL = '';

var slider1 = document.getElementById("myRange");
var output1 = document.getElementById("demo");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}

var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;

slider3.oninput = function() {
  output3.innerHTML = this.value;
}

$('#backCustomize').click(() => {
	window.location="index";
});

$('#doneCustomize').click(() => {
	eyesApart = 10; // for now, FIXME
	earsApart = 10;
	noseToMouth = 10;

	document.getElementById('customizePage').style.display = "none";
	document.getElementById('resultsPage').style.display = "block";
	requestURL = 'customize/' + eyesApart + '+' + earsApart + "+" + noseToMouth;
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
					dataToDisplay = dataToDisplay + "<div class='row'><img src='" + e.photo + "'/></div>";
				}
				document.getElementById('catResults').innerHTML = dataToDisplay;
			} else {
				console.log("Error: could not find cat at URL: ", requestURL);
			}
		}
	});

});

$('#homeResults').click(() => {
	window.location="index";
});

$('#backResults').click(() => {
	document.getElementById('customizePage').style.display = "block";
	document.getElementById('resultsPage').style.display = "none";
});

$(document).ready(() => {
	document.getElementById('resultsPage').style.display = "none";
	console.log("ready function");
});

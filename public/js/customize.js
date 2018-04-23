let eyesApart = 0;
let earsApart = 0;
let noseToMouth = 0;
let customizeOrResult = "customize";

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

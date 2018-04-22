function backButton(){
	window.location="index";
}

function doneButton(){
	localStorage.setItem("eyes", "10");
	localStorage.setItem("ears", "10");
	localStorage.setItem("noseToMouth", "10");

	window.location="results";
}

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

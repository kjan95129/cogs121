$(document).ready(() => {
	const database = firebase.database();

	$('#doneCustomize').click(() => {

		console.log("eyes are: " + eyesApart);
		console.log("ears are: " + earsApart);
		console.log("eyes to Mouth are: " + nose_mouthApart);
		console.log("color are: " + color);

		//database.ref('users/').remove();
		//console.log("collecting data");

		database.ref('cats/color/').push(color);
		database.ref('cats/eyes/').push(eyesApart);
		database.ref('cats/ears/').push(earsApart);
		database.ref('cats/eyes to mouth/').push(nose_mouthApart);



	});

});
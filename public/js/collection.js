$(document).ready(() => {
	const database = firebase.database();

	$('#doneCustomize').click(() => {

		console.log("eyes are: " + eyesApart);
		console.log("ears are: " + earsApart);
		console.log("eyes to Mouth are: " + nose_mouthApart);
		console.log("color are: " + color);

		//database.ref('users/').remove();
		//console.log("collecting data");

		if (color == "black") {
			let colorBlack = database.ref('cats/color/black/number');
			colorBlack.transaction(function(number) {
				return number+1;
			});
		}
		else if (color == "dark grey") {
			let colorDarkGrey = database.ref('cats/color/darkgrey/number');
			colorDarkGrey.transaction(function(number) {
				return number+1;
			});
		}
		else if (color == "light grey") {
			let colorLightGrey = database.ref('cats/color/lightgrey/number');
			colorLightGrey.transaction(function(number) {
				return number+1;
			});
		}
		else if (color == "white") {
			let colorWhite = database.ref('cats/color/white/number');
			colorWhite.transaction(function(number) {
				return number+1;
			});
		}
		else if (color == "brown") {
			let colorBrown = database.ref('cats/color/brown/number');
			colorBrown.transaction(function(number) {
				return number+1;
			});
		}
		else if (color == "orange") {
			let colorOrange = database.ref('cats/color/orange/number');
			colorOrange.transaction(function(number) {
				return number+1;
			});
		}

		database.ref('cats/eyes/').push(eyesApart);
		database.ref('cats/ears/').push(earsApart);
		database.ref('cats/eyes to mouth/').push(nose_mouthApart);



	});

});

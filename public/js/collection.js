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

		database.ref('cats/color/black/number').on('value', (snapshot) => {
			var changeBlack = snapshot.val();
			if (changeBlack) {
				localStorage.setItem("black", JSON.stringify(changeBlack));
			}
		});

		database.ref('cats/color/darkgrey/number').on('value', (snapshot) => {
			var changedarkgrey = snapshot.val();
			if (changedarkgrey) {
				localStorage.setItem("darkgrey", JSON.stringify(changedarkgrey));
			}
		});

		database.ref('cats/color/lightgrey/number').on('value', (snapshot) => {
			var changeLightGrey = snapshot.val();
			if (changeLightGrey) {
				localStorage.setItem("lightgrey", JSON.stringify(changeLightGrey));
			}
		});

		database.ref('cats/color/white/number').on('value', (snapshot) => {
			var changeWhite = snapshot.val();
			if (changeWhite) {
				localStorage.setItem("white", JSON.stringify(changeWhite));
			}
		});

		database.ref('cats/color/brown/number').on('value', (snapshot) => {
			var changeBrown = snapshot.val();
			if (changeBrown) {
				localStorage.setItem("brown", JSON.stringify(changeBrown));
			}
		});

		database.ref('cats/color/orange/number').on('value', (snapshot) => {
			var changeOrange = snapshot.val();
			if (changeOrange) {
				localStorage.setItem("orange", JSON.stringify(changeOrange));
			}
		});
	});

});

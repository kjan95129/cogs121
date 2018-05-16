
/**
 * Module dependencies.
 */

const express = require('express');
const http = require('http');
const path = require('path');
const handlebars = require('express3-handlebars')
const app = express();

// setters for routes
const index = require('./routes/index');
const customize = require('./routes/customize');

// sqlite dependencies
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('cats.db');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

// creating engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// router
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// getters for routes
app.get('/', index.view);
app.get('/index', index.view);
app.get('/customize', customize.view);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // hook up with your app

// GET profile data for a cat
app.get('/customize/:specs', (req, res) => {

	const max_eyes = 404.73818698;
	const max_ears = 1002.17563331;
	const max_nose_mouth = 1026.90992789;

	const specsToLookup = req.params.specs; // matches ':specs' above
	const specs_arr = specsToLookup.split('+');

	const eyesSize = specs_arr[0];
	const earsSize = specs_arr[1];
	const nose_mouthSize = specs_arr[2];
	const color = 'black';

	// console.log("eyes1: " + (max_eyes/10)*~~(eyesSize/10));
	// console.log("eyes2: " + (max_eyes/10)*(~~(eyesSize/10)+1));

	// console.log("ears1: " + (max_ears/10)*~~(earsSize/10));
	// console.log("ears2: " + (max_ears/10)*(~~(earsSize/10)+1));

	// console.log("nose_mouth1: " + (max_nose_mouth/10)*~~(nose_mouthSize/10));
	// console.log("nose_mouth2: " + (max_nose_mouth/10)*(~~(nose_mouthSize/10)+1));

	// db.all() fetches all results from an SQL query into the 'rows' variable:
	const eyes1 = (max_eyes / 10) * ~~(eyesSize / 10);
	const eyes2 = (max_eyes / 10) * (~~(eyesSize / 10) + 1);
	const ears1 = (max_ears / 10) * ~~(earsSize / 10);
	const ears2 = (max_ears / 10) * (~~(earsSize / 10) + 1);
	const nose_mouth1 = (max_nose_mouth / 10) * ~~(nose_mouthSize / 10);
	const nose_mouth2 = (max_nose_mouth / 10) * (~~(nose_mouthSize / 10) + 1);

	console.log("trying 3");
	db.all(
		'SELECT * FROM all_cats WHERE color=$color AND CAST(eyes as decimal) BETWEEN $eyes1 AND $eyes2 AND CAST(ears as decimal) BETWEEN $ears1 AND $ears2 AND CAST(nose_mouth as decimal) BETWEEN $nose_mouth1 AND $nose_mouth2 ORDER BY RANDOM() LIMIT 10',
		// parameters to SQL query:
		{
			$color: color,
			$eyes1: eyes1,
			$eyes2: eyes2,
			$ears1: ears1,
			$ears2: ears2,
			$nose_mouth1: nose_mouth1,
			$nose_mouth2: nose_mouth2
		},
		// callback function to run when the query finishes:
		(err, rows) => {
			if (rows.length != 0) {
				console.log("sending 3");
				res.send(rows);
			}
			else {
				console.log("trying 2");
				db.all(
					'SELECT * FROM all_cats WHERE color=$color AND CAST(eyes as decimal) BETWEEN $eyes1 AND $eyes2 AND CAST(ears as decimal) BETWEEN $ears1 AND $ears2 ORDER BY RANDOM() LIMIT 10',
					// parameters to SQL query:
					{
						$color: color,
						$eyes1: eyes1,
						$eyes2: eyes2,
						$ears1: ears1,
						$ears2: ears2
					},
					// callback function to run when the query finishes:
					(err, rows) => {
						if (rows.length != 0) {
							console.log("sending 2");
							res.send(rows);
						}
						else {
							console.log("trying 1");
							db.all(
								'SELECT * FROM all_cats WHERE color=$color AND CAST(eyes as decimal) BETWEEN $eyes1 AND $eyes2 ORDER BY RANDOM() LIMIT 10',
								// parameters to SQL query:
								{
									$color: color,
									$eyes1: eyes1,
									$eyes2: eyes2
								},
								// callback function to run when the query finishes:
								(err, rows) => {
									if (rows.length != 0) {
										console.log("sending 1");
										res.send(rows);
									}
									else {
										console.log("trying 0");
										db.all(
											'SELECT * FROM all_cats WHERE color=$color ORDER BY RANDOM() LIMIT 10',
											// parameters to SQL query:
											{
												$color: color,
											},
											// callback function to run when the query finishes:
											(err, rows) => {
												if (rows.length != 0) {
													console.log("sending 0");
													res.send(rows);
												}
												else {
													console.log("no match found");
													res.send({});
												}
											}
										);
									}
								}
							);
						}
					}
				);
			}
		}
	);
});

http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});

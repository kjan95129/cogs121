
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
const results = require('./routes/results');

// sqlite dependencies
const sqlite = require('sqlite3');
const db = new sqlite3.Database('pets.db');

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
app.get('/results', results.view);

// fake database in memory
const fakeDatabase = {
  'Cat0': {photo: 'cat_data/00000001_000.jpg', annotation: 'cat_data/00000001_000.jpg.cat'},
  'Cat1': {photo: 'cat_data/00000001_005.jpg', annotation: 'cat_data/00000001_005.jpg.cat'},
  'Cat2': {photo: 'cat_data/00000001_008.jpg', annotation: 'cat_data/00000001_008.jpg.cat'},
  'Cat3': {photo: 'cat_data/00000001_011.jpg', annotation: 'cat_data/00000001_011.jpg.cat'},
  'Cat4': {photo: 'cat_data/00000001_012.jpg', annotation: 'cat_data/00000001_012.jpg.cat'},
  'Cat5': {photo: 'cat_data/00000001_016.jpg', annotation: 'cat_data/00000001_016.jpg.cat'},
  'Cat6': {photo: 'cat_data/00000001_017.jpg', annotation: 'cat_data/00000001_017.jpg.cat'}
}

// GET a list of all the cats
app.get('/customize', (req, res) => {
  const allCats = Object.keys(fakeDatabase);
  console.log('allCats is: ', allCats);
  res.send(allCats);
});

// GET photos for the cat specification
app.get('/customize/:specs', (req, res) => {
  const specsToLookup = req.params.specs; // matches ':specs'
  // TODO, some calculations for similar cats
  let cats = [fakeDatabase['Cat0'], fakeDatabase['Cat2'], fakeDatabase['Cat5']];
  if (cats) {
    res.send(cats);
  } else {
    res.send({});   // failed, so return empty object instead of undefined
  }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

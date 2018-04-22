
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
app.get('/index', index.view);
app.get('/customize', customize.view);
app.get('/results', results.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

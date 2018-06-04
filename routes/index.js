/*
File: routes/index.js
Purpose: App.js calls this to move to the home page through a GET request.
*/

exports.view = function(req, res){
  res.render('index');
};

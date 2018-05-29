//const cheerio = require('cheerio');
//const request = require('request');
// from the san diego humane society page (https://www.sdhumane.org/how-you-can-help/adopt/available-pets/)
//const $ = cheerio.load();
$('#checkCats').click(() => {
  window.location.href='https://www.petfinder.com/search/cats-for-adoption/us/ca/san-diego/?distance=10';
});

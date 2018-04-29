// Node.js + Express server backend for build-a-cat
// v2 - use SQLite (https://www.sqlite.org/index.html) as a database
//

// run this once to create the initial database as the pets.db file
//   node create_database.js

// to clear the database, simply delete the pets.db file:
//   rm pets.db

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('cats.db');

// run each database statement *serially* one after another
// (if you don't do this, then all statements will run in parallel,
//  which we don't want)
db.serialize(() => {
    // create a new database table:
    db.run("CREATE TABLE all_cats (id INTEGER PRIMARY KEY, eyes TEXT, ears TEXT, nose_mouth TEXT, picture TEXT)");

    // insert 3 rows of data:
    // TODO: write a script to create insert statemnts for ever cat image below
    db.run("INSERT INTO all_cats VALUES (NULL, 'small', 'small', 'small', '00000001_000.jpg')");
    db.run("INSERT INTO all_cats VALUES (NULL, 'medium', 'medium', 'medium', '00000001_005.jpg')");
    db.run("INSERT INTO all_cats VALUES (NULL, 'large', 'large', 'large', '00000001_008.jpg')");

    console.log('successfully created the all_cats table in cats.db');

    // // print them out to confirm their contents:
    // db.each("SELECT id, eyes, ears, nose_mouth, picture FROM all_cats", (err, row) => {
    //     console.log(row.id + ", " + row.eyes + ", " + row.ears + ', ' + row.nose_mouth + ', ' + row.picture);
    // });
});

db.close();
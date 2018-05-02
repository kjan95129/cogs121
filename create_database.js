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
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('64.0312423743', '175.923278733', '259.023164987', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000001_000.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('64.88451279', '207.663188842', '150.950322954', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000001_005.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('22.0907220344', '55.0090901579', '395.0', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000001_008.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('75.953933407', '237.59208741', '286.001748246', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000001_011.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('64.0078120232', '188.170135781', '196.880674521', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000001_012.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('61.0737259384', '153.39491517', '480.277003405', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000001_016.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('156.847059265', '370.40653342', '675.781029624', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000001_017.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('112.871608476', '295.58416737', '273.651237892', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000001_020.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('69.0', '177.045191971', '334.858178936', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000001_024.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('44.283179651', '130.096118313', '281.400071073', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000001_027.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('65.0076918526', '142.014083809', '413.35940778', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000001_029.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('234.258404332', '810.449875069', '744.268768658', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000002_001.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('210.440015206', '712.185369128', '735.845771884', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000002_003.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('108.00462953', '270.407100498', '357.414325398', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000002_008.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('52.0864665724', '126.253712817', '254.434667449', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000002_026.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('71.0', '171.026313765', '382.941248758', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000003_007.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('66.1891229735', '176.91806013', '352.846992335', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000003_009.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('37.0135110466', '111.004504413', '230.638244877', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000003_012.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('42.1900462195', '101.833196945', '180.335797888', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000003_013.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('59.4810894319', '222.685877415', '319.081494293', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000003_015.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('202.074243782', '509.722473509', '530.978342308', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000003_020.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('35.0', '100.004999875', '285.029823001', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000003_024.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('73.0616178304', '214.189168727', '304.568547293', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000003_026.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('85.2877482409', '233.343095034', '315.087289493', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000003_029.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('30.0166620396', '86.0929730001', '260.017307116', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000004_003.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('15.0', '35.2278299076', '325.161498336', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000004_007.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('65.192024052', '177.022597428', '272.809457314', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000004_008.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('141.152399909', '332.64094757', '744.002688167', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000004_012.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('71.1758385971', '177.912900038', '319.104998394', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000004_018.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('159.38004894', '414.019323221', '349.864259392', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000004_023.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('117.720006796', '300.403062568', '673.683902138', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000004_028.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('121.202310209', '335.435537771', '584.787995773', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000005_000.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('181.496556441', '431.490440219', '588.340037733', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000005_001.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('36.0555127546', '100.448992031', '530.01981095', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000005_012.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('61.0081961707', '151.029798384', '297.405447159', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000005_017.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('129.015502944', '259.557315443', '276.02354972', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000005_020.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('93.0053761887', '213.021125713', '742.962313984', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000005_022.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('123.975804091', '233.634329669', '443.695841766', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000005_023.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('165.148418097', '407.976715022', '743.854824546', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000006_006.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('76.0591874792', '169.779268463', '292.479059079', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000006_008.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('40.4598566483', '106.775465347', '325.332137976', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000006_009.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('93.3488082409', '207.966343431', '708.861058318', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000006_011.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('42.4264068712', '97.0154626851', '344.988405602', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000006_013.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('113.039815994', '298.060396564', '708.92665347', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000006_016.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('70.0071424927', '185.310550158', '394.182698758', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000006_022.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('56.0446250768', '150.416089565', '361.66973885', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000006_024.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('47.3814309619', '123.320720076', '379.225526567', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000006_025.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('52.4690384894', '128.132743668', '227.114508563', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000006_029.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('79.4040301244', '201.101964187', '287.360400891', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000007_000.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('27.0739727414', '75.802374633', '705.141829705', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000007_002.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('67.007462271', '171.011695506', '299.808272067', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000007_004.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('130.061523903', '310.058059079', '329.109404302', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000007_005.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('105.076162853', '229.019649812', '355.692282739', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000007_006.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('107.042047813', '260.555176498', '398.889709068', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000007_007.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('143.850616961', '361.247837364', '458.350302716', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000007_008.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('174.957137608', '429.954648771', '809.930861247', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000007_012.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('59.0', '162.0', '345.858352509', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000007_013.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('168.002976164', '382.020941834', '296.654681406', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000007_014.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('126.253712817', '280.007142766', '305.659941765', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000007_015.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('28.0178514522', '89.0224690738', '269.267524964', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000007_022.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('70.0071424927', '210.760527614', '315.420354448', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000008_002.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('248.243831746', '636.96938702', '509.824479601', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000008_003.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('129.189782878', '365.165715806', '319.788992931', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000008_007.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('43.0', '109.004587059', '209.766536893', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000008_018.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('52.4690384894', '121.696343413', '364.93972105', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000008_028.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('78.1600921187', '217.52471124', '352.625864054', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000008_029.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('88.0908621822', '253.333771929', '618.815804582', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000009_003.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('89.3588272081', '214.59729728', '591.148035605', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000009_004.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('40.4474968323', '100.224747443', '604.052977809', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000009_005.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('154.003246719', '365.788190077', '412.043687004', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000009_009.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('124.040316027', '266.242370783', '649.561390478', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000009_013.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('86.8331733844', '253.30811278', '728.357055296', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000009_015.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('51.8555686499', '151.343979068', '773.760298801', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000009_016.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('95.0210502994', '263.190045404', '449.177025236', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000009_021.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('64.6297145282', '179.067026557', '765.31627449', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000009_022.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('33.2415402772', '86.1452262171', '597.053598934', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000009_023.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('152.738338344', '317.616120498', '646.304107986', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000009_026.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('71.5681493403', '170.064693573', '252.675681457', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000010_000.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('84.0119039184', '208.952147632', '439.638487851', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000010_003.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('164.109719395', '404.115082619', '441.403443575', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000010_006.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('147.868184543', '365.016437986', '515.239750019', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000010_027.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('184.230833467', '468.385524968', '710.049294063', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000010_028.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('94.5409963984', '236.13555429', '517.000967117', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000010_029.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('97.0824391947', '245.153013443', '561.506901115', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000011_001.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('211.021325937', '391.00127877', '459.448582542', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000011_002.jpg')");
    db.run("INSERT INTO all_cats (eyes, ears, nose_mouth, picture) VALUES ('35.1283361405', '86.3712915268', '379.316490546', 'https://res.cloudinary.com/dczoi0wxt/image/upload/00000011_003.jpg')");

    console.log('successfully created the all_cats table in cats.db');

    // // print them out to confirm their contents:
    // db.each("SELECT id, eyes, ears, nose_mouth, picture FROM all_cats", (err, row) => {
    //     console.log(row.id + ", " + row.eyes + ", " + row.ears + ', ' + row.nose_mouth + ', ' + row.picture);
    // });
});

db.close();
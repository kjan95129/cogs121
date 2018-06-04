Final Markdown Document

Team: .cat
Due: June 4, 2018

Hee Ro Chung:
  Wrote the milestone markdowns
  Worked on cat image manipulation and connected user slider inputs to distances between the cat's facial
  features
  Worked on Firebase structure and used Firebase to store, retrieve, display, and update user preferences on
  their choice of cat fur color in real time through data visualization

Kevin Jan:
set up, cleaned up, maintained repo
-visual design for all of the pages (CSS stuff)
-navbar & page linking
-set up sqlite for photo storage and retrieval
-connected slider input with sqlite backend & photo retrieval
-color choosing on both front end
-code cleanup and correction for most of front end
-mobile responsiveness


Sally Lai U:
  Set up the skeleton of the website
  Worked on cat image manipulation using photoshop to separate individual facial features, and connecting the slider
  inputs to the distances between facial features
  Made UI changes such as adding buttons
  Set up the Firebase and stored the user input of the users' cat color preferences.
  Recorded the narration of the final demo video

Kate Wong:
  Pre-processed the cat images database and annotations to find the distances between the eyes, length of ears,
  distance from the eyes to mouth, identifying the colors of the cats, and coming up with algorithm to find the
  cats the user actually wants (mapping the values from the database to what the user inputs)
  Also added some of the data visualizations after parsing the data from the Los Angeles animal intake information
  in Python



Source Code Files:
--- Note: The .ipynb files must be opened in Jupyter Notebook for the file description to appear at the top. Otherwise, it can
be found towards the middle or bottom of the file ---


db/AnimalIntakeStats.ipynb - Processes a csv file of information regarding what kinds of animals were taken
                            into their animal shelters, the species and breeds of these animals, etc. these   
                            statistics are then used in data visualization

db/create_database.js - Node.js and Express server backend are implemented for Build-A-Cat. All database
                        queries for the cat image database and facial feature dimensions happen here.

db/DistanceToRatioCats.ipynb - Processes the files in the cat image database and creates the
                              SQLite database queries to create the database of cat photos.

db/update_database.js - Update statements that fix cat image database to contain the heights of the ears
                        rather than the distances between the ears.

public/css/styles.css - All styling components of Build-A-Cat are in this file, making the application
                        aesthetic and user friendly.

public/js/collection.js -

public/js/customize.js - This file corresponds to the Customize page and allows the user inputs to correspond
                        to the responsiveness of the page. User input values on the sliders change in unison
                        with the values of the cat's image.

routes/checkshelters.js - App.js calls this to move to the next page through a GET request.

routes/customize.js - App.js calls this to move to the next page through a GET request.

routes/index.js - App.js calls this to move to the next page through a GET request.

views/checkshelters.handlebars -

views/customize.handlebars -  In charge of the HTML files and components shown on the "Cat Adoption Facts"
                              page. When the user selects his/her desired facial features for a cat, the
                              results are reflected on the image of the cat. Then the final cat photo gallery
                              results are shown in an art gallery style format.

views/index.handlebars - This file is in charge of the HTML files and components that are shown on the homepage.
                        The page features the pulsing Build-A-Cat logo and gives the user a brief description of
                        what the application is for.

app.js - This is the web server that allows the user to interact with the application through HTTP requests that
          move the user through the various web pages and grab information from the SQLite database.

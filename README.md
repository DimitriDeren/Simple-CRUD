# Presentation slides
https://docs.google.com/presentation/d/1DCzlWOs0f6YkEEG3Djm7Ze_9GvwhnjNKx4PtVveoCQg/edit#slide=id.gf3894dc225_1_2

# How to use the system

- Go into the root folder of the project
- Run 'npm install'
  - Some dependencies might be missing during npm install, check the terminal output to manually install missing dependencies. 
- Run 'nodemon start'

Authenticated users are able to delete any recipe and update recipes in the home page through the use of the 'trash' icon and the 'update' button. By pressing the trash icon, it sends a DELETE request to the server that corresponds to that specific recipe widget's ID and deletes it from the database and the user interface. The update button sends a PUT request to the database and updates the corresponding recipe using its ID. 

All users are able to also search up recipes which does a GET request to Edamam's database and generates a list of recipes users can try out. 

Current and new users are able to login and create user accounts through the login page and registration page respectively. Users are able to add recipes through the 'Add Recipe' button in the 'Add Recipe' page where it sends a POST request to the MongoDB Database. 

# What the interface is 

You will end up in the dashboard where all users can see the recipes that has been added on the left side. Authenticated users are able to delete any recipe and update recipes in the home page through the use of the 'trash' icon and the 'update' button. All users are able to also search up recipes on the right side of the page which does a GET request to Edamam's database and generates a list of recipes users can try out. 

​       In the navigation bar, all users are able to get into the login page. This is where current and new users are able to login and create user accounts. Once users are logged in, they then have access to the add recipe page where they are able to add new recipes. Once the 'Add Recipe' button has been pressed, it sends a POST request to the MongoDB Database, passing in the values of the add recipe fields and users are able to see their new recipe back in the home page. 

# What error handling has been implemented in your system

For the REST API, all errors encountered are caught as they occur and will be returned in the HTTP response status and response body. Depending on the error encountered a different response status code is returned, ranging from ERROR 400 - 500. An ERROR 400 code is returned when an invalid password is passed during the authentication process. An ERROR 404 is returned when the requested resource is not found. An ERROR 500 is returned when a invalid connection is encountered.


# Database Design

Our database is hosted on MongoDB using the Atlas service, splitting our data into a total of three collections; recipes, accounts, and users. 

The users section is a record of all registered accounts split into one document per account, each document contains three fields. The “_id” field is a default field created by mongoDB that stores the auto-generated “ObjectId” of the document. The “userName” field stores the name the user used when registering their account. The “passHash” field stores a SHA256 hash of the password the user used when registering their account.

The recipes section is a record of all saved recipes, split into one document per recipe, each document has 4 fields; “_id”, “title”, “ingredients”, and “directions”. The “_id” field is a default field created by mongoDB that stores the auto-generated “ObjectId” of the document. The “title” field contains the name of the recipe. The “ingredients” field contains a list of the ingredients required to cook the recipe. The “directions” field contains a list of instructions on how to cook the recipe.

To create, update, or delete from the database the user must be authenticated (logged in) with the exception of registering an account. To modify the database an authenticated user uses on screen buttons to call methods within the “client.account.controller.js” (for account related data) or “controller.js” (for recipe related data) files which make API calls to the server, the server handles the API calls based on the URL and reroutes using “account.route.js” or “recipes.route.js” to the appropriate methods within the respective DAO files (“AccountDAO.js” and “RecipesDAO.js”). The DAO files hold a connection to their respective collection (“users” for account data, or “recipes” for recipe data) and call the methods that modify the database of that collection based on the API call.  

We have set up our own server API where users are able to send requests to that handles create, read, update and delete for the recipe themselves. In the system, there are two types of GET requests, one that gets all currently stored recipes and another that gets individual recipes. For POST requests, users are able to fill in fields which then get constructed as a recipe model in the controller (“addRecipe.js”). Authenticated users are able to do a PUT request using the ‘Update’ button found in the dashboard; Any fields that they have edited will be updated in the database to the corresponding recipe. Authenticated users are also able to do a DELETE request to the database through the trash icon found in the dashboard. 





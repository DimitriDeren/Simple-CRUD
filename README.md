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





# Database Design




import app from './server.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';

import RecipesDAO from './data_access_model/RecipesDAO.js';
import AccountDAO from './data_access_model/AccountDAO.js';
const __dirname = path.resolve();

// Load environment variables
dotenv.config();

// Connect to MongoDB client
const MongoClient = mongodb.MongoClient;

// Set Port number
const port = process.env.PORT || 8000;

// Connect to database
MongoClient.connect(
    process.env.APP_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    })
    .catch((err) => {
        console.log(err.stack);
        process.exit(1);
    })
    .then(async client => {
        //Connect to database
        await RecipesDAO.injectDB(client);
        await AccountDAO.injectDB(client);
        // Start web server
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
            console.log(__dirname);
        });
    });

// //Connect to Heroku
// if (port == null || port == "") {
//   port = 8000;
// }
// app.listen(port);


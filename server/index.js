import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

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
        // Start web server
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        });
    });


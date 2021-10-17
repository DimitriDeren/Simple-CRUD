import express from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import strategy from 'passport-local';

import RecipeRoutes from './api/recipes.route.js';
import AccountRoutes from './api/account.route.js';
import ClientRoutes from './api/client.route.js';

import Account from './models/account.js';

let LocalStrategy = strategy.Strategy;

const app = express();
const __dirname = path.resolve();

app.set('view engine', 'ejs');
app.set('views', './client');

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'nwen group project',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport config
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// Mongoose config
mongoose.connect(process.env.APP_DB_URI);

// Setup public route
app.use(express.static(path.join(__dirname, 'public')));

// Setup client route
app.use('/client', ClientRoutes);

// Setup recipe routes
app.use("/api/v1/recipes", RecipeRoutes);

// Setup account routes
app.use("/api/v1/accounts", AccountRoutes);

// Fallback route
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app;
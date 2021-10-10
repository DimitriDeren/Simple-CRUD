import express from 'express';
import cors from 'cors';

import RecipeRoutes from './api/recipes.route.js';
import AccountRoutes from './api/account.route.js';

const app = express();


app.set('view engine', 'ejs');
app.set('views', '../client');

app.use(cors());
app.use(express.json());

// Setup recipe routes
app.use("/api/v1/recipes", RecipeRoutes);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

// Setup account routes
app.use("/api/v1/accounts", AccountRoutes);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))



export default app;
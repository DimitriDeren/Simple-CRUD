import express from 'express';
import cors from 'cors';
import path from 'path';

import RecipeRoutes from './api/recipes.route.js';
import AccountRoutes from './api/account.route.js';
import ClientRoutes from './api/client.route.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', '../client');

app.use(cors());
app.use(express.json());

// Setup public route
app.use(express.static(path.join(__dirname, 'public')));

// Setup home route
app.use('/client', ClientRoutes);

// Setup recipe routes
app.use("/api/v1/recipes", RecipeRoutes);

// Setup account routes
app.use("/api/v1/accounts", AccountRoutes);

// Fallback route
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app;
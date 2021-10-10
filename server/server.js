import express from 'express';
import cors from 'cors';

import RecipeRoutes from './api/recipes.route.js';
import AccountRoutes from './api/account.route.js';

const app = express();

app.use(cors());
app.use(express.json());

// Setup recipe routes
app.use("/api/v1/recipes", RecipeRoutes);

// Setup account routes
app.use("/api/v1/accounts", AccountRoutes);

// Fallback route
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app;
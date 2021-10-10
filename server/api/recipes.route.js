import express from 'express';

import RecipesController from './recipes.controller.js';

const router = express.Router();

// TODO: add POST request to route
router
    .route("/")
    .get(RecipesController.apiGetRecipes)
    .post(RecipesController.apiPostRecipes);

export default router;
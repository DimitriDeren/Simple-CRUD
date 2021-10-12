import express from 'express';

import RecipesController from './recipes.controller.js';

const router = express.Router();

router
    .route("/")
    .get(RecipesController.apiGetRecipes)
    .post(RecipesController.apiPostRecipes)
    .put(RecipesController.apiUpdateRecipe)
    .delete(RecipesController.apiDeleteRecipe);

export default router;
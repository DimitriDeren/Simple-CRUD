import express from 'express';
import passport from 'passport';

import RecipesController from './recipes.controller.js';

const router = express.Router();

router
    .route("/")
    .get(RecipesController.apiGetRecipes)
    .post(RecipesController.apiPostRecipes)
    .put(RecipesController.apiUpdateRecipe)
    .delete(RecipesController.apiDeleteRecipe);

router
    .route("/id/:id")
    .get(RecipesController.apiGetRecipeById);

router
    .route("/recommend")
    .get(RecipesController.apiGetRecommendedRecipes);

export default router;
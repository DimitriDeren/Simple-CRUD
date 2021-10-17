import express from 'express';
import passport from 'passport';

import RecipesController from './recipes.controller.js';

const router = express.Router();

router
    .route("/")
    .get(RecipesController.apiGetRecipes)
    .post(passport.authenticate('local'), RecipesController.apiPostRecipes)
    .put(passport.authenticate('local'), RecipesController.apiUpdateRecipe)
    .delete(passport.authenticate('local'), RecipesController.apiDeleteRecipe);

router
    .route("/id/:id")
    .get(RecipesController.apiGetRecipeById);

router
    .route("/recommend")
    .get(RecipesController.apiGetRecommendedRecipes);

export default router;
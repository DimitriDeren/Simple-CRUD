import express from 'express';

import RecipesController from './recipes.controller.js';

const router = express.Router();

// TODO: add DELETE & UPDATE request to route
router
    .route("/")
    .get(RecipesController.apiGetRecipes)
    .post(RecipesController.apiPostRecipes)
    .delete(RecipesController.apiDeleteRecipes);


export default router;
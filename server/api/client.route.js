import express from 'express';

// import ClientController from './client.controller.js';



const router = express.Router();


router
    .route("/")
    .get(async (req, res) => {
    const { recipesList, totalNumRecipes } = await RecipesDAO.getRecipes({
        filters,
        page,
        recipesPerPage,
    });
      res.render("dashboard", {
        recipes: recipesList
      })
    });

router
    .route("/add_recipe")
    .get();

router
    .route("/login_page")
    .get();


export default router;
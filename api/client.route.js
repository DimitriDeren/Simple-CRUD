import express from 'express';

// import ClientController from './client.controller.js';
import RecipesDAO from '../data_access_model/RecipesDAO.js';


const router = express.Router();


router
    .route("/")
    .get(async (req, res) => {
    const { recipesList, totalNumRecipes } = await RecipesDAO.getRecipes({
    });
      //console.log(recipesList);
      res.render("dashboard", {
        recipes: recipesList
      })
    });
   
router
    .route("/guest_dashboard")
    .get(async (req, res) => {
        const { recipesList, totalNumRecipes } = await RecipesDAO.getRecipes({
        });
          res.render("guestDashboard", {
            recipes: recipesList
          })
        });

router
    .route("/account_page")
    .get((req, res) => 
        res.render("account", {}));

// router
//     .route("/guess_dashboard")
//     .get((req, res) => 
//         res.render("guess.dashboard", {}));

router
    .route("/add_recipe")
    .get((req, res) => 
        res.render("addRecipe", {}));

router
    .route("/login_page")
    .get((req, res) => 
        res.render("login", {}));

router
    .route("/registration_page")
    .get((req, res) => 
        res.render("registration", {}));

        router
    .route("/update_page")
    .get((req, res) => 
        res.render("updateRecipe", {}));

export default router;
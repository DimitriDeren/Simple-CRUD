import fetch from 'node-fetch';

import RecipesDAO from '../data_access_model/RecipesDAO.js';

export default class RecipesController {

    static async apiGetRecipes(req, res, next) {
        const recipesPerPage = req.query.recipesPerPage ? parseInt(req.query.recipesPerPage, 10) : 20;
        const page = req.query.page ? parseInt(req.query.page, 10) : 0;

        let filters = {};
        if (req.query.title) {
            filters.title = req.query.title;
        }

        const { recipesList, totalNumRecipes } = await RecipesDAO.getRecipes({
            filters,
            page,
            recipesPerPage,
        });

        let response = {
            recipes: recipesList,
            page: page,
            filters: filters,
            entries_per_page: recipesPerPage,
            total_results: totalNumRecipes,
        };
        res.json(response)
    }

    static async apiGetRecipeById(req, res, next) {
        try {
            let id = req.params.id || {};
            let recipe = await RecipesDAO.getRecipeById(id);

            if (!recipe) {
                res.status(404).json({ error: "Not found" });
                return;
            }

            res.json(recipe);
        } catch (e) {
            console.log(`api, ${e}`);
            res.status(500).json({ error: e });
        }
    }

    static async apiGetRecommendedRecipes(req, res, next) {
        try {
            let url = process.env.EDAMAM_API_URI;

            url = url.concat(`app_id=${process.env.EDAMAM_API_ID}`);
            url = url.concat(`&app_key=${process.env.EDAMAM_API_KEY}`);
            url = url.concat("&type=public");
            url = url.concat(`&q=${req.query.recipe_query}`);

            console.log(process.env.EDAMAM_API_URI);
            console.log(process.env.EDAMAM_API_ID);
            console.log(process.env.EDAMAM_API_KEY);
            console.log(url);

            // for (const [key, value] of Object.entries(queryParameters)) {
            //     url = url.concat(`&${key}=${value}`);
            // }

            const response = await fetch(url);
            const data = await response.json();

            const recipes = data.hits.map((item) => {
                return {
                    title: item.recipe.label,
                    ingredients: item.recipe.ingredientLines,
                    url: item.recipe.uri
                };
            })

            res.json(recipes);
        } catch (e) {
            console.log(`api, ${e}`);
            res.status(500).json({ error: e });
        }
    }

    // TODO: add authentication
    static async apiPostRecipes(req, res, next) {
        try {
            const title = req.body.title;
            const ingredients = req.body.ingredients;
            const directions = req.body.directions;

            const RecipeResponse = await RecipesDAO.addRecipe(
                title,
                ingredients,
                directions
            );

            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    // TODO: add authentication
    static async apiUpdateRecipe(req, res, next) {
        try {
            const recipeId = req.body.recipe_id;
            const title = req.body.title;
            const ingredients = req.body.ingredients;
            const directions = req.body.directions;

            const UpdateResponse = await RecipesDAO.updateRecipe(
                recipeId,
                title,
                ingredients,
                directions
            );

            let { error } = UpdateResponse;
            if (error) {
                res.status(400).json({ error });
            }

            if (UpdateResponse.modifiedCount === 0) {
                throw new Error(
                    "Unable to update review - cannot find recipe"
                )
            }

            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    // TODO: add authentication
    static async apiDeleteRecipe(req, res, next) {
        try {
            const recipeId = req.query.id;

            const DeleteResponse = await RecipesDAO.deleteRecipe(
                recipeId
            );

            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}
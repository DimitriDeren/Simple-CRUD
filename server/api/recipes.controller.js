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

            const RecipeResponse = await RecipesDAO.updateRecipe(
                recipeId,
                title,
                ingredients,
                directions
            );

            let { error } = RecipeResponse;
            if (error) {
                res.status(400).json({ error });
            }

            if (RecipeResponse.modifiedCount === 0) {
                throw new Error(
                    "Unable to update review - user may not be original poster"
                )
            }

            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiDeleteRecipe(req, res, next) {
        try {
            
        }
    }
}
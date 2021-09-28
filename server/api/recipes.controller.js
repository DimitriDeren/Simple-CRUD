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

    static async apiPostRecipes(req, res, next) {
        try {
            const title = req.body.title;
            const ingredients = req.body.ingredients;
            const directions = req.body.directions;
            const image = req.body.image;

            const RecipeResponse = await RecipesDAO.addRecipe(
                title,
                ingredients,
                directions,
                image
            );

            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}
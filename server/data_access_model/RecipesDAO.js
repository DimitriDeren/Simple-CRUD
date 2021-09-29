// Reference to application database
let recipes;

/**
 * Recipes Data Access Model
 */
export default class RecipesDAO {

    /**
     * Establish connection to database
     * @param {*} conn - database connection
     * @returns
     */
    static async injectDB(conn) {
        if (recipes) {
            return;
        }

        try {
            recipes = await conn.db(process.env.RECIPES_NS).collection("recipes");
        } catch (e) {
            console.error(`Unable to establish a collection handle in RecipesDAO: ${e}`);
        }
    }

    static async getRecipes({
        filters = null,
        page = 0,
        recipesPerPage = 20,
    } = {}) {
        let query;
        if (filters) {
            if ("title" in filters) {
                query = { $text: { $search: filters["title"] } };
            }
        }

        let cursor;
        try {
            cursor = await recipes.find(query);
        } catch (e) {
            console.error(`Unable to find command, ${e}`);
            return {
                recipesList: [],
                totalNumRecipes: 0
            }
        }

        const displayCursor = cursor.limit(recipesPerPage).skip(recipesPerPage * page);

        try {
            const recipesList = await displayCursor.toArray();
            const totalNumRecipes = await recipes.countDocuments(query);

            return { recipesList, totalNumRecipes };
        } catch (e) {
            console.error(`Unable to convert cursor to array or problem counting documents, ${e}`);
            return { recipesList: [], totalNumRecipes: 0 };
        }
    }

    // TODO: create addRecipe function
    static async addRecipe(title, ingredients, directions, image) {
        try {
            const recipeDoc = {
                title: title,
                ingredients: ingredients,
                directions: directions,
                image: image
            }

            return await recipes.insertOne(recipeDoc);
        } catch (e) {
            console.error(`Unable to post recipe: ${e}`);
        }
    }

}
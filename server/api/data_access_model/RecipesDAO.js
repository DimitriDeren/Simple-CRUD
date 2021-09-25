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
            console.error(`Unable to establish a collection handle in restaurantsDAO: ${e}`);
        }
    }

    static async getRecipes({
        filters 
    }) {

    }

}
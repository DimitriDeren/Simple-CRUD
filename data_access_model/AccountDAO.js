// Reference to application database
let accounts;

/**
 * Accounts Data Access Model
 */
export default class AccountDAO {

    /**
     * Establish connection to database
     * @param {*} conn - database connection
     * @returns
     */
    static async injectDB(conn) {
        if (accounts) {
            return;
        }

        try {
            accounts = await conn.db(process.env.RECIPES_NS).collection("users");
        } catch (e) {
            console.error(`Unable to establish a collection handle in AccountsDAO: ${e}`);
        }
    }

    static async getLoginToken({
        filters = null,
    } = {}) {
        let query;
        if (filters) {
            if ("userName" in filters) {
                query = { "userName": { $eq: filters["userName"] } };
            }
        }

        let cursor;

        try {
            cursor = await accounts.find(query);
        } catch (e) {
            console.error(`Unable to find command, ${e}`);
            return {
                token: 0,
            }
        }

        try {
            const token = await cursor.toArray();
            return { token };
        } catch (e) {
            console.error(`Unable to convert cursor to token, ${e}`);
            return { token: 0 };
        }
    }

    // TODO: create new user function
    static async addNewUser(userName, passHash) {
        try {
            const newUser = {
                userName: userName,
                passHash: passHash,
            }
            return await accounts.insertOne(newUser);
        } catch (e) {
            console.error(`Unable to create/add new user: ${e}`);
        }
    }

}
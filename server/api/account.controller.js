import AccountDAO from '../data_access_model/AccountDAO.js';

export default class AccountController {

    static async apiGetLoginToken(req, res, next) {

        let filters = {};
        if (req.query.userName) {
            filters.userName = req.query.userName;
        }

        const loginToken = await AccountDAO.getLoginToken({
            filters,
        });

        let response = {
            token: loginToken,
        };
        res.json(response)
    }

    static async apiPostNewUser(req, res, next) {
        try {
            const userName = req.body.userName;
            const passHash = req.body.passHash;

            const NewUserResponse = await RecipesDAO.addRecipe(
                userName,
                passHash,
            );

            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}
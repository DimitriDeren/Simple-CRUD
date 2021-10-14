import AccountDAO from '../data_access_model/AccountDAO.js';

export default class AccountController {

    static async apiGetLoginToken(req, res, next) {
        let localToken = req.query.passHash;

        let filters = {};
        if (req.query.userName) {
            filters.userName = req.query.userName;
        }
        // TODO: need to check if user doesn't exist or password is incorrect
        const loginToken = await AccountDAO.getLoginToken({
            filters,
            localToken
        });

        console.log(loginToken);

        // let response = {
        //     Authenticated: false,
        // };
        // if (loginToken.token[0].passHash == localToken) {
        //     response = {
        //         Authenticated: true,
        //     };
        // }

        
        res.json(loginToken)
    }

    static async apiPostNewUser(req, res, next) {
        try {
            const userName = req.body.userName;
            const passHash = req.body.passHash;

            // if username and password fields are invalid
            if (userName == "" || password == "" || password.length < 5) {
                res.status(400).json({ error: 'Invalid username or password' });
                return;
            } else {
                const NewUserResponse = await AccountDAO.addNewUser(
                    userName,
                    passHash,
                );
            }
            //TODO: add condition to check if username already exists
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}
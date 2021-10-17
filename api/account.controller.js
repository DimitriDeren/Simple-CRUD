import AccountDAO from '../data_access_model/AccountDAO.js';
import CryptoJS from 'crypto-js';

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
            const password = req.body.password;

            var userHasInvalidChar = userHasSpec(userName);

            // if username and password fields are invalid
            if (userName == "" || password == "" || password.length < 5 || userHasInvalidChar || password.includes(" ")) {
                res.status(400).json({ error: 'Invalid registration details' });
                return;
            } else {

                let passHash = CryptoJS.SHA256(password).toString();
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

/* checks if the username contains special characters */
function userHasSpec(username) {
    var specChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specChars.test(username)) {
        console.log("true, invalid");
        return true;
    } else {
        console.log("false, valid");
        return false;
    }
}
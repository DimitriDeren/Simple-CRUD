import express from 'express';
import passport from 'passport';

import AccountController from './account.controller.js';

const router = express.Router();

router
    .route("/")
    .get(AccountController.apiGetLoginToken)
    .post(AccountController.apiPostNewUser);

// Passport routes

router.post(
    "/register", 
    AccountController.apiRegister
);

router.post(
    "/login", 
    passport.authenticate('local'), 
    AccountController.apiLogin
);

router.get(
    "/logout",
    AccountController.apiLogout
)


export default router;
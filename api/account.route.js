import express from 'express';

import AccountController from './account.controller.js';

const router = express.Router();

router
    .route("/")
    .get(AccountController.apiGetLoginToken)
    .post(AccountController.apiPostNewUser);


export default router;
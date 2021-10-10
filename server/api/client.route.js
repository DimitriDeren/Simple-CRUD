import express from 'express';

import ClientController from './client.controller.js';

const router = express.Router();

// TODO: add POST request to route
router
    .route("/")
    .get((req, res) => {
      res.render()
    });

router
    .route("/add_recipe")
    .get();

router
    .route("/login_page")
    .get();


export default router;
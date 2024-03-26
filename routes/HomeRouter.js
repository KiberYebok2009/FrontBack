const express = require("express");
const homeController = require("../controllers/home.js");
const homeRouter = express.Router();

homeRouter.use("/kak", homeController.kak);
homeRouter.use("/", homeController.index);

module.exports = homeRouter;
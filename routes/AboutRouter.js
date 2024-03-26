const express = require("express");

const aboutController = require("../controllers/about.js");
const aboutRouter = express.Router();

aboutRouter.use("/postitem", aboutController.postItem);
aboutRouter.use("/add", aboutController.addItems);
aboutRouter.use("/", aboutController.getItems);

module.exports = aboutRouter;
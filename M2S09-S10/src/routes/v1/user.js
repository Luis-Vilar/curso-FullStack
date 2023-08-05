const { index, show, store } = require("../../controllers/user");
const { Router } = require("express");
const { checkToken } = require("../../middlewares/index");
const { loginUser } = require("../../controllers/user");
const { hasPermission } = require("../../middlewares/index");

class userRouter {
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get("/users/index", checkToken, hasPermission(['index']) ,index);
    this.router.get("/users/show/:id", checkToken,hasPermission(['show']), show);
    this.router.post("/users/store", store);
    this.router.post("/users/login", loginUser);
  }
}

module.exports = new userRouter().router;

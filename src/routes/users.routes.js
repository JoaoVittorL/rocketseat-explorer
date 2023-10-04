const { Router } = require("express");
const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();
const usersController = new UsersController();

function myMiddleware(req, res, next) {
  if (!req.body.isAdmin) {
    return res.json({ message: "Sem autorização!" });
  }
  next();
}

usersRoutes.post("/", myMiddleware, usersController.create);

module.exports = usersRoutes;

const { Router } = require("express");

const usersRoutes = Router();

usersRoutes.post("/", (req, res) => {
  const { name, idade, password } = req.body;
  res.json({ name, idade, password });
});

module.exports = usersRoutes;

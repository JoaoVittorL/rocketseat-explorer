const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

const { response } = require("express");

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body;

    const database = await sqliteConnection();
    const checkUserExists = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUserExists) {
      throw new AppError("Este email já está em uso.");
    }

    const hashedPassord = await hash(password, 8);

    await database.run(
      "INSERT INTO users (name, email,password) VALUES (?,?,?)",
      [name, email, hashedPassord]
    );

    return response.status(201).json();
  }
}

module.exports = UsersController;

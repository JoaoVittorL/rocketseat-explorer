class UsersController {
  create(req, res) {
    const { name, idade, password, isAdmin } = req.body;
    res.status(201).json({ name, idade, password, isAdmin });
  }
  // Cada controller pode ter no máximo 5 metodos, caso tenha mais você deve criar outro controller
  //   index - GET para listar vários registros
  //   show - GET para exibir um registro especifico
  //   create - POST para criar um registro
  //   update - PUT para atualziar um registro
  //   delete - DELETE para remover um registro
}

module.exports = UsersController;

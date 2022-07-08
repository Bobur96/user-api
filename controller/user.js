const UserService = require("../service/user");

class UserController {
  async createUser(req, res) {
    try {
      const id = await UserService.createUser(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
      res.status(500).json("something went wrong");
    }
  }

  async getUsers(req, res) {
    try {
      const users = await UserService.getUsers();
      res.status(200).json(users);
    } catch (err) {
      console.error(err);
    }
  }

  async getUser(req, res) {
    try {
      const user = await UserService.getUser(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
    }
  }

  async updateUser(req, res) {
    try {
      const id = await UserService.updateUser(req.params.id, req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }

  async deleteUser(req, res) {
    try {
      const id = await UserService.deleteUser(req.params.id);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}
module.exports = new UserController();

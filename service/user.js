const UserDAO = require("../dao/user");

class UserService {
  createUser(userDto) {
    const {
      first_name,
      last_name,
      job_title,
      phone_number,
      city,
      country,
      email,
      company_name,
      descriptions,
    } = userDto;
    return UserDAO.createUser(
      first_name,
      last_name,
      job_title,
      phone_number,
      city,
      country,
      email,
      company_name,
      descriptions
    );
  }

  getUsers() {
    return UserDAO.getUsers();
  }

  getUser(id) {
    return UserDAO.getUser(id);
  }

  updateUser(id, users) {
    const {
      first_name,
      last_name,
      job_title,
      phone_number,
      city,
      country,
      email,
      company_name,
      descriptions,
    } = users;
    return UserDAO.updateUser(
      id,
      first_name,
      last_name,
      job_title,
      phone_number,
      city,
      country,
      email,
      company_name,
      descriptions
    );
  }

  deleteUser(id) {
    return UserDAO.deleteUser(id);
  }
}

module.exports = new UserService();

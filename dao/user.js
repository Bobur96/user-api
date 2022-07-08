const db = require("../db/db");

class UserDAO {
  async createUser(
    first_name,
    last_name,
    job_title,
    phone_number,
    city,
    country,
    email,
    company_name,
    descriptions
  ) {
    const [id] = await db("user")
      .insert({
        first_name,
        last_name,
        job_title,
        phone_number,
        city,
        country,
        email,
        company_name,
        descriptions,
      })
      .returning("id");

    return id;
  }

  async getUsers() {
    const users = await db
      .select(
        "id",
        "first_name",
        "last_name",
        "job_title",
        "phone_number",
        "city",
        "country",
        "email",
        "company_name",
        "descriptions"
      )
      .from("user");
    return users;
  }

  async getUser(id) {
    const user = await db("user").where("id", id).returning("id");
    return user;
  }

  async updateUser(
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
  ) {
    const [iD] = await db("user")
      .where("id", id)
      .update({
        first_name: first_name,
        last_name: last_name,
        job_title: job_title,
        phone_number: phone_number,
        city: city,
        country: country,
        email: email,
        company_name: company_name,
        descriptions: descriptions,
      })
      .returning("id");

    return iD;
  }

  async deleteUser(id) {
    const [iD] = await db("user").where("id", id).delete().returning("id");

    return iD;
  }
}

module.exports = new UserDAO();

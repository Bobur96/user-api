/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("contact").del();
  await knex("contact").insert([
    {
      id: 1,
      first_name: "Bobur",
      last_name: "Usmonkhujaev",
      job_title: "Developer",
      phone_number: "+998990011011",
      city: "Tashkent",
      country: "UZB",
      email: "aa@gmail.com",
      company_name: "comp",
      descriptions: "desc",
    },
    {
      id: 2,
      first_name: "Javod",
      last_name: "Mutalliboev",
      job_title: "Developer",
      phone_number: "+998990011011",
      city: "Tashkent",
      country: "UZB",
      email: "aa@gmail.com",
      company_name: "comp",
      descriptions: "desc",
    },
  ]);
};

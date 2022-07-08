/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("job_title").notNullable();
    table.string("phone_number").notNullable();
    table.string("city").notNullable();
    table.string("country").notNullable();
    table.string("email").notNullable();
    table.string("company_name").notNullable();
    table.string("descriptions").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};

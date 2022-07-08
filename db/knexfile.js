// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "contact",
      user: "postgres",
      password: "0906",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds/production",
    },
  },
};

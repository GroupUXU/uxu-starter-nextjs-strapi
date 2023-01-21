<<<<<<< HEAD
module.exports = ({ env }) => ({
  connection: {
    client: env.DATABASE_CLIENT,
    connection: {
      host: env.DATABASE_HOST,
      port: env.DATABASE_PORT,
      database: env.DATABASE_NAME,
      user: env.DATABASE_USERNAME,
      password: env.DATABASE_PASSWORD,
=======
const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
>>>>>>> stage
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});

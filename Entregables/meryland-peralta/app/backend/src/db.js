const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "salonbook",
  user: "salonbook",
  password: "salonbook_password",
});

module.exports = pool;
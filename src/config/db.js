const { Sequelize } = require("sequelize");
require("dotenv").config();

// Check if DATABASE_URL exists (Render production)
const sequelize = process.env.DATABASE_URL 
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
      logging: false
    })
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASS,
      {
        host: "localhost",
        dialect: "postgres",
        logging: false
      }
    );

module.exports = sequelize;

const app = require("./app");
const sequelize = require("./config/db");
const User = require("../database/models/user"); // correct path from src/container.js

const PORT = process.env.PORT || 4000;

sequelize.sync({ alter: true }) // create tables if not exist
  .then(() => {
    console.log("Database & tables created!");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error("Error creating tables:", err));

const app = require("./app");
const sequelize = require("./config/db");
const User = require("../database/models/user");

const PORT = process.env.PORT || 4000;

// FIRST: Server start kara (Renderला port detect hoil)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// THEN: Database sync kara (background madhye)
sequelize.sync({ alter: true })
  .then(() => {
    console.log("✅ Database & tables created!");
  })
  .catch(err => {
    console.error("❌ Error creating tables:", err);
    // Server chalu rahil even if DB fails
  });

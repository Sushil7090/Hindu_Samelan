const { DataTypes } = require("sequelize");
const sequelize = require("../../src/config/db");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  fullName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  phone: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: "user" },
  isPasswordChanged: { type: DataTypes.BOOLEAN, defaultValue: false },
}, {
  tableName: "users",
  freezeTableName: true,
});

module.exports = User;

const bcrypt = require("bcrypt");
const User = require("../../database/models/user");

// ⭐ Admin → Create User (Signup for User)
exports.createUserByAdmin = async (req, res) => {
  try {
    const { fullName, email, phone, password } = req.body;

    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      phone,
      password: hashedPass,
      role: "user",
    });

    return res.status(201).json({
      message: "User created successfully by Admin",
      user,
    });

  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

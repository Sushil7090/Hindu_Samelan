const express = require("express");
const { createUserByAdmin } = require("../controllers/adminController");
const router = express.Router();

router.post("/create-user", createUserByAdmin);

module.exports = router;

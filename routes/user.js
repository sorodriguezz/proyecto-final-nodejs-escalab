const express = require("express");
const router = express.Router();

const { createUser, listUsers } = require("../controllers/user");

router.post("/user/", createUser);
router.get("/users/", listUsers);

module.exports = router;

const express = require("express");
const router = express.Router();

const authJwt = require("../middlewares/authJwt");
const { createUser, listUsers } = require("../controllers/user");

router.post("/user/", [authJwt.verifyToken, authJwt.isAdmin], createUser);
router.get("/users/", [authJwt.verifyToken, authJwt.isModeratorAdmin], listUsers);

module.exports = router;

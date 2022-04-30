const express = require("express");
const router = express.Router();

const { signin, signup, decodeToken } = require("../controllers/auth");

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/verify', decodeToken);

module.exports = router;

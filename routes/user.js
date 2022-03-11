const express = require("express");
const router = express.Router();

const { create, list, read, update, removeSoft } = require("../controllers/user");

router.post("/user", create);
router.get("/users", list);
router.get("/user/:slug", read);
router.put("/user/:slug", update);
router.patch("/user/:slug", removeSoft);

module.exports = router;

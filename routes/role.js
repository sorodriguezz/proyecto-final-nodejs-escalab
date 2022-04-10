const express = require("express");
const router = express.Router();

const { createRole, listRoles, searchRole, removeSoftRole } = require("../controllers/role");

router.post("/role/",  createRole);
router.get("/roles/",  listRoles);
router.get("/role/:slug",  searchRole);
router.patch("/role/:slug",  removeSoftRole);

module.exports = router;
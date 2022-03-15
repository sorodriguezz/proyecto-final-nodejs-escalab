const express = require("express");
const router = express.Router();

const { create, listAll, read, update, removeSoft } = require("../controllers/song");

router.post("/song", create);
router.get("/songs", listAll);
router.get("/song/:slug", read);
router.put("/song/:slug", update);
router.patch("/song/:slug", removeSoft);

module.exports = router;
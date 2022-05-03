const express = require("express");
const router = express.Router();

const { createAlbum, listAlbum } = require("../controllers/album");

router.post("/album/", createAlbum);
router.get("/albums", listAlbum);

module.exports = router;
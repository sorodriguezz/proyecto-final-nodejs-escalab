const express = require("express");
const router = express.Router();

const { createArtist, listArtists } = require("../controllers/artist");

router.post("/artist/", createArtist);
router.get("/artists", listArtists);

module.exports = router;
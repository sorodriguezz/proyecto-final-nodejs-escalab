const express = require("express");
const router = express.Router();

const authJwt = require("../middlewares/authJwt");
const { create, read, update, remove, removeSoft, songsCount, listPaginator, listAll, listByCount} = require("../controllers/song");

router.post("/song", create);
router.get("/song/:slug", read);
router.put("/song/:slug", update);
router.delete("/song/:slug", [authJwt.verifyToken, authJwt.isModeratorOrAdmin], remove);
router.patch("/song/:slug", removeSoft);
router.get("/songs/total", songsCount);
router.post("/songs", listPaginator);
router.get("/songs", listAll);
router.get("/songs/:count", listByCount);

module.exports = router;
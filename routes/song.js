const express = require("express");
const router = express.Router();

const authJwt = require("../middlewares/authJwt");
const { create, read, update, removeSoft, remove, songsCount, listPaginator, listAll, listByCount} = require("../controllers/song");

/**
 * @swagger
 * /song:
 *   post:
 *     summary: Create Songs
 *     tags: [Song]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Song'
 *     responses:
 *       201:
 *         description: Song created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Song'
 *       400:
 *         description: Bad Request
 * 
 */
router.post("/song", create);

/**
 * @swagger
 * /song/{slug}:
 *   get:
 *     tags: [Song]
 *     summary: Find song by slug
 *     description: Returns a song
 *     parameters:
 *     - name: "slug"
 *       in: path
 *       description: "Song Slug"
 *       required: true
 *       type: string
 *     responses:
 *       200:
 *         description: Songs
 *         content:
 *           application/json:
 *             schema:
 *               $ref: #/components/schemas/Song'
 *       400:
 *         description: Bad Request
 * 
 * 
 */
router.get("/song/:slug", read);

/**
 * @swagger
 * /song/{slug}:
 *   put:
 *     tags: [Song]
 *     summary: Find song and update by slug
 *     description: Update song by slug
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Song'
 *     parameters:
 *     - name: "slug"
 *       in: path
 *       description: "Song Slug"
 *       required: true
 *       type: string
 *     responses:
 *       200:
 *         description: Song updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Song'
 *       400:
 *         description: Bad Request
 * 
 */
router.put("/song/:slug", update);

/**
 * @swagger
 * /song/{slug}:
 *   patch:
 *     tags: [Song]
 *     summary: Find song and soft delete by slug
 *     description: Soft delete song by slug
 *     parameters:
 *     - name: "slug"
 *       in: path
 *       description: "Song Slug"
 *       required: true
 *       type: string
 *     responses:
 *       200:
 *         description: Song soft deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Song'
 *       400:
 *         description: Bad Request
 * 
 */
router.patch("/song/:slug", removeSoft);

router.delete("/song/:slug", [authJwt.verifyToken, authJwt.isModeratorOrAdmin], remove);
router.get("/songs/total", songsCount);
router.post("/songs", listPaginator);
router.get("/songs", listAll);
router.get("/songs/:count", listByCount);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Song:
 *       type: object
 *       required:
 *         - name
 *         - author
 *         - duration
 *         - category
 *       properties:
 *         name:
 *           type: String
 *           trim: true
 *           required: true
 *         author:
 *           type: String
 *           required: true
 *         duration:
 *           type: Number
 *           required: true
 *         category:
 *           type: String
 *           required: true
 *         slug:
 *           type: String
 *           unique: true
 *           lowercase: true
 *           index: true
 *           trim: true
 *         status:
 *           type: String
 *           default: "active"
 *           enum: ["active", "inactive"]
 *       example:
 *         name: "Numb"
 *         author: "Linkin Park"
 *         duration: 187
 *         category: "Rock"
 *         album: "Hybrid Theory"
 * 
 */
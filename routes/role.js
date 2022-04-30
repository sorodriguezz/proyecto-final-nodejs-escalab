const express = require("express");
const router = express.Router();

const authJwt = require("../middlewares/authJwt");
const { createRole, listRoles, searchRole, removeSoftRole } = require("../controllers/role");

/**
 * @swagger
 * /role:
 *   post:
 *     summary: Create Role
 *     tags: [Role]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       201:
 *         description: Role created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       400:
 *         description: Bad Request
 * 
 */
router.post("/role/", [authJwt.verifyToken, authJwt.isAdmin], createRole);

/**
 * @swagger
 * /roles:
 *   get:
 *     tags: [Role]
 *     summary: List all Roles
 *     description: Returns a list of Roles
 *     responses:
 *       200:
 *         description: Roles
 *         content:
 *           application/json:
 *             schema:
 *               $ref: #/components/schemas/Roles'
 *       400:
 *         description: Bad Request
 * 
 * 
 */
router.get("/roles/", [authJwt.verifyToken, authJwt.isAdmin], listRoles);

/**
 * @swagger
 * /role/{slug}:
 *   put:
 *     tags: [Role]
 *     summary: Find role and update by slug
 *     description: Update role by slug
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     parameters:
 *     - name: "slug"
 *       in: path
 *       description: "Role Slug"
 *       required: true
 *       type: string
 *     responses:
 *       200:
 *         description: Role updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       400:
 *         description: Bad Request
 * 
 */
router.get("/role/:slug", [authJwt.verifyToken, authJwt.isAdmin], searchRole);


/**
 * @swagger
 * /role/{slug}:
 *   patch:
 *     tags: [Role]
 *     summary: Find role and soft delete by slug
 *     description: Soft delete role by slug
 *     parameters:
 *     - name: "slug"
 *       in: path
 *       description: "Role Slug"
 *       required: true
 *       type: string
 *     responses:
 *       200:
 *         description: Role soft deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       400:
 *         description: Bad Request
 * 
 */
router.patch("/role/:slug", [authJwt.verifyToken, authJwt.isAdmin], removeSoftRole);

module.exports = router;
/**
 * @swagger
 * components:
 *   schemas:
 *     Role:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: String
 *         role:
 *           type: String
 *           default: "user"
 *           enum: ["user", "admin", "moderator"]
 *         status:
 *           type: String
 *           default: "active"
 *           enum: ["active", "inactive"]
 *         slug:
 *           type: String
 *           lowercase: true
 *           unique: true
 *           index: true
 *           trim: true
 *       example:
 *         name: "SuperAdmin"
 * 
 */
const express = require("express");
const UserController = require("../controller/user");

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *          -first_name
 *          -last_name
 *      properties:
 *          id:
 *              type: string
 *              description: The auto-generated id of the user
 *          first_name:
 *              type: string
 *              description: User firstname
 *          last_name:
 *              type: string
 *              description: User lastname
 *          job_title:
 *              type: string
 *              description: User job
 *          phone_number:
 *              type: string
 *              description: User number
 *          city:
 *              type: string
 *              description: city
 *          country:
 *              type: string
 *              description: country
 *          email:
 *              type: string
 *              description: User email
 *          company_name:
 *              type: string
 *              description: company name
 *          descriptions:
 *              type: string
 *              description: descriptions
 *      example:
 *          first_name: Bobur
 *          last_name: Usmonkhujaev
 *          job_title: developer
 *          phone_number: +998990011496
 *          city: Tashkent
 *          country: Uzbekistan
 *          email: email@gmail.com
 *          company_name: Transoxiania
 *          descriptions: descriptions
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The user API
 */

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *      summary: Returns all users
 *      tags: [Users]
 *      responses:
 *        200:
 *            description: The list of users
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  items:
 *                      $ref: '#components/schemas/User'
 */
router.get("/api/v1/users", UserController.getUsers);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *      summary: Returns all users
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The user id
 *      responses:
 *        200:
 *            description: The user description by id
 *            contens:
 *              application/json:
 *                schema:
 *                  $ref: '#components/schemas/User'
 *        404:
 *            description: The user was not found
 */
router.get("/api/v1/users/:id", UserController.getUser);

/**
 * @swagger
 * /api/v1/user:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/User'
 *       500:
 *         description: Some server error
 */
router.post("/api/v1/user", UserController.createUser);

/**
 * @swagger
 * /api/v1/users/{id}:
 *  put:
 *    summary: Update the user by the id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#components/schemas/User'
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/User'
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some error happened
 */
router.put("/api/v1/users/:id", UserController.updateUser);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user id
 *
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */
router.delete("/api/v1/users/:id", UserController.deleteUser);

module.exports = router;

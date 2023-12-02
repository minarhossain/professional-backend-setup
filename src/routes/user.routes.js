import express from 'express';
import { registerUser } from '../controllers/user.controller.js';

const router = express.Router();

// http://localhost:8080/api/v1/users/register
router.route("/register").post(registerUser)

export default router;
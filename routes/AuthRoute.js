import express from 'express';
import { applicationUser } from '../controllers/AuthController.js';

const router = express.Router()

router.post('/application', applicationUser)
// router.post('/login', loginUser)

export default router;
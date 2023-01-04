import express from 'express';
import { questionsHome } from '../controllers/QuestionsController.js';

const router = express.Router()

router.post('/home', questionsHome)
// router.post('/login', loginUser)

export default router;
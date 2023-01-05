import express from 'express';
import { 
    questionsHome, 
    questionsHomeAll 
} from '../controllers/QuestionsController.js';

const router = express.Router()

router.post('/home', questionsHome);
router.get('/home', questionsHomeAll);
// router.post('/login', loginUser)

export default router;
import express from 'express';
import { 
    questionsHome, 
    questionsHomeAll,
    updateQuestionsHome 
} from '../controllers/QuestionsController.js';

const router = express.Router()

router.post('/home', questionsHome);
router.get('/home', questionsHomeAll);
router.put('/home/:id', updateQuestionsHome);
// router.post('/login', loginUser)

export default router;
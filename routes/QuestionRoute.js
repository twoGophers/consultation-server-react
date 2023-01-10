import express from 'express';
import { 
    questionsHome, 
    questionsHomeAll,
    updateQuestionsHome,
    deleteQuestionsHome 
} from '../controllers/QuestionsController.js';

const router = express.Router()

router.post('/home', questionsHome);
router.get('/home', questionsHomeAll);
router.patch('/home/:id', updateQuestionsHome);
router.delete('/home/:id', deleteQuestionsHome);
// router.post('/login', loginUser)

export default router;
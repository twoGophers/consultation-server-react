
import QuestionHome from '../models/questionsHomeModel.js';

//Register
export const questionsHome = async (req, res) => {
  try {
    const doc = new QuestionHome ({
        panel: req.body.panel,
        title: req.body.title,
        question: req.body.question,
    });

    const question_home = await doc.save();

    res.status(200).json(question_home);
  } catch(err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось отправить',
    })
  };
};

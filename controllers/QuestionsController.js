import QuestionHome from '../models/questionsHomeModel.js';

//Register
export const questionsHome = async (req, res) => {
  try {
    const panel = new QuestionHome({});

    const doc = new QuestionHome ({
        panel: panel._id,
        title: req.body.title,
        question: req.body.question,
    });
    const question_home = await doc.save();

    console.log(doc._id);

    res.status(200).json(question_home);
  } catch(err) {
    res.status(500 || 404).json({
      message: 'Не удалось отправить, questionsHome',
    })
  };
};

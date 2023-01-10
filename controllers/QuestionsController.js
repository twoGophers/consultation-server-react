import QuestionHome from '../models/questionsHomeModel.js';

//Register
export const questionsHome = async (req, res) => {
  try {
    const doc = new QuestionHome ({
        panel: req.body.id,
        title: req.body.title,
        question: req.body.question,
    });
    const question_home = await doc.save();

    res.status(200).json(question_home);
  } catch(err) {
    res.status(500 || 404).json({
      message: 'Не удалось отправить, questionsHome',
    })
  };
};


//Get question home
export const questionsHomeAll = async (req, res) => {
  try {
    const questions = await QuestionHome.find();
    res.status(200).json(questions);
  } catch(err) {
    res.status(500 || 404).json({
      message: 'Не удалось отправить, questionsHome',
    })
  };
};

//Update question home
export const updateQuestionsHome = async (req, res) => {
  const id = req.params.id;

  try {
    const doc = await QuestionHome.findById(id);
      await doc.updateOne({ $set: req.body });
      res.status(200).json("Update");
  } catch (error) {
    console.log(error);
  }
};

//Delete question home
export const deleteQuestionsHome = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await QuestionHome.findById(id);
      await doc.deleteOne();
      res.status(200).json("Delete");
  } catch (error) {
    console.log(error);
  }
};
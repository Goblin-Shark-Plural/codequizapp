const Question = require('../models/questionModel');
const mongoose = require('mongoose');
const MONGO_URI =
  'mongodb+srv://goblinsharkcs:rNTQQxMTktYFkS9N@cluster0.omba2jg.mongodb.net/';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Questions',
  })
  .then(() => console.log('Connected to Mongo DB'))
  .catch((err) => console.log(err));

const questionsController = {};

questionsController.shuffleQuestions = async (req, res, next) => {
  try {
    const arr = await Question.find({});
    const random = Math.floor(Math.random() * 50);
    for (let i = 0; i < random; i++) {
      const first = Math.floor(Math.random() * arr.length);
      const second = Math.floor(Math.random() * arr.length);
      const temp = arr[first];
      arr[first] = arr[second];
      arr[second] = temp;
    }

    res.locals.questions = arr;
    return next();
  } catch {
    return next({
      message: { err: 'Error occurred in questionscontroller.getQuestions' },
    });
  }
};

questionsController.addQuestions = (req, res, next) => {
  const { question, a, b, c, d, answer } = req.body;
  Question.create({ question, a, b, c, d, answer });
  return next();
};

module.exports = questionsController;

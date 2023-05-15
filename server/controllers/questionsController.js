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

const mongoose = require('mongoose');

const questionsController = require('./controllers/questionsController.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/questions', questionsController.shuffleQuestions, (req, res) => {
  return res.status(200).json(res.locals.questions);
});

app.post('/questions/add', questionsController.addQuestions, (req, res) => {
  return res.status(200);
});

app.listen(3001);

module.exports = app;

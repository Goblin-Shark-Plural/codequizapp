const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, 'public/index.html'));
});

// app.get('/login', userController.createUser, (req, res) => {
//   console.log('res from session:', res.cookies);
// });

// app.get('/questions', (req, res) => {
//   console.log('questions');
// });

console.log('server is running fast');

// app.listen(3000);

module.exports = app;

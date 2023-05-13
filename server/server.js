const express = require("express");
const path = require('path');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, 'public/index.html'));
});


console.log("server is running fast");

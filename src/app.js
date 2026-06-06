const express = require('express');
const validationRules = require('./middlewares/validation.middleware');


const app = express();
app.use(express.json());

app.post('/register', validationRules.reqisterUserValidationRules, (req, res) => {
  const { username, password } = req.body;

  res.status(201).json({ message: `User ${username} registered successfully!` });
});


module.exports = app;
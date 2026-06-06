const { body, validationRequest } = require('express-validator');


async function validateResult(req, res, next) {
  const errors = validationRequest(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

const reqisteUserValidationRules = [
  body('username')
  .isString()
  .withMessage('Username must be a string')
  .isLength({ min: 3, max: 20 })
  .withMessage('Username must be between 3 and 20 characters long'),


  body('password')
  .isLength({ min: 6, max: 100 })
  .withMessage('Password must be between 6 and 100 characters long')
  .isString()
  .withMessage('Password must be a string'),

  validationResult
]

module.exports = {
  reqisteUserValidationRules
}
const joi = require('joi')

const login =  joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
    expired : joi.number().required()
  });

  const register =  joi.object({
    nama : joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
  });


module.exports = {
login,
register
}
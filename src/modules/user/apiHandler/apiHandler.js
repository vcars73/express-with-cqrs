const commandHandler = require('../repositories/command/commandHandler')
const comRes = require('../../../config/utils/commonResponse')
const queryHandler = require('../repositories/queries/queryHandler')
const commandModel = require('../repositories/command/commandModel')

const register = async (req, res) => {

  const { body } = req;
  const payload =  body

const validation = commandModel.register.validate(payload)

const result =await commandHandler.register(payload);

if (validation.error) {
  const notValid = comRes.error(409,validation.error.details[0].message)
  return comRes.response(res,notValid);
}

  return comRes.response(res,result);

};

const getAlUser = async (req, res) => {

const result =await queryHandler.getAllUser();

  return comRes.response(res,result)

};


const login = async (req, res) => {
  const payload =  req.body


const validation = commandModel.login.validate(payload)


if (validation.error) {
  const notValid = comRes.error(409,validation.error.details[0].message)
  return comRes.response(res,notValid);
}

const result =await commandHandler.login(payload);

  return comRes.response(res,result);

};

const refreshToken = async (req, res) => {
  const payload =  req.body


const validation = commandModel.refreshToken.validate(payload)


if (validation.error) {
  const notValid = comRes.error(409,validation.error.details[0].message)
  return comRes.response(res,notValid);
}

const result =await commandHandler.refreshToken(payload);

  return comRes.response(res,result);

};


module.exports = {
    register,
    getAlUser,
    login,
    refreshToken
};
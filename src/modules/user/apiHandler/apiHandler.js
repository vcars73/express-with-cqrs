const commandHandler = require('../repositories/command/commandHandler')
const comRes = require('../../../config/utils/commonResponse')
const queryHandler = require('../repositories/queries/queryHandler')

const register = async (req, res) => {

  const { body } = req;
  const payload =  body


const result =await commandHandler.register(payload);

  return comRes.response(res,result);

};

const getAlUser = async (req, res) => {

const result =await queryHandler.getAllUser();

  return comRes.response(res,result)

};


const login = async (req, res) => {
  const { body } = req;
  const payload =  body


const result =await commandHandler.login(payload);

  return comRes.response(res,result);

};




module.exports = {
    register,
    getAlUser,
    login
};
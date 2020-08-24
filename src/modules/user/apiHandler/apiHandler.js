const commandHandler = require('../repositories/command/commandHandler')
const queryHandler = require('../repositories/queries/queryHandler')

const register = async (req, res) => {

  const { body } = req;
  const payload =  body


const result =await commandHandler.register(payload);

  res.json(`${result} Register Succesfully`);

};

const getAlUser = async (req, res) => {


const result =await queryHandler.getAllUser();

  res.send(`${result}`);

};


module.exports = {
    register,
    getAlUser
};
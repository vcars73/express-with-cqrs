const commandHandler = require('../repositories/command/commandHandler')

const register = async (req, res) => {

  const { body } = req;
  const payload =  body


const result =await commandHandler.register(payload);
console.log(result);
  res.json(`${result} Register Succesfully`);

};


module.exports = {
    register
};
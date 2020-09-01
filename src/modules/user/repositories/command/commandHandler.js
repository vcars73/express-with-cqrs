const domain = require('./domain');

const Domain= new domain();

//connection db and prepare for bussiness logic
const register = async (payload) => {

  const postData = async() => {

    const result = await Domain.register(payload);
    return result;
  };
  const result = await postData();
  return result;
};

const login = async (payload) => {

  const postData = async() => {

    const result = await Domain.login(payload);
    return result;
  };
  const result = await postData();
  return result;
};



module.exports = {
    register,
    login
};

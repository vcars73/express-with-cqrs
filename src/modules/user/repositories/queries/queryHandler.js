const domain = require('./domain');

const Domain= new domain();

//connection db and prepare for bussiness logic
const getAllUser = async (payload) => {

  const getData = async() => {

    const result = await Domain.getAllUser(payload);
    return result;
  };
  const result = await getData();
  return result;
};

module.exports = {
    getAllUser
};

const domain = require('./domain');

const Domain= new domain();

//connection db and prepare for bussiness logic
const listMovies = async (payload) => {

  const getData = async() => {

    const result = await Domain.listMovies(payload);
    return result;
  };
  const result = await getData();
  return result;
};

const detailMovies = async (payload) => {

  const getData = async() => {

    const result = await Domain.detailMovies(payload);
    return result;
  };
  const result = await getData();
  return result;
};

module.exports = {
    listMovies,
    detailMovies
};

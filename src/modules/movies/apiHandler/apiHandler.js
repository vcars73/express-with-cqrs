const comRes = require('../../../config/utils/commonResponse')
const queryHandler = require('../repositories/queries/queryHandler')
const queryModel = require('../repositories/queries/queryModel')


const listMovies = async (req, res) => {

  const { query } = req;
  
const validation = queryModel.listMovies.validate(query)

const result =await queryHandler.listMovies(query);

if (validation.error) {
  const notValid = comRes.error(409,validation.error.details[0].message)
  return comRes.response(res,notValid);
}

  return comRes.response(res,result);

};

const detailMovies = async (req, res) => {

  const { params } = req;
  
// const validation = commandModel.register.validate(params)

const result = await queryHandler.detailMovies(params);

// if (validation.error) {
//   const notValid = comRes.error(409,validation.error.details[0].message)
//   return comRes.response(res,notValid);
// }

  return comRes.response(res,result);

};




module.exports = {
    listMovies,
    detailMovies
};
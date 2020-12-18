const joi = require('joi')

const listMovies =  joi.object({
    search: joi.string().optional().allow(''),
    startDate: joi.string().optional().allow(''),
    endDate: joi.string().optional().allow(''),
  });

module.exports = {
listMovies
}
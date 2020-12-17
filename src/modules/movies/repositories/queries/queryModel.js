const joi = require('joi')

const listMovies =  joi.object({
    search: joi.string().optional(),
    startDate: joi.string().optional(),
    endDate: joi.string().optional(),
  });

module.exports = {
listMovies
}
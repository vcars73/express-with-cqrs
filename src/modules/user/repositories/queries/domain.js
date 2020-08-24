const logger = require('../../../../config/logger')
const db = require('../../../../config/db/postgre')
class User {

  async getAllUser() {



    try {
    const result = await db.query('SELECT * FROM public.user');
    logger.log({
        level: 'info',
        message: 'get all user succesfully'
      });

      const resulJson = JSON.stringify(result.rows)
    return resulJson
    } catch (error) {
        logger.log({
            level: 'error',
            message: error
          });
    }
    
      
  }
}

module.exports = User;

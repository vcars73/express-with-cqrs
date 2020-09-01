const logger = require('../../../../config/utils/logger')
const db = require('../../../../config/databases/postgre')
const comRes = require('../../../../config/utils/commonResponse');
class User {

  async getAllUser() {

    try {
    const result = await db.query('SELECT * FROM public.user');
    logger.log('info', 'get all user succesfully');

    return comRes.success(200 , result.rows,'Succes Get All User')

    } catch (error) {
      logger.log('error', error);

          console.log(error);
          return comRes.error(404 , 'Data Not Found')
    }
    
      
  }
}

module.exports = User;

const logger = require('../../../../config/logger')

class User {
//   constructor(db) {
//     this.query = new query(db);
//   }

  async register(payload) {

    const result = `${payload.name}`;
    logger.log({
        level: 'info',
        message: 'register succesfully'
      });
      
    return result;

  }
}

module.exports = User;

class User {
//   constructor(db) {
//     this.query = new query(db);
//   }

  async register(payload) {

    const result = `${payload.name}`;
    return result;

  }
}

module.exports = User;

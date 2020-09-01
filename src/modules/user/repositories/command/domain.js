const comRes = require('../../../../config/utils/commonResponse')
const db = require('../../../../config/databases/postgre/index')
const jwt = require('../../../../config/auth/jwt')
const logger = require('../../../../config/utils/logger')


class User {

  async register(payload) {

    const user = await db.query("SELECT * FROM public.user WHERE email=$1", [payload.email]);

    if(user.rows.length != 0) {
      logger.log('error','Email Already Register');
      return comRes.error(500 , 'Email Already Register!')
    }

    console.log("DIATAS INSERT");
    const result = await db.query("INSERT INTO public.user (nama,email,password) VALUES ($1,$2,$3)",[payload.nama,payload.email,payload.password ])
    logger.log('info','register succesfully');
      
    return comRes.success(200 , result.rows , 'user register successfully');

  }


  async login(payload) {
    let result;

    const {email , password} = payload
    const user = await db.query('SELECT * FROM public.user WHERE email=$1', [email]);

    if (user.rows.length == 0) {
      logger.log('error','user not found');

    return comRes.error(404 , 'User Not Found!');

    }

    if (email !== user.rows[0].email || password !== user.rows[0].password){
      return comRes.error(404 , 'Email or Password Incorect')
    }
    const token = await jwt.generateToken(payload)


    result = {
      email : email,
      token : token , 
      expired : payload.expired,
    }

    return comRes.success(200,result,'Login Succesfull');
  }
}

module.exports = User;

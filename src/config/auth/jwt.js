'use strict';
const comRes = require('../utils/commonResponse')
const fs   = require('fs');
const jwt  = require('jsonwebtoken');
const logger = require('../utils/logger');
const privateKEY  = fs.readFileSync('private.key', 'utf8');
const publicKEY  = fs.readFileSync('public.key', 'utf8');
const db = require('../databases/postgre/index')


const getToken = (headers) => {
  if (headers && headers.authorization && headers.authorization.includes('Bearer')) {
    const parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    }
  }
  return undefined;
};


const generateToken = async (payload ) => {

    let signOptions = {
    issuer:  'vcars73',
    audience:  'ngodingyuks.com',
    expiresIn:  payload.expired,
    algorithm:  "RS256"   
};

return jwt.sign(payload, privateKEY, signOptions);

   }


   const generateRefreshToken = async (payload, refreshExpired) => {
    const verifyOptions = {
      algorithm:  "HS256",
      issuer:  'vcars73',
      audience:  'ngodingyuks.com',
      expiresIn: refreshExpired ? refreshExpired : '1000m'
    };
    const token = jwt.sign(payload, privateKEY, verifyOptions);
    return token;
  };



   const verifyToken = async (req ,res,next) =>{

    let result;
    let token = getToken(req.headers)
  
    
    if (!token) {
      result = comRes.error(401,'Invalid Token')
      return comRes.response(res , result);
    }
    let verifyOptions = {
        issuer:  'vcars73',
    audience:  'ngodingyuks.com',
    algorithm:  "RS256"   
    };

    let decodeToken
     try{
       decodeToken = await jwt.verify(token, publicKEY, verifyOptions)
     }catch (err){

      if (err.name == 'TokenExpiredError'){
        result = comRes.error(401,'Token Has Expired!')    
      
      }

      else {
      result = comRes.error(401,'Invalid Token')
      }
      
 
       return comRes.response(res , result);
     }

     let email = decodeToken.email;

    result = await db.query('SELECT * FROM public.user WHERE email=$1', [email]);
    console.log(result.rows.length);


    if(result.rows.length == 0){
      result = comRes.error(404,'User Not Found')  
      return comRes.response(res , result);
    }
    req.user = result.rows
     next()
   }


   const verifyRefreshToken = async (refreshToken) => {
    
    const verifyOptions = {
      algorithm:  "HS256",
      issuer:  'vcars73',
      audience:  'ngodingyuks.com',
    };
  
    let  decodedToken
    try {
      decodedToken = jwt.verify(refreshToken, publicKEY, verifyOptions);
    } catch (error) {
    
      if (err.name == 'TokenExpiredError'){
        result = comRes.error(401,'Token Has Expired!')    
      
      }

      else {
      result = comRes.error(401,'Invalid Token')
      }
    }
    const result = {
      email: decodedToken.email
    };
  
    return result;
   
  };




module.exports = {
    generateToken,
    verifyToken,
    generateRefreshToken,
    verifyRefreshToken
}
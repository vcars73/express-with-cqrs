const { Pool } = require('pg')
const connectionString =  'postgres://jyqyzlawtqdxrd:3e10895c838508f06606797f2bfcdfe8ccdba9db060f244095ce7a8249f9df3c@ec2-54-146-91-153.compute-1.amazonaws.com:5432/d2qnmp2a7rdkk4'

const pool = new Pool({
  connectionString: connectionString,
  connectionTimeoutMillis : 15000,
  idleTimeoutMillis : 15000,
  keepAlive : 15000,
  ssl :  {
    require: true,
  // Ref.: https://github.com/brianc/node-postgres/issues/2009
  rejectUnauthorized: false}
})



module.exports = {
  query: (text, params) => pool.query(text, params),
}


const { Pool, Client } = require('pg')
const connectionString =  'postgresql://postgres:zulfikar73@localhost:5432/postgres'
const pool = new Pool({
  connectionString: connectionString,
})

console.log(pool.getMaxListeners());


pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  connectionString: connectionString,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})



module.exports = {
  pool,
  client
}


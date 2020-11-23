const { Pool } = require('pg');
const pool = new Pool()
pool.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  })

module.exports = pool;
// {
//     host: process.env.PGHOST,
//     port: process.env.PGPORT,
//     user: process.env.PGUSER,
//     password: process.env.PGPASSWORD,
//   }
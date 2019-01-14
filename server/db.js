const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '123.206.55.50',
  user: 'root',
  password: '1601n',
  database: 'yuedu',
});

const promisePool = pool.promise();

module.exports = promisePool;


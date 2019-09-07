const mysql = require('mysql');
const config = {
      host     :  '127.0.0.1',
      port : 3306,
      user     : 'root',
      password : '',
      database : 'dev-blog',
  }
const db = mysql.createConnection(config);
module.exports =  db ;



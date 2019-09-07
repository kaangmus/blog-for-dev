var db = require('./../config/database');

exports.Insert = (data,callback) => {
      var sql="INSERT INTO students (id,nama,email) VALUES (?,?,?)";
      return db.query(sql,['',data.nama,data.email],callback); 
};


exports.insert = (data,callback) => {
        const sql="INSERT INTO article (id,title,category,status,cover_name) VALUES (?,?,?,?,?)";
        return db.query(sql,['',data.title,data.category,data.status,data.cover_name],callback); 
};


exports.ViewData = callback =>{
       return db.query('SELECT * FROM students',callback);      
};


exports.getId = (id, callback) =>{
       return db.query('SELECT * FROM students where id='+id,callback);      
};




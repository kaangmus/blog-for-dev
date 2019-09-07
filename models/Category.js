var db = require('./../config/database');


exports.insert = (title,callback) => {
        const sql="INSERT INTO category (id,title) VALUES (?,?)";
        return db.query(sql,['',title],callback); 
};


exports.view = callback =>{
       return db.query('SELECT * FROM students',callback);      
};


exports.find = (id, callback) =>{
       return db.query('SELECT * FROM students where id='+id,callback);      
};




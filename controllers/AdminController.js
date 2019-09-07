const Article = require('./../models/Article')
const Category = require('./../models/Category')
const multer = require('multer');

exports.index = async (req,res)=>{
      res.render('admin/index');
} 

exports.postArticle = async (req,res)=>{
      res.render('admin/post-article');
} 

exports.tableArticle = async (req,res)=>{
      res.render('admin/table-article');
} 

exports.settingProfile = async (req,res)=>{
      res.render('admin/setting-profile');
} 

exports.insertCategory = async (req,res)=>{
       Category.insert(req.body.title, (err,results)=>{
       if(err) throw err
       res.json('success')  
    });
} 



exports.insertArticle = async (req,res)=>{
	const data = {title,category,status,content_article} = req.body;
	console.log(data)
	// console.log(req.file.filename)
  // res.json('success')
	 // const storage = multer.diskStorage({
  //     destination: function (req, file, cb) {
  //       cb(null, 'uploads/')
  //     },
  //     filename: function (req, file, cb) {
  //       cb(null, file.originalname)
  //     }
  //   });
  //    const upload = multer({storage: storage}).single('cover');

  //    upload(req, res, function(err){
  //         if(err) throw err
  //         	const data = {title, category, status} = req.body;
  //         	data.cover_name =req.file.filename;

  //           // Article.insert(data,(err,results)=>{
  //           //   // console.log(results);
  //           // })
  //     });
     	
} 




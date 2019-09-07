
exports.home = async (req,res)=>{
      res.render('public/index');
} 

exports.blogPost = async (req,res)=>{
      res.render('public/blog-post');
} 

exports.about = async (req,res)=>{
      res.render('public/about');
} 

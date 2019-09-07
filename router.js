const PublicController = require('./controllers/PublicController');
const AdminController = require('./controllers/AdminController');

module.exports = app => {
    
    app.get('/', PublicController.home );
    app.get('/index', PublicController.home);
    app.get('/blog-post', PublicController.blogPost);
    app.get('/about', PublicController.about);

    app.get('/admin', AdminController.index);    
    app.get('/admin/index', AdminController.index);
    app.get('/admin/post-article', AdminController.postArticle);
    app.post('/admin/insert-article',AdminController.insertArticle);
    app.post('/admin/insert-category',AdminController.insertCategory);
    app.get('/admin/table-article',AdminController.tableArticle);
    app.get('/admin/setting-profile',AdminController.settingProfile);

};



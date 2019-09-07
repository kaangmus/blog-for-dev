const express = require('express');
const path = require('path');
// const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const http = require('http').Server(app); 

app.set('port', process.env.PORT || 8000);

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(session({   // mendapftarakan session secara global 
              secret: 'keyboard cat',
              resave: false,
              saveUninitialized: true,
              cookie: { maxAge: 60000 }
            }));


require('./router')(app);

http.listen(app.get('port'), function() {
   console.log('Express server listening on port ' + app.get('port'));
});

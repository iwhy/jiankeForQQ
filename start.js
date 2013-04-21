
/**
 * Module dependencies.
 */

var express = require('express')
  , jiankeCgi = require('./routes/jiankeCgi')
  , test = require('./routes/test')
  , http = require('http')
  , path = require('path');

var config = require('./config/config');

var app = express();

// all environments
app.set('port', config.serverPort);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.all('/jiankeCgi', jiankeCgi.go);
app.get('/test', test.go);

http.createServer(app).listen(app.get('port'), function(){
  console.log('jiankeForQQ server start ' + app.get('port'));
});

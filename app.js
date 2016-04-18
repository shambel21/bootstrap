'use strict';
var express = require('express');
var routes = require('./src/routes');
var body_parser = require('body-parser');
//var stormpath = require('express-stormpath');
//var log = require('./src/lib/logger').Log;

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');
app.use('/site', express.static(__dirname + '/site'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({
  extended: true
}));
//app.use(stormpath.init(app, {
//  website: true
//}));


app.get('/incident', routes.GetIncident);

app.post('/incident', routes.AddIncident);
app.get('/', routes.Index);

//app.get('*', routes.Index);

//app.on('stormpath.ready',
//  function() {
    app.listen(8500, function() {
      //log.info('ready captain -- sailing on port 8500');
      console.log('ready captain -- sailing on port 8500');
//    });
  });

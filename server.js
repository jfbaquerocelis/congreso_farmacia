var express = require('express'),
	crossroads = require('crossroads'),
	swig = require('swig');

server = express();
router = express.Router();

// swig.setDefaults({
// 	cache : false
// });
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', './app/views');

server.use( express.static(__dirname + '/public') );
server.use(router)

// Calling routers
var homeRouter = require('./app/routers/r.home')
var humaxRouter = require('./app/routers/r.humax')
var hotelRouter = require('./app/routers/r.hotel')
var cvlacRouter = require('./app/routers/r.cvlac')
var contactRouter = require('./app/routers/r.contact')
homeRouter(router)
humaxRouter(router)
hotelRouter(router)
cvlacRouter(router)
contactRouter(router)

server.listen(25115, function () {
	console.log('Server running in -> http://localhost:25115');
})
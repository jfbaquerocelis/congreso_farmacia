var hotelControllers = require('../controllers/hotel'),
	hotelRouter = function (router) {
		router.get('/hotel', hotelControllers)
	}

module.exports = hotelRouter;
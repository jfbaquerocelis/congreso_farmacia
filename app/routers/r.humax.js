var humaxControllers = require('../controllers/humax'),
	humaxRouter = function (router) {
		router.get('/humax', humaxControllers)
	}

module.exports = humaxRouter;
var cvlacControllers = require('../controllers/cvlac'),
	cvlacRouter = function (router) {
		router.get('/cvlac', cvlacControllers)
	}

module.exports = cvlacRouter;
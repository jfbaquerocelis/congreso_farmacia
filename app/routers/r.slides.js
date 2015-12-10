var slidesControllers = require('../controllers/slides'),
	slidesRouter = function (router) {
		router.get('/slides', slidesControllers)
	}

module.exports = slidesRouter;
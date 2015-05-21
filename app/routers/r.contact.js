var contactControllers = require('../controllers/contact'),
	contactRouter = function (router) {
		router.get('/contact', contactControllers)
	}

module.exports = contactRouter;
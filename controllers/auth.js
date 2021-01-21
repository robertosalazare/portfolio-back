const mediator = require("../app/mediator");
const validateSchema = require('../middlewares/validateSchema');

const routes = (router) => {
  router.post(
    '/login',
    validateSchema(mediator.getElement("login").validate),
    mediator.getElement("login").handler,
  );
};

module.exports = routes;
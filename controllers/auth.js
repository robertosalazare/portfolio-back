const mediator = require("../app/mediator");
const loggedIn = require("../middlewares/loggedIn");
const validateSchema = require('../middlewares/validateSchema');

const routes = (router) => {
  router.post(
    '/login',
    validateSchema(mediator.getElement("login").validate),
    mediator.getElement("login").handler,
  );

  router.get(
    '/me',
    loggedIn,
    mediator.getElement("me").handler,
  );

  router.post(
    '/logout',
    loggedIn,
    mediator.getElement("logout").handler,
  );
};

module.exports = routes;
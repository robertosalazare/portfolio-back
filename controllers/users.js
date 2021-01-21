const mediator = require("../app/mediator");
const loggedIn = require("../middlewares/loggedIn");
const validateSchema = require('../middlewares/validateSchema');

const routes = (router) => {
  router.post(
    '/user',
    loggedIn,
    validateSchema(mediator.getElement('postUser').validate),
    mediator.getElement('postUser').handler,
  );

  router.get(
    '/user',
    loggedIn,
    mediator.getElement('getAllUsers').handler,  
  );
}

module.exports = routes;
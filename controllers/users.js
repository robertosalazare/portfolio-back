const mediator = require("../app/mediator");

const routes = (router) => {
  router.post('/user', mediator.getElement('postUser'));

  router.get('/user', mediator.getElement('getAllUsers'));
}

module.exports = routes;
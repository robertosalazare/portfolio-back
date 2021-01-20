const mediator = require("../app/mediator");

const routes = (router) => {
  router.post('/user', mediator.getElement('postUser').handler);

  router.get('/user', mediator.getElement('getAllUsers').handler);
}

module.exports = routes;
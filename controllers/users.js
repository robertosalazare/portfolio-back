const mediator = require("../app/mediator");

const routes = (router) => {
  router.post('/user', mediator.postUser);

  router.get('/user', (req, res) => {
    res.send('not implemented yet');
  });
}

module.exports = routes;
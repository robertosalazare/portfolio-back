const routes = (router) => {
  router.get('/', (req, res) => {
    res.send('Hello World!');
  });
}

module.exports = routes;
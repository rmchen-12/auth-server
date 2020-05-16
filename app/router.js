module.exports = (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/update', controller.home.update);
};

const { createUsers, getUsers } = require('../controller/users');
const { requireAuth } = require('../middlewares/auth');

module.exports = (app, next) => {
  // ruta, intermidiario middleware, función requerida
  app.get('/users', getUsers);

  // app.get('/users/:uid');

  app.post('/users', requireAuth, createUsers);

  // app.put('/users/:uid');

  // app.delete('/users/:uid');
  next();
  // initAdminUser(app, next);
};

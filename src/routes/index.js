const auth = require('./auth');
const users = require('./users');
const message = require('./chat');
const channelType = require('./channel-type');
const channel = require('./channel');
const channelUser = require('./channel-user');

const root = (app, next) => {
  const pkg = app.get('pkg');
  app.get('/', (req, res) =>
    res.json({ name: pkg.name, version: pkg.version })
  );
  app.all('*', (req, resp, nextAll) => nextAll(404));
  return next();
};

// eslint-disable-next-line consistent-return
const register = (app, routes, cb) => {
  if (!routes.length) {
    return cb();
  }

  routes[0](app, (err) => {
    if (err) {
      return cb(err);
    }
    return register(app, routes.slice(1), cb);
  });
};

module.exports = (app, next) =>
  register(
    app,
    [auth, users, channelType, channel, message, channelUser, root],
    next
  );

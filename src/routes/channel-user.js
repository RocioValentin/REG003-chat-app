const {
  getChannels,
  createChannelUser,
} = require('../controller/channel-user');

module.exports = (app, nextMain) => {
  app.get('/channel-user', getChannels);
  app.post('/chanel-user', createChannelUser);

  return nextMain();
};

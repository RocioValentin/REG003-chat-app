const { getChannels, createChannel } = require('../controller/channel');

module.exports = (app, nextMain) => {
  app.get('/channel', getChannels);
  app.post('/channel', createChannel);

  return nextMain();
};

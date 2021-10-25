const { getChannelTypes } = require('../controller/channel-type');

module.exports = (app, nextMain) => {
  app.get('/channel_type', getChannelTypes);

  return nextMain();
};

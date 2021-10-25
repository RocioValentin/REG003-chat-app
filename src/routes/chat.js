const { getMessage, createMessage } = require('../controller/chat');

module.exports = (app, nextMain) => {
  app.get('/message', getMessage);
  app.post('/message', createMessage);

  return nextMain();
};

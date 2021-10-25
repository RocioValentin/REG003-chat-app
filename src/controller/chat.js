const { Pool } = require('pg');
const Message = require('../models/message');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'postgres',
  database: 'postgres',
});

module.exports = {
  getMessage: async (req, res, next) => {
    const response = await pool.query('SELECT * FROM messages');
    // console.log(response.rows);
    return res.status(200).json(response.rows);
  },
  createMessage: async (req, res, next) => {
    const { channelId, userId, message, date } = req.body;
    const theMessage = new Message();

    theMessage.setChannelId(channelId);
    theMessage.setUserId(userId);
    theMessage.setMessage(message);
    theMessage.setDate(date);

    const channelMessage = theMessage.getChannelId();
    const userMessage = theMessage.getUserId();
    const messageText = theMessage.getMessage();
    const messageDate = theMessage.getDate();

    await pool.query(
      'INSERT INTO messages (channel_id, users_id, message, date) VALUES ($1, $2, $3, $4)',
      [channelMessage, userMessage, messageText, messageDate]
    );

    return res.json({ message: 'Message added succesfully' });
  },
};

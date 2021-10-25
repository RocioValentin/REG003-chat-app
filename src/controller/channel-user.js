const { Pool } = require('pg');
const ChannelUser = require('../models/channel-user');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'postgres',
  database: 'postgres',
});
module.exports = {
  getChannels: async (req, res, next) => {
    const response = await pool.query('SELECT * FROM channel_users');
    // console.log(response.rows);
    return res.status(200).json(response.rows);
  },
  createChannelUser: async (req, res, next) => {
    // eslint-disable-next-line camelcase
    const { channel_id, users_id, date } = req.body;
    const channelUser = new ChannelUser();

    channelUser.setChannelId(channel_id);
    channelUser.setUserId(users_id);
    channelUser.setDate(date);

    const channelId = channelUser.getChannelId();
    const userId = channelUser.getUserId();
    const dateCreate = channelUser.getDate();

    await pool.query(
      'INSERT INTO channel_users (channel_id, users_id, date) VALUES ($1, $2, $3)',
      [channelId, userId, dateCreate]
    );
    return res.json({ message: 'Channel-User create succesfully' });
  },
};

const { Pool } = require('pg');
const Channel = require('../models/channel');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'postgres',
  database: 'postgres',
});
module.exports = {
  getChannels: async (req, res, next) => {
    const response = await pool.query('SELECT * FROM channel');
    // console.log(response.rows);
    return res.status(200).json(response.rows);
  },
  createChannel: async (req, res, next) => {
    const { channel_type_id } = req.body;
    const channel = new Channel();

    channel.setChannelType(channel_type_id);

    const channelType = channel.getChannelType();

    await pool.query('INSERT INTO channel (channel_type_id) VALUES ($1)', [
      channelType,
    ]);
    return res.json({ message: 'Chanel create succesfully' });
  },
};

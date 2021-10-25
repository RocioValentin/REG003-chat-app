const { Pool } = require('pg');
// const bcrypt = require('bcrypt');
// const User = require('../models/users');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'postgres',
  database: 'postgres',
});
module.exports = {
  getChannelTypes: async (req, res, next) => {
    const response = await pool.query('SELECT * FROM channel_type');
    // console.log(response.rows);
    return res.status(200).json(response.rows);
  },
};

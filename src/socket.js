const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'postgres',
  database: 'postgres',
});

const socketController = (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('Cliente desonectado', socket.id);
  });
  // recibe el emit de fronted
  socket.on('enviar-mensaje', async (payload, callback) => {
    console.log(payload);
    // ahora el servidor emite el mensaje a otro cliente
    // el callback lleva el id al cliente en el emit
    const id = 1234;
    callback(id);
    socket.broadcast.emit('enviar-mensaje', payload);
    const text = 'INSERT INTO users(username, password) VALUES($1,$2)';
    const values = [payload.mensaje, payload.mensaje];
    const res = await pool.query(text, values);
    console.log(res);
    pool.end();
  });
};

module.exports = {
  socketController,
};

const express = require('express');
const routes = require('./routes');
const sequelize = require('sequelize')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// app.get('/home', (req, res) => {
//   res.send('welcome')
// })

// app.post('/room', (req, res) => {
//   const room = req.body
//   res.json({messege: 'succsessful', status: 201, room})
// })

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

require('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT || 9999;

app.get('/', (req, res) => {
  console.log('api /');
  res.send('test_docker_change_1');
});

app.get('/test', (req, res) => {
  console.log('api /test')
  res.send('test_docker_2');
});

app.listen(PORT, () => console.log('Server runing in port: '+ PORT))
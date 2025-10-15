const express = require('express');
const path = require('path');
const getImageList = require('./getImageList');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/images', (req, res) => {
  const images = getImageList();
  res.json(images);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const ejs = require('ejs');

//template engine
app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));

//Routes
app.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('index');
});
app.get('/about', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('about');
});
app.get('/add', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('add');
});
app.get('/post', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('post');
});
app.listen(port, () => {
  console.log(`Appjs listening on port ${port}`);
});

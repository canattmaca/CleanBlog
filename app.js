const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
const ejs = require('ejs');
const BlogPost = require('./modals/BlogPosts');

const app = express();
const port = 3000;

// connectDB
mongoose.connect('mongodb://127.0.0.1:27017/CleanBlog');

//template engine
app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get('/', async (req, res) => {
  const posts = await BlogPost.find({});
  res.render('index', {
    posts,
  });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add');
});
app.get('/post', (req, res) => {
  res.render('post');
});
app.get('/posts/:id', async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  // console.log(req.params.id);
  res.render('post', { post });
});
app.post('/createPost', async (req, res) => {
  await BlogPost.create(req.body);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Appjs listening on port ${port}`);
});

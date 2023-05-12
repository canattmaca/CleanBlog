const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postControllers = require('./controllers/postControllers');
const pageControllers = require('./controllers/pageControllers');

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
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

//Routes
app.get('/', postControllers.getAllPosts);
app.get('/post/:id', postControllers.getPost);
app.post('/createPost', postControllers.createPost);
app.put('/post/:id', postControllers.updatePost);
app.delete('/post/:id', postControllers.deletePost);

app.get('/about', pageControllers.getAboutPage);
app.get('/add', pageControllers.getAddPage);
app.get('/post/edit/:id', pageControllers.getEditPage);

app.listen(port, () => {
  console.log(`Appjs listening on port ${port}`);
});

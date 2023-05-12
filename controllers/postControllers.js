const BlogPost = require('../modals/BlogPosts');

exports.getAllPosts = async (req, res) => {
  const posts = await BlogPost.find({}).sort('-dateCreated');
  res.render('index', {
    posts,
  });
};
exports.getPost = async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  // console.log(req.params.id);
  res.render('post', { post });
};
exports.createPost = async (req, res) => {
  await BlogPost.create(req.body);
  res.redirect('/');
};
exports.updatePost = async (req, res) => {
  const post = await BlogPost.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.details = req.body.details;
  post.save();
  res.redirect(`/post/${req.params.id}`);
};
exports.deletePost = async (req, res) => {
  const post = await BlogPost.findOneAndRemove({ _id: req.params.id });
  res.redirect(`/`);
};

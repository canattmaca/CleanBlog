const BlogPost = require('../modals/BlogPosts');
exports.getAboutPage = (req, res) => {
  res.render('about');
};
exports.getAddPage = (req, res) => {
  res.render('add');
};
exports.getEditPage = async (req, res) => {
  const post = await BlogPost.findOne({ _id: req.params.id });
  // console.log(req.params.id);
  res.render('edit', { post });
};

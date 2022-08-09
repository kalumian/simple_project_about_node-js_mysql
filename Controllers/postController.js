const Post = require("../models/post.js");

exports.createPost = async (req, res, next) => {
  try {
    const { title, body } = req.body;
    let post = new Post(title, body);
    post = await post.Save();
    res.status(201).json({ message: "create post is seccusfuly" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();
    res.status(200).json({ posts, count: posts.length });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.getPostById = async (req, res, next) => {
  try {
    let id = req.params.id;
    const post = await Post.findAllById(id);
    res.status(200).json({ post });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

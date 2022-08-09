//  Imports
const express = require("express");
const route = express.Router();
const {
  getAllPosts: GET,
  createPost: ADD,
  getPostById: GET_by_id,
} = require("../Controllers/postController");

// Routers
route.get("/", GET);
route.get("/:id", GET_by_id);
route.post("/add", ADD);

module.exports = route;

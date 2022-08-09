const db = require("../db.js");
class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  async Save() {
    const date = new Date();
    const year = date.getFullYear();
    const day = date.getDay();
    const month = date.getHours();

    let create_at = `${year}-${day}-${month}`;

    let order = `insert into posts(title,body,created_at) values ("${this.title}","${this.body}","${create_at}");`;

    const [post, _] = await db.execute(order)

    return post;
  }
  static findAll(){
    const order = "SELECT * FROM posts"
    return db.execute(order)
  }
  static findAllById(id){
    const order = `SELECT * FROM posts WHERE id = ${id}`
    return db.execute(order)
  }
}
module.exports = Post;

const mongoose = require('mongoose')
const User = require("./User")
const Post = require("./Post")

const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost/appdb")


app.post('/add-blog-post', async (req, res) => {
    const {title, content, author} = req.body;
    try {
        const newPost = new Post({
          title,
          content,
          author,
        });
        await newPost.save();
        res.status(201).json({ message: 'Blog post created successfully.' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  });


  app.get('/get-all-posts', async (req, res) => {
    try {
      const items = await Post.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


app.listen(4000, () => {
    console.log("Running on 4000")
});


const mongoose = require('mongoose')
const Post = require("./Post")

const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors({ origin: '*' }));

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

  app.get('/get-posts-by-word', async (req, res) => {
    const word = req.query.word;
    console.log("Received search term:", word);
    try {
      const posts = await Post.find({
        content: { $regex: word, $options: 'i' }
      });
      res.json(posts);
    } catch (error) {
      console.error('Error in /get-posts-by-word:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


app.listen(4000, () => {
    console.log("Running on 4000")
});


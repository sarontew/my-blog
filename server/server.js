const mongoose = require('mongoose')
const User = require("./User")
const Post = require("./Post")

const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors({
        origin: 'http://localhost:3000',
}));
app.use(express.json());

mongoose.connect("mongodb://localhost/appdb")

// run()
// async function run() {
//     // const user = new User({ name : "Kylie", age: 22})
//     // await user.save()
//     const user = await User.create({name: "hana", age: 34, email:"hana@gmail.com"})
//     user.name = "Sam"
//     user.save()
//     console.log(user)
// }

let storedCaption = '';

app.post('/store-caption', (req, res) => {
    const { caption } = req.body;
    storedCaption = caption;
    addnewpost()
    //res.status(200).json({ message: 'Caption stored successfully' });
  });

  // GET route to retrieve the stored caption
  app.get('/get-caption', (req, res) => {
    res.status(200).json({ caption: storedCaption });
  });

  app.get('/api/items', async (req, res) => {
    try {
      const items = await Post.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/get-all-posts', function(req, res) {
    // console.log("tries to fetch psots")
    // Post.find({}, function(err, posts) {
    //   var postMap = {};

    //   posts.forEach(function(post) {
    //     postMap[post._id] = post;
    //   });

    //   res.send(postMap.json());
    // });
    console.log("serverjs")
    res.send("hi")
  });


async function addnewpost(){
    console.log("tried to create a new post")
    const post = await Post.create({caption: storedCaption})
    post.save()
    console.log(post)
}


// Get all tasks
app.get('/posts', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(error){
        res.status(500).json({error: 'Could not fetch posts'})
    }
})

app.listen(4000, () => {
    console.log("Running on 4000")
});

// const express = require('express')
// const app = express()


// app.listen(4000, () => {
//          console.log(`Seerver is running on port 4000.`);
// });

// import mongoose from 'mongoose';
// import Post from "./model/Post";

// const express = require('express');
// const cors = require('cors');
// const app = express();
// mongoose.connect("mongodb://localhost/appdb", () => {
//     console.log("connected")
// });
// console.log("here");

// const newpost = await Post.create({
//     title: "Very cool img",
//     author: "Saron"
// });

// console.log(newpost);

// app.use(cors({
//     origin: 'http://localhost:3000',
//   }));

// app.use(express.json());

// app.get('/message', (req, res) => {
//     console.log("tries to fetch");
//     res.json({ message: "Hello from server!" });
// });

// app.listen(4000, () => {
//     console.log(`Server is running on port 4000.`);
// });


Saron's Blog.

This project is a full stack blog application.
The Client side uses HTML, CSS, Bootstrap and JavaScript through the ReactJS framework.
Inside the components files I have created a NavBar- Navigation bar that uses the react router to create a multi-page site allowing access to the HomePage, AddBlog and ViewBlogs pages. Inside the same file there is a SearchBar component that allows users to search for specific blog posts by typing a word into the search bar.
Inside the pages file resides the 3 pages making this site. The HomePage displays my picture along with a short description of my blog. In addition, it displays my most recent blog post.
The AddBlog page allows me to add a title, content and sign myself as an author of the blog posts. Finally, the ViewBlog page displays all the blogs in chronological order and has the SearchBar feature.
The main App.js file contains the routing imported from the NavBar.
I included some styling for the webpage in the App.css and index.css files on top of the Bootstrap integrated in the HTML script.

The Server side uses NodeJS along with Express for routing and Mongoose to connect to my local MongoDB database.
The Post.js file is a design of the database schema with the different fieldsL title, content, author and createdAt.
The server.js file handles the get and post API fetch calls from the front end by using Express for routing and making the appropriate database queries.
I used CORS to avoid any NetworkError from the different host addresses.

Some additional features to add to this project would be being able to delete Blog posts and adding a User schema so that people may comment on each Blog post.
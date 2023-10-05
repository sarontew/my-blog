import React, {useState, useEffect} from "react";

function ViewBlogs() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchItems() {
            try {
              const response = await fetch('http://localhost:4000/get-all-posts');
              if (response.ok) {
                const data = await response.json();
                console.log(data)
                setPosts(data);
              } else {
                console.error('Error fetching items!:', response.statusText);
              }
            } catch (error) {
              console.error('Error fetching items:', error);
            }
          }

          fetchItems();
        }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <div className="container-fluid">
                <div className="row">
                   <h5>{post.title}</h5>
                </div>
                <div className="row">
                    <div className="col">
                        <p>{post.createdAt}</p>
                    </div>
                    <div className="col">
                        <p>{post.content}</p>
                    </div>
                </div>
            </div>
            {post.caption}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewBlogs;
import React, {useState, useEffect} from "react";

function ViewBlogs() {

    const [posts, setPosts] = useState([])
    const [message, setMessage] = useState("");

    // const handleRetrieve = async () => {
    //     try {
    //       const response = await fetch('http://localhost:4000/get-all-posts');
    //       console.log(response)
    //       if (response.ok) {
    //         const data = await response.json();
    //         setPosts(data.postMap)

    //       } else {
    //         console.log("error retrieving")
    //       }
    //     } catch (error) {
    //       console.error('Error retrieving caption:', error);
    //     }
    //   };

    const handleRetrieve = async () => {
        try {
          const response = await fetch('http://localhost:4000/get-all-posts');

          if (response.ok) {
            const data = await response();
            setMessage(`Info ${data}`);
          } else {
            setMessage('Error retrieving caption.');
          }
        } catch (error) {
          console.error('Error retrieving caption:', error);
          setMessage('Error retrieving caption.');
        }
      };

    useEffect(() => {
        // handleRetrieve();
        // fetch('http://localhost:4000/get-all-posts')
        // .then(response => response)
        // .then(data => console.log(data));
        async function fetchItems() {
            try {
              const response = await fetch('/api/items');
              if (response.ok) {
                const data = await response.json();
                setPosts(data);
              } else {
                console.error('Error fetching items:', response.statusText);
              }
            } catch (error) {
              console.error('Error fetching items:', error);
            }
          }

          fetchItems();
        }, []);

  return (
    <div>
      <h1>ViewBlogs</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            {post.caption}
          </li>
        ))}
      </ul>
      <p>{posts}</p>
      <p>{message}</p>
    </div>
  );
}

export default ViewBlogs;
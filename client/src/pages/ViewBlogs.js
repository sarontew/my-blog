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
        async function fetchItems() {
            try {
              const response = await fetch('http://localhost:4000/get-all-posts');
              //console.log(response)
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
      {/* <p>{posts}</p>
      <p>{message}</p> */}
    </div>
  );
}

export default ViewBlogs;
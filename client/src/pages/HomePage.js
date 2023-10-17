import React, {useState, useEffect} from "react";

function HomePage() {

  const [posts, setPosts] = useState([])
  const data = []
  const [post, setPost] = useState('')

  useEffect(() => {
    async function fetchItems() {
        try {
          const response = await fetch('http://localhost:4000/get-all-posts');
          if (response.ok) {
            const data = await response.json();
            console.log(data)
            setPosts(data);
            setPost(data[data.length - 1])
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
      <div className="container-fluid">
        <div className="row">
        <h1 className='mb-5'>Home Page</h1>
        </div>
        <div className="row">
          <div className="col-6">
          <img src="images/profile-pic.png" className="img-fluid" alt="Responsive" width="500"></img>
          </div>
          <div className="col-6 mt-5">
            <p>Hi My name is Saron and this is my Blog! On here I post about my university day to day life,
              my career aspirations in Computer Science and my passion of tutoring.
              I also have fashion and lifestyle content occasionally so stay tuned.</p>
              <p className="my-5">
                To give you an idea here is my most recent blog!
              </p>
              <div>{post.content}</div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default HomePage;



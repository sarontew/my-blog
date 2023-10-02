import React, {useState, useEffect} from "react";

function AddBlog() {
  const [caption, setCaption] = useState('');
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setCaption(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await fetch('http://localhost:4000/store-caption',{
        method : 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({caption}),
      });

      if (response.ok) {
        setMessage('Caption stored successfully.');
      } else {
        setMessage('Error storing caption.');
      }
    }catch (error) {
      console.error('Error storing caption:', error);
      setMessage('Error storing caption.');
    }
  };

  const handleRetrieve = async () => {
    try {
      const response = await fetch('http://localhost:4000/get-caption');

      if (response.ok) {
        const data = await response.json();
        setMessage(`Retrieved Caption: ${data.caption}`);
      } else {
        setMessage('Error retrieving caption.');
      }
    } catch (error) {
      console.error('Error retrieving caption:', error);
      setMessage('Error retrieving caption.');
    }
  };


  return (
    <div>
    {/* <div>
      <button>Add A BLOG</button>
    </div> */}

       <div className="container-fluid">
         {/* <div className="row p-4 bg-success">
           <div className="col-3">
             <p className="display-5">Saron's Blog</p>
           </div>
           <div className="col-7"></div>
           <div className="col-2">
             <button className="btn btn-lg btn-outline-light">New</button>
           </div>
         </div> */}
         <div className="row mx-3">
          <p className="display-6">New Blog Post</p>
            <div className="col">
             <form onSubmit={handleSubmit}>
               <div>
                 <textarea type="text"
                 id="caption"
                 name="caption"
                 value={caption}
                 onChange={handleChange}
                 />
               </div>
               <button className="btn btn-lg btn-outline-dark m-4" type="submit">Submit</button>
             </form>
           </div>
           <p>{message}</p>
         </div>
       </div>
       </div>
  );
}

export default AddBlog;
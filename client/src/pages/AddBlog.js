import React, {useState, useEffect} from "react";

function AddBlog() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await fetch('http://localhost:4000/add-blog-post',{
        method : 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted:', formData);
        setFormData({ title: '', content: '', author: '' });
      } else {
        setMessage('Error storing form data');
      }
    }catch (error) {
      console.error('Error storing form data', error);
    }
  };


  return (
    <div>
       <div className="container-fluid">
         <div className="row mx-3">
          <p className="display-6">New Blog Post</p>
            <div className="col">

       <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
           </div>
           <p>{message}</p>
         </div>
       </div>
       </div>
  );
}

export default AddBlog;
import React, {useState, useEffect} from "react";
import './App.css';
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import NavBar from './components/NavBar';
import AddBlog from "./pages/AddBlog";
import ViewBlogs from "./pages/ViewBlogs";

function App() {
  const [posts, setPosts] = useState([]);
  const [caption, setCaption] = useState('');
  const [message, setMessage] = useState("");

const addNewPost = async () => {
  fetch("http://localhost:4000/posts")
  .then((res) => {
    res.json()
    if(!res.ok){
      throw new Error('Request fails: ${res.status}');
    }
    return res.json();
  })
  .then((data) =>{
    console.log(data);
    setPosts(data);
  })
  .catch((error) => {
    console.error('Fetch error:',error);
  });
}

const getPosts = async () => {
  fetch("http://localhost:4000/posts")
  .then((res) => {
    if(!res.ok){
      throw new Error('Request fails: ${res.status}');
    }
    return res.json();
  })
  //.then((data) =>)
  .catch((error) => {
    console.error('Fetch error:',error);
  });
}

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


//   return (
//     <div className="App">
//       {/* <h1>{message}</h1> */}
//       <div className="container-fluid">
//         <div className="row p-4 bg-success">
//           <div className="col-3">
//             <p className="display-5">Saron's Blog</p>
//           </div>
//           <div className="col-7"></div>
//           <div className="col-2">
//             <button className="btn btn-lg btn-outline-light">New</button>
//           </div>
//         </div>
//         <div className="row bg-secondary">
//            <div className="col">
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="caption">Caption:</label>
//                 <input type="text"
//                 id="caption"
//                 name="cpation"
//                 value={caption}
//                 onChange={handleChange}
//                 />
//               </div>
//               <button className="btn-lg" type="submit">Submit</button>
//             </form>
//             {/* <button onClick={handleRetrieve}>Retrieve Caption</button> */}
//           </div>
//           <p>{message}</p>

//         </div>
//       </div>


//       {/* <div className="container-fluid">
//         <div className="row">
//           <div className="col">
//             <h1>{message}</h1>
//           </div>
//         </div>
//       </div>
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Wow
//           Learn React
//         </a> }
//       </header> */}

//     </div>
//   );

return (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/addblog" element={<AddBlog/>}/>
      <Route path="/get-all-posts" element={<ViewBlogs/>}/>
    </Routes>
    <div>
      <ViewBlogs></ViewBlogs>
    </div>
  </Router>
);
 }

export default App;

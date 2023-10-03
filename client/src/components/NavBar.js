import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-2">
                <Link className='navbarele' to="/">Home</Link>
            </div>
            <div className="col-2">
                <Link className='navbarele' to="/addblog">Add A Blog</Link>
            </div>
            <div className="col-2">
                <Link className='navbarele' to="/get-all-posts">View Blogs</Link>
            </div>
          </div>
        </div>
    </nav>
  );
}

export default NavBar;
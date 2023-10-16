import React, { useState} from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/get-posts-by-word?word=${encodeURIComponent(searchTerm)}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.word);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data!:', error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const submitForm = () => {
    if (searchTerm) {
        fetchData();
      } else {
        setSearchResults([]); // Clear results if the search term is empty
      }
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <form onSubmit={submitForm}>
            <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            </form>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 col-md-6 offset-md-3">
            {searchResults[0]?
            <ul className="list-group">
            {searchResults.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.content}
              </li>
                ))}
            </ul>

            :<p>Nothing</p>}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ onSearch, onCuisineChange }) {
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("all");

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery, cuisine); // Call the search function with query and cuisine
  };

  const handleCuisineChange = (e) => {
    const newCuisine = e.target.value;
    setCuisine(newCuisine);
    onCuisineChange(newCuisine); // Call the cuisine change function
    onSearch(query, newCuisine); // Trigger search with updated cuisine
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-container">
        <select
          className="category-select"
          value={cuisine}
          onChange={handleCuisineChange}
        >
          <option value="all">All Cuisines</option>
          <option value="Asian">Asian</option>
          <option value="American">American</option>
          <option value="Brazilian">Brazilian</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="Korean">Korean</option>
          <option value="Lebanese">Lebanese</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Mexican">Mexican</option>
          <option value="Pakistani">Pakistani</option>
          <option value="Russian">Russian</option>
          <option value="Thai">Thai</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          value={query}
          onChange={handleChange}
        />
        <button className="search-button" disabled>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

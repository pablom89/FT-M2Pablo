import React from "react";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <div className="form-inline mx-auto mb-4">
        <input
          className="form-control ml-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <button onClick={props.onSearch} className="btn btn-rounded btn-info ml-2" >
          Search
        </button>
      </div>
    </div>
  );
}

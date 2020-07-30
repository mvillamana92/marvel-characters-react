import React from "react";

const Searcher = () => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search a character"
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">
          Search
        </button>
      </div>
    </div>
  );
};

export default Searcher;

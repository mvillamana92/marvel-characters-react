import React from "react";

const Searcher = (props) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search a character"
        onChange={props.handleChange}
        value={props.searchInput}
        onKeyDown={props.handleKeyDown}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={props.handleClick}
        >
          Search
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={props.clearSearchInput}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Searcher;

import React from "react";

const Pagination = (props) => {
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            className="page-link"
            href="#"
            aria-label="First"
            onClick={props.clickFirst}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">First</span>
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={props.clickPrevious}
          >
            <span aria-hidden="true">&lt;</span>
            <span className="sr-only">Previous</span>
          </button>
        </li>
        <li className="mx-2">
          <p className="text-center">
            Page {props.pages.pageIn} of {props.pages.totalPages}{" "}
          </p>
          <p>
            Showing {props.results.resultsIn}-{props.results.resultsOut} of{" "}
            {props.results.totalResults} results
          </p>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            href="#"
            aria-label="Next"
            onClick={props.clickNext}
          >
            <span aria-hidden="true">&gt;</span>
            <span className="sr-only">Next</span>
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            href="#"
            aria-label="Last"
            onClick={props.clickLast}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Last</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

import React, { useEffect, useState } from "react";
import getCharactersList from "../api/get-characters-list";
import Pagination from "./Pagination";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Spinner from "./Spinner";
import Searcher from "./Searcher";

const CharactersList = () => {
  const [charactersList, setCharactersList] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  const [pagination, setPagination] = useState({
    offset: "",
    limit: "",
    results: { resultsIn: "", resultsOut: "", totalResults: "" },
    pages: { pageIn: "", totalPages: "" },
  });
  const [offset, setOffset] = useState(0);
  const [results, setResults] = useState({
    resultsIn: 0,
    resultsOut: 20,
    totalResults: [],
  });
  const [pages, setPages] = useState({
    pageIn: 1,
    totalPages: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const limit = 20;
      const { data } = await getCharactersList(limit, offset, search);
      setCharactersList(data.results);
      setIsLoaded(true);
      setResults({ ...results, totalResults: data.total });
      setPages({ ...pages, totalPages: Math.round(data.total / limit) });
    };
    fetchData();
  }, [offset, search]);

  const Table = (
    <table className="table">
      <TableHeader />
      {charactersList &&
        charactersList.map((value) => {
          return <TableBody id={value.id} name={value.name} />;
        })}
    </table>
  );

  const clickFirst = () => {
    setOffset(0);

    setPages({ ...pages, pageIn: 1 });
    setResults({ ...results, resultsIn: 0, resultsOut: 20 });
  };

  const clickLast = () => {
    setOffset(results.totalResults - 20);

    setPages({ ...pages, pageIn: pages.totalPages });
    setResults({
      ...results,
      resultsIn: results.totalResults - 20,
      resultsOut: results.totalResults,
    });
  };

  const clickNext = () => {
    if (offset < results.totalResults - 20) {
      setOffset(offset + 20);
    }
    if (pages.pageIn < pages.totalPages) {
      setPages({ ...pages, pageIn: pages.pageIn + 1 });
    }
    if (results.resultsIn < results.totalResults) {
      setResults({
        ...results,
        resultsIn: results.resultsIn + 20,
        resultsOut: results.resultsOut + 20,
      });
    }
  };

  const clickPrevious = () => {
    if (offset > 0) {
      setOffset(offset - 20);
    }
    if (pages.pageIn > 0) {
      setPages({ ...pages, pageIn: pages.pageIn - 1 });
    }
    if (results.resultsIn > 20) {
      setResults({
        ...results,
        resultsIn: results.resultsIn - 20,
        resultsOut: results.resultsOut - 20,
      });
    }
  };

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleClick = (text) => {
    setSearch(text);
  };

  const clearSearchInput = () => {
    setSearchInput("");
    setSearch("");
  };

  const handleKeyDown = (event) => {
    if (event.keyCode == 13) {
      setSearch(event.target.value);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src={require("../img/MarvelLogo.svg")}
            width="200"
            height="100"
          />
        </div>
        <div className="col-6 d-flex align-items-center">
          <Searcher
            handleChange={handleChange}
            handleClick={() => handleClick(searchInput)}
            clearSearchInput={clearSearchInput}
            searchInput={searchInput}
            handleKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <h3>MARVEL CHARACTERS LIST</h3>
      </div>
      <div className="row justify-content-center">
        {isLoaded ? Table : <Spinner />}
      </div>
      <div className="row justify-content-center">
        <Pagination
          pages={pages}
          results={results}
          clickFirst={clickFirst}
          clickPrevious={clickPrevious}
          clickNext={clickNext}
          clickLast={clickLast}
        />
      </div>
    </div>
  );
};

export default CharactersList;

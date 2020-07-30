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
      resultsIn: results.totalResults - 40,
      resultsOut: results.totalResults - 20,
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

  useEffect(() => {
    const fetchData = async () => {
      const limit = 20;
      const data = await getCharactersList(limit, offset);
      const charactersListData = data.data.results;
      const total = data.data.total;
      setCharactersList(charactersListData);
      setIsLoaded(true);
      setResults({ ...results, totalResults: total });
      setPages({ ...pages, totalPages: Math.round(total / 20) });
    };
    fetchData();
  }, [offset]);

  const Table = (
    <table className="table">
      <TableHeader />
      {charactersList &&
        charactersList.map((value) => {
          return <TableBody id={value.id} name={value.name} />;
        })}
    </table>
  );

  return (
    <div>
      <h1>MARVEL CHARACTERS LIST</h1>
      <Searcher />
      {isLoaded ? Table : <Spinner />}
      <Pagination
        pages={pages}
        results={results}
        clickFirst={clickFirst}
        clickPrevious={clickPrevious}
        clickNext={clickNext}
        clickLast={clickLast}
      />
    </div>
  );
};

export default CharactersList;

import React, { useEffect, useState } from "react";
import getCharactersList from "../api/get-characters-list";
import { Link } from "react-router-dom";

const List = () => {
  const [charactersList, setCharactersList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharactersList();
      const charactersListData = data.data.results;
      setCharactersList(charactersListData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>MARVEL CHARACTERS LIST</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
          </tr>
        </thead>

        {charactersList &&
          charactersList.map((value) => {
            return (
              <tbody>
                <tr>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>
                    <Link to={"/character/" + value.id}>Details</Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default List;

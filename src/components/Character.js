import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import getUniqueCharacter from "../api/get-unique-character";

const Character = () => {
  const { id } = useParams();

  const [characterInfo, setCharacterInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUniqueCharacter(id);
      const uniqueCharacterData = data.data.results[0];
      //console.log(uniqueCharacterData);
      setCharacterInfo(uniqueCharacterData);
    };
    fetchData();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {characterInfo && (
          <tr>
            <td>{characterInfo.id}</td>
            <td>{characterInfo.name}</td>
            <td>
              <img
                src={
                  characterInfo.thumbnail.path +
                  "." +
                  characterInfo.thumbnail.extension
                }
                width="200"
                height="200"
              />
            </td>
            <td>
              <Link to="/character">Back to list</Link>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Character;

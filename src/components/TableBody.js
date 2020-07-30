import React from "react";
import { Link } from "react-router-dom";

const TableBody = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>
          <Link to={"/character/" + props.id}>Details</Link>
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;

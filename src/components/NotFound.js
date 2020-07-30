import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>PAGE NOT FOUND</h1>
      <Link to="/">Volver a la página de inicio</Link>
    </div>
  );
};

export default NotFound;

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Volver a la página de inicio</Link>
    </div>
  );
};

export default NotFound;

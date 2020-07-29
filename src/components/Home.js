import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>MARVEL CHARACTERS</h1>
      <Link to="/character">See characters list</Link>
    </div>
  );
};

export default Home;

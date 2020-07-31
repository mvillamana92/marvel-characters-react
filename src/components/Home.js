import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="row">
      <div className="col-12">
        <img src={require("../img/MarvelLogo.svg")} width="300" height="200" />
      </div>
      <div className="col-12">
        <Link to="/character">See characters list</Link>
      </div>
    </div>
  );
};

export default Home;

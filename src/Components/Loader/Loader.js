import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner-border" role="status">
        <h1 className="visually-hidden">Loading...</h1>
      </div>
    </div>
  );
};

export default Loader;

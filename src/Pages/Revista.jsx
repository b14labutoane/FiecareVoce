import React from "react";
import "./Revista.css";

const Revista = () => {
  return (
    <div className="revista-wrapper">
      <div className="revista-container">
        <div className="revista-block">
          <h2 className="revista-title">Revista 1</h2>
          <iframe
            src="/revista.pdf"
            title="Revista 1"
            className="pdf-iframe"
          />
        </div>
        <div className="revista-block">
          <h2 className="revista-title">Revista 2</h2>
          <iframe
            src="/revista2.pdf"
            title="Revista 2"
            className="pdf-iframe"
          />
        </div>
      </div>
    </div>
  );
};

export default Revista;

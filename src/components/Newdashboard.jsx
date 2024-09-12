import React from "react";
import "../components/Newdashboard.css";

function Newdashboard() {
  return (
    <main>
      <div className="row">
        <div className="col-md-2 bg-dark"></div>
        <div className="col-md-10 bg-secondary">
          <div className="row">
            <div className="col-md-12 bg-warning navbarcontent"></div>
          </div>
          <div className="row">
            <div className="col-md-12 bg-info bodycontent"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Newdashboard;

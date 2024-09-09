import React from "react";
import Sidebar from "./Sidebar";
import "../components/Dashboard.scss";

import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ImBell } from "react-icons/im";
import Body from "./Body";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="row  bg-white text-dark">
        <div className="col-md-2 fixed-sidebar">

          <Sidebar />
        </div>
        <div className="col-md-10" style={{marginLeft:'313px',marginTop:'21px'}}>
          <Container className="fixed-top fixed-style">
            <Row>
              <Col>
                {" "}
                <input
                  type="text"
                  className="rounded-pill shadow-lg p-3 mb-5 bg-body-tertiary rounded media "
                  placeholder="Search"
                  style={{ width: "65%", margin: "62px 20px" }}
                ></input>
              </Col>
              <Col className="d-flex flex-wrap">
                <img src={logo} className="logo " ></img>{" "}
                <ImBell size={25} className="bell-icon" />
              </Col>
            </Row>
          </Container>
          <div className="header">
            <h6>{formattedDate}</h6>
            <br />
            <br /> <h2> welcome {user.username}!</h2>
            <p className="mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus iste possimus consectetur t ipsa doloribus ipsum culpa
              veniam beatae amet harum delectus!
            </p>
          </div>
          <br />
          <Body />
        </div>
      </div>

     
    </>
  );
}

export default Dashboard;

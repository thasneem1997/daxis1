import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FcBarChart, FcFinePrint, FcPieChart } from "react-icons/fc";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import "../components/Body.scss";

function Body() {
  return (
    <div>
      <h4>Finance</h4>
      <div className="row gx-3">
        <div className="col-md-3">
          <Card>
            <FcBarChart size={150} />

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <FcFinePrint size={150} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <FcPieChart size={150} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3">
          <div className="instructor-header">
            {" "}
            <h4 style={{ marginTop: "-30px" }}>Course Instructors</h4>
            <h6 className="seeall">See all</h6>
          </div>

          <div className="img-container">
            <img
              src={img1}
              className="rounded-circle "
              style={{
                height: "110px",
                width: "110px",
                border: "4px solid #34a0e0",
              }}
            />

            <img
              src={img2}
              className="rounded-circle"
              style={{
                height: "110px",
                width: "110px",
                border: "4px solid #34a0e0",
              }}
            />

            <img
              src={img3}
              className="rounded-circle "
              style={{
                height: "110px",
                width: "110px",
                border: "4px solid #34a0e0",
              }}
            />
          </div>
        </div>
      </div>
      <br /> <br />
      <h4>Enrolled Courses</h4>
      <div className="container"></div>
      <div className="row">
        <div className="col-md-4">
          <Card
            className="shadow-sm p-3 mb-5 "
            style={{ backgroundColor: "#b2dbf5" }}
          >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" style={{ width: "10rem" }}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-5">
          <Card className="shadow-sm p-3 mb-5"  style={{ backgroundColor: "#b2dbf5" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" style={{ width: "10rem" }}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3">
        
        <h4  className="fs-5" style={{marginTop:'-142px'}}>Daily Notice</h4>
        <h6 className="seeall" style={{marginLeft:'308px'}}>See all</h6>
          <Card style={{ marginTop: "12px", border: "1px solid #c5baba",width:'350px' }} className="card3">
         
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div><br/><br/>
    </div>
    
  );
}

export default Body;

import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "../components/sidebar.scss";
import { IoMdNotifications, IoIosSettings } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdOutlineSearch } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { FcButtingIn } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";

function Sidebar() {
  const user = JSON.parse(localStorage.getItem("loggedInUser")); 
  const [isMenuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = (e) => {
    setMenuOpen(!isMenuOpen); 
  };

  return (
    <div
      className="shadow-sm p-4 sidebar rounded"
      style={{ marginTop: "28px", marginLeft: "20px" }}
    >
      <div className="header-container">
        <FcButtingIn size={40} />
        <h5 style={{ marginTop: "10px" }}>{user?.username}</h5>
        <GiHamburgerMenu
          style={{ marginTop: "-4px", marginLeft: "19px" }}
          className="icon-menu"
          size={50}
          onClick={toggleMenu}
        />
      </div>

      {/* ListGroup for Main Menu */}
      <ListGroup className={`list-group list-group-flush mt-5 ${isMenuOpen ? "show-menu" : "hide-menu"}`}>
        <h5>MAIN MENU</h5>
        <ListGroup.Item as="li" className="list-style">
          <IoMdNotifications size={20} />
          &nbsp; Notification
        </ListGroup.Item>
        <ListGroup.Item as="li" className="list-style">
          <IoIosSettings size={20} />
          &nbsp; Settings
        </ListGroup.Item>
        <ListGroup.Item as="li" className="list-style">
          <SlCalender size={13} />
          &nbsp; Calendar
        </ListGroup.Item>
        <ListGroup.Item as="li" className="list-style">
          <MdOutlineSearch size={20} />
          &nbsp; Search
        </ListGroup.Item>
      </ListGroup>

      {/* ListGroup for Onboarding */}
      <ListGroup className={`list-group list-group-flush mt-5 ${isMenuOpen ? "show-menu" : "hide-menu"}`}>
        <h5>ONBOARDING</h5>
        <ListGroup.Item as="li" className="list-style">
          <IoMdNotifications size={20} />
          &nbsp; Notification
        </ListGroup.Item>
        <ListGroup.Item as="li" className="list-style">
          <IoIosSettings size={20} />
          &nbsp; Settings
        </ListGroup.Item>
        <ListGroup.Item as="li" className="list-style">
          <SlCalender size={13} />
          &nbsp; Calendar
        </ListGroup.Item>
        <ListGroup.Item as="li" className="list-style">
          <MdOutlineSearch size={20} />
          &nbsp; Search
        </ListGroup.Item>
        <ListGroup.Item as="li" className="list-style" style={{ marginTop: "228px" }}>
          <IoLogOut size={25} />
          &nbsp; Logout
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Sidebar;

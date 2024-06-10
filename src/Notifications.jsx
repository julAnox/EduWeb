import React from "react";
import { Link } from "react-router-dom";
import "./style/notifications.css";

function Notifications() {
  return (
    <>
      <div className="navbar-profile">
        <Link to="/posts">
          <h2>Home</h2>
        </Link>
        <Link to="/timetable">
          <h2>Timetable</h2>
        </Link>
        <Link to="/notifications">
          <h2>Notifications</h2>
        </Link>
        <Link to="/profile">
          <h2>Profile</h2>
        </Link>
      </div>
      <footer>
        <div className="footer-content-profile">
          <div className="links">
            <p>Home</p>
            <p>Schedule</p>
            <p>Contacts</p>
          </div>
          <p>Created by Nikita Ermolenko</p>
        </div>
        <div className="footer-bottom-profile">
          <p>© 2024 All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Notifications;

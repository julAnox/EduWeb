import React from "react";
import { Link } from "react-router-dom";
import "./style/notifications.css";

function Notifications() {
  return (
    <div className="pp">
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
      <div className="uvedi"></div>
      <footer>
        <div className="footer-content-profile">
          <div className="links">
            <Link to="/posts">
              <p>Home</p>
            </Link>
            <Link to="/timetable">
              <p>Timetable</p>
            </Link>
            <a href="https://t.me/deqoia">
              <p>Contacts</p>
            </a>
          </div>
          <p>Created by Nikita Ermolenko</p>
        </div>
        <div className="footer-bottom-profile">
          <p>© 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Notifications;

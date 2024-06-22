import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style/notifications.css";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [readNotifications, setReadNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://193.168.49.29:8080/api/posts/")
      .then((response) => response.json())
      .then((data) => {
        setNotifications(data);
      })
      .catch((error) => console.error("Error fetching notifications:", error));
  }, []);

  const handleNotificationClick = (postId) => {
    if (!readNotifications.includes(postId)) {
      setReadNotifications([...readNotifications, postId]);
    }
    navigate(`/posts/${postId}`);
  };

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleDateString("en-GB");
    const formattedTime = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} ${formattedTime}`;
  };

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
      <div className="uvedi">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification-item ${
              readNotifications.includes(notification.id) ? "read" : "unread"
            }`}
            onClick={() => handleNotificationClick(notification.id)}
          >
            <h3>{notification.title}</h3>
            <p>{formatDateTime(notification.date_posted)}</p>
          </div>
        ))}
      </div>
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

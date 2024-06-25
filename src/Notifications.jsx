import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import "./style/notifications.css";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [readNotifications, setReadNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedNotifications =
      JSON.parse(localStorage.getItem("notifications")) || [];
    setNotifications(storedNotifications);
  }, []);

  useEffect(() => {
    const storedReadNotifications =
      JSON.parse(localStorage.getItem("readNotifications")) || [];
    setReadNotifications(storedReadNotifications);
  }, []);

  const handleNotificationClick = (postId) => {
    if (!readNotifications.includes(postId)) {
      const updatedReadNotifications = [...readNotifications, postId];
      setReadNotifications(updatedReadNotifications);
      localStorage.setItem(
        "readNotifications",
        JSON.stringify(updatedReadNotifications)
      );
    }

    navigate(`/posts/${postId}`);
  };

  const handleNotificationDelete = (postId) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== postId
    );
    setNotifications(updatedNotifications);
    localStorage.setItem("notifications", JSON.stringify(updatedNotifications));
  };

  const trailingActions = (postId) => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => handleNotificationDelete(postId)}
      >
        <div className="delete-action">Delete</div>
      </SwipeAction>
    </TrailingActions>
  );

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
        <div className="notification-count">
          <h3>
            Unread Notifications:{" "}
            {
              notifications.filter(
                (notification) => !readNotifications.includes(notification.id)
              ).length
            }
          </h3>
        </div>
        <SwipeableList>
          {notifications
            .filter(
              (notification) => !readNotifications.includes(notification.id)
            )
            .map((notification) => (
              <SwipeableListItem
                key={notification.id}
                trailingActions={trailingActions(notification.id)}
              >
                <div
                  className="notification-item unread"
                  onClick={() => handleNotificationClick(notification.id)}
                >
                  <h3>{notification.title}</h3>
                  <p>{formatDateTime(notification.date_posted)}</p>
                </div>
              </SwipeableListItem>
            ))}
        </SwipeableList>
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

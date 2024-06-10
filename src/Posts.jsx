import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://193.168.49.29:8080/api/posts/")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

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
    <>
      <div className="navbar-posts-custom">
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
      <div className="search-posts-custom">
        <input type="text" placeholder="Search here..." />
      </div>
      <div className="main-posts-custom">
        <div className="all-posts-custom">
          <img
            src="https://avatars.mds.yandex.net/get-altay/933207/2a000001617229fd7d076a20e92a71d88ff5/L_height"
            alt="Institution"
          />
          <div className="info-posts-custom">
            <h2>Name of educational institution:</h2>
            <p>"MGKCT"</p>
            <h2>Educational institution address:</h2>
            <p>Kazintsa 91/3</p>
            <h2>Specialities:</h2>
            <p>Programming technician, electrical technician</p>
          </div>
        </div>
        <div className="swap-pages-posts-custom">
          <Link to="/posts">
            <h2>Posts</h2>
          </Link>
          <p>|</p>
          <Link to="/teachers">
            <h2>Teachers</h2>
          </Link>
        </div>
        <div className="posts-all-posts-custom">
          {posts.map((post) => (
            <div key={post.id} className="post-posts-custom">
              {post.img_path && (
                <div className="photo-posts-custom">
                  <img
                    src={post.img_path}
                    alt={post.title}
                    className="post_img"
                  />
                </div>
              )}
              <h2>{post.title}</h2>
              <div className="text-posts-custom">
                <p>{post.description}</p>
                <p className="date">Date: {formatDateTime(post.date_posted)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer-posts-custom">
        <div className="footer-content-posts-custom">
          <div>
            <p>Home</p>
            <p>Schedule</p>
            <p>Contacts</p>
          </div>
          <p>Created by Nikita Ermolenko</p>
        </div>
        <div className="footer-bottom-posts-custom">
          <p>© 2024 All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Posts;

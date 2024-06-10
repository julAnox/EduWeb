import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./style/posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const postRefs = useRef({});

  useEffect(() => {
    fetch("http://193.168.49.29:8080/api/posts/")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  useEffect(() => {
    if (searchQuery.length >= 3) {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [searchQuery, posts]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePostClick = (postId) => {
    const postElement = postRefs.current[postId];
    postElement.scrollIntoView({ behavior: "smooth", block: "center" });

    postElement.classList.add("highlight");
    setTimeout(() => {
      postElement.classList.remove("highlight");
    }, 1000);

    setSearchQuery("");
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
        <input
          type="text"
          placeholder="Search here..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {searchQuery.length >= 3 && (
          <div className="search-suggestions">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="suggestion"
                onClick={() => handlePostClick(post.id)}
              >
                {post.title}
              </div>
            ))}
          </div>
        )}
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
            <div
              key={post.id}
              className="post-posts-custom"
              ref={(el) => (postRefs.current[post.id] = el)}
            >
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
            <Link to="/timetable">
              <p>Timetable</p>
            </Link>
            <a href="https://t.me/deqoia">
              <p>Contacts</p>
            </a>
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

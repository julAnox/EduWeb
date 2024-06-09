import React from "react";
import { Link } from "react-router-dom";
import "./style/posts.css";

function Posts() {
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
          <img src="https://avatars.mds.yandex.net/get-altay/933207/2a000001617229fd7d076a20e92a71d88ff5/L_height" />
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
          <div className="post-posts-custom">
            <div className="photo-posts-custom"></div>
            <h2>News</h2>
            <div className="text-posts-custom">
              <p>
                On June 3 and 4, 2024, director G.V. Kozel held meetings with
                college students on the topics “Prevention of crimes and
                offenses” and “Security.” Georgy Vladimirovich explained the
                responsibility for inciting racial, national, religious or other
                social hatred; familiarized students with Article 19.10 of the
                Code of the Republic of Belarus on administrative offenses.
              </p>
              <button className="button">Show post</button>
            </div>
          </div>
          <div className="post-posts-custom">
            <div className="photo-posts-custom"></div>
            <h2>News</h2>
            <div className="text-posts-custom">
              <p>
                On June 3 and 4, 2024, director G.V. Kozel held meetings with
                college students on the topics “Prevention of crimes and
                offenses” and “Security.” Georgy Vladimirovich explained the
                responsibility for inciting racial, national, religious or other
                social hatred; familiarized students with Article 19.10 of the
                Code of the Republic of Belarus on administrative offenses.
              </p>
              <button className="button">Show post</button>
            </div>
          </div>
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

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/teachers.css";

function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("https://hostnes.space/api/get_teachers/")
      .then((response) => response.json())
      .then((data) => setTeachers(data))
      .catch((error) => console.error("Error fetching teachers:", error));
  }, []);

  return (
    <>
      <div className="navbar-teachers">
        <Link to="/posts">
          <h2>Home</h2>
        </Link>
        <Link to="/timetable">
          <h2>Timetable</h2>
        </Link>
        <h2>Notifications</h2>
        <Link to="/profile">
          <h2>Profile</h2>
        </Link>
      </div>
      <div className="search-teachers">
        <input type="text" placeholder="Search here..." />
      </div>
      <div className="main-teachers">
        <div className="all-teachers">
          <img src="https://avatars.mds.yandex.net/get-altay/933207/2a000001617229fd7d076a20e92a71d88ff5/L_height" />
          <div className="info-teachers">
            <h2>Name of educational institution:</h2>
            <p>"MGKCT"</p>
            <h2>Educational institution address:</h2>
            <p>Kazintsa 91/3</p>
            <h2>Specialities:</h2>
            <p>Programming technician, electrical technician</p>
          </div>
        </div>
        <div className="swap-pages-teachers">
          <Link to="/posts">
            <h2>Posts</h2>
          </Link>
          <p>|</p>
          <Link to="/teachers">
            <h2>Teachers</h2>
          </Link>
        </div>
        <div className="teachers-grid">
          {teachers.map((teacher) => (
            <div className="prepod-teachers" key={teacher.id}>
              <div className="ava-teachers">
                <img src={teacher.img_path} alt={teacher.name} />
              </div>
              <div className="edu-teachers">
                <h2>{teacher.name}</h2>
                <Link to="/Timetable">
                  <button className="button-teachers">View schedule</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <div className="footer-content-teachers">
          <div className="links1">
            <p>Home</p>
            <p>Schedule</p>
            <p>Contacts</p>
          </div>
          <p>Created by Nikita Ermolenko</p>
        </div>
        <div className="footer-bottom-teachers">
          <p>© 2024 All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Teachers;

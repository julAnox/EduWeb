import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./style/teachers.css";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const teacherRefs = useRef({});

  useEffect(() => {
    fetch("http://193.168.49.29:8080//api/get_teachers/")
      .then((response) => response.json())
      .then((data) => {
        setTeachers(data);
        setFilteredTeachers(data);
      })
      .catch((error) => console.error("Error fetching teachers:", error));
  }, []);

  useEffect(() => {
    if (searchQuery.length >= 3) {
      const filtered = teachers.filter((teacher) =>
        teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTeachers(filtered);
    } else {
      setFilteredTeachers(teachers);
    }
  }, [searchQuery, teachers]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTeacherClick = (teacherId) => {
    const teacherElement = teacherRefs.current[teacherId];
    teacherElement.scrollIntoView({ behavior: "smooth", block: "center" });

    teacherElement.classList.add("highlight");
    setTimeout(() => {
      teacherElement.classList.remove("highlight");
    }, 1000);

    setSearchQuery("");
  };

  return (
    <>
      <div className="navbar-teachers">
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
      <div className="search-teachers">
        <input
          type="text"
          placeholder="Search here..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {searchQuery.length >= 3 && (
          <div className="search-suggestions-teachers">
            {filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="suggestion"
                onClick={() => handleTeacherClick(teacher.id)}
              >
                {teacher.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="main-teachers">
        <div className="all-teachers">
          <img
            src="https://avatars.mds.yandex.net/get-altay/933207/2a000001617229fd7d076a20e92a71d88ff5/L_height"
            alt="Institution"
          />
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
            <div
              className="prepod-teachers"
              key={teacher.id}
              ref={(el) => (teacherRefs.current[teacher.id] = el)}
            >
              <div className="ava-teachers">
                <img
                  src={teacher.img_path}
                  alt={teacher.name}
                  className="ava"
                />
              </div>
              <div className="edu-teachers">
                <h2>{teacher.name}</h2>
                <Link
                  to={`/timetable?teacher=${encodeURIComponent(teacher.name)}`}
                >
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
        <div className="footer-bottom-teachers">
          <p>© 2024 All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Teachers;

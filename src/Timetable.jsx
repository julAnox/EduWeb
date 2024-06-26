import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style/timetable.css";

function Timetable() {
  const groupApiUrl = "http://193.168.49.29:8080/api/get_groups_data/";
  const teacherApiUrl =
    "http://193.168.49.29:8080/api/get_week_data_by_teacher";
  const date = new Date();
  const options = { weekday: "long" };
  const dayOfWeek = date.toLocaleString("en-US", options);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let dayN = 0;
  for (let i = 0; i < days.length; i++) {
    if (days[i] === dayOfWeek) {
      dayN = i;
      break;
    }
  }

  const [groupNumber, setGroupNumber] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [scheduleText, setScheduleText] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const teacher = params.get("teacher");
    if (teacher) {
      const firstName = teacher.split(" ")[0];
      setTeacherName(firstName);
    }
  }, [location]);

  useEffect(() => {
    const teacherInput = document.querySelector("#teacherNameInput");

    if (teacherInput) {
      teacherInput.addEventListener("change", updateUrl);
    }

    return () => {
      if (teacherInput) {
        teacherInput.removeEventListener("change", updateUrl);
      }
    };
  }, []);

  const updateUrl = (e) => {
    const text = e.target.value.trim();
    if (text) {
      const encodedText = encodeURIComponent(text);
      window.location.hash = `#${encodedText}`;
    }
  };

  async function getGroupSchedule(groupNumber, da) {
    const response = await fetch(groupApiUrl);
    const data = await response.json();
    data.forEach((group, index) => {
      Object.keys(group).forEach((item) => {
        if (item === groupNumber) {
          let schedule;
          if (da === 0) {
            schedule = formatSchedule(data[index][groupNumber][dayN]);
          } else {
            schedule = formatScheduleForWeek(data[index][groupNumber]);
          }
          setScheduleText(schedule);
        }
      });
    });
  }

  async function getTeacherSchedule(teacherName, da) {
    try {
      const response = await fetch(
        `${teacherApiUrl}/${encodeURIComponent(teacherName)}`
      );
      const data = await response.json();
      if (data && data.length > dayN && data[dayN]) {
        let schedule;
        if (da === 0) {
          schedule = formatSchedule(data[dayN]);
        } else {
          schedule = formatScheduleForWeek(data);
        }
        setScheduleText(schedule);
      } else {
        setScheduleText("Расписание отсутствует");
      }
    } catch (error) {
      console.error("Ошибка при получении расписания учителя:", error);
      setScheduleText("Ошибка при получении расписания");
    }
  }

  function formatSchedule(schedule) {
    if (!schedule) return "Расписание отсутствует";
    const { info, lessons } = schedule;
    let formatted = `${info.week_day}, ${info.day}\n`;
    lessons.forEach((lesson) => {
      if (lesson.title !== "-" && lesson.cabinet !== "-") {
        const titles = lesson.title
          .split("\n")
          .map((t) => t.trim())
          .join("\n  - ");
        const cabinets = lesson.cabinet
          .split(" ")
          .map((c) => c.trim())
          .join(" ");
        formatted += `Пара ${lesson.number_lesson}: \n  - ${titles}\n  Аудитория: ${cabinets}\n\n`;
      }
    });
    if (formatted === `${info.week_day}, ${info.day}\n`) {
      formatted += "Нет пар\n";
    }
    return formatted;
  }

  function formatScheduleForWeek(weekSchedule) {
    let formatted = "";
    weekSchedule.forEach((daySchedule) => {
      formatted += formatSchedule(daySchedule);
      formatted += "\n=========================\n\n";
    });
    return formatted;
  }

  return (
    <>
      <div className="navbar-timetable">
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
      <div className="day-week">
        <h2>Timetable for groups or teachers</h2>
        <div className="all">
          <div className="group-number">
            <h2>Timetable for groups</h2>
            <input
              type="text"
              id="groupNumberInput"
              onChange={(e) => setGroupNumber(e.target.value)}
            />
            <button
              id="groupParseButton"
              onClick={() => getGroupSchedule(groupNumber, 0)}
            >
              Day
            </button>
            <button
              id="groupParseButton1"
              onClick={() => getGroupSchedule(groupNumber, 1)}
            >
              Week
            </button>
          </div>
          <div className="name-teacher">
            <h2>Timetable for teachers</h2>
            <input
              type="text"
              id="teacherNameInput"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
            />
            <button
              id="teacherParseButton3"
              onClick={() => getTeacherSchedule(teacherName, 0)}
            >
              Day
            </button>
            <button
              id="teacherParseButton4"
              onClick={() => getTeacherSchedule(teacherName, 1)}
            >
              Week
            </button>
          </div>
        </div>
        <div className="timetable-results">
          <div className="group-schedule">
            <textarea
              id="outputTextField"
              value={scheduleText}
              readOnly
            ></textarea>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <div>
            <Link to="/posts">
              <p>Home</p>
            </Link>
            <p>Timetable</p>
            <a href="https://t.me/deqoia">
              <p>Contacts</p>
            </a>
          </div>
          <p>Created by Nikita Ermolenko</p>
        </div>
        <div className="footer-bottom">
          <p>© 2024 All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Timetable;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style/profile.css";

function Profile() {
  const [imageFile, setImageFile] = useState(null);
  const [imageSrc, setImageSrc] = useState("mgkct.png");
  const [userData, setUserData] = useState({
    id: null, // Add an ID field to identify the user profile
    name: "",
    surname: "",
    father_name: "",
    group: "",
    education_institution: "",
    img_path: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
      if (storedUserData.img_path) {
        setImageSrc(storedUserData.img_path);
      }
    }
  }, []);

  function loadImage(event) {
    const file = event.target.files[0];
    setImageFile(file);
    setImageSrc(URL.createObjectURL(file));
  }

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("surname", userData.surname);
      formData.append("father_name", userData.father_name);
      formData.append("group", userData.group);
      formData.append("education_institution", userData.education_institution);
      if (imageFile) {
        formData.append("img_path", imageFile);
      }

      let url = "http://193.168.49.29:8080/api/users/";
      let method = "POST";

      if (userData.id) {
        url += userData.id + "/";
        method = "PUT";
      }

      const response = await fetch(url, {
        method: method,
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to save profile: ${errorText}`);
      }

      const responseData = await response.json();
      localStorage.setItem("userData", JSON.stringify(responseData));

      navigate("/profile"); // Ensure navigation to the profile page after saving
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

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
        <h2>Profile</h2>
      </div>
      <div className="settings-profile">
        <h2>Profile information</h2>
        <h2 className="qq">Profile picture</h2>
        <div className="photo-profile">
          <div className="image-upload">
            <img id="preview" src={imageSrc} alt="your image" />
            <input
              className="img-input"
              type="file"
              id="profile-pic"
              name="img"
              accept="image/*"
              onChange={loadImage}
            />
          </div>
          <div className="type">
            <h2>
              Name: <span>{userData.name}</span>
            </h2>
            <h2>
              Surname: <span>{userData.surname}</span>
            </h2>
            <h2>
              Father's name: <span>{userData.father_name}</span>
            </h2>
            <h2>
              Educational institution:{" "}
              <span>{userData.education_institution}</span>
            </h2>
            <h2>
              Group: <span>{userData.group}</span>
            </h2>
          </div>
        </div>
        <button className="btn_settings" onClick={handleSubmit}>
          Apply
        </button>
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
    </>
  );
}

export default Profile;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/profile.css";

function Profile() {
  const [imageSrc, setImageSrc] = useState("mgkct.png");

  function loadImage(event) {
    const file = event.target.files[0];
    setImageSrc(URL.createObjectURL(file));
  }

  return (
    <>
      <div className="navbar-profile">
        <Link to="/posts">
          <h2>Home</h2>
        </Link>
        <Link to="/timetable">
          <h2>Timetable</h2>
        </Link>
        <h2>Notifications</h2>
        <h2>Profile</h2>
      </div>
      <div className="search-profile">
        <input type="text" placeholder="Search here..." />
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
              Name:<span> Miroslav</span>
            </h2>

            <h2>
              Surname:<span> Lapanik</span>
            </h2>

            <h2>
              Fathers name:<span> Alexeevich</span>
            </h2>

            <h2>
              Educational institution:<span> MGKCT</span>
            </h2>

            <h2>
              Group:<span> 65TP</span>
            </h2>
          </div>
        </div>
        <button className="btn_settings">Apply</button>
      </div>
      <footer>
        <div className="footer-content-profile">
          <div className="links">
            <p>Home</p>
            <p>Schedule</p>
            <p>Contacts</p>
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

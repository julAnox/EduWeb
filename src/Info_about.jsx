import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/info_about.css";

function InfoAbout() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [group, setGroup] = useState("");
  const [educationInstitution, setEducationInstitution] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      name: name,
      surname: surname,
      father_name: fatherName,
      group: group,
      education_institution: educationInstitution,
    };

    console.log("Submitting user data:", userData);

    try {
      const response = await fetch("http://193.168.49.29:8080/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to continue registration: ${errorText}`);
      }

      localStorage.setItem("userData", JSON.stringify(userData));

      navigate("/profile");
    } catch (error) {
      console.error("Error continuing registration:", error);
    }
  };

  return (
    <div className="info-about-main">
      <h2 className="info-about-up">Continue registration</h2>
      <form className="info-about-form" onSubmit={handleSubmit}>
        <div className="info-about-mid">
          <p>Name:</p>
          <input
            type="text"
            className="info-about-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <p>Surname:</p>
          <input
            type="text"
            className="info-about-input"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
          <p>Father's name:</p>
          <input
            type="text"
            className="info-about-input"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            required
          />
          <p>Enter your group:</p>
          <input
            type="text"
            className="info-about-input"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            required
          />
          <p>Enter the name of the educational institution:</p>
          <input
            type="text"
            className="info-about-input"
            value={educationInstitution}
            onChange={(e) => setEducationInstitution(e.target.value)}
            required
          />
        </div>
        <div className="info-about-btn">
          <button type="submit" className="info-about-button">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default InfoAbout;

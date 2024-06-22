import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teachers from "./Teachers";
import Posts from "./Posts";
import Timetable from "./Timetable";
import Login from "./Login";
import Signup from "./Signup";
import Infoabout from "./Infoabout";
import Success from "./Success";
import Profile from "./Profile";
import Notifications from "./Notifications";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/infoabout" element={<Infoabout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/posts/:postId?" element={<Posts />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teachers from "./Teachers";
import Posts from "./Posts";
import Timetable from "./Timetable";
import Log_in from "./Log_in";
import Sign_up from "./Sign_up";
import Info_about from "./Info_about";
import Success from "./Success";
import Profile from "./Profile";
import Notifications from "./Notifications";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Sign_up />} />
          <Route path="/log_in" element={<Log_in />} />
          <Route path="/sign_up" element={<Sign_up />} />
          <Route path="/info_about" element={<Info_about />} />
          <Route path="/success" element={<Success />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import Courses from './pages/Courses';

import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import StudentTools from './pages/StudentTools';
import Success from './pages/Success';
import Teaching from './pages/Teaching';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/teaching-example" element={<Teaching />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/student-tools" element={<StudentTools />} />
        <Route path="/success" element={<Success />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs';

import Home from './pages/Home';
import StudentTools from './pages/StudentTools';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="student-tools" element={<StudentTools />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}
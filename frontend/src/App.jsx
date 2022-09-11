import { React, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Project from './Pages/Project/Project';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  const [LinkChange, setLinkChange] = useState(true);

  return (
    <BrowserRouter>
      <Header LinkChange={LinkChange} setLinkChange={setLinkChange} />
      <Routes>
        <Route
          path="/"
          element={
            <Home LinkChange={LinkChange} setLinkChange={setLinkChange} />
          }
        />
        <Route
          path="/project"
          element={<Project setLinkChange={setLinkChange} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

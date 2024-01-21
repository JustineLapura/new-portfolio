import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import About from "./components/About";
import Courses from "./components/Courses";
import Shop from "./components/Shop";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

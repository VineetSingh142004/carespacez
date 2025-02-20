import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;

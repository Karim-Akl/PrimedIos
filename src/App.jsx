import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Footer from './components/layout/footer/footer';
import Header from './components/layout/header/header';

// Import Pages
import Home from './Pages/home/home';
import About from './Pages/about/about';
import Contact from './Pages/contact/contact';
import NotFound from './Pages/not-found/not-found';
import ErrorPage from './Pages/error-page/error-page';
import Services from './Pages/services/services';

// Import Icons (if used)
import Icons from "./components/icons/icons";

// Import Global Styles
import './App.css';
import "animate.css";

function App() {
  return (
    <div>
      <Router>

        <Header/> 
        {/* Define Routes */}
          <Icons />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/error-page" element={<ErrorPage />} />
            <Route path="/services" element={<Services />} />
          </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OurWorks from "./Components/OurWorks";
import About from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";


function App() {
  return (

      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-works" element={<OurWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contactus" element={<Contactus/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

  );
}

export default App;

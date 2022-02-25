import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OurWorks from "./Components/OurWorks";
import Footer from "./Components/Footer";

function App() {
  return (

      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-works" element={<OurWorks />} />
        </Routes>
        <Footer />
      </BrowserRouter>

  );
}

export default App;

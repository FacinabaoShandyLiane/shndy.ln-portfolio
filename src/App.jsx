import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Shandy from "./pages/Shandy";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F8F3FF] overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/shandy" element={<Shandy />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

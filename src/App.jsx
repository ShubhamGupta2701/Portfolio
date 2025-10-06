import { Introduction } from "./components/Introduction";
import { Projects } from "./pages/Projects";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div className="h-screen bg-neutral-50">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
            
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App;
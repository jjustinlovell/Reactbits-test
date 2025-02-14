import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home";
import Gaz from "./Gaz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gaz" element={<Gaz/>}/>
      </Routes>
    </Router>
  );
}

export default App;

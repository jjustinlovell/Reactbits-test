import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NewHome from "./NewHome";
import Gaz from "./Gaz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/Gaz" element={<Gaz/>}/>
      </Routes>
    </Router>
  );
}

export default App;

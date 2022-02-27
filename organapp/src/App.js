import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import DonorHomePage from "./pages/DonorHomePage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/register" element={<Registration />} />
          <Route exact path="/donorHomePage" element={<DonorHomePage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

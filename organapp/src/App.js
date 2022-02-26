import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

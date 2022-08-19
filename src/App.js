import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
      <>
      <Router>
        <Routes path="/auth" element>       {/* layout for Login, Register, Forgot password */}
          <Route path="/login" element/>
        </Routes>
      </Router>
      </>
    )
}

export default App;

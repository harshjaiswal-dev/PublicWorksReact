import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IssueForm from "./pages/IssueForm/IssueForm";

function App() {
  return (
    <>
      <div>
        <Router>
          <nav>
            <Link to="/issue">Report an Issue</Link>
          </nav>

          <Routes>
            <Route path="/issue" element={<IssueForm />} />
          </Routes>
        </Router>
      </div>    
    </>
  )
}

export default App

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard.jsx";
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ClassDetails from './components/ClassDetails.jsx';
import LecturePage from './pages/LecturePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/class/:classId" element={<ClassDetails />} />
        <Route path="/session/:sessionId" element={<LecturePage />} />
      </Routes>
    </Router>
  );
}

export default App;

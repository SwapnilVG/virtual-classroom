import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import ClassDetails from './components/ClassDetails.js';
import LecturePage from './pages/LecturePage.js';

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

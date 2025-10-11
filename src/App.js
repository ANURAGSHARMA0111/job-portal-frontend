import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext"; // 👈 yeh add karo

import AICareerAdvisor from './components/AICareerAdvisor';
import Home from "./pages/Home";
import JobDetailsPage from "./pages/JobDetailsPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import ResumeBuilder from "./pages/ResumeBuilder";
import AIJobRecommendations from "./pages/AIJobRecommendations";
import JobPage from "./pages/JobPage"; 
import TestAPI from "TestAPI";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/register", "/reset-password"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100">
        {!shouldHideNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetailsPage />} />
               <Route path="/jobs" element={<JobPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/career-advisor" element={<AICareerAdvisor />} />
          <Route path="/ai-job-recommendations" element={<AIJobRecommendations />} />
          <Route path="/test" element={<TestAPI />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;

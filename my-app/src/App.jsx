import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Export from "./pages/Export";
import Dashboard from "./pages/Dashboard";
import Advisory from "./pages/Advisory";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/export" element={<Export />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

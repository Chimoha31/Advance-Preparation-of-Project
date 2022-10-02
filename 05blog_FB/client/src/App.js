import React from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Resister from "./pages/resister/Resister";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const user = false;

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/resister" element={user ? <Home /> : <Resister />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Resister />} />
        <Route path="/settings" element={user ? <Settings /> : <Resister />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
};

export default App;
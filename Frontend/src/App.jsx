import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/register";
import { Activacion } from "./components/Activacion";
import Home from "./components/Home";
import { useNavigate } from "react-router-dom";
import Productos from "./components/Productos";

export function App() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");

    useEffect(() => {
        localStorage.setItem("isAuthenticated", isAuthenticated);
    }, [isAuthenticated]);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
        navigate("/");
    };

    return (
        <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={login} />} />
            <Route path="/register" element={isAuthenticated ? <Navigate to="/home" /> : <Register />} />
            <Route path="/activate/:token" element={<Activacion />} />
            <Route path="/home" element={isAuthenticated ? <Home onLogout={logout} /> : <Navigate to="/" />} />
            <Route path="/productos" element={isAuthenticated ? <Productos /> : <Navigate to="/" />} />
        </Routes>
    );
}

export default App;

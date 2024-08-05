import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/register";
import { Autenticacion } from "./layouts/Autenticacion"; // Asegúrate de importar el componente Autenticacion correctamente
import { Activacion } from "./components/Activacion";
import Home from "./pages/Home/Home";
import Productos from "./pages/Productos/Productos";
import Provedor from "./pages/Provedores/Provedor";
import Categorias from "./pages/Categorias/Categorias";
import Roles from "./pages/Roles/Roles";

export function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");

    useEffect(() => {
        localStorage.setItem("isAuthenticated", isAuthenticated);
    }, [isAuthenticated]);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true"); // Asegúrate de actualizar localStorage aquí también
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("user");
    };

    return (
        <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={login} />} />
            <Route path="/register" element={isAuthenticated ? <Navigate to="/home" /> : <Register />} />
            <Route path="/activate/:token" element={<Activacion />} />
            <Route path="/auth" element={<Autenticacion onLogin={login} />} />
            <Route path="/home" element={isAuthenticated ? <Home onLogout={logout} /> : <Navigate to="/" />} />
            <Route
                path="/productos"
                element={isAuthenticated ? <Productos onLogout={logout} /> : <Navigate to="/" />}
            />
            <Route
                path="/provedores"
                element={isAuthenticated ? <Provedor onLogout={logout} /> : <Navigate to="/" />}
            />
            <Route
                path="/categorias"
                element={isAuthenticated ? <Categorias onLogout={logout} /> : <Navigate to="/" />}
            />
            <Route path="/roles" 
            element={isAuthenticated ? <Roles onLogout={logout} /> : <Navigate to="/" />} 
            />
        </Routes>
    );
}

export default App;

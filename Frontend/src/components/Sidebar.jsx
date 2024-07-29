import { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { MdOutlineAnalytics, MdLogout } from "react-icons/md";
import logo from "../assets/images/logo.png";
import DarkMode from "../layouts/DarkMode";
import { Link } from "react-router-dom";

// Componente Sidebar
function Sidebar({ onLogout }) {
    // Estado para manejar la visibilidad del sidebar
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Función para abrir/cerrar el sidebar
    const ModSidebaropen = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <button
                className={`sidebarOpen fixed top-28 z-50 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center ${
                    sidebarOpen ? "left-64" : "left-20"
                }`}
                onClick={ModSidebaropen}>
                <AiOutlineLeft className={`${sidebarOpen ? "" : "rotate-180"}`} />
            </button>

            <div
                className={`sidebar fixed z-40  left-3 rounded-xl shadow-2xl bg-white text-black p-5  ${
                    sidebarOpen ? "w-64" : "w-20"
                }`}>
                {/* Logo */}
                <div className="sidebar flex items-center justify-center mb-6">
                    <img
                        src={logo}
                        alt="Logo"
                        className={`transition-transform duration-300 ${sidebarOpen ? "w-16" : "w-10"}`}
                    />
                    {sidebarOpen && <h2 className="ml-2">Gotas de oro</h2>}
                </div>

                {/* Links principales */}
                <div className="sidebar flex flex-col">
                    <Link
                        to="/home"
                        className="link flex items-center p-2 my-2 trbuttonnsition-colors duration-300 hover:bg-gray-200 rounded-lg">
                        <AiOutlineHome className="text-2xl" />
                        {sidebarOpen && <span className="ml-4">Home</span>}
                    </Link>
                    <Link
                        to="/productos"
                        className="link flex items-center p-2 my-2 transition-colors duration-300 hover:bg-gray-200 rounded-lg">
                        <FaShoppingBasket className="text-2xl" />
                        {sidebarOpen && <span className="ml-4">Productos</span>}
                    </Link>
                    <button className="link flex items-center p-2 my-2 transition-colors duration-300 hover:bg-gray-200 rounded-lg">
                        <MdOutlineAnalytics className="text-2xl" />
                        {sidebarOpen && <span className="ml-4">Reportes</span>}
                    </button>
                </div>

                <div className="my-4 border-t border-gray-600"></div>

                {/* Links secundarios */}
                <div className="sidebar flex flex-col">
                    <button className="link flex items-center p-2 my-2 transition-colors duration-300 hover:bg-gray-200 rounded-lg">
                        <AiOutlineSetting className="text-2xl" />
                        {sidebarOpen && <span className="ml-4">Configuración</span>}
                    </button>
                    <button
                        className="link flex items-center p-2 my-2 transition-colors duration-300 hover:bg-gray-200 rounded-lg"
                        onClick={onLogout}>
                        <MdLogout className="text-2xl" />
                        {sidebarOpen && <span className="ml-4">Salir</span>}
                    </button>
                </div>
            </div>
            {/* Componente DarkMode */}
            <div className="fixed top-2 right-2">
                <DarkMode />
            </div>
        </>
    );
}

export default Sidebar;

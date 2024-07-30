import { useState } from "react";
import { LuLayoutDashboard, LuShoppingBasket } from "react-icons/lu";
import { AiOutlineLeft, AiOutlineSetting, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineAnalytics, MdLogout } from "react-icons/md";
import logo from "../assets/images/logo.png";
import DarkMode from "../layouts/DarkMode";
import { Link } from "react-router-dom";

function Sidebar({ onLogout }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            {/* Botón de menú para móvil */}
            <button
                className="md:hidden fixed top-1 left-2 z-50 w-10 h-10 rounded-full flex items-center justify-center"
                onClick={toggleSidebar}>
                <AiOutlineMenu className="text-2xl" />
            </button>

            {/* Botón para abrir/cerrar en PC */}
            <button
                className={`hidden md:flex sidebarOpen fixed top-28 z-50 w-8 h-8 bg-gray-100 rounded-full items-center justify-center ${
                    sidebarOpen ? "left-64" : "left-20"
                }`}
                onClick={toggleSidebar}>
                <AiOutlineLeft className={`${sidebarOpen ? "" : "rotate-180"}`} />
            </button>

            {/* Sidebar */}
            <div
                className={`sidebar fixed z-40 top-0 left-0 h-full md:top-24 md:left-3 md:h-auto rounded-r-xl md:rounded-xl shadow-2xl bg-white text-black p-5  ${
                    sidebarOpen ? "w-64" : "w-0 md:w-20"
                } ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
                {/* Contenido del sidebar */}
                <div className={`${sidebarOpen ? "block" : "hidden md:block"}`}>
                    {/* Logo */}
                    <div className="sidebar flex items-center justify-center  mt-16 md:mt-0">
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
                            <LuLayoutDashboard className="text-2xl" />
                            {sidebarOpen && <span className="ml-4">Home</span>}
                        </Link>
                        <Link
                            to="/productos"
                            className="link flex items-center p-2 my-2 transition-colors duration-300 hover:bg-gray-200 rounded-lg">
                            <LuShoppingBasket className="text-2xl" />
                            {sidebarOpen && <span className="ml-4">Productos</span>}
                        </Link>

                        <button className="link flex items-center p-2 my-2 transition-colors duration-300 hover:bg-gray-200 rounded-lg">
                            <MdOutlineAnalytics className="text-2xl" />
                            {sidebarOpen && <span className="ml-4">Reportes</span>}
                        </button>
                    </div>

                    <div className=" border-t border-gray-600"></div>

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
            </div>

            {/* Componente DarkMode */}
            <div className="fixed top-2 right-2">
                <DarkMode />
            </div>
        </>
    );
}

export default Sidebar;

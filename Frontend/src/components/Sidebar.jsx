import { useState } from "react";
import { LuLayoutDashboard, LuShoppingBasket } from "react-icons/lu";
import { AiOutlineLeft, AiOutlineSetting, AiOutlineMenu, AiOutlineShop } from "react-icons/ai";
import { MdOutlineAnalytics, MdLogout, MdAddShoppingCart } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { RiUserSettingsLine } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import logo from "../assets/images/logo.png";
import DarkMode from "../layouts/DarkMode";
import { Link } from "react-router-dom";

function Sidebar({ onLogout }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isCollapsed2, setIsCollapsed2] = useState(true);
    const [isCollapsed3, setIsCollapsed3] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };
    

    const toggleCollapse2 = () => {
        setIsCollapsed2(!isCollapsed2);
    };

    const toggleCollapse3 = () => {
        setIsCollapsed3(!isCollapsed3);
    };
    
    return (
        <>
            {/* Logo */}
            <div className="absolute max-[768px]:hidden  top-2 left-2 flex items-center">
                <img src={logo} alt="Logo" className="transition-transform duration-300 w-14" />
                <h2 className="ml-2 text-black">Gotas de oro</h2>
            </div>

            <div className="fixed right-14 top-3">
                <BiBell className="text-2xl" />
            </div>
            {/* Botón de menú para móvil */}
            <button
                className="fixed z-50 flex items-center justify-center w-10 h-10 rounded-full md:hidden top-1 left-2"
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
                className={`sidebar fixed z-40 top-0 left-0 h-full  md:top-24 md:left-3 md:h-auto rounded-r-xl md:rounded-xl shadow-2xl bg-white text-black p-5  ${
                    sidebarOpen ? "w-64" : "w-0 md:w-20"
                } ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
                {/* Contenido del sidebar */}
                <div className={`${sidebarOpen ? "block" : "hidden md:block"} max-[768px]:h-full max-[768px]:pt-20`}>
                    {/* Links principales */}
                    <div className="flex flex-col sidebar">
                        <Link to="/home" className="flex items-center p-2 my-2 rounded-lg link hover:bg-gray-200">
                            <LuLayoutDashboard className="text-2xl" />
                            {sidebarOpen && <span className="ml-4">Home</span>}
                        </Link>
                        <div className="flex flex-col div">
                            <button
                                className="flex items-center p-2 my-2 rounded-lg link hover:bg-gray-200"
                                onClick={toggleCollapse}>
                                <LuShoppingBasket className="text-2xl" />
                                {sidebarOpen && <span className="ml-4">Productos</span>}
                                <span className="ml-auto">{isCollapsed}</span>
                            </button>
                            <div className={`${isCollapsed ? "hidden" : "block"} ml-3 div`}>
                                <Link to="/productos" className="flex gap-2 p-2 my-2 rounded-lg link hover:bg-gray-200">
                                    <AiOutlineProduct className="text-2xl" />
                                    Productos
                                </Link>
                                <Link
                                    to="/provedores"
                                    className="flex gap-2 p-2 my-2 rounded-lg link hover:bg-gray-200">
                                    <FiUsers className="text-2xl" />
                                    Provedores
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col div">
                            <button
                                className="flex items-center p-2 my-2 rounded-lg link hover:bg-gray-200"
                                onClick={toggleCollapse2}>
                                <HiOutlineClipboardDocumentList className="text-2xl" />
                                {sidebarOpen && <span className="ml-4">Movimientos</span>}
                                <span className="ml-auto">{isCollapsed2}</span>
                            </button>
                            <div className={`${isCollapsed2 ? "hidden" : "block"} ml-3 div`}>
                                <Link to="#" className="flex gap-2 p-2 my-2 rounded-lg link hover:bg-gray-200">
                                    <AiOutlineShop className="text-2xl" />
                                    Ventas
                                </Link>
                                <Link to="#" className="flex gap-2 p-2 my-2 rounded-lg link hover:bg-gray-200">
                                    <MdAddShoppingCart className="text-2xl" />
                                    Compras
                                </Link>
                            </div>
                        </div>

                        <button className="flex items-center p-2 my-2 rounded-lg link hover:bg-gray-200">
                            <MdOutlineAnalytics className="text-2xl" />
                            {sidebarOpen && <span className="ml-4">Reportes</span>}
                        </button>
                    </div>

                    <div className="border-t border-gray-600 "></div>

                    {/* Links secundarios */}
                    <div className="flex flex-col sidebar">
                        <div className="flex flex-col div">
                            <button
                                className="flex items-center p-2 my-2 rounded-lg link hover:bg-gray-200"
                                onClick={toggleCollapse3}>
                                <AiOutlineSetting className="text-2xl" />
                                {sidebarOpen && <span className="ml-4">Configuración</span>}
                                <span className="ml-auto">{isCollapsed3}</span>
                            </button>
                            <div className={`${isCollapsed3 ? "hidden" : "block"} ml-3 div`}>
                                <Link to="/roles" className="flex gap-2 p-2 my-2 rounded-lg link hover:bg-gray-200">
                                    <RiUserSettingsLine className="text-2xl" />
                                    Roles
                                </Link>
                                <Link
                                    to="/categorias"
                                    className="flex gap-2 p-2 my-2 rounded-lg link hover:bg-gray-200">
                                    <BiCategory className="text-2xl" />
                                    Categoria
                                </Link>
                            </div>
                        </div>

                        {/* <button className="flex items-center p-2 my-2 rounded-lg link hover:bg-gray-200">
                            <AiOutlineSetting className="text-2xl" />
                            {sidebarOpen && <span className="ml-4">Configuración</span>}
                        </button> */}
                        <button
                            className="flex items-center p-2 my-2 rounded-lg link hover:bg-gray-200"
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

import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import { GoSignOut } from "react-icons/go"; // Asegúrate de tener el ícono correcto para cerrar sesión
import DarkMode from "../layouts/DarkMode";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";


const Sidebar = ({ onLogout }) => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button
                                data-drawer-target="logo-sidebar"
                                data-drawer-toggle="logo-sidebar"
                                aria-controls="logo-sidebar"
                                type="button"
                                onClick={toggleMenu}
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <div className="flex ms-2 md:me-24">
                                <img src={Logo} className="h-8 me-3" alt="FlowBite Logo" />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                    Gotas de oro
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </nav>

            <aside
                className={`aside fixed top-0 left-0 z-40 w-64 h-screen  transition-transform ${
                    menu ? "translate-x-0" : "-translate-x-full"
                } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}>
                <div className="h-full px-3 pt-16 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                to="/home"
                                className=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group">
                                <MdDashboard className="w-5 h-5 text-gray-500 transition duration-75 " />
                                <span className="ms-3">Inicio</span>
                            </Link>
                        </li>
                        <li className="li">
                            <Link
                                to="/productos"
                                className="sidebar flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group">
                                <FaShoppingBasket className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Productos</span>
                            </Link>
                        </li>
                        <li className=" w-full  cursor-pointer rounded-lg">
                            <button
                                onClick={onLogout}
                                className=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group">
                                <GoSignOut className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Cerrar sesión</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;

import { useEffect, useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const DarkMode = () => {
 const [darkMode, setDarkMode] = useState(false);


    useEffect(() => {
        // Inicializar el estado del tema oscuro desde localStorage
        const isDarkMode = localStorage.getItem("darkMode") === "enabled";
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            setDarkMode(true);
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            if (newMode) {
                document.body.classList.add("dark-mode");
                localStorage.setItem("darkMode", "enabled");
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("darkMode", "disabled");
            }
            return newMode;
        });
    };
    return (
        <div className="flex justify-end z-40 items-start h-full">
            <label htmlFor="darkModeToggle" className="flex items-center p-2 cursor-pointer">
                <input
                    type="checkbox"
                    id="darkModeToggle"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    className="hidden"
                />
                <i className="transition-transform duration-300 text-xl">
                    {darkMode ? <IoMdSunny className="text-violet-800" /> : <FaMoon className="text-gray-500" />}
                </i>
            </label>
        </div>
    );
};

export default DarkMode;

import { useState, useEffect } from "react";

const useProductos = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_USER_API}/api/productos`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Datos de productos:", data); // Añadido para depuración
                setProductos(data);
            } catch (error) {
                console.error("Error al obtener productos:", error); // Añadido para depuración
                setError(error.message);
            }
        };

        fetchProductos();
    }, []);

    return { productos, error };
};

export default useProductos;

import { useState, useEffect } from "react";

const useProductos = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_USER_API}/api/productos`);
                console.log("Response status:", response.status);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Fetched data:", data);
                setProductos(data);
            } catch (error) {
                console.error("Error fetching productos:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);


    return { productos, error, loading };
};

export default useProductos;

import { useState, useEffect, useCallback } from "react";

const useFetchProductos = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchProductos = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_USER_API}/api/productos`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setProductos(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProductos();
    }, [fetchProductos]);

    const addProducto = async (producto) => {
        setLoading(true); // Activa el loader cuando se está agregando un producto
        try {
            const response = await fetch(`${import.meta.env.VITE_USER_API}/api/productos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(producto),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Actualiza la lista de productos después de agregar el nuevo producto
            await fetchProductos();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // Desactiva el loader
        }
    };

    return { productos, error, loading, addProducto };
};

export default useFetchProductos;

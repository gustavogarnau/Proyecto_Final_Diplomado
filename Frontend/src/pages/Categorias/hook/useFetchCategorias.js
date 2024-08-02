import { useState, useEffect, useCallback } from "react";

const useFetchCategorias = () => {
    const [categorias, setCategorias] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchCategorias = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_USER_API}/api/categoria`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setCategorias(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCategorias();
    }, [fetchCategorias]);

    const addCategoria = async (categoria) => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_USER_API}/api/categoria`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(categoria),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            await fetchCategorias();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const editCategoria = async (id, updatedCategoria) => {
        setLoading(true);
        try {
            console.log("Datos enviados al backend para editar:", updatedCategoria);
            const response = await fetch(`${import.meta.env.VITE_USER_API}/api/categoria/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedCategoria),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            await fetchCategorias();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const deleteCategoria = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_USER_API}/api/categoria/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            await fetchCategorias();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { categorias, error, loading, addCategoria, editCategoria, deleteCategoria, fetchCategorias };
};

export default useFetchCategorias;

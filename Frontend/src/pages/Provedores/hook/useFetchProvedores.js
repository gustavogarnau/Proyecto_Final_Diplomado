import { useState, useEffect, useCallback } from "react";

const useFetchProvedores = () => {
    const [proveedores, setproveedores] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchProveedores = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_USER_API}/api/proveedores`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setproveedores(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProveedores();
    }, [fetchProveedores]);

    const addProveedores = async (proveedores) => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_USER_API}/api/proveedores`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(proveedores),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            await fetchProveedores();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const editProveedores = async (id, updatedProveedores) => {
        setLoading(true);
        try {
            console.log("Datos enviados al backend para editar:", updatedProveedores);
            const response = await fetch(`${import.meta.env.VITE_USER_API}/api/proveedores/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedProveedores),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            await fetchProveedores();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const deleteProveedores = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_USER_API}/api/proveedores/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            await fetchProveedores();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { proveedores, error, loading, addProveedores, editProveedores, deleteProveedores, fetchProveedores };
};

export default useFetchProvedores;

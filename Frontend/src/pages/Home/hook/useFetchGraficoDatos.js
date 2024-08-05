import { useState, useEffect, useCallback } from "react";

const useFetchGraficoDatos = () => {
    const [datos, setDatos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchGraficoDatos = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_USER_API}/api/estadisticas`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setDatos(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchGraficoDatos();
    }, [fetchGraficoDatos]);

    return { datos, error, loading, fetchGraficoDatos };
};

export default useFetchGraficoDatos;

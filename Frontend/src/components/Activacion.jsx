import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../layouts/Loader/Loader";

export const Activacion = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [tokenStatus, setTokenStatus] = useState(null);
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        const validateToken = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_USER_API}/api/activate/${token}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        setTokenStatus({ valid: false, message: "El token ha expirado o es inválido." });
                    } else {
                        setTokenStatus({ valid: false, message: "Hubo un problema con la validación del token." });
                    }
                } else {
                    await response.json();
                    setTokenStatus({ valid: true, message: "Activación de cuenta exitosa." });

                    setTimeout(() => {
                        setShowLoader(true);
                        setTimeout(() => {
                            navigate("/");
                        }, 2000);
                    }, 3000);
                }
            } catch (error) {
                console.error("Error al validar el token:", error);
                setTokenStatus({ valid: false, message: "Hubo un problema con la validación del token." });
            }
        };

        validateToken();
    }, [token, navigate]);

    return (
        <div className="p-2 w-full flex justify-center items-center h-screen">
            {showLoader ? (
                <Loader />
            ) : tokenStatus ? (
                <div className={`card ${tokenStatus.valid ? "success" : "error"} `}>
                    <div className="icon"></div>
                    <h1 className="h1">{tokenStatus.message}</h1>
                    {tokenStatus.valid && (
                        <p className="p">Espere 3 segundos para ser redirigido al inicio de sesión</p>
                    )}
                </div>
            ) : (
                <p>Validando el token...</p>
            )}
        </div>
    );
};

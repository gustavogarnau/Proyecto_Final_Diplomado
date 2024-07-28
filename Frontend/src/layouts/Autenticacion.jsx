import { FaGoogle, FaGithub } from "react-icons/fa";
import { signInGithub, signInGoogle } from "../firebase/firebaseAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Autenticacion = ({ onLogin }) => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const signinSocial = async (provider) => {
        try {
            setError(null);
            let user;
            if (provider === "Google") {
                user = await signInGoogle();
            } else {
                user = await signInGithub();
            }
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/home"); 
        } catch (error) {
            console.error(`Error al autenticar con ${provider}:`, error.message);
            setError(`Error al autenticar con ${provider}: ${error.message}`);
        }
    };

    return (
        <>
            {error && <div className="text-red-500">{error}</div>}
            <button
                className="w-full gap-2 flex items-center justify-center p-2 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
                onClick={() => signinSocial("Github")}>
                <FaGithub className="icon" />
                <span>Continuar con GitHub</span>
            </button>
            <button
                className="mt-4 gap-2 w-full flex items-center justify-center p-2 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
                onClick={() => signinSocial("Google")}>
                <FaGoogle />
                <span>Continuar con Google</span>
            </button>
        </>
    );
};

export default Autenticacion;

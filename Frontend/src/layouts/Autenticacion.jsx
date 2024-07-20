import { FaGoogle, FaGithub } from "react-icons/fa";
import { signInGithub, signInGoogle } from "../firebase/firebaseAuth"; // Asegúrate de tener estas funciones
import { useNavigate } from "react-router-dom";

export const Autenticacion = () => {
    const navigate = useNavigate(); // Para redirigir al usuario después de la autenticación

    const signinSocial = async (provider) => {
        try {
            let user;
            if (provider === "Google") {
                user = await signInGoogle();
            } else {
                user = await signInGithub();
            }
            // Guarda la información del usuario en localStorage, sin usar JWT
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/home"); // Redirige al usuario a la página deseada
        } catch (error) {
            console.error(error);
            // Aquí puedes mostrar un mensaje de error si es necesario
        }
    };

    return (
        <>
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

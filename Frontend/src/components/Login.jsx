import { Link, useNavigate } from "react-router-dom";
import Autenticacion from "../layouts/Autenticacion";
import { useForm } from "react-hook-form";
import { useLogin } from "../hook/useLogin";
import { useState } from "react";
import DarkMode from "../layouts/DarkMode";
import Loader from "../layouts/Loader/Loader";

export const Login = () => {
    const { register, handleSubmit } = useForm();
    const { login } = useLogin();
    const [error, setError] = useState(null);
    const [showLoader, setShowLoader] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setError(null);
        setShowLoader(true); // Mostrar loader al iniciar la solicitud

        try {
            const result = await login(data);
            console.log(result);
            if (result && result.statusCode === 200) {
                console.log("Login exitoso:", result);
                setShowLoader(false); // Ocultar loader después de una respuesta exitosa
                navigate("/home"); // Redirigir al usuario a la página de inicio
            } else {
                throw new Error("Error en el inicio de sesión. Por favor, verifica tus credenciales.");
            }
        } catch (error) {
            console.error("Error en el inicio de sesión:", error.message);
            setError(error.message || "Error en el inicio de sesión. Por favor, verifica tus credenciales.");
            setShowLoader(false); // Ocultar loader en caso de error
        }
    };

    return (
        <>
            <div className="z-40 w-full flex justify-center">
                {showLoader ? ( // Mostrar loader si showLoader es true
                    <Loader />
                ) : (
                    <div className=" flex flex-col justify-center bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-2xl">
                        <h2 className="text-2xl font-bold text-center text-zinc-800 dark:text-zinc-100">
                            Iniciar sesión
                        </h2>
                        <p className="text-center p-4 text-zinc-600 dark:text-zinc-400">
                            Todavía no estás registrado?{" "}
                            <Link to="/register" className="link text-teal-600 dark:text-teal-400">
                                Regístrate
                            </Link>
                        </p>
                        <hr className="flex-grow border-zinc-300 dark:border-zinc-700" />
                        <div className="mt-6">
                            <Autenticacion />
                        </div>
                        <div className="flex items-center my-6">
                            <hr className="flex-grow border-zinc-300 dark:border-zinc-700" />
                            <span className="mx-2 text-zinc-400 dark:text-zinc-500">o</span>
                            <hr className="flex-grow border-zinc-300 dark:border-zinc-700" />
                        </div>
                        <form method="POST" className="form" onSubmit={handleSubmit(onSubmit)}>
                            {error && <div className="mb-4 text-xs text-red-500">{error}</div>}
                            <div className="mb-4">
                                <label htmlFor="correo" className="block text-zinc-700 dark:text-zinc-300">
                                    Email
                                </label>
                                <input
                                    className="w-full px-4 py-2 mt-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-400"
                                    type="correo"
                                    {...register("correo")}
                                    id="correo"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-zinc-700 dark:text-zinc-300">
                                    Contraseña
                                </label>
                                <input
                                    className="w-full px-4 py-2 mt-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-400"
                                    type="password"
                                    {...register("password")}
                                    id="password"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="form-button w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition">
                                Iniciar sesión
                            </button>
                        </form>
                    </div>
                )}
            </div>
            <DarkMode />
        </>
    );
};

export default Login;

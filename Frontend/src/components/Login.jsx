// Login.js
import { Link } from "react-router-dom";
import Autenticacion from "../layouts/Autenticacion";
import { useForm } from "react-hook-form";
import { useLogin } from "../hook/useLogin";
import { useState } from "react";

export const Login = () => {
    const { register, handleSubmit } = useForm();
    const { login } = useLogin();
    const [error, setError] = useState(null);

    const onSubmit = async (data) => {
        setError(null); // Reset the error before attempting to log in
        console.log("Datos del formulario:", data);

        try {
            const result = await login(data);
            if (result && result.status === 200) {
                console.log("Login exitoso:", result);
                // Aquí puedes manejar lo que ocurre después del login exitoso, como redirigir al usuario
            } else {
                throw new Error("Error en el inicio de sesión. Por favor, verifica tus credenciales.");
            }
        } catch (error) {
            console.error("Error en el inicio de sesión:", error.message);
            setError(error.message || "Error en el inicio de sesión. Por favor, verifica tus credenciales.");
        }
    };

    return (
        <div className="">
            <div className="flex flex-col justify-center bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-2xl">
                <h2 className="text-2xl font-bold text-center text-zinc-800 dark:text-zinc-100">Iniciar sesión</h2>
                <p className="text-center p-4 text-zinc-600 dark:text-zinc-400">
                    Todavía no estás registrado?{" "}
                    <Link to="/register" className="text-teal-600 dark:text-teal-400">
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
                        <label htmlFor="email" className="block text-zinc-700 dark:text-zinc-300">
                            Email
                        </label>
                        <input
                            className="w-full px-4 py-2 mt-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-400"
                            type="email"
                            {...register("email")}
                            id="email"
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
        </div>
    );
};

export default Login;

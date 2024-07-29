import { useForm } from "react-hook-form";
import { useRegister } from "../hook/useRegister";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../layouts/Loader/Loader";
import DarkMode from "../layouts/DarkMode";

export const LoginRegister = () => {
    const { register, handleSubmit, reset } = useForm();
    const { registerLogin } = useRegister();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [showLoader, setShowLoader] = useState(false); // Estado para el loader
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setError(null);
        setSuccess(null);
        setShowLoader(false); // Asegurarse de que el loader esté oculto inicialmente

        try {
            const result = await registerLogin(data);
            console.log(result);
            if (result && result.statusCode === 200) {
                setSuccess("Registro exitoso, revisa tu correo para activar tu cuenta.");
                reset(); // Limpiar los campos del formulario
                setTimeout(() => {
                    setShowLoader(true); // Mostrar loader después de 2 segundos
                    setTimeout(() => {
                        navigate("/"); // Redirigir al usuario al login después de 2 segundos
                    }, 2000);
                }, 2000); // Esperar 2 segundos antes de mostrar el loader
            } else {
                throw new Error(result.error || "Error al registrarse");
            }
        } catch (error) {
            console.error("Error al registrarse:", error.message);
            setError(error.message || "Error al registrarse");
            setShowLoader(false); // Ocultar loader en caso de error
        }
    };

    return (
        <>
            <div className="z-40 w-full flex justify-center">
                {showLoader ? ( // Mostrar loader si showLoader es true
                    <Loader />
                ) : (
                    <div className="flex flex-col justify-center bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-2xl ">
                        <h2 className="text-2xl font-bold text-center text-zinc-800 dark:text-zinc-100">Registrarse</h2>

                        <p className="text-center p-4 text-zinc-600 dark:text-zinc-400">
                            Ya estás registrado?{" "}
                            <Link to="/" className="text-teal-600 dark:text-teal-400">
                                Iniciar sesión
                            </Link>
                        </p>
                        <hr className="flex-grow border-zinc-300 dark:border-zinc-700" />

                        <form method="POST" className="form my-6" onSubmit={handleSubmit(onSubmit)}>
                            {error && <div className="mb-4 text-xs text-red-500">{error}</div>}
                            {success && <div className="mb-4 text-xs text-green-500">{success}</div>}
                            <div className="mb-4 flex gap-4">
                                <div>
                                    <label htmlFor="cedula" className="block text-zinc-700 dark:text-zinc-300">
                                        Cedula
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 mt-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-400"
                                        type="number"
                                        {...register("cedula")}
                                        id="cedula"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="nombre" className="block text-zinc-700 dark:text-zinc-300">
                                        Nombre
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 mt-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-400"
                                        type="text"
                                        {...register("nombre")}
                                        id="nombre"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4 flex gap-4">
                                <div>
                                    <label htmlFor="apellido" className="block text-zinc-700 dark:text-zinc-300">
                                        Apellido
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 mt-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-400"
                                        type="text"
                                        {...register("apellido")}
                                        id="apellido"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="correo" className="block text-zinc-700 dark:text-zinc-300">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 mt-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-400"
                                        type="email"
                                        {...register("correo")}
                                        id="correo"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4 flex gap-4">
                                <div>
                                    <label htmlFor="telefono" className="block text-zinc-700 dark:text-zinc-300">
                                        Telefono
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 mt-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-400"
                                        type="number"
                                        {...register("telefono")}
                                        id="telefono"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="ciudad" className="block text-zinc-700 dark:text-zinc-300">
                                        Ciudad
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 mt-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-400"
                                        type="text"
                                        {...register("ciudad")}
                                        id="ciudad"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4 flex gap-4">
                                <div>
                                    <label htmlFor="direccion" className="block text-zinc-700 dark:text-zinc-300">
                                        Direccion
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 mt-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-400"
                                        type="text"
                                        {...register("direccion")}
                                        id="direccion"
                                        required
                                    />
                                </div>
                                <div>
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
                            </div>
                            <button
                                type="submit"
                                className="form-button w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition">
                                Registrarse
                            </button>
                        </form>
                    </div>
                )}
            </div>
            <DarkMode />
        </>
    );
};

export default LoginRegister;

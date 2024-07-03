
import { Link} from "react-router-dom";

export const LoginRegister = () => {
    // const {id} = useParams();

    return (
        <div className="">
            <div className="flex flex-col justify-center  bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-2xl ">
                <h2 className="text-2xl font-bold text-center text-zinc-800 dark:text-zinc-100">Registrarse</h2>

                <p className="text-center p-4 text-zinc-600 dark:text-zinc-400 ">
                    Ya estás registrado?{" "}
                    <Link to="/" className="text-teal-600 dark:text-teal-400 ">
                        Iniciar sesión
                    </Link>
                </p>
                <hr className="flex-grow border-zinc-300 dark:border-zinc-700" />
                <form method="POST" className="form my-6">
                    <div className="mb-4 flex gap-4">
                        <div>
                            <label htmlFor="cedula" className="block text-zinc-700 dark:text-zinc-300">
                                Cedula
                            </label>
                            <input
                                className="w-full px-4 py-2 mt-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-400"
                                type="number"
                                name="cedula"
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
                                name="nombre"
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
                                name="apellido"
                                id="apellido"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-zinc-700 dark:text-zinc-300">
                                Email
                            </label>
                            <input
                                className="w-full px-4 py-2 mt-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-400"
                                type="email"
                                name="email"
                                id="email"
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
                                name="telefono"
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
                                name="ciudad"
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
                                name="direccion"
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
                                name="password"
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
        </div>
    );
};

export default LoginRegister;

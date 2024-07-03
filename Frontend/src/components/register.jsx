
import { Link} from "react-router-dom";
import Autenticacion from "./Autenticacion";

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

                {/* <p>{id}</p> */}

                <hr className="flex-grow border-zinc-300 dark:border-zinc-700" />
                <div className="mt-6">
                    <Autenticacion />
                </div>
                <div className="flex items-center my-6">
                    <hr className="flex-grow  border-zinc-300 dark:border-zinc-700" />
                    <span className="mx-2 text-zinc-400 dark:text-zinc-500">o</span>
                    <hr className="flex-grow  border-zinc-300 dark:border-zinc-700" />
                </div>
                <form method="POST" className="form">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-zinc-700 dark:text-zinc-300">
                            Email
                        </label>
                        <input
                            className="w-full px-4 py-2 mt-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-400"
                            type="email"
                            name="email"
                            id="email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-zinc-700 dark:text-zinc-300">
                            Contraseña
                        </label>
                        <input
                            className="w-full px-4 py-2 mt-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-400"
                            type="password"
                            name="password"
                            id="password"
                        />
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

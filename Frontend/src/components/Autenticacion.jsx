import { FaGoogle, FaGithub } from "react-icons/fa6";
import { signInGithub, signInGoogle } from "../firebase/firebaseAuth";

export const Autenticacion = () => {
    const signinSocial = async (provider) => {
        try {
            let user;
            if (provider === "Google") {
                user = await signInGoogle();
            } else {
                user = await signInGithub();
            }
            localStorage.setItem("jwt", JSON.stringify(user));
            //   navigate("/home", { replace: true });
        } catch (error) {
            console.log(error);
            //   setOpen(true);
        }
    };
    return (
        <>
            <button
                className="w-full gap-2 flex items-center justify-center p-2 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
                onClick={() => signinSocial("Github")}>
                <FaGithub />
                <span className="">Continuar con GitHub</span>
            </button>
            <button
                className="mt-4 gap-2 w-full flex items-center justify-center p-2 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
                onClick={() => signinSocial("Google")}>
                <FaGoogle />
                <span className="">Continuar con Google</span>
            </button>
        </>
    );
}
export default Autenticacion;

import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { Auth } from "./config";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signInGoogle = async () => {
    try {
        const userCredentials = await signInWithPopup(Auth, googleProvider);
        const { user } = userCredentials;
        return user;
    } catch (error) {
        console.error("Error al autenticar con Google:", error.message);
        throw new Error(`Google Auth Error: ${error.message}`);
    }
};

export const signInGithub = async () => {
    try {
        const userCredentials = await signInWithPopup(Auth, githubProvider);
        const { user } = userCredentials;
        return user;
    } catch (error) {
        console.error("Error al autenticar con GitHub:", error.message);
        throw new Error(`GitHub Auth Error: ${error.message}`);
    }
};

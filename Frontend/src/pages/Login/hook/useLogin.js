// hook/useLogin.js
export const useLogin = () => {
    const login = async (data) => {
        const url = `${import.meta.env.VITE_USER_API}/api/login`;
        console.log("URL del backend:", url);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();

            console.log("Response status:", response.status);
            console.log("Response result:", result);

            if (!response.ok) {
                let errorMessage = "Error desconocido";
                if (response.status === 401) {
                    errorMessage = "Credenciales incorrectas. Por favor, inténtelo de nuevo.";
                } else if (response.status === 500) {
                    errorMessage = "Error del servidor. Por favor, inténtelo de nuevo más tarde.";
                } else if (result.error) {
                    errorMessage = result.error;
                }
                throw new Error(errorMessage);
            }

            return result;
        } catch (error) {
            console.error("Error:", error.message);
            throw error;
        }
    };

    return { login };
};

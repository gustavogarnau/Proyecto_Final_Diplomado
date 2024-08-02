import { useState } from "react";
import { useForm } from "react-hook-form";

const AgregarCategoria = ({ addCategoria, fetchCategorias }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [error, setError] = useState(null);
    const { register, handleSubmit, reset } = useForm();

    const abrirModal = () => setModalIsOpen(true);
    const cerrarModal = () => setModalIsOpen(false);

    const onSubmit = async (data) => {
        try {
            await addCategoria(data);
            await fetchCategorias(); // Actualiza los categorías después de agregar uno nuevo
            reset();
            cerrarModal();
        } catch (error) {
            console.error("Error agregando categoría:", error);
            setError(error.message);
        }
    };

    return (
        <>
            <button
                onClick={abrirModal}
                className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="button">
                Agregar Categoría
            </button>

            {modalIsOpen && (
                <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
                    <div className="relative w-full max-w-md max-h-full p-4">
                        <div className="relative bg-white rounded-lg shadow">
                            <div className="flex items-center justify-between p-4 border-b rounded-t modal md:p-5">
                                <h3 className="text-lg font-semibold text-gray-900 btn-modal">Agregar Categoría</h3>
                                <button
                                    type="button"
                                    onClick={cerrarModal}
                                    className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg btn-modal ms-auto">
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14">
                                        <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Cerrar modal</span>
                                </button>
                            </div>
                            <form className="p-4 md:p-5" onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="nombre"
                                            className="block mb-2 text-sm font-medium text-gray-900">
                                            Nombre de la categoría
                                        </label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            {...register("nombre", { required: true })}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="Nombre de la categoría"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="button text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    <svg
                                        className="w-5 h-5 me-1 -ms-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path>
                                    </svg>
                                    Agregar
                                </button>
                                {error && <p className="mt-4 text-red-500">{error}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AgregarCategoria;

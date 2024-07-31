import { useState } from "react";
import { useForm } from "react-hook-form";
import useProductos from "../../hook/useFetchProductos";

const ModalProduct = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [error, setError] = useState(null);
    const { register, handleSubmit, reset } = useForm();
    const { addProducto } = useProductos();

    const abrirModal = () => setModalIsOpen(true);
    const cerrarModal = () => setModalIsOpen(false);

    const onSubmit = async (data) => {
        try {
            await addProducto(data);
            reset();
            cerrarModal();
        } catch (error) {
            console.error("Error agregando producto:", error);
            setError(error.message);
        }
    };

    return (
        <>
            <button
                onClick={abrirModal}
                className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="button">
                Agregar Producto
            </button>

            {modalIsOpen && (
                <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow">
                            <div className="modal flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                <h3 className="btn-modal text-lg font-semibold text-gray-900">Agregar Producto</h3>
                                <button
                                    type="button"
                                    onClick={cerrarModal}
                                    className="btn-modal text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
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
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="nombre"
                                            className="block mb-2 text-sm font-medium text-gray-900">
                                            Nombre del producto
                                        </label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            {...register("nombre", { required: true })}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="Nombre del producto"
                                        />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="precio_por_gramo"
                                            className="block mb-2 text-sm font-medium text-gray-900">
                                            Precio por gramo
                                        </label>
                                        <input
                                            type="number"
                                            id="precio_por_gramo"
                                            {...register("precio_por_gramo", { required: true })}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="$2999"
                                        />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="cantidad_actual"
                                            className="block mb-2 text-sm font-medium text-gray-900">
                                            Cantidad actual
                                        </label>
                                        <input
                                            type="number"
                                            id="cantidad_actual"
                                            {...register("cantidad_actual", { required: true })}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="99999"
                                        />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="categoria_id"
                                            className="block mb-2 text-sm font-medium text-gray-900">
                                            Categoria
                                        </label>
                                        <select
                                            id="categoria_id"
                                            {...register("categoria_id", { required: true })}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                            <option selected disabled>
                                                Seleccione la categoria
                                            </option>
                                            <option value="1">Esencia</option>
                                            <option value="2">PC</option>
                                        </select>
                                    </div>

                                    <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="proveedor_id"
                                            className="block mb-2 text-sm font-medium text-gray-900">
                                            Proveedor
                                        </label>
                                        <select
                                            id="proveedor_id"
                                            {...register("proveedor_id", { required: true })}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                            <option selected disabled>
                                                Seleccione la proveedor
                                            </option>
                                            <option value="1">David</option>
                                            <option value="2">Juan</option>
                                        </select>
                                    </div>

                                    <div className="col-span-2">
                                        <label
                                            htmlFor="descripcion"
                                            className="block mb-2 text-sm font-medium text-gray-900">
                                            Descripción del producto
                                        </label>
                                        <textarea
                                            id="descripcion"
                                            {...register("descripcion", { required: true })}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="Descripción del producto"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="button text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    <svg
                                        className="me-1 -ms-1 w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path>
                                    </svg>
                                    Agregar
                                </button>
                                {error && <p className="text-red-500 mt-4">{error}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalProduct;

import useFetchProductos from "./hook/useFetchProductos";
import ModalProduct from "../../components/ModalProduct";
import Sidebar from "../../components/Sidebar";
import { MdDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";

const Productos = ({ onLogout }) => {
    const { productos, error, loading } = useFetchProductos();
    console.log("productos", productos.body?.data?.length);

    return (
        <>
            <Sidebar onLogout={onLogout} />
            <div className="flex flex-col min-h-screen">
                <div className="p-5">
                    <ModalProduct />
                </div>
                <div className="p-5 relative overflow-x-auto">
                    {loading && <p className="text-gray-500">Cargando productos...</p>}
                    {error && <p className="text-red-500">Error: {error}</p>}
                    {!loading && !error && (
                        <table className="w-full text-sm text-center text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Id producto
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nombre
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Descripción
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Cantidad actual
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Precio por gramo
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Fecha registro
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {productos.body?.data?.length > 0 ? (
                                    productos.body.data.map((producto) => (
                                        <tr key={producto.id} className="bg-white border-b">
                                            <td className="px-6 py-4">{producto.producto_id}</td>
                                            <td className="px-6 py-4">{producto.nombre}</td>
                                            <td className="px-6 py-4">{producto.descripcion}</td>
                                            <td className="px-6 py-4">{producto.cantidad_actual}</td>
                                            <td className="px-6 py-4">{producto.precio_por_gramo}</td>
                                            <td className="px-6 py-4">{producto.fecha_registro}</td>
                                            <td className="px-6 py-4 flex gap-1 justify-center">
                                                <button
                                                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center"
                                                    type="button">
                                                    <BsPencilSquare className="text-base" />
                                                </button>
                                                <button
                                                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center"
                                                    type="button">
                                                    <MdDelete className="text-base" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="px-6 py-4 text-center">
                                            No hay productos disponibles
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
};

export default Productos;

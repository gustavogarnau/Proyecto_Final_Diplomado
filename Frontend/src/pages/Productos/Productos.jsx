import { useState } from "react";
import useFetchProductos from "./hook/useFetchProductos";
import ModalProduct from "./components/AgregarModal/ModalProduct";
import Sidebar from "../../components/Sidebar";
import { MdDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { Pagination } from "@mui/material";
import EditarProduct from "./components/EditarModal/EditarProduct"; // Importa tu componente de edición
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Productos = ({ onLogout }) => {
    const { productos, error, loading, addProducto, editProducto, deleteProducto, fetchProductos } =
        useFetchProductos();
    const [page, setPage] = useState(1);
    const [productoEditado, setProductoEditado] = useState(null); // Estado para el producto a editar
    const itemsPerPage = 5;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleEdit = (producto) => {
        console.log("Producto seleccionado para editar:", producto);
        setProductoEditado(producto); // Establece el producto a editar
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar!",
            cancelButtonText: "No, Cancelar!",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProducto(id);
                Swal.fire({
                    title: "¡Eliminado!",
                    text: "Tu producto ha sido eliminado.",
                    icon: "success",
                });
            }
        });
    };

    const paginatedProductos = productos.body?.data?.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <>
            <Sidebar onLogout={onLogout} />
            <div className="flex flex-col min-h-screen max-[768px]:w-full p-2 justify-center items-center">
                <div className="p-5 flex items-start w-4/5 max-[768px]:pt-10">
                    <ModalProduct addProducto={addProducto} fetchProductos={fetchProductos} />
                </div>
                <div className="relative overflow-x-auto shadow-md rounded-lg w-5/6 max-[768px]:w-full max-[768px]:p-2">
                    {loading && <p className="text-gray-500">Cargando productos...</p>}
                    {error && <p className="text-red-500">Error: {error}</p>}
                    {!loading && !error && (
                        <>
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
                                    {paginatedProductos?.length > 0 ? (
                                        paginatedProductos.map((producto) => {
                                            // Formatea la fecha a un formato más sencillo
                                            const fecha = new Date(producto.fecha_registro);
                                            const fechaFormateada = fecha.toLocaleDateString(); // Puedes usar otras opciones para formatear la fecha

                                             const valorFormateado = Number(producto.precio_por_gramo).toLocaleString(
                                                 "es-ES",
                                                 {
                                                     minimumFractionDigits: 2,
                                                     maximumFractionDigits: 2,
                                                 }
                                             );
                                            return (
                                                <tr key={producto.id} className="bg-white border-b">
                                                    <td className="px-6 py-4">{producto.producto_id}</td>
                                                    <td className="px-6 py-4">{producto.nombre}</td>
                                                    <td className="px-6 py-4">{producto.descripcion}</td>
                                                    <td className="px-6 py-4">{producto.cantidad_actual}</td>
                                                    <td className="px-6 py-4">{valorFormateado}</td>
                                                    <td className="px-6 py-4">{fechaFormateada}</td>
                                                    <td className="flex justify-center gap-1 px-6 py-4">
                                                        <button
                                                            className="block p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                                            type="button"
                                                            onClick={() => handleEdit(producto)}>
                                                            <BsPencilSquare className="text-base" />
                                                        </button>
                                                        <button
                                                            className="block p-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                                            type="button"
                                                            onClick={() => handleDelete(producto.producto_id)}>
                                                            <MdDelete className="text-base" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="px-6 py-4 text-center">
                                                No hay productos disponibles
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <Pagination
                                count={Math.ceil(productos.body?.data?.length / itemsPerPage)}
                                page={page}
                                onChange={handleChangePage}
                                color="primary"
                                className="flex justify-center my-4"
                            />
                        </>
                    )}
                </div>
            </div>
            {/* Componente de edición */}
            {productoEditado && (
                <EditarProduct
                    editProducto={editProducto}
                    productoEditado={productoEditado}
                    setProductoEditado={setProductoEditado}
                />
            )}
        </>
    );
};

export default Productos;

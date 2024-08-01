import { useState } from "react";
import useFetchProvedores from "./hook/useFetchProvedores";
import AgregarModal from "./components/AgregarModal/AgregarModal";
import Sidebar from "../../components/Sidebar";
import { MdDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { Pagination } from "@mui/material";
import EditarProveedores from "./components/EditarModal/EditarProveedores"; 
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Provedor = ({ onLogout }) => {
    const { proveedores, error, loading, addProveedores, editProveedores, deleteProveedores, fetchProveedores } =
        useFetchProvedores();
    const [page, setPage] = useState(1);
    const [proveedoresEditado, setProveedoresEditado] = useState(null); // Estado para el proveedores a editar
    const itemsPerPage = 5;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleEdit = (proveedores) => {
        console.log("Proveedores seleccionado para editar:", proveedores);
        setProveedoresEditado(proveedores); // Establece el proveedores a editar
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
                deleteProveedores(id);
                Swal.fire({
                    title: "¡Eliminado!",
                    text: "Tu provedor ha sido eliminado.",
                    icon: "success",
                });
            }
        });
    };

    const paginatedProveedores = proveedores.body?.data?.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <>
            <Sidebar onLogout={onLogout} />
            <div className="flex flex-col min-h-screen max-[768px]:w-full p-2 justify-center items-center">
                <div className="p-5 flex items-start w-full max-[768px]:pt-10">
                    <AgregarModal addProveedores={addProveedores} fetchProveedores={fetchProveedores} />
                </div>
                <div className="relative overflow-x-auto shadow-md rounded-lg w-full max-[768px]:w-full max-[768px]:p-2">
                    {loading && <p className="text-gray-500">Cargando proveedores...</p>}
                    {error && <p className="text-red-500">Error: {error}</p>}
                    {!loading && !error && (
                        <>
                            <table className="w-full text-sm text-center text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Id proveedor
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Nombre ditribuidora
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Nombre provedor
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Telefono
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Direccion
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="uppercase">
                                    {paginatedProveedores?.length > 0 ? (
                                        paginatedProveedores.map((proveedores) => (
                                            <tr key={proveedores.id} className="bg-white border-b">
                                                <td className="px-6 py-4">{proveedores.proveedor_id}</td>
                                                <td className="px-6 py-4">{proveedores.nombre}</td>
                                                <td className="px-6 py-4">{proveedores.contacto}</td>
                                                <td className="px-6 py-4">{proveedores.telefono}</td>
                                                <td className="px-6 py-4">{proveedores.direccion}</td>
                                                <td className="px-6 py-4 flex gap-1 justify-center">
                                                    <button
                                                        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center"
                                                        type="button"
                                                        onClick={() => handleEdit(proveedores)}>
                                                        <BsPencilSquare className="text-base" />
                                                    </button>
                                                    <button
                                                        className="block text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center"
                                                        type="button"
                                                        onClick={() => handleDelete(proveedores.proveedor_id)}>
                                                        <MdDelete className="text-base" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="px-6 py-4 text-center">
                                                No hay proveedores disponibles
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <Pagination
                                count={Math.ceil(proveedores.body?.data?.length / itemsPerPage)}
                                page={page}
                                onChange={handleChangePage}
                                color="primary"
                                className="my-4 flex justify-center"
                            />
                        </>
                    )}
                </div>
            </div>
            {/* Componente de edición */}
            {proveedoresEditado && (
                <EditarProveedores
                    editProveedores={editProveedores}
                    proveedoresEditado={proveedoresEditado}
                    setProveedoresEditado={setProveedoresEditado}
                />
            )}
        </>
    );
};

export default Provedor;

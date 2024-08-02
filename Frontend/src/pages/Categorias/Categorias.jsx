import { useState } from "react";
import useFetchCategorias from "./hook/useFetchCategorias";
import AgregarCategoria from "./components/AgregarCategoria/AgregarCategoria";
import Sidebar from "../../components/Sidebar";
import { MdDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { Pagination } from "@mui/material";
import EditarCategoria from "./components/EditarCategoria/EditarCategoria"; // Importa tu componente de edición
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Categorias = ({ onLogout }) => {
    const { categorias, error, loading, addCategoria, editCategoria, deleteCategoria, fetchCategorias } =
        useFetchCategorias();
    const [page, setPage] = useState(1);
    const [categoriaEditado, setCategoriasEditado] = useState(null); // Estado para el categoria a editar
    const itemsPerPage = 5;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleEdit = (categoria) => {
        console.log("Categoria seleccionado para editar:", categoria);
        setCategoriasEditado(categoria); // Establece el categoria a editar
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
                deleteCategoria(id);
                Swal.fire({
                    title: "¡Eliminado!",
                    text: "Tu categoría ha sido eliminada.",
                    icon: "success",
                });
            }
        });
    };

    const paginatedCategorias = categorias.body?.data?.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <>
            <Sidebar onLogout={onLogout} />
            <div className="flex flex-col min-h-screen  max-[768px]:w-full p-2 justify-center items-center">
                <div className="p-5 flex items-start w-full max-[768px]:pt-10">
                    <AgregarCategoria addCategoria={addCategoria} fetchCategorias={fetchCategorias} />
                </div>
                <div className="relative overflow-x-auto shadow-md rounded-lg w-full max-[768px]:w-full max-[768px]:p-2">
                    {loading && <p className="text-gray-500">Cargando categorías...</p>}
                    {error && <p className="text-red-500">Error: {error}</p>}
                    {!loading && !error && (
                        <>
                            <table className="w-full text-sm text-center text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Id categoría
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Nombre
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedCategorias?.length > 0 ? (
                                        paginatedCategorias.map((categoria) => (
                                            <tr key={categoria.categoria_id} className="bg-white border-b">
                                                <td className="px-6 py-4">{categoria.categoria_id}</td>
                                                <td className="px-6 py-4">{categoria.nombre}</td>
                                                <td className="flex justify-center gap-1 px-6 py-4">
                                                    <button
                                                        className="block p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                                        type="button"
                                                        onClick={() => handleEdit(categoria)}>
                                                        <BsPencilSquare className="text-base" />
                                                    </button>
                                                    <button
                                                        className="block p-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                                        type="button"
                                                        onClick={() => handleDelete(categoria.categoria_id)}>
                                                        <MdDelete className="text-base" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="px-6 py-4 text-center">
                                                No hay categorías disponibles
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <Pagination
                                count={Math.ceil(categorias.body?.data?.length / itemsPerPage)}
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
            {categoriaEditado && (
                <EditarCategoria
                    editCategoria={editCategoria}
                    categoriaEditado={categoriaEditado}
                    setCategoriasEditado={setCategoriasEditado}
                />
            )}
        </>
    );
};

export default Categorias;

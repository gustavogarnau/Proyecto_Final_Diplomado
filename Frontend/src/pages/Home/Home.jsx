import Sidebar from "../../components/Sidebar";
import Chart from "../../components/Charts/Chart";
import { Pagination } from "@mui/material";
import { useState } from "react";
import useFetchProductos from "../Productos/hook/useFetchProductos";
import CardsContainer from "./components/card/CardsContainer";

const Home = ({ onLogout }) => {
    const { productos, error, loading } =
        useFetchProductos();
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const paginatedProductos = productos.body?.data?.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    return (
        <>
            {/* Sidebar */}
            <Sidebar onLogout={onLogout} />

            <div className="flex flex-col max-[768px]:container p-2">
                {/* Main Content */}
                <div className="pt-12 max-[768px]:p-0 ">
                    <div className="flex w-full max-[768px]:gap-0 max-[768px]:pt-12 max-[768px]:justify-center justify-evenly">
                        <CardsContainer />
                    </div>
                    <div className="flex justify-center w-full p-4 pt-12 max-[768px]:pt-0">
                        <Chart />
                    </div>

                    <div className="relative overflow-x-auto shadow-md rounded-lg w-full max-[768px]:w-full max-[768px]:p-2">
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedProductos?.length > 0 ? (
                                            paginatedProductos.map((producto) => {
                                                // Formatea la fecha a un formato más sencillo
                                                const fecha = new Date(producto.fecha_registro);
                                                const fechaFormateada = fecha.toLocaleDateString(); // Puedes usar otras opciones para formatear la fecha

                                                const valorFormateado = Number(
                                                    producto.precio_por_gramo
                                                ).toLocaleString("es-ES", {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2,
                                                });

                                                return (
                                                    <tr key={producto.id} className="bg-white border-b">
                                                        <td className="px-6 py-4">{producto.producto_id}</td>
                                                        <td className="px-6 py-4">{producto.nombre}</td>
                                                        <td className="px-6 py-4">{producto.descripcion}</td>
                                                        <td className="px-6 py-4">{producto.cantidad_actual}</td>
                                                        <td className="px-6 py-4">{valorFormateado}</td>
                                                        <td className="px-6 py-4">{fechaFormateada}</td>
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
                                    className="flex justify-center pt-20 my-4"
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

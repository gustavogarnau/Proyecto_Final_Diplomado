import Sidebar from "../../components/Sidebar";
import Chart from "../../components/Charts/Chart";
import { Pagination } from "@mui/material";
import { useState } from "react";
import useFetchProductos from "../Productos/hook/useFetchProductos";

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
                <div className=" max-[768px]:p-0 ">
                    <div className="flex gap-2 max-[768px]:gap-0">
                        <div className="bg-white max-[768px]:w-40  w-52 shadow-md rounded-lg p-6 m-4 flex items-center">
                            <div className="mr-4 text-3xl text-blue-500">2</div>
                            <div>
                                <h2 className="text-xl max-[768px]:text-lg font-bold">Productos</h2>
                                <p className="text-2xl max-[768px]:text-lg font-semibold">en stock</p>
                            </div>
                        </div>
                        <div className="bg-white max-[768px]:w-40 w-52 shadow-md rounded-lg p-6 m-4 flex items-center">
                            <div className="mr-4 text-3xl text-blue-500">2</div>
                            <div>
                                <h2 className="text-xl max-[768px]:text-lg font-bold">Provedores</h2>
                                <p className="text-2xl max-[768px]:text-lg font-semibold">dfgssg</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center w-full p-4 ">
                        <Chart />
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedProductos?.length > 0 ? (
                                            paginatedProductos.map((producto) => (
                                                <tr key={producto.id} className="bg-white border-b">
                                                    <td className="px-6 py-4">{producto.producto_id}</td>
                                                    <td className="px-6 py-4">{producto.nombre}</td>
                                                    <td className="px-6 py-4">{producto.descripcion}</td>
                                                    <td className="px-6 py-4">{producto.cantidad_actual}</td>
                                                    <td className="px-6 py-4">{producto.precio_por_gramo}</td>
                                                    <td className="px-6 py-4">{producto.fecha_registro}</td>
                                                    
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
            </div>
        </>
    );
};

export default Home;

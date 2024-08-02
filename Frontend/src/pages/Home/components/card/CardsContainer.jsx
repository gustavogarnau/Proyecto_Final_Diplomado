// import React from "react";
import Cards from "./Cards";
import useFetchData from "../../hook/useFetchData ";
import { AiOutlineProduct } from "react-icons/ai"; // Importa los iconos necesarios

const CardsContainer = () => {
    const {
        data: CantidadTotalProductos,
        loading: loadingProductos,
        error: errorproductos,
    } = useFetchData("/total-productos");

    // const {
    //     data: valorInventarioPorProveedor,
    //     loading: loadingProveedor,
    //     error: errorProveedor,
    // } = useFetchData("/valor-inventario-proveedor");

    // || loadingProveedor
    if (loadingProductos) return <p>Loading...</p>;
    if (errorproductos) return <p>Error: {errorproductos}</p>;
    // || errorProveedor       || errorProveedor

    return (
        <div className="flex flex-wrap gap-5 max-[768px]:justify-center">
            {CantidadTotalProductos.body?.data?.map((item, index) => (
                <Cards
                    key={index}
                    title={`Total productos:`}
                    content={` ${item.total_productos}`}
                    icon={AiOutlineProduct} // Pasar el icono correspondiente
                />
            ))}
            {CantidadTotalProductos.body?.data?.map((item, index) => (
                <Cards
                    key={index}
                    title={`Total productos:`}
                    content={` ${item.total_productos}`}
                    icon={AiOutlineProduct} // Pasar el icono correspondiente
                />
            ))}
            {CantidadTotalProductos.body?.data?.map((item, index) => (
                <Cards
                    key={index}
                    title={`Total productos:`}
                    content={` ${item.total_productos}`}
                    icon={AiOutlineProduct} // Pasar el icono correspondiente
                />
            ))}
            {CantidadTotalProductos.body?.data?.map((item, index) => (
                <Cards
                    key={index}
                    title={`Total productos:`}
                    content={` ${item.total_productos}`}
                    icon={AiOutlineProduct} // Pasar el icono correspondiente
                />
            ))}
            {/* {valorInventarioPorProveedor.body?.data?.map((item, index) => (
                <Cards
                    key={index}
                    title={`Proveedor: ${item.proveedor}`}
                    content={` ${item.valor_total_inventario}`}
                    icon={AiOutlineDollar} // Pasar el icono correspondiente
                />
            ))} */}
            {/* Añade más tarjetas según sea necesario */}
        </div>
    );
};

export default CardsContainer;

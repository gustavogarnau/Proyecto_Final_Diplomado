// import React from "react";
import Cards from "./Cards";
import useFetchData from "../../hook/useFetchData ";
import { AiOutlineProduct } from "react-icons/ai"; // Importa los iconos necesarios
import { FaMoneyBillAlt } from "react-icons/fa";

const CardsContainer = () => {
    const {
        data: CantidadTotalProductos,
        loading: loadingProductos,
        error: errorproductos,
    } = useFetchData("/total-productos");

    const {
        data: valorTotalProductos,
        loading: loadingTotalProducto,
        error: errorProductos,
    } = useFetchData("/valor-total-productos");

    
    if (loadingProductos || loadingTotalProducto) return <p>Loading...</p>;
    if (errorproductos || errorProductos) return <p>Error: {errorproductos || errorProductos}</p>;
          

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
            {valorTotalProductos.body?.data?.map((item, index) => {
                // Asegurarse de que el valor es un número antes de formatearlo
                const valorFormateado = Number(item.valor_total_productos).toLocaleString("es-ES", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                });
                return (
                    <Cards
                        key={index}
                        title={`Valor total productos:`}
                        content={`$${valorFormateado}`}
                        icon={FaMoneyBillAlt} // Pasar el icono correspondiente
                    />
                );
            })}
            {/* {CantidadTotalProductos.body?.data?.map((item, index) => (
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
            ))} */}
        </div>
    );
};

export default CardsContainer;

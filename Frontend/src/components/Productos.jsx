import ModalProduct from "./ModalProduct";
import Sidebar from "./Sidebar";
import { MdDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";

const Productos = ({ onLogout }) => {
    return (
        <>
            <Sidebar onLogout={onLogout} />

            <div className="pt-14">
                <div className="p-5">
                    <ModalProduct />
                </div>
                <div className=" shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-center  text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">Apple MacBook Pro 17</td>
                                <td className="px-6 py-4">Silver</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4">$2999</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4 flex gap-1">
                                    <button
                                        className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center"
                                        type="button">
                                        <BsPencilSquare className="text-base" />
                                    </button>
                                    <button
                                        className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center"
                                        type="button">
                                        <MdDelete className="text-base" />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-white border-b ">
                                <td className="px-6 py-4">Microsoft Surface Pro</td>
                                <td className="px-6 py-4">White</td>
                                <td className="px-6 py-4">Laptop PC</td>
                                <td className="px-6 py-4">$1999</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4 flex gap-1">
                                    <button
                                        className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center "
                                        type="button">
                                        <BsPencilSquare className="text-base" />
                                    </button>
                                    <button
                                        className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center "
                                        type="button">
                                        <MdDelete className="text-base" />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">Magic Mouse 2</td>
                                <td className="px-6 py-4">Black</td>
                                <td className="px-6 py-4">Accessories</td>
                                <td className="px-6 py-4">$99</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4 flex gap-1">
                                    <button
                                        className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center "
                                        type="button">
                                        <BsPencilSquare className="text-base" />
                                    </button>
                                    <button
                                        className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center "
                                        type="button">
                                        <MdDelete className="text-base" />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">Magic Mouse 2</td>
                                <td className="px-6 py-4">Black</td>
                                <td className="px-6 py-4">Accessories</td>
                                <td className="px-6 py-4">$99</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4 flex gap-1">
                                    <button
                                        className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center "
                                        type="button">
                                        <BsPencilSquare className="text-base" />
                                    </button>
                                    <button
                                        className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center "
                                        type="button">
                                        <MdDelete className="text-base" />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">Magic Mouse 2</td>
                                <td className="px-6 py-4">Black</td>
                                <td className="px-6 py-4">Accessories</td>
                                <td className="px-6 py-4">$99</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4 flex gap-1">
                                    <button
                                        className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center "
                                        type="button">
                                        <BsPencilSquare className="text-base" />
                                    </button>
                                    <button
                                        className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center "
                                        type="button">
                                        <MdDelete className="text-base" />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">Magic Mouse 2</td>
                                <td className="px-6 py-4">Black</td>
                                <td className="px-6 py-4">Accessories</td>
                                <td className="px-6 py-4">$99</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4 flex gap-1">
                                    <button
                                        className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center "
                                        type="button">
                                        <BsPencilSquare className="text-base" />
                                    </button>
                                    <button
                                        className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center "
                                        type="button">
                                        <MdDelete className="text-base" />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">Magic Mouse 2</td>
                                <td className="px-6 py-4">Black</td>
                                <td className="px-6 py-4">Accessories</td>
                                <td className="px-6 py-4">$99</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4 flex gap-1">
                                    <button
                                        className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center "
                                        type="button">
                                        <BsPencilSquare className="text-base" />
                                    </button>
                                    <button
                                        className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center "
                                        type="button">
                                        <MdDelete className="text-base" />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">Magic Mouse 2</td>
                                <td className="px-6 py-4">Black</td>
                                <td className="px-6 py-4">Accessories</td>
                                <td className="px-6 py-4">$99</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4 flex gap-1">
                                    <button
                                        className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center "
                                        type="button">
                                        <BsPencilSquare className="text-base" />
                                    </button>
                                    <button
                                        className="button block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center "
                                        type="button">
                                        <MdDelete className="text-base" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Productos;

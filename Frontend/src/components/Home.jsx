import Sidebar from "./Sidebar";
import Chart from "./Charts/Chart";

const Home = ({ onLogout }) => {
    return (
        <>
            {/* Sidebar */}
            <Sidebar onLogout={onLogout} />

            <div className="flex flex-col max-[768px]:container">
                {/* Main Content */}
                <div className=" max-[768px]:p-0 ">
                    <div className="flex gap-2 max-[768px]:gap-0">
                        <div className="bg-white max-[768px]:w-40  w-52 shadow-md rounded-lg p-6 m-4 flex items-center">
                            <div className="text-3xl mr-4 text-blue-500">2</div>
                            <div>
                                <h2 className="text-xl max-[768px]:text-lg font-bold">Productos</h2>
                                <p className="text-2xl max-[768px]:text-lg font-semibold">en stock</p>
                            </div>
                        </div>
                        <div className="bg-white max-[768px]:w-40 w-52 shadow-md rounded-lg p-6 m-4 flex items-center">
                            <div className="text-3xl mr-4 text-blue-500">2</div>
                            <div>
                                <h2 className="text-xl max-[768px]:text-lg font-bold">Provedores</h2>
                                <p className="text-2xl max-[768px]:text-lg font-semibold">dfgssg</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 w-full  flex justify-center ">
                        <Chart />
                    </div>

                    <div className="p-2 relative overflow-x-auto">
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b d ">
                                    <td className="px-6 py-4 ">Apple MacBook Pro 17</td>
                                    <td className="px-6 py-4">Silver</td>
                                    <td className="px-6 py-4">Laptop</td>
                                    <td className="px-6 py-4">$2999</td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <td className="px-6 py-4 ">Microsoft Surface Pro</td>
                                    <td className="px-6 py-4">White</td>
                                    <td className="px-6 py-4">Laptop PC</td>
                                    <td className="px-6 py-4">$1999</td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <td className="px-6 py-4 ">Magic Mouse 2</td>
                                    <td className="px-6 py-4">Black</td>
                                    <td className="px-6 py-4">Accessories</td>
                                    <td className="px-6 py-4">$99</td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <td className="px-6 py-4 ">Magic Mouse 2</td>
                                    <td className="px-6 py-4">Black</td>
                                    <td className="px-6 py-4">Accessories</td>
                                    <td className="px-6 py-4">$99</td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <td className="px-6 py-4 ">Magic Mouse 2</td>
                                    <td className="px-6 py-4">Black</td>
                                    <td className="px-6 py-4">Accessories</td>
                                    <td className="px-6 py-4">$99</td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <td className="px-6 py-4 ">Magic Mouse 2</td>
                                    <td className="px-6 py-4">Black</td>
                                    <td className="px-6 py-4">Accessories</td>
                                    <td className="px-6 py-4">$99</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

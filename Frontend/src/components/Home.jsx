import Sidebar from "./Sidebar";
import Chart from "./Charts/Chart";

const Home = ({ onLogout }) => {
    return (
        <div className="container content_principal flex w-10/12">
            {/* Sidebar */}
            <Sidebar onLogout={onLogout} className="w-64 fixed h-full" />

            {/* Main Content */}
            <div className="content_card  flex-1 max-[768px]:ml-0 max-[768px]:p-1  p-6 max-[768px]:w-full">
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

                <div className="  shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
                                <td className="px-6 py-4 ">Apple MacBook Pro 17</td>
                                <td className="px-6 py-4">Silver</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4">$2999</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
                                <td className="px-6 py-4 ">Microsoft Surface Pro</td>
                                <td className="px-6 py-4">White</td>
                                <td className="px-6 py-4">Laptop PC</td>
                                <td className="px-6 py-4">$1999</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
                                <td className="px-6 py-4 ">Magic Mouse 2</td>
                                <td className="px-6 py-4">Black</td>
                                <td className="px-6 py-4">Accessories</td>
                                <td className="px-6 py-4">$99</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
                                <td className="px-6 py-4 ">Magic Mouse 2</td>
                                <td className="px-6 py-4">Black</td>
                                <td className="px-6 py-4">Accessories</td>
                                <td className="px-6 py-4">$99</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
                                <td className="px-6 py-4 ">Magic Mouse 2</td>
                                <td className="px-6 py-4">Black</td>
                                <td className="px-6 py-4">Accessories</td>
                                <td className="px-6 py-4">$99</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
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
    );
};

export default Home;

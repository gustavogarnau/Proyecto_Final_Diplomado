import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/register";
import { Activacion } from "./components/Activacion";

export function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/activate/:token" element={<Activacion />} />
            </Routes>
        </>
    );
}

export default App;

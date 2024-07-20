import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/register";
import { Activacion } from "./components/Activacion";
import Home from "./components/Home";

export function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/activate/:token" element={<Activacion />} />
                {/* home */}
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;

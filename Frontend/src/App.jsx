import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/register";

export function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register"  element={<Register />} />
            </Routes>
        </>
    );
}

export default App;

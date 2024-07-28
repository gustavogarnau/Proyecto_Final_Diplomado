// import React from 'react'
import Sidebar from "./Sidebar";

const Movimientos = ({ onLogout }) => {
    return (
        <>
            <Sidebar onLogout={onLogout} />
            <div>Movimientos</div>
        </>
    );
};

export default Movimientos;

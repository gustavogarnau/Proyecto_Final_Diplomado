import Sidebar from "../../components/Sidebar";

const Roles = ({ onLogout }) => {
    return (
        <>
            <Sidebar onLogout={onLogout} />
            <div>Roles</div>
        </>
    );
};

export default Roles;

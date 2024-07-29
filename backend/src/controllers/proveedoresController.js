const Pool = require("../../config/pg")

const getProveedores = async () => {
    const query = "SELECT * FROM proveedores";
    const proveedores = await Pool.query(query, []);
    return proveedores;
}

const getProveedoresId = async ( id = "")=>{
    const query = "SELECT  * FROM usuarios WHERE id = $1"
    const parametros = [id]
    const proveedores = await Pool.query(query, parametros);
    return proveedores;
}

const postCrearProveedor = async (proveedor = {}) => {
    const { nombre, contacto, telefono, direccion} = proveedor
    const query = "INSERT INTO proveedores (nombre, contacto, telefono, direccion) VALUES ($1, $2, $3, $4)";
    const parametros = [nombre, contacto, telefono, direccion];
    const proveedores = await Pool.query(query, parametros)
    return proveedores;
}

const putActualizarProveedor = async ( id = "", proveedor = {} ) => {
    const { nombre, contacto, telefono, direccion } = proveedor
    const query = "UPDATE proveedores SET nombre = $1, contacto = $2, telefono = $3, direccion = $4 WHERE proveedor_id = $5";
    const parametros = [nombre, contacto, telefono, direccion, id];
    const proveedores = await Pool.query(query, parametros);
    return proveedores;
}

const deleteEliminarProveedor = async ( id = "") => {
    const query = "DELETE FROM proveedores WHERE proveedor_id = $1";
    const parametros = [id];
    const proveedores = await Pool.query(query, parametros);
    return proveedores;
}



module.exports = {
    getProveedores,
    getProveedoresId,
    postCrearProveedor,
    putActualizarProveedor,
    deleteEliminarProveedor
}
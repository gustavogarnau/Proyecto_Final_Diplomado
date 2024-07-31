const Pool = require("../../config/pg")

const getProductos = async () => {
    const query = "SELECT * FROM productos";
    const productos = await Pool.query(query)
    return productos;
}

const getProductosId = async ( id = "")=>{
    const query = "SELECT  * FROM productos WHERE producto_id = $1"
    const parametros = [id]
    const productos = await Pool.query(query, parametros)
    return productos;
}

const postCrearProducto = async (producto = {}) => {
    const { nombre, descripcion, precio_por_gramo, cantidad_actual, proveedor_id, categoria_id } = producto;
    const query = "INSERT INTO productos (nombre, descripcion, precio_por_gramo, cantidad_actual, proveedor_id, categoria_id) VALUES ($1, $2, $3, $4, $5, $6)";
    const parametros = [nombre, descripcion, precio_por_gramo, cantidad_actual, proveedor_id, categoria_id];
    const productos = await Pool.query(query, parametros);
    return productos;
}

const putActualizarProducto = async ( id = "", producto = {}) => {
    const { nombre, descripcion, precio, cantidad, proveedor_id, categoria_id } = producto;
    const query = "UPDATE productos SET nombre = $1, descripcion = $2, precio = $3, cantidad = $4, proveedor_id = $5, categoria_id = $6 WHERE producto_id = $7";
    const parametros = [nombre, descripcion, precio, cantidad, proveedor_id, categoria_id, id];
    const productos = await Pool.query(query, parametros);
    return productos;
}

const deleteEliminarProducto = async ( id = "") => {
    const query = "DELETE FROM productos WHERE producto_id = $1";
    const parametros = [id];
    const productos = await Pool.query(query, parametros)
    return productos;
}

module.exports = {
    getProductos,
    getProductosId,
    postCrearProducto,
    putActualizarProducto,
    deleteEliminarProducto
}
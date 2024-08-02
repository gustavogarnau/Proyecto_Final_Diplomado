const Pool = require("../../config/pg")

const getCategorias = async () => {
    const query = "SELECT * FROM categorias";
    const categorias = await Pool.query(query, []);
    return categorias;
}

const getCategoriasId = async ( id = "")=>{
    const query = "SELECT  * FROM categorias WHERE categoria_id = $1"
    const parametros = [id]
    const categorias = await Pool.query(query, parametros);
    return categorias;
}

const posCrearCategoira = async ( categoria = {}) => {
    const { nombre } = categoria;
    const query = "INSERT INTO categorias (nombre) VALUES ($1)";
    const parametros = [nombre, ];
    const categorias = await Pool.query(query, parametros);
    return categorias;
}

const putActualizarCategoria = async ( id = "", categoria = {}) => {
    const { nombre } = categoria;
    const query = "UPDATE categorias SET nombre = $1 WHERE categoria_id = $2";
    const parametros = [nombre, id];
    const categorias = await Pool.query(query, parametros);
    return categorias;
}

const deleteEliminarCategoria = async ( id = "") => {
    const query = "DELETE FROM categorias WHERE categoria_id = $1";
    const parametros = [id];
    const categorias = await Pool.query(query, parametros);
    return categorias;
}

module.exports = {
    getCategorias,
    getCategoriasId,
    posCrearCategoira,
    putActualizarCategoria,
    deleteEliminarCategoria
}
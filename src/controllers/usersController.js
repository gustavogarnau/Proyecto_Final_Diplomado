const Pool = require("../../config/pg");

const getUsers = async () => {
    const query = "SELECT * FROM usuarios";
    const users = await Pool.query(query, []);
    return users;
}

const getUserId = async (id = 0) => {
    const query = "SELECT * FROM usuarios WHERE usuario_id=$1";
    const parametros = [id];
    const users = await Pool.query(query, parametros);
    return users;
}

const postCreateUser = async (usuario = {}) => {
    const { cedula, nombre, apellido, correo, telefono, ciudad, direccion, password } = usuario;
    const query = "INSERT INTO usuarios (cedula, nombre, apellido, correo, telefono, ciudad, direccion, password, activo = 1) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
    console.log("query:", query);
    const parametros = [cedula, nombre, apellido, correo, telefono, ciudad, direccion, password];
    console.log(parametros)
    const users = await Pool.query(query, parametros);
    console.log("usuarios:", users)
    return users;
}

const putUpdateUser = async ( id = "" , usuario = {} ) => {
    const { cedula, nombre, apellido, correo, telefono, ciudad, direccion } = usuario
    const query = "UPDATE usuarios SET cedula = $1, nombre = $2, apellido = $3, correo = $4, telefono = $5, ciudad $6, direccion = $7 WHERE id = $8";
    const parametros = [cedula, nombre, apellido, correo, telefono, ciudad, direccion, id];
    const users = await Pool.query(query, parametros);
    return users;
}

module.exports = {
    getUsers, getUserId, postCreateUser, putUpdateUser
}
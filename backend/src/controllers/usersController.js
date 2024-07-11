const Pool = require("../../config/pg");
const bcrypt = require("bcrypt");

const getUsers = async () => {
    const query = "SELECT * FROM usuarios";
    const users = await Pool.query(query, []);
    return users;
}

const getUserId = async (id = "") => {
    const query = "SELECT * FROM usuarios WHERE usuario_id=$1";
    const parametros = [id];
    const users = await Pool.query(query, parametros);
    return users;
}

const postCreateUser = async (usuario = {}) => {
    const { cedula, nombre, apellido, correo, telefono, ciudad, direccion, password } = usuario;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const query = "INSERT INTO usuarios (cedula, nombre, apellido, correo, telefono, ciudad, direccion, password, activo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, true)";
    const parametros = [cedula, nombre, apellido, correo, telefono, ciudad, direccion, hashedPassword];
    const users = await Pool.query(query, parametros);
    return users;
}

const putUpdateUser = async ( id = "" , usuario = {} ) => {
    const { cedula, nombre, apellido, correo, telefono, ciudad, direccion } = usuario
    const query = "UPDATE usuarios SET cedula = $1, nombre = $2, apellido = $3, correo = $4, telefono = $5, ciudad = $6, direccion = $7 WHERE usuario_id = $8";
    const parametros = [cedula, nombre, apellido, correo, telefono, ciudad, direccion, id];
    const users = await Pool.query(query, parametros);
    return users;
}

const deleteUser = async ( id = "" ) => {
    const query = "DELETE FROM usuarios WHERE usuario_id = $1";
    const parametros = [id];
    const users = await Pool.query(query, parametros);
    return users; 
}

module.exports = {
    getUsers, getUserId, postCreateUser, putUpdateUser, deleteUser
}
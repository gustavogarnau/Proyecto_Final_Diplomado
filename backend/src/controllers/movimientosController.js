const Pool = require("../../config/pg");

const getMovimientos = async () => {
    const query = "SELECT * FROM movimientos";
    const movimientos = await Pool.query(query);
    return movimientos;
}

const getMovimientoId = async (id = "") => {
    const query = "SELECT * FROM movimientos WHERE movimiento_id = $1";
    const parametros = [id];
    const movimiento = await Pool.query(query, parametros);
    return movimiento;
}

const postCrearMovimiento = async (movimiento = {}) => {
    const { producto_id, cantidad, tipo_movimiento, fecha_movimiento, observaciones } = movimiento;
    const query = "INSERT INTO movimientos (producto_id, cantidad, tipo_movimiento, fecha_movimiento, observaciones) VALUES ($1, $2, $3, $4, $5)";
    const parametros = [producto_id, cantidad, tipo_movimiento, fecha_movimiento, observaciones];
    const nuevoMovimiento = await Pool.query(query, parametros);
    return nuevoMovimiento;
}

const putActualizarMovimiento = async (id = "", movimiento = {}) => {
    const { producto_id, cantidad, tipo_movimiento, fecha_movimiento, observaciones } = movimiento;
    const query = "UPDATE movimientos SET producto_id = $1, cantidad = $2, tipo_movimiento = $3, fecha_movimiento = $4, observaciones = $5 WHERE movimiento_id = $6";
    const parametros = [producto_id, cantidad, tipo_movimiento, fecha_movimiento, observaciones, id];
    const movimientoActualizado = await Pool.query(query, parametros);
    return movimientoActualizado;
}

const deleteEliminarMovimiento = async (id = "") => {
    const query = "DELETE FROM movimientos WHERE movimiento_id = $1";
    const parametros = [id];
    const movimientoEliminado = await Pool.query(query, parametros);
    return movimientoEliminado;
}

module.exports = {
    getMovimientos,
    getMovimientoId,
    postCrearMovimiento,
    putActualizarMovimiento,
    deleteEliminarMovimiento
}

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
    
    // Iniciar una transacción
    const client = await Pool.connect();
    try {
        await client.query('BEGIN');

        // Insertar el movimiento en la tabla movimientos
        const queryMovimiento = "INSERT INTO movimientos (producto_id, cantidad, tipo_movimiento, fecha_movimiento, observaciones) VALUES ($1, $2, $3, $4, $5) RETURNING *";
        const parametrosMovimiento = [producto_id, cantidad, tipo_movimiento, fecha_movimiento, observaciones];
        const nuevoMovimiento = await client.query(queryMovimiento, parametrosMovimiento);

        // Actualizar la cantidad_actual del producto
        let queryUpdateProducto;
        if (tipo_movimiento === 'entrada') {
            queryUpdateProducto = "UPDATE productos SET cantidad_actual = cantidad_actual + $1 WHERE producto_id = $2";
        } else if (tipo_movimiento === 'salida') {
            queryUpdateProducto = "UPDATE productos SET cantidad_actual = cantidad_actual - $1 WHERE producto_id = $2";
        }

        const parametrosUpdateProducto = [cantidad, producto_id];
        await client.query(queryUpdateProducto, parametrosUpdateProducto);

        // Confirmar la transacción
        await client.query('COMMIT');
        return nuevoMovimiento.rows[0];
    } catch (error) {
        // Revertir la transacción en caso de error
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
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

const Pool = require("../../config/pg");

// 1. Cantidad de Productos por Categoría
const getCantidadProductosPorCategoria = async () => {
  const query = `
        SELECT c.nombre AS categoria, COUNT(p.producto_id) AS cantidad_productos
        FROM categorias c
        JOIN productos p ON c.categoria_id = p.categoria_id
        GROUP BY c.categoria_id, c.nombre;
    `;
  const resultado = await Pool.query(query);
  return resultado.rows;
};

//  cantidad total de categorias
// const getCantidadTotalCategorias = async() => {
//   const query = 
//         `SELECT COUNT(p.producto_id) AS total
//         FROM categorias c
//         JOIN productos p ON c.categoria_id = p.categoria_id`;
//   const resultado = await Pool.query(query);
//   return resultado.rows;
// }

// 2. Valor Total del Inventario por Proveedor
const getValorTotalInventarioPorProveedor = async () => {
  const query = `
        SELECT pr.nombre AS proveedor, SUM(p.cantidad_actual * p.precio_por_gramo) AS valor_total_inventario
        FROM proveedores pr
        JOIN productos p ON pr.proveedor_id = p.proveedor_id
        GROUP BY pr.proveedor_id, pr.nombre;
    `;
  const resultado = await Pool.query(query);
  return resultado.rows;
};

// 3. Productos con Mayor Movimiento
const getProductosMayorMovimiento = async () => {
  const query = `
        SELECT p.nombre AS producto, SUM(mi.cantidad) AS cantidad_movida
        FROM productos p
        JOIN movimientosinventario mi ON p.producto_id = mi.producto_id
        GROUP BY p.producto_id, p.nombre
        ORDER BY cantidad_movida DESC
        LIMIT 10;
    `;
  const resultado = await Pool.query(query);
  return resultado.rows;
};

// 4. Entradas y Salidas de Productos por Mes
const getEntradasSalidasPorMes = async () => {
  const query = `
        SELECT TO_CHAR(mi.fecha_movimiento, 'YYYY-MM') AS mes,
               p.nombre AS producto,
               SUM(CASE WHEN mi.tipo_movimiento = 'entrada' THEN mi.cantidad ELSE 0 END) AS total_entradas,
               SUM(CASE WHEN mi.tipo_movimiento = 'salida' THEN mi.cantidad ELSE 0 END) AS total_salidas
        FROM movimientosinventario mi
        JOIN productos p ON mi.producto_id = p.producto_id
        GROUP BY mes, p.producto_id, p.nombre
        ORDER BY mes;
    `;
  const resultado = await Pool.query(query);
  return resultado.rows;
};

// 5. Proveedores con Mayor Cantidad de Productos Suministrados
const getProveedoresMayorCantidadProductos = async () => {
  const query = `
        SELECT pr.nombre AS proveedor, COUNT(p.producto_id) AS cantidad_productos
        FROM proveedores pr
        JOIN productos p ON pr.proveedor_id = p.proveedor_id
        GROUP BY pr.proveedor_id, pr.nombre
        ORDER BY cantidad_productos DESC
        LIMIT 10;
    `;
  const resultado = await Pool.query(query);
  return resultado.rows;
};

// 5.1 TOTAL PRODUCTOS
const getTotalProductos = async () => {
    const query = `
        SELECT  COUNT(p.producto_id) AS total_productos
        FROM proveedores pr
        JOIN productos p ON pr.proveedor_id = p.proveedor_id;
    `;
    const resultado = await Pool.query(query);
    return resultado.rows;
};

// 6. Usuarios Activos por Ciudad
const getUsuariosActivosPorCiudad = async () => {
  const query = `
        SELECT ciudad, COUNT(usuario_id) AS usuarios_activos
        FROM usuarios
        WHERE activo = true
        GROUP BY ciudad;
    `;
  const resultado = await Pool.query(query);
  return resultado.rows;
};

// 7. Promedio de Precio por Gramo por Categoría
const getPromedioPrecioPorCategoria = async () => {
  const query = `
        SELECT c.nombre AS categoria, AVG(p.precio_por_gramo) AS promedio_precio
        FROM categorias c
        JOIN productos p ON c.categoria_id = p.categoria_id
        GROUP BY c.categoria_id, c.nombre;
    `;
  const resultado = await Pool.query(query);
  return resultado.rows;
};

// 8. Movimiento de Inventario Reciente (Últimos 30 Días)
const getMovimientoReciente = async () => {
  const query = `
        SELECT mi.fecha_movimiento, p.nombre AS producto, mi.tipo_movimiento, mi.cantidad, mi.observaciones
        FROM movimientosinventario mi
        JOIN productos p ON mi.producto_id = p.producto_id
        WHERE mi.fecha_movimiento >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
        ORDER BY mi.fecha_movimiento DESC;
    `;
  const resultado = await Pool.query(query);
  return resultado.rows;
};

// 9. Productos con Baja Cantidad Actual
const getProductosBajaCantidad = async () => {
  const query = `
        SELECT p.nombre AS producto, p.cantidad_actual
        FROM productos p
        WHERE p.cantidad_actual < 10
        ORDER BY p.cantidad_actual ASC;
    `;
  const resultado = await Pool.query(query);
  return resultado.rows;
};

// 10. Historial de Movimientos por Producto
const getHistorialMovimientosProducto = async (id) => {
  const query = `
        SELECT p.nombre AS producto, mi.fecha_movimiento, mi.tipo_movimiento, mi.cantidad, mi.observaciones
        FROM movimientosinventario mi
        JOIN productos p ON mi.producto_id = p.producto_id
        WHERE p.producto_id = $1
        ORDER BY mi.fecha_movimiento DESC;
    `;
  const parametros = [id];
  const resultado = await Pool.query(query, parametros);
  return resultado.rows;
};

module.exports = {
  getCantidadProductosPorCategoria,
  // getCantidadTotalCategorias,
  getTotalProductos,
  getValorTotalInventarioPorProveedor,
  getProductosMayorMovimiento,
  getEntradasSalidasPorMes,
  getProveedoresMayorCantidadProductos,
  getUsuariosActivosPorCiudad,
  getPromedioPrecioPorCategoria,
  getMovimientoReciente,
  getProductosBajaCantidad,
  getHistorialMovimientosProducto,
};

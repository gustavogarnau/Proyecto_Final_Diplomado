const Pool = require("../../config/pg");

// Obtener todos los productos
const getProductos = async () => {
  try {
    const query = "SELECT * FROM productos";
    const productos = await Pool.query(query);
    return productos.rows;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  }
};

// Obtener un producto por su ID
const getProductosId = async (id = "") => {
  try {
    const query = "SELECT * FROM productos WHERE producto_id = $1";
    const parametros = [id];
    const productos = await Pool.query(query, parametros);
    return productos.rows[0];
  } catch (error) {
    console.error(`Error al obtener el producto con ID ${id}:`, error);
    throw error;
  }
};

// Crear un nuevo producto
const postCrearProducto = async (producto = {}) => {
  const { nombre, descripcion, precio, cantidad, proveedor_id, categoria_id } =
    producto;
  const query =
    "INSERT INTO productos (nombre, descripcion, precio_por_gramo, cantidad_actual, proveedor_id, categoria_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
  const parametros = [
    nombre,
    descripcion,
    precio,
    cantidad,
    proveedor_id,
    categoria_id,
  ];
  try {
    const nuevoProducto = await Pool.query(query, parametros);
    return nuevoProducto.rows[0];
  } catch (error) {
    console.error("Error al crear el producto:", error);
    throw error;
  }
};

// Actualizar un producto existente
const putActualizarProducto = async (id = "", producto = {}) => {
  const { nombre, descripcion, precio, cantidad, proveedor_id, categoria_id } =
    producto;
  const query =
    "UPDATE productos SET nombre = $1, descripcion = $2, precio_por_gramo = $3, cantidad_actual = $4, proveedor_id = $5, categoria_id = $6 WHERE producto_id = $7 RETURNING *";
  const parametros = [
    nombre,
    descripcion,
    precio,
    cantidad,
    proveedor_id,
    categoria_id,
    id,
  ];
  try {
    const productoActualizado = await Pool.query(query, parametros);
    return productoActualizado.rows[0];
  } catch (error) {
    console.error(`Error al actualizar el producto con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar un producto por su ID
const deleteEliminarProducto = async (id = "") => {
  const query = "DELETE FROM productos WHERE producto_id = $1 RETURNING *";
  const parametros = [id];
  try {
    const productoEliminado = await Pool.query(query, parametros);
    return productoEliminado.rows[0];
  } catch (error) {
    console.error(`Error al eliminar el producto con ID ${id}:`, error);
    throw error;
  }
};

module.exports = {
  getProductos,
  getProductosId,
  postCrearProducto,
  putActualizarProducto,
  deleteEliminarProducto,
};

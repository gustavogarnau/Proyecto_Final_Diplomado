const express = require("express");
const router = express.Router();

const { jsonResponse } = require("../../lib/jsonResponse");

const {
  getCantidadProductosPorCategoria,
  getValorTotalInventarioPorProveedor,
  getProductosMayorMovimiento,
  getEntradasSalidasPorMes,
  getProveedoresMayorCantidadProductos,
  getUsuariosActivosPorCiudad,
  getPromedioPrecioPorCategoria,
  getMovimientoReciente,
  getProductosBajaCantidad,
  getHistorialMovimientosProducto,
} = require("../controllers/estadisticasController");

// Ruta para obtener la cantidad de productos por categoría
router.get("/cantidad-productos-categoria", (req, res) => {
  getCantidadProductosPorCategoria()
    .then((result) => {
      res.json(
        jsonResponse(200, {
          message: "Cantidad de productos por categoría:",
          data: result,
        })
      );
    })
    .catch((error) => {
      console.error(
        "Error al obtener la cantidad de productos por categoría:",
        error
      );
      res.json(
        jsonResponse(500, {
          error: "Error al obtener la cantidad de productos por categoría",
        })
      );
    });
});

// Ruta para obtener el valor total del inventario por proveedor
router.get("/valor-inventario-proveedor", (req, res) => {
  getValorTotalInventarioPorProveedor()
    .then((result) => {
      res.json(
        jsonResponse(200, {
          message: "Valor total del inventario por proveedor:",
          data: result,
        })
      );
    })
    .catch((error) => {
      console.error(
        "Error al obtener el valor total del inventario por proveedor:",
        error
      );
      res.json(
        jsonResponse(500, {
          error: "Error al obtener el valor total del inventario por proveedor",
        })
      );
    });
});

// Ruta para obtener los productos con mayor movimiento
router.get("/productos-mayor-movimiento", (req, res) => {
  getProductosMayorMovimiento()
    .then((result) => {
      res.json(
        jsonResponse(200, {
          message: "Productos con mayor movimiento:",
          data: result,
        })
      );
    })
    .catch((error) => {
      console.error(
        "Error al obtener los productos con mayor movimiento:",
        error
      );
      res.json(
        jsonResponse(500, {
          error: "Error al obtener los productos con mayor movimiento",
        })
      );
    });
});

// Ruta para obtener las entradas y salidas de productos por mes
router.get("/entradas-salidas-mes", (req, res) => {
  getEntradasSalidasPorMes()
    .then((result) => {
      res.json(
        jsonResponse(200, {
          message: "Entradas y salidas de productos por mes:",
          data: result,
        })
      );
    })
    .catch((error) => {
      console.error(
        "Error al obtener las entradas y salidas de productos por mes:",
        error
      );
      res.json(
        jsonResponse(500, {
          error: "Error al obtener las entradas y salidas de productos por mes",
        })
      );
    });
});

// Ruta para obtener los proveedores con mayor cantidad de productos suministrados
router.get("/proveedores-mayor-cantidad-productos", (req, res) => {
  getProveedoresMayorCantidadProductos()
    .then((result) => {
      res.json(
        jsonResponse(200, {
          message: "Proveedores con mayor cantidad de productos suministrados:",
          data: result,
        })
      );
    })
    .catch((error) => {
      console.error(
        "Error al obtener los proveedores con mayor cantidad de productos suministrados:",
        error
      );
      res.json(
        jsonResponse(500, {
          error:
            "Error al obtener los proveedores con mayor cantidad de productos suministrados",
        })
      );
    });
});

// Ruta para obtener usuarios activos por ciudad
router.get("/usuarios-activos-ciudad", (req, res) => {
  getUsuariosActivosPorCiudad()
    .then((result) => {
      res.json(
        jsonResponse(200, {
          message: "Usuarios activos por ciudad:",
          data: result,
        })
      );
    })
    .catch((error) => {
      console.error("Error al obtener los usuarios activos por ciudad:", error);
      res.json(
        jsonResponse(500, {
          error: "Error al obtener los usuarios activos por ciudad",
        })
      );
    });
});

// Ruta para obtener el promedio de precio por gramo por categoría
router.get("/promedio-precio-categoria", (req, res) => {
  getPromedioPrecioPorCategoria()
    .then((result) => {
      res.json(
        jsonResponse(200, {
          message: "Promedio de precio por gramo por categoría:",
          data: result,
        })
      );
    })
    .catch((error) => {
      console.error(
        "Error al obtener el promedio de precio por gramo por categoría:",
        error
      );
      res.json(
        jsonResponse(500, {
          error:
            "Error al obtener el promedio de precio por gramo por categoría",
        })
      );
    });
});

// Ruta para obtener el movimiento de inventario reciente (últimos 30 días)
router.get("/movimiento-reciente", (req, res) => {
  getMovimientoReciente()
    .then((result) => {
      res.json(
        jsonResponse(200, {
          message: "Movimiento de inventario reciente:",
          data: result,
        })
      );
    })
    .catch((error) => {
      console.error(
        "Error al obtener el movimiento de inventario reciente:",
        error
      );
      res.json(
        jsonResponse(500, {
          error: "Error al obtener el movimiento de inventario reciente",
        })
      );
    });
});

// Ruta para obtener los productos con baja cantidad actual
router.get("/productos-baja-cantidad", (req, res) => {
  getProductosBajaCantidad()
    .then((result) => {
      res.json(
        jsonResponse(200, {
          message: "Productos con baja cantidad actual:",
          data: result,
        })
      );
    })
    .catch((error) => {
      console.error(
        "Error al obtener los productos con baja cantidad actual:",
        error
      );
      res.json(
        jsonResponse(500, {
          error: "Error al obtener los productos con baja cantidad actual",
        })
      );
    });
});

// Ruta para obtener el historial de movimientos por producto
router.get("/historial-movimientos-producto/:id", (req, res) => {
  const id = req.params.id;
  getHistorialMovimientosProducto(id)
    .then((result) => {
      res.json(
        jsonResponse(200, {
          message: `Historial de movimientos para el producto ${id}:`,
          data: result,
        })
      );
    })
    .catch((error) => {
      console.error(
        `Error al obtener el historial de movimientos para el producto ${id}:`,
        error
      );
      res.json(
        jsonResponse(500, {
          error: `Error al obtener el historial de movimientos para el producto ${id}`,
        })
      );
    });
});

module.exports = router;

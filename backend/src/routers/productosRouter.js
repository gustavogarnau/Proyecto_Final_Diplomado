const express = require("express");
const router = express.Router();

const { jsonResponse } = require("../../lib/jsonResponse");

const {
  getProductos,
  getProductosId,
  postCrearProducto,
  putActualizarProducto,
  deleteEliminarProducto,
} = require("../controllers/productosController");

// Ruta para obtener todos los productos
router.get("/", (req, res) => {
  getProductos()
    .then((result) => {
      res.json(
        jsonResponse(200, {
          message: "Productos obtenidos exitosamente",
          data: result,
        })
      );
    })
    .catch((error) => {
      console.error("Error al obtener los productos:", error);
      res.json(jsonResponse(500, { error: "Error al obtener los productos" }));
    });
});

// Ruta para obtener un producto por su ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  getProductosId(id)
    .then((result) => {
      if (!result) {
        res.json(
          jsonResponse(404, { error: `Producto con ID ${id} no encontrado` })
        );
        return;
      }
      res.json(
        jsonResponse(200, {
          message: `Producto con ID ${id} obtenido exitosamente`,
          data: result,
        })
      );
    })
    .catch((error) => {
      console.error(`Error al obtener el producto con ID ${id}:`, error);
      res.json(
        jsonResponse(500, {
          error: `Error al obtener el producto con ID ${id}`,
        })
      );
    });
});

// Ruta para crear un nuevo producto
router.post("/", (req, res) => {
  postCrearProducto(req.body)
    .then((result) => {
      res.json(
        jsonResponse(200, {
          message: "Producto creado exitosamente",
          data: result,
        })
      );
    })
    .catch((error) => {
      console.error("Error al crear el producto:", error);
      res.json(jsonResponse(500, { error: "Error al crear el producto" }));
    });
});

// Ruta para actualizar un producto por su ID
router.put("/:id", (req, res) => {
  putActualizarProducto(req.params.id, req.body)
    .then((result) => {
      res.json(
        jsonResponse(200, {
          message: "Producto actualizado exitosamente",
          data: result,
        })
      );
    })
    .catch((error) => {
      console.error(
        `Error al actualizar el producto con ID ${req.params.id}:`,
        error
      );
      res.json(
        jsonResponse(500, {
          error: `Error al actualizar el producto con ID ${req.params.id}`,
        })
      );
    });
});

// Ruta para eliminar un producto por su ID
router.delete("/:id", (req, res) => {
  deleteEliminarProducto(req.params.id)
    .then((result) => {
      if (!result) {
        res.json(
          jsonResponse(404, {
            error: `Producto con ID ${req.params.id} no encontrado`,
          })
        );
        return;
      }
      res.json(
        jsonResponse(200, {
          message: "Producto eliminado exitosamente",
          data: result,
        })
      );
    })
    .catch((error) => {
      console.error(
        `Error al eliminar el producto con ID ${req.params.id}:`,
        error
      );
      res.json(
        jsonResponse(500, {
          error: `Error al eliminar el producto con ID ${req.params.id}`,
        })
      );
    });
});

module.exports = router;

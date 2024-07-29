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

router.get("/", (req, res) => {
  getProductos()
    .then((result) => {
      res.json(jsonResponse(200, { message: "productos:", data: result.rows }));
    })
    .catch((error) => {
      console.error("Error al obtener los productos:", error);
      res.json(jsonResponse(500, { error: "Error al obtener los productos" }));
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  getProductosId(id)
    .then((result) => {
      if (result.rows.length === 0) {
        res.json(jsonResponse(404, { error: `Producto ${id} no encontrado` }));
        return;
      }
      res.json(
        jsonResponse(200, {
          message: `producto ${id} encontrado`,
          data: result.rows,
        })
      );
    })
    .catch((error) => {
      console.error("error al obtener los productos por id:", error);
      res.json(
        jsonResponse(500, { error: "Error al obtener el producto por id" })
      );
    });
});

router.post("", (req, res) => {
  postCrearProducto(req.body)
    .then((result) => {
      res.json(jsonResponse(200, { message: "producto creado exitosamente" }));
    })
    .catch((error) => {
      console.error("error al crear el producto", error);
      res.json(jsonResponse(500, { error: "Error al crear el producto" }));
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  putActualizarProducto(id, req.body)
    .then((result) => {
      res.json(
        jsonResponse(200, {
          message: `Producto ${id} actualizado exitosamente`,
        })
      );
    })
    .catch((error) => {
      console.error("error al actualizar el producto", error);
      res.json(jsonResponse(500, { error: "Error al actualizar el producto" }));
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  deleteEliminarProducto(id)
    .then((result) => {
      res.json(
        jsonResponse(200, { message: `Producto ${id} eliminado exitosamente` })
      );
    })
    .catch((error) => {
      console.error("error al eliminar el producto", error);
      res.json(jsonResponse(500, { error: "Error al eliminar el producto" }));
    });
});

module.exports = router;

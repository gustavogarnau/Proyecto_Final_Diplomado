const express = require("express");
const router = express.Router();

const { jsonResponse } = require("../../lib/jsonResponse");

const {
  getProveedores,
  getProveedoresId,
  postCrearProveedor,
  putActualizarProveedor,
  deleteEliminarProveedor,
} = require("../controllers/proveedoresController");

// Ruta de proveedores

router.get("/", (req, res) => {
  getProveedores()
    .then((result) => {
      res.json(
        jsonResponse(200, { message: "proveedores:", data: result.rows })
      );
    })
    .catch((error) => {
      console.error("Error al obtener los proveedores:", error);
      res.json(
        jsonResponse(500, { error: "Error al obtener los proveedores" })
      );
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  getProveedoresId(id)
    .then((result) => {
      if (result.rows.id === 0) {
        res.json(jsonResponse(404, { error: `Proveedor ${id} no encontrado` }));
        return;
      }
      res.json(
        jsonResponse(200, {
          message: `Proveedor ${id} encontrado`,
          data: result.rows,
        })
      );
    })
    .catch((error) => {
      console.error("Error al obtener los proveedores por id:", error);
      res.json(
        jsonResponse(500, { error: "Error al obtener el proveedor por id" })
      );
    });
});

router.post("", (req, res) => {
  postCrearProveedor(req.body)
    .then((result) => {
      res.json(jsonResponse(200, { message: "Proveedor creado exitosamente" }));
    })
    .catch((error) => {
      console.error("Error al crear el proveedor", error);
      res.json(jsonResponse(500, { error: "Error al crear el proveedor" }));
    });
});

router.put("/:id", (req, res) => {
  putActualizarProveedor(req.params.id, req.body)
    .then((result) => {
      res.json(
        jsonResponse(200, { message: "Proveedor actualizado exitosamente" })
      );
    })
    .catch((error) => {
      console.error("Error al actualizar el proveedor", error);
      res.json(
        jsonResponse(500, { error: "Error al actualizar el proveedor" })
      );
    });
});

router.delete("/:id", (req, res) => {
  deleteEliminarProveedor(req.params.id)
    .then((result) => {
      res.json(
        jsonResponse(200, { message: "Proveedor eliminado exitosamente" })
      );
    })
    .catch((error) => {
      console.error("Error al eliminar el proveedor", error);
      res.json(jsonResponse(500, { error: "Error al eliminar el proveedor" }));
    });
});

module.exports = router;

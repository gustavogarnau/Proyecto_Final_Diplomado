const express = require("express");
const router = express.Router();

const { jsonResponse } = require("../../lib/jsonResponse");

const {
  getMovimientos,
  getMovimientoId,
  postCrearMovimiento,
  putActualizarMovimiento,
  deleteEliminarMovimiento
} = require("../controllers/movimientosController");

// Ruta para obtener todos los movimientos
router.get("/", (req, res) => {
  getMovimientos()
    .then((result) => {
      res.json(jsonResponse(200, { message: "Movimientos:", data: result.rows }));
    })
    .catch((error) => {
      console.error("Error al obtener los movimientos:", error);
      res.json(jsonResponse(500, { error: "Error al obtener los movimientos" }));
    });
});

// Ruta para obtener un movimiento por su ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  getMovimientoId(id)
    .then((result) => {
      if (result.rows.length === 0) {
        res.json(jsonResponse(404, { error: `Movimiento ${id} no encontrado` }));
        return;
      }
      res.json(
        jsonResponse(200, {
          message: `Movimiento ${id} encontrado`,
          data: result.rows,
        })
      );
    })
    .catch((error) => {
      console.error(`Error al obtener el movimiento ${id}:`, error);
      res.json(jsonResponse(500, { error: `Error al obtener el movimiento ${id}` }));
    });
});

// Ruta para crear un nuevo movimiento
router.post("/", (req, res) => {
  postCrearMovimiento(req.body)
    .then((result) => {
      res.json(jsonResponse(200, { message: "Movimiento creado exitosamente", data: result }));
    })
    .catch((error) => {
      console.error("Error al crear el movimiento:", error);
      res.json(jsonResponse(500, { error: "Error al crear el movimiento" }));
    });
});

// Ruta para actualizar un movimiento por su ID
router.put("/:id", (req, res) => {
  putActualizarMovimiento(req.params.id, req.body)
    .then((result) => {
      res.json(
        jsonResponse(200, { message: "Movimiento actualizado exitosamente" })
      );
    })
    .catch((error) => {
      console.error(`Error al actualizar el movimiento ${req.params.id}:`, error);
      res.json(
        jsonResponse(500, { error: `Error al actualizar el movimiento ${req.params.id}` })
      );
    });
});

// Ruta para eliminar un movimiento por su ID
router.delete("/:id", (req, res) => {
  deleteEliminarMovimiento(req.params.id)
    .then((result) => {
      res.json(
        jsonResponse(200, { message: "Movimiento eliminado exitosamente" })
      );
    })
    .catch((error) => {
      console.error(`Error al eliminar el movimiento ${req.params.id}:`, error);
      res.json(jsonResponse(500, { error: `Error al eliminar el movimiento ${req.params.id}` }));
    });
});

module.exports = router;

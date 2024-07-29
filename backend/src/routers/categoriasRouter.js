const express = require("express");
const router = express.Router();

const { jsonResponse } = require("../../lib/jsonResponse");

const {
  getCategorias,
  getCategoriasId,
  posCrearCategoira,
  putActualizarCategoria,
  deleteEliminarCategoria,
} = require("../controllers/categoriaController");

// Ruta de categorias

router.get("/", (req, res) => {
  getCategorias()
    .then((result) => {
      res.json(
        jsonResponse(200, { message: "categorias:", data: result.rows })
      );
    })
    .catch((error) => {
      console.error("Error al obtener las categorias:", error);
      res.json(jsonResponse(500, { error: "Error al obtener las categorias" }));
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  getCategoriasId(id)
    .then((result) => {
      if (result.rows.id === 0) {
        res.json(jsonResponse(404, { error: `Categoria ${id} no encontrada` }));
        return;
      }
      res.json(
        jsonResponse(200, {
          message: `Categoria ${id} encontrada`,
          data: result.rows,
        })
      );
    })
    .catch((error) => {
      console.error("Error al obtener las categorias por id:", error);
      res.json(
        jsonResponse(500, { error: "Error al obtener la categoria por id" })
      );
    });
});

router.post("", (req, res) => {
  posCrearCategoira(req.body)
    .then((result) => {
      res.json(jsonResponse(200, { message: "Categoria creada exitosamente" }));
    })
    .catch((error) => {
      console.error("Error al crear la categoria", error);
      res.json(jsonResponse(500, { error: "Error al crear la categoria" }));
    });
});

router.put("/:id", (req, res) => {
  putActualizarCategoria(req.params.id, req.body)
    .then((result) => {
      res.json(
        jsonResponse(200, { message: "Categoria actualizada exitosamente" })
      );
    })
    .catch((error) => {
      console.error("Error al actualizar la categoria", error);
      res.json(
        jsonResponse(500, { error: "Error al actualizar la categoria" })
      );
    });
});

router.delete("/:id", (req, res) => {
  deleteEliminarCategoria(req.params.id)
    .then((result) => {
      res.json(
        jsonResponse(200, { message: "Categoria eliminada exitosamente" })
      );
    })
    .catch((error) => {
      console.error("Error al eliminar la categoria", error);
      res.json(jsonResponse(500, { error: "Error al eliminar la categoria" }));
    });
});

module.exports = router;

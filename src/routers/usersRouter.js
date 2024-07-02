const express = require("express");
const router = express.Router();

const { jsonResponse } = require("../../lib/jsonResponse");

const {
  getUsers,
  getUserId,
  postCreateUser,
  putUpdateUser,
  deleteUser,
} = require("../controllers/usersController");

router.get("/", (req, res) => {
  getUsers()
    .then((result) => {
      res.json(jsonResponse(200, { message: "usuarios:", data: result.rows }));
    })
    .catch((error) => {
      console.error("Error al obtener los usuarios:", error);
      res.json(jsonResponse(500, { error: "Error al obtener los usuarios" }));
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  getUserId(id)
    .then((result) => {
      if (result.rows.length === 0) {
        res.json(jsonResponse(404, { error: `Usuario ${id} no encontrado` }));
        return;
      }
      res.json(
        jsonResponse(200, {
          message: `usuario ${id} encontrado`,
          data: result.rows,
        })
      );
    })
    .catch((error) => {
      console.error("error al obtener los usuarios por id:", error);
      res.json(
        jsonResponse(500, { error: "Error al obtener el usuario por id" })
      );
    });
});

router.post("/", (req, res) => {
  postCreateUser(req.body)
    .then((result) => {
      res.json(jsonResponse(200, { message: "usuario creado exitosamente" }));
    })
    .catch((error) => {
      console.error("error al crear el usuario", error);
      res.json(jsonResponse(500, { error: "Error al crear el usuario" }));
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  putUpdateUser(id, req.body)
    .then((result) => {
      res.json(
        jsonResponse(200, {
          message: "usuario actualizado exitosamente",
          data: result.rows,
        })
      );
    })
    .catch((error) => {
      console.error("error al actualizar el usuario", error);
      res.json(jsonResponse(500, { error: "Error al actualizar el usuario" }));
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  deleteUser(id)
    .then((result) => {
        if (result.rowCount === 0) {
            res.json(jsonResponse(404, `Usuario ${id} no encontrado`));
            return;
          }
      res.json(
        jsonResponse(200, { message: "usuario eliminado exitosamente" })
      );
    })
    .catch((error) => {
      console.error("error al eliminar el usuario", error);
      res.json(jsonResponse(500, { error: "Error al eliminar el usuario" }));
    });
});

module.exports = router;

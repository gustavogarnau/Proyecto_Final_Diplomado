const express = require("express");
const router = express.Router();

const { jsonResponse } = require("../../lib/jsonResponse");

const {registrar} = require("../controllers/registerController");
const { validatorBodyCreateUser } = require("../../schemas/usersSchema");
const validationParams = require("../../middlewares/validationsMiddleware");

// Ruta de registro
router.post("/",validatorBodyCreateUser, validationParams,  (req, res) => {
    const usuario = req.body;
    registrar(usuario)
      .then((token) => {
        res.json(jsonResponse(200, { message: "Usuario registrado exitosamente. Revisa tu correo para activar tu cuenta.", token }));
      })
      .catch((error) => {
        console.error("error al registrar el usuario", error);
        res.json(jsonResponse(500, { error: "Error al registrar el usuario" }));
      });
  });

  module.exports = router;
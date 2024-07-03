const express = require("express");
const router = express.Router();

const { jsonResponse } = require("../../lib/jsonResponse");

const {activarCuenta} = require("../controllers/activationUserController")

// Ruta de activación
router.get("/:token", (req, res) => {
    const { token } = req.params;
    activarCuenta(token)
      .then((result) => {
        res.json(jsonResponse(200, result));
      })
      .catch((error) => {
        console.error("error al activar la cuenta", error);
        res.json(jsonResponse(500, { error: "Error al activar la cuenta" }));
      });
  });

module.exports = router;  
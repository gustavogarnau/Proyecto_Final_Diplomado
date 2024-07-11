const express = require("express");
const router = express.Router();
const { login } = require("../controllers/loginController");
const { jsonResponse } = require("../../lib/jsonResponse");

router.post("/", async (req, res) => {
<<<<<<< HEAD
  const { correo, password } = req.body;
  try {
    const token = await login(correo, password);
    res.json(jsonResponse(200, { message: "Login exitoso", token }));
  } catch (error) {
    console.log("error:", error)
    res.json(jsonResponse(500, { error: error.mensaje || "Error al iniciar sesión" }));
  }
=======
    const { correo, password } = req.body;
    try {
        const token = await login(correo, password);
        res.json(jsonResponse(200, { message: "Login exitoso", token }));
    } catch (error) {
        console.log(error);
        res.json(jsonResponse(500, { error: error.mensaje || "Error al iniciar sesión" }));
    }
>>>>>>> c4d6824a128ca53c4b58a727b9195ab3aaddae9f
});

module.exports = router;

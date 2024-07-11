const express = require("express");
const router = express.Router();
const { login } = require("../controllers/loginController");
const { jsonResponse } = require("../../lib/jsonResponse");

router.post("/", async (req, res) => {
    const { correo, password } = req.body;
    try {
        const token = await login(correo, password);
        res.json(jsonResponse(200, { message: "Login exitoso", token }));
    } catch (error) {
        console.log(error);
        res.json(jsonResponse(500, { error: error.mensaje || "Error al iniciar sesión" }));
    }
});

module.exports = router;

const express = require("express");
const router = express.Router();

const { jsonResponse } = require("../../lib/jsonResponse");

const {getProveedores, getProveedoresId} = require("../controllers/proveedoresController");

// Ruta de proveedores

router.get("/", (req, res) =>{
    getProveedores()
    .then((result) => {
        res.json(jsonResponse(200, {message: "proveedores:", data: result.rows}));
    })
    .catch((error) => {
        console.error("Error al obtener los proveedores:", error);
        res.json(jsonResponse(500, {error: "Error al obtener los proveedores"}));
    });
});

router.get("/:id", (req,res) =>{
    const id = req.params.id;
    getProveedoresId(id).then((result) =>{
        if(result.rows.id ===0){
            res.json(jsonResponse(404, {error: `Proveedor ${id} no encontrado`}));
            return;
        }
        res.json(jsonResponse(200, {message: `Proveedor ${id} encontrado`, data: result.rows}));
    }).catch((error)=>{
        console.error("Error al obtener los proveedores por id:", error);
        res.json(jsonResponse(500, {error: "Error al obtener el proveedor por id"}));
    })
})

module.exports = router;
const express = require("express")
const router= express.Router()
const {jsonResponse} = require("../../lib/jsonResponse")

const {getMovimientos, getMovimientoId, postCrearMovimiento, putActualizarMovimiento, deleteEliminarMovimiento} = require("../controllers/movimientosController")

router.get("/", (req, res) => {
    getMovimientos()
        .then((result) => {
            res.json(jsonResponse(200, {message: "movimientos:", data: result.rows}))
        })
        .catch((error) => {
            console.error("Error al obtener los movimientos:", error)
            res.json(jsonResponse(500, {error: "Error al obtener los movimientos"}))
        })
});

router.get("/:id", (req, res) => {
    const id = req.params.id
    getMovimientoId(id)
        .then((result) => {
            if (result.rows.length === 0) {
                res.json(jsonResponse(404, {error: `Movimiento ${id} no encontrado`}))
                return
            }
            res.json(jsonResponse(200, {message: `movimiento ${id} encontrado`, data: result.rows}))
        })
        .catch((error) => {
            console.error("error al obtener los movimientos por id:", error)
            res.json(jsonResponse(500, {error: "Error al obtener el movimiento por id"}))
        })
});

router.post("", (req, res) => {
    postCrearMovimiento(req.body)
        .then((result) => {
            res.json(jsonResponse(200, {message: "movimiento creado exitosamente"}))
        })
        .catch((error) => {
            console.error("error al crear el movimiento", error)
            res.json(jsonResponse(500, {error: "Error al crear el movimiento"}))
        })
});

router.put("/:id", (req, res) => {
    const id = req.params.id
    putActualizarMovimiento(id, req.body)
        .then((result) => {
            res.json(jsonResponse(200, {message: `Movimiento ${id} actualizado exitosamente`}))
        })
        .catch((error) => {
            console.error("error al actualizar el movimiento", error)
            res.json(jsonResponse(500, {error: "Error al actualizar el movimiento"}))
        })
});

router.delete("/:id", (req, res) => {
    const id = req.params.id
    deleteEliminarMovimiento(id)
        .then((result) => {
            res.json(jsonResponse(200, {message: `Movimiento ${id} eliminado exitosamente`}))
        })
        .catch((error) => {
            console.error("error al eliminar el movimiento", error)
            res.json(jsonResponse(500, {error: "Error al eliminar el movimiento"}))
        })
});

module.exports = router


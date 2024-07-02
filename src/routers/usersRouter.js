const express = require('express');
const router = express.Router();

const {jsonResponse } = require("../../lib/jsonResponse");

const { getUsers, getUserId, postCreateUser } = require('../controllers/usersController');

router.get("/", (req, res) => {
    getUsers().then((result) => {
        res.json(result.rows);
    }).catch((error) => {
        console.error("Error al obtener los usuarios:", error);
        res.json(jsonResponse(500, { error: "Error al obtener los usuarios" }));
    });
  });

  router.get("/:id", (req, res) => {
        getUserId(req.params.id).then( (result) => {
            res.json(result.rows);    
        }).catch ( (error) => {
            console.error("error al obtener los usuarios por id:", error );
            res.json(jsonResponse(500, { error: "Error al obtener el usuario por id" }));
        });
  });

  router.post("/", (req, res) => {
    postCreateUser(req.body).then( (result) => {
        res.json(result.rows);
    }). catch((error)=>{
        console.error("error al crear el usuario", error)
        res.json(jsonResponse(500, { error: "Error al crear el usuario" }));
    });
  });

  
  module.exports = router;
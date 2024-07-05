const express = require("express");
const app = express();


const cors = require('cors');

require("dotenv").config();

const users =  require("./src/routers/usersRouter");
const register = require("./src/routers/registerRouter");
const login = require("./src/routers/loginRouter");
const activate = require("./src/routers/activationRouter");
const proveedores = require("./src/routers/proveedoresRouter")
const {jwtVerificadorTiempoToken} = require("./src/utils/jwtUtil");

const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());

app.use("/api/users", users);
app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/activate", activate)
app.use("/api/proveedores", proveedores)
app.use(jwtVerificadorTiempoToken);

app.get("/",  (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});

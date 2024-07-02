const express = require("express");
const app = express();


const cors = require('cors');

require("dotenv").config();

const users =  require("./src/routers/usersRouter");

const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());

app.use("/api/users", users);

app.get("/",  (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});

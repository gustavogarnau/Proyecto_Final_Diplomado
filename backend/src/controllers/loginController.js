const Pool = require("../../config/pg");
const { encriptacion, LLAVE_SEGUNDA } = require("../utils/cryptoUtil");
const { compararContrasena } = require("../utils/functionsUtil");
const { crearToken } = require("../utils/jwtUtil");
const bcrypt = require("bcrypt");

const login = async (email = "", contrasenaParam = "") => {
  try {
    const query = "SELECT * FROM usuarios WHERE correo = $1";
    const parametros = [email];
    const resultado = await Pool.query(query, parametros);

    if (resultado.rows.length > 0) {
      const usuario = resultado.rows[0];
      const comparacion = await bcrypt.compare(contrasenaParam, usuario.password);
      if (!comparacion) {
        console.log(!comparacion)
        return Promise.reject({
          mensaje: "El email o la contraseña no son correctas",
        });
      }

      const jwtData = {
        email: usuario.correo,
      };

      const datosEncriptados = encriptacion(JSON.stringify(jwtData));
      const token = crearToken(
        { datos: datosEncriptados, llave: LLAVE_SEGUNDA },
        process.env.SECRET_KEY,
        { expiresIn: "15m" }
      );
      return token;
    } else {
      return Promise.reject({ mensaje: "No existe este usuario." });
    }
  } catch (error) {
    return Promise.reject({ error });
  }
};

module.exports = {
  login,
};

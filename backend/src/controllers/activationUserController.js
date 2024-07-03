const Pool = require("../../config/pg");
const { verificarToken } = require("../utils/jwtUtil");

const activarCuenta = async (correo, token) => {
  try {
    const decoded = verificarToken(token, process.env.SECRET_KEY);
    if (decoded.email !== correo) {
      throw new Error("Correo no coincide con el token.");
    }

    const query = "UPDATE usuarios SET activo = TRUE WHERE correo = $1";
    const parametros = [correo];
    const result = await Pool.query(query, parametros);

    if (result.rowCount === 0) {
      throw new Error("No se encontró el usuario.");
    }

    return { message: "Cuenta activada exitosamente." };
  } catch (error) {
    throw new Error("Token inválido o expirado.");
  }
};

module.exports = {
  activarCuenta
};

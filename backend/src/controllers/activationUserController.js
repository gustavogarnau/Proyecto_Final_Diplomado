const Pool = require("../../config/pg");
const { verificarToken} = require("../utils/jwtUtil"); 

const activarCuenta = async (token) => {
  try {
    const decoded = verificarToken(token, "SECRETO");
    const email = decoded.email;

    const query = "UPDATE usuarios SET activo = TRUE WHERE email = ?";
    const parametros = [email];
    await Pool.query(query, parametros);

    return { message: "Cuenta activada exitosamente." };
  } catch (error) {
    throw new Error("Token inválido o expirado.");
  }
};

module.exports = {
  activarCuenta,
};
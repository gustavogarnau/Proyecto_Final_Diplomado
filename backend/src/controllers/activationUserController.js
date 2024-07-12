const Pool = require("../../config/pg");
const { verificarToken } = require("../utils/jwtUtil");

const activarCuenta = async ( token) => {
  try {
    const decoded = verificarToken(token, process.env.SECRET_KEY);
    const {userId, correo} = decoded;

    const query = "UPDATE usuarios SET activo = TRUE WHERE usuario_id = $1 and correo = $2";
    const parametros = [userId, correo];
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

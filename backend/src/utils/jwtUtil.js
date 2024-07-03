const jwt = require("jsonwebtoken");
const { listaNegra } = require("./constantsUtil");

const crearToken = (jwtData, secreto, expiracion) => {
  const token = jwt.sign(jwtData, secreto, expiracion);
  return token;
};

const verificarTiempoToken = (token) => {
  const { exp } = jwt.decode(token); 
  const tiempoActual = new Date().getTime() / 1000;
  return exp > tiempoActual;
};

const jwtVerificadorTiempoToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    next();
    return null;
  }
  const [, TOKEN] = token.split(" ");

  if (!TOKEN) {
    next();
    return null;
  }

  if (verificarTiempoToken(TOKEN) === false) {
    res.status(401).json({ mensaje: "Token expirado" });
    return null;
  }

  next();
  return null;
};

const verificarToken = (token) => {
  try {
    if (listaNegra.includes(token)) return false;
    const verificado = jwt.verify(token, process.env.SECRET_KEY); 
    return verificado;
  } catch (error) {
    return false;
  }
};


module.exports = {
  crearToken,
  verificarTiempoToken,
  jwtVerificadorTiempoToken,
  verificarToken,
};

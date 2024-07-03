const Pool = require("../../config/pg");
const { crearToken } = require("../utils/jwtUtil");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

const registrar = async (usuario={}) => {
    const { cedula, nombre, apellido, correo, telefono, ciudad, direccion, password } = usuario;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const query = "INSERT INTO usuarios (cedula, nombre, apellido, correo, telefono, ciudad, direccion, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
    const parametros = [cedula, nombre, apellido, correo, telefono, ciudad, direccion, hashedPassword];
    await Pool.query(query, parametros);

  const jwtData = {
    correo
  };

  const token = crearToken(jwtData, process.env.SECRET_KEY, { expiresIn: "1h" });

  // Configurar el transporte de Nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ggarnauarrieta@gmail.com",
      pass: "yfqa utlw dypl wusn",
    },
  });

  // Enlace de activación
  const activationLink = `${process.env.FRONTEND_URL}/activate/${token}`;

  // Configurar el correo
  const mailOptions = {
    from: "gotasdeoro@gmail.com",
    to: correo,
    subject: "Registro Exitoso",
    text: `Gracias por registrarte. Activa tu cuenta haciendo clic en el siguiente enlace: ${activationLink}`,
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Email enviado: " + info.response);
  });

  return token;
};

module.exports = {
  registrar,
};

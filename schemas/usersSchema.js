const { body, param } = require("express-validator");


const validatorParamsUserId = [
  param("id")
    .exists()
    .isNumeric()
    .withMessage("el id debe ser numerico"),
];

const validatorBodyCreateUser = [
  body("cedula")
    .exists()
    .isNumeric()
    .withMessage("la cedula debe ser numerico"),
  body("nombre")
    .exists()
    .isString()
    .withMessage("el nombre debe ser un string"),
  body("apellido")
    .exists()
    .isString()
    .withMessage("el apellido debe ser un string"),
  body("correo")
    .exists()
    .isEmail()
    .withMessage("el correo debe ser un correo"),
  body("telefono")
    .exists()
    .isNumeric()
    .withMessage("el telefono debe ser numerico"),
  body("ciudad")
    .exists()
    .isString()
    .withMessage("la ciudad debe ser un string"),
  body("direccion")
    .exists()
    .isString()
    .withMessage("la direccion debe ser un string"),
  body("password")
    .exists()
    .isString(),
];

const validatorParamasUpdateUser = [
    param("id")
    .notEmpty()
    .withMessage("id no puede estar vacio")
    .isString()
    .withMessage("id tiene que ser un string")
    .toInt(),
];    


const validatorParamasDeleteUser = [
  param("id")
    .exists()
    .isNumeric()
    .withMessage("el id debe ser numerico"),
];

module.export = {
  validatorBodyCreateUser,
    validatorParamsUserId,
    validatorParamasDeleteUser
};

const bcrypt = require("bcrypt");

const compararContrasena = (contrasenaHash, contrasenaNormal) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(contrasenaNormal, contrasenaHash, (err, res) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        if (res) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  };

  module.exports = {
    compararContrasena,
  }
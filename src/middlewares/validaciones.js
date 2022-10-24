const { body } = require ('express-validator');

module.exports = [
<<<<<<< HEAD
    body('firstName')
        .notEmpty().withMessage("Debes colocar tu nombre"),
    body('lastName')
        .notEmpty().withMessage("Debes colocar tu apellido"),
    body("email")
        .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
        .isEmail().withMessage("Debes ingresar un email válido"),
    body('password')
        .notEmpty().withMessage('Tienes que escribir una contraseña'),
=======
    body('firstName').notEmpty().withMessage("Debes colocar tu nombre"),
    body('lastName').notEmpty().withMessage("Debes colocar tu apellido"),
    body("email")
    .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
    .isEmail().withMessage("Debes ingresar un email válido"),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
>>>>>>> master
]
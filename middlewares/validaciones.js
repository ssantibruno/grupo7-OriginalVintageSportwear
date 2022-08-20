const { body } = require ('express-validator');

const validaciones = [
    body('firstName').notEmpty().withMessage("Debes colocar tu nombre").bail(),
    body('lastName').notEmpty().withMessage("Debes colocar tu apellido").bail(),
    body("email").isEmail().withMessage("Debes ingresar un mail valido").bail(),
];

module.exports=validaciones;
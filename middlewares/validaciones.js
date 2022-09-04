const { body } = require ('express-validator');
const { check } = require ('express-validator');

const validaciones = [
    body('firstName').notEmpty().withMessage("Debes colocar tu nombre").bail(),
    body('lastName').notEmpty().withMessage("Debes colocar tu apellido").bail(),
    body("email").isEmail().withMessage("Debes ingresar un mail valido").bail(),
];

const validacionLogin = [
    check('email').isEmail().withMessage("Debes ingresar un mail valido"),
    check('password').isLength({min:8}).withMessage('La contraseña debe tener mìnimo 8 carácteres')
]

module.exports=validaciones;
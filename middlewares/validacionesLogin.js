const { check } = require ('express-validator');

const validacionLogin = [
    check('email').notEmpty().isEmail().withMessage("Debes ingresar un mail valido").bail,
    check('password').notEmpty().isLength({min:4}).withMessage('La contraseña debe tener mínimo 4 carácteres').bail
]

module.exports=validacionLogin;
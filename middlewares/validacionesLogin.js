const { check } = require ('express-validator');

const validacionLogin = [
    check('email').isEmail().withMessage("Debes ingresar un mail valido"),
    check('password').isLength({min:4}).withMessage('La contraseña debe tener mínimo 4 carácteres')
]

module.exports=validacionLogin;
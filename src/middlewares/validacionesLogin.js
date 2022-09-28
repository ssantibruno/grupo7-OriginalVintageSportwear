const { body } = require ('express-validator');

module.exports = [
        body('email')
	        .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
                .isEmail().withMessage("Debes ingresar un email válido"),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña').bail()
                .isLength({min:4}).withMessage('debes tener un largo de 4 digitos'),    
]

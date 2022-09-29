const express= require('express');
const router= express.Router();
const multer= require('multer');
const path = require('path');

const storage=multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "./public/img/usuarios")  },
    filename: function (req, file, cb){
        cb(null, file.fieldname +"-"+ Date.now() + path.extname(file.originalname)) },
});

const uploadFileUser = multer ({storage});

// ************ Controller Require ************
const userController= require("../controllers/userController.js");

//**************Middlewares*********** */
const validacionRegister = require ('../middlewares/validaciones.js');
const validacionLogin = require ('../middlewares/validacionesLogin.js');
const guestMiddleware = require ('../middlewares/guestMiddleware.js');
const authMiddleware = require ('../middlewares/authMiddleware.js');

/****Rutas /USERS/..******** */

router.get('/register', guestMiddleware, userController.register);
router.post('/register', uploadFileUser.any(), validacionRegister, userController.createUser);

router.get('/login',guestMiddleware, userController.login);
router.post('/login', userController.processLogin);

router.get('/profile', authMiddleware, userController.profile);

router.get('/list',userController.usersList);

/* GET - /users/logout */
router.get('/logout', userController.logout);


module.exports = router;


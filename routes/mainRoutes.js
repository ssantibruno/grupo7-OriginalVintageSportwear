const express= require('express');
const router= express.Router();
const multer= require('multer');
const path = require('path');

const validacionRegister = require ('../middlewares/validaciones.js');
const validacionLogin = require ('../middlewares/validacionesLogin.js');
const guestMiddleware = require ('../middlewares/guestMiddleware.js');
const authMiddleware = require ('../middlewares/authMiddleware.js');
const mainController= require("../controllers/mainController.js");
const userController= require("../controllers/userController.js");

router.get('/',mainController.index);
router.get('/index',mainController.index);

const storage=multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "./public/img/usuarios")  },
    filename: function (req, file, cb){
        cb(null, file.fieldname +"-"+ Date.now() + path.extname(file.originalname)) },
});

const uploadFileUser = multer ({storage});

router.get('/register', guestMiddleware, userController.register);
router.post('/register', uploadFileUser.any(), validacionRegister, userController.createUser);

router.get('/login',userController.login);
router.post('/login',validacionLogin, userController.processLogin);

router.get('/users/profile', authMiddleware, userController.profile);

router.get('/usersList',userController.usersList);


router.get('/selecciones',mainController.selecciones);
router.get('/restoDelMundo',mainController.restoDelMundo);
router.get('/equiposAmericanos',mainController.equiposAmericanos);
router.get('/equiposEuropeos',mainController.equiposEuropeos);
router.get('/productCar',mainController.productCar);




module.exports = router;


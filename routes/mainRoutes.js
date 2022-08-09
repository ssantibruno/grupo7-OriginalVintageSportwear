const express= require('express');
const router= express.Router();
const multer= require('multer');
const mainController= require("../controllers/mainController.js");
const userController= require("../controllers/userController.js");

router.get('/',mainController.index);
router.get('/index',mainController.index);

const storage=multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, ".public/img/usuarios")  },
    filename: function (req, file, cb){
        cb(null, '${Date.now()}_img_user${path.extname(file.originalname)}') },
});

const uploadFileUser = multer ({storage});

router.get('/register',userController.register);
router.post('/',uploadFileUser.single('foto'),userController.createUser);

router.get('/login',userController.login);


router.get('/selecciones',mainController.selecciones);
router.get('/restoDelMundo',mainController.restoDelMundo);
router.get('/equiposAmericanos',mainController.equiposAmericanos);
router.get('/equiposEuropeos',mainController.equiposEuropeos);
router.get('/productCar',mainController.productCar);
router.get('/productDetail',mainController.productDetail);
router.get('/productCreateForm',mainController.productCreateForm);
router.get('/productEditForm',mainController.productEditForm);
git 
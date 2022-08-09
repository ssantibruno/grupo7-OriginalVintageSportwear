const express= require('express');
const router= express.Router();
const mainController= require("../controllers/mainController.js");

router.get('/',mainController.index);
router.get('/index',mainController.index);
router.get('/register',mainController.register)
<<<<<<< HEAD
router.get('/login',mainController.login)
router.get('/productCar',mainController.productCar)
router.get('/selecciones',mainController.selecciones)
router.get('/equipos-Americanos',mainController.equiposAmericanos)
router.get('/equipos-Europeos',mainController.equiposEuropeos)
router.get('/resto-del-mundo',mainController.restoDelMundo)
=======
router.get('/login',mainController.login);
router.get('/selecciones',mainController.selecciones);
router.get('/restoDelMundo',mainController.restoDelMundo);
router.get('/equiposAmericanos',mainController.equiposAmericanos);
router.get('/equiposEuropeos',mainController.equiposEuropeos);
router.get('/productCar',mainController.productCar);
router.get('/productDetail',mainController.productDetail);
router.get('/productCreateForm',mainController.productCreateForm);
router.get('/productEditForm',mainController.productEditForm);
>>>>>>> 0460c6dac38315f238917d703ee3e8ce09d0c09b

module.exports = router;
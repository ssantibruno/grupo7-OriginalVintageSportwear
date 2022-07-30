const express= require('express');
const router= express.Router();
const mainController= require("../controllers/mainController.js");

router.get('/',mainController.index);
router.get('/index',mainController.index);
router.get('/register',mainController.register)
router.get('/login',mainController.index);
router.get('/selecciones',mainController.index);
router.get('/restoDelMundo',mainController.restoDelMundo);
router.get('/equiposAmericanos',mainController.equiposAmericanos);
router.get('/equiposEuropeos',mainController.equiposEuropeos);
router.get('/productCar',mainController.productCar);
router.get('/productDetail',mainController.productDetail);
router.get('/productCreateForm',mainController.productCreateForm);
router.get('/productEditForm',mainController.productEditForm);

module.exports = router;
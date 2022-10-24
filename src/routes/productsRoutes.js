const express= require('express');
const router= express.Router();
const multer= require('multer');
const path = require('path');
const productsController = require('../controllers/productsController.js');

const storage=multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "./public/img/products")  },
    filename: function (req, file, cb){
        cb(null, file.fieldname +"-"+ Date.now() + path.extname(file.originalname)) },
});

const uploadFileProducts = multer ({storage});

<<<<<<< HEAD
router.get('/list',productsController.productsList);
router.get('/selecciones',productsController.selecciones);
router.get('/restoDelMundo',productsController.restoDelMundo);
router.get('/equiposAmericanos',productsController.equiposAmericanos);
router.get('/equiposEuropeos',productsController.equiposEuropeos); 
router.get('/detail/:id', productsController.detail);

router.get('/create',productsController.createForm);
router.post('/createNew',uploadFileProducts.single('image'), productsController.createNewProduct);

router.get('/edit/:id',productsController.productEditForm);
router.patch('/edit/:id',uploadFileProducts.single('image'), productsController.productUpdate);

router.delete('/delete/:id',productsController.productDestroy); 
=======
router.get('/', productsController.index);

router.get('/create',productsController.productCreateForm);
router.post('/',uploadFileProducts.any(), productsController.productStore);

router.get('/detail/:id', productsController.productDetail);

router.get('/edit/:id',productsController.productEditForm);
router.patch('/edit/:id',uploadFileProducts.any(), productsController.productUpdate);

router.delete('/delete/:id',productsController.productDestroy);
>>>>>>> master



module.exports = router;
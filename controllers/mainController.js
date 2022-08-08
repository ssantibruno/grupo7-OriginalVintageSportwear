const mainController={
    index: (req,res) => {
        res.render('index')},
    register: (req,res) =>{
        res.render('./users/register.ejs')
    },
    login: (req, res) =>{
        res.render('./users/login.ejs')
    },
    productCar: (req, res) =>{
        res.render('./users/productCar.ejs')
    },
    selecciones: (req, res) =>{
        res.render('./products/selecciones.ejs')
    },
    equiposAmericanos: (req, res)=> {
        res.render('./products/equipos-Americanos.ejs')
    },
    equiposEuropeos: (req, res)=> {
        res.render('./products/equipos-Europeos.ejs')
    },
    restoDelMundo: (req, res)=> {
        res.render('./products/resto-del-mundo.ejs')
    }
         
}

module.exports = mainController;

const mainController={
    index: (req,res) => {
        res.render('index')},
    register: (req,res) =>{
        res.render('./users/register.ejs')
    },
    login: (req,res) =>{
        res.render('./users/login.ejs')
    },
    productCar: (req,res) => {
        res.render('./users/productCar.ejs')
    }
         
}

module.exports = mainController;

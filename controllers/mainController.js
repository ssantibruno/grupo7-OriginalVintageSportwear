const mainController={
    index: (req,res) => {
        res.render('index')},
    register: (req,res) =>{
        res.render('./users/register.ejs')
    },
         
}

module.exports = mainController;

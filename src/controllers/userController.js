///**********************CRUD CON MODELSS */

const path = require ('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { promiseImpl } = require('ejs');

const { validationResult } = require('express-validator');
let session = require ('express-session');
let bcrypt = require ('bcryptjs');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Categories = db.Category;
const Products = db.Product;
const Users = db.User;
const Role =  db.Role;

const userController = {

	list: (req, res) => {
		db.User.findAll({include: ['role']})
			.then(users => {
				res.render('./users/usersList.ejs', {users} )},
				)},
	
	register: (req, res) => {
		res.render('./users/register.ejs' )},

	login: (req, res) => {
			res.render('./users/login.ejs' )},

	createUser: (req, res) => {
		let errors = validationResult(req);

		if (errors.errors.length <= 0) { 
		db.User.create(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                address: req.body.address,
                residencia: req.body.residencia,
                birth_date: req.body.birth_date,
                intereses: req.body.intereses,
				password: bcrypt.hashSync(req.body.password,10),
                notificaciones: req.body.notificaciones,
                role_id: req.body.role_id,
				image: req.file ? req.file.filename : 'fotodefault.png',
            }
        )
		.then((userLogged)=> {
			console.log('hola')
			         // Setear en session el ID del usuario nuevo para auto loguearlo
					 req.session.userId = userLogged.id;
					 // Setear la cookie para mantener al usuario logueado
					 res.cookie('userCookie', userLogged.id, { maxAge: 60000 * 60 });
 			res.redirect('/users/profile')})          
        .catch(error => res.send(error))
     }else{
		return res.render('./users/register.ejs',{
		            errors:errors.mapped(),
		            oldData: req.body
		         }) }
	},

	profile: (req, res) => {
		let userId= req.session.userId

		db.User.findByPk(userId, {include: ['role']})
			.then(userLogged => {
				res.render('./users/profile', {userLogged});
			})
		},

		processLogin: (req, res) => {
			db.User.findOne({where: {email: req.body.email}})

			.then(userToLogin => {
				if (userToLogin != null){
				console.log(userToLogin.dataValues.password)
				console.log(bcrypt.hashSync(req.body.password,10))
				
				let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.dataValues.password);
				console.log(isOkThePassword)
					
				if(isOkThePassword) {
					
					req.session.userLogged = userToLogin;
					res.cookie('userCookie', userToLogin.id, { maxAge: (1000 * 60) * 60 });
						
					return res.redirect('/users/profile');
					} 
					return res.render('./users/login.ejs', {
						errors: {password: {msg: 'Las credenciales son inválidas - Password Incorrecto'},},
						oldData: req.body
						});
					}	
				return res.render('./users/login.ejs', {
						errors: {email: { msg: 'No se encuentra este email en nuestra base de datos'}},
						oldData: req.body
						});
					} ) },



	 
	logout: (req, res) => {
		// Destruir la session
		req.session.destroy();
		// Destruir la cookie
		res.cookie('userCookie', null, { maxAge: 1 });
						
			return res.redirect('../../index');
		},

		productCar: (req, res) => {
			res.render('./users/productCar.ejs' )},	
	
    
}
 

module.exports = userController;


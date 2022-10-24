module.exports = (sequelize, dataTypes) => {
    let alias = 'User'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        firstName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
<<<<<<< HEAD
        address: {
=======
        adress: {
>>>>>>> master
            type: dataTypes.STRING(100),
            allowNull: false
        },
        residencia: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        birth_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        intereses: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
<<<<<<< HEAD
            type: dataTypes.STRING(500),
=======
            type: dataTypes.STRING(100),
>>>>>>> master
            allowNull: false
        },
        notificaciones: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        role_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
<<<<<<< HEAD
        image:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
=======
>>>>>>> master
    };
    let config = {
        tableName: 'users',
        timestamps: false,
    }

    const User = sequelize.define(alias,cols,config);

    User.associate = function (models) {
        User.belongsTo(models.Role, { 
<<<<<<< HEAD
            as: "role",
=======
            as: "Role",
>>>>>>> master
            foreignKey: "role_id"
        })
    }
    
    return User
};
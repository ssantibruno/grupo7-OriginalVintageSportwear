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
        address: {
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
            type: dataTypes.STRING(500),
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
        image:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
    };
    let config = {
        tableName: 'users',
        timestamps: false,
    }

    const User = sequelize.define(alias,cols,config);

    User.associate = function (models) {
        User.belongsTo(models.Role, { 
            as: "role",
            foreignKey: "role_id"
        })
    }
    
    return User
};
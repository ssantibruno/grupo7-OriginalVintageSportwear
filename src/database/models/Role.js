module.exports = (sequelize, dataTypes) => {
    let alias = 'Role'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
    };
    let config = {
        tableName: 'role',
        timestamps: false,
    }

    const Role = sequelize.define(alias,cols,config);
    
    Role.associate = function(models) {
        Role.hasMany(models.User, { 
            as: "user", 
            foreignKey: "role_id"
        })
    }

    return Role
};
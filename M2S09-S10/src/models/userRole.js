const  connection  = require('../database/connection');
const { INTEGER, DATE } = require('sequelize');

const UserRole = connection.define("usersRoles", {
    roleId: {
        type: INTEGER,
        references: {
            model: {
                tableName: 'roles'
            },
            key: 'id'
        },
        allowNull: false
    },
    userId: {
        type: INTEGER,
        references: {
            model: {
                tableName: 'users'
            },
            key: 'id'
        },
        allowNull: false
    },
    createdAt:DATE,
    updatedAt:DATE
},{  paranoid: false, underscored: false })

module.exports = { UserRole }

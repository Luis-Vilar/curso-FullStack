const  connection  = require('../database/connection');
const { INTEGER, DATE } = require('sequelize');

const PermissionRole = connection.define("permissionsRole", {
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
    permissionId: {
        type: INTEGER,
        references: {
            model: {
                tableName: 'permissions'
            },
            key: 'id'
        },
        allowNull: false
    },
    createdAt:DATE, 
    updatedAt:DATE,
    deletedAt:DATE
},{ underscored: false, paranoid: true })

module.exports = { PermissionRole }

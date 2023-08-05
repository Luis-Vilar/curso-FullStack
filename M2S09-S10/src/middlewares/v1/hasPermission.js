const { Permission } = require("../../models/permissions")
const { PermissionRole } = require("../../models/permissionRole")

module.exports = {
    //callback
    hasPermission(permissions) {
        // permite que o middleware receba um array de permissões
        return async (request, response, next) => {
            //imprime as permissões
            console.log(permissions)

            try {
                const roles = await PermissionRole.findAll({
                    where: {
                        roleId: request.payload.roles.map((role) => role.id)
                    },
                    attributes: ['permissionId'],
                    include: [{ model: Permission, as: 'permissions' }]
                })

                const existPermission = roles.some((item) => {
                    const hasPermission = item.permissions.some((p) => {
                        return permissions.includes(p.description)
                    })
                    return hasPermission
                })

                if (!existPermission) {
                    return response.status(401).send({ message: "Você não tem autorização para este recurso." })
                }

                next()
            } catch (error) {
                return response.status(401).send({
                    message: "Autenticação Falhou",
                    cause: error.message
                })
            }
        }
    }

}
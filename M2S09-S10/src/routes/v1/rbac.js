const {
  listPermissions,
  createOnePermission,
  listRoles,
  createOneRole,
  listPermissionsByRole,
  addRoleToUser,
  addPermissionToRole,
} = require("../../controllers/rbac.js");
const rbacRoutes = require("express").Router();
rbacRoutes.post("/createOnePermission", createOnePermission);
rbacRoutes.post("/createOneRole", createOneRole);
rbacRoutes.get("/listPermissions", listPermissions);
rbacRoutes.get("/listRoles", listRoles);
rbacRoutes.get("/listPermissionsByRole/:id", listPermissionsByRole);
rbacRoutes.post("/addRoleToUser", addRoleToUser);
rbacRoutes.post("/addPermissionToRole", addPermissionToRole);
module.exports = rbacRoutes;
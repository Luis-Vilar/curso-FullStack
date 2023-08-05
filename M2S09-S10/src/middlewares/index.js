const {checkToken} = require("./v1/auth");
const {hasPermission} = require("./v1/hasPermission");

module.exports = {
    checkToken,
    hasPermission
};
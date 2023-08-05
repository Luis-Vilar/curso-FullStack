const jwt = require("jsonwebtoken");
const Users = require("../../models/user");

module.exports = {
  async checkToken(req, res, next) {
    try {
      const bearerHeader = req.headers.authorization;
      const bearer = bearerHeader.split(" ");
      const token = bearer[1];
      if (!token) {
        return res.status(401).json({ message: "No token provided" });
      }
      jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: "Invalid token" });
        } else {
          req["payload"] = jwt.decode(token);
          next();
        }
      });
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" , error : error.message}) ;
      
    }
   
  },

};

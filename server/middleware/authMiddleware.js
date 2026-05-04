const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({
        message: "No token, authorization denied"
      });
    }

    const actualToken = token.split(" ")[1];

    const decoded = jwt.verify(
      actualToken,
      process.env.JWT_SECRET || "secretkey"
    );

    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Token is not valid"
    });
  }
};

module.exports = authMiddleware;
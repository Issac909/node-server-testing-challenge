const jwt = require("jsonwebtoken"); 

const { jwtSecret } = require("./secrets");

function restricted (req, res, next)  {
  const { authorization } = req.headers;

  if (authorization) {
    jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Invalid Credentials" });
      } else {
        req.decodedToken = decodedToken;

        next();
      }
    });
  } else {
    res.status(400).json({ message: "User must be logged in for this feature" });
  }
};

module.exports = restricted;
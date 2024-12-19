import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    res
      .status(500)
      .json({ success: false, message: "Not Authorized Login Again" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    } else {
      res
        .status(500)
        .json({ success: false, message: "Not Authorized Login Again" });
    }

    next();
  } catch (e) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid token. Please log in again." });
  }
};

export default userAuth;

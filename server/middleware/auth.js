import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({
          success: false,
          message: "Not Authorized. Please log in again.",
        });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { id: decoded.id };

    next();
  } catch (e) {
    console.error(e.message);
    return res
      .status(401)
      .json({ success: false, message: "Invalid token. Please log in again." });
  }
};

export default userAuth;

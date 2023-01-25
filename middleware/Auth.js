import adminMessages from "../language/en/adminMessages";

export const login = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers.token, "secret");
    req.userData = decoded;
    next();
  } catch (error) {
    return response(req, res);
  }
};
const response = (req, res) => {
  return res.status(401).json({ status: 2, message: adminMessages.authFail });
};

import Auth from "../../model/admin/AuthModel.js";

class AuthController {
  logout = (req, res) => {
    // res.send("logout");
  };

  login = (req, res) => {
    Auth.getByEmailAndPassword(req.body)
      .then((result) => {
        result === null ? res.send("User not found") : res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  forgotPassword = (req, res) => {
    res.render("login/forgot_password", { msg: "" });
  };

  sentOtp = (req, res) => {
    Auth.getByEmailAndMobile(req.body)
      .then((result) => {
        if (result == null)
          res.render("login/forgot_password", {
            msg: "Invalid Email Id & Mobile Number",
          });
        else res.render("login/sent_otp", { msg: "", id: result._id });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  verifyOtp = (req, res) => {
    if (req.body.otp == "12345")
      res.render("login/edit_password", { msg: "", id: req.body.id });
    else res.redirect("forgot_password");
  };

  updatePassword = (req, res) => {
    if (req.body.password == req.body.new_password) {
      Auth.updatePassword(req.body)
        .then((result) => {
          res.render("login/success");
        })
        .catch((err) => {
          console.log(err);
        });
    } else
      res.render("login/edit_password", {
        msg: "Confirm Password are not matched",
        id: req.body.id,
      });
  };
}
export default new AuthController();

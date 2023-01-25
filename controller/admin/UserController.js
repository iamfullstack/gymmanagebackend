import * as url from "url";
import ErrorHelper from "../../helper/errorHelper.js";
import UserModel from "../../model/admin/UserModel.js";
import adminMessages from "../../language/en/adminMessages.js";
const messages = adminMessages.controller.user;

class UserController {
  async add(req, res) {
    const userDetails = await UserModel.getAll();
    res.send(userDetails);
  }

  store = (req, res) => {
    console.log(req.body);
    UserModel.store(req.body)
      .then((result) => {
        res.send({ msg: messages.store });
      })
      .catch((err) => {
        var errors = ErrorHelper.validationError(err);
        for (let key in errors) {
          res.send({ msg: errors[key] });
        }
      });
  };

  list = (req, res) => {
    UserModel.getAll()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getOne = (req, res) => {
    UserModel.getById(url.parse(req.url, true).query)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async edit(req, res) {
    const userDetails = await UserModel.getAll();
    var urlData = url.parse(req.url, true).query;
    UserModel.getById(urlData)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  update = (req, res) => {
    UserModel.update(req.body)
      .then((result) => {
        res.send(messages.update);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  delete = (req, res) => {
    var urlData = url.parse(req.url, true).query;
    UserModel.delete(urlData)
      .then((result) => {
        res.send(messages.delete);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export default new UserController();

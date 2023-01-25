import * as url from "url";
import ErrorHelper from "../../helper/errorHelper.js";
import BranchesModel from "../../model/admin/BranchesModel.js";
import adminMessages from "../../language/en/adminMessages.js";
const messages = adminMessages.controller.branch;

class BranchesController {
  async add(req, res) {
    const branchDetails = await BranchesModel.getAll();
    res.send(branchDetails);
  }

  store = (req, res) => {
    console.log(req.body);
    BranchesModel.store(req.body)
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
    BranchesModel.getAll()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async edit(req, res) {
    const branchDetails = await BranchesModel.getAll();
    var urlData = url.parse(req.url, true).query;
    BranchesModel.getById(urlData)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  update = (req, res) => {
    BranchesModel.update(req.body)
      .then((result) => {
        res.send(messages.update);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  delete = (req, res) => {
    var urlData = url.parse(req.url, true).query;
    BranchesModel.delete(urlData)
      .then((result) => {
        res.send(messages.delete);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export default new BranchesController();

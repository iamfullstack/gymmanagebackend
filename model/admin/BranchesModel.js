import "../../connection.js";
import adminMessages from "../../language/en/adminMessages.js";
import BranchesSchema from "../../schema/Branches.js";

class BranchesModel {
  store(branchDetails) {
    return new Promise((resolve, reject) => {
      console.log(branchDetails);
      var obj = BranchesSchema(branchDetails);
      obj.save((err, result) => {
        err
          ? reject({
              status: 0,
              message: err,
              data: [],
            })
          : resolve({
              status: 1,
              message: adminMessages.success,
              data: result,
            });
      });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      BranchesSchema.find({}, (err, result) => {
        err
          ? reject({
              status: 0,
              message: adminMessages.error,
              data: [],
            })
          : resolve({
              status: 1,
              message: adminMessages.success,
              data: result,
            });
      });
    });
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      BranchesSchema.findOne(id, (err, result) => {
        err
          ? reject({
              status: 0,
              message: err,
              data: [],
            })
          : resolve({
              status: 1,
              message: adminMessages.success,
              data: result,
            });
      });
    });
  }

  update(branchDetails) {
    return new Promise((resolve, reject) => {
      BranchesSchema.updateOne(
        { _id: branchDetails._id },
        branchDetails,
        (err, result) => {
          err
            ? reject({
                status: 0,
                message: err,
                data: [],
              })
            : resolve({
                status: 1,
                message: adminMessages.success,
                data: result,
              });
        }
      );
    });
  }
  delete(condition) {
    return new Promise((resolve, reject) => {
      BranchesSchema.remove(condition, (err, result) => {
        err
          ? reject({
              status: 0,
              message: err,
              data: [],
            })
          : resolve({
              status: 1,
              message: adminMessages.success,
              data: result,
            });
      });
    });
  }
}
export default new BranchesModel();

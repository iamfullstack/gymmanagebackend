import "../../connection.js";
import adminMessages from "../../language/en/adminMessages.js";
import UsersSchema from "../../schema/UsersSchema.js";

class UserModel {
  store(userDetails) {
    return new Promise((resolve, reject) => {
      console.log(userDetails);
      var obj = UsersSchema(userDetails);
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
      UsersSchema.find({}, (err, result) => {
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

  getById(id) {
    return new Promise((resolve, reject) => {
      UsersSchema.findOne(id, (err, result) => {
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
  update(userDetails) {
    return new Promise((resolve, reject) => {
      UsersSchema.updateOne(
        { _id: userDetails._id },
        userDetails,
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
      UsersSchema.remove(condition, (err, result) => {
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
export default new UserModel();

import "../../connection.js";
import UsersSchema from "../../schema/UsersSchema.js";

class AuthModel {
  getByEmailAndPassword(loginDetails) {
    return new Promise((resolve, reject) => {
      UsersSchema.findOne(loginDetails, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  }
  getByEmailAndMobile(loginDetails) {
    return new Promise((resolve, reject) => {
      UsersSchema.findOne(loginDetails, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  }
  updatePassword(userDetails) {
    return new Promise((resolve, reject) => {
      UsersSchema.updateOne(
        { _id: userDetails._id },
        userDetails,
        (err, result) => {
          err ? reject(err) : resolve(result);
        }
      );
    });
  }
}
export default new AuthModel();

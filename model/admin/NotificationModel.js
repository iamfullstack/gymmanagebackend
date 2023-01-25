import "../../connection.js";
import adminMessages from "../../language/en/adminMessages.js";
import NotificationSchema from "../../schema/Notification.js";

class NotificationModel {
  store(notificationDetails) {
    return new Promise((resolve, reject) => {
      console.log(notificationDetails);
      var obj = NotificationSchema(notificationDetails);
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
      NotificationSchema.find({}, (err, result) => {
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
      NotificationSchema.findOne(id, (err, result) => {
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
  update(notificationDetails) {
    return new Promise((resolve, reject) => {
      NotificationSchema.updateOne(
        { _id: notificationDetails._id },
        notificationDetails,
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
      NotificationSchema.remove(condition, (err, result) => {
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
export default new NotificationModel();

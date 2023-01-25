import "../../connection.js";
import adminMessages from "../../language/en/adminMessages.js";
import EventsSchema from "../../schema/Events.js";

class EventsModel {
  store(eventDetails) {
    return new Promise((resolve, reject) => {
      console.log(eventDetails);
      var obj = EventsSchema(eventDetails);
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
      EventsSchema.find({}, (err, result) => {
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
      EventsSchema.findOne(id, (err, result) => {
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

  update(eventDetails) {
    return new Promise((resolve, reject) => {
      EventsSchema.updateOne(
        { _id: eventDetails._id },
        eventDetails,
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
      EventsSchema.remove(condition, (err, result) => {
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
export default new EventsModel();

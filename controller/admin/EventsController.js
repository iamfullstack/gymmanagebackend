import * as url from "url";
import ErrorHelper from "../../helper/errorhelper.js";
import EventsModel from "../../model/admin/EventsModel.js";
import adminMessages from "../../language/en/adminMessages.js";
const messages = adminMessages.controller.event;

class EventsController {
  async add(req, res) {
    const eventDetails = await EventsModel.getAll();
    res.send(eventDetails);
  }

  store = (req, res) => {
    console.log(req.body);
    EventsModel.store(req.body)
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
    EventsModel.getAll()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async edit(req, res) {
    const eventDetails = await EventsModel.getAll();
    var urlData = url.parse(req.url, true).query;
    EventsModel.getById(urlData)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  update = (req, res) => {
    EventsModel.update(req.body)
      .then((result) => {
        res.send(messages.update);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  delete = (req, res) => {
    var urlData = url.parse(req.url, true).query;
    EventsModel.delete(urlData)
      .then((result) => {
        res.send(messages.delete);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export default new EventsController();

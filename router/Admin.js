import express from "express";
import UserController from "../controller/admin/UserController.js";
import BranchesController from "../controller/admin/BranchesController.js";

const router = express.Router();

router.get("/user/list", UserController.list);
router.get("/user/add", UserController.add);
router.get("/user/getOne", UserController.getOne);
router.post("/user/store", UserController.store);
router.get("/user/edit", UserController.edit);
router.post("/user/update", UserController.update);
router.get("/user/delete", UserController.delete);

router.get("/branch/list", BranchesController.list);
router.get("/branch/add", BranchesController.add);
router.post("/branch/store", BranchesController.store);
router.get("/branch/edit", BranchesController.edit);
router.post("/branch/update", BranchesController.update);
router.get("/branch/delete", BranchesController.delete);

export default router;

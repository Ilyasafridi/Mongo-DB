import express from "express";
import {
  addUserController,
  deleteUser,
  login,
  updateUser,
} from "../controllers/userControler.js";
const router = express.Router();

router.post("/addUser", addUserController);
router.put("/user/:id", updateUser);
router.delete("/user/:userId", deleteUser);

router.post("/login", login);

export default router;


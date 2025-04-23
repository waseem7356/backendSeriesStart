import { Router } from "express";
import userController from '../Controllers/user.controller.js';

const router = Router();
router.route("/register").post(userController);
export default router;
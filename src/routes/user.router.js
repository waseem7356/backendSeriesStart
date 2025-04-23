import { Router } from "express";
import registerUser from '../Controllers/user.controller.js'; // Correct import
import { upload } from '../middleswares/multer.middle.js';
// Correct path

const router = Router();

router.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "gallery", maxCount: 8 },
    ]),
    registerUser // Use the correct handler
);

export default router;
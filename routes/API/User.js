import { storeuser, getuser } from "../../controller/User.js";
import express from "express";
const router = express.Router();

router.post("registerform",storeuser);
router.get("getregister",getuser);

export default router
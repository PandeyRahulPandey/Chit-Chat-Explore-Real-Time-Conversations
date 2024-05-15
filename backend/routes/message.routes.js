import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
// protect the route before running the sendMessage function--> a kind of authorization.
// protectRoute is a function in middlewares file.
router.post("/send/:id", protectRoute, sendMessage);  //sendMessage is a function.

export default router;

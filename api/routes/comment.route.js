import express from "express";
import { createComment, deleteComment, getPostComments } from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/:postId",getPostComments);
router.post("/:postId",createComment);
router.delete("/:id",deleteComment);

export default router;
const express = require('express');
const { addComment, replyToComment } = require("../controllers/commentController.js");
const authMiddleware = require("../middleware/authMiddleware.js");
const router = express.Router();

router.post('/lectures/:lectureId/comments', authMiddleware, addComment);
router.post('/comments/:commentId/replies', authMiddleware, replyToComment);

module.exports = router;

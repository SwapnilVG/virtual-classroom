const Comment = require('../models/Comment.js');
const Lecture = require('../models/Lecture.js');

const addComment = async (req, res) => {
  try {
    const { lectureId } = req.params;
    const { content } = req.body;
    const newComment = await Comment.create({
      user: req.user._id,
      content,
      lecture: lectureId,
    });
    const lecture = await Lecture.findById(lectureId);
    lecture.comments.push(newComment._id);
    await lecture.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
};

// Reply to a comment
const replyToComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { content } = req.body;
    const parentComment = await Comment.findById(commentId);
    const reply = await Comment.create({ user: req.user._id, content });
    parentComment.replies.push(reply._id);
    await parentComment.save();
    res.status(201).json(reply);
  } catch (error) {
    res.status(500).json({ error: 'Failed to reply to comment' });
  }
};

module.exports = { addComment, replyToComment };

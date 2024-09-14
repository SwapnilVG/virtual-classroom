const mongoose = require('mongoose');

const LectureSchema = new mongoose.Schema({
  title: String,
  content: String,
  session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Lecture', LectureSchema);

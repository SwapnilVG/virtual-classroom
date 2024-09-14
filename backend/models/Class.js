const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  name: String,
  description: String,
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  units: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Unit' }],
});

module.exports = mongoose.model('Class', ClassSchema);

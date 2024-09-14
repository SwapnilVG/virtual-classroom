const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  title: String,
  description: String,
  unit: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit' },
  lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' }]
});

module.exports = mongoose.model('Session', SessionSchema);

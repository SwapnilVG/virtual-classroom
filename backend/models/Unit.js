const mongoose = require('mongoose');

const UnitSchema = new mongoose.Schema({
  name: String,
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session' }]
});

module.exports = mongoose.model('Unit', UnitSchema);

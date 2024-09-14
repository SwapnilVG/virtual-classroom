const Class = require('../models/Class.js');
const Unit = require('../models/Unit.js');
const Session = require('../models/Session.js');

const createClass = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newClass = await Class.create({ name, description, instructor: req.user._id });
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create class' });
  }
};

// Fetch all classes
const getAllClasses = async (req, res) => {
  const classes = await Class.find().populate('units');
  res.json(classes);
};

// Enroll in a class
const enrollInClass = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const classData = await Class.findById(req.params.classId);
    user.enrolledClasses.push(classData._id);
    await user.save();
    res.json({ message: 'Enrolled successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Enrollment failed' });
  }
};

module.exports = { createClass, getAllClasses, enrollInClass };

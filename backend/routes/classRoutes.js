const express = require('express');
const { createClass, getAllClasses, enrollInClass } = require("../controllers/classController.js");
const authMiddleware = require("../middleware/authMiddleware.js")
const router = express.Router();

router.post('/classes', authMiddleware, createClass);
router.get('/classes', authMiddleware, getAllClasses);
router.post('/classes/:classId/enroll', authMiddleware, enrollInClass);

module.exports = router;

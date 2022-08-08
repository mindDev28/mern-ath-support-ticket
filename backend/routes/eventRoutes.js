const express = require('express');
const router = express.Router();
const {
  createEvent,
  getEvents,
  getEvent,
  deleteEvent,
  updateEvent,
} = require('../controllers/eventController');

const { protect } = require('../middleware/authMiddleware');

// Re-route into note router
// const bookingRouter = require('./bookingRoutes');
// router.use('/:eventId/bookings', bookingRouter);

router.route('/').get(protect, getEvents).post(protect, createEvent);

router
  .route('/:id')
  .get(protect, getEvent)
  .delete(protect, deleteEvent)
  .put(protect, updateEvent);

module.exports = router;

const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Event = require('../models/eventModel');

// @desc   Get classes
// @route  GET /api/classes
// @access Private

const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find();

  res.status(200).json(events);
});

// @desc   Get class
// @route  GET /api/classes/:id
// @access Private
const getEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (!event) {
    res.status(404);
    throw new Error('Class not found');
  }

  res.status(200).json(event);
});

// @desc   Create new class
// @route  POST /api/classes
// @access Private

const createEvent = asyncHandler(async (req, res) => {
  const { date, title, description, status } = req.body;

  if (!date || !title || !description || !status) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const event = await Event.create({
    date,
    title,
    description,
    user: req.user.id,
    status,
  });

  res.status(201).json(event);
});

// @desc   Delete class
// @route  DELETE /api/classes/:id
// @access Private
const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (!event) {
    res.status(404);
    throw new Error('Class not found');
  }

  await event.remove();

  res.status(200).json({ success: true });
});

// @desc   Update ticket
// @route  PUT /api/tickets/:id
// @access Private
const updateEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (!event) {
    res.status(404);
    throw new Error('Class not found');
  }

  const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedEvent);
});

module.exports = {
  createEvent,
  getEvents,
  getEvent,
  deleteEvent,
  updateEvent,
};

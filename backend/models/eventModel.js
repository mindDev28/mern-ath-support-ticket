const mongoose = require('mongoose');

const classSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    date: {
      type: Date,
      // required: [true, 'Please select a date'],
    },
    time: {
      type: String,
      // required: [true, 'Please select a time'],
    },
    title: {
      type: String,
      required: [true, 'Please select a product'],
    },
    description: {
      type: String,
      //  required: [true, 'Please enter a description of the issue'],
    },
    status: {
      type: String,
      // required: true,
      enum: ['Open', 'Closed', 'Cancelled'],
      default: 'Open',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Event', classSchema);

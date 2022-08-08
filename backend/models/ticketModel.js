const mongoose = require('mongoose')


const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        enum: ['iPhone', 'MacBook Pro', 'iMac', 'iPad']
    },
    product: {
        type: String,
        required: [true, 'Please select a product'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Please enter a description of the issue'],
    },
    status: {
        type: String,
        required: true,
        enum: ['New', 'Open', 'Closed'],
        default: 'New'
    }
    
    },
    {
    timestamps: true,
    }
)

module.exports = mongoose.model('Ticket', ticketSchema)
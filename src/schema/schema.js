const mongoose = require('mongoose');
const { Schema } = mongoose;

// Creating a schema for storing movie ticket booked details.
const bookMovieSchema = new Schema({
    movie: { type: String, require: true },
    slot: { type: String, require: true },
    seats: {
        A1: { type: Number },
        A2: { type: Number },
        A3: { type: Number },
        A4: { type: Number },
        D1: { type: Number },
        D2: { type: Number }
    }
}, {timestamps: true})


module.exports = mongoose.model('bookmovietickets', bookMovieSchema);

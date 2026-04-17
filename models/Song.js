const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    duration: { type: Number, required: true }, // Duration in seconds
    url: { type: String, required: true },
    imageUrl: { type: String },
    lastfmUrl: { type: String },
    playCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Song', songSchema);
const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// LastFM API Key
const LASTFM_API_KEY = 'YOUR_LASTFM_API_KEY';

// Routes
// Songs Route
app.get('/api/songs', (req, res) => {
    res.json({ message: 'List of songs' });
});

// Search Route
app.get('/api/search', async (req, res) => {
    const { query } = req;
    try {
        const response = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${query.track}&api_key=${LASTFM_API_KEY}&format=json`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from LastFM API' });
    }
});

// Playlists Route
app.get('/api/playlists', (req, res) => {
    res.json({ message: 'List of playlists' });
});

// Authentication Route
app.post('/api/auth', (req, res) => {
    const { username, password } = req.body;
    // Add your authentication logic here
    res.json({ message: 'Authentication successful' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
const express = require('express');
const app = express();
const PORT = 5000; // ✅ FIXED PORT

app.use(express.json()); // IMPORTANT

app.get('/', (req, res) => {
    res.send('Welcome to Node API');
});

app.get('/food', (req, res) => {
    res.send('Food API working');
});

app.post('/order', (req, res) => {
    res.send('Order API working');
});

// ✅ IMPORTANT: bind to 0.0.0.0
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

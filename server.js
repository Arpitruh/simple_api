const express = require('express');
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Hello, this is a GET request!');
});

app.post('/api', (req, res) => {
    const data = req.body;
    res.send(`You sent: ${JSON.stringify(data)}`);
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

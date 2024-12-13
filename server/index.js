const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Welcome to the backend!' });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
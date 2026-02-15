const express = require('express');
const cors = require('cors');
const linksRouter = require('./routes/links');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/links', linksRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});

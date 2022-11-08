const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.POST || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('server site running now')
})

app.listen(port, () => {
    console.log(`care server running on ${port}`);
})
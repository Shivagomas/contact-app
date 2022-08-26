const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('config');
const bodyParser = require('body-parser');
const cors = require('cors')

const contact = require('./routes/contact');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))

app.use(cors());

app.use("/api/contact", contact);

const db = config.get('db');
mongoose.connect(db)
    .then(() => console.log(`Connecting to ${db}`))
    .catch(err => console.log(err.message))

const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Listening the port ${port}`));

module.exports = server;

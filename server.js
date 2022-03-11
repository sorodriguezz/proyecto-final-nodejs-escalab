const express = require('express');
const connectDb = require('./database');
const morgan = require('morgan');
const cors = require('cors');
const { readdirSync } = require('fs');

require('dotenv').config();

const app = express();

connectDb();

app.use(morgan('dev'));
app.use(express.json({limit: '2mb'}));
app.use(cors());

readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
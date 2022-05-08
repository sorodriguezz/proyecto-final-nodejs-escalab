const express = require('express');
const connectDb = require('./database');
const morgan = require('morgan');
const cors = require('cors');
const { readdirSync } = require('fs');
const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerConfig = require('./documentation/swagger.config.json');

const {createRoles,createUserAdmin} = require('./helpers/initialSetup');

require('dotenv').config();

const app = express();

createRoles()
    .then(() => createUserAdmin())
    .catch(error => console.error(error));

connectDb();

app.use(morgan('dev'));
app.use(express.json({limit: '2mb'}));
const swaggerDocs = swaggerJsdoc(swaggerConfig);
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs, { explorer: true }));
app.use(cors());

readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));